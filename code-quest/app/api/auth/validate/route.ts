import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

// GET /api/auth/validate?api_key=<key>
// Validates an API key and returns user info
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const apiKey = searchParams.get('api_key');

        if (!apiKey) {
            return NextResponse.json(
                { valid: false, error: 'Missing api_key parameter' },
                { status: 400 }
            );
        }

        // Look up user by API key
        const user = await db
            .select({
                id: users.id,
                username: users.username,
                email: users.email,
            })
            .from(users)
            .where(eq(users.apiKey, apiKey))
            .limit(1);

        if (!user.length) {
            return NextResponse.json(
                { valid: false, error: 'Invalid API key' },
                { status: 401 }
            );
        }

        return NextResponse.json({
            valid: true,
            username: user[0].username || user[0].email?.split('@')[0] || 'Agent',
            email: user[0].email,
        });
    } catch (error) {
        console.error('[AUTH VALIDATE ERROR]', error);
        return NextResponse.json(
            { valid: false, error: 'Server error' },
            { status: 500 }
        );
    }
}
