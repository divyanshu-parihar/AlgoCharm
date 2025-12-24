import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Terminal, Play, Trophy, Code, Check, Zap, Cpu, Shield, Crown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-mono selection:bg-accent-primary selection:text-white">
      {/* 1. HEADER/NAV */}
      <header className="sticky top-0 z-50 border-b border-border-brutal bg-bg-main/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-accent-primary" />
            <span className="text-xl font-bold tracking-tighter text-text-header">CODEQUEST</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-body">
            <a href="#roadmap" className="hover:text-accent-primary transition-colors">MISSIONS</a>
            <a href="#playground" className="hover:text-accent-primary transition-colors">ARMORY</a>
            <a href="#leaderboard" className="hover:text-accent-primary transition-colors">LEADERBOARD</a>
          </nav>

          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-bold text-accent-primary hover:text-white transition-colors">
                  LOGIN_
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 ring-2 ring-accent-primary ring-offset-2 ring-offset-bg-main"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-24 pb-24">
        {/* 2. HERO SECTION */}
        <section className="container mx-auto px-4 pt-20 md:pt-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-secondary/30 bg-accent-secondary/5 text-accent-secondary text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
              System Online v2.5
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-text-header leading-[0.9] tracking-tight">
              MASTER DSA.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-header to-text-body">THE GAME.</span>
            </h1>
            <p className="text-text-body text-lg md:text-xl max-w-md border-l-2 border-accent-primary pl-4">
              Stop grinding LeetCode. Start your campaign. Level up your algorithmic thinking in a brutalist open world.
            </p>
            <button className="group relative px-8 py-4 bg-accent-primary text-white font-bold tracking-wider hover:bg-white hover:text-bg-main transition-all duration-300">
              <span className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              START CAMPAIGN &gt;
            </button>
          </div>

          {/* 3D Mascot Placeholder - Liquid Shader Effect */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border-brutal bg-bg-secondary group">
            <Image
              src="/HeaderMascot.jpg"
              alt="CodeQuest Mascot"
              fill
              className="object-contain z-10 relative"
              priority
            />
            {/* Liquid Shader Simulation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] blur-[80px] opacity-60">
              <div className="absolute top-0 left-0 w-full h-full bg-accent-primary animate-[spin_10s_linear_infinite]" />
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-accent-secondary animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white mix-blend-overlay" />
            </div>
            {/* Tech Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-accent-secondary">
              Rendering... 60FPS
            </div>
          </div>
        </section>

        {/* 3. GAMIFIED ROADMAP */}
        <section id="roadmap" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
            <span className="text-accent-primary">02.</span>
            GAMIFIED ROADMAP
          </h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-border-brutal md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12 relative">
              {[
                { title: "LEVEL 1: ARRAYS & STRINGS", icon: Code, status: "COMPLETE" },
                { title: "LEVEL 2: LINKED LISTS", icon: Cpu, status: "ACTIVE" },
                { title: "LEVEL 3: TREES & GRAPHS", icon: Zap, status: "LOCKED" },
                { title: "BOSS: DYNAMIC PROGRAMMING", icon: Shield, status: "LOCKED", boss: true }
              ].map((level, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
                  {/* Node */}
                  <div className={`relative z-10 w-16 h-16 flex-shrink-0 rounded-full border-4 flex items-center justify-center bg-bg-main transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(242,95,37,0.4)]
                    ${level.status === 'ACTIVE' ? 'border-accent-primary shadow-[0_0_20px_rgba(242,95,37,0.2)]' : 'border-border-brutal'}`}>
                    <level.icon className={`w-6 h-6 ${level.status === 'ACTIVE' ? 'text-accent-primary' : 'text-text-body'}`} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 tech-border bg-bg-secondary p-6 hover:bg-bg-secondary/80 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-bold text-lg ${level.boss ? 'text-accent-primary' : 'text-text-header'}`}>
                        {level.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider border border-border-brutal px-2 py-1 rounded text-text-body">
                        {level.status}
                      </span>
                    </div>
                    <button className="mt-4 text-xs font-bold text-accent-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                      PLAY LEVEL <Play className="w-3 h-3 fill-current" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PATTERN RECOGNITION */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary">03.</span>
            PATTERN RECOGNITION
          </h2>

          <div className="grid md:grid-cols-2 border border-accent-secondary/30 rounded-lg overflow-hidden backdrop-blur-sm">
            {/* Chaos Code */}
            <div className="bg-[#0f0f0f] p-8 border-b md:border-b-0 md:border-r border-border-brutal relative overflow-hidden">
              <div className="absolute top-4 left-4 text-xs text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                Chaos Code
              </div>
              <pre className="mt-8 text-sm text-gray-600 font-mono opacity-50 blur-[0.5px]">
                {`function s(n) {
  if(n<=0) return 0;
  var a = [];
  for(var i=0;i<n;i++)
    a.push(i);
  return a.reduce((x,y)=>x+y);
}
// O(N) Space? Why?`}
              </pre>
            </div>

            {/* Pattern Mastery */}
            <div className="bg-bg-secondary/30 p-8 relative">
              <div className="absolute inset-0 bg-accent-secondary/5" />
              <div className="absolute top-4 left-4 text-xs text-accent-secondary font-bold uppercase tracking-widest flex items-center gap-2 relative z-10">
                <div className="w-2 h-2 bg-accent-secondary rounded-full shadow-[0_0_10px_#58A6FF]" />
                Pattern Mastery
              </div>
              <pre className="mt-8 text-sm font-mono relative z-10">
                <span className="text-accent-secondary">const</span> <span className="text-accent-primary">sum</span> = (<span className="text-white">n</span>: <span className="text-yellow-300">number</span>) <span className="text-accent-secondary">=&gt;</span> {'{'}

                <span className="text-gray-400">// O(1) Time & Space</span>

                <span className="text-accent-secondary">return</span> (<span className="text-white">n</span> * (<span className="text-white">n</span> + <span className="text-purple-400">1</span>)) / <span className="text-purple-400">2</span>;
                {'}'}
              </pre>
            </div>
          </div>
        </section>

        {/* 5. CODE PLAYGROUND */}
        <section id="playground" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary">04.</span>
            CODE PLAYGROUND
          </h2>

          <div className="rounded-xl overflow-hidden border border-border-brutal bg-[#0D0D0D] shadow-2xl">
            {/* Editor Header */}
            <div className="h-10 bg-[#1A1A1A] flex items-center px-4 gap-2 border-b border-border-brutal">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-4 text-xs text-gray-500 font-mono">solution.py</span>
            </div>

            {/* Editor Body */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <div className="flex">
                <div className="flex flex-col text-gray-600 select-none pr-4 text-right border-r border-border-brutal mr-4">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                </div>
                <div className="text-gray-300">
                  <div className="flex"><span className="text-accent-secondary">def</span>&nbsp;<span className="text-yellow-300">solve_puzzle</span>(input_arr):</div>
                  <div className="pl-4"><span className="text-gray-500"># Find the missing fragment</span></div>
                  <div className="pl-4"><span className="text-accent-secondary">return</span>&nbsp;[x&nbsp;<span className="text-accent-secondary">for</span>&nbsp;x&nbsp;<span className="text-accent-secondary">in</span>&nbsp;input_arr&nbsp;<span className="text-accent-secondary">if</span>&nbsp;x &gt; <span className="text-purple-400">0</span>]<span className="animate-pulse text-accent-primary inline-block w-2 h-4 bg-accent-primary align-middle ml-1" /></div>
                </div>
              </div>
            </div>

            {/* Editor Footer */}
            <div className="h-14 bg-[#1A1A1A] border-t border-border-brutal flex items-center justify-end px-4">
              <button className="flex items-center gap-2 px-6 py-2 bg-accent-primary hover:bg-orange-600 text-white text-xs font-bold rounded transition-colors">
                <Play className="w-3 h-3 fill-current" />
                RUN CODE
              </button>
            </div>
          </div>
        </section>

        {/* 6. GLOBAL LEADERBOARD */}
        <section id="leaderboard" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary">05.</span>
            GLOBAL LEADERBOARD
          </h2>

          <div className="overflow-x-auto border border-border-brutal">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg-secondary text-text-body text-xs uppercase tracking-widest">
                  <th className="p-4 border-b border-r border-border-brutal font-medium w-24">Rank</th>
                  <th className="p-4 border-b border-r border-border-brutal font-medium">Player</th>
                  <th className="p-4 border-b border-r border-brutal font-medium">XP</th>
                  <th className="p-4 border-b border-border-brutal font-medium">Bugs Squashed</th>
                </tr>
              </thead>
              <tbody className="text-sm font-mono">
                {[
                  { rank: 1, user: "NEO_CODER", xp: "9,999", bugs: 420, crown: true },
                  { rank: 2, user: "ALGO_WIZ", xp: "8,540", bugs: 312 },
                  { rank: 3, user: "RUST_ACE", xp: "7,230", bugs: 289 },
                  { rank: 4, user: "PYTHONISTA", xp: "6,890", bugs: 256 },
                  { rank: 5, user: "JAVA_JEDI", xp: "6,100", bugs: 198 },
                ].map((player, i) => (
                  <tr key={i} className="hover:bg-bg-secondary/50 transition-colors group">
                    <td className="p-4 border-b border-r border-border-brutal text-gray-500 group-hover:text-white">
                      #{player.rank}
                    </td>
                    <td className="p-4 border-b border-r border-border-brutal font-bold text-white flex items-center gap-2">
                      {player.user}
                      {player.crown && <Crown className="w-4 h-4 text-yellow-400 fill-current" />}
                    </td>
                    <td className="p-4 border-b border-r border-border-brutal text-accent-secondary">
                      {player.xp}
                    </td>
                    <td className="p-4 border-b border-border-brutal text-text-body">
                      {player.bugs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. PRICING */}
        <section className="container mx-auto px-4 pb-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary">06.</span>
            EQUIP PRO GEAR
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="border border-border-brutal bg-bg-secondary p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">NOVICE</h3>
              <p className="text-text-body text-sm mb-8">Basic access to the simulation.</p>
              <div className="text-4xl font-bold text-white mb-8">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Check className="w-4 h-4" /> 50 Basic Problems
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Check className="w-4 h-4" /> Community Support
                </li>
              </ul>

              <button className="w-full py-3 border border-border-brutal text-text-body hover:bg-border-brutal hover:text-white transition-colors font-bold text-sm tracking-wider">
                LEARN MORE
              </button>
            </div>

            {/* Pro Tier */}
            <div className="border-2 border-accent-primary bg-[#0f0f0f] relative overflow-hidden flex flex-col shadow-[0_0_40px_rgba(242,95,37,0.15)]">
              <div className="bg-accent-primary px-8 py-2 text-black font-bold text-xs uppercase tracking-widest text-center">
                Most Popular
              </div>
              <div className="p-8 flex flex-col h-full relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  PRO PLAYER <Crown className="w-5 h-5 text-yellow-400 fill-current" />
                </h3>
                <p className="text-text-body text-sm mb-8">Unlock full system capabilities.</p>
                <div className="text-4xl font-bold text-white mb-8">$12<span className="text-lg text-gray-500 font-normal">/mo</span></div>

                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-white">
                    <div className="bg-accent-primary rounded-full p-0.5"><Check className="w-3 h-3 text-black" /></div> Unlimited Problems
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white">
                    <div className="bg-accent-primary rounded-full p-0.5"><Check className="w-3 h-3 text-black" /></div> Mock Interviews
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white">
                    <div className="bg-accent-primary rounded-full p-0.5"><Check className="w-3 h-3 text-black" /></div> AI Code Review
                  </li>
                </ul>

                <button className="w-full py-4 bg-accent-primary text-white hover:bg-white hover:text-bg-main transition-colors font-bold text-sm tracking-wider shadow-[0_0_20px_rgba(242,95,37,0.4)]">
                  UPGRADE NOW &gt;
                </button>
              </div>

              {/* Background Glow */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-primary/10 blur-[60px] rounded-full pointer-events-none" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-brutal py-8 bg-bg-secondary">
        <div className="container mx-auto px-4 text-center text-xs text-gray-600">
          © 2025 CODEQUEST. SYSTEM ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
