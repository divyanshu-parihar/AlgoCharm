// Problem descriptions for all 150+ problems
// These are LeetCode-style descriptions for each algorithm challenge

interface Record {
    [key: string]: string;
}
export const PROBLEM_DESCRIPTIONS: Record = {
    // DATA VAULT (Arrays & Hashing) - 9 problems
    "spot-repeat": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "letter-shuffle": "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram uses all original letters exactly once.",
    "pair-hunt": "Given an array of integers nums and an integer target, return indices of the two numbers that add up to target. Each input has exactly one solution.",
    "sort-letters": "Given an array of strings, group the anagrams together. You can return the answer in any order.",
    "most-common": "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    "encode-decode": "Design an algorithm to encode a list of strings to a single string, then decode it back to the original list.",
    "multiply-rest": "Given an integer array nums, return an array where answer[i] equals the product of all elements except nums[i]. Solve without division in O(n) time.",
    "grid-valid": "Determine if a 9x9 Sudoku board is valid. Only filled cells need validation: each row, column, and 3x3 box must contain 1-9 without repetition.",
    "streak-finder": "Given an unsorted array of integers, return the length of the longest consecutive elements sequence in O(n) time.",

    // DUAL SCANNERS (Two Pointers) - 5 problems
    "mirror-check": "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    "sorted-pair": "Given a 1-indexed sorted array of integers, find two numbers that add up to the target. Return their indices (1-indexed). Use only constant extra space.",
    "triple-match": "Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]] where i != j != k and nums[i] + nums[j] + nums[k] == 0. No duplicate triplets.",
    "max-basin": "Given n non-negative integers representing heights of vertical lines, find two lines that form a container holding the most water.",
    "flood-volume": "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",

    // MOVING FRAME (Sliding Window) - 6 problems
    "peak-profit": "Given an array prices where prices[i] is the stock price on day i, find the maximum profit from one buy and one sell. Return 0 if no profit possible.",
    "unique-streak": "Given a string s, find the length of the longest substring without repeating characters.",
    "max-same-char": "Given a string s and integer k, find the length of the longest substring with the same letter after replacing at most k characters.",
    "hidden-pattern": "Given strings s1 and s2, return true if s2 contains a permutation of s1 (any rearrangement of s1 as a substring).",
    "smallest-cover": "Given strings s and t, return the minimum window substring of s containing every character in t (including duplicates). Return empty if not possible.",
    "frame-maximum": "Given an array nums and sliding window size k, return the max values in each window as it moves from left to right.",

    // LIFO TOWER (Stack) - 6 problems
    "bracket-match": "Given a string with '()', '{}', '[]' brackets, determine if the input string has valid (properly matched) brackets.",
    "mini-stack": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    "reverse-calc": "Evaluate an expression in Reverse Polish Notation. Valid operators are +, -, *, /. Division truncates toward zero.",
    "heat-wave": "Given daily temperatures, return an array where answer[i] is the number of days until a warmer temperature. Return 0 if none.",
    "car-convoy": "N cars heading to a destination. Faster cars catching slower ones form fleets. Return the number of car fleets arriving at destination.",
    "biggest-bar": "Given an array of heights in a histogram, find the area of the largest rectangle that can be formed.",

    // DIVIDE CONQUER (Binary Search) - 7 problems
    "half-search": "Given a sorted array and target value, return the index if found, otherwise -1. Must be O(log n).",
    "grid-hunt": "Given an m×n matrix with sorted rows and columns, search for a target value efficiently.",
    "banana-speed": "Koko wants to eat all bananas in h hours. Find the minimum eating speed k so she can finish within h hours.",
    "rotated-min": "Given a rotated sorted array, find the minimum element in O(log n) time.",
    "rotated-search": "Given a rotated sorted array and target, return the index if found, otherwise -1. Must be O(log n).",
    "time-cache": "Design a time-based key-value store that stores multiple values per key with timestamps and retrieves values by time.",
    "middle-ground": "Given two sorted arrays nums1 and nums2, return the median of the combined sorted array in O(log(m+n)) time.",

    // NUMBER THEORY (Math & Geometry) - 8 problems
    "spin-grid": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "spiral-read": "Given an m×n matrix, return all elements in spiral order.",
    "zero-grid": "Given an m×n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.",
    "happy-loop": "Determine if a number is 'happy': replace it by the sum of squares of its digits, repeat until 1 or a cycle.",
    "add-one": "Given a large integer as an array of digits, increment by one and return the result.",
    "power-calc": "Implement pow(x, n), computing x raised to the power n. Handle negative exponents.",
    "string-multiply": "Given two non-negative integers as strings, return their product as a string. Cannot use built-in BigInteger.",
    "square-detect": "Design a data structure that can add points and count how many axes-aligned squares can be formed with a query point.",

    // BINARY LOGIC (Bit Manipulation) - 7 problems
    "solo-number": "Given a non-empty array where every element appears twice except one, find that single element. Linear time, constant space.",
    "count-ones": "Return the number of '1' bits (Hamming weight) in the binary representation of an unsigned integer.",
    "bit-count": "Given an integer n, return an array where ans[i] is the number of 1's in the binary representation of i for 0 ≤ i ≤ n.",
    "flip-bits": "Reverse the bits of a 32-bit unsigned integer.",
    "missing-one": "Given an array containing n distinct numbers from 0 to n, return the one number missing from the range.",
    "no-op-add": "Calculate the sum of two integers a and b without using + and - operators.",
    "flip-integer": "Reverse the digits of a 32-bit signed integer. Return 0 if result overflows.",

    // CHAIN LINKS (Linked List) - 11 problems
    "flip-list": "Reverse a singly linked list iteratively or recursively.",
    "merge-pair": "Merge two sorted linked lists into one sorted list by splicing nodes together.",
    "loop-check": "Determine if a linked list has a cycle in it using constant space.",
    "rearrange-list": "Reorder list L0→L1→...→Ln to L0→Ln→L1→Ln-1→... Do not modify node values.",
    "trim-end": "Remove the nth node from the end of a linked list and return its head.",
    "clone-random": "Deep copy a linked list where each node has next and random pointers.",
    "add-lists": "Add two numbers represented as linked lists (digits in reverse order). Return sum as a linked list.",
    "find-clone": "Given array of n+1 integers from 1 to n, find the duplicate using O(1) space without modifying array.",
    "memory-cache": "Design an LRU cache with get and put operations in O(1) time.",
    "merge-many": "Merge k sorted linked lists into one sorted linked list.",
    "group-flip": "Reverse nodes in groups of k. If remaining nodes < k, leave them as-is.",

    // BRANCHING PATHS (Trees) - 15 problems
    "mirror-tree": "Invert a binary tree (swap left and right children recursively).",
    "tree-depth": "Find the maximum depth (number of nodes along the longest path from root to leaf) of a binary tree.",
    "tree-width": "Find the diameter of a binary tree (longest path between any two nodes, measured by edge count).",
    "tree-balance": "Determine if a binary tree is height-balanced (subtrees differ in height by at most 1).",
    "twin-trees": "Check if two binary trees are structurally identical with the same node values.",
    "tree-in-tree": "Check if one binary tree is a subtree of another.",
    "common-parent": "Find the lowest common ancestor of two nodes in a binary search tree.",
    "level-scan": "Return level-order traversal of a binary tree (values level by level, left to right).",
    "right-view": "Return the values of nodes visible from the right side of a binary tree.",
    "good-nodes": "Count nodes in a binary tree where the path from root to that node has no value greater than the node.",
    "valid-bst": "Determine if a binary tree is a valid binary search tree.",
    "kth-smallest": "Find the kth smallest element in a binary search tree.",
    "build-tree": "Construct a binary tree from preorder and inorder traversal arrays.",
    "max-path": "Find the maximum path sum in a binary tree. Path can start and end at any node.",
    "pack-tree": "Design an algorithm to serialize and deserialize a binary tree.",

    // PRIORITY LANES (Heap) - 7 problems
    "kth-stream": "Design a class to find the kth largest element in a stream.",
    "stone-weight": "Smash heaviest stones together; return weight of last stone or 0 if all destroyed.",
    "nearest-points": "Return k closest points to origin (0,0) from an array of points.",
    "kth-array": "Find the kth largest element in an unsorted array without sorting completely.",
    "task-order": "Given tasks with cooldown period n, return minimum intervals needed to finish all tasks.",
    "tweet-feed": "Design a simplified Twitter: post tweets, follow/unfollow, get news feed with recent tweets.",
    "stream-median": "Design a data structure that supports adding numbers and finding the median.",

    // TRIAL ERROR (Backtracking) - 9 problems
    "power-set": "Return all possible subsets (the power set) of an array of unique integers.",
    "sum-combos": "Find all unique combinations of candidates that sum to target. Each number may be used unlimited times.",
    "sum-combos-2": "Find all unique combinations that sum to target. Each number may only be used once. Handle duplicates.",
    "all-orders": "Return all possible permutations of an array of distinct integers.",
    "power-set-2": "Return all possible subsets of an array that may contain duplicates.",
    "bracket-gen": "Generate all combinations of n pairs of well-formed parentheses.",
    "word-grid": "Given a 2D board of letters and a word, find if the word exists by adjacent cells (no reuse).",
    "split-palindrome": "Partition a string so every substring is a palindrome. Return all possible partitions.",
    "phone-letters": "Return all letter combinations a phone number could represent (2-9 digit mapping).",
    "queen-puzzle": "Place n queens on an n×n chessboard so no two queens attack each other. Return all solutions.",

    // PREFIX NETWORKS (Tries) - 3 problems
    "build-prefix": "Implement a trie with insert, search, and startsWith operations.",
    "word-finder": "Design a data structure that supports adding words and searching with '.' wildcards.",
    "grid-search": "Given a 2D board and a list of words, find all words that exist in the grid.",

    // NETWORK MAPS (Graphs) - 13 problems
    "island-count": "Count the number of islands in a 2D grid where '1' is land and '0' is water.",
    "max-island": "Find the maximum area of an island in a 2D binary grid.",
    "copy-network": "Return a deep copy of an undirected graph with adjacency lists.",
    "gate-distance": "Fill each empty room with distance to its nearest gate in a 2D grid.",
    "rot-timer": "Return minimum minutes until no fresh oranges remain (rotten oranges spread each minute).",
    "ocean-flow": "Find all cells in a matrix that can flow water to both Pacific and Atlantic oceans.",
    "capture-zone": "Capture all regions surrounded by 'X' by flipping 'O's to 'X's. Borders cannot be captured.",
    "class-order": "Return if you can finish all courses given prerequisites (detect cycle in directed graph).",
    "class-order-2": "Return the ordering of courses to finish all (topological sort). Return empty if impossible.",
    "valid-tree": "Given n nodes and edges, determine if the graph is a valid tree (connected, no cycles).",
    "component-count": "Count the number of connected components in an undirected graph.",
    "extra-edge": "Find the edge that, if removed, would make the graph a tree (find the cycle-causing edge).",
    "word-ladder": "Find the shortest transformation sequence length from beginWord to endWord, changing one letter at a time.",

    // ROUTE OPTIMIZATION (Advanced Graphs) - 6 problems
    "signal-time": "Return minimum time for all nodes to receive a signal from source node k using Dijkstra's algorithm.",
    "flight-path": "Reconstruct the itinerary from a list of airline tickets, using all tickets exactly once.",
    "connect-cost": "Connect all points with minimum cost (Minimum Spanning Tree).",
    "swim-level": "Find minimum time to swim from (0,0) to (n-1,n-1) in a grid where you can only swim when water level is high enough.",
    "alien-order": "Given a sorted dictionary of an alien language, derive the order of characters.",
    "budget-flights": "Find cheapest price from src to dst with at most k stops using Bellman-Ford.",

    // MEMORY LANE (1D Dynamic Programming) - 12 problems
    "step-climb": "You can climb 1 or 2 steps at a time. Return number of distinct ways to reach the top.",
    "cheap-stairs": "Pay cost[i] to step on ith stair. Find minimum cost to reach the top.",
    "home-heist": "Rob houses in a line; can't rob adjacent houses. Maximize stolen amount.",
    "home-heist-2": "Same as House Robber but houses are in a circle (first and last are adjacent).",
    "long-palindrome": "Find the longest palindromic substring in a string.",
    "count-palindrome": "Count the number of palindromic substrings in a string.",
    "decode-path": "A message is encoded using A=1, B=2...Z=26. Count the number of ways to decode a string of digits.",
    "coin-change": "Find the fewest number of coins needed to make up an amount. Return -1 if impossible.",
    "max-multiply": "Find the contiguous subarray with the largest product.",
    "word-split": "Determine if a string can be segmented into space-separated dictionary words.",
    "long-increase": "Find the length of the longest strictly increasing subsequence.",
    "equal-split": "Determine if an array can be partitioned into two subsets with equal sum.",

    // GRID GAME (2D Dynamic Programming) - 10 problems
    "path-count": "Count unique paths from top-left to bottom-right of an m×n grid, moving only right or down.",
    "common-sequence": "Find the length of the longest common subsequence of two strings.",
    "trade-cooldown": "Best time to buy/sell stock with cooldown (must wait 1 day after selling before buying again).",
    "coin-ways": "Count the number of combinations that make up an amount using given coin denominations.",
    "target-ways": "Assign + or - to each number to make sum equal target. Count the number of ways.",
    "string-weave": "Check if s3 is formed by interleaving s1 and s2.",
    "matrix-climb": "Find the longest increasing path in a matrix (can move in 4 directions).",
    "rare-sequence": "Count distinct subsequences of s that equal t.",
    "edit-steps": "Find the minimum number of operations (insert, delete, replace) to convert word1 to word2.",
    "pop-balloons": "Burst balloons in an order to maximize coins. Bursting balloon i gets nums[i-1]*nums[i]*nums[i+1] coins.",
    "pattern-match": "Implement regular expression matching with '.' (any char) and '*' (zero or more of preceding).",

    // QUICK DECISIONS (Greedy) - 8 problems
    "max-segment": "Find the contiguous subarray with the largest sum.",
    "jump-reach": "Determine if you can reach the last index. Each element is max jump length from that position.",
    "jump-count": "Find minimum number of jumps to reach the last index.",
    "gas-route": "Return starting gas station index to complete a circular route, or -1 if impossible.",
    "card-groups": "Rearrange an array into groups of consecutive cards of given size.",
    "triple-merge": "Determine if you can combine triplets using max operations to reach the target triplet.",
    "label-split": "Partition a string into parts where each letter appears in at most one part. Return part lengths.",
    "wild-brackets": "Check if a string with '(', ')' and '*' (wildcard) can be valid parentheses.",

    // TIME BLOCKS (Intervals) - 6 problems
    "insert-range": "Insert a new interval into a sorted list of non-overlapping intervals, merging if necessary.",
    "merge-ranges": "Merge all overlapping intervals and return non-overlapping intervals.",
    "skip-ranges": "Find minimum number of intervals to remove to make remaining intervals non-overlapping.",
    "room-booking": "Determine if a person can attend all meetings (non-overlapping intervals).",
    "room-count": "Find the minimum number of conference rooms required for all meetings.",
    "query-cover": "For each query, find the size of the smallest interval containing it.",
};
