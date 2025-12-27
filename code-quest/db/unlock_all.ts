import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function unlockAll() {
    const { db } = await import("./index");
    const { modules } = await import("./schema");

    await db.update(modules).set({ isLocked: false });
    console.log("✅ All modules unlocked!");

    const all = await db.select().from(modules);
    console.log("Modules:");
    for (const m of all) {
        console.log(`  - ${m.title} (locked=${m.isLocked})`);
    }

    process.exit(0);
}

unlockAll().catch(e => { console.error(e); process.exit(1); });
