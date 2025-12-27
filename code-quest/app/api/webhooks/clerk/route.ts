import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { randomBytes } from 'crypto';

// Generate a unique API key
function generateApiKey(): string {
    const randomPart = randomBytes(12).toString('base64url');
    return `cq_${randomPart}`;
}

export async function POST(req: Request) {
    // Get the webhook secret from env
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        console.error('Missing CLERK_WEBHOOK_SECRET');
        return new Response('Missing webhook secret', { status: 500 });
    }

    // Get the headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get('svix-id');
    const svix_timestamp = headerPayload.get('svix-timestamp');
    const svix_signature = headerPayload.get('svix-signature');

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Missing svix headers', { status: 400 });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Verify the webhook
    const wh = new Webhook(WEBHOOK_SECRET);
    let evt: WebhookEvent;

    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error('Webhook verification failed:', err);
        return new Response('Invalid signature', { status: 400 });
    }

    // Handle the event
    const eventType = evt.type;

    if (eventType === 'user.created') {
        const { id, email_addresses, username, first_name } = evt.data;
        const primaryEmail = email_addresses?.[0]?.email_address;

        if (!primaryEmail) {
            console.error('No email found for user:', id);
            return new Response('No email found', { status: 400 });
        }

        // Generate unique API key
        const apiKey = generateApiKey();

        // Create user in our database
        try {
            await db.insert(users).values({
                clerkId: id,
                email: primaryEmail,
                username: username || first_name || primaryEmail.split('@')[0],
                level: 1,
                xp: 0,
                apiKey: apiKey,
            });

            console.log(`[WEBHOOK] User created: ${primaryEmail} with API key: ${apiKey.substring(0, 8)}...`);
        } catch (error) {
            console.error('Failed to create user:', error);
            return new Response('Failed to create user', { status: 500 });
        }
    }

    if (eventType === 'user.updated') {
        const { id, email_addresses, username, first_name } = evt.data;
        const primaryEmail = email_addresses?.[0]?.email_address;

        try {
            await db
                .update(users)
                .set({
                    email: primaryEmail,
                    username: username || first_name,
                    updatedAt: new Date(),
                })
                .where(eq(users.clerkId, id));

            console.log(`[WEBHOOK] User updated: ${primaryEmail}`);
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    }

    if (eventType === 'user.deleted') {
        const { id } = evt.data;

        try {
            await db.delete(users).where(eq(users.clerkId, id as string));
            console.log(`[WEBHOOK] User deleted: ${id}`);
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    }

    return new Response('OK', { status: 200 });
}
