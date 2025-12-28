import { Terminal, Check, Zap, Crown, Code, Trophy, BookOpen, Cpu } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div className="min-h-screen flex flex-col font-mono bg-bg-main">
            {/* Header */}
            <header className="border-b border-border-brutal bg-bg-main/90 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-accent-primary" />
                        <span className="text-xl font-bold tracking-tighter text-text-header">ALGOCHARM</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-body">
                        <Link href="/" className="hover:text-accent-primary transition-colors">Home</Link>
                        <Link href="/install" className="hover:text-accent-primary transition-colors">Install</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-accent-primary text-xs font-bold tracking-widest uppercase mb-6">
                            <Zap className="w-3 h-3" />
                            Simple Pricing
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-header mb-4">
                            UNLOCK YOUR <span className="text-accent-primary">FULL POTENTIAL</span>
                        </h1>
                        <p className="text-text-body text-lg max-w-2xl mx-auto">
                            One simple plan. All features included. Master algorithms at your own pace.
                        </p>
                    </div>

                    {/* Pricing Card */}
                    <div className="max-w-lg mx-auto mb-16">
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary via-purple-500 to-accent-secondary rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

                            {/* Card */}
                            <div className="relative border-2 border-accent-primary bg-bg-main rounded-xl overflow-hidden">
                                {/* Header */}
                                <div className="bg-accent-primary px-8 py-4 text-center">
                                    <div className="flex items-center justify-center gap-2 text-white">
                                        <Crown className="w-5 h-5 fill-current" />
                                        <span className="font-bold tracking-wider uppercase">Pro Access</span>
                                        <Crown className="w-5 h-5 fill-current" />
                                    </div>
                                </div>

                                <div className="p-8">
                                    {/* Price */}
                                    <div className="text-center mb-8">
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-2xl text-text-body">$</span>
                                            <span className="text-7xl font-bold text-text-header">9</span>
                                            <span className="text-3xl text-text-header">.99</span>
                                        </div>
                                        <p className="text-text-body mt-2">per month • Cancel anytime</p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-accent-primary rounded-full p-1">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-text-header">150+ Algorithm Challenges</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-accent-primary rounded-full p-1">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-text-header">All 16 Story Modules</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-accent-primary rounded-full p-1">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-text-header">Go, TypeScript & C++ Support</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-accent-primary rounded-full p-1">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-text-header">CLI Tool Access</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-accent-primary rounded-full p-1">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-text-header">Progress Tracking & XP System</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-accent-primary rounded-full p-1">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-text-header">Leaderboard Access</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-accent-primary rounded-full p-1">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-text-header">Future Updates Included</span>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="w-full py-4 bg-accent-primary text-white font-bold text-lg tracking-wider rounded hover:bg-white hover:text-bg-main transition-all duration-300 shadow-[0_0_30px_rgba(242,95,37,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                        GET STARTED NOW
                                    </button>

                                    <p className="text-center text-xs text-text-body mt-4">
                                        Secure payment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Grid */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-text-header text-center mb-8">
                            EVERYTHING YOU NEED TO <span className="text-accent-primary">MASTER DSA</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="tech-border bg-bg-secondary p-6 text-center">
                                <Trophy className="w-10 h-10 text-accent-primary mx-auto mb-4" />
                                <h3 className="font-bold text-text-header mb-2">150+ Challenges</h3>
                                <p className="text-sm text-text-body">Curated problems covering all major DSA patterns</p>
                            </div>

                            <div className="tech-border bg-bg-secondary p-6 text-center">
                                <BookOpen className="w-10 h-10 text-accent-secondary mx-auto mb-4" />
                                <h3 className="font-bold text-text-header mb-2">Story Campaigns</h3>
                                <p className="text-sm text-text-body">Learn through immersive narrative-driven modules</p>
                            </div>

                            <div className="tech-border bg-bg-secondary p-6 text-center">
                                <Code className="w-10 h-10 text-green-400 mx-auto mb-4" />
                                <h3 className="font-bold text-text-header mb-2">Multi-Language</h3>
                                <p className="text-sm text-text-body">Code in Go, TypeScript, or C++</p>
                            </div>

                            <div className="tech-border bg-bg-secondary p-6 text-center">
                                <Terminal className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                                <h3 className="font-bold text-text-header mb-2">Powerful CLI</h3>
                                <p className="text-sm text-text-body">Work in your own environment with our CLI tool</p>
                            </div>

                            <div className="tech-border bg-bg-secondary p-6 text-center">
                                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                                <h3 className="font-bold text-text-header mb-2">XP & Progress</h3>
                                <p className="text-sm text-text-body">Track your growth with our gamified system</p>
                            </div>

                            <div className="tech-border bg-bg-secondary p-6 text-center">
                                <Cpu className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                                <h3 className="font-bold text-text-header mb-2">Regular Updates</h3>
                                <p className="text-sm text-text-body">New challenges and features added regularly</p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-text-header text-center mb-8">
                            FREQUENTLY ASKED QUESTIONS
                        </h2>

                        <div className="space-y-4">
                            <div className="tech-border bg-bg-secondary p-6">
                                <h3 className="font-bold text-text-header mb-2">Can I cancel anytime?</h3>
                                <p className="text-sm text-text-body">
                                    Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.
                                </p>
                            </div>

                            <div className="tech-border bg-bg-secondary p-6">
                                <h3 className="font-bold text-text-header mb-2">What payment methods do you accept?</h3>
                                <p className="text-sm text-text-body">
                                    We accept all major credit cards, debit cards, and other payment methods supported by Stripe.
                                </p>
                            </div>

                            <div className="tech-border bg-bg-secondary p-6">
                                <h3 className="font-bold text-text-header mb-2">Do you offer refunds?</h3>
                                <p className="text-sm text-text-body">
                                    All payments are final and non-refundable. Refunds are only considered for verified billing mistakes.
                                    See our <Link href="/terms" className="text-accent-primary hover:underline">Terms of Service</Link> for details.
                                </p>
                            </div>

                            <div className="tech-border bg-bg-secondary p-6">
                                <h3 className="font-bold text-text-header mb-2">What languages can I code in?</h3>
                                <p className="text-sm text-text-body">
                                    Currently we support Go, TypeScript, and C++. More languages may be added based on demand.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="mt-16 text-center">
                        <p className="text-xs text-text-body">
                            By subscribing, you agree to our{" "}
                            <Link href="/terms" className="text-accent-primary hover:underline">Terms of Service</Link>
                            {" "}and{" "}
                            <Link href="/privacy" className="text-accent-secondary hover:underline">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="border-t border-border-brutal py-8 bg-bg-secondary">
                <div className="container mx-auto px-4 text-center text-xs text-gray-600">
                    © 2025 ALGOCHARM. ALL RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    );
}
