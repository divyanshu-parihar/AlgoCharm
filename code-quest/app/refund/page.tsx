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
                            Last updated: December 28, 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">Business Information</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                AlgoCharm is operated by <strong className="text-text-header">WorkBuzz</strong>.
                                By purchasing a subscription or any services from AlgoCharm, you agree to the refund policy outlined below.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6 border-red-500/50">
                            <h2 className="text-xl font-bold text-red-400 mb-4">No Refunds Policy</h2>
                            <div className="bg-red-500/10 border border-red-500/30 rounded p-4 mb-4">
                                <p className="text-text-header text-sm font-bold">
                                    ⚠️ ALL SALES ARE FINAL
                                </p>
                            </div>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                <strong className="text-text-header">All payments made to AlgoCharm (operated by WorkBuzz) are final and non-refundable.</strong>
                                Once a payment is processed, no refunds will be issued under any circumstances, except as described below.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">Sole Exception</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                Refunds may <strong className="text-text-header">only</strong> be considered in the following circumstance:
                            </p>
                            <div className="bg-accent-primary/10 border border-accent-primary/30 rounded p-4">
                                <p className="text-text-body text-sm leading-relaxed">
                                    <strong className="text-text-header">Serious or Genuine Billing Mistakes:</strong> If a billing error occurs
                                    (such as duplicate charges, incorrect amounts, or technical payment errors), you may request a refund review.
                                    All such requests are subject to verification and approval <strong className="text-text-header">at the sole discretion
                                        of the owner of WorkBuzz</strong>.
                                </p>
                            </div>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">How to Request a Review</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                If you believe you have experienced a genuine billing mistake:
                            </p>
                            <ol className="list-decimal list-inside text-text-body text-sm space-y-2">
                                <li>Contact us within <strong className="text-text-header">7 days</strong> of the transaction</li>
                                <li>Provide proof of the billing error (screenshots, bank statements, etc.)</li>
                                <li>Include your account email and transaction details</li>
                                <li>Email your request to: <span className="text-accent-primary">divyanshu1447@gmail.com</span></li>
                            </ol>
                            <p className="text-text-body text-sm leading-relaxed mt-4">
                                Requests submitted after 7 days or without sufficient documentation will not be considered.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">Subscription Cancellation</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                You may cancel your subscription at any time. Upon cancellation, you will retain access to your subscription
                                benefits until the end of your current billing period. <strong className="text-text-header">No partial refunds</strong>
                                will be issued for unused time remaining in your billing cycle.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">Contact Information</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                For questions about this Refund Policy or to request a billing error review, contact:
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
