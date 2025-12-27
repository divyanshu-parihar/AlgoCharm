import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { RICH_STORIES } from "./stories";

async function updateStories() {
    const { db } = await import("./index");
    const { lessons } = await import("./schema");
    const { eq } = await import("drizzle-orm");

    console.log("📖 Updating lessons with rich stories...\n");

    let updated = 0;

    for (const [slug, story] of Object.entries(RICH_STORIES)) {
        const result = await db.update(lessons)
            .set({
                storyContent: story.storyContent,
                theoryContent: story.theoryContent || null,
            })
            .where(eq(lessons.slug, slug));

        console.log(`✓ Updated: ${slug}`);
        updated++;
    }

    console.log(`\n✅ Updated ${updated} lessons with rich stories!\n`);
    process.exit(0);
}

updateStories().catch(e => { console.error(e); process.exit(1); });
