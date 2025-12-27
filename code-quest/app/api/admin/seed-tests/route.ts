import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { exercises } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { ALL_EXERCISE_TESTS } from '@/db/test-cases';
import { checkRateLimit, rateLimitHeaders } from '@/lib/rate-limit';

// POST /api/admin/seed-tests
// Seeds all exercises with comprehensive test cases
export async function POST(request: NextRequest) {
    try {
        // Rate limiting with Redis
        const rateLimit = await checkRateLimit(request, '/api/admin');
        if (!rateLimit.success) {
            return NextResponse.json(
                { error: 'Rate limit exceeded' },
                { status: 429, headers: rateLimitHeaders(rateLimit) }
            );
        }

        // Auth check using environment variable
        const authHeader = request.headers.get('authorization');
        const expectedToken = process.env.ADMIN_SECRET_KEY || 'seed-secret-key';

        if (authHeader !== `Bearer ${expectedToken}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const results: { id: string; status: string; publicCount?: number; hiddenCount?: number }[] = [];

        for (const [exerciseId, tests] of Object.entries(ALL_EXERCISE_TESTS)) {
            const existing = await db
                .select({ id: exercises.id })
                .from(exercises)
                .where(eq(exercises.id, exerciseId))
                .limit(1);

            if (existing.length === 0) {
                results.push({ id: exerciseId, status: 'not_found' });
                continue;
            }

            await db
                .update(exercises)
                .set({
                    publicTests: tests.publicTests,
                    hiddenTests: tests.hiddenTests,
                })
                .where(eq(exercises.id, exerciseId));

            results.push({
                id: exerciseId,
                status: 'updated',
                publicCount: tests.publicTests.length,
                hiddenCount: tests.hiddenTests.length,
            });
        }

        const updated = results.filter(r => r.status === 'updated').length;
        const notFound = results.filter(r => r.status === 'not_found').length;

        return NextResponse.json({
            success: true,
            message: `Updated ${updated} exercises, ${notFound} not found`,
            results,
        });
    } catch (error) {
        console.error('[SEED ERROR]', error);
        return NextResponse.json(
            { error: 'Internal server error', details: String(error) },
            { status: 500 }
        );
    }
}
