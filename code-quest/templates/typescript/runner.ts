// TypeScript Runner Template
// This file is provided by CodeQuest - DO NOT MODIFY
// Your solution goes in solution.ts

import { solve } from './solution';

async function main() {
    // Read input from stdin (Node.js compatible)
    const chunks: Buffer[] = [];

    process.stdin.on('data', (chunk) => chunks.push(chunk));

    await new Promise<void>((resolve) => {
        process.stdin.on('end', resolve);
    });

    const input = JSON.parse(Buffer.concat(chunks).toString());

    // Call user's solution
    const output = solve(input);

    // Output result as JSON
    console.log(JSON.stringify(output));
}

main();
