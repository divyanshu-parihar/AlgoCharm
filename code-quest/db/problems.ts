// All problems organized by module with original names
// Format: { slug, title, difficulty, description }

export const ALL_PROBLEMS = {
    // ============================================
    // DATA VAULT (Arrays & Hashing) - 9 problems
    // ============================================
    "data-vault": [
        { slug: "spot-repeat", title: "Spot the Repeat", difficulty: "easy", leetcode: "Contains Duplicate" },
        { slug: "letter-shuffle", title: "Letter Shuffle", difficulty: "easy", leetcode: "Valid Anagram" },
        { slug: "pair-hunt", title: "Pair Hunt", difficulty: "easy", leetcode: "Two Sum" },
        { slug: "sort-letters", title: "Sort the Letters", difficulty: "medium", leetcode: "Group Anagrams" },
        { slug: "most-common", title: "Most Common Items", difficulty: "medium", leetcode: "Top K Frequent Elements" },
        { slug: "encode-decode", title: "Secret Messages", difficulty: "medium", leetcode: "Encode and Decode Strings" },
        { slug: "multiply-rest", title: "Multiply the Rest", difficulty: "medium", leetcode: "Product of Array Except Self" },
        { slug: "grid-valid", title: "Grid Validator", difficulty: "medium", leetcode: "Valid Sudoku" },
        { slug: "streak-finder", title: "Streak Finder", difficulty: "medium", leetcode: "Longest Consecutive Sequence" },
    ],

    // ============================================
    // DUAL SCANNERS (Two Pointers) - 5 problems
    // ============================================
    "dual-scanners": [
        { slug: "mirror-check", title: "Mirror Check", difficulty: "easy", leetcode: "Valid Palindrome" },
        { slug: "sorted-pair", title: "Sorted Pair Hunt", difficulty: "medium", leetcode: "Two Sum II" },
        { slug: "triple-match", title: "Triple Match", difficulty: "medium", leetcode: "3Sum" },
        { slug: "max-basin", title: "Max Basin", difficulty: "medium", leetcode: "Container With Most Water" },
        { slug: "flood-volume", title: "Flood Volume", difficulty: "hard", leetcode: "Trapping Rain Water" },
    ],

    // ============================================
    // MOVING FRAME (Sliding Window) - 6 problems
    // ============================================
    "moving-frame": [
        { slug: "peak-profit", title: "Peak Profit", difficulty: "easy", leetcode: "Best Time to Buy And Sell Stock" },
        { slug: "unique-streak", title: "Unique Streak", difficulty: "medium", leetcode: "Longest Substring Without Repeating Characters" },
        { slug: "max-same-char", title: "Max Same Char", difficulty: "medium", leetcode: "Longest Repeating Character Replacement" },
        { slug: "hidden-pattern", title: "Hidden Pattern", difficulty: "medium", leetcode: "Permutation In String" },
        { slug: "smallest-cover", title: "Smallest Cover", difficulty: "hard", leetcode: "Minimum Window Substring" },
        { slug: "frame-maximum", title: "Frame Maximum", difficulty: "hard", leetcode: "Sliding Window Maximum" },
    ],

    // ============================================
    // LIFO TOWER (Stack) - 6 problems
    // ============================================
    "lifo-tower": [
        { slug: "bracket-match", title: "Bracket Match", difficulty: "easy", leetcode: "Valid Parentheses" },
        { slug: "mini-stack", title: "Mini Stack", difficulty: "medium", leetcode: "Min Stack" },
        { slug: "reverse-calc", title: "Reverse Calculator", difficulty: "medium", leetcode: "Evaluate Reverse Polish Notation" },
        { slug: "heat-wave", title: "Heat Wave", difficulty: "medium", leetcode: "Daily Temperatures" },
        { slug: "car-convoy", title: "Car Convoy", difficulty: "medium", leetcode: "Car Fleet" },
        { slug: "biggest-bar", title: "Biggest Bar", difficulty: "hard", leetcode: "Largest Rectangle In Histogram" },
    ],

    // ============================================
    // DIVIDE CONQUER (Binary Search) - 7 problems
    // ============================================
    "divide-conquer": [
        { slug: "half-search", title: "Half Search", difficulty: "easy", leetcode: "Binary Search" },
        { slug: "grid-hunt", title: "Grid Hunt", difficulty: "medium", leetcode: "Search a 2D Matrix" },
        { slug: "banana-speed", title: "Banana Speed", difficulty: "medium", leetcode: "Koko Eating Bananas" },
        { slug: "rotated-min", title: "Rotated Minimum", difficulty: "medium", leetcode: "Find Minimum In Rotated Sorted Array" },
        { slug: "rotated-search", title: "Rotated Search", difficulty: "medium", leetcode: "Search In Rotated Sorted Array" },
        { slug: "time-cache", title: "Time Cache", difficulty: "medium", leetcode: "Time Based Key Value Store" },
        { slug: "middle-ground", title: "Middle Ground", difficulty: "hard", leetcode: "Median of Two Sorted Arrays" },
    ],

    // ============================================
    // CHAIN LINKS (Linked List) - 11 problems
    // ============================================
    "chain-links": [
        { slug: "flip-list", title: "Flip the List", difficulty: "easy", leetcode: "Reverse Linked List" },
        { slug: "merge-pair", title: "Merge Pair", difficulty: "easy", leetcode: "Merge Two Sorted Lists" },
        { slug: "loop-check", title: "Loop Check", difficulty: "easy", leetcode: "Linked List Cycle" },
        { slug: "rearrange-list", title: "Rearrange List", difficulty: "medium", leetcode: "Reorder List" },
        { slug: "trim-end", title: "Trim the End", difficulty: "medium", leetcode: "Remove Nth Node From End of List" },
        { slug: "clone-random", title: "Clone Random", difficulty: "medium", leetcode: "Copy List With Random Pointer" },
        { slug: "add-lists", title: "Add Two Lists", difficulty: "medium", leetcode: "Add Two Numbers" },
        { slug: "find-clone", title: "Find the Clone", difficulty: "medium", leetcode: "Find The Duplicate Number" },
        { slug: "memory-cache", title: "Memory Cache", difficulty: "medium", leetcode: "LRU Cache" },
        { slug: "merge-many", title: "Merge Many", difficulty: "hard", leetcode: "Merge K Sorted Lists" },
        { slug: "group-flip", title: "Group Flip", difficulty: "hard", leetcode: "Reverse Nodes In K Group" },
    ],

    // ============================================
    // BRANCHING PATHS (Trees) - 15 problems
    // ============================================
    "branching-paths": [
        { slug: "mirror-tree", title: "Mirror Tree", difficulty: "easy", leetcode: "Invert Binary Tree" },
        { slug: "tree-depth", title: "Tree Depth", difficulty: "easy", leetcode: "Maximum Depth of Binary Tree" },
        { slug: "tree-width", title: "Tree Width", difficulty: "easy", leetcode: "Diameter of Binary Tree" },
        { slug: "tree-balance", title: "Tree Balance", difficulty: "easy", leetcode: "Balanced Binary Tree" },
        { slug: "twin-trees", title: "Twin Trees", difficulty: "easy", leetcode: "Same Tree" },
        { slug: "tree-in-tree", title: "Tree in Tree", difficulty: "easy", leetcode: "Subtree of Another Tree" },
        { slug: "common-parent", title: "Common Parent", difficulty: "medium", leetcode: "Lowest Common Ancestor of a Binary Search Tree" },
        { slug: "level-scan", title: "Level Scan", difficulty: "medium", leetcode: "Binary Tree Level Order Traversal" },
        { slug: "right-view", title: "Right View", difficulty: "medium", leetcode: "Binary Tree Right Side View" },
        { slug: "good-nodes", title: "Good Nodes", difficulty: "medium", leetcode: "Count Good Nodes In Binary Tree" },
        { slug: "valid-bst", title: "Valid BST", difficulty: "medium", leetcode: "Validate Binary Search Tree" },
        { slug: "kth-smallest", title: "Kth Smallest", difficulty: "medium", leetcode: "Kth Smallest Element In a Bst" },
        { slug: "build-tree", title: "Build Tree", difficulty: "medium", leetcode: "Construct Binary Tree From Preorder And Inorder Traversal" },
        { slug: "max-path", title: "Max Path", difficulty: "hard", leetcode: "Binary Tree Maximum Path Sum" },
        { slug: "pack-tree", title: "Pack Tree", difficulty: "hard", leetcode: "Serialize And Deserialize Binary Tree" },
    ],

    // ============================================
    // PRIORITY LANES (Heap / Priority Queue) - 7 problems
    // ============================================
    "priority-lanes": [
        { slug: "kth-stream", title: "Kth Stream", difficulty: "easy", leetcode: "Kth Largest Element In a Stream" },
        { slug: "stone-weight", title: "Stone Weight", difficulty: "easy", leetcode: "Last Stone Weight" },
        { slug: "nearest-points", title: "Nearest Points", difficulty: "medium", leetcode: "K Closest Points to Origin" },
        { slug: "kth-array", title: "Kth in Array", difficulty: "medium", leetcode: "Kth Largest Element In An Array" },
        { slug: "task-order", title: "Task Order", difficulty: "medium", leetcode: "Task Scheduler" },
        { slug: "tweet-feed", title: "Tweet Feed", difficulty: "medium", leetcode: "Design Twitter" },
        { slug: "stream-median", title: "Stream Median", difficulty: "hard", leetcode: "Find Median From Data Stream" },
    ],

    // ============================================
    // TRIAL ERROR (Backtracking) - 10 problems
    // ============================================
    "trial-error": [
        { slug: "power-set", title: "Power Set", difficulty: "medium", leetcode: "Subsets" },
        { slug: "sum-combos", title: "Sum Combos", difficulty: "medium", leetcode: "Combination Sum" },
        { slug: "sum-combos-2", title: "Sum Combos II", difficulty: "medium", leetcode: "Combination Sum II" },
        { slug: "all-orders", title: "All Orders", difficulty: "medium", leetcode: "Permutations" },
        { slug: "power-set-2", title: "Power Set II", difficulty: "medium", leetcode: "Subsets II" },
        { slug: "bracket-gen", title: "Bracket Generator", difficulty: "medium", leetcode: "Generate Parentheses" },
        { slug: "word-grid", title: "Word Grid", difficulty: "medium", leetcode: "Word Search" },
        { slug: "split-palindrome", title: "Split Palindrome", difficulty: "medium", leetcode: "Palindrome Partitioning" },
        { slug: "phone-letters", title: "Phone Letters", difficulty: "medium", leetcode: "Letter Combinations of a Phone Number" },
        { slug: "queen-puzzle", title: "Queen Puzzle", difficulty: "hard", leetcode: "N Queens" },
    ],

    // ============================================
    // PREFIX NETWORKS (Tries) - 3 problems
    // ============================================
    "prefix-networks": [
        { slug: "build-prefix", title: "Build Prefix Tree", difficulty: "medium", leetcode: "Implement Trie Prefix Tree" },
        { slug: "word-finder", title: "Word Finder", difficulty: "medium", leetcode: "Design Add And Search Words Data Structure" },
        { slug: "grid-search", title: "Grid Word Search", difficulty: "hard", leetcode: "Word Search II" },
    ],

    // ============================================
    // NETWORK MAPS (Graphs) - 13 problems
    // ============================================
    "network-maps": [
        { slug: "island-count", title: "Island Count", difficulty: "medium", leetcode: "Number of Islands" },
        { slug: "max-island", title: "Max Island", difficulty: "medium", leetcode: "Max Area of Island" },
        { slug: "copy-network", title: "Copy Network", difficulty: "medium", leetcode: "Clone Graph" },
        { slug: "gate-distance", title: "Gate Distance", difficulty: "medium", leetcode: "Walls And Gates" },
        { slug: "rot-timer", title: "Rot Timer", difficulty: "medium", leetcode: "Rotting Oranges" },
        { slug: "ocean-flow", title: "Ocean Flow", difficulty: "medium", leetcode: "Pacific Atlantic Water Flow" },
        { slug: "capture-zone", title: "Capture Zone", difficulty: "medium", leetcode: "Surrounded Regions" },
        { slug: "class-order", title: "Class Order", difficulty: "medium", leetcode: "Course Schedule" },
        { slug: "class-order-2", title: "Class Order II", difficulty: "medium", leetcode: "Course Schedule II" },
        { slug: "valid-tree", title: "Valid Tree", difficulty: "medium", leetcode: "Graph Valid Tree" },
        { slug: "component-count", title: "Component Count", difficulty: "medium", leetcode: "Number of Connected Components In An Undirected Graph" },
        { slug: "extra-edge", title: "Extra Edge", difficulty: "medium", leetcode: "Redundant Connection" },
        { slug: "word-ladder", title: "Word Ladder", difficulty: "hard", leetcode: "Word Ladder" },
    ],

    // ============================================
    // ROUTE OPTIMIZATION (Advanced Graphs) - 6 problems
    // ============================================
    "route-optimization": [
        { slug: "signal-time", title: "Signal Time", difficulty: "medium", leetcode: "Network Delay Time" },
        { slug: "flight-path", title: "Flight Path", difficulty: "hard", leetcode: "Reconstruct Itinerary" },
        { slug: "connect-cost", title: "Connect Cost", difficulty: "medium", leetcode: "Min Cost to Connect All Points" },
        { slug: "swim-level", title: "Swim Level", difficulty: "hard", leetcode: "Swim In Rising Water" },
        { slug: "alien-order", title: "Alien Order", difficulty: "hard", leetcode: "Alien Dictionary" },
        { slug: "budget-flights", title: "Budget Flights", difficulty: "medium", leetcode: "Cheapest Flights Within K Stops" },
    ],

    // ============================================
    // MEMORY LANE (1-D Dynamic Programming) - 12 problems
    // ============================================
    "memory-lane": [
        { slug: "step-climb", title: "Step Climb", difficulty: "easy", leetcode: "Climbing Stairs" },
        { slug: "cheap-stairs", title: "Cheap Stairs", difficulty: "easy", leetcode: "Min Cost Climbing Stairs" },
        { slug: "home-heist", title: "Home Heist", difficulty: "medium", leetcode: "House Robber" },
        { slug: "home-heist-2", title: "Home Heist II", difficulty: "medium", leetcode: "House Robber II" },
        { slug: "long-palindrome", title: "Long Palindrome", difficulty: "medium", leetcode: "Longest Palindromic Substring" },
        { slug: "count-palindrome", title: "Count Palindromes", difficulty: "medium", leetcode: "Palindromic Substrings" },
        { slug: "decode-path", title: "Decode Path", difficulty: "medium", leetcode: "Decode Ways" },
        { slug: "coin-change", title: "Coin Change", difficulty: "medium", leetcode: "Coin Change" },
        { slug: "max-multiply", title: "Max Multiply", difficulty: "medium", leetcode: "Maximum Product Subarray" },
        { slug: "word-split", title: "Word Split", difficulty: "medium", leetcode: "Word Break" },
        { slug: "long-increase", title: "Long Increase", difficulty: "medium", leetcode: "Longest Increasing Subsequence" },
        { slug: "equal-split", title: "Equal Split", difficulty: "medium", leetcode: "Partition Equal Subset Sum" },
    ],

    // ============================================
    // GRID GAME (2-D Dynamic Programming) - 11 problems
    // ============================================
    "grid-game": [
        { slug: "path-count", title: "Path Count", difficulty: "medium", leetcode: "Unique Paths" },
        { slug: "common-sequence", title: "Common Sequence", difficulty: "medium", leetcode: "Longest Common Subsequence" },
        { slug: "trade-cooldown", title: "Trade Cooldown", difficulty: "medium", leetcode: "Best Time to Buy And Sell Stock With Cooldown" },
        { slug: "coin-ways", title: "Coin Ways", difficulty: "medium", leetcode: "Coin Change II" },
        { slug: "target-ways", title: "Target Ways", difficulty: "medium", leetcode: "Target Sum" },
        { slug: "string-weave", title: "String Weave", difficulty: "medium", leetcode: "Interleaving String" },
        { slug: "matrix-climb", title: "Matrix Climb", difficulty: "hard", leetcode: "Longest Increasing Path In a Matrix" },
        { slug: "rare-sequence", title: "Rare Sequence", difficulty: "hard", leetcode: "Distinct Subsequences" },
        { slug: "edit-steps", title: "Edit Steps", difficulty: "hard", leetcode: "Edit Distance" },
        { slug: "pop-balloons", title: "Pop Balloons", difficulty: "hard", leetcode: "Burst Balloons" },
        { slug: "pattern-match", title: "Pattern Match", difficulty: "hard", leetcode: "Regular Expression Matching" },
    ],

    // ============================================
    // QUICK DECISIONS (Greedy) - 8 problems
    // ============================================
    "quick-decisions": [
        { slug: "max-segment", title: "Max Segment", difficulty: "medium", leetcode: "Maximum Subarray" },
        { slug: "jump-reach", title: "Jump Reach", difficulty: "medium", leetcode: "Jump Game" },
        { slug: "jump-count", title: "Jump Count", difficulty: "medium", leetcode: "Jump Game II" },
        { slug: "gas-route", title: "Gas Route", difficulty: "medium", leetcode: "Gas Station" },
        { slug: "card-groups", title: "Card Groups", difficulty: "medium", leetcode: "Hand of Straights" },
        { slug: "triple-merge", title: "Triple Merge", difficulty: "medium", leetcode: "Merge Triplets to Form Target Triplet" },
        { slug: "label-split", title: "Label Split", difficulty: "medium", leetcode: "Partition Labels" },
        { slug: "wild-brackets", title: "Wild Brackets", difficulty: "medium", leetcode: "Valid Parenthesis String" },
    ],

    // ============================================
    // TIME BLOCKS (Intervals) - 6 problems
    // ============================================
    "time-blocks": [
        { slug: "insert-range", title: "Insert Range", difficulty: "medium", leetcode: "Insert Interval" },
        { slug: "merge-ranges", title: "Merge Ranges", difficulty: "medium", leetcode: "Merge Intervals" },
        { slug: "skip-ranges", title: "Skip Ranges", difficulty: "medium", leetcode: "Non Overlapping Intervals" },
        { slug: "room-booking", title: "Room Booking", difficulty: "easy", leetcode: "Meeting Rooms" },
        { slug: "room-count", title: "Room Count", difficulty: "medium", leetcode: "Meeting Rooms II" },
        { slug: "query-cover", title: "Query Cover", difficulty: "hard", leetcode: "Minimum Interval to Include Each Query" },
    ],

    // ============================================
    // NUMBER THEORY (Math & Geometry) - 8 problems
    // ============================================
    "number-theory": [
        { slug: "spin-grid", title: "Spin Grid", difficulty: "medium", leetcode: "Rotate Image" },
        { slug: "spiral-read", title: "Spiral Read", difficulty: "medium", leetcode: "Spiral Matrix" },
        { slug: "zero-grid", title: "Zero Grid", difficulty: "medium", leetcode: "Set Matrix Zeroes" },
        { slug: "happy-loop", title: "Happy Loop", difficulty: "easy", leetcode: "Happy Number" },
        { slug: "add-one", title: "Add One", difficulty: "easy", leetcode: "Plus One" },
        { slug: "power-calc", title: "Power Calc", difficulty: "medium", leetcode: "Pow(x, n)" },
        { slug: "string-multiply", title: "String Multiply", difficulty: "medium", leetcode: "Multiply Strings" },
        { slug: "square-detect", title: "Square Detect", difficulty: "medium", leetcode: "Detect Squares" },
    ],

    // ============================================
    // BINARY LOGIC (Bit Manipulation) - 7 problems
    // ============================================
    "binary-logic": [
        { slug: "solo-number", title: "Solo Number", difficulty: "easy", leetcode: "Single Number" },
        { slug: "count-ones", title: "Count Ones", difficulty: "easy", leetcode: "Number of 1 Bits" },
        { slug: "bit-count", title: "Bit Count", difficulty: "easy", leetcode: "Counting Bits" },
        { slug: "flip-bits", title: "Flip Bits", difficulty: "easy", leetcode: "Reverse Bits" },
        { slug: "missing-one", title: "Missing One", difficulty: "easy", leetcode: "Missing Number" },
        { slug: "no-op-add", title: "No-Op Add", difficulty: "medium", leetcode: "Sum of Two Integers" },
        { slug: "flip-integer", title: "Flip Integer", difficulty: "medium", leetcode: "Reverse Integer" },
    ],
};

// Helper to get all problems as flat array
export function getAllProblems() {
    const all: Array<{ moduleSlug: string; slug: string; title: string; difficulty: string; leetcode: string }> = [];
    for (const [moduleSlug, problems] of Object.entries(ALL_PROBLEMS)) {
        for (const problem of problems) {
            all.push({ moduleSlug, ...problem });
        }
    }
    return all;
}

// Total count
export const TOTAL_PROBLEMS = Object.values(ALL_PROBLEMS).reduce((acc, arr) => acc + arr.length, 0);
