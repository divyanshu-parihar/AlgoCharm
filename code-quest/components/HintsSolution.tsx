'use client';

import { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface HintTooltipProps {
    hints: string[];
}

export function HintTooltip({ hints }: HintTooltipProps) {
    const [revealedCount, setRevealedCount] = useState(0);

    if (!hints || hints.length === 0) return null;

    return (
        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center gap-2 text-yellow-400 font-bold mb-3">
                <Lightbulb className="w-5 h-5" />
                <span>Need a nudge?</span>
            </div>

            <div className="space-y-2">
                {hints.map((hint, index) => (
                    <div key={index}>
                        {index < revealedCount ? (
                            <div className="text-sm text-gray-300 p-2 bg-black/20 rounded">
                                <span className="text-yellow-400 font-bold">Hint {index + 1}:</span> {hint}
                            </div>
                        ) : index === revealedCount ? (
                            <button
                                onClick={() => setRevealedCount(prev => prev + 1)}
                                className="text-sm text-yellow-400 hover:text-yellow-300 underline"
                            >
                                🔍 Reveal Hint {index + 1}
                            </button>
                        ) : (
                            <div className="text-sm text-gray-600">
                                Hint {index + 1} (reveal previous hints first)
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {revealedCount > 0 && revealedCount < hints.length && (
                <p className="text-xs text-gray-500 mt-2">
                    Try with these hints before revealing more!
                </p>
            )}
        </div>
    );
}

interface SolutionRevealProps {
    solutions: {
        cpp?: string;
        python?: string;
        typescript?: string;
    };
    explanation: string;
    patternTips: string;
}

export function SolutionReveal({ solutions, explanation, patternTips }: SolutionRevealProps) {
    const [isRevealed, setIsRevealed] = useState(false);
    const [activeTab, setActiveTab] = useState<'cpp' | 'python' | 'typescript'>('python');

    const languageMap: Record<string, string> = {
        cpp: 'cpp',
        python: 'python',
        typescript: 'typescript',
    };

    return (
        <div className="border border-red-500/30 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsRevealed(!isRevealed)}
                className="w-full p-4 bg-red-500/10 hover:bg-red-500/20 flex items-center justify-between text-left transition-colors"
            >
                <div className="flex items-center gap-3">
                    {isRevealed ? (
                        <EyeOff className="w-5 h-5 text-red-400" />
                    ) : (
                        <Eye className="w-5 h-5 text-red-400" />
                    )}
                    <div>
                        <span className="font-bold text-red-400">
                            {isRevealed ? 'Hide Solution' : 'Show Solution'}
                        </span>
                        <p className="text-xs text-gray-500">
                            {isRevealed ? 'Try to solve it yourself first!' : 'Stuck? See the full solution'}
                        </p>
                    </div>
                </div>
                {isRevealed ? (
                    <ChevronUp className="w-5 h-5 text-red-400" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-red-400" />
                )}
            </button>

            {isRevealed && (
                <div className="p-4 bg-[#0a0a0a] space-y-4">
                    {/* Language Tabs */}
                    <div className="flex gap-2">
                        {solutions.python && (
                            <button
                                onClick={() => setActiveTab('python')}
                                className={`px-3 py-1.5 rounded text-xs font-mono ${activeTab === 'python'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                    }`}
                            >
                                Python
                            </button>
                        )}
                        {solutions.cpp && (
                            <button
                                onClick={() => setActiveTab('cpp')}
                                className={`px-3 py-1.5 rounded text-xs font-mono ${activeTab === 'cpp'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                    }`}
                            >
                                C++
                            </button>
                        )}
                        {solutions.typescript && (
                            <button
                                onClick={() => setActiveTab('typescript')}
                                className={`px-3 py-1.5 rounded text-xs font-mono ${activeTab === 'typescript'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                    }`}
                            >
                                TypeScript
                            </button>
                        )}
                    </div>

                    {/* Code Block with Syntax Highlighting */}
                    <div className="rounded-lg overflow-hidden text-sm">
                        <SyntaxHighlighter
                            language={languageMap[activeTab]}
                            style={oneDark}
                            customStyle={{
                                margin: 0,
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                fontSize: '0.75rem',
                            }}
                        >
                            {solutions[activeTab] || '// Solution not available'}
                        </SyntaxHighlighter>
                    </div>

                    {/* Explanation */}
                    <div className="space-y-3 pt-2">
                        <div>
                            <h4 className="font-bold text-white text-sm mb-1">💡 How It Works</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{explanation}</p>
                        </div>

                        <div>
                            <h4 className="font-bold text-white text-sm mb-1">🎯 Pattern Recognition</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{patternTips}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
