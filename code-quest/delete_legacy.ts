import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { eq } from "drizzle-orm";

async function deleteLegacy() {
  const { db } = await import("./db/index");
  const { modules, lessons } = await import("./db/schema");
  
  const legacySlugs = ["linked-list-labyrinth", "stack-queue-citadel"];
  
  for (const slug of legacySlugs) {
    const mod = await db.select().from(modules).where(eq(modules.slug, slug)).limit(1);
    if (mod.length > 0) {
      console.log(`Deleting module: ${mod[0].title}`);
      await db.delete(lessons).where(eq(lessons.moduleId, mod[0].id));
      await db.delete(modules).where(eq(modules.slug, slug));
    }
  }
  console.log("Done!");
  process.exit(0);
}
deleteLegacy();
