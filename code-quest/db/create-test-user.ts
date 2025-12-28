// Create a test user with an API key
// Run with: npx tsx db/create-test-user.ts

import { config } from 'dotenv';
config({ path: '.env.local' });

async function createTestUser() {
    const { db } = await import('./index');
    const { users } = await import('./schema');

    console.log('🔧 Creating test user...\n');

    const testUser = {
        clerkId: 'test_clerk_id_123',
        email: 'divyanshu1447@gmail.com',
        username: 'TestAgent',
        level: 1,
        xp: 0,
        apiKey: 'cq_gwq63lsdcp',  // Your API key
    };

    try {
        const result = await db.insert(users).values(testUser).returning();
        console.log('✅ Test user created!');
        console.log(`   ID: ${result[0].id}`);
        console.log(`   Email: ${result[0].email}`);
        console.log(`   API Key: ${result[0].apiKey}`);
    } catch (error: unknown) {
        if ((error as Error).message?.includes('duplicate')) {
            console.log('⚠️  User already exists. Updating API key...');
            const { eq } = await import('drizzle-orm');
            await db.update(users)
                .set({ apiKey: testUser.apiKey })
                .where(eq(users.email, testUser.email));
            console.log('✅ API key updated!');
        } else {
            throw error;
        }
    }

    process.exit(0);
}

createTestUser().catch(e => { console.error('❌ Error:', e); process.exit(1); });
