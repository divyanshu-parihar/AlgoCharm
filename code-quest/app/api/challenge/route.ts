import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users, exercises, testSessions } from '@/db/schema';
import { eq, and, gt } from 'drizzle-orm';
import { createHash, randomUUID } from 'crypto';
import { checkRateLimit, rateLimitHeaders } from '@/lib/rate-limit';

// Types
interface TestCase {
    id: number;
    input: unknown;
    expected?: unknown; // Only included for public tests
}

interface ChallengeResponse {
    session_id: string;
    exercise_id: string;
    inputs: TestCase[];
    expires_at: string;
}

// GET /api/challenge?mission_id=<id>
// Issues a test session with hidden inputs for the user to solve locally
export async function GET(request: NextRequest) {
    try {
        // Rate limiting with Redis
        const rateLimit = await checkRateLimit(request, '/api/challenge');

        if (!rateLimit.success) {
            return NextResponse.json(
                { error: 'Rate limit exceeded. Try again later.' },
                {
                    status: 429,
                    headers: rateLimitHeaders(rateLimit),
                }
            );
        }

        const searchParams = request.nextUrl.searchParams;
        const missionId = searchParams.get('mission_id');
        const apiKey = searchParams.get('api_key');

        // Validate required params
        if (!missionId) {
            return NextResponse.json(
                { error: 'Missing mission_id parameter' },
                { status: 400 }
            );
        }

        if (!apiKey) {
            return NextResponse.json(
                { error: 'Missing api_key parameter' },
                { status: 401 }
            );
        }

        // Validate API key and get user
        const user = await db
            .select()
            .from(users)
            .where(eq(users.apiKey, apiKey))
            .limit(1);

        if (!user.length) {
            return NextResponse.json(
                { error: 'Invalid API key' },
                { status: 401 }
            );
        }

        // Get exercise with test cases
        const exercise = await db
            .select()
            .from(exercises)
            .where(eq(exercises.id, missionId))
            .limit(1);

        if (!exercise.length) {
            return NextResponse.json(
                { error: 'Mission not found' },
                { status: 404 }
            );
        }

        const ex = exercise[0];

        // Parse test cases
        const publicTests = (ex.publicTests as TestCase[]) || [];
        const hiddenTests = (ex.hiddenTests as TestCase[]) || [];

        // Combine and shuffle tests (optional: could select random subset)
        const allTests: Array<{ id: number; input: unknown; expected?: unknown }> = [
            ...publicTests.map((t, i) => ({ id: i, input: t.input, expected: t.expected })),
            ...hiddenTests.map((t, i) => ({ id: publicTests.length + i, input: t.input })),
        ];

        // Compute expected hash (SHA256 of all correct outputs in order)
        const correctOutputs = [
            ...publicTests.map(t => t.expected),
            ...hiddenTests.map(t => (t as { expected: unknown }).expected),
        ];
        const expectedHash = createHash('sha256')
            .update(JSON.stringify(correctOutputs))
            .digest('hex');

        // Create session (30 min TTL)
        const sessionId = randomUUID();
        const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

        await db.insert(testSessions).values({
            id: sessionId,
            userId: user[0].id,
            exerciseId: missionId,
            testInputs: allTests.map(t => ({ id: t.id, input: t.input })),
            expectedHash,
            expiresAt,
        });

        // Return challenge (inputs only, no expected outputs for hidden tests)
        const response: ChallengeResponse = {
            session_id: sessionId,
            exercise_id: missionId,
            inputs: allTests.map(t => ({
                id: t.id,
                input: t.input,
                ...(t.expected !== undefined ? { expected: t.expected } : {}),
            })),
            expires_at: expiresAt.toISOString(),
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('[CHALLENGE ERROR]', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
