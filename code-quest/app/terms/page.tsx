import { Terminal, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-accent-primary text-xs font-bold tracking-widest uppercase mb-6">
                            <FileText className="w-3 h-3" />
                            Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-header mb-4">
                            TERMS OF SERVICE
                        </h1>
                        <p className="text-text-body">
                            Last updated: February 26, 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">Company Information</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                <strong className="text-text-header">Legal Business Name:</strong> WorkBuzz<br />
                                <strong className="text-text-header">Platform Name:</strong> AlgoCharm<br />
                                <strong className="text-text-header">Contact Email:</strong> divyanshu1447@gmail.com
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">1. Acceptance of Terms</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                By accessing or using AlgoCharm ("the Platform"), operated by <strong className="text-text-header">WorkBuzz</strong>,
                                you agree to be bound by these Terms of Service.
                                If you do not agree to these terms, please do not use the Platform.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">2. Description of Service</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                AlgoCharm, operated by WorkBuzz, is a gamified algorithm learning platform that provides coding challenges,
                                educational content, and a CLI tool for practicing data structures and algorithms.
                                The service is provided on a subscription basis.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">3. Subscription & Payment</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                Access to the full Platform requires a paid subscription at $9.99 USD per month.
                                Payment is processed securely through our payment provider.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed">
                                By subscribing, you authorize us to charge your payment method on a recurring monthly basis
                                until you cancel your subscription.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6 border-accent-primary">
                            <h2 className="text-xl font-bold text-accent-primary mb-4">4. Refund Policy</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                Purchases made on AlgoCharm (operated by WorkBuzz) are handled by our Merchant of Record, Paddle.com.
                            </p>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                You have the right to cancel your order and request a refund within <strong>14 days</strong> of your purchase without giving any reason.
                            </p>
                            <p className="text-text-body text-sm">
                                For full details on cancellation rights, exceptions, and how to request a refund, please see our dedicated <a href="/refund" className="text-accent-primary hover:underline">Refund Policy</a>.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">5. User Conduct</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-text-body text-sm space-y-2">
                                <li>Share your account credentials with others</li>
                                <li>Attempt to reverse engineer or hack the Platform</li>
                                <li>Use the Platform for any unlawful purpose</li>
                                <li>Redistribute or resell any content from the Platform</li>
                                <li>Interfere with the proper functioning of the Platform</li>
                            </ul>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">6. Intellectual Property</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                All content on the Platform, including but not limited to problems, solutions, educational materials,
                                and the CLI tool, is the intellectual property of WorkBuzz (operating as AlgoCharm) and is protected by copyright laws.
                                You may not copy, distribute, or create derivative works without express permission.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">7. Termination</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                We reserve the right to terminate or suspend your account at any time for violations of these
                                Terms of Service. Upon termination, your right to use the Platform will immediately cease.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">8. Disclaimer of Warranties</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                The Platform is provided "as is" without warranties of any kind. We do not guarantee that the
                                Platform will be error-free, uninterrupted, or meet your specific requirements.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">9. Contact</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                For questions about these Terms of Service, please contact us at:
                                <span className="text-accent-primary ml-1">divyanshu1447@gmail.com</span>
                            </p>
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
                            href="/privacy"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-bold tracking-wider hover:bg-white hover:text-bg-main transition-all"
                        >
                            Privacy Policy →
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