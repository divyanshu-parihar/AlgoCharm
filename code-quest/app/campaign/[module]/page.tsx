import { db } from "@/db";
import { lessons, modules, userProgress, users, exercises } from "@/db/schema";
import { ArrowLeft, Play, CheckCircle, Circle, Book, Code } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eq, and } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

// Difficulty badge component
function DifficultyBadge({ difficulty }: { difficulty: string | null }) {
    if (!difficulty) return null;

    const colors: Record<string, string> = {
        easy: "bg-green-500/20 text-green-400 border-green-500/30",
        medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        hard: "bg-red-500/20 text-red-400 border-red-500/30",
    };

    return (
        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded border ${colors[difficulty] || colors.easy}`}>
            {difficulty}
        </span>
    );
}

// Force dynamic rendering - this page queries the database
export const dynamic = 'force-dynamic';

export default async function ModulePage({ params }: { params: Promise<{ module: string }> }) {
    const { module: moduleSlug } = await params;
    const { userId: clerkId } = await auth();

    // Fetch module by slug
    const moduleResult = await db.select().from(modules).where(eq(modules.slug, moduleSlug)).limit(1);
    if (!moduleResult.length) {
        notFound();
    }
    const currentModule = moduleResult[0];

    // Fetch all lessons for this module with exercise difficulty
    const allLessons = await db
        .select({
            id: lessons.id,
            slug: lessons.slug,
            title: lessons.title,
            hasExercise: lessons.hasExercise,
            exerciseId: lessons.exerciseId,
            order: lessons.order,
        })
        .from(lessons)
        .where(eq(lessons.moduleId, currentModule.id))
        .orderBy(lessons.order);

    // Get exercise difficulties
    const exerciseDiffs: Record<string, string> = {};
    for (const lesson of allLessons) {
        if (lesson.exerciseId) {
            const ex = await db.select({ difficulty: exercises.difficulty })
                .from(exercises)
                .where(eq(exercises.id, lesson.exerciseId))
                .limit(1);
            if (ex.length > 0 && ex[0].difficulty) {
                exerciseDiffs[lesson.exerciseId] = ex[0].difficulty;
            }
        }
    }

    // Get user progress for this module's lessons
    let completedLessonIds: Set<number> = new Set();

    if (clerkId) {
        const dbUser = await db.select().from(users).where(eq(users.clerkId, clerkId)).limit(1);

        if (dbUser.length > 0) {
            const lessonIds = allLessons.map(l => l.id);

            for (const lessonId of lessonIds) {
                const progress = await db.select().from(userProgress)
                    .where(and(
                        eq(userProgress.userId, dbUser[0].id),
                        eq(userProgress.lessonId, lessonId),
                        eq(userProgress.status, "completed")
                    ))
                    .limit(1);

                if (progress.length > 0) {
                    completedLessonIds.add(lessonId);
                }
            }
        }
    }

    const completedCount = completedLessonIds.size;

    return (
        <div className="min-h-screen bg-[#0B0B0B] text-gray-300 font-mono">
            {/* Header */}
            <header className="border-b border-white/10 bg-[#0B0B0B]/90 backdrop-blur sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/campaign" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-widest">Campaign Map</span>
                    </Link>
                    <div className="text-xs text-gray-500">
                        CHAPTER {currentModule.order}
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">

                    {/* Module Header */}
                    <div className="mb-12 space-y-4">
                        <span className="text-accent-primary text-xs font-bold tracking-widest uppercase">
                            MODULE {currentModule.order}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">{currentModule.title}</h1>
                        <p className="text-gray-400 text-lg">{currentModule.description}</p>
                        <div className="flex gap-4 text-xs text-gray-500">
                            <span>{allLessons.length} MISSIONS</span>
                            <span>•</span>
                            <span className={completedCount === allLessons.length && allLessons.length > 0 ? 'text-green-500' : ''}>
                                {completedCount}/{allLessons.length} COMPLETE
                            </span>
                        </div>

                        {/* Progress bar */}
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all ${completedCount === allLessons.length && allLessons.length > 0 ? 'bg-green-500' : 'bg-accent-primary'}`}
                                style={{ width: allLessons.length > 0 ? `${(completedCount / allLessons.length) * 100}%` : '0%' }}
                            />
                        </div>
                    </div>

                    {/* Lessons List */}
                    <div className="space-y-4">
                        {allLessons.map((lesson, index) => {
                            const isCompleted = completedLessonIds.has(lesson.id);

                            return (
                                <Link
                                    key={lesson.id}
                                    href={`/campaign/${moduleSlug}/${lesson.slug}`}
                                    className={`group block bg-[#111] border rounded-lg p-6 transition-all hover:translate-x-1
                                        ${isCompleted
                                            ? 'border-green-500/30 hover:border-green-500/50'
                                            : 'border-white/10 hover:border-accent-primary/50'}
                                    `}
                                >
                                    <div className="flex items-center gap-6">
                                        {/* Status Icon */}
                                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold shrink-0 transition-all
                                            ${isCompleted
                                                ? 'border-green-500 bg-green-500/10 text-green-500'
                                                : 'border-accent-primary/50 text-accent-primary group-hover:border-accent-primary group-hover:shadow-[0_0_15px_rgba(242,95,37,0.3)]'}
                                        `}>
                                            {isCompleted ? (
                                                <CheckCircle className="w-6 h-6" />
                                            ) : (
                                                <span>{String(index + 1).padStart(2, '0')}</span>
                                            )}
                                        </div>

                                        {/* Mission Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3">
                                                <h3 className={`font-bold text-lg transition-colors
                                                    ${isCompleted ? 'text-green-400' : 'text-white group-hover:text-accent-primary'}
                                                `}>
                                                    {lesson.title}
                                                </h3>
                                                {lesson.exerciseId && exerciseDiffs[lesson.exerciseId] && (
                                                    <DifficultyBadge difficulty={exerciseDiffs[lesson.exerciseId]} />
                                                )}
                                            </div>
                                            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                                                {lesson.hasExercise ? (
                                                    <span className="flex items-center gap-1">
                                                        <Code className="w-3 h-3" />
                                                        Coding Exercise
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-1">
                                                        <Book className="w-3 h-3" />
                                                        Theory
                                                    </span>
                                                )}
                                                {isCompleted && (
                                                    <span className="text-green-500">✓ Completed</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <Play className={`w-5 h-5 shrink-0 transition-colors
                                            ${isCompleted ? 'text-green-500' : 'text-gray-600 group-hover:text-accent-primary'}
                                        `} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Start/Continue Button */}
                    {allLessons.length > 0 && (
                        <div className="mt-12 text-center">
                            {completedCount === allLessons.length ? (
                                <div className="text-green-500 font-bold text-xl">
                                    ✓ Module Complete!
                                </div>
                            ) : (
                                <Link
                                    href={`/campaign/${moduleSlug}/${allLessons[completedCount]?.slug || allLessons[0].slug}`}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-white font-bold rounded-lg hover:bg-white hover:text-[#0B0B0B] transition-colors text-lg"
                                >
                                    <Play className="w-5 h-5 fill-current" />
                                    {completedCount > 0 ? 'CONTINUE' : 'START CHAPTER'}
                                </Link>
                            )}
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}
