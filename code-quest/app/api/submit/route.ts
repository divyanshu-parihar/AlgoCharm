import { NextRequest, NextResponse } from 'next/server';

// POST /api/submit - Receive verdict from CLI
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { mission_id, verdict, api_key } = body;

        // Validate required fields
        if (!mission_id || !verdict || !api_key) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields: mission_id, verdict, api_key' },
                { status: 400 }
            );
        }

        // TODO: In production, validate api_key against users table
        // const user = await db.select().from(users).where(eq(users.apiKey, api_key)).limit(1);
        // if (!user.length) {
        //   return NextResponse.json({ success: false, message: 'Invalid API key' }, { status: 401 });
        // }

        // For now, accept all submissions and return success
        console.log(`[SUBMIT] Mission: ${mission_id}, Verdict: ${verdict}, API Key: ${api_key.substring(0, 8)}...`);

        // XP calculation (simple for now)
        const xpAwarded = verdict === 'passed' ? 100 : 0;

        // TODO: Update user progress in database
        // await db.insert(userProgress).values({
        //   userId: user[0].id,
        //   lessonId: missionToLessonId(mission_id),
        //   status: 'completed',
        //   completedAt: new Date(),
        // });

        // TODO: Award XP to user
        // await db.update(users).set({ xp: sql`xp + ${xpAwarded}` }).where(eq(users.id, user[0].id));

        return NextResponse.json({
            success: true,
            message: `Mission ${mission_id} completed!`,
            xp_awarded: xpAwarded,
        });
    } catch (error) {
        console.error('[SUBMIT ERROR]', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
