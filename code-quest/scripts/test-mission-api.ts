// Test script to verify mission API returns proper descriptions
// Run with: npx ts-node scripts/test-mission-api.ts

const PROBLEM_IDS = [
    'sorted-pair',
    'pair-hunt',
    'spot-repeat',
    'letter-shuffle',
    'triple-match',
    'step-climb',
];

async function testMissionAPI() {
    let API_URL = "https://charm.workbuzz.me";
    const BASE_URL = API_URL || 'http://localhost:3000';

    console.log('Testing Mission API...\n');
    console.log('='.repeat(60));

    for (const id of PROBLEM_IDS) {
        try {
            const res = await fetch(`${BASE_URL}/api/mission?id=${id}`);
            const data = await res.json();

            console.log(`\n📋 ${id.toUpperCase()}`);
            console.log('-'.repeat(40));

            if (data.error) {
                console.log(`❌ Error: ${data.error}`);
                continue;
            }

            console.log(`Title: ${data.title}`);
            console.log(`Difficulty: ${data.difficulty}`);
            console.log(`Description: ${data.description?.substring(0, 100) || '(empty)'}...`);
            console.log(`Examples: ${data.examples?.substring(0, 80) || '(empty)'}...`);
            console.log(`Function: ${data.function_name}`);

            // Check if Go starter code has proper description
            const goCode = data.starter_code?.go || '';
            const hasGoodDesc = goCode.includes('Example:') && !goCode.includes('Pair Hunt but');
            console.log(`Go template OK: ${hasGoodDesc ? '✅' : '❌'}`);

            // Preview first 10 lines of Go template
            console.log('\nGo Template Preview:');
            console.log(goCode.split('\n').slice(0, 15).join('\n'));

        } catch (err) {
            console.log(`❌ Failed to fetch ${id}: ${err}`);
        }

        console.log('\n' + '='.repeat(60));
    }
}

testMissionAPI();
