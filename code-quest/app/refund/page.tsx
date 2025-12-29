import { Terminal, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col font-mono bg-bg-main">
            {/* Header */}
            <header className="border-b border-border-brutal bg-bg-main/90 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-accent-primary" />
                        <span className="text-xl font-bold tracking-tighter text-text-header">ALGOCHARM</span>
                    </Link>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
                            <RotateCcw className="w-3 h-3" />
                            Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-header mb-4">
                            REFUND POLICY
                        </h1>
                        <p className="text-text-body">
                            Last updated: February 26, 2025
                        </p>
                        <p className="text-text-body mt-2">
                            <strong>Legal Business Name:</strong> WorkBuzz
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">1. Introduction</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                This Refund Policy ("Policy") applies to the purchase of digital products and subscriptions via WorkBuzz ("we", "us", or "our"), operating the AlgoCharm platform.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">2. Order Process and Merchant of Record</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6 border-accent-primary/30">
                            <h2 className="text-xl font-bold text-text-header mb-4">3. Consumer Right to Cancel (14-Day Guarantee)</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                If you are a Consumer, you have the right to cancel this Agreement and return the Product within <strong>14 days</strong> without giving any reason. The cancellation period will expire after 14 days from the day after completion of the Transaction.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                To meet the cancellation deadline, it is sufficient that you send us your communication concerning your exercise of the cancellation right before the expiration of the 14 day period.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed">
                                To cancel your order, you must inform us (WorkBuzz) or Paddle of your decision. You may contact us at <span className="text-accent-primary">divyanshu1447@gmail.com</span>.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">4. Effect of Cancellation</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                If you cancel this Agreement as permitted above, we will reimburse to you all payments received from you.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                We will make the reimbursement without undue delay, and not later than 14 days after the day on which we are informed about your decision to cancel this Agreement.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed">
                                We will make the reimbursement using the same means of payment as you used for the initial transaction and you will not incur any fees as a result of the reimbursement.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">5. Exception to the Right to Cancel</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                Your right as a Consumer to cancel your order does not apply to the supply of Digital Content that you have started to download, stream or otherwise acquire and to Products which you have had the benefit of.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">6. Paddle Refund Policy</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                Refunds are provided at the sole discretion of Paddle and on a case-by-case basis and may be refused. Paddle will refuse a refund request if they find evidence of fraud, refund abuse, or other manipulative behaviour.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed">
                                This does not affect your rights as a Consumer in relation to Products which are not as described, faulty or not fit for purpose.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">7. Contact Us</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                To request a refund or if you have questions regarding this policy, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-black/30 rounded">
                                <p className="text-text-body text-sm">
                                    <strong className="text-text-header">WorkBuzz</strong><br />
                                    Email: <span className="text-accent-primary">divyanshu1447@gmail.com</span>
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Navigation */}
                    <div className="mt-12 flex gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-border-brutal text-text-body font-bold tracking-wider hover:bg-border-brutal hover:text-white transition-all"
                        >
                            ← Back to Home
                        </Link>
                        <Link
                            href="/terms"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-bold tracking-wider hover:bg-white hover:text-bg-main transition-all"
                        >
                            Terms of Service →
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="border-t border-border-brutal py-8 bg-bg-secondary">
                <div className="container mx-auto px-4 text-center text-xs text-gray-600">
                    © 2025 ALGOCHARM (operated by WorkBuzz). ALL RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    );
}