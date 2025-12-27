import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { eq, or, like } from "drizzle-orm";

async function deleteLegacy() {
    const { db } = await import("./index");
    const { modules, lessons } = await import("./schema");

    // Find and delete legacy modules
    const legacyPatterns = ['labyrinth', 'citadel'];

    const allMods = await db.select().from(modules);

    for (const mod of allMods) {
        const isLegacy = legacyPatterns.some(p => mod.slug.includes(p) || mod.title.toLowerCase().includes(p));
        if (isLegacy) {
            console.log(`Deleting legacy module: ${mod.title} (${mod.slug})`);
            await db.delete(lessons).where(eq(lessons.moduleId, mod.id));
            await db.delete(modules).where(eq(modules.id, mod.id));
        }
    }

    // Show current lesson order for data-vault
    const dataVault = await db.select().from(modules).where(eq(modules.slug, "data-vault")).limit(1);
    if (dataVault.length > 0) {
        const dataVaultLessons = await db.select().from(lessons).where(eq(lessons.moduleId, dataVault[0].id)).orderBy(lessons.order);
        console.log("\nData Vault lessons (ordered):");
        for (const l of dataVaultLessons) {
            console.log(`  ${l.order}: ${l.title}`);
        }
    }

    console.log("\nDone!");
    process.exit(0);
}

deleteLegacy().catch(e => { console.error(e); process.exit(1); });
