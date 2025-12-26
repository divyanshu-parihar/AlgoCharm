import { db } from "@/db";
import { modules } from "@/db/schema";
// import { RedirectToSignIn, SignedOut, SignedIn } from "@clerk/nextjs";
import { Lock, Map, Play, Star } from "lucide-react";
import Link from "next/link";

// Force dynamic rendering - this page queries the database
export const dynamic = 'force-dynamic';

// Mock data removed
// const MOCK_MODULES = ... 

export default async function CampaignPage() {
  const allModules = await db.select().from(modules).orderBy(modules.order);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-gray-300 font-mono">
      {/* Auth temporarily disabled for testing */}

      <header className="border-b border-white/10 bg-[#0B0B0B]/90 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-accent-primary" />
            <span className="font-bold text-white tracking-widest">CAMPAIGN MAP</span>
          </div>
          <div className="text-xs text-gray-500">
            OPERATIVE: <span className="text-white">ACTIVE</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:gap-12 max-w-4xl mx-auto relative">
          {/* Connection Line */}
          <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-accent-primary/50 to-transparent -translate-x-1/2 hidden md:block" />

          {allModules.map((mod, index) => (
            <div
              key={mod.id}
              className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Status Node */}
              <div className={`
                relative z-10 w-12 h-12 shrink-0 rounded-full border-2 flex items-center justify-center bg-[#0B0B0B]
                ${mod.isLocked ? 'border-gray-700 text-gray-700' : 'border-accent-primary text-accent-primary shadow-[0_0_20px_rgba(242,95,37,0.3)]'}
              `}>
                {mod.isLocked ? <Lock className="w-5 h-5" /> : <Star className="w-5 h-5 fill-current" />}
              </div>

              {/* Module Card */}
              <div className={`flex-1 p-6 rounded-lg border bg-[#111] transition-all hover:translate-y-[-2px]
                ${mod.isLocked ? 'border-white/5 opacity-50 cursor-not-allowed' : 'border-white/10 hover:border-accent-primary/50'}
              `}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{mod.title}</h3>
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                    CH.{mod.order}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-6">{mod.description}</p>

                {!mod.isLocked ? (
                  <Link
                    href={`/campaign/${mod.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-white text-xs font-bold rounded hover:bg-white hover:text-[#0B0B0B] transition-colors"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    ENTER SIMULATION
                  </Link>
                ) : (
                  <button disabled className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-500 text-xs font-bold rounded cursor-not-allowed">
                    <Lock className="w-3 h-3" />
                    LOCKED
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

