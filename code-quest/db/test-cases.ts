// Comprehensive test cases for all exercises
// Each exercise has:
//   - publicTests: 2-3 visible examples shown to user
//   - hiddenTests: 5-10 edge cases for server verification

export interface TestCase {
    input: unknown;
    expected: unknown;
    name?: string;      // Human-readable test name
    category?: string;  // "normal", "edge", "large", "tricky"
}

export interface ExerciseTests {
    publicTests: TestCase[];
    hiddenTests: TestCase[];
}

// ============================================================================
// DATA VAULT (Arrays & Hashing)
// ============================================================================

export const SPOT_REPEAT_TESTS: ExerciseTests = {
    publicTests: [
        { input: [1, 2, 3, 1], expected: true, name: "Simple duplicate" },
        { input: [1, 2, 3, 4], expected: false, name: "No duplicates" },
    ],
    hiddenTests: [
        { input: [], expected: false, name: "Empty array", category: "edge" },
        { input: [1], expected: false, name: "Single element", category: "edge" },
        { input: [1, 1], expected: true, name: "Two same elements", category: "edge" },
        { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], expected: true, name: "Duplicate at end", category: "normal" },
        { input: [-1, -2, -1], expected: true, name: "Negative numbers", category: "tricky" },
        { input: Array.from({ length: 1000 }, (_, i) => i), expected: false, name: "Large unique array", category: "large" },
        { input: [0, 0], expected: true, name: "Zeros", category: "edge" },
    ],
};

export const LETTER_SHUFFLE_TESTS: ExerciseTests = {
    publicTests: [
        { input: { s: "anagram", t: "nagaram" }, expected: true, name: "Valid anagram" },
        { input: { s: "rat", t: "car" }, expected: false, name: "Not anagram" },
    ],
    hiddenTests: [
        { input: { s: "", t: "" }, expected: true, name: "Empty strings", category: "edge" },
        { input: { s: "a", t: "a" }, expected: true, name: "Single char same", category: "edge" },
        { input: { s: "a", t: "b" }, expected: false, name: "Single char different", category: "edge" },
        { input: { s: "ab", t: "abc" }, expected: false, name: "Different lengths", category: "edge" },
        { input: { s: "aab", t: "aba" }, expected: true, name: "Same chars, different order", category: "normal" },
        { input: { s: "aacc", t: "ccac" }, expected: false, name: "Same chars, different counts", category: "tricky" },
        { input: { s: "A", t: "a" }, expected: false, name: "Case sensitive", category: "tricky" },
    ],
};

export const PAIR_HUNT_TESTS: ExerciseTests = {
    publicTests: [
        { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1], name: "Basic example" },
        { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2], name: "Not first two" },
    ],
    hiddenTests: [
        { input: { nums: [3, 3], target: 6 }, expected: [0, 1], name: "Same elements", category: "edge" },
        { input: { nums: [0, 4, 3, 0], target: 0 }, expected: [0, 3], name: "Target is zero", category: "tricky" },
        { input: { nums: [-1, -2, -3, -4, -5], target: -8 }, expected: [2, 4], name: "Negative numbers", category: "tricky" },
        { input: { nums: [1, 2], target: 3 }, expected: [0, 1], name: "Minimal array", category: "edge" },
        { input: { nums: [5, 25, 75], target: 100 }, expected: [1, 2], name: "Larger numbers", category: "normal" },
    ],
};

export const SORT_LETTERS_TESTS: ExerciseTests = {
    publicTests: [
        { input: ["eat", "tea", "tan", "ate", "nat", "bat"], expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]], name: "Mixed groups" },
        { input: [""], expected: [[""]], name: "Empty string" },
    ],
    hiddenTests: [
        { input: [], expected: [], name: "Empty array", category: "edge" },
        { input: ["a"], expected: [["a"]], name: "Single string", category: "edge" },
        { input: ["ab", "ba", "ab"], expected: [["ab", "ab", "ba"]], name: "Duplicates", category: "tricky" },
        { input: ["abc", "cba", "bac", "xyz", "zyx"], expected: [["abc", "bac", "cba"], ["xyz", "zyx"]], name: "Multiple groups", category: "normal" },
        { input: ["", ""], expected: [["", ""]], name: "Multiple empty strings", category: "edge" },
    ],
};

export const MOST_COMMON_TESTS: ExerciseTests = {
    publicTests: [
        { input: { nums: [1, 1, 1, 2, 2, 3], k: 2 }, expected: [1, 2], name: "Basic example" },
        { input: { nums: [1], k: 1 }, expected: [1], name: "Single element" },
    ],
    hiddenTests: [
        { input: { nums: [1, 2], k: 2 }, expected: [1, 2], name: "All elements", category: "edge" },
        { input: { nums: [-1, -1, 2, 2, 3], k: 2 }, expected: [-1, 2], name: "Negative numbers", category: "tricky" },
        { input: { nums: [1, 1, 1, 1, 2, 2, 2, 3, 3], k: 1 }, expected: [1], name: "Clear winner", category: "normal" },
        { input: { nums: [4, 4, 4, 5, 5, 5, 6, 6, 6], k: 3 }, expected: [4, 5, 6], name: "Same frequency", category: "tricky" },
    ],
};

export const MULTIPLY_REST_TESTS: ExerciseTests = {
    publicTests: [
        { input: [1, 2, 3, 4], expected: [24, 12, 8, 6], name: "Basic example" },
        { input: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0], name: "With zero" },
    ],
    hiddenTests: [
        { input: [0, 0], expected: [0, 0], name: "Both zeros", category: "edge" },
        { input: [1, 0], expected: [0, 1], name: "Single zero", category: "edge" },
        { input: [2, 3], expected: [3, 2], name: "Two elements", category: "edge" },
        { input: [-1, -2, -3], expected: [6, 3, 2], name: "All negative", category: "tricky" },
        { input: [1, 1, 1, 1], expected: [1, 1, 1, 1], name: "All ones", category: "edge" },
    ],
};

export const STREAK_FINDER_TESTS: ExerciseTests = {
    publicTests: [
        { input: [100, 4, 200, 1, 3, 2], expected: 4, name: "Basic example" },
        { input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9, name: "Long streak" },
    ],
    hiddenTests: [
        { input: [], expected: 0, name: "Empty array", category: "edge" },
        { input: [1], expected: 1, name: "Single element", category: "edge" },
        { input: [1, 1, 1], expected: 1, name: "All duplicates", category: "edge" },
        { input: [1, 2, 0, 1], expected: 3, name: "Duplicates in streak", category: "tricky" },
        { input: [-5, -4, -3, -2, -1], expected: 5, name: "Negative streak", category: "tricky" },
        { input: [9, 1, 4, 7, 3], expected: 1, name: "No consecutive", category: "edge" },
    ],
};

// ============================================================================
// DUAL SCANNERS (Two Pointers)
// ============================================================================

export const MIRROR_CHECK_TESTS: ExerciseTests = {
    publicTests: [
        { input: "A man, a plan, a canal: Panama", expected: true, name: "Classic example" },
        { input: "race a car", expected: false, name: "Not palindrome" },
    ],
    hiddenTests: [
        { input: "", expected: true, name: "Empty string", category: "edge" },
        { input: " ", expected: true, name: "Single space", category: "edge" },
        { input: "a", expected: true, name: "Single char", category: "edge" },
        { input: ".,", expected: true, name: "Only punctuation", category: "tricky" },
        { input: "0P", expected: false, name: "Alphanumeric", category: "tricky" },
        { input: "aa", expected: true, name: "Two same chars", category: "edge" },
        { input: "ab", expected: false, name: "Two different chars", category: "edge" },
    ],
};

export const TRIPLE_MATCH_TESTS: ExerciseTests = {
    publicTests: [
        { input: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]], name: "Basic example" },
        { input: [0, 1, 1], expected: [], name: "No triplet" },
    ],
    hiddenTests: [
        { input: [], expected: [], name: "Empty array", category: "edge" },
        { input: [0], expected: [], name: "Single element", category: "edge" },
        { input: [0, 0, 0], expected: [[0, 0, 0]], name: "Three zeros", category: "edge" },
        { input: [0, 0, 0, 0], expected: [[0, 0, 0]], name: "Four zeros - no dups", category: "tricky" },
        { input: [-2, 0, 1, 1, 2], expected: [[-2, 0, 2], [-2, 1, 1]], name: "Multiple triplets", category: "normal" },
    ],
};

export const MAX_BASIN_TESTS: ExerciseTests = {
    publicTests: [
        { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49, name: "Basic example" },
        { input: [1, 1], expected: 1, name: "Minimal case" },
    ],
    hiddenTests: [
        { input: [1, 2], expected: 1, name: "Two elements", category: "edge" },
        { input: [4, 3, 2, 1, 4], expected: 16, name: "V-shape", category: "normal" },
        { input: [1, 2, 1], expected: 2, name: "Triangle", category: "edge" },
        { input: [2, 3, 4, 5, 18, 17, 6], expected: 17, name: "Increasing then decreasing", category: "tricky" },
        { input: [1, 1, 1, 1, 1], expected: 4, name: "All same height", category: "edge" },
    ],
};

export const FLOOD_VOLUME_TESTS: ExerciseTests = {
    publicTests: [
        { input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6, name: "Basic example" },
        { input: [4, 2, 0, 3, 2, 5], expected: 9, name: "Multiple pools" },
    ],
    hiddenTests: [
        { input: [], expected: 0, name: "Empty array", category: "edge" },
        { input: [1], expected: 0, name: "Single element", category: "edge" },
        { input: [1, 2, 3, 4, 5], expected: 0, name: "Increasing - no trap", category: "edge" },
        { input: [5, 4, 3, 2, 1], expected: 0, name: "Decreasing - no trap", category: "edge" },
        { input: [3, 0, 0, 2, 0, 4], expected: 10, name: "Deep valley", category: "normal" },
        { input: [0, 0, 0], expected: 0, name: "All zeros", category: "edge" },
    ],
};

// ============================================================================
// MOVING FRAME (Sliding Window)
// ============================================================================

export const PEAK_PROFIT_TESTS: ExerciseTests = {
    publicTests: [
        { input: [7, 1, 5, 3, 6, 4], expected: 5, name: "Basic example" },
        { input: [7, 6, 4, 3, 1], expected: 0, name: "Decreasing prices" },
    ],
    hiddenTests: [
        { input: [], expected: 0, name: "Empty array", category: "edge" },
        { input: [1], expected: 0, name: "Single price", category: "edge" },
        { input: [1, 2], expected: 1, name: "Two prices ascending", category: "edge" },
        { input: [2, 1], expected: 0, name: "Two prices descending", category: "edge" },
        { input: [3, 3, 3, 3], expected: 0, name: "All same price", category: "edge" },
        { input: [1, 2, 4, 2, 5, 7, 2, 4, 9, 0], expected: 8, name: "Complex", category: "normal" },
    ],
};

export const UNIQUE_STREAK_TESTS: ExerciseTests = {
    publicTests: [
        { input: "abcabcbb", expected: 3, name: "Basic example" },
        { input: "bbbbb", expected: 1, name: "All same" },
    ],
    hiddenTests: [
        { input: "", expected: 0, name: "Empty string", category: "edge" },
        { input: "a", expected: 1, name: "Single char", category: "edge" },
        { input: "au", expected: 2, name: "Two unique chars", category: "edge" },
        { input: "pwwkew", expected: 3, name: "Window in middle", category: "normal" },
        { input: "abcdefghij", expected: 10, name: "All unique", category: "normal" },
        { input: " ", expected: 1, name: "Single space", category: "edge" },
    ],
};

export const SMALLEST_COVER_TESTS: ExerciseTests = {
    publicTests: [
        { input: { s: "ADOBECODEBANC", t: "ABC" }, expected: "BANC", name: "Basic example" },
        { input: { s: "a", t: "a" }, expected: "a", name: "Single char match" },
    ],
    hiddenTests: [
        { input: { s: "a", t: "aa" }, expected: "", name: "Not enough chars", category: "edge" },
        { input: { s: "aa", t: "aa" }, expected: "aa", name: "Exact match", category: "edge" },
        { input: { s: "abc", t: "cba" }, expected: "abc", name: "Full string", category: "normal" },
        { input: { s: "ADOBECODEBANC", t: "AABC" }, expected: "ADOBECODEBA", name: "Need multiple A", category: "tricky" },
        { input: { s: "ab", t: "b" }, expected: "b", name: "Single target char at end", category: "edge" },
    ],
};

// ============================================================================
// SPIN GRID (Matrix Rotation) - Already seeded, but documenting here
// ============================================================================

export const SPIN_GRID_TESTS: ExerciseTests = {
    publicTests: [
        { input: [[1, 2], [3, 4]], expected: [[3, 1], [4, 2]], name: "2x2 matrix" },
        { input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]], name: "3x3 matrix" },
    ],
    hiddenTests: [
        { input: [[1]], expected: [[1]], name: "1x1 matrix", category: "edge" },
        { input: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], expected: [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]], name: "4x4 matrix", category: "normal" },
        { input: [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]], expected: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]], name: "4x4 unsorted", category: "normal" },
        { input: [[0, 0], [0, 0]], expected: [[0, 0], [0, 0]], name: "All zeros", category: "edge" },
    ],
};

// ============================================================================
// LIFO TOWER (Stack)
// ============================================================================

export const BRACKET_MATCH_TESTS: ExerciseTests = {
    publicTests: [
        { input: "()", expected: true, name: "Simple pair" },
        { input: "()[]{}", expected: true, name: "Multiple types" },
        { input: "(]", expected: false, name: "Mismatch" },
    ],
    hiddenTests: [
        { input: "", expected: true, name: "Empty string", category: "edge" },
        { input: "(", expected: false, name: "Unclosed", category: "edge" },
        { input: "((()))", expected: true, name: "Nested", category: "normal" },
        { input: "([)]", expected: false, name: "Interleaved wrong", category: "tricky" },
        { input: "{[]}", expected: true, name: "Nested different", category: "normal" },
    ],
};

export const REVERSE_CALC_TESTS: ExerciseTests = {
    publicTests: [
        { input: ["2", "1", "+", "3", "*"], expected: 9, name: "Basic RPN" },
        { input: ["4", "13", "5", "/", "+"], expected: 6, name: "With division" },
    ],
    hiddenTests: [
        { input: ["2"], expected: 2, name: "Single number", category: "edge" },
        { input: ["3", "4", "+"], expected: 7, name: "Simple add", category: "edge" },
        { input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], expected: 22, name: "Complex", category: "normal" },
        { input: ["-2", "3", "*"], expected: -6, name: "Negative", category: "tricky" },
    ],
};

export const HEAT_WAVE_TESTS: ExerciseTests = {
    publicTests: [
        { input: [73, 74, 75, 71, 69, 72, 76, 73], expected: [1, 1, 4, 2, 1, 1, 0, 0], name: "Basic example" },
    ],
    hiddenTests: [
        { input: [30], expected: [0], name: "Single day", category: "edge" },
        { input: [30, 40, 50, 60], expected: [1, 1, 1, 0], name: "Increasing", category: "normal" },
        { input: [60, 50, 40, 30], expected: [0, 0, 0, 0], name: "Decreasing", category: "edge" },
        { input: [30, 60, 90], expected: [1, 1, 0], name: "Short increasing", category: "edge" },
    ],
};

// ============================================================================
// DIVIDE CONQUER (Binary Search)
// ============================================================================

export const HALF_SEARCH_TESTS: ExerciseTests = {
    publicTests: [
        { input: { nums: [-1, 0, 3, 5, 9, 12], target: 9 }, expected: 4, name: "Found" },
        { input: { nums: [-1, 0, 3, 5, 9, 12], target: 2 }, expected: -1, name: "Not found" },
    ],
    hiddenTests: [
        { input: { nums: [5], target: 5 }, expected: 0, name: "Single element found", category: "edge" },
        { input: { nums: [5], target: 3 }, expected: -1, name: "Single element not found", category: "edge" },
        { input: { nums: [], target: 0 }, expected: -1, name: "Empty array", category: "edge" },
        { input: { nums: [1, 2, 3, 4, 5], target: 1 }, expected: 0, name: "First element", category: "edge" },
        { input: { nums: [1, 2, 3, 4, 5], target: 5 }, expected: 4, name: "Last element", category: "edge" },
    ],
};

export const ROTATED_MIN_TESTS: ExerciseTests = {
    publicTests: [
        { input: [3, 4, 5, 1, 2], expected: 1, name: "Rotated" },
        { input: [4, 5, 6, 7, 0, 1, 2], expected: 0, name: "Bigger rotation" },
    ],
    hiddenTests: [
        { input: [1], expected: 1, name: "Single element", category: "edge" },
        { input: [2, 1], expected: 1, name: "Two elements", category: "edge" },
        { input: [1, 2, 3, 4, 5], expected: 1, name: "Not rotated", category: "edge" },
        { input: [11, 13, 15, 17], expected: 11, name: "Not rotated increasing", category: "edge" },
    ],
};

// ============================================================================
// MEMORY LANE (1D DP)
// ============================================================================

export const STEP_CLIMB_TESTS: ExerciseTests = {
    publicTests: [
        { input: 2, expected: 2, name: "2 steps" },
        { input: 3, expected: 3, name: "3 steps" },
    ],
    hiddenTests: [
        { input: 1, expected: 1, name: "1 step", category: "edge" },
        { input: 4, expected: 5, name: "4 steps", category: "normal" },
        { input: 5, expected: 8, name: "5 steps", category: "normal" },
        { input: 10, expected: 89, name: "10 steps", category: "normal" },
    ],
};

export const HOME_HEIST_TESTS: ExerciseTests = {
    publicTests: [
        { input: [1, 2, 3, 1], expected: 4, name: "Basic example" },
        { input: [2, 7, 9, 3, 1], expected: 12, name: "Optimal skip" },
    ],
    hiddenTests: [
        { input: [], expected: 0, name: "Empty array", category: "edge" },
        { input: [5], expected: 5, name: "Single house", category: "edge" },
        { input: [1, 2], expected: 2, name: "Two houses", category: "edge" },
        { input: [2, 1, 1, 2], expected: 4, name: "Edges best", category: "tricky" },
    ],
};

export const COIN_CHANGE_TESTS: ExerciseTests = {
    publicTests: [
        { input: { coins: [1, 2, 5], amount: 11 }, expected: 3, name: "Basic example" },
        { input: { coins: [2], amount: 3 }, expected: -1, name: "Impossible" },
    ],
    hiddenTests: [
        { input: { coins: [1], amount: 0 }, expected: 0, name: "Zero amount", category: "edge" },
        { input: { coins: [1], amount: 1 }, expected: 1, name: "Single coin", category: "edge" },
        { input: { coins: [1, 2, 5], amount: 100 }, expected: 20, name: "Large amount", category: "normal" },
        { input: { coins: [186, 419, 83, 408], amount: 6249 }, expected: 20, name: "Complex", category: "tricky" },
    ],
};

// ============================================================================
// QUICK DECISIONS (Greedy)
// ============================================================================

export const MAX_SEGMENT_TESTS: ExerciseTests = {
    publicTests: [
        { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6, name: "Basic example" },
        { input: [1], expected: 1, name: "Single element" },
    ],
    hiddenTests: [
        { input: [5, 4, -1, 7, 8], expected: 23, name: "All positive mostly", category: "normal" },
        { input: [-1], expected: -1, name: "Single negative", category: "edge" },
        { input: [-2, -1], expected: -1, name: "All negative", category: "tricky" },
        { input: [1, 2, 3, 4, 5], expected: 15, name: "All positive", category: "edge" },
    ],
};

export const JUMP_REACH_TESTS: ExerciseTests = {
    publicTests: [
        { input: [2, 3, 1, 1, 4], expected: true, name: "Can reach" },
        { input: [3, 2, 1, 0, 4], expected: false, name: "Cannot reach" },
    ],
    hiddenTests: [
        { input: [0], expected: true, name: "Already there", category: "edge" },
        { input: [2, 0, 0], expected: true, name: "Just enough", category: "edge" },
        { input: [1, 0, 1, 0], expected: false, name: "Stuck", category: "tricky" },
        { input: [1, 1, 1, 1], expected: true, name: "Step by step", category: "normal" },
    ],
};

// ============================================================================
// TIME BLOCKS (Intervals)
// ============================================================================

export const MERGE_RANGES_TESTS: ExerciseTests = {
    publicTests: [
        { input: [[1, 3], [2, 6], [8, 10], [15, 18]], expected: [[1, 6], [8, 10], [15, 18]], name: "Basic merge" },
        { input: [[1, 4], [4, 5]], expected: [[1, 5]], name: "Touching" },
    ],
    hiddenTests: [
        { input: [], expected: [], name: "Empty", category: "edge" },
        { input: [[1, 4]], expected: [[1, 4]], name: "Single interval", category: "edge" },
        { input: [[1, 4], [0, 4]], expected: [[0, 4]], name: "Overlap at start", category: "tricky" },
        { input: [[1, 4], [2, 3]], expected: [[1, 4]], name: "Contained", category: "tricky" },
    ],
};

// ============================================================================
// BINARY LOGIC (Bit Manipulation)
// ============================================================================

export const SOLO_NUMBER_TESTS: ExerciseTests = {
    publicTests: [
        { input: [2, 2, 1], expected: 1, name: "Basic example" },
        { input: [4, 1, 2, 1, 2], expected: 4, name: "In middle" },
    ],
    hiddenTests: [
        { input: [1], expected: 1, name: "Single element", category: "edge" },
        { input: [-1, -1, -2], expected: -2, name: "Negative numbers", category: "tricky" },
        { input: [0, 0, 1], expected: 1, name: "With zero", category: "edge" },
    ],
};

export const MISSING_ONE_TESTS: ExerciseTests = {
    publicTests: [
        { input: [3, 0, 1], expected: 2, name: "Missing middle" },
        { input: [0, 1], expected: 2, name: "Missing last" },
    ],
    hiddenTests: [
        { input: [0], expected: 1, name: "Missing 1", category: "edge" },
        { input: [1], expected: 0, name: "Missing 0", category: "edge" },
        { input: [9, 6, 4, 2, 3, 5, 7, 0, 1], expected: 8, name: "Larger", category: "normal" },
    ],
};

// ============================================================================
// CHAIN LINKS (Linked List) - Using array representation
// ============================================================================

export const FLIP_LIST_TESTS: ExerciseTests = {
    publicTests: [
        { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1], name: "Basic reverse" },
        { input: [1, 2], expected: [2, 1], name: "Two elements" },
    ],
    hiddenTests: [
        { input: [], expected: [], name: "Empty list", category: "edge" },
        { input: [1], expected: [1], name: "Single element", category: "edge" },
        { input: [1, 2, 3], expected: [3, 2, 1], name: "Three elements", category: "normal" },
    ],
};

export const MERGE_PAIR_TESTS: ExerciseTests = {
    publicTests: [
        { input: { l1: [1, 2, 4], l2: [1, 3, 4] }, expected: [1, 1, 2, 3, 4, 4], name: "Basic merge" },
    ],
    hiddenTests: [
        { input: { l1: [], l2: [] }, expected: [], name: "Both empty", category: "edge" },
        { input: { l1: [], l2: [0] }, expected: [0], name: "One empty", category: "edge" },
        { input: { l1: [1], l2: [2] }, expected: [1, 2], name: "Single elements", category: "edge" },
        { input: { l1: [1, 3, 5], l2: [2, 4, 6] }, expected: [1, 2, 3, 4, 5, 6], name: "Interleaved", category: "normal" },
    ],
};

export const LOOP_CHECK_TESTS: ExerciseTests = {
    publicTests: [
        { input: { list: [3, 2, 0, -4], hasCycle: true }, expected: true, name: "Has cycle" },
        { input: { list: [1, 2], hasCycle: false }, expected: false, name: "No cycle" },
    ],
    hiddenTests: [
        { input: { list: [1], hasCycle: false }, expected: false, name: "Single no cycle", category: "edge" },
        { input: { list: [1], hasCycle: true }, expected: true, name: "Single self loop", category: "edge" },
    ],
};

export const FIND_CLONE_TESTS: ExerciseTests = {
    publicTests: [
        { input: [1, 3, 4, 2, 2], expected: 2, name: "Duplicate 2" },
        { input: [3, 1, 3, 4, 2], expected: 3, name: "Duplicate 3" },
    ],
    hiddenTests: [
        { input: [1, 1], expected: 1, name: "Minimal", category: "edge" },
        { input: [1, 1, 2], expected: 1, name: "Duplicate at start", category: "edge" },
        { input: [2, 2, 2, 2, 2], expected: 2, name: "All same", category: "tricky" },
    ],
};

// ============================================================================
// BRANCHING PATHS (Trees) - Using array representation [val, left, right]
// ============================================================================

export const TREE_DEPTH_TESTS: ExerciseTests = {
    publicTests: [
        { input: [3, 9, 20, null, null, 15, 7], expected: 3, name: "Basic tree" },
        { input: [1, null, 2], expected: 2, name: "Right only" },
    ],
    hiddenTests: [
        { input: [], expected: 0, name: "Empty tree", category: "edge" },
        { input: [1], expected: 1, name: "Single node", category: "edge" },
        { input: [1, 2, 3, 4, 5], expected: 3, name: "Left heavy", category: "normal" },
    ],
};

export const TREE_BALANCE_TESTS: ExerciseTests = {
    publicTests: [
        { input: [3, 9, 20, null, null, 15, 7], expected: true, name: "Balanced" },
        { input: [1, 2, 2, 3, 3, null, null, 4, 4], expected: false, name: "Unbalanced" },
    ],
    hiddenTests: [
        { input: [], expected: true, name: "Empty tree", category: "edge" },
        { input: [1], expected: true, name: "Single node", category: "edge" },
        { input: [1, 2, null, 3], expected: false, name: "Left chain", category: "edge" },
    ],
};

export const VALID_BST_TESTS: ExerciseTests = {
    publicTests: [
        { input: [2, 1, 3], expected: true, name: "Valid BST" },
        { input: [5, 1, 4, null, null, 3, 6], expected: false, name: "Invalid BST" },
    ],
    hiddenTests: [
        { input: [], expected: true, name: "Empty tree", category: "edge" },
        { input: [1], expected: true, name: "Single node", category: "edge" },
        { input: [5, 4, 6, null, null, 3, 7], expected: false, name: "Tricky invalid", category: "tricky" },
    ],
};

export const LEVEL_SCAN_TESTS: ExerciseTests = {
    publicTests: [
        { input: [3, 9, 20, null, null, 15, 7], expected: [[3], [9, 20], [15, 7]], name: "Basic BFS" },
    ],
    hiddenTests: [
        { input: [], expected: [], name: "Empty tree", category: "edge" },
        { input: [1], expected: [[1]], name: "Single node", category: "edge" },
        { input: [1, 2, 3, 4, 5, 6, 7], expected: [[1], [2, 3], [4, 5, 6, 7]], name: "Complete tree", category: "normal" },
    ],
};

// ============================================================================
// PRIORITY LANES (Heap)
// ============================================================================

export const STONE_WEIGHT_TESTS: ExerciseTests = {
    publicTests: [
        { input: [2, 7, 4, 1, 8, 1], expected: 1, name: "Basic example" },
    ],
    hiddenTests: [
        { input: [1], expected: 1, name: "Single stone", category: "edge" },
        { input: [2, 2], expected: 0, name: "Two equal", category: "edge" },
        { input: [1, 3], expected: 2, name: "Two different", category: "edge" },
        { input: [10, 4, 2, 10], expected: 2, name: "Large stones", category: "normal" },
    ],
};

export const KTH_ARRAY_TESTS: ExerciseTests = {
    publicTests: [
        { input: { nums: [3, 2, 1, 5, 6, 4], k: 2 }, expected: 5, name: "Basic example" },
        { input: { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4 }, expected: 4, name: "With duplicates" },
    ],
    hiddenTests: [
        { input: { nums: [1], k: 1 }, expected: 1, name: "Single element", category: "edge" },
        { input: { nums: [2, 1], k: 2 }, expected: 1, name: "Two elements", category: "edge" },
        { input: { nums: [7, 6, 5, 4, 3, 2, 1], k: 5 }, expected: 3, name: "Descending", category: "normal" },
    ],
};

// ============================================================================
// TRIAL ERROR (Backtracking)
// ============================================================================

export const POWER_SET_TESTS: ExerciseTests = {
    publicTests: [
        { input: [1, 2, 3], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]], name: "Basic example" },
    ],
    hiddenTests: [
        { input: [], expected: [[]], name: "Empty set", category: "edge" },
        { input: [0], expected: [[], [0]], name: "Single element", category: "edge" },
        { input: [1, 2], expected: [[], [1], [2], [1, 2]], name: "Two elements", category: "normal" },
    ],
};

export const ALL_ORDERS_TESTS: ExerciseTests = {
    publicTests: [
        { input: [1, 2, 3], expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]], name: "Three elements" },
    ],
    hiddenTests: [
        { input: [0], expected: [[0]], name: "Single element", category: "edge" },
        { input: [1, 2], expected: [[1, 2], [2, 1]], name: "Two elements", category: "edge" },
    ],
};

export const BRACKET_GEN_TESTS: ExerciseTests = {
    publicTests: [
        { input: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"], name: "n=3" },
    ],
    hiddenTests: [
        { input: 1, expected: ["()"], name: "n=1", category: "edge" },
        { input: 2, expected: ["(())", "()()"], name: "n=2", category: "edge" },
    ],
};

export const PHONE_LETTERS_TESTS: ExerciseTests = {
    publicTests: [
        { input: "23", expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"], name: "Two digits" },
    ],
    hiddenTests: [
        { input: "", expected: [], name: "Empty", category: "edge" },
        { input: "2", expected: ["a", "b", "c"], name: "Single digit", category: "edge" },
    ],
};

// ============================================================================
// NETWORK MAPS (Graphs)
// ============================================================================

export const ISLAND_COUNT_TESTS: ExerciseTests = {
    publicTests: [
        { input: [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]], expected: 1, name: "One island" },
        { input: [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]], expected: 3, name: "Three islands" },
    ],
    hiddenTests: [
        { input: [], expected: 0, name: "Empty grid", category: "edge" },
        { input: [["0"]], expected: 0, name: "Single water", category: "edge" },
        { input: [["1"]], expected: 1, name: "Single land", category: "edge" },
    ],
};

export const CLASS_ORDER_TESTS: ExerciseTests = {
    publicTests: [
        { input: { numCourses: 2, prerequisites: [[1, 0]] }, expected: true, name: "Can finish" },
        { input: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] }, expected: false, name: "Cycle" },
    ],
    hiddenTests: [
        { input: { numCourses: 1, prerequisites: [] }, expected: true, name: "Single course", category: "edge" },
        { input: { numCourses: 3, prerequisites: [[1, 0], [2, 1]] }, expected: true, name: "Chain", category: "normal" },
    ],
};

export const ROT_TIMER_TESTS: ExerciseTests = {
    publicTests: [
        { input: [[2, 1, 1], [1, 1, 0], [0, 1, 1]], expected: 4, name: "Basic rot" },
        { input: [[2, 1, 1], [0, 1, 1], [1, 0, 1]], expected: -1, name: "Impossible" },
    ],
    hiddenTests: [
        { input: [[0]], expected: 0, name: "No oranges", category: "edge" },
        { input: [[2]], expected: 0, name: "Only rotten", category: "edge" },
        { input: [[1]], expected: -1, name: "Only fresh", category: "edge" },
    ],
};

// ============================================================================
// ROUTE OPTIMIZATION (Advanced Graphs)
// ============================================================================

export const SIGNAL_TIME_TESTS: ExerciseTests = {
    publicTests: [
        { input: { times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n: 4, k: 2 }, expected: 2, name: "Basic" },
        { input: { times: [[1, 2, 1]], n: 2, k: 2 }, expected: -1, name: "Unreachable" },
    ],
    hiddenTests: [
        { input: { times: [[1, 2, 1]], n: 2, k: 1 }, expected: 1, name: "Simple path", category: "edge" },
        { input: { times: [], n: 1, k: 1 }, expected: 0, name: "Single node", category: "edge" },
    ],
};

// ============================================================================
// GRID GAME (2D DP)
// ============================================================================

export const PATH_COUNT_TESTS: ExerciseTests = {
    publicTests: [
        { input: { m: 3, n: 7 }, expected: 28, name: "3x7 grid" },
        { input: { m: 3, n: 2 }, expected: 3, name: "3x2 grid" },
    ],
    hiddenTests: [
        { input: { m: 1, n: 1 }, expected: 1, name: "1x1 grid", category: "edge" },
        { input: { m: 1, n: 10 }, expected: 1, name: "Single row", category: "edge" },
        { input: { m: 10, n: 1 }, expected: 1, name: "Single column", category: "edge" },
    ],
};

export const COMMON_SEQUENCE_TESTS: ExerciseTests = {
    publicTests: [
        { input: { text1: "abcde", text2: "ace" }, expected: 3, name: "Basic LCS" },
        { input: { text1: "abc", text2: "abc" }, expected: 3, name: "Same strings" },
    ],
    hiddenTests: [
        { input: { text1: "abc", text2: "def" }, expected: 0, name: "No common", category: "edge" },
        { input: { text1: "", text2: "abc" }, expected: 0, name: "Empty string", category: "edge" },
        { input: { text1: "a", text2: "a" }, expected: 1, name: "Single char", category: "edge" },
    ],
};

export const EDIT_STEPS_TESTS: ExerciseTests = {
    publicTests: [
        { input: { word1: "horse", word2: "ros" }, expected: 3, name: "Basic edit" },
        { input: { word1: "intention", word2: "execution" }, expected: 5, name: "Longer words" },
    ],
    hiddenTests: [
        { input: { word1: "", word2: "" }, expected: 0, name: "Both empty", category: "edge" },
        { input: { word1: "", word2: "abc" }, expected: 3, name: "Insert all", category: "edge" },
        { input: { word1: "abc", word2: "abc" }, expected: 0, name: "Same word", category: "edge" },
    ],
};

// ============================================================================
// Additional exercises for various modules
// ============================================================================

export const SORTED_PAIR_TESTS: ExerciseTests = {
    publicTests: [
        { input: { numbers: [2, 7, 11, 15], target: 9 }, expected: [1, 2], name: "Basic (1-indexed)" },
    ],
    hiddenTests: [
        { input: { numbers: [2, 3, 4], target: 6 }, expected: [1, 3], name: "Skip middle", category: "normal" },
        { input: { numbers: [-1, 0], target: -1 }, expected: [1, 2], name: "Negative", category: "tricky" },
    ],
};

export const ENCODE_DECODE_TESTS: ExerciseTests = {
    publicTests: [
        { input: ["lint", "code", "love", "you"], expected: ["lint", "code", "love", "you"], name: "Basic encode/decode" },
    ],
    hiddenTests: [
        { input: [], expected: [], name: "Empty list", category: "edge" },
        { input: [""], expected: [""], name: "Empty string", category: "edge" },
        { input: ["a:b", "c:d"], expected: ["a:b", "c:d"], name: "With colons", category: "tricky" },
    ],
};

export const GRID_VALID_TESTS: ExerciseTests = {
    publicTests: [
        { input: [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]], expected: true, name: "Valid sudoku" },
    ],
    hiddenTests: [
        { input: [["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]], expected: false, name: "Duplicate in column", category: "tricky" },
    ],
};

export const MAX_SAME_CHAR_TESTS: ExerciseTests = {
    publicTests: [
        { input: { s: "ABAB", k: 2 }, expected: 4, name: "Basic example" },
        { input: { s: "AABABBA", k: 1 }, expected: 4, name: "Replace one" },
    ],
    hiddenTests: [
        { input: { s: "A", k: 0 }, expected: 1, name: "Single char", category: "edge" },
        { input: { s: "AAAA", k: 0 }, expected: 4, name: "All same", category: "edge" },
    ],
};

export const CHEAP_STAIRS_TESTS: ExerciseTests = {
    publicTests: [
        { input: [10, 15, 20], expected: 15, name: "Basic example" },
        { input: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1], expected: 6, name: "Alternating" },
    ],
    hiddenTests: [
        { input: [0, 0], expected: 0, name: "All zeros", category: "edge" },
        { input: [1, 2], expected: 1, name: "Two steps", category: "edge" },
    ],
};

export const LONG_INCREASE_TESTS: ExerciseTests = {
    publicTests: [
        { input: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4, name: "Basic LIS" },
        { input: [0, 1, 0, 3, 2, 3], expected: 4, name: "Multiple paths" },
    ],
    hiddenTests: [
        { input: [7, 7, 7, 7], expected: 1, name: "All same", category: "tricky" },
        { input: [1], expected: 1, name: "Single element", category: "edge" },
    ],
};

export const WORD_SPLIT_TESTS: ExerciseTests = {
    publicTests: [
        { input: { s: "leetcode", wordDict: ["leet", "code"] }, expected: true, name: "Can break" },
        { input: { s: "applepenapple", wordDict: ["apple", "pen"] }, expected: true, name: "Reuse words" },
    ],
    hiddenTests: [
        { input: { s: "catsandog", wordDict: ["cats", "dog", "sand", "and", "cat"] }, expected: false, name: "Cannot break", category: "tricky" },
        { input: { s: "", wordDict: ["a"] }, expected: true, name: "Empty string", category: "edge" },
    ],
};

export const EQUAL_SPLIT_TESTS: ExerciseTests = {
    publicTests: [
        { input: [1, 5, 11, 5], expected: true, name: "Can partition" },
        { input: [1, 2, 3, 5], expected: false, name: "Cannot partition" },
    ],
    hiddenTests: [
        { input: [1, 1], expected: true, name: "Two equal", category: "edge" },
        { input: [2, 2, 1, 1], expected: true, name: "Four elements", category: "normal" },
    ],
};

export const SKIP_RANGES_TESTS: ExerciseTests = {
    publicTests: [
        { input: [[1, 2], [2, 3], [3, 4], [1, 3]], expected: 1, name: "One removal" },
    ],
    hiddenTests: [
        { input: [[1, 2], [1, 2], [1, 2]], expected: 2, name: "All same", category: "tricky" },
        { input: [[1, 2], [2, 3]], expected: 0, name: "No overlap", category: "edge" },
    ],
};

export const GAS_ROUTE_TESTS: ExerciseTests = {
    publicTests: [
        { input: { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] }, expected: 3, name: "Can complete" },
        { input: { gas: [2, 3, 4], cost: [3, 4, 3] }, expected: -1, name: "Cannot complete" },
    ],
    hiddenTests: [
        { input: { gas: [5], cost: [4] }, expected: 0, name: "Single station", category: "edge" },
        { input: { gas: [3, 3, 3], cost: [3, 3, 3] }, expected: 0, name: "All equal", category: "edge" },
    ],
};

export const JUMP_COUNT_TESTS: ExerciseTests = {
    publicTests: [
        { input: [2, 3, 1, 1, 4], expected: 2, name: "Basic example" },
    ],
    hiddenTests: [
        { input: [0], expected: 0, name: "Already there", category: "edge" },
        { input: [1, 1, 1, 1], expected: 3, name: "Step by step", category: "normal" },
        { input: [10, 1, 1, 1, 1], expected: 1, name: "One big jump", category: "edge" },
    ],
};

export const ROTATED_SEARCH_TESTS: ExerciseTests = {
    publicTests: [
        { input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 0 }, expected: 4, name: "Found" },
        { input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 3 }, expected: -1, name: "Not found" },
    ],
    hiddenTests: [
        { input: { nums: [1], target: 1 }, expected: 0, name: "Single found", category: "edge" },
        { input: { nums: [1], target: 0 }, expected: -1, name: "Single not found", category: "edge" },
    ],
};

// ============================================================================
// Map of all exercise tests
// ============================================================================

export const ALL_EXERCISE_TESTS: Record<string, ExerciseTests> = {
    // Data Vault (Arrays & Hashing)
    "spot-repeat": SPOT_REPEAT_TESTS,
    "letter-shuffle": LETTER_SHUFFLE_TESTS,
    "pair-hunt": PAIR_HUNT_TESTS,
    "sort-letters": SORT_LETTERS_TESTS,
    "most-common": MOST_COMMON_TESTS,
    "multiply-rest": MULTIPLY_REST_TESTS,
    "streak-finder": STREAK_FINDER_TESTS,
    "encode-decode": ENCODE_DECODE_TESTS,
    "grid-valid": GRID_VALID_TESTS,

    // Dual Scanners (Two Pointers)
    "mirror-check": MIRROR_CHECK_TESTS,
    "triple-match": TRIPLE_MATCH_TESTS,
    "max-basin": MAX_BASIN_TESTS,
    "flood-volume": FLOOD_VOLUME_TESTS,
    "sorted-pair": SORTED_PAIR_TESTS,

    // Moving Frame (Sliding Window)
    "peak-profit": PEAK_PROFIT_TESTS,
    "unique-streak": UNIQUE_STREAK_TESTS,
    "smallest-cover": SMALLEST_COVER_TESTS,
    "max-same-char": MAX_SAME_CHAR_TESTS,

    // Number Theory (Math & Geometry)
    "spin-grid": SPIN_GRID_TESTS,

    // LIFO Tower (Stack)
    "bracket-match": BRACKET_MATCH_TESTS,
    "reverse-calc": REVERSE_CALC_TESTS,
    "heat-wave": HEAT_WAVE_TESTS,

    // Divide Conquer (Binary Search)
    "half-search": HALF_SEARCH_TESTS,
    "rotated-min": ROTATED_MIN_TESTS,
    "rotated-search": ROTATED_SEARCH_TESTS,

    // Memory Lane (1D DP)
    "step-climb": STEP_CLIMB_TESTS,
    "home-heist": HOME_HEIST_TESTS,
    "coin-change": COIN_CHANGE_TESTS,
    "cheap-stairs": CHEAP_STAIRS_TESTS,
    "long-increase": LONG_INCREASE_TESTS,
    "word-split": WORD_SPLIT_TESTS,
    "equal-split": EQUAL_SPLIT_TESTS,

    // Quick Decisions (Greedy)
    "max-segment": MAX_SEGMENT_TESTS,
    "jump-reach": JUMP_REACH_TESTS,
    "jump-count": JUMP_COUNT_TESTS,
    "gas-route": GAS_ROUTE_TESTS,

    // Time Blocks (Intervals)
    "merge-ranges": MERGE_RANGES_TESTS,
    "skip-ranges": SKIP_RANGES_TESTS,

    // Binary Logic (Bit Manipulation)
    "solo-number": SOLO_NUMBER_TESTS,
    "missing-one": MISSING_ONE_TESTS,

    // Chain Links (Linked List)
    "flip-list": FLIP_LIST_TESTS,
    "merge-pair": MERGE_PAIR_TESTS,
    "loop-check": LOOP_CHECK_TESTS,
    "find-clone": FIND_CLONE_TESTS,

    // Branching Paths (Trees)
    "tree-depth": TREE_DEPTH_TESTS,
    "tree-balance": TREE_BALANCE_TESTS,
    "valid-bst": VALID_BST_TESTS,
    "level-scan": LEVEL_SCAN_TESTS,

    // Priority Lanes (Heap)
    "stone-weight": STONE_WEIGHT_TESTS,
    "kth-array": KTH_ARRAY_TESTS,

    // Trial Error (Backtracking)
    "power-set": POWER_SET_TESTS,
    "all-orders": ALL_ORDERS_TESTS,
    "bracket-gen": BRACKET_GEN_TESTS,
    "phone-letters": PHONE_LETTERS_TESTS,

    // Network Maps (Graphs)
    "island-count": ISLAND_COUNT_TESTS,
    "class-order": CLASS_ORDER_TESTS,
    "rot-timer": ROT_TIMER_TESTS,

    // Route Optimization (Advanced Graphs)
    "signal-time": SIGNAL_TIME_TESTS,

    // Grid Game (2D DP)
    "path-count": PATH_COUNT_TESTS,
    "common-sequence": COMMON_SEQUENCE_TESTS,
    "edit-steps": EDIT_STEPS_TESTS,
};

