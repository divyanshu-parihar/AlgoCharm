// Migration script to apply schema changes
// Run with: npm run db:migrate

import { config } from 'dotenv';

// Load .env.local FIRST before anything else
config({ path: '.env.local' });

// Verify env loaded
console.log('DATABASE_URL loaded:', !!process.env.DATABASE_URL);

async function runMigration() {
  // Dynamic import AFTER env is loaded
  const { db } = await import('./index');
  const { sql } = await import('drizzle-orm');

  console.log('🚀 Running migration...\n');

  try {
    // 1. Create test_sessions table
    console.log('📦 Creating test_sessions table...');
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS "test_sessions" (
        "id" text PRIMARY KEY NOT NULL,
        "user_id" integer NOT NULL REFERENCES "users"("id"),
        "exercise_id" text NOT NULL REFERENCES "exercises"("id"),
        "test_inputs" jsonb NOT NULL,
        "expected_hash" text NOT NULL,
        "created_at" timestamp DEFAULT now() NOT NULL,
        "expires_at" timestamp NOT NULL
      )
    `);
    console.log('   ✅ test_sessions table created\n');

    // 2. Add new columns to exercises
    console.log('📦 Adding public_tests column...');
    await db.execute(sql`
      ALTER TABLE "exercises" 
      ADD COLUMN IF NOT EXISTS "public_tests" jsonb
    `);
    console.log('   ✅ public_tests column added\n');

    console.log('📦 Adding hidden_tests column...');
    await db.execute(sql`
      ALTER TABLE "exercises" 
      ADD COLUMN IF NOT EXISTS "hidden_tests" jsonb
    `);
    console.log('   ✅ hidden_tests column added\n');

    // 3. Migrate data: copy test_cases to hidden_tests
    console.log('📦 Migrating test_cases to hidden_tests...');
    await db.execute(sql`
      UPDATE "exercises" 
      SET "hidden_tests" = COALESCE("test_cases", '[]'::jsonb)
      WHERE "hidden_tests" IS NULL
    `);
    console.log('   ✅ Data migrated\n');

    // 4. Set default for public_tests
    console.log('📦 Setting default for public_tests...');
    await db.execute(sql`
      UPDATE "exercises" 
      SET "public_tests" = '[]'::jsonb 
      WHERE "public_tests" IS NULL
    `);
    console.log('   ✅ Default set\n');

    // 5. Make columns NOT NULL
    console.log('📦 Making columns NOT NULL...');
    await db.execute(sql`
      ALTER TABLE "exercises" 
      ALTER COLUMN "public_tests" SET NOT NULL
    `);
    await db.execute(sql`
      ALTER TABLE "exercises" 
      ALTER COLUMN "hidden_tests" SET NOT NULL
    `);
    console.log('   ✅ Constraints applied\n');

    console.log('🎉 Migration complete!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }

  process.exit(0);
}

runMigration();
