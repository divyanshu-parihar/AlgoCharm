import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// Check if we are in a browser environment (Next.js client) to prevent connection errors
if (typeof window !== "undefined") {
  throw new Error("db.ts should not be imported on the client side!");
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  // In development, we might not have the DB set up yet. 
  // We'll warn but allow the app to build, possibly crashing at runtime if DB accessed.
  console.warn("⚠️ DATABASE_URL is not set. Database features will fail.");
}

const pool = new Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false } // Required for Supabase/Neon
});

export const db = drizzle(pool, { schema });
