import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { userProgress, users, lessons } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq, and } from "drizzle-orm";

export async function POST(request: NextRequest) {
    try {
        const { userId: clerkId } = await auth();

        if (!clerkId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { lessonSlug } = body;

        if (!lessonSlug) {
            return NextResponse.json(
                { error: "Missing lessonSlug" },
                { status: 400 }
            );
        }

        // Get user from our database
        const dbUser = await db.select().from(users).where(eq(users.clerkId, clerkId)).limit(1);

        if (dbUser.length === 0) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Get lesson
        const lesson = await db.select().from(lessons).where(eq(lessons.slug, lessonSlug)).limit(1);

        if (lesson.length === 0) {
            return NextResponse.json(
                { error: "Lesson not found" },
                { status: 404 }
            );
        }

        // Check if progress exists
        const existingProgress = await db.select().from(userProgress)
            .where(and(
                eq(userProgress.userId, dbUser[0].id),
                eq(userProgress.lessonId, lesson[0].id)
            ))
            .limit(1);

        if (existingProgress.length > 0) {
            // Update existing progress
            await db.update(userProgress)
                .set({
                    status: "completed",
                    completedAt: new Date()
                })
                .where(and(
                    eq(userProgress.userId, dbUser[0].id),
                    eq(userProgress.lessonId, lesson[0].id)
                ));
        } else {
            // Insert new progress
            await db.insert(userProgress).values({
                userId: dbUser[0].id,
                lessonId: lesson[0].id,
                status: "completed",
                completedAt: new Date()
            });
        }

        return NextResponse.json({
            success: true,
            message: "Lesson marked as complete"
        });

    } catch (error) {
        console.error("Error marking lesson complete:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
