"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Copy, Check, Terminal, User, Zap, Target, ArrowLeft } from "lucide-react";
import Link from "next/link";

function generateApiKey(userId: string): string {
    // Simple deterministic key generation based on userId
    // In production, this should be stored in DB and regeneratable
    const hash = userId.split('').reduce((acc, char) => {
        return ((acc << 5) - acc + char.charCodeAt(0)) | 0;
    }, 0);
    return `cq_${Math.abs(hash).toString(36)}${Date.now().toString(36).slice(-4)}`;
}

export default function DashboardPage() {
    const { user, isLoaded } = useUser();
    const [copied, setCopied] = useState(false);
    const [copiedKey, setCopiedKey] = useState(false);

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
                <div className="text-accent-primary animate-pulse">Loading...</div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
                <div className="text-center space-y-4">
                    <p className="text-gray-400">Please sign in to view your dashboard.</p>
                    <Link href="/" className="text-accent-primary hover:underline">Go to Home</Link>
                </div>
            </div>
        );
    }

    const apiKey = generateApiKey(user.id);
    const loginCommand = `quest login ${apiKey}`;

    const copyToClipboard = (text: string, isKey: boolean) => {
        navigator.clipboard.writeText(text);
        if (isKey) {
            setCopiedKey(true);
            setTimeout(() => setCopiedKey(false), 2000);
        } else {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-[#0B0B0B] text-gray-300 font-mono">
            {/* Header */}
            <header className="border-b border-white/10 bg-[#0B0B0B]/90 backdrop-blur sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/campaign" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-widest">Campaign Map</span>
                    </Link>
                    <div className="text-xs text-gray-500">
                        OPERATIVE DASHBOARD
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto space-y-8">

                    {/* Profile Card */}
                    <div className="bg-[#111] border border-white/10 rounded-lg p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-accent-primary/20 border-2 border-accent-primary flex items-center justify-center">
                                {user.imageUrl ? (
                                    <img src={user.imageUrl} alt="Profile" className="w-full h-full rounded-full" />
                                ) : (
                                    <User className="w-8 h-8 text-accent-primary" />
                                )}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">{user.fullName || user.username || "Agent"}</h1>
                                <p className="text-gray-500 text-sm">{user.primaryEmailAddress?.emailAddress}</p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1 text-accent-primary">
                                    <Zap className="w-4 h-4" />
                                    <span className="text-2xl font-bold">0</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">XP EARNED</p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1 text-green-400">
                                    <Target className="w-4 h-4" />
                                    <span className="text-2xl font-bold">0</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">MISSIONS</p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1 text-purple-400">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">LEVEL</p>
                            </div>
                        </div>
                    </div>

                    {/* CLI Setup Section */}
                    <div className="bg-[#111] border border-white/10 rounded-lg p-6 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                                <Terminal className="w-5 h-5 text-accent-primary" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">CLI Setup</h2>
                                <p className="text-sm text-gray-500">Connect the Field Kit to your account</p>
                            </div>
                        </div>

                        {/* API Key */}
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase tracking-widest">Your API Key</label>
                            <div className="relative">
                                <div className="bg-black border border-white/20 rounded-lg p-4 font-mono text-sm flex items-center justify-between">
                                    <code className="text-accent-secondary">{apiKey}</code>
                                    <button
                                        onClick={() => copyToClipboard(apiKey, true)}
                                        className="text-gray-500 hover:text-white transition-colors"
                                    >
                                        {copiedKey ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Login Command */}
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase tracking-widest">Run this in your terminal</label>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition"></div>
                                <div className="relative bg-black border border-white/20 rounded-lg p-4 font-mono text-sm flex items-center justify-between">
                                    <span className="text-green-400">
                                        <span className="text-gray-500">$</span> {loginCommand}
                                    </span>
                                    <button
                                        onClick={() => copyToClipboard(loginCommand, false)}
                                        className="text-gray-500 hover:text-white transition-colors"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600">
                                This connects your CLI to your account. You only need to do this once.
                            </p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/campaign"
                            className="bg-[#111] border border-white/10 rounded-lg p-6 hover:border-accent-primary/50 transition-all text-center group"
                        >
                            <Target className="w-8 h-8 text-accent-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-white font-bold">Start Campaign</span>
                        </Link>
                        <a
                            href="https://github.com/code-quest/cli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#111] border border-white/10 rounded-lg p-6 hover:border-accent-primary/50 transition-all text-center group"
                        >
                            <Terminal className="w-8 h-8 text-accent-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-white font-bold">Download CLI</span>
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}
