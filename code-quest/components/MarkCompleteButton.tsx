"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface MarkCompleteButtonProps {
    lessonSlug: string;
    isCompleted: boolean;
    nextLessonUrl?: string;
}

export function MarkCompleteButton({ lessonSlug, isCompleted, nextLessonUrl }: MarkCompleteButtonProps) {
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(isCompleted);
    const router = useRouter();

    const handleMarkComplete = async () => {
        if (completed) return;

        setLoading(true);
        try {
            const response = await fetch("/api/progress", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ lessonSlug }),
            });

            if (response.ok) {
                setCompleted(true);
                router.refresh();

                // Navigate to next lesson after a short delay
                if (nextLessonUrl) {
                    setTimeout(() => {
                        router.push(nextLessonUrl);
                    }, 500);
                }
            }
        } catch (error) {
            console.error("Error marking complete:", error);
        } finally {
            setLoading(false);
        }
    };

    if (completed) {
        return (
            <div className="flex items-center gap-2 px-6 py-3 bg-green-500/20 text-green-400 font-bold rounded-lg border border-green-500/30">
                <CheckCircle className="w-5 h-5" />
                COMPLETED
            </div>
        );
    }

    return (
        <button
            onClick={handleMarkComplete}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-bold rounded-lg hover:bg-white hover:text-[#0B0B0B] transition-colors disabled:opacity-50"
        >
            {loading ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    SAVING...
                </>
            ) : (
                <>
                    <CheckCircle className="w-5 h-5" />
                    MARK COMPLETE
                </>
            )}
        </button>
    );
}
