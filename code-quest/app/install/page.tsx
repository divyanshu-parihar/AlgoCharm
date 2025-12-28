import { Terminal, Download, Apple, Monitor } from "lucide-react";
import Link from "next/link";

export default function InstallPage() {
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
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-accent-primary text-xs font-bold tracking-widest uppercase mb-6">
                            <Download className="w-3 h-3" />
                            Installation Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-header mb-4">
                            INSTALL THE CLI
                        </h1>
                        <p className="text-text-body text-lg max-w-xl mx-auto">
                            Use your own custom environment for learning. Install our CLI and code in your favorite IDE with your preferred tools.
                        </p>
                    </div>

                    {/* Installation Options */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* macOS / Linux */}
                        <div className="tech-border bg-bg-secondary p-8 hover:shadow-[0_0_30px_rgba(39,201,63,0.1)] transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <Apple className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-text-header">macOS / Linux</h2>
                                    <p className="text-sm text-text-body">Bash installation script</p>
                                </div>
                            </div>

                            <p className="text-sm text-text-body mb-4">
                                Run this command in your terminal:
                            </p>

                            <pre className="bg-black/50 p-4 rounded font-mono text-sm text-green-400 overflow-x-auto mb-6">
                                <code>curl -fsSL https://raw.githubusercontent.com/divyanshu-parihar/charm-cli/main/install.sh | bash</code>
                            </pre>

                            <a
                                href="https://github.com/divyanshu-parihar/charm-cli/blob/main/install.sh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-accent-primary hover:text-white transition-colors"
                            >
                                View install.sh on GitHub →
                            </a>
                        </div>

                        {/* Windows */}
                        <div className="tech-border bg-bg-secondary p-8 hover:shadow-[0_0_30px_rgba(88,166,255,0.1)] transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                                    <Monitor className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-text-header">Windows</h2>
                                    <p className="text-sm text-text-body">PowerShell installation script</p>
                                </div>
                            </div>

                            <p className="text-sm text-text-body mb-4">
                                Run this command in PowerShell (as Administrator):
                            </p>

                            <pre className="bg-black/50 p-4 rounded font-mono text-sm text-blue-400 overflow-x-auto mb-6">
                                <code>irm https://raw.githubusercontent.com/divyanshu-parihar/charm-cli/main/install.ps1 | iex</code>
                            </pre>

                            <a
                                href="https://github.com/divyanshu-parihar/charm-cli/blob/main/install.ps1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-accent-secondary hover:text-white transition-colors"
                            >
                                View install.ps1 on GitHub →
                            </a>
                        </div>
                    </div>

                    {/* Why Local */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-text-header mb-4">Why Local Development?</h3>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="p-6 border border-border-brutal rounded-lg">
                                <div className="text-3xl mb-3">🛠️</div>
                                <h4 className="font-bold text-text-header mb-2">Your Tools</h4>
                                <p className="text-sm text-text-body">Use VS Code, Neovim, or any IDE you love</p>
                            </div>
                            <div className="p-6 border border-border-brutal rounded-lg">
                                <div className="text-3xl mb-3">⚡</div>
                                <h4 className="font-bold text-text-header mb-2">Instant Feedback</h4>
                                <p className="text-sm text-text-body">Run tests locally with zero latency</p>
                            </div>
                            <div className="p-6 border border-border-brutal rounded-lg">
                                <div className="text-3xl mb-3">🔒</div>
                                <h4 className="font-bold text-text-header mb-2">Your Environment</h4>
                                <p className="text-sm text-text-body">Keep your code on your machine</p>
                            </div>
                        </div>
                    </div>

                    {/* Back to home */}
                    <div className="mt-16 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-white font-bold tracking-wider hover:bg-white hover:text-bg-main transition-all duration-300"
                        >
                            ← Back to Home
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
