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
            <span className="text-xl font-bold tracking-tighter text-text-header">ALGOCHARM</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-body">
            <a href="#features" className="hover:text-accent-primary transition-colors">FEATURES</a>
            <a href="#roadmap" className="hover:text-accent-primary transition-colors">MISSIONS</a>
            <a href="#leaderboard" className="hover:text-accent-primary transition-colors">LEADERBOARD</a>
            <a href="/install" className="hover:text-accent-primary transition-colors">INSTALL</a>
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
              CRACK THE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">CODE.</span>
            </h1>
            <p className="text-text-body text-lg md:text-xl max-w-md border-l-2 border-accent-primary pl-4">
              Forget boring tutorials. Learn DSA like a game. Beat challenges, level up, flex your skills.
            </p>
            <a href="/campaign" className="group relative inline-block px-8 py-4 bg-accent-primary text-white font-bold tracking-wider hover:bg-white hover:text-bg-main transition-all duration-300">
              <span className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              START CAMPAIGN &gt;
            </a>
          </div>

          {/* Hero Code Snippet - Cyber Editor Style */}
          <div className="relative w-full max-w-xl mx-auto perspective-1000 group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary via-purple-500 to-accent-secondary rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>

            {/* Main Editor Window */}
            <div className="relative bg-[#0D0D0D] border border-border-brutal rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">

              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161616] border-b border-border-brutal select-none">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-red-600 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-yellow-600 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-green-600 transition-colors"></div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                  <Code className="w-3 h-3 text-accent-secondary" />
                  <span>mission_critical.ts</span>
                </div>
                <div className="w-8"></div> {/* Spacer for center alignment */}
              </div>

              {/* Editor Body */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-[#0D0D0D]">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-gray-700 select-none pr-4 text-right border-r border-[#222] mr-4 w-8 flex flex-col gap-[2px]">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
                  </div>

                  {/* Code Content */}
                  <div className="text-gray-300 flex flex-col gap-[2px]">
                    <div><span className="text-purple-400">const</span> <span className="text-yellow-300">crackAlgo</span> = (<span className="text-orange-300">graph</span>) <span className="text-purple-400">=&gt;</span> {'{'}</div>
                    <div className="pl-4"><span className="text-gray-500">// O(log N) Optimization</span></div>
                    <div className="pl-4"><span className="text-purple-400">let</span> visited = <span className="text-purple-400">new</span> <span className="text-yellow-300">Set</span>();</div>
                    <div className="pl-4"><span className="text-purple-400">while</span> (queue.length) {'{'}</div>
                    <div className="pl-8"><span className="text-purple-400">const</span> node = queue.<span className="text-blue-400">shift</span>();</div>
                    <div className="pl-8"><span className="text-purple-400">if</span> (node === <span className="text-green-400">'TARGET'</span>) <span className="text-purple-400">return</span> <span className="text-orange-400">true</span>;</div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'};</div>
                  </div>
                </div>
              </div>

              {/* Editor Footer / Status */}
              <div className="px-4 py-3 bg-[#111] border-t border-border-brutal flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-wider">
                    <Check className="w-3 h-3" />
                    Tests Passed
                  </div>
                  <span className="text-[10px] text-gray-600 font-mono">12ms • 4.2MB</span>
                </div>

                <button className="flex items-center gap-2 px-4 py-1.5 bg-accent-primary text-white text-xs font-bold rounded hover:bg-white hover:text-bg-main transition-all duration-300 shadow-[0_0_15px_rgba(242,95,37,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  <Play className="w-3 h-3 fill-current" />
                  SUBMIT
                </button>
              </div>
            </div>

            {/* Decorative Background Blobs behind the code card */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[100px] opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-accent-primary/20 rounded-full mix-blend-screen animate-pulse" />
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-accent-secondary/20 rounded-full mix-blend-screen" />
            </div>
          </div>
        </section>

        {/* 2. PLATFORM FEATURES */}
        <section id="features" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
            <span className="text-accent-primary">01.</span>
            PLATFORM FEATURES
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Multi-Language Support */}
            <div className="group tech-border bg-bg-secondary p-6 hover:bg-bg-secondary/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(242,95,37,0.1)]">
              <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors">
                <Code className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-header mb-2">MULTI-LANGUAGE</h3>
              <p className="text-sm text-text-body mb-4">Code in your preferred language. Full support for Go, TypeScript, and C++.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">GO</span>
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-400 rounded border border-yellow-500/20">TYPESCRIPT</span>
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 rounded border border-purple-500/20">C++</span>
              </div>
            </div>

            {/* Story-Based Learning */}
            <div className="group tech-border bg-bg-secondary p-6 hover:bg-bg-secondary/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,166,255,0.1)]">
              <div className="w-12 h-12 rounded-full bg-accent-secondary/10 flex items-center justify-center mb-4 group-hover:bg-accent-secondary/20 transition-colors">
                <Crown className="w-6 h-6 text-accent-secondary" />
              </div>
              <h3 className="text-lg font-bold text-text-header mb-2">STORY CAMPAIGN</h3>
              <p className="text-sm text-text-body mb-4">Immersive narrative-driven learning. Each module tells a unique story as you master algorithms.</p>
              <div className="text-[10px] text-accent-secondary font-bold uppercase tracking-wider">
                🎮 16 Unique Story Modules
              </div>
            </div>

            {/* Run Locally */}
            <a href="/install" className="group tech-border bg-bg-secondary p-6 hover:bg-bg-secondary/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(39,201,63,0.1)] block">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Terminal className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-text-header mb-2">YOUR ENVIRONMENT</h3>
              <p className="text-sm text-text-body mb-4">Use your own custom environment for learning. Your favorite IDE, your tools, your workflow.</p>
              <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                Install CLI →
              </span>
            </a>

            {/* 150+ Challenges */}
            <div className="group tech-border bg-bg-secondary p-6 hover:bg-bg-secondary/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(242,95,37,0.1)]">
              <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors">
                <Trophy className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-header mb-2">150+ CHALLENGES</h3>
              <p className="text-sm text-text-body mb-4">Comprehensive problem set covering all DSA patterns. From basics to advanced.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-400 rounded border border-green-500/20">EASY</span>
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-400 rounded border border-yellow-500/20">MEDIUM</span>
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 rounded border border-red-500/20">HARD</span>
              </div>
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

        {/* 4. GLOBAL LEADERBOARD */}
        <section id="leaderboard" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary">04.</span>
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

        {/* 5. PRICING */}
        <section id="pricing" className="container mx-auto px-4 pb-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary">05.</span>
            SIMPLE PRICING
          </h2>

          <div className="max-w-md mx-auto">
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              {/* Card */}
              <div className="relative border-2 border-accent-primary bg-bg-main rounded-xl overflow-hidden">
                <div className="bg-accent-primary px-6 py-3 text-center">
                  <span className="text-white font-bold tracking-wider uppercase flex items-center justify-center gap-2">
                    <Crown className="w-4 h-4 fill-current" />
                    Pro Access
                    <Crown className="w-4 h-4 fill-current" />
                  </span>
                </div>

                <div className="p-8 text-center">
                  <div className="mb-4">
                    <span className="text-text-body text-xl">$</span>
                    <span className="text-6xl font-bold text-text-header">9</span>
                    <span className="text-2xl text-text-header">.99</span>
                    <span className="text-text-body">/mo</span>
                  </div>

                  <p className="text-text-body text-sm mb-6">
                    Full access to all 150+ challenges, story campaigns, and CLI tool
                  </p>

                  <a
                    href="/pricing"
                    className="block w-full py-4 bg-accent-primary text-white font-bold tracking-wider hover:bg-white hover:text-bg-main transition-all duration-300 shadow-[0_0_20px_rgba(242,95,37,0.3)]"
                  >
                    GET STARTED →
                  </a>

                  <p className="text-xs text-text-body mt-4">
                    Cancel anytime • Secure payment via Stripe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-brutal py-8 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-600">
              © 2025 ALGOCHARM. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6 text-xs">
              <a href="/terms" className="text-gray-500 hover:text-accent-primary transition-colors">Terms of Service</a>
              <a href="/privacy" className="text-gray-500 hover:text-accent-secondary transition-colors">Privacy Policy</a>
              <a href="/pricing" className="text-gray-500 hover:text-white transition-colors">Pricing</a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}
