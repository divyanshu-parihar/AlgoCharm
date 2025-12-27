import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { ALL_PROBLEMS, TOTAL_PROBLEMS } from "./problems";

async function seedAllProblems() {
    const { db } = await import("./index");
    const { modules, exercises, lessons } = await import("./schema");
    const { eq } = await import("drizzle-orm");

    console.log(`\n🚀 Seeding ${TOTAL_PROBLEMS} problems across ${Object.keys(ALL_PROBLEMS).length} modules...\n`);

    for (const [moduleSlug, problems] of Object.entries(ALL_PROBLEMS)) {
        // Get module
        const mod = await db.select().from(modules).where(eq(modules.slug, moduleSlug)).limit(1);
        if (mod.length === 0) {
            console.log(`⚠️  Module not found: ${moduleSlug}`);
            continue;
        }

        console.log(`\n📦 ${mod[0].title} (${problems.length} problems)`);

        // Get current lesson count for ordering
        const existingLessons = await db.select().from(lessons).where(eq(lessons.moduleId, mod[0].id));
        let order = existingLessons.length > 0 ? Math.max(...existingLessons.map(l => l.order)) + 1 : 1;

        for (const problem of problems) {
            // Check if exercise already exists
            const existingEx = await db.select().from(exercises).where(eq(exercises.id, problem.slug)).limit(1);

            if (existingEx.length === 0) {
                // Create exercise
                await db.insert(exercises).values({
                    id: problem.slug,
                    title: problem.title,
                    description: `Solve the "${problem.title}" problem.`,
                    difficulty: problem.difficulty,
                    xpReward: problem.difficulty === "easy" ? 100 : problem.difficulty === "medium" ? 200 : 300,
                    starterCode: {
                        typescript: `export function solve(input: unknown): unknown {\n  // TODO: Implement ${problem.title}\n  return input;\n}`,
                        go: `package main\n\nfunc Solve(input interface{}) interface{} {\n\t// TODO: Implement ${problem.title}\n\treturn input\n}`,
                        cpp: `#include "nlohmann/json.hpp"\nusing json = nlohmann::json;\n\njson solve(json input) {\n    // TODO: Implement ${problem.title}\n    return input;\n}`,
                    },
                    publicTests: [
                        { input: "example", expected: "output" }
                    ],
                    hiddenTests: [
                        { input: "hidden_example", expected: "hidden_output" }
                    ],
                });
                console.log(`  ✓ Exercise: ${problem.title}`);
            } else {
                // Update difficulty if needed
                await db.update(exercises).set({ difficulty: problem.difficulty }).where(eq(exercises.id, problem.slug));
                console.log(`  ↻ Exercise updated: ${problem.title}`);
            }

            // Check if lesson exists
            const existingLesson = await db.select().from(lessons).where(eq(lessons.slug, problem.slug)).limit(1);

            if (existingLesson.length === 0) {
                // Create lesson
                await db.insert(lessons).values({
                    moduleId: mod[0].id,
                    slug: problem.slug,
                    title: problem.title,
                    storyContent: `## ${problem.title}\n\nA ${problem.difficulty} challenge that tests your problem-solving skills.\n\nOpen your terminal and type:\n\n\`\`\`bash\ncodequest start ${problem.slug}\n\`\`\`\n\nGood luck!`,
                    theoryContent: null,
                    hasExercise: true,
                    exerciseId: problem.slug,
                    order: order++,
                });
                console.log(`  ✓ Lesson: ${problem.title}`);
            } else {
                // Update existing lesson to link exercise
                await db.update(lessons)
                    .set({
                        hasExercise: true,
                        exerciseId: problem.slug
                    })
                    .where(eq(lessons.slug, problem.slug));
                console.log(`  ↻ Lesson linked: ${problem.title}`);
            }
        }
    }

    console.log(`\n✅ Done! Seeded ${TOTAL_PROBLEMS} problems.\n`);
    process.exit(0);
}

seedAllProblems().catch(e => { console.error(e); process.exit(1); });
