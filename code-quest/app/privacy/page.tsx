import { Terminal, Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-secondary/30 bg-accent-secondary/5 text-accent-secondary text-xs font-bold tracking-widest uppercase mb-6">
                            <Shield className="w-3 h-3" />
                            Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-header mb-4">
                            PRIVACY POLICY
                        </h1>
                        <p className="text-text-body">
                            Last updated: December 28, 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">1. Introduction</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                AlgoCharm ("we", "our", or "us") is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, and safeguard your information
                                when you use our platform and services.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">2. Information We Collect</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                We collect the following types of information:
                            </p>
                            <ul className="list-disc list-inside text-text-body text-sm space-y-2">
                                <li><strong className="text-text-header">Account Information:</strong> Email address, username, and authentication data</li>
                                <li><strong className="text-text-header">Payment Information:</strong> Processed securely by our payment provider (we do not store full card details)</li>
                                <li><strong className="text-text-header">Usage Data:</strong> Problems attempted, solutions submitted, progress, and XP earned</li>
                                <li><strong className="text-text-header">Technical Data:</strong> IP address, browser type, device information, and access times</li>
                            </ul>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">3. How We Use Your Information</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                We use collected information to:
                            </p>
                            <ul className="list-disc list-inside text-text-body text-sm space-y-2">
                                <li>Provide and maintain the Platform</li>
                                <li>Process payments and manage subscriptions</li>
                                <li>Track your learning progress and personalize your experience</li>
                                <li>Communicate with you about updates and support</li>
                                <li>Improve our services and develop new features</li>
                                <li>Prevent fraud and ensure platform security</li>
                            </ul>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">4. Data Storage & Security</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                Your data is stored securely using industry-standard encryption and security practices.
                                We use trusted third-party services for authentication and payment processing.
                                While we implement appropriate safeguards, no method of transmission over the Internet
                                is 100% secure.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">5. Third-Party Services</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                We use the following third-party services:
                            </p>
                            <ul className="list-disc list-inside text-text-body text-sm space-y-2">
                                <li><strong className="text-text-header">Authentication:</strong> Clerk for secure user authentication</li>
                                <li><strong className="text-text-header">Payment Processing:</strong> Stripe for secure payment handling</li>
                                <li><strong className="text-text-header">Analytics:</strong> Basic usage analytics to improve the platform</li>
                            </ul>
                            <p className="text-text-body text-sm leading-relaxed mt-4">
                                These services have their own privacy policies and we recommend reviewing them.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">6. Your Rights</h2>
                            <p className="text-text-body text-sm leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-text-body text-sm space-y-2">
                                <li>Access the personal data we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your account and associated data</li>
                                <li>Cancel your subscription at any time</li>
                            </ul>
                            <p className="text-text-body text-sm leading-relaxed mt-4">
                                To exercise these rights, contact us at the email provided below.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">7. Cookies</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                We use essential cookies for authentication and session management.
                                These are necessary for the Platform to function properly.
                                By using our Platform, you consent to the use of essential cookies.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">8. Children's Privacy</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                Our Platform is not intended for children under 13 years of age.
                                We do not knowingly collect personal information from children under 13.
                                If you are a parent and believe your child has provided us with personal information,
                                please contact us.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">9. Changes to This Policy</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any
                                material changes by posting the new Privacy Policy on this page and updating
                                the "Last updated" date.
                            </p>
                        </section>

                        <section className="tech-border bg-bg-secondary p-6">
                            <h2 className="text-xl font-bold text-text-header mb-4">10. Contact Us</h2>
                            <p className="text-text-body text-sm leading-relaxed">
                                If you have questions about this Privacy Policy, please contact us at:
                                <span className="text-accent-secondary ml-1">divyanshu1447@gmail.com</span>
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
                            href="/terms"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-secondary text-white font-bold tracking-wider hover:bg-white hover:text-bg-main transition-all"
                        >
                            Terms of Service →
                        </Link>
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
