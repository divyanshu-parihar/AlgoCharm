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
                            <h2 className="text-xl font-bold text-text-header mb-4">3. Right to Cancel (14-Day Guarantee)</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                You have the right to cancel your order and request a refund within <strong>14 days</strong> of your purchase without giving any reason.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                To exercise your right to cancel, you must inform us of your decision by contacting our support team (or Paddle directly) via a clear statement.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed">
                                <strong>Deadline:</strong> The cancellation period will expire after 14 days from the day of the conclusion of the contract (the day the transaction was completed).
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">4. Effects of Cancellation</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                If you cancel this contract within the 14-day period, we will reimburse to you all payments received from you. We will make the reimbursement without undue delay, and not later than 14 days after the day on which we are informed about your decision to cancel this contract.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed">
                                We will make the reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of the reimbursement.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">5. Exceptions to the Right to Cancel</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                Please be aware that if you purchase digital content that is immediately available for download or use (such as software licenses or direct access SaaS tools), you acknowledge that by accessing the content, you may lose your right of withdrawal once the download or access has started, provided that we have received your express consent and acknowledgment of this waiver.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed">
                                However, even in this event, if the digital content is faulty, not as described, or fit for purpose, you retain your consumer rights to a refund or repair.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">6. Contact Us</h2>
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