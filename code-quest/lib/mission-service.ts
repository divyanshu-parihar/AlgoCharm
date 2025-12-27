// This service handles mission logic.
// Returns exercise data formatted for CLI consumption with problem-specific types.

import { db } from "@/db";
import { exercises } from "@/db/schema";
import { eq } from "drizzle-orm";

export interface MissionFiles {
  [filename: string]: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  xp_reward: number;
  input_type: string;
  output_type: string;
  function_name: string;
  examples: string;
  starter_code: { [language: string]: string };
  files?: MissionFiles;
}

// Problem-specific type signatures for each exercise
const PROBLEM_SIGNATURES: Record<string, {
  inputType: { go: string; ts: string; cpp: string };
  outputType: { go: string; ts: string; cpp: string };
  functionName: string;
  examples: string;
  description?: string;  // Optional LeetCode-style description
}> = {
  // DATA VAULT (Arrays & Hashing)
  "spot-repeat": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "containsDuplicate",
    examples: `Example 1: nums = [1,2,3,1] → true
Example 2: nums = [1,2,3,4] → false`
  },
  "letter-shuffle": {
    inputType: { go: "(s, t string)", ts: "(s: string, t: string)", cpp: "(string s, string t)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isAnagram",
    examples: `Example 1: s = "anagram", t = "nagaram" → true
Example 2: s = "rat", t = "car" → false`
  },
  "pair-hunt": {
    inputType: { go: "(nums []int, target int)", ts: "(nums: number[], target: number)", cpp: "(vector<int>& nums, int target)" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "twoSum",
    examples: `Example: nums = [2,7,11,15], target = 9 → [0,1]`
  },
  "sort-letters": {
    inputType: { go: "[]string", ts: "string[]", cpp: "vector<string>" },
    outputType: { go: "[][]string", ts: "string[][]", cpp: "vector<vector<string>>" },
    functionName: "groupAnagrams",
    examples: `Example: ["eat","tea","tan","ate","nat","bat"] → [["bat"],["nat","tan"],["ate","eat","tea"]]`
  },
  "most-common": {
    inputType: { go: "(nums []int, k int)", ts: "(nums: number[], k: number)", cpp: "(vector<int>& nums, int k)" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "topKFrequent",
    examples: `Example: nums = [1,1,1,2,2,3], k = 2 → [1,2]`
  },
  "encode-decode": {
    inputType: { go: "[]string", ts: "string[]", cpp: "vector<string>" },
    outputType: { go: "string / []string", ts: "string / string[]", cpp: "string / vector<string>" },
    functionName: "encode / decode",
    examples: `Example: ["lint","code","love","you"] → "lint:code:love:you" → ["lint","code","love","you"]`
  },
  "multiply-rest": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "productExceptSelf",
    examples: `Example: [1,2,3,4] → [24,12,8,6]`
  },
  "grid-valid": {
    inputType: { go: "[][]byte", ts: "string[][]", cpp: "vector<vector<char>>" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isValidSudoku",
    examples: `Example: 9x9 grid → true/false`
  },
  "streak-finder": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "longestConsecutive",
    examples: `Example: [100,4,200,1,3,2] → 4 (sequence 1,2,3,4)`
  },

  // DUAL SCANNERS (Two Pointers)
  "mirror-check": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isPalindrome",
    examples: `Example: "A man, a plan, a canal: Panama" → true`
  },
  "sorted-pair": {
    inputType: { go: "(nums []int, target int)", ts: "(nums: number[], target: number)", cpp: "(vector<int>& nums, int target)" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "twoSumII",
    description: "Given a 1-indexed array of integers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers (1-indexed). You must use only constant extra space.",
    examples: `Example: nums = [2,7,11,15], target = 9 → [1,2] (1-indexed)`
  },
  "triple-match": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "threeSum",
    examples: `Example: [-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]`
  },
  "max-basin": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "maxArea",
    examples: `Example: [1,8,6,2,5,4,8,3,7] → 49`
  },
  "flood-volume": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "trap",
    examples: `Example: [0,1,0,2,1,0,1,3,2,1,2,1] → 6`
  },

  // MOVING FRAME (Sliding Window)
  "peak-profit": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "maxProfit",
    examples: `Example: [7,1,5,3,6,4] → 5 (buy at 1, sell at 6)`
  },
  "unique-streak": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "lengthOfLongestSubstring",
    examples: `Example: "abcabcbb" → 3 ("abc")`
  },
  "max-same-char": {
    inputType: { go: "(s string, k int)", ts: "(s: string, k: number)", cpp: "(string s, int k)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "characterReplacement",
    examples: `Example: s = "AABABBA", k = 1 → 4`
  },
  "hidden-pattern": {
    inputType: { go: "(s1, s2 string)", ts: "(s1: string, s2: string)", cpp: "(string s1, string s2)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "checkInclusion",
    examples: `Example: s1 = "ab", s2 = "eidbaooo" → true`
  },
  "smallest-cover": {
    inputType: { go: "(s, t string)", ts: "(s: string, t: string)", cpp: "(string s, string t)" },
    outputType: { go: "string", ts: "string", cpp: "string" },
    functionName: "minWindow",
    examples: `Example: s = "ADOBECODEBANC", t = "ABC" → "BANC"`
  },
  "frame-maximum": {
    inputType: { go: "(nums []int, k int)", ts: "(nums: number[], k: number)", cpp: "(vector<int>& nums, int k)" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "maxSlidingWindow",
    examples: `Example: nums = [1,3,-1,-3,5,3,6,7], k = 3 → [3,3,5,5,6,7]`
  },

  // LIFO TOWER (Stack)
  "bracket-match": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isValid",
    examples: `Example: "()[]{}" → true, "(]" → false`
  },
  "mini-stack": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "MinStack", ts: "MinStack", cpp: "MinStack" },
    functionName: "MinStack",
    examples: `push(-2) → push(0) → push(-3) → getMin() → -3`
  },
  "reverse-calc": {
    inputType: { go: "[]string", ts: "string[]", cpp: "vector<string>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "evalRPN",
    examples: `Example: ["2","1","+","3","*"] → 9`
  },
  "heat-wave": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "dailyTemperatures",
    examples: `Example: [73,74,75,71,69,72,76,73] → [1,1,4,2,1,1,0,0]`
  },
  "car-convoy": {
    inputType: { go: "(target int, position, speed []int)", ts: "(target: number, position: number[], speed: number[])", cpp: "(int target, vector<int>& position, vector<int>& speed)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "carFleet",
    examples: `Example: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3] → 3`
  },
  "biggest-bar": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "largestRectangleArea",
    examples: `Example: [2,1,5,6,2,3] → 10`
  },

  // DIVIDE CONQUER (Binary Search)
  "half-search": {
    inputType: { go: "(nums []int, target int)", ts: "(nums: number[], target: number)", cpp: "(vector<int>& nums, int target)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "search",
    examples: `Example: nums = [-1,0,3,5,9,12], target = 9 → 4`
  },
  "grid-hunt": {
    inputType: { go: "(matrix [][]int, target int)", ts: "(matrix: number[][], target: number)", cpp: "(vector<vector<int>>& matrix, int target)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "searchMatrix",
    examples: `Example: [[1,3,5,7],[10,11,16,20]], target = 3 → true`
  },
  "banana-speed": {
    inputType: { go: "(piles []int, h int)", ts: "(piles: number[], h: number)", cpp: "(vector<int>& piles, int h)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "minEatingSpeed",
    examples: `Example: piles = [3,6,7,11], h = 8 → 4`
  },
  "rotated-min": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "findMin",
    examples: `Example: [3,4,5,1,2] → 1`
  },
  "rotated-search": {
    inputType: { go: "(nums []int, target int)", ts: "(nums: number[], target: number)", cpp: "(vector<int>& nums, int target)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "searchRotated",
    examples: `Example: nums = [4,5,6,7,0,1,2], target = 0 → 4`
  },
  "time-cache": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "TimeMap", ts: "TimeMap", cpp: "TimeMap" },
    functionName: "TimeMap",
    examples: `set("foo", "bar", 1) → get("foo", 1) → "bar"`
  },
  "middle-ground": {
    inputType: { go: "(nums1, nums2 []int)", ts: "(nums1: number[], nums2: number[])", cpp: "(vector<int>& nums1, vector<int>& nums2)" },
    outputType: { go: "float64", ts: "number", cpp: "double" },
    functionName: "findMedianSortedArrays",
    examples: `Example: [1,3], [2] → 2.0`
  },

  // NUMBER THEORY (Math & Geometry)
  "spin-grid": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>&" },
    outputType: { go: "void", ts: "void", cpp: "void" },
    functionName: "rotate",
    examples: `Example: [[1,2,3],[4,5,6],[7,8,9]] → [[7,4,1],[8,5,2],[9,6,3]]`
  },
  "spiral-read": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>&" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "spiralOrder",
    examples: `Example: [[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5]`
  },
  "zero-grid": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>&" },
    outputType: { go: "void", ts: "void", cpp: "void" },
    functionName: "setZeroes",
    examples: `Example: [[1,1,1],[1,0,1],[1,1,1]] → [[1,0,1],[0,0,0],[1,0,1]]`
  },
  "happy-loop": {
    inputType: { go: "int", ts: "number", cpp: "int" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isHappy",
    examples: `Example: 19 → true (1² + 9² = 82 → ... → 1)`
  },
  "add-one": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "plusOne",
    examples: `Example: [1,2,3] → [1,2,4]`
  },
  "power-calc": {
    inputType: { go: "(x float64, n int)", ts: "(x: number, n: number)", cpp: "(double x, int n)" },
    outputType: { go: "float64", ts: "number", cpp: "double" },
    functionName: "myPow",
    examples: `Example: x = 2.0, n = 10 → 1024.0`
  },
  "string-multiply": {
    inputType: { go: "(num1, num2 string)", ts: "(num1: string, num2: string)", cpp: "(string num1, string num2)" },
    outputType: { go: "string", ts: "string", cpp: "string" },
    functionName: "multiply",
    examples: `Example: "123", "456" → "56088"`
  },
  "square-detect": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "DetectSquares", ts: "DetectSquares", cpp: "DetectSquares" },
    functionName: "DetectSquares",
    examples: `add([3,10]) → count([11,10]) → number of squares`
  },

  // BINARY LOGIC (Bit Manipulation)
  "solo-number": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "singleNumber",
    examples: `Example: [2,2,1] → 1`
  },
  "count-ones": {
    inputType: { go: "uint32", ts: "number", cpp: "uint32_t" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "hammingWeight",
    examples: `Example: 11 (binary 1011) → 3`
  },
  "bit-count": {
    inputType: { go: "int", ts: "number", cpp: "int" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "countBits",
    examples: `Example: 5 → [0,1,1,2,1,2]`
  },
  "flip-bits": {
    inputType: { go: "uint32", ts: "number", cpp: "uint32_t" },
    outputType: { go: "uint32", ts: "number", cpp: "uint32_t" },
    functionName: "reverseBits",
    examples: `Example: 43261596 → 964176192`
  },
  "missing-one": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "missingNumber",
    examples: `Example: [3,0,1] → 2`
  },
  "no-op-add": {
    inputType: { go: "(a, b int)", ts: "(a: number, b: number)", cpp: "(int a, int b)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "getSum",
    examples: `Example: a = 1, b = 2 → 3`
  },
  "flip-integer": {
    inputType: { go: "int", ts: "number", cpp: "int" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "reverse",
    examples: `Example: 123 → 321, -123 → -321`
  },

  // CHAIN LINKS (Linked List)
  "flip-list": {
    inputType: { go: "*ListNode", ts: "ListNode | null", cpp: "ListNode*" },
    outputType: { go: "*ListNode", ts: "ListNode | null", cpp: "ListNode*" },
    functionName: "reverseList",
    examples: `Example: [1,2,3,4,5] → [5,4,3,2,1]`
  },
  "merge-pair": {
    inputType: { go: "(l1, l2 *ListNode)", ts: "(l1: ListNode | null, l2: ListNode | null)", cpp: "(ListNode* l1, ListNode* l2)" },
    outputType: { go: "*ListNode", ts: "ListNode | null", cpp: "ListNode*" },
    functionName: "mergeTwoLists",
    examples: `Example: [1,2,4] + [1,3,4] → [1,1,2,3,4,4]`
  },
  "loop-check": {
    inputType: { go: "*ListNode", ts: "ListNode | null", cpp: "ListNode*" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "hasCycle",
    examples: `Example: [3,2,0,-4] with cycle → true`
  },
  "rearrange-list": {
    inputType: { go: "*ListNode", ts: "ListNode | null", cpp: "ListNode*" },
    outputType: { go: "void", ts: "void", cpp: "void" },
    functionName: "reorderList",
    examples: `Example: [1,2,3,4] → [1,4,2,3]`
  },
  "trim-end": {
    inputType: { go: "(head *ListNode, n int)", ts: "(head: ListNode | null, n: number)", cpp: "(ListNode* head, int n)" },
    outputType: { go: "*ListNode", ts: "ListNode | null", cpp: "ListNode*" },
    functionName: "removeNthFromEnd",
    examples: `Example: [1,2,3,4,5], n=2 → [1,2,3,5]`
  },
  "clone-random": {
    inputType: { go: "*Node", ts: "Node | null", cpp: "Node*" },
    outputType: { go: "*Node", ts: "Node | null", cpp: "Node*" },
    functionName: "copyRandomList",
    examples: `Example: Deep copy linked list with random pointers`
  },
  "add-lists": {
    inputType: { go: "(l1, l2 *ListNode)", ts: "(l1: ListNode | null, l2: ListNode | null)", cpp: "(ListNode* l1, ListNode* l2)" },
    outputType: { go: "*ListNode", ts: "ListNode | null", cpp: "ListNode*" },
    functionName: "addTwoNumbers",
    examples: `Example: [2,4,3] + [5,6,4] → [7,0,8] (342 + 465 = 807)`
  },
  "find-clone": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "findDuplicate",
    examples: `Example: [1,3,4,2,2] → 2`
  },
  "memory-cache": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "LRUCache", ts: "LRUCache", cpp: "LRUCache" },
    functionName: "LRUCache",
    examples: `put(1,1) → put(2,2) → get(1) → 1`
  },
  "merge-many": {
    inputType: { go: "[]*ListNode", ts: "(ListNode | null)[]", cpp: "vector<ListNode*>" },
    outputType: { go: "*ListNode", ts: "ListNode | null", cpp: "ListNode*" },
    functionName: "mergeKLists",
    examples: `Example: [[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6]`
  },
  "group-flip": {
    inputType: { go: "(head *ListNode, k int)", ts: "(head: ListNode | null, k: number)", cpp: "(ListNode* head, int k)" },
    outputType: { go: "*ListNode", ts: "ListNode | null", cpp: "ListNode*" },
    functionName: "reverseKGroup",
    examples: `Example: [1,2,3,4,5], k=2 → [2,1,4,3,5]`
  },

  // BRANCHING PATHS (Trees)
  "mirror-tree": {
    inputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    outputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    functionName: "invertTree",
    examples: `Example: [4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]`
  },
  "tree-depth": {
    inputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "maxDepth",
    examples: `Example: [3,9,20,null,null,15,7] → 3`
  },
  "tree-width": {
    inputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "diameterOfBinaryTree",
    examples: `Example: [1,2,3,4,5] → 3`
  },
  "tree-balance": {
    inputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isBalanced",
    examples: `Example: [3,9,20,null,null,15,7] → true`
  },
  "twin-trees": {
    inputType: { go: "(p, q *TreeNode)", ts: "(p: TreeNode | null, q: TreeNode | null)", cpp: "(TreeNode* p, TreeNode* q)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isSameTree",
    examples: `Example: [1,2,3], [1,2,3] → true`
  },
  "tree-in-tree": {
    inputType: { go: "(root, subRoot *TreeNode)", ts: "(root: TreeNode | null, subRoot: TreeNode | null)", cpp: "(TreeNode* root, TreeNode* subRoot)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isSubtree",
    examples: `Example: [3,4,5,1,2], [4,1,2] → true`
  },
  "common-parent": {
    inputType: { go: "(root, p, q *TreeNode)", ts: "(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null)", cpp: "(TreeNode* root, TreeNode* p, TreeNode* q)" },
    outputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    functionName: "lowestCommonAncestor",
    examples: `Example: BST [6,2,8,0,4,7,9], p=2, q=8 → 6`
  },
  "level-scan": {
    inputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "levelOrder",
    examples: `Example: [3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]`
  },
  "right-view": {
    inputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "rightSideView",
    examples: `Example: [1,2,3,null,5,null,4] → [1,3,4]`
  },
  "good-nodes": {
    inputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "goodNodes",
    examples: `Example: [3,1,4,3,null,1,5] → 4`
  },
  "valid-bst": {
    inputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isValidBST",
    examples: `Example: [2,1,3] → true, [5,1,4,null,null,3,6] → false`
  },
  "kth-smallest": {
    inputType: { go: "(root *TreeNode, k int)", ts: "(root: TreeNode | null, k: number)", cpp: "(TreeNode* root, int k)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "kthSmallest",
    examples: `Example: [3,1,4,null,2], k=1 → 1`
  },
  "build-tree": {
    inputType: { go: "(preorder, inorder []int)", ts: "(preorder: number[], inorder: number[])", cpp: "(vector<int>& preorder, vector<int>& inorder)" },
    outputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    functionName: "buildTree",
    examples: `Example: [3,9,20,15,7], [9,3,15,20,7] → tree`
  },
  "max-path": {
    inputType: { go: "*TreeNode", ts: "TreeNode | null", cpp: "TreeNode*" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "maxPathSum",
    examples: `Example: [1,2,3] → 6`
  },
  "pack-tree": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "Codec", ts: "Codec", cpp: "Codec" },
    functionName: "serialize/deserialize",
    examples: `serialize([1,2,3,null,null,4,5]) → string → deserialize`
  },

  // PRIORITY LANES (Heap)
  "kth-stream": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "KthLargest", ts: "KthLargest", cpp: "KthLargest" },
    functionName: "KthLargest",
    examples: `add(3) → add(5) → add(10) → returns kth largest`
  },
  "stone-weight": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "lastStoneWeight",
    examples: `Example: [2,7,4,1,8,1] → 1`
  },
  "nearest-points": {
    inputType: { go: "(points [][]int, k int)", ts: "(points: number[][], k: number)", cpp: "(vector<vector<int>>& points, int k)" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "kClosest",
    examples: `Example: [[1,3],[-2,2]], k=1 → [[-2,2]]`
  },
  "kth-array": {
    inputType: { go: "(nums []int, k int)", ts: "(nums: number[], k: number)", cpp: "(vector<int>& nums, int k)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "findKthLargest",
    examples: `Example: [3,2,1,5,6,4], k=2 → 5`
  },
  "task-order": {
    inputType: { go: "(tasks []byte, n int)", ts: "(tasks: string[], n: number)", cpp: "(vector<char>& tasks, int n)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "leastInterval",
    examples: `Example: ["A","A","A","B","B","B"], n=2 → 8`
  },
  "tweet-feed": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "Twitter", ts: "Twitter", cpp: "Twitter" },
    functionName: "Twitter",
    examples: `postTweet(1,5) → getNewsFeed(1) → [5]`
  },
  "stream-median": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "MedianFinder", ts: "MedianFinder", cpp: "MedianFinder" },
    functionName: "MedianFinder",
    examples: `addNum(1) → addNum(2) → findMedian() → 1.5`
  },

  // TRIAL ERROR (Backtracking)
  "power-set": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "subsets",
    examples: `Example: [1,2,3] → [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`
  },
  "sum-combos": {
    inputType: { go: "(candidates []int, target int)", ts: "(candidates: number[], target: number)", cpp: "(vector<int>& candidates, int target)" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "combinationSum",
    examples: `Example: [2,3,6,7], target=7 → [[2,2,3],[7]]`
  },
  "sum-combos-2": {
    inputType: { go: "(candidates []int, target int)", ts: "(candidates: number[], target: number)", cpp: "(vector<int>& candidates, int target)" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "combinationSum2",
    examples: `Example: [10,1,2,7,6,1,5], target=8 → [[1,1,6],[1,2,5],[1,7],[2,6]]`
  },
  "all-orders": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "permute",
    examples: `Example: [1,2,3] → [[1,2,3],[1,3,2],[2,1,3],...]`
  },
  "power-set-2": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "subsetsWithDup",
    examples: `Example: [1,2,2] → [[],[1],[1,2],[1,2,2],[2],[2,2]]`
  },
  "bracket-gen": {
    inputType: { go: "int", ts: "number", cpp: "int" },
    outputType: { go: "[]string", ts: "string[]", cpp: "vector<string>" },
    functionName: "generateParenthesis",
    examples: `Example: n=3 → ["((()))","(()())","(())()","()(())","()()()"]`
  },
  "word-grid": {
    inputType: { go: "(board [][]byte, word string)", ts: "(board: string[][], word: string)", cpp: "(vector<vector<char>>& board, string word)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "exist",
    examples: `Example: [["A","B","C"],["S","F","C"],["A","D","E"]], "ABCCED" → true`
  },
  "split-palindrome": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "[][]string", ts: "string[][]", cpp: "vector<vector<string>>" },
    functionName: "partition",
    examples: `Example: "aab" → [["a","a","b"],["aa","b"]]`
  },
  "phone-letters": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "[]string", ts: "string[]", cpp: "vector<string>" },
    functionName: "letterCombinations",
    examples: `Example: "23" → ["ad","ae","af","bd","be","bf","cd","ce","cf"]`
  },
  "queen-puzzle": {
    inputType: { go: "int", ts: "number", cpp: "int" },
    outputType: { go: "[][]string", ts: "string[][]", cpp: "vector<vector<string>>" },
    functionName: "solveNQueens",
    examples: `Example: n=4 → [[".Q..","...Q","Q...","..Q."],...]`
  },

  // PREFIX NETWORKS (Tries)
  "build-prefix": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "Trie", ts: "Trie", cpp: "Trie" },
    functionName: "Trie",
    examples: `insert("apple") → search("apple") → true`
  },
  "word-finder": {
    inputType: { go: "class operations", ts: "class operations", cpp: "class operations" },
    outputType: { go: "WordDictionary", ts: "WordDictionary", cpp: "WordDictionary" },
    functionName: "WordDictionary",
    examples: `addWord("bad") → search("b.d") → true`
  },
  "grid-search": {
    inputType: { go: "(board [][]byte, words []string)", ts: "(board: string[][], words: string[])", cpp: "(vector<vector<char>>& board, vector<string>& words)" },
    outputType: { go: "[]string", ts: "string[]", cpp: "vector<string>" },
    functionName: "findWords",
    examples: `Find all words from list in grid`
  },

  // NETWORK MAPS (Graphs)
  "island-count": {
    inputType: { go: "[][]byte", ts: "string[][]", cpp: "vector<vector<char>>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "numIslands",
    examples: `Example: [["1","1","0"],["1","1","0"],["0","0","1"]] → 2`
  },
  "max-island": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "maxAreaOfIsland",
    examples: `Example: 2D grid with 1s and 0s → max area`
  },
  "copy-network": {
    inputType: { go: "*Node", ts: "Node | null", cpp: "Node*" },
    outputType: { go: "*Node", ts: "Node | null", cpp: "Node*" },
    functionName: "cloneGraph",
    examples: `Deep copy undirected graph`
  },
  "gate-distance": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "void", ts: "void", cpp: "void" },
    functionName: "wallsAndGates",
    examples: `Fill each empty room with distance to nearest gate`
  },
  "rot-timer": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "orangesRotting",
    examples: `Example: [[2,1,1],[1,1,0],[0,1,1]] → 4 minutes`
  },
  "ocean-flow": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "pacificAtlantic",
    examples: `Cells that can flow to both oceans`
  },
  "capture-zone": {
    inputType: { go: "[][]byte", ts: "string[][]", cpp: "vector<vector<char>>" },
    outputType: { go: "void", ts: "void", cpp: "void" },
    functionName: "solve",
    examples: `Capture surrounded 'O' regions`
  },
  "class-order": {
    inputType: { go: "(numCourses int, prerequisites [][]int)", ts: "(numCourses: number, prerequisites: number[][])", cpp: "(int numCourses, vector<vector<int>>& prerequisites)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "canFinish",
    examples: `Example: 2, [[1,0]] → true`
  },
  "class-order-2": {
    inputType: { go: "(numCourses int, prerequisites [][]int)", ts: "(numCourses: number, prerequisites: number[][])", cpp: "(int numCourses, vector<vector<int>>& prerequisites)" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "findOrder",
    examples: `Example: 4, [[1,0],[2,0],[3,1],[3,2]] → [0,1,2,3]`
  },
  "valid-tree": {
    inputType: { go: "(n int, edges [][]int)", ts: "(n: number, edges: number[][])", cpp: "(int n, vector<vector<int>>& edges)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "validTree",
    examples: `Example: n=5, [[0,1],[0,2],[0,3],[1,4]] → true`
  },
  "component-count": {
    inputType: { go: "(n int, edges [][]int)", ts: "(n: number, edges: number[][])", cpp: "(int n, vector<vector<int>>& edges)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "countComponents",
    examples: `Example: n=5, [[0,1],[1,2],[3,4]] → 2`
  },
  "extra-edge": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "findRedundantConnection",
    examples: `Example: [[1,2],[1,3],[2,3]] → [2,3]`
  },
  "word-ladder": {
    inputType: { go: "(beginWord, endWord string, wordList []string)", ts: "(beginWord: string, endWord: string, wordList: string[])", cpp: "(string beginWord, string endWord, vector<string>& wordList)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "ladderLength",
    examples: `Example: "hit" → "cog" → 5 steps`
  },

  // ROUTE OPTIMIZATION (Advanced Graphs)
  "signal-time": {
    inputType: { go: "(times [][]int, n, k int)", ts: "(times: number[][], n: number, k: number)", cpp: "(vector<vector<int>>& times, int n, int k)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "networkDelayTime",
    examples: `Example: [[2,1,1],[2,3,1],[3,4,1]], n=4, k=2 → 2`
  },
  "flight-path": {
    inputType: { go: "[][]string", ts: "string[][]", cpp: "vector<vector<string>>" },
    outputType: { go: "[]string", ts: "string[]", cpp: "vector<string>" },
    functionName: "findItinerary",
    examples: `Example: [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]] → path`
  },
  "connect-cost": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "minCostConnectPoints",
    examples: `Example: [[0,0],[2,2],[3,10],[5,2],[7,0]] → 20`
  },
  "swim-level": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "swimInWater",
    examples: `Example: [[0,2],[1,3]] → 3`
  },
  "alien-order": {
    inputType: { go: "[]string", ts: "string[]", cpp: "vector<string>" },
    outputType: { go: "string", ts: "string", cpp: "string" },
    functionName: "alienOrder",
    examples: `Example: ["wrt","wrf","er","ett","rftt"] → "wertf"`
  },
  "budget-flights": {
    inputType: { go: "(n int, flights [][]int, src, dst, k int)", ts: "(n: number, flights: number[][], src: number, dst: number, k: number)", cpp: "(int n, vector<vector<int>>& flights, int src, int dst, int k)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "findCheapestPrice",
    examples: `Example: n=4, flights=[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src=0, dst=3, k=1 → 700`
  },

  // MEMORY LANE (1D Dynamic Programming)
  "step-climb": {
    inputType: { go: "int", ts: "number", cpp: "int" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "climbStairs",
    examples: `Example: n=3 → 3 (1+1+1, 1+2, 2+1)`
  },
  "cheap-stairs": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "minCostClimbingStairs",
    examples: `Example: [10,15,20] → 15`
  },
  "home-heist": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "rob",
    examples: `Example: [1,2,3,1] → 4`
  },
  "home-heist-2": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "robII",
    examples: `Example: [2,3,2] → 3 (circular)`
  },
  "long-palindrome": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "string", ts: "string", cpp: "string" },
    functionName: "longestPalindrome",
    examples: `Example: "babad" → "bab"`
  },
  "count-palindrome": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "countSubstrings",
    examples: `Example: "abc" → 3, "aaa" → 6`
  },
  "decode-path": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "numDecodings",
    examples: `Example: "12" → 2 (AB, L)`
  },
  "coin-change": {
    inputType: { go: "(coins []int, amount int)", ts: "(coins: number[], amount: number)", cpp: "(vector<int>& coins, int amount)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "coinChange",
    examples: `Example: [1,2,5], 11 → 3 (5+5+1)`
  },
  "max-multiply": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "maxProduct",
    examples: `Example: [2,3,-2,4] → 6`
  },
  "word-split": {
    inputType: { go: "(s string, wordDict []string)", ts: "(s: string, wordDict: string[])", cpp: "(string s, vector<string>& wordDict)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "wordBreak",
    examples: `Example: "leetcode", ["leet","code"] → true`
  },
  "long-increase": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "lengthOfLIS",
    examples: `Example: [10,9,2,5,3,7,101,18] → 4`
  },
  "equal-split": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "canPartition",
    examples: `Example: [1,5,11,5] → true`
  },

  // GRID GAME (2D Dynamic Programming)
  "path-count": {
    inputType: { go: "(m, n int)", ts: "(m: number, n: number)", cpp: "(int m, int n)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "uniquePaths",
    examples: `Example: m=3, n=7 → 28`
  },
  "common-sequence": {
    inputType: { go: "(text1, text2 string)", ts: "(text1: string, text2: string)", cpp: "(string text1, string text2)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "longestCommonSubsequence",
    examples: `Example: "abcde", "ace" → 3`
  },
  "trade-cooldown": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "maxProfitCooldown",
    examples: `Example: [1,2,3,0,2] → 3`
  },
  "coin-ways": {
    inputType: { go: "(amount int, coins []int)", ts: "(amount: number, coins: number[])", cpp: "(int amount, vector<int>& coins)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "change",
    examples: `Example: 5, [1,2,5] → 4 ways`
  },
  "target-ways": {
    inputType: { go: "(nums []int, target int)", ts: "(nums: number[], target: number)", cpp: "(vector<int>& nums, int target)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "findTargetSumWays",
    examples: `Example: [1,1,1,1,1], target=3 → 5`
  },
  "string-weave": {
    inputType: { go: "(s1, s2, s3 string)", ts: "(s1: string, s2: string, s3: string)", cpp: "(string s1, string s2, string s3)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isInterleave",
    examples: `Example: "aab", "xxy", "aaxxyb" → true`
  },
  "matrix-climb": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "longestIncreasingPath",
    examples: `Example: [[9,9,4],[6,6,8],[2,1,1]] → 4`
  },
  "rare-sequence": {
    inputType: { go: "(s, t string)", ts: "(s: string, t: string)", cpp: "(string s, string t)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "numDistinct",
    examples: `Example: "rabbbit", "rabbit" → 3`
  },
  "edit-steps": {
    inputType: { go: "(word1, word2 string)", ts: "(word1: string, word2: string)", cpp: "(string word1, string word2)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "minDistance",
    examples: `Example: "horse", "ros" → 3`
  },
  "pop-balloons": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "maxCoins",
    examples: `Example: [3,1,5,8] → 167`
  },
  "pattern-match": {
    inputType: { go: "(s, p string)", ts: "(s: string, p: string)", cpp: "(string s, string p)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isMatch",
    examples: `Example: "aa", "a*" → true`
  },

  // QUICK DECISIONS (Greedy)
  "max-segment": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "maxSubArray",
    examples: `Example: [-2,1,-3,4,-1,2,1,-5,4] → 6`
  },
  "jump-reach": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "canJump",
    examples: `Example: [2,3,1,1,4] → true`
  },
  "jump-count": {
    inputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "jump",
    examples: `Example: [2,3,1,1,4] → 2`
  },
  "gas-route": {
    inputType: { go: "(gas, cost []int)", ts: "(gas: number[], cost: number[])", cpp: "(vector<int>& gas, vector<int>& cost)" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "canCompleteCircuit",
    examples: `Example: gas=[1,2,3,4,5], cost=[3,4,5,1,2] → 3`
  },
  "card-groups": {
    inputType: { go: "(hand []int, groupSize int)", ts: "(hand: number[], groupSize: number)", cpp: "(vector<int>& hand, int groupSize)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "isNStraightHand",
    examples: `Example: [1,2,3,6,2,3,4,7,8], 3 → true`
  },
  "triple-merge": {
    inputType: { go: "(triplets [][]int, target []int)", ts: "(triplets: number[][], target: number[])", cpp: "(vector<vector<int>>& triplets, vector<int>& target)" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "mergeTriplets",
    examples: `Example: [[2,5,3],[1,8,4],[1,7,5]], [2,7,5] → true`
  },
  "label-split": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "partitionLabels",
    examples: `Example: "ababcbacadefegdehijhklij" → [9,7,8]`
  },
  "wild-brackets": {
    inputType: { go: "string", ts: "string", cpp: "string" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "checkValidString",
    examples: `Example: "(*))" → true`
  },

  // TIME BLOCKS (Intervals)
  "insert-range": {
    inputType: { go: "(intervals [][]int, newInterval []int)", ts: "(intervals: number[][], newInterval: number[])", cpp: "(vector<vector<int>>& intervals, vector<int>& newInterval)" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "insert",
    examples: `Example: [[1,3],[6,9]], [2,5] → [[1,5],[6,9]]`
  },
  "merge-ranges": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    functionName: "merge",
    examples: `Example: [[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]`
  },
  "skip-ranges": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "eraseOverlapIntervals",
    examples: `Example: [[1,2],[2,3],[3,4],[1,3]] → 1`
  },
  "room-booking": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "bool", ts: "boolean", cpp: "bool" },
    functionName: "canAttendMeetings",
    examples: `Example: [[0,30],[5,10],[15,20]] → false`
  },
  "room-count": {
    inputType: { go: "[][]int", ts: "number[][]", cpp: "vector<vector<int>>" },
    outputType: { go: "int", ts: "number", cpp: "int" },
    functionName: "minMeetingRooms",
    examples: `Example: [[0,30],[5,10],[15,20]] → 2`
  },
  "query-cover": {
    inputType: { go: "(intervals [][]int, queries []int)", ts: "(intervals: number[][], queries: number[])", cpp: "(vector<vector<int>>& intervals, vector<int>& queries)" },
    outputType: { go: "[]int", ts: "number[]", cpp: "vector<int>" },
    functionName: "minInterval",
    examples: `Example: [[1,4],[2,4],[3,6],[4,4]], [2,3,4,5] → [3,3,1,4]`
  },
};

// Default signature for unknown problems
const DEFAULT_SIGNATURE = {
  inputType: { go: "interface{}", ts: "unknown", cpp: "json" },
  outputType: { go: "interface{}", ts: "unknown", cpp: "json" },
  functionName: "solve",
  examples: ""
};

export const MissionService = {
  async getMissionById(missionId: string): Promise<Mission | null> {
    const result = await db.select().from(exercises).where(eq(exercises.id, missionId));

    if (result.length === 0) {
      return null;
    }

    const exercise = result[0];
    const sig = PROBLEM_SIGNATURES[missionId] || DEFAULT_SIGNATURE;

    return {
      id: exercise.id,
      title: exercise.title,
      description: exercise.description || "",
      difficulty: exercise.difficulty || "medium",
      xp_reward: exercise.xpReward || 100,
      input_type: sig.inputType.ts,
      output_type: sig.outputType.ts,
      function_name: sig.functionName,
      examples: sig.examples,
      starter_code: {
        go: generateGoStarter(exercise.id, exercise.title, exercise.description || "", exercise.difficulty || "medium", sig),
        typescript: generateTsStarter(exercise.id, exercise.title, exercise.description || "", exercise.difficulty || "medium", sig),
        cpp: generateCppStarter(exercise.id, exercise.title, exercise.description || "", exercise.difficulty || "medium", sig),
      },
      files: {}
    };
  }
};

// Generate Go starter code
function generateGoStarter(id: string, title: string, desc: string, difficulty: string, sig: typeof DEFAULT_SIGNATURE): string {
  const cleanDesc = desc.replace(/[#*`]/g, '').trim();
  const funcName = capitalize(sig.functionName.split('/')[0].trim());
  const inputType = sig.inputType.go.replace(/^\(|\)$/g, '');
  const outputType = sig.outputType.go;

  // Priority: sig.description > db description (if good) > fallback
  const problemDesc = sig.description
    || (cleanDesc.length > 50 ? cleanDesc.split('\n').slice(0, 5).join('\n * ') : null)
    || `Implement ${funcName} to solve the ${title} problem.`;

  return `/*
 * ${title}
 * Difficulty: ${capitalize(difficulty)}
 * 
 * ${problemDesc}
 * 
 * ${sig.examples.split('\n').join('\n * ')}
 * 
 * Function: ${funcName}
 * Input: ${sig.inputType.go}
 * Output: ${sig.outputType.go}
 */

package main

// ${funcName} solves the problem
// Input: ${sig.inputType.go}
// Output: ${sig.outputType.go}
func ${funcName}(${inputType.includes(',') ? inputType : 'nums ' + inputType}) ${outputType} {
	// TODO: Implement your solution here
	
	${getGoReturnStatement(outputType)}
}

// Solve is the wrapper function called by the test runner
func Solve(input interface{}) interface{} {
	${getGoInputParser(sig.inputType.go)}
	return ${funcName}(${getGoFunctionCall(sig.inputType.go)})
}

// Helper functions
func toIntSlice(input interface{}) []int {
	arr := input.([]interface{})
	result := make([]int, len(arr))
	for i, v := range arr {
		result[i] = int(v.(float64))
	}
	return result
}

func toStringSlice(input interface{}) []string {
	arr := input.([]interface{})
	result := make([]string, len(arr))
	for i, v := range arr {
		result[i] = v.(string)
	}
	return result
}
`;
}

function getGoReturnStatement(outputType: string): string {
  if (outputType === 'bool') return 'return false';
  if (outputType === 'int') return 'return 0';
  if (outputType === 'float64') return 'return 0.0';
  if (outputType === 'string') return 'return ""';
  if (outputType === 'void') return '// Modify in-place';
  return 'return nil';
}

function getGoInputParser(inputType: string): string {
  if (inputType.includes('[]int') && inputType.includes('target')) {
    return `m := input.(map[string]interface{})
	nums := toIntSlice(m["nums"])
	target := int(m["target"].(float64))`;
  }
  if (inputType === '[]int') return 'nums := toIntSlice(input)';
  if (inputType === '[]string') return 'strs := toStringSlice(input)';
  if (inputType === 'string') return 's := input.(string)';
  if (inputType === 'int') return 'n := int(input.(float64))';
  return '// Parse input as needed';
}

function getGoFunctionCall(inputType: string): string {
  if (inputType.includes('target')) return 'nums, target';
  if (inputType === '[]int' || inputType === '[]string') return 'nums';
  if (inputType === 'string') return 's';
  if (inputType === 'int') return 'n';
  return 'input';
}

// Generate TypeScript starter code
function generateTsStarter(id: string, title: string, desc: string, difficulty: string, sig: typeof DEFAULT_SIGNATURE): string {
  const cleanDesc = desc.replace(/[#*`]/g, '').trim();
  const funcName = sig.functionName.split('/')[0].trim();

  return `/**
 * ${title}
 * Difficulty: ${capitalize(difficulty)}
 * 
 * ${cleanDesc.split('\n').slice(0, 5).join('\n * ')}
 * 
 * ${sig.examples.split('\n').join('\n * ')}
 */

/**
 * @param ${sig.inputType.ts}
 * @returns ${sig.outputType.ts}
 */
export function ${funcName}${sig.inputType.ts.startsWith('(') ? sig.inputType.ts : `(nums: ${sig.inputType.ts})`}: ${sig.outputType.ts} {
  // TODO: Implement your solution here
  
  ${getTsReturnStatement(sig.outputType.ts)}
}

// Wrapper function called by test runner
export function solve(input: unknown): unknown {
  ${getTsInputParser(sig.inputType.ts)}
  return ${funcName}(${getTsFunctionCall(sig.inputType.ts)});
}
`;
}

function getTsReturnStatement(outputType: string): string {
  if (outputType === 'boolean') return 'return false;';
  if (outputType === 'number') return 'return 0;';
  if (outputType === 'string') return 'return "";';
  if (outputType === 'void') return '// Modify in-place';
  return 'return null as any;';
}

function getTsInputParser(inputType: string): string {
  if (inputType.includes('target')) {
    return `const { nums, target } = input as { nums: number[], target: number };`;
  }
  if (inputType === 'number[]') return 'const nums = input as number[];';
  if (inputType === 'string[]') return 'const strs = input as string[];';
  if (inputType === 'string') return 'const s = input as string;';
  if (inputType === 'number') return 'const n = input as number;';
  return '// Parse input as needed';
}

function getTsFunctionCall(inputType: string): string {
  if (inputType.includes('target')) return 'nums, target';
  if (inputType === 'number[]' || inputType === 'string[]') return 'nums';
  if (inputType === 'string') return 's';
  if (inputType === 'number') return 'n';
  return 'input as any';
}

// Generate C++ starter code
function generateCppStarter(id: string, title: string, desc: string, difficulty: string, sig: typeof DEFAULT_SIGNATURE): string {
  const cleanDesc = desc.replace(/[#*`]/g, '').trim();
  const funcName = sig.functionName.split('/')[0].trim();

  return `/*
 * ${title}
 * Difficulty: ${capitalize(difficulty)}
 * 
 * ${cleanDesc.split('\n').slice(0, 5).join('\n * ')}
 * 
 * ${sig.examples.split('\n').join('\n * ')}
 */

#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>
#include "nlohmann/json.hpp"

using json = nlohmann::json;
using namespace std;

class Solution {
public:
    /**
     * @param ${sig.inputType.cpp}
     * @return ${sig.outputType.cpp}
     */
    ${sig.outputType.cpp} ${funcName}(${sig.inputType.cpp} nums) {
        // TODO: Implement your solution here
        
        ${getCppReturnStatement(sig.outputType.cpp)}
    }
};

// Wrapper function called by test runner
json solve(json input) {
    Solution solution;
    ${getCppInputParser(sig.inputType.cpp)}
    return solution.${funcName}(${getCppFunctionCall(sig.inputType.cpp)});
}
`;
}

function getCppReturnStatement(outputType: string): string {
  if (outputType === 'bool') return 'return false;';
  if (outputType === 'int') return 'return 0;';
  if (outputType === 'double') return 'return 0.0;';
  if (outputType === 'string') return 'return "";';
  if (outputType === 'void') return '// Modify in-place';
  return 'return {};';
}

function getCppInputParser(inputType: string): string {
  if (inputType.includes('target')) {
    return `vector<int> nums = input["nums"].get<vector<int>>();
    int target = input["target"].get<int>();`;
  }
  if (inputType === 'vector<int>') return 'vector<int> nums = input.get<vector<int>>();';
  if (inputType === 'vector<string>') return 'vector<string> strs = input.get<vector<string>>();';
  if (inputType === 'string') return 'string s = input.get<string>();';
  if (inputType === 'int') return 'int n = input.get<int>();';
  return '// Parse input as needed';
}

function getCppFunctionCall(inputType: string): string {
  if (inputType.includes('target')) return 'nums, target';
  return 'nums';
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}