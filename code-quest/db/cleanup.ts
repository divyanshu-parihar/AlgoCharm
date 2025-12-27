import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { eq, inArray, or, like } from "drizzle-orm";

async function cleanup() {
    const { db } = await import("./index");
    const { modules, lessons, exercises } = await import("./schema");

    console.log("🧹 Cleaning up old duplicate modules...\n");

    // Old slugs to remove (replaced by new original names)
    const oldModuleSlugs = [
        "arrays",       // replaced by data-vault
        "two-pointers", // replaced by dual-scanners
        "sliding-window", // replaced by moving-frame
        "stack",        // replaced by lifo-tower
        "binary-search", // replaced by divide-conquer
        "linked-list",   // replaced by chain-links
        "trees",         // replaced by branching-paths
        "tries",         // replaced by prefix-networks
        "heap",          // replaced by priority-lanes
        "backtracking",  // replaced by trial-error
        "graphs",        // replaced by network-maps
        "advanced-graphs", // replaced by route-optimization
        "dp-1d",         // replaced by memory-lane
        "dp-2d",         // replaced by grid-game
        "greedy",        // replaced by quick-decisions
        "intervals",     // replaced by time-blocks
        "bit-manipulation", // replaced by binary-logic
        "math-geometry", // replaced by number-theory
        // Old legacy modules
        "linked-list-labyrinth",
        "stack-queue-citadel",
    ];

    // Delete lessons for old modules first (due to foreign key)
    for (const slug of oldModuleSlugs) {
        const oldModule = await db.select().from(modules).where(eq(modules.slug, slug)).limit(1);
        if (oldModule.length > 0) {
            console.log(`  Deleting lessons for module: ${oldModule[0].title}`);
            await db.delete(lessons).where(eq(lessons.moduleId, oldModule[0].id));
            console.log(`  Deleting module: ${oldModule[0].title}`);
            await db.delete(modules).where(eq(modules.slug, slug));
        }
    }

    // Also delete old exercises that were replaced
    const oldExerciseIds = [
        "arrays-1", "arrays-2", "arrays-3", "arrays-4", "arrays-5",
        "contains-duplicate", "valid-anagram", "two-sum",
        "group-anagrams", "top-k-frequent", "product-except-self", "longest-consecutive",
        "valid-palindrome", "two-sum-ii", "three-sum", "container-water", "trapping-rain-water",
        "best-time-buy-sell", "longest-substring-no-repeat", "longest-repeating-replacement",
        "permutation-in-string", "minimum-window-substring",
    ];

    for (const id of oldExerciseIds) {
        const existing = await db.select().from(exercises).where(eq(exercises.id, id)).limit(1);
        if (existing.length > 0) {
            console.log(`  Deleting old exercise: ${existing[0].title}`);
            await db.delete(exercises).where(eq(exercises.id, id));
        }
    }

    console.log("\n✅ Cleanup complete!");
    process.exit(0);
}

cleanup().catch((err) => {
    console.error("❌ Cleanup failed:", err);
    process.exit(1);
});
