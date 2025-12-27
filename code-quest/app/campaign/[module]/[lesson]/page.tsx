import { db } from "@/db";
import { lessons, modules, exercises } from "@/db/schema";
// import { SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { Terminal, ChevronRight, CheckCircle, Copy, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eq, and } from "drizzle-orm";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { MarkCompleteButton } from "@/components/MarkCompleteButton";
import { HintTooltip, SolutionReveal } from "@/components/HintsSolution";
import { getLessonExtras } from "@/db/lesson-extras";

// Force dynamic rendering - this page queries the database
export const dynamic = 'force-dynamic';

export default async function LessonPage({ params }: { params: Promise<{ module: string, lesson: string }> }) {
  const { module: moduleSlug, lesson: lessonSlug } = await params;

  // Fetch module
  const moduleResult = await db.select().from(modules).where(eq(modules.slug, moduleSlug)).limit(1);
  if (!moduleResult.length) {
    notFound();
  }
  const currentModule = moduleResult[0];

  // Fetch lesson by slug
  const lessonResult = await db
    .select()
    .from(lessons)
    .where(and(
      eq(lessons.slug, lessonSlug),
      eq(lessons.moduleId, currentModule.id)
    ))
    .limit(1);

  if (!lessonResult.length) {
    notFound();
  }
  const lesson = lessonResult[0];

  // Fetch exercise if lesson has one
  let exercise = null;
  if (lesson.hasExercise && lesson.exerciseId) {
    const exerciseResult = await db
      .select()
      .from(exercises)
      .where(eq(exercises.id, lesson.exerciseId))
      .limit(1);
    exercise = exerciseResult[0] || null;
  }

  // Get all lessons for this module (for navigation)
  const allLessons = await db
    .select()
    .from(lessons)
    .where(eq(lessons.moduleId, currentModule.id))
    .orderBy(lessons.order);

  const currentIndex = allLessons.findIndex(l => l.id === lesson.id);
  const nextLesson = allLessons[currentIndex + 1];
  const prevLesson = allLessons[currentIndex - 1];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-gray-300 font-mono flex flex-col md:flex-row">
      {/* Auth temporarily disabled for testing */}

      {/* LEFT: STORY PANEL */}
      <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto border-r border-white/10">
        <div className="max-w-xl mx-auto space-y-8">
          <Link href={`/campaign`} className="text-xs text-gray-500 hover:text-accent-primary flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> RETURN TO MAP
          </Link>

          <div className="space-y-2">
            <span className="text-accent-primary text-xs font-bold tracking-widest uppercase">
              {currentModule.title} • MISSION {lesson.order}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{lesson.title}</h1>
          </div>

          {/* Story Content */}
          <MarkdownRenderer content={lesson.storyContent} />

          {/* Hints Section (left panel) */}
          {(() => {
            const extras = getLessonExtras(lesson.slug);
            if (extras) {
              return <HintTooltip hints={extras.hints} />;
            }
            return null;
          })()}

          {/* Theory Content (if exists) */}
          {lesson.theoryContent && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent-secondary" />
                Theory
              </h3>
              <MarkdownRenderer content={lesson.theoryContent} />
            </div>
          )}

          {/* Mark Complete & Navigation */}
          <div className="pt-8 border-t border-white/10 space-y-6">
            {/* Mark Complete CTA - only show on lessons without exercises since exercises have their own completion flow */}
            {!lesson.hasExercise && (
              <div className="flex justify-center">
                <MarkCompleteButton
                  lessonSlug={lesson.slug}
                  isCompleted={false}
                  nextLessonUrl={nextLesson ? `/campaign/${moduleSlug}/${nextLesson.slug}` : undefined}
                />
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between">
              {prevLesson ? (
                <Link
                  href={`/campaign/${moduleSlug}/${prevLesson.slug}`}
                  className="text-xs text-gray-500 hover:text-white"
                >
                  ← {prevLesson.title}
                </Link>
              ) : <span />}
              {nextLesson && (
                <Link
                  href={`/campaign/${moduleSlug}/${nextLesson.slug}`}
                  className="text-xs text-gray-500 hover:text-white"
                >
                  {nextLesson.title} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: ACTION PANEL */}
      <div className="w-full md:w-1/2 bg-[#111] p-8 md:p-12 flex flex-col justify-start">
        <div className="max-w-lg mx-auto w-full space-y-8">

          {/* Objective Card */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-primary" />
              Current Objective
            </h3>
            <p className="text-gray-400 text-sm">
              {exercise ? exercise.description : "Complete this lesson to proceed."}
            </p>
            {exercise && (
              <div className="mt-4 flex items-center gap-4 text-xs">
                <span className={`px-2 py-1 rounded ${exercise.difficulty === 'easy' ? 'bg-green-900/50 text-green-400' :
                  exercise.difficulty === 'medium' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-red-900/50 text-red-400'
                  }`}>
                  {exercise.difficulty?.toUpperCase()}
                </span>
                <span className="text-accent-primary">+{exercise.xpReward} XP</span>
              </div>
            )}
          </div>

          {/* Terminal Command */}
          {lesson.hasExercise && (
            <div className="space-y-4">
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Execute in your Terminal:</p>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition"></div>
                <div className="relative bg-black border border-white/20 rounded-lg p-4 font-mono text-sm flex items-center justify-between">
                  <span className="text-green-400">
                    <span className="text-gray-500">$</span> quest start {lesson.exerciseId}
                  </span>
                  <button className="text-gray-500 hover:text-white transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-600 text-center">
                Don't have the CLI? <a href="#" className="text-accent-primary underline">Install Field Kit</a>
              </p>
            </div>
          )}

          {/* Solution Reveal (right panel - below submit) */}
          {(() => {
            const extras = getLessonExtras(lesson.slug);
            if (extras) {
              return (
                <div className="mt-6">
                  <SolutionReveal
                    solutions={extras.solutions}
                    explanation={extras.explanation}
                    patternTips={extras.patternTips}
                  />
                </div>
              );
            }
            return null;
          })()}

          {/* Status Monitor */}
          <div className="mt-12 pt-12 border-t border-white/5">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>CONNECTION STATUS</span>
              <span className="text-green-500">CONNECTED</span>
            </div>
            <div className="h-1 w-full bg-[#222] rounded-full overflow-hidden">
              <div className="h-full bg-green-500/50 w-full animate-pulse" />
            </div>
            <p className="mt-4 text-xs text-gray-600">
              Waiting for submission...
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
