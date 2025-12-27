import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users, exercises, testSessions, userProgress, lessons } from '@/db/schema';
import { eq, and, gt, sql } from 'drizzle-orm';
import { createHash } from 'crypto';

// Types
interface SubmitRequest {
    session_id: string;
    api_key: string;
    outputs: { id: number; output: unknown }[];
    outputs_hash: string;
}

interface SubmitResponse {
    success: boolean;
    message: string;
    xp_awarded?: number;
    passed?: number;
    total?: number;
}

// POST /api/submit - Verify CLI submission with hash
export async function POST(request: NextRequest) {
    try {
        const body: SubmitRequest = await request.json();
        const { session_id, api_key, outputs, outputs_hash } = body;

        // Validate required fields
        if (!session_id || !api_key || !outputs || !outputs_hash) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Missing required fields: session_id, api_key, outputs, outputs_hash'
                },
                { status: 400 }
            );
        }

        // Validate API key and get user
        const user = await db
            .select()
            .from(users)
            .where(eq(users.apiKey, api_key))
            .limit(1);

        if (!user.length) {
            return NextResponse.json(
                { success: false, message: 'Invalid API key' },
                { status: 401 }
            );
        }

        // Get session
        const session = await db
            .select()
            .from(testSessions)
            .where(
                and(
                    eq(testSessions.id, session_id),
                    eq(testSessions.userId, user[0].id),
                    gt(testSessions.expiresAt, new Date())
                )
            )
            .limit(1);

        if (!session.length) {
            return NextResponse.json(
                { success: false, message: 'Invalid or expired session' },
                { status: 400 }
            );
        }

        const currentSession = session[0];

        // Verify hash
        // Compute hash from user's outputs (sorted by id to ensure order)
        const sortedOutputs = [...outputs].sort((a, b) => a.id - b.id);
        const userOutputValues = sortedOutputs.map(o => o.output);
        const computedHash = createHash('sha256')
            .update(JSON.stringify(userOutputValues))
            .digest('hex');

        const isValid = computedHash === currentSession.expectedHash;

        console.log(`[SUBMIT] Session: ${session_id}, Valid: ${isValid}, Hash match: ${computedHash === currentSession.expectedHash}`);

        if (!isValid) {
            // Delete session to prevent replay
            await db.delete(testSessions).where(eq(testSessions.id, session_id));

            return NextResponse.json({
                success: false,
                message: 'Test results do not match expected outputs',
                passed: 0,
                total: outputs.length,
            });
        }

        // Success! Award XP
        const exercise = await db
            .select()
            .from(exercises)
            .where(eq(exercises.id, currentSession.exerciseId))
            .limit(1);

        const xpAwarded = exercise[0]?.xpReward ?? 100;

        // Update user XP
        await db
            .update(users)
            .set({
                xp: sql`${users.xp} + ${xpAwarded}`,
                updatedAt: new Date(),
            })
            .where(eq(users.id, user[0].id));

        // Find lesson linked to this exercise and update progress
        const lesson = await db
            .select()
            .from(lessons)
            .where(eq(lessons.exerciseId, currentSession.exerciseId))
            .limit(1);

        if (lesson.length) {
            // Upsert user progress
            await db
                .insert(userProgress)
                .values({
                    userId: user[0].id,
                    lessonId: lesson[0].id,
                    status: 'completed',
                    completedAt: new Date(),
                })
                .onConflictDoUpdate({
                    target: [userProgress.userId, userProgress.lessonId],
                    set: {
                        status: 'completed',
                        completedAt: new Date(),
                    },
                });
        }

        // Clean up session
        await db.delete(testSessions).where(eq(testSessions.id, session_id));

        return NextResponse.json({
            success: true,
            message: 'Mission complete!',
            xp_awarded: xpAwarded,
            passed: outputs.length,
            total: outputs.length,
        });
    } catch (error) {
        console.error('[SUBMIT ERROR]', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
