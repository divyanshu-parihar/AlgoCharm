import { db } from "@/db";
import { lessons, modules } from "@/db/schema";
// import { SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { ArrowLeft, Play, Lock, CheckCircle, Circle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";

export default async function ModulePage({ params }: { params: Promise<{ module: string }> }) {
    const { module: moduleSlug } = await params;

    // Fetch module by slug
    const moduleResult = await db.select().from(modules).where(eq(modules.slug, moduleSlug)).limit(1);
    if (!moduleResult.length) {
        notFound();
    }
    const currentModule = moduleResult[0];

    // Check if module is locked
    if (currentModule.isLocked) {
        return (
            <div className="min-h-screen bg-[#0B0B0B] text-gray-300 font-mono flex items-center justify-center">
                <div className="text-center space-y-4">
                    <Lock className="w-16 h-16 text-gray-600 mx-auto" />
                    <h1 className="text-2xl font-bold text-white">Module Locked</h1>
                    <p className="text-gray-500">Complete previous modules to unlock this one.</p>
                    <Link href="/campaign" className="inline-block mt-4 text-accent-primary hover:underline">
                        ← Return to Campaign Map
                    </Link>
                </div>
            </div>
        );
    }

    // Fetch all lessons for this module
    const allLessons = await db
        .select()
        .from(lessons)
        .where(eq(lessons.moduleId, currentModule.id))
        .orderBy(lessons.order);

    return (
        <div className="min-h-screen bg-[#0B0B0B] text-gray-300 font-mono">
            {/* Auth temporarily disabled for testing */}

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
                            THE ARRAY ARCHIVES
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">{currentModule.title}</h1>
                        <p className="text-gray-400 text-lg">{currentModule.description}</p>
                        <div className="flex gap-4 text-xs text-gray-500">
                            <span>{allLessons.length} MISSIONS</span>
                            <span>•</span>
                            <span>0/{allLessons.length} COMPLETE</span>
                        </div>
                    </div>

                    {/* Lessons List */}
                    <div className="space-y-4">
                        {allLessons.map((lesson, index) => (
                            <Link
                                key={lesson.id}
                                href={`/campaign/${moduleSlug}/${lesson.slug}`}
                                className="group block bg-[#111] border border-white/10 rounded-lg p-6 hover:border-accent-primary/50 transition-all hover:translate-x-1"
                            >
                                <div className="flex items-center gap-6">
                                    {/* Mission Number */}
                                    <div className="w-12 h-12 rounded-full border-2 border-accent-primary/50 flex items-center justify-center text-accent-primary font-bold shrink-0 group-hover:border-accent-primary group-hover:shadow-[0_0_15px_rgba(242,95,37,0.3)] transition-all">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Mission Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-bold text-lg group-hover:text-accent-primary transition-colors">
                                            {lesson.title}
                                        </h3>
                                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                                            {lesson.hasExercise && (
                                                <span className="flex items-center gap-1">
                                                    <Circle className="w-3 h-3" />
                                                    Coding Exercise
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <Play className="w-5 h-5 text-gray-600 group-hover:text-accent-primary transition-colors shrink-0" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Start Button */}
                    {allLessons.length > 0 && (
                        <div className="mt-12 text-center">
                            <Link
                                href={`/campaign/${moduleSlug}/${allLessons[0].slug}`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-white font-bold rounded-lg hover:bg-white hover:text-[#0B0B0B] transition-colors text-lg"
                            >
                                <Play className="w-5 h-5 fill-current" />
                                START CHAPTER
                            </Link>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}
