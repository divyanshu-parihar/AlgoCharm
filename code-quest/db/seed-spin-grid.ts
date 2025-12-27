// Seed sample test data for spin-grid (Rotate Image) exercise
// Run with: npx tsx db/seed-spin-grid.ts

import { config } from 'dotenv';
config({ path: '.env.local' });

async function seedSpinGrid() {
    const { db } = await import('./index');
    const { exercises } = await import('./schema');
    const { eq } = await import('drizzle-orm');

    console.log('🌱 Seeding test data for spin-grid...\n');

    // Spin Grid (Rotate Image) test cases
    const publicTests = [
        {
            input: [[1, 2], [3, 4]],
            expected: [[3, 1], [4, 2]]
        },
        {
            input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
        }
    ];

    const hiddenTests = [
        {
            input: [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]],
            expected: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
        },
        {
            input: [[1]],
            expected: [[1]]
        },
        {
            input: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]],
            expected: [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]
        },
        {
            input: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]],
            expected: [[21, 16, 11, 6, 1], [22, 17, 12, 7, 2], [23, 18, 13, 8, 3], [24, 19, 14, 9, 4], [25, 20, 15, 10, 5]]
        }
    ];

    try {
        // Check if spin-grid exists
        const existing = await db.select().from(exercises).where(eq(exercises.id, 'spin-grid')).limit(1);

        if (existing.length > 0) {
            // Update existing
            await db.update(exercises)
                .set({
                    publicTests: publicTests,
                    hiddenTests: hiddenTests,
                })
                .where(eq(exercises.id, 'spin-grid'));
            console.log('✅ Updated spin-grid test cases');
        } else {
            // Insert new exercise
            await db.insert(exercises).values({
                id: 'spin-grid',
                title: 'Spin Grid',
                description: `You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.

**Example:**
- Input: [[1,2,3],[4,5,6],[7,8,9]]
- Output: [[7,4,1],[8,5,2],[9,6,3]]`,
                starterCode: {
                    typescript: `export function solve(matrix: number[][]): number[][] {
  // TODO: Rotate the matrix 90 degrees clockwise
  // Hint: Transpose, then reverse each row
  return matrix;
}`,
                    go: `func Solve(input interface{}) interface{} {
    // TODO: Rotate the matrix 90 degrees clockwise
    // Hint: Transpose, then reverse each row
    return input
}`,
                    cpp: `json solve(json input) {
    // TODO: Rotate the matrix 90 degrees clockwise
    // Hint: Transpose, then reverse each row
    return input;
}`
                },
                publicTests: publicTests,
                hiddenTests: hiddenTests,
                difficulty: 'medium',
                xpReward: 100,
            });
            console.log('✅ Inserted spin-grid exercise with test cases');
        }

        console.log(`\n📊 Test data summary:`);
        console.log(`   Public tests: ${publicTests.length}`);
        console.log(`   Hidden tests: ${hiddenTests.length}`);
        console.log(`   Total: ${publicTests.length + hiddenTests.length}`);

    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }

    process.exit(0);
}

seedSpinGrid();
