-- Add test_sessions table for challenge-response verification
CREATE TABLE IF NOT EXISTS "test_sessions" (
  "id" text PRIMARY KEY NOT NULL,
  "user_id" integer NOT NULL REFERENCES "users"("id"),
  "exercise_id" text NOT NULL REFERENCES "exercises"("id"),
  "test_inputs" jsonb NOT NULL,
  "expected_hash" text NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "expires_at" timestamp NOT NULL
);

-- Add new columns to exercises table
ALTER TABLE "exercises" ADD COLUMN IF NOT EXISTS "public_tests" jsonb;
ALTER TABLE "exercises" ADD COLUMN IF NOT EXISTS "hidden_tests" jsonb;

-- Migrate existing test_cases data to hidden_tests (keep public_tests empty for now)
UPDATE "exercises" SET "hidden_tests" = "test_cases" WHERE "hidden_tests" IS NULL;
UPDATE "exercises" SET "public_tests" = '[]'::jsonb WHERE "public_tests" IS NULL;

-- Make new columns NOT NULL after migration
ALTER TABLE "exercises" ALTER COLUMN "public_tests" SET NOT NULL;
ALTER TABLE "exercises" ALTER COLUMN "hidden_tests" SET NOT NULL;

-- Drop old column (optional - do this after verifying migration works)
-- ALTER TABLE "exercises" DROP COLUMN IF EXISTS "test_cases";
