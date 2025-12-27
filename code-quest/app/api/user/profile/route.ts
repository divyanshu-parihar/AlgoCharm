import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { randomBytes } from 'crypto';

// Generate a unique API key
function generateApiKey(): string {
    const randomPart = randomBytes(12).toString('base64url');
    return `cq_${randomPart}`;
}

// GET /api/user/profile - Get current user's profile including API key
export async function GET() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    // Find user in our database
    let user = await db
        .select()
        .from(users)
        .where(eq(users.clerkId, userId))
        .limit(1);

    // If user doesn't exist, create them (fallback for users who signed up before webhook)
    if (!user.length) {
        const apiKey = generateApiKey();
        const result = await db
            .insert(users)
            .values({
                clerkId: userId,
                email: 'unknown@codequest.dev', // Will be updated by webhook or manually
                username: 'N**d',
                level: 1,
                xp: 0,
                apiKey: apiKey,
            })
            .returning();
        user = result;
    }

    // If user exists but has no API key, generate one
    if (!user[0].apiKey) {
        const apiKey = generateApiKey();
        await db
            .update(users)
            .set({ apiKey })
            .where(eq(users.id, user[0].id));
        user[0].apiKey = apiKey;
    }

    return NextResponse.json({
        id: user[0].id,
        username: user[0].username,
        email: user[0].email,
        level: user[0].level,
        xp: user[0].xp,
        apiKey: user[0].apiKey,
    });
}

// POST /api/user/profile - Regenerate API key
export async function POST() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    const newApiKey = generateApiKey();

    await db
        .update(users)
        .set({
            apiKey: newApiKey,
            updatedAt: new Date(),
        })
        .where(eq(users.clerkId, userId));

    return NextResponse.json({
        apiKey: newApiKey,
        message: 'API key regenerated successfully',
    });
}
