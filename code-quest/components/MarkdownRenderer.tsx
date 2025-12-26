"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
    return (
        <div className={`prose prose-invert max-w-none ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    // Code blocks with syntax highlighting
                    code({ inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || "");
                        const codeString = String(children).replace(/\n$/, "");

                        if (inline) {
                            return (
                                <code className="bg-gray-800 px-1.5 py-0.5 rounded text-accent-primary font-mono text-sm" {...props}>
                                    {children}
                                </code>
                            );
                        }

                        if (match) {
                            return (
                                <SyntaxHighlighter
                                    style={atomDark}
                                    language={match[1]}
                                    PreTag="div"
                                    customStyle={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}
                                    {...props}
                                >
                                    {codeString}
                                </SyntaxHighlighter>
                            );
                        }

                        return (
                            <pre className="bg-[#0d0d0d] border border-white/10 rounded-lg p-4 overflow-x-auto my-4">
                                <code className="text-green-400 font-mono text-sm whitespace-pre">{children}</code>
                            </pre>
                        );
                    },

                    h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4 first:mt-0">{children}</h1>,
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-white mt-6 mb-3 flex items-center gap-2">
                            <span className="text-accent-primary">#</span> {children}
                        </h2>
                    ),
                    h3: ({ children }) => <h3 className="text-xl font-bold text-white mt-4 mb-2">{children}</h3>,

                    p: ({ children }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,

                    ul: ({ children }) => <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">{children}</ol>,

                    strong: ({ children }) => <strong className="text-accent-secondary font-bold">{children}</strong>,
                    em: ({ children }) => <em className="text-gray-400 italic">{children}</em>,

                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-accent-primary pl-4 my-4 italic text-gray-400 bg-accent-primary/5 py-2 rounded-r">
                            {children}
                        </blockquote>
                    ),

                    hr: () => <hr className="border-white/10 my-8" />,

                    table: ({ children }) => (
                        <div className="overflow-x-auto my-4">
                            <table className="w-full border border-white/10 rounded-lg overflow-hidden">{children}</table>
                        </div>
                    ),
                    th: ({ children }) => (
                        <th className="bg-[#1a1a1a] px-4 py-2 text-left text-white font-bold border-b border-white/10">{children}</th>
                    ),
                    td: ({ children }) => (
                        <td className="px-4 py-2 text-gray-300 border-b border-white/5">{children}</td>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
