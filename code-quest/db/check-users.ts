// Check users in database
// Run with: npx tsx db/check-users.ts

import { config } from 'dotenv';
config({ path: '.env.local' });

async function checkUsers() {
    const { db } = await import('./index');
    const { users } = await import('./schema');

    console.log('🔍 Checking users in database...\n');

    const result = await db
        .select({
            id: users.id,
            email: users.email,
            username: users.username,
            apiKey: users.apiKey
        })
        .from(users);

    if (result.length === 0) {
        console.log('❌ No users found in database.');
        console.log('   You need to sign up on the web app first.');
    } else {
        console.log(`Found ${result.length} user(s):\n`);
        result.forEach(u => {
            console.log(`  ID: ${u.id}`);
            console.log(`  Email: ${u.email}`);
            console.log(`  Username: ${u.username || '(none)'}`);
            console.log(`  API Key: ${u.apiKey || '❌ NOT SET'}`);
            console.log('');
        });
    }

    process.exit(0);
}

checkUsers().catch(e => { console.error(e); process.exit(1); });
