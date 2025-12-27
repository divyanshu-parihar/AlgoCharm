// Seed all exercises with comprehensive test cases
// Run with: npx tsx db/seed-all-tests.ts

import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { db } from './index';
import { exercises } from './schema';
import { eq } from 'drizzle-orm';
import { ALL_EXERCISE_TESTS, ExerciseTests } from './test-cases';

async function seedAllTests() {
    console.log('🧪 Seeding comprehensive test cases for all exercises...\n');

    let updated = 0;
    let notFound = 0;

    for (const [exerciseId, tests] of Object.entries(ALL_EXERCISE_TESTS)) {
        const existing = await db
            .select({ id: exercises.id })
            .from(exercises)
            .where(eq(exercises.id, exerciseId))
            .limit(1);

        if (existing.length === 0) {
            console.log(`  ⚠️  ${exerciseId}: Not found in database`);
            notFound++;
            continue;
        }

        await db
            .update(exercises)
            .set({
                publicTests: tests.publicTests,
                hiddenTests: tests.hiddenTests,
            })
            .where(eq(exercises.id, exerciseId));

        const publicCount = tests.publicTests.length;
        const hiddenCount = tests.hiddenTests.length;
        console.log(`  ✅ ${exerciseId}: ${publicCount} public, ${hiddenCount} hidden tests`);
        updated++;
    }

    console.log(`\n📊 Summary:`);
    console.log(`   Updated: ${updated} exercises`);
    if (notFound > 0) {
        console.log(`   Not found: ${notFound} exercises (run main seed first)`);
    }

    process.exit(0);
}

seedAllTests().catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
});
