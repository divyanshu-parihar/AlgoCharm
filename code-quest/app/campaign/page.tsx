import { db } from "@/db";
import { modules, lessons, userProgress, users } from "@/db/schema";
import { Map, Play, Circle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { eq, sql, and } from "drizzle-orm";
import { auth, currentUser } from "@clerk/nextjs/server";

// Force dynamic rendering - this page queries the database
export const dynamic = 'force-dynamic';

export default async function CampaignPage() {
  const allModules = await db.select().from(modules).orderBy(modules.order);

  // Get the current user from Clerk
  const { userId: clerkId } = await auth();

  // Get lesson counts for each module
  const lessonCounts = await db.select({
    moduleId: lessons.moduleId,
    count: sql<number>`count(*)`.mapWith(Number),
  })
    .from(lessons)
    .groupBy(lessons.moduleId);

  const countMap: Record<number, number> = {};
  lessonCounts.forEach(l => {
    countMap[l.moduleId] = l.count;
  });

  // Get user progress if logged in
  let progressMap: Record<number, number> = {};

  if (clerkId) {
    // Find user in our DB
    const dbUser = await db.select().from(users).where(eq(users.clerkId, clerkId)).limit(1);

    if (dbUser.length > 0) {
      // Get completed lessons per module
      const completedCounts = await db.select({
        moduleId: lessons.moduleId,
        completed: sql<number>`count(*)`.mapWith(Number),
      })
        .from(userProgress)
        .innerJoin(lessons, eq(userProgress.lessonId, lessons.id))
        .where(and(
          eq(userProgress.userId, dbUser[0].id),
          eq(userProgress.status, "completed")
        ))
        .groupBy(lessons.moduleId);

      completedCounts.forEach(c => {
        progressMap[c.moduleId] = c.completed;
      });
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-gray-300 font-mono">
      <header className="border-b border-white/10 bg-[#0B0B0B]/90 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-accent-primary" />
            <span className="font-bold text-white tracking-widest">CAMPAIGN MAP</span>
          </div>
          <Link href="/dashboard" className="text-xs text-gray-500 hover:text-white transition-colors">
            DASHBOARD
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-6 max-w-3xl mx-auto">
          {allModules.map((mod) => {
            const lessonCount = countMap[mod.id] || 0;
            const completedCount = progressMap[mod.id] || 0;
            const hasContent = lessonCount > 0;
            const progressPercent = lessonCount > 0 ? (completedCount / lessonCount) * 100 : 0;
            const isComplete = completedCount === lessonCount && lessonCount > 0;

            return (
              <Link
                key={mod.id}
                href={`/campaign/${mod.slug}`}
                className={`group relative flex items-center gap-6 p-6 rounded-lg border bg-[#111] transition-all hover:translate-y-[-2px]
                  ${isComplete
                    ? 'border-green-500/50 hover:border-green-400'
                    : hasContent
                      ? 'border-white/10 hover:border-accent-primary/50'
                      : 'border-white/5 opacity-60 hover:opacity-80'}
                `}
              >
                {/* Status Icon */}
                <div className={`
                  relative z-10 w-12 h-12 shrink-0 rounded-full border-2 flex items-center justify-center bg-[#0B0B0B]
                  ${isComplete
                    ? 'border-green-500 text-green-500'
                    : hasContent
                      ? 'border-accent-primary text-accent-primary'
                      : 'border-gray-700 text-gray-700'}
                `}>
                  {isComplete ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : hasContent ? (
                    <span className="text-lg font-bold">{completedCount}/{lessonCount}</span>
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </div>

                {/* Module Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-primary transition-colors">
                      {mod.title}
                    </h3>
                    <span className={`text-[10px] font-bold uppercase tracking-widest
                      ${isComplete ? 'text-green-500' : 'text-gray-600'}
                    `}>
                      {isComplete
                        ? '✓ COMPLETE'
                        : hasContent
                          ? `${completedCount}/${lessonCount} MISSIONS`
                          : 'COMING SOON'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{mod.description}</p>

                  {/* Progress bar */}
                  {hasContent && (
                    <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${isComplete ? 'bg-green-500' : 'bg-accent-primary'}`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <div className={`transition-colors
                  ${isComplete ? 'text-green-500' : 'text-gray-600 group-hover:text-accent-primary'}
                `}>
                  <Play className="w-5 h-5 fill-current" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
