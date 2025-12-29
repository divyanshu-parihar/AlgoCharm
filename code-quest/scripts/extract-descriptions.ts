// Script to extract and clean problem descriptions from NeetCode150List.json
// Run with: npx ts-node scripts/extract-descriptions.ts

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping from website slug to NeetCode problem ID
const SLUG_TO_NEETCODE: Record<string, string> = {
    // DATA VAULT (Arrays & Hashing)
    "spot-repeat": "duplicate-integer",
    "letter-shuffle": "is-anagram",
    "pair-hunt": "two-integer-sum",
    "sort-letters": "anagram-groups",
    "most-common": "top-k-elements-in-list",
    "encode-decode": "string-encode-and-decode",
    "multiply-rest": "products-of-array-discluding-self",
    "grid-valid": "valid-sudoku",
    "streak-finder": "longest-consecutive-sequence",

    // DUAL SCANNERS (Two Pointers)
    "mirror-check": "is-palindrome",
    "sorted-pair": "two-integer-sum-ii",
    "triple-match": "three-integer-sum",
    "max-basin": "max-water-container",
    "flood-volume": "trapping-rain-water",

    // MOVING FRAME (Sliding Window)
    "peak-profit": "buy-and-sell-crypto",
    "unique-streak": "longest-substring-without-duplicates",
    "max-same-char": "longest-repeating-substring-with-replacement",
    "hidden-pattern": "permutation-string",
    "smallest-cover": "minimum-window-with-characters",
    "frame-maximum": "sliding-window-maximum",

    // LIFO TOWER (Stack)
    "bracket-match": "validate-parentheses",
    "mini-stack": "minimum-stack",
    "reverse-calc": "evaluate-reverse-polish-notation",
    "heat-wave": "daily-temperatures",
    "car-convoy": "car-fleet",
    "biggest-bar": "largest-rectangle-in-histogram",

    // DIVIDE CONQUER (Binary Search)
    "half-search": "binary-search",
    "grid-hunt": "search-2d-matrix",
    "banana-speed": "eating-bananas",
    "rotated-min": "find-minimum-in-rotated-sorted-array",
    "rotated-search": "find-target-in-rotated-sorted-array",
    "time-cache": "time-based-key-value-store",
    "middle-ground": "median-of-two-sorted-arrays",

    // CHAIN LINKS (Linked List)
    "flip-list": "reverse-a-linked-list",
    "merge-pair": "merge-two-sorted-linked-lists",
    "loop-check": "linked-list-cycle-detection",
    "rearrange-list": "reorder-linked-list",
    "trim-end": "remove-node-from-end-of-linked-list",
    "clone-random": "copy-linked-list-with-random-pointer",
    "add-lists": "add-two-numbers",
    "find-clone": "find-duplicate-integer",
    "memory-cache": "lru-cache",
    "merge-many": "merge-k-sorted-linked-lists",
    "group-flip": "reverse-nodes-in-k-group",

    // BRANCHING PATHS (Trees)
    "mirror-tree": "invert-a-binary-tree",
    "tree-depth": "depth-of-binary-tree",
    "tree-width": "binary-tree-diameter",
    "tree-balance": "balanced-binary-tree",
    "twin-trees": "same-binary-tree",
    "tree-in-tree": "subtree-of-a-binary-tree",
    "common-parent": "lowest-common-ancestor-in-binary-search-tree",
    "level-scan": "level-order-traversal-of-binary-tree",
    "right-view": "binary-tree-right-side-view",
    "good-nodes": "count-good-nodes-in-binary-tree",
    "valid-bst": "valid-binary-search-tree",
    "kth-smallest": "kth-smallest-integer-in-bst",
    "build-tree": "binary-tree-from-preorder-and-inorder-traversal",
    "max-path": "binary-tree-maximum-path-sum",
    "pack-tree": "serialize-and-deserialize-binary-tree",

    // PRIORITY LANES (Heap)
    "kth-stream": "kth-largest-integer-in-a-stream",
    "stone-weight": "last-stone-weight",
    "nearest-points": "k-closest-points-to-origin",
    "kth-array": "kth-largest-element-in-an-array",
    "task-order": "task-scheduling",
    "tweet-feed": "design-twitter-feed",
    "stream-median": "find-median-in-a-data-stream",

    // TRIAL ERROR (Backtracking)
    "power-set": "subsets",
    "sum-combos": "combination-target-sum",
    "sum-combos-2": "combination-target-sum-ii",
    "all-orders": "permutations",
    "power-set-2": "subsets-ii",
    "bracket-gen": "generate-parentheses",
    "word-grid": "search-for-word",
    "split-palindrome": "palindrome-partitioning",
    "phone-letters": "combinations-of-a-phone-number",
    "queen-puzzle": "n-queens",

    // PREFIX NETWORKS (Tries)
    "build-prefix": "implement-prefix-tree",
    "word-finder": "design-word-search-data-structure",
    "grid-search": "search-for-word-ii",

    // NETWORK MAPS (Graphs)
    "island-count": "count-number-of-islands",
    "max-island": "max-area-of-island",
    "copy-network": "clone-graph",
    "gate-distance": "islands-and-treasure",
    "rot-timer": "rotting-fruit",
    "ocean-flow": "pacific-atlantic-water-flow",
    "capture-zone": "surrounded-regions",
    "class-order": "course-schedule",
    "class-order-2": "course-schedule-ii",
    "valid-tree": "valid-tree",
    "component-count": "count-connected-components",
    "extra-edge": "redundant-connection",
    "word-ladder": "word-ladder",

    // ROUTE OPTIMIZATION (Advanced Graphs)
    "signal-time": "network-delay-time",
    "flight-path": "reconstruct-flight-path",
    "connect-cost": "min-cost-to-connect-points",
    "swim-level": "swim-in-rising-water",
    "alien-order": "foreign-dictionary",
    "budget-flights": "cheapest-flight-path",

    // MEMORY LANE (1-D Dynamic Programming)
    "step-climb": "climbing-stairs",
    "cheap-stairs": "min-cost-climbing-stairs",
    "home-heist": "house-robber",
    "home-heist-2": "house-robber-ii",
    "long-palindrome": "longest-palindromic-substring",
    "count-palindrome": "palindromic-substrings",
    "decode-path": "decode-ways",
    "coin-change": "coin-change",
    "max-multiply": "maximum-product-subarray",
    "word-split": "word-break",
    "long-increase": "longest-increasing-subsequence",
    "equal-split": "partition-equal-subset-sum",

    // GRID GAME (2-D Dynamic Programming)
    "path-count": "count-paths",
    "common-sequence": "longest-common-subsequence",
    "trade-cooldown": "buy-and-sell-crypto-with-cooldown",
    "coin-ways": "coin-change-ii",
    "target-ways": "target-sum",
    "string-weave": "interleaving-string",
    "matrix-climb": "longest-increasing-path-in-matrix",
    "rare-sequence": "count-subsequences",
    "edit-steps": "edit-distance",
    "pop-balloons": "burst-balloons",
    "pattern-match": "regular-expression-matching",

    // QUICK DECISIONS (Greedy)
    "max-segment": "maximum-subarray",
    "jump-reach": "jump-game",
    "jump-count": "jump-game-ii",
    "gas-route": "gas-station",
    "card-groups": "hand-of-straights",
    "triple-merge": "merge-triplets-to-form-target",
    "label-split": "partition-labels",
    "wild-brackets": "valid-parenthesis-string",

    // TIME BLOCKS (Intervals)
    "insert-range": "insert-new-interval",
    "merge-ranges": "merge-intervals",
    "skip-ranges": "non-overlapping-intervals",
    "room-booking": "meeting-schedule",
    "room-count": "meeting-schedule-ii",
    "query-cover": "minimum-interval-including-query",

    // NUMBER THEORY (Math & Geometry)
    "spin-grid": "rotate-matrix",
    "spiral-read": "spiral-matrix",
    "zero-grid": "set-zeroes-in-matrix",
    "happy-loop": "non-cyclical-number",
    "add-one": "plus-one",
    "power-calc": "pow-x-n",
    "string-multiply": "multiply-strings",
    "square-detect": "count-squares",

    // BINARY LOGIC (Bit Manipulation)
    "solo-number": "single-number",
    "count-ones": "number-of-one-bits",
    "bit-count": "counting-bits",
    "flip-bits": "reverse-bits",
    "missing-one": "missing-number",
    "no-op-add": "sum-of-two-integers",
    "flip-integer": "reverse-integer",
};

function cleanDescription(description: string): string {
    // Remove <details> blocks (hints, company tags, time/space recommendations)
    let cleaned = description.replace(/<details[\s\S]*?<\/details>/gi, '');

    // Remove <br> tags
    cleaned = cleaned.replace(/<br\s*\/?>/gi, '');

    // Remove multiple consecutive newlines (more than 2)
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n');

    // Trim whitespace
    cleaned = cleaned.trim();

    return cleaned;
}

function escapeForTypeScript(str: string): string {
    // Escape backticks and backslashes for template literals
    return str
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$');
}

async function main() {
    const neetcodePath = path.join(__dirname, '../../AlgoVoice/NeetCode150List.json');
    const outputPath = path.join(__dirname, '../lib/problem-descriptions.ts');

    console.log('Reading NeetCode150List.json...');
    const neetcodeData = JSON.parse(fs.readFileSync(neetcodePath, 'utf-8'));

    const descriptions: Record<string, string> = {};
    const missingProblems: string[] = [];
    const foundProblems: string[] = [];

    for (const [websiteSlug, neetcodeId] of Object.entries(SLUG_TO_NEETCODE)) {
        const problem = neetcodeData[neetcodeId];

        if (!problem || !problem.result || !problem.result.description) {
            missingProblems.push(`${websiteSlug} -> ${neetcodeId}`);
            continue;
        }

        const rawDescription = problem.result.description;
        const cleanedDescription = cleanDescription(rawDescription);
        descriptions[websiteSlug] = cleanedDescription;
        foundProblems.push(websiteSlug);
    }

    console.log(`\nFound ${foundProblems.length} problems`);
    if (missingProblems.length > 0) {
        console.log(`Missing ${missingProblems.length} problems:`);
        missingProblems.forEach(p => console.log(`  - ${p}`));
    }

    // Generate TypeScript file content
    let output = `// Problem descriptions for all 150+ problems
// These are LeetCode-style descriptions for each algorithm challenge
// Auto-generated from NeetCode150List.json

export const PROBLEM_DESCRIPTIONS: Record<string, string> = {
`;

    // Sort by slug for consistent output
    const sortedSlugs = Object.keys(descriptions).sort();

    for (const slug of sortedSlugs) {
        const desc = escapeForTypeScript(descriptions[slug]);
        output += `    "${slug}": \`${desc}\`,\n\n`;
    }

    output += `};\n`;

    console.log(`\nWriting to ${outputPath}...`);
    fs.writeFileSync(outputPath, output, 'utf-8');

    console.log('Done!');
}

main().catch(console.error);
