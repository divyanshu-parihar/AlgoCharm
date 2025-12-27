// @ts-nocheck - Standalone seed script, schema updates pending
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { eq } from "drizzle-orm";

const SEED_MODULES = [
  // Level 1: Foundation
  {
    title: "The Data Vault",
    slug: "data-vault",
    description: "Collections and lookups. The foundation of everything else.",
    isLocked: false,
    order: 1,
  },
  // Level 2: Basic Techniques
  {
    title: "Dual Scanners",
    slug: "dual-scanners",
    description: "When one cursor isn't enough. Walk both ends toward the middle.",
    isLocked: false,
    order: 2,
  },
  {
    title: "The LIFO Tower",
    slug: "lifo-tower",
    description: "Last in, first out. Perfect for matching and tracking state.",
    isLocked: false,
    order: 3,
  },
  // Level 3: Intermediate
  {
    title: "Divide & Conquer",
    slug: "divide-conquer",
    description: "Cut your search space in half, repeatedly. O(log n) is your friend.",
    isLocked: false,
    order: 4,
  },
  {
    title: "The Moving Frame",
    slug: "moving-frame",
    description: "Stop recalculating from scratch. Slide your view across the data.",
    isLocked: false,
    order: 5,
  },
  {
    title: "Chain Links",
    slug: "chain-links",
    description: "Nodes pointing to nodes. Master the pointer dance.",
    isLocked: false,
    order: 6,
  },
  // Level 4: Trees
  {
    title: "The Branching Paths",
    slug: "branching-paths",
    description: "Recursion's natural habitat. Traverse, search, and balance.",
    isLocked: false,
    order: 7,
  },
  // Level 5: Advanced Data Structures
  {
    title: "Prefix Networks",
    slug: "prefix-networks",
    description: "The prefix tree. Autocomplete and word puzzles solved.",
    isLocked: false,
    order: 8,
  },
  {
    title: "Priority Lanes",
    slug: "priority-lanes",
    description: "Always know your min or max. The secret behind scheduling.",
    isLocked: false,
    order: 9,
  },
  {
    title: "Trial & Error",
    slug: "trial-error",
    description: "Try everything, undo when stuck. Exhaustive search that works.",
    isLocked: false,
    order: 10,
  },
  // Level 6: Graph Theory
  {
    title: "Network Maps",
    slug: "network-maps",
    description: "Nodes and connections. From social networks to pathfinding.",
    isLocked: false,
    order: 11,
  },
  {
    title: "Route Optimization",
    slug: "route-optimization",
    description: "Shortest paths, ordering, weighted edges. The advanced stuff.",
    isLocked: false,
    order: 12,
  },
  // Level 7: Dynamic Programming
  {
    title: "Memory Lane",
    slug: "memory-lane",
    description: "Remember past results to optimize future. Start with sequences.",
    isLocked: false,
    order: 13,
  },
  {
    title: "The Grid Game",
    slug: "grid-game",
    description: "Two-dimensional state spaces. Grids, matrices, and table fills.",
    isLocked: false,
    order: 14,
  },
  // Level 8: Specialized
  {
    title: "Quick Decisions",
    slug: "quick-decisions",
    description: "Make the locally optimal choice. Sometimes it's globally optimal.",
    isLocked: false,
    order: 15,
  },
  {
    title: "Time Blocks",
    slug: "time-blocks",
    description: "Merge, insert, overlap. Scheduling and range problems.",
    isLocked: false,
    order: 16,
  },
  {
    title: "Binary Logic",
    slug: "binary-logic",
    description: "Think in binary. XOR, AND, shifts - bit-level tricks.",
    isLocked: false,
    order: 17,
  },
  {
    title: "Number Theory",
    slug: "number-theory",
    description: "When the problem is pure mathematics.",
    isLocked: false,
    order: 18,
  },
];

const SEED_LESSONS = [
  // ============================================
  // MODULE 1: THE DATA VAULT (Arrays & Hashing)
  // ============================================

  // PATTERN INTRO: Hash Sets
  {
    moduleSlug: "data-vault",
    slug: "pattern-hash-set",
    title: "🔑 Pattern: The Hash Set",
    storyContent: `## Your First Superpower

Before we dive into problems, let me give you a weapon that will solve 30% of interview questions: **the hash set**.

---

### The Problem with Linear Scans

You have a list of 1 million numbers. I ask: "Is 42 in this list?"

**The naive way:** Loop through every single element. O(n). On a million items, that's... slow.

**The smart way:** Use a hash set.

---

### How Hash Sets Work (Mental Model)

Imagine a massive hotel with infinite rooms. Each room has a number.

When a guest (data) arrives:
1. Take their name through a "hash function" → produces a room number
2. Put them in that room

When looking for someone:
1. Run their name through the same hash function → get room number
2. Go directly to that room. O(1). Instant.

\`\`\`
Guest "Alice" → hash("Alice") → Room 4827
Guest "Bob"   → hash("Bob")   → Room 1203

Looking for Alice?
  hash("Alice") → 4827 → Check room 4827 → FOUND!
\`\`\`

---

### When to Use Hash Sets

✅ "Have I seen this before?"
✅ "Does this element exist?"
✅ "Remove duplicates"
✅ "Find unique elements"

\`\`\`go
// Creating a hash set in Go
seen := make(map[int]bool)

// Adding to set
seen[42] = true

// Checking membership - O(1)!
if seen[42] {
    fmt.Println("Found it!")
}
\`\`\`

---

### Ready?

The next few missions will drill this pattern into your muscle memory. Let's go! 🚀`,
    theoryContent: `## Hash Set Cheat Sheet

| Operation | Time | Description |
|-----------|------|-------------|
| Add | O(1) | Insert element |
| Contains | O(1) | Check if exists |
| Remove | O(1) | Delete element |
| Size | O(1) | Count elements |

**Space:** O(n) where n = number of elements

**Trade-off:** We use extra memory to get constant-time lookups.`,
    hasExercise: false,
    exerciseId: null,
    order: 0,
  },

  // Mission 1: Spot the Repeat
  {
    moduleSlug: "data-vault",
    slug: "spot-repeat",
    title: "Spot the Repeat",
    storyContent: `## The Rookie Mistake

I've done probably 500+ code reviews at this point. You know what I see constantly?

\`\`\`go
// The Naive Approach (DON'T DO THIS)
for i := 0; i < len(nums); i++ {
    for j := i + 1; j < len(nums); j++ {
        if nums[i] == nums[j] {
            return true  // O(n²) - you just failed the interview
        }
    }
}
\`\`\`

**Why this fails:** Your interviewer sees this and thinks "they don't know data structures."

---

## The Fix: Hash Sets

Here's the mental model I want you to internalize:

> **A hash set is like a guest list at an exclusive club.**
> 
> - Checking if someone's on the list? O(1)
> - Adding someone to the list? O(1)
> - You just turned O(n²) into O(n)

\`\`\`
Processing: [1, 2, 3, 1]

Step 1: See 1 → "New person" → Add to set {1}
Step 2: See 2 → "New person" → Add to set {1, 2}
Step 3: See 3 → "New person" → Add to set {1, 2, 3}
Step 4: See 1 → "Wait, you're already here!" → DUPLICATE FOUND
\`\`\`

---

### 🎯 Your Task

Given an array, return \`true\` if any value appears **at least twice**.`,
    theoryContent: `## Hash Set Pattern

**When to use:** "Have I seen this before?"

| Operation | Array | Hash Set |
|-----------|-------|----------|
| Lookup    | O(n)  | O(1)     |
| Insert    | O(1)  | O(1)     |

**Code Template:**
\`\`\`go
seen := make(map[int]bool)
for _, num := range nums {
    if seen[num] {
        return true  // Duplicate!
    }
    seen[num] = true
}
return false
\`\`\`

**Interview Tip:** Always mention the space-time tradeoff. "I'm using O(n) extra space to get O(n) time."`,
    hasExercise: true,
    exerciseId: "spot-repeat",
    order: 1,
  },
  {
    moduleSlug: "data-vault",
    slug: "letter-shuffle",
    title: "Letter Shuffle",
    storyContent: `## The Character Counter

Quick story: I once watched a junior dev spend 30 minutes trying to sort strings and compare them. It worked, but it was O(n log n).

The interviewer asked: "Can you do better?"

*Silence.*

---

## The Insight

Think about it: an anagram uses the **exact same characters, just rearranged**.

"listen" → l(1), i(1), s(1), t(1), e(1), n(1)
"silent" → s(1), i(1), l(1), e(1), n(1), t(1)

Same character counts? Anagram. Different counts? Not an anagram.

\`\`\`
"rat" vs "car"

"rat": {r:1, a:1, t:1}
"car": {c:1, a:1, r:1}

'c' in "car" but not in "rat" → NOT an anagram
\`\`\`

---

### The Pattern

1. If lengths differ → instant false
2. Count chars in string 1 (increment)
3. Count chars in string 2 (decrement)
4. All counts should be zero`,
    theoryContent: `## Character Frequency Pattern

**Two approaches:**

### 1. Two Hash Maps (intuitive)
\`\`\`go
count1 := make(map[rune]int)
count2 := make(map[rune]int)
// Build both, then compare
\`\`\`

### 2. Single Hash Map (cleaner)
\`\`\`go
count := make(map[rune]int)
for _, c := range s { count[c]++ }
for _, c := range t { count[c]-- }
// Check all values are 0
\`\`\`

**Pro tip for interviews:** If it's just lowercase English letters, you can use \`[26]int\` instead of a map. Mention this—it shows you think about optimization.`,
    hasExercise: true,
    exerciseId: "letter-shuffle",
    order: 2,
  },
  {
    moduleSlug: "data-vault",
    slug: "pair-hunt",
    title: "Pair Hunt",
    storyContent: `## The Interview Classic

Alright, let's talk about the problem that's been asked in literally every tech company since 2010.

**Pair Hunt: Find two numbers that add up to a target.**

If you can't solve this optimally, you're not getting past round 1. Full stop.

---

## The Bad Approach

\`\`\`go
// O(n²) - Checking every pair
for i := 0; i < len(nums); i++ {
    for j := i + 1; j < len(nums); j++ {
        if nums[i] + nums[j] == target {
            return []int{i, j}
        }
    }
}
\`\`\`

This is what 90% of candidates write first. The interviewer is waiting for you to optimize.

---

## The Key Insight

> When you see a number, you don't need to find its pair.
> **Ask: "Have I already seen its complement?"**

If target = 9 and current number = 2...
Complement = 9 - 2 = 7
Question: "Did I see 7 earlier?"

\`\`\`
nums = [2, 7, 11, 15], target = 9

Step 1: num=2, complement=7, seen={}      → Add {2: 0}
Step 2: num=7, complement=2, seen={2: 0}  → 2 EXISTS! Return [0, 1]
\`\`\`

One pass. O(n). That's the bar.`,
    theoryContent: `## Complement Lookup Pattern

**The formula:** \`complement = target - current\`

\`\`\`go
seen := make(map[int]int)  // value → index
for i, num := range nums {
    complement := target - num
    if j, exists := seen[complement]; exists {
        return []int{j, i}
    }
    seen[num] = i
}
return nil
\`\`\`

**Why store the index?** The problem asks for indices, not values.

**Edge case to mention:** "What if the same element is used twice?" Make sure your solution handles \`[3, 3]\` with target 6.`,
    hasExercise: true,
    exerciseId: "pair-hunt",
    order: 3,
  },
  {
    moduleSlug: "data-vault",
    slug: "sort-letters",
    title: "Sort the Letters",
    storyContent: `## Scaling the Anagram Problem

Okay, you know how to check if two strings are anagrams. But what if I give you 10,000 strings and say "group all the anagrams together"?

You're not going to compare every pair. That's O(n² × k) where k is string length. We can do better.

---

## The Trick: Canonical Form

Every anagram shares a "signature." Find that signature, and grouping becomes trivial.

**Option 1: Sort the string**
- "eat" → "aet"
- "tea" → "aet"  
- "ate" → "aet"
- Same signature = same group!

**Option 2: Character count**
- "eat" → "a1e1t1"
- "tea" → "a1e1t1"

\`\`\`
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

Signatures:
  "eat" → "aet"
  "tea" → "aet"   → Group 1: ["eat", "tea", "ate"]
  "ate" → "aet"
  
  "tan" → "ant"   → Group 2: ["tan", "nat"]
  "nat" → "ant"
  
  "bat" → "abt"   → Group 3: ["bat"]
\`\`\``,
    theoryContent: `## The Signature Pattern

When you need to group by some property, create a **canonical form** (signature) for that property.

\`\`\`go
groups := make(map[string][]string)

for _, word := range strs {
    // Sort letters to get signature
    runes := []rune(word)
    sort.Slice(runes, func(i, j int) bool {
        return runes[i] < runes[j]
    })
    key := string(runes)
    
    groups[key] = append(groups[key], word)
}
\`\`\`

**Time:** O(n × k log k) where k = max string length
**Space:** O(n × k)

**Interview flex:** Mention that the count-based key is O(n × k) if k is small.`,
    hasExercise: true,
    exerciseId: "sort-letters",
    order: 4,
  },
  {
    moduleSlug: "data-vault",
    slug: "most-common",
    title: "Most Common Items",
    storyContent: `## When Sorting Isn't Good Enough

"Find the K most frequent elements."

Your first instinct: count frequencies, sort by frequency, take top K. That's O(n log n).

But can you do O(n)?

---

## The Bucket Sort Trick

Here's the insight that separates senior engineers:

> The frequency of any element can't exceed the array length.

If you have \`n\` elements, the max frequency is \`n\`. That's a bounded range. When we have a bounded range, we can use **bucket sort**.

\`\`\`
nums = [1, 1, 1, 2, 2, 3]  (length = 6)

Step 1: Count frequencies
  {1: 3, 2: 2, 3: 1}

Step 2: Create buckets (index = frequency)
  bucket[1] = [3]     ← appears 1 time
  bucket[2] = [2]     ← appears 2 times
  bucket[3] = [1]     ← appears 3 times
  bucket[4] = []
  bucket[5] = []
  bucket[6] = []

Step 3: Walk backwards, collect K elements
  bucket[3] → [1]
  bucket[2] → [1, 2]  ← if K=2, we're done!
\`\`\``,
    theoryContent: `## Bucket Sort for Frequency Problems

\`\`\`go
count := make(map[int]int)
for _, num := range nums {
    count[num]++
}

// Buckets where index = frequency
buckets := make([][]int, len(nums)+1)
for num, freq := range count {
    buckets[freq] = append(buckets[freq], num)
}

// Collect from highest frequency
result := []int{}
for i := len(buckets) - 1; i >= 0 && len(result) < k; i-- {
    result = append(result, buckets[i]...)
}
return result[:k]
\`\`\`

**Alternative:** Use a min-heap of size K. O(n log k) time.`,
    hasExercise: true,
    exerciseId: "most-common",
    order: 5,
  },
  {
    moduleSlug: "data-vault",
    slug: "multiply-rest",
    title: "Multiply the Rest",
    storyContent: `## The Division Trap

"Return an array where each element is the product of all other elements."

**Easy solution:** Multiply everything, then divide each element out.

**The catch:** "You can't use division." (Also, there might be zeros.)

---

## The Prefix-Suffix Pattern

This is one of those problems that seems impossible until you see the trick.

For position \`i\`, the answer is:
> (product of everything LEFT of i) × (product of everything RIGHT of i)

\`\`\`
nums = [1, 2, 3, 4]

Prefix products:
  [1, 1, 2, 6]
   ↑  ↑  ↑  ↑
   -  1  1×2  1×2×3

Suffix products:
  [24, 12, 4, 1]
    ↑   ↑  ↑  ↑
  2×3×4 3×4 4  -

Result = prefix × suffix:
  [1×24, 1×12, 2×4, 6×1] = [24, 12, 8, 6]
\`\`\`

**The clever part:** You can do this in one array + one pass.`,
    theoryContent: `## Prefix/Suffix Product Pattern

**Two-pass approach (cleaner to understand):**
\`\`\`go
n := len(nums)
result := make([]int, n)

// Forward pass: prefix products
prefix := 1
for i := 0; i < n; i++ {
    result[i] = prefix
    prefix *= nums[i]
}

// Backward pass: multiply by suffix
suffix := 1
for i := n - 1; i >= 0; i-- {
    result[i] *= suffix
    suffix *= nums[i]
}
\`\`\`

**Time:** O(n) | **Space:** O(1) excluding output array

**Interview question:** "Why not division?" Handle the case where there's a zero.`,
    hasExercise: true,
    exerciseId: "multiply-rest",
    order: 6,
  },
  {
    moduleSlug: "data-vault",
    slug: "streak-finder",
    title: "Streak Finder",
    storyContent: `## The Sorting Temptation

"Find the longest consecutive sequence in an unsorted array."

\`[100, 4, 200, 1, 3, 2]\` → 4 (the sequence 1,2,3,4)

**Naive:** Sort it → O(n log n). But can we do O(n)?

---

## The Smart Set Approach

Put everything in a hash set. Then for each number, check if it's the **start** of a sequence.

How do you know it's a start? **There's no num-1 in the set.**

\`\`\`
Set: {100, 4, 200, 1, 3, 2}

Check 100: Is 99 in set? No → It's a start!
  Count: 100, 101? No. Length = 1

Check 4: Is 3 in set? Yes → Skip (not a start)

Check 200: Is 199 in set? No → It's a start!
  Count: 200, 201? No. Length = 1

Check 1: Is 0 in set? No → It's a start!
  Count: 1, 2✓, 3✓, 4✓, 5? No. Length = 4 ★

Check 3: Is 2 in set? Yes → Skip
Check 2: Is 1 in set? Yes → Skip

Answer: 4
\`\`\`

**Key insight:** We only "expand" from sequence starts. Every number is visited at most twice. That's O(n).`,
    theoryContent: `## Sequence Start Pattern

\`\`\`go
numSet := make(map[int]bool)
for _, num := range nums {
    numSet[num] = true
}

maxLen := 0
for num := range numSet {
    // Only process if it's a sequence start
    if !numSet[num-1] {
        length := 1
        for numSet[num+length] {
            length++
        }
        if length > maxLen {
            maxLen = length
        }
    }
}
return maxLen
\`\`\`

**Why O(n)?** Each number is checked as a "start" once, and extended at most once.`,
    hasExercise: true,
    exerciseId: "streak-finder",
    order: 7,
  },

  // ============================================
  // MODULE 2: TWO POINTERS
  // ============================================
  {
    moduleSlug: "dual-scanners",
    slug: "mirror-check",
    title: "Mirror Check",
    storyContent: `## The Classic Warm-Up

"Is this string a palindrome?"

If you've never seen this pattern, today's your lucky day. Two pointers is one of those techniques that keeps showing up.

---

## The Setup

Put one pointer at the start, one at the end. Move them toward each other.

\`\`\`
"A man, a plan, a canal: Panama"

Clean it → "amanaplanacanalpanama"

  L                           R
  a m a n a p l a n a c a n a l p a n a m a
  ↑                                       ↑
  Same? Yes. Move both inward.
  
      L                               R
  a m a n a p l a n a c a n a l p a n a m a
      ↑                               ↑
  Same? Yes. Continue...
\`\`\`

When the pointers meet in the middle, it's a palindrome.`,
    theoryContent: `## Two Pointer: Converging Pattern

\`\`\`go
func isPalindrome(s string) bool {
    left, right := 0, len(s)-1
    
    for left < right {
        // Skip non-alphanumeric
        for left < right && !isAlphanumeric(s[left]) {
            left++
        }
        for left < right && !isAlphanumeric(s[right]) {
            right--
        }
        
        if toLower(s[left]) != toLower(s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
\`\`\`

**Time:** O(n) | **Space:** O(1)`,
    hasExercise: true,
    exerciseId: "mirror-check",
    order: 1,
  },
  {
    moduleSlug: "dual-scanners",
    slug: "pair-hunt-ii",
    title: "Pair Hunt II (Sorted Array)",
    storyContent: `## When the Array is Sorted

Remember Pair Hunt? We used a hash map. O(n) time, O(n) space.

But what if the array is already sorted? We can do O(1) space.

---

## The Two Pointer Approach

\`\`\`
nums = [2, 7, 11, 15], target = 9

L               R
2    7   11   15
↑               ↑
2 + 15 = 17 > 9  → R too big, move R left

L          R
2    7   11   15
↑          ↑
2 + 11 = 13 > 9  → Still too big, move R left

L     R
2    7   11   15
↑    ↑
2 + 7 = 9  → Found it! [1, 2] (1-indexed)
\`\`\`

**Why it works:** 
- Sum too big? Move right pointer left (decrease sum)
- Sum too small? Move left pointer right (increase sum)

Sorted order guarantees we don't miss the answer.`,
    theoryContent: `## Two Pointer: Sorted Array Pattern

\`\`\`go
left, right := 0, len(numbers)-1

for left < right {
    sum := numbers[left] + numbers[right]
    if sum == target {
        return []int{left + 1, right + 1}  // 1-indexed
    } else if sum < target {
        left++
    } else {
        right--
    }
}
\`\`\`

**When to use two pointers vs hash map:**
- Unsorted → Hash map
- Sorted → Two pointers (saves space)`,
    hasExercise: true,
    exerciseId: "pair-hunt-ii",
    order: 2,
  },
  {
    moduleSlug: "dual-scanners",
    slug: "triple-match",
    title: "Triple Match",
    storyContent: `## The Interview Gauntlet

Triple Match is the problem that makes or breaks candidates. I've seen people ace everything else and crumble here.

**Find all unique triplets that sum to zero.**

---

## The Strategy

1. Sort the array
2. For each number, use Pair Hunt II on the rest
3. Skip duplicates to avoid repeat triplets

\`\`\`
nums = [-1, 0, 1, 2, -1, -4]
sorted = [-4, -1, -1, 0, 1, 2]

Fix -4: Find pairs that sum to 4 in [-1, -1, 0, 1, 2]
  → No valid pairs (max is 1+2=3)

Fix -1: Find pairs that sum to 1 in [-1, 0, 1, 2]
  → Found: 0+1=1, so [-1, 0, 1] ✓
  → Found: -1+2=1, so [-1, -1, 2] ✓

Fix -1: SKIP (duplicate of previous)

Fix 0: Find pairs that sum to 0 in [1, 2]
  → No valid pairs
\`\`\``,
    theoryContent: `## Triple Match = Sort + Pair Hunt II

\`\`\`go
sort.Ints(nums)
result := [][]int{}

for i := 0; i < len(nums)-2; i++ {
    // Skip duplicates
    if i > 0 && nums[i] == nums[i-1] {
        continue
    }
    
    left, right := i+1, len(nums)-1
    target := -nums[i]
    
    for left < right {
        sum := nums[left] + nums[right]
        if sum == target {
            result = append(result, []int{nums[i], nums[left], nums[right]})
            left++
            // Skip duplicates
            for left < right && nums[left] == nums[left-1] {
                left++
            }
        } else if sum < target {
            left++
        } else {
            right--
        }
    }
}
\`\`\`

**Time:** O(n²) | **Space:** O(1) excluding output`,
    hasExercise: true,
    exerciseId: "triple-match",
    order: 3,
  },
  {
    moduleSlug: "dual-scanners",
    slug: "max-basin",
    title: "Max Basin",
    storyContent: `## The Greedy Insight

You have walls at different heights. Find two walls that hold the most water.

\`\`\`
heights: [1, 8, 6, 2, 5, 4, 8, 3, 7]

      |         |     
      |         |     |
      | |       |     |
      | |   |   |     |
      | |   | | |     |
      | |   | | | |   |
      | | | | | | | | |
  |   | | | | | | | | |
  1 2 3 4 5 6 7 8 9
\`\`\`

**Brute force:** Check every pair → O(n²)

---

## The Greedy Approach

Start with widest container (left and right edges). Then greedily make it smaller.

Which pointer should move? **The shorter wall.**

Why? Moving the taller wall can only make things worse or equal. Moving the shorter wall might find a taller one.

\`\`\`
Start: L=0, R=8 → Area = min(1,7) × 8 = 8
Move L (1 is shorter than 7)

L=1, R=8 → Area = min(8,7) × 7 = 49 ★
Move R (7 is shorter than 8)

Continue until L meets R...
\`\`\``,
    theoryContent: `## Greedy Two Pointers

\`\`\`go
left, right := 0, len(height)-1
maxArea := 0

for left < right {
    width := right - left
    h := min(height[left], height[right])
    area := width * h
    if area > maxArea {
        maxArea = area
    }
    
    // Move the shorter wall
    if height[left] < height[right] {
        left++
    } else {
        right--
    }
}
return maxArea
\`\`\`

**Why greedy works:** Moving the shorter wall is the only way to potentially increase area.`,
    hasExercise: true,
    exerciseId: "max-basin",
    order: 4,
  },
  {
    moduleSlug: "dual-scanners",
    slug: "flood-volume",
    title: "Flood Volume",
    storyContent: `## The Hard Problem

This is the hardest problem in the two pointers category. If you get this in an interview, the interviewer wants to see how you think.

**How much water can be trapped after raining?**

\`\`\`
heights: [0,1,0,2,1,0,1,3,2,1,2,1]

       |
   |   ||
 | || ||||
_||_||_||||_

Water fills the gaps: 6 units total
\`\`\`

---

## The Key Insight

At any position, the water level is:
> min(max_height_on_left, max_height_on_right) - current_height

But calculating this naively is O(n²). The trick: use two pointers with running maxes.

\`\`\`
L                             R
maxL=0                   maxR=0

If height[L] <= height[R]:
  Water at L = maxL - height[L]
  Update maxL, move L

Else:
  Water at R = maxR - height[R]
  Update maxR, move R
\`\`\`

**Why it works:** We process from the side with the lower boundary, guaranteeing the other side is at least as high.`,
    theoryContent: `## Trapping Water: Two Pointers Solution

\`\`\`go
left, right := 0, len(height)-1
maxLeft, maxRight := 0, 0
water := 0

for left <= right {
    if height[left] <= height[right] {
        if height[left] >= maxLeft {
            maxLeft = height[left]
        } else {
            water += maxLeft - height[left]
        }
        left++
    } else {
        if height[right] >= maxRight {
            maxRight = height[right]
        } else {
            water += maxRight - height[right]
        }
        right--
    }
}
return water
\`\`\`

**Time:** O(n) | **Space:** O(1)

**Alternative:** Stack-based approach (also valid, different mental model).`,
    hasExercise: true,
    exerciseId: "flood-volume",
    order: 5,
  },

  // ============================================
  // MODULE 3: SLIDING WINDOW
  // ============================================
  {
    moduleSlug: "moving-frame",
    slug: "best-time-to-buy-sell",
    title: "Peak Profit",
    storyContent: `## The Trading Game

You have stock prices over time. Buy once, sell once. Maximize profit.

\`\`\`
prices = [7, 1, 5, 3, 6, 4]

       7
           6
       5       
           4
       3
   1
───────────────
   1 2 3 4 5 6

Buy at 1, sell at 6 → Profit = 5
\`\`\`

---

## The Insight

You need to track the minimum price seen **so far**, not globally.

For each day, ask: "If I sold today, and I bought at the minimum price before today, what's my profit?"

\`\`\`
Day 1: price=7, minPrice=7, profit=0
Day 2: price=1, minPrice=1, profit=0
Day 3: price=5, minPrice=1, profit=4   ← 5-1
Day 4: price=3, minPrice=1, profit=2
Day 5: price=6, minPrice=1, profit=5 ★ ← 6-1
Day 6: price=4, minPrice=1, profit=3
\`\`\``,
    theoryContent: `## Track the Minimum Pattern

\`\`\`go
minPrice := prices[0]
maxProfit := 0

for _, price := range prices {
    if price < minPrice {
        minPrice = price
    }
    profit := price - minPrice
    if profit > maxProfit {
        maxProfit = profit
    }
}
return maxProfit
\`\`\`

**Time:** O(n) | **Space:** O(1)

This is technically a sliding window with window size = 1 (current day) and a running minimum.`,
    hasExercise: true,
    exerciseId: "peak-profit",
    order: 1,
  },
  {
    moduleSlug: "moving-frame",
    slug: "unique-streak",
    title: "Unique Streak",
    storyContent: `## The Sliding Window Classic

"Find the length of the longest substring without repeating characters."

This is THE problem that teaches sliding window. If you only learn one sliding window problem, make it this one.

---

## The Approach

Expand window right until you hit a repeat. Then shrink from left until no repeats.

\`\`\`
s = "abcabcbb"

Window: "a"      → length 1
Window: "ab"     → length 2
Window: "abc"    → length 3 ★
Window: "abca"   → Repeat! Shrink from left
Window: "bca"    → length 3
Window: "bcab"   → Repeat! Shrink
Window: "cab"    → length 3
Window: "cabb"   → Repeat! Shrink
...

Answer: 3
\`\`\`

**Key data structure:** Hash set to track characters in current window.`,
    theoryContent: `## Variable Sliding Window

\`\`\`go
charSet := make(map[byte]bool)
left := 0
maxLen := 0

for right := 0; right < len(s); right++ {
    // Shrink window while we have a duplicate
    for charSet[s[right]] {
        delete(charSet, s[left])
        left++
    }
    
    charSet[s[right]] = true
    
    if right-left+1 > maxLen {
        maxLen = right - left + 1
    }
}
return maxLen
\`\`\`

**Time:** O(n) — each character is added and removed at most once.`,
    hasExercise: true,
    exerciseId: "unique-streak",
    order: 2,
  },
  {
    moduleSlug: "moving-frame",
    slug: "longest-repeating-char-replacement",
    title: "Max Same Char",
    storyContent: `## The Twist

You can replace up to K characters. Find the longest substring with all same characters.

\`\`\`
s = "AABABBA", k = 1

"AABABBA"
   ↑
Replace one 'B' with 'A' → "AAAA" → length 4
\`\`\`

---

## The Key Insight

A valid window has:
> window_size - count_of_most_frequent_char <= k

If we need to replace more than K characters, the window is invalid.

\`\`\`
Window: "AABA"
Counts: A=3, B=1
Most frequent: A (3)
Replacements needed: 4 - 3 = 1 <= k ✓

Window: "AABAB"
Counts: A=3, B=2
Most frequent: A (3)
Replacements needed: 5 - 3 = 2 > k ✗ (shrink!)
\`\`\``,
    theoryContent: `## Sliding Window with Constraint

\`\`\`go
count := make(map[byte]int)
left := 0
maxFreq := 0  // Most frequent char in window
result := 0

for right := 0; right < len(s); right++ {
    count[s[right]]++
    maxFreq = max(maxFreq, count[s[right]])
    
    // If window invalid, shrink
    for (right - left + 1) - maxFreq > k {
        count[s[left]]--
        left++
    }
    
    result = max(result, right-left+1)
}
return result
\`\`\`

**Optimization:** We don't need to decrease maxFreq when shrinking. Why? We're looking for maximum length, and a smaller maxFreq only makes the window worse.`,
    hasExercise: true,
    exerciseId: "max-same-char",
    order: 3,
  },
  {
    moduleSlug: "moving-frame",
    slug: "hidden-pattern",
    title: "Hidden Pattern",
    storyContent: `## Fixed-Size Window

"Check if s2 contains any permutation of s1."

\`\`\`
s1 = "ab", s2 = "eidbaooo"
           ↑ ↑
          "ba" is a permutation of "ab" → true
\`\`\`

---

## The Approach

The window size is always len(s1). We slide a fixed-size window across s2 and check if character counts match.

\`\`\`
s1 = "ab"  → target: {a:1, b:1}
s2 = "eidbaooo"

Window "ei" → {e:1, i:1} ✗
Window "id" → {i:1, d:1} ✗
Window "db" → {d:1, b:1} ✗
Window "ba" → {b:1, a:1} ✓ → FOUND!
\`\`\`

**Optimization:** Don't rebuild count each time. Add the new char, remove the old char.`,
    theoryContent: `## Fixed Sliding Window + Char Count

\`\`\`go
if len(s1) > len(s2) {
    return false
}

s1Count, s2Count := [26]int{}, [26]int{}
for i := 0; i < len(s1); i++ {
    s1Count[s1[i]-'a']++
    s2Count[s2[i]-'a']++
}

if s1Count == s2Count {
    return true
}

for i := len(s1); i < len(s2); i++ {
    s2Count[s2[i]-'a']++          // Add new char
    s2Count[s2[i-len(s1)]-'a']--  // Remove old char
    
    if s1Count == s2Count {
        return true
    }
}
return false
\`\`\`

**Time:** O(n) where n = len(s2)`,
    hasExercise: true,
    exerciseId: "hidden-pattern",
    order: 4,
  },
  {
    moduleSlug: "moving-frame",
    slug: "smallest-cover",
    title: "Smallest Cover",
    storyContent: `## The Hard One

"Find the minimum window in S that contains all characters of T."

This is considered one of the hardest sliding window problems. Facebook, Amazon, Google—they all love this one.

\`\`\`
s = "ADOBECODEBANC", t = "ABC"
      ↑         ↑
     "ADOBEC" contains A, B, C (length 6)
                 ↑    ↑
               "BANC" contains A, B, C (length 4) ★
\`\`\`

---

## The Two-Phase Pattern

1. **Expand** right until we have all required characters
2. **Shrink** left while we still have all required characters
3. Update minimum, then expand again

You need to track:
- How many of each character is required (from T)
- How many of each character is in current window
- How many required characters have been "satisfied"`,
    theoryContent: `## Minimum Window: Expand & Contract

\`\`\`go
need := make(map[byte]int)
for i := 0; i < len(t); i++ {
    need[t[i]]++
}

have := make(map[byte]int)
required := len(need)
formed := 0

left := 0
minLen := math.MaxInt32
minStart := 0

for right := 0; right < len(s); right++ {
    c := s[right]
    have[c]++
    
    if have[c] == need[c] {
        formed++
    }
    
    // Contract window
    for formed == required {
        if right-left+1 < minLen {
            minLen = right - left + 1
            minStart = left
        }
        
        have[s[left]]--
        if have[s[left]] < need[s[left]] {
            formed--
        }
        left++
    }
}

if minLen == math.MaxInt32 {
    return ""
}
return s[minStart : minStart+minLen]
\`\`\``,
    hasExercise: true,
    exerciseId: "smallest-cover",
    order: 5,
  },
];

const SEED_EXERCISES = [
  // Arrays & Hashing
  {
    id: "spot-repeat",
    title: "Spot the Repeat",
    description: "Return true if any value appears at least twice",
    difficulty: "easy",
    xpReward: 100,
    starterCode: { go: "func containsDuplicate(nums []int) bool {\n\treturn false\n}", python: "def containsDuplicate(nums: list[int]) -> bool:\n    return False" },
    publicTests: [{ input: [1, 2, 3, 1], expected: true }, { input: [1, 2, 3, 4], expected: false }], hiddenTests: []
  },
  {
    id: "letter-shuffle",
    title: "Letter Shuffle",
    description: "Check if two strings are anagrams",
    difficulty: "easy",
    xpReward: 100,
    starterCode: { go: "func isAnagram(s string, t string) bool {\n\treturn false\n}", python: "def isAnagram(s: str, t: str) -> bool:\n    return False" },
    publicTests: [{ input: { s: "anagram", t: "nagaram" }, expected: true }]
  },
  {
    id: "pair-hunt",
    title: "Pair Hunt",
    description: "Find indices of two numbers that sum to target",
    difficulty: "easy",
    xpReward: 100,
    starterCode: { go: "func twoSum(nums []int, target int) []int {\n\treturn nil\n}", python: "def twoSum(nums: list[int], target: int) -> list[int]:\n    return []" },
    publicTests: [{ input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] }]
  },
  {
    id: "sort-letters",
    title: "Sort the Letters",
    description: "Group strings that are anagrams of each other",
    difficulty: "medium",
    xpReward: 150,
    starterCode: { go: "func groupAnagrams(strs []string) [][]string {\n\treturn nil\n}", python: "def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    return []" },
    publicTests: [{ input: ["eat", "tea", "tan", "ate", "nat", "bat"], expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] }]
  },
  {
    id: "most-common",
    title: "Most Common Items",
    description: "Return the K most frequent elements",
    difficulty: "medium",
    xpReward: 150,
    starterCode: { go: "func topKFrequent(nums []int, k int) []int {\n\treturn nil\n}", python: "def topKFrequent(nums: list[int], k: int) -> list[int]:\n    return []" },
    publicTests: [{ input: { nums: [1, 1, 1, 2, 2, 3], k: 2 }, expected: [1, 2] }]
  },
  {
    id: "multiply-rest",
    title: "Multiply the Rest",
    description: "Product of all elements except self, no division",
    difficulty: "medium",
    xpReward: 150,
    starterCode: { go: "func productExceptSelf(nums []int) []int {\n\treturn nil\n}", python: "def productExceptSelf(nums: list[int]) -> list[int]:\n    return []" },
    publicTests: [{ input: [1, 2, 3, 4], expected: [24, 12, 8, 6] }]
  },
  {
    id: "streak-finder",
    title: "Streak Finder",
    description: "Find the longest consecutive elements sequence",
    difficulty: "medium",
    xpReward: 150,
    starterCode: { go: "func longestConsecutive(nums []int) int {\n\treturn 0\n}", python: "def longestConsecutive(nums: list[int]) -> int:\n    return 0" },
    publicTests: [{ input: [100, 4, 200, 1, 3, 2], expected: 4 }]
  },

  // Two Pointers
  {
    id: "mirror-check",
    title: "Mirror Check",
    description: "Check if string is palindrome (ignoring non-alphanumeric)",
    difficulty: "easy",
    xpReward: 100,
    starterCode: { go: "func isPalindrome(s string) bool {\n\treturn false\n}", python: "def isPalindrome(s: str) -> bool:\n    return False" },
    publicTests: [{ input: "A man, a plan, a canal: Panama", expected: true }]
  },
  {
    id: "pair-hunt-ii",
    title: "Pair Hunt II",
    description: "Pair Hunt but array is sorted",
    difficulty: "medium",
    xpReward: 150,
    starterCode: { go: "func twoSumII(numbers []int, target int) []int {\n\treturn nil\n}", python: "def twoSumII(numbers: list[int], target: int) -> list[int]:\n    return []" },
    publicTests: [{ input: { numbers: [2, 7, 11, 15], target: 9 }, expected: [1, 2] }]
  },
  {
    id: "triple-match",
    title: "Triple Match",
    description: "Find all unique triplets that sum to zero",
    difficulty: "medium",
    xpReward: 200,
    starterCode: { go: "func threeSum(nums []int) [][]int {\n\treturn nil\n}", python: "def threeSum(nums: list[int]) -> list[list[int]]:\n    return []" },
    publicTests: [{ input: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]] }]
  },
  {
    id: "max-basin",
    title: "Max Basin",
    description: "Find two lines that form max container",
    difficulty: "medium",
    xpReward: 150,
    starterCode: { go: "func maxArea(height []int) int {\n\treturn 0\n}", python: "def maxArea(height: list[int]) -> int:\n    return 0" },
    publicTests: [{ input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 }]
  },
  {
    id: "flood-volume",
    title: "Flood Volume",
    description: "Calculate total water trapped after raining",
    difficulty: "hard",
    xpReward: 250,
    starterCode: { go: "func trap(height []int) int {\n\treturn 0\n}", python: "def trap(height: list[int]) -> int:\n    return 0" },
    publicTests: [{ input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 }]
  },

  // Sliding Window  
  {
    id: "peak-profit",
    title: "Peak Profit",
    description: "Max profit from one buy and one sell",
    difficulty: "easy",
    xpReward: 100,
    starterCode: { go: "func maxProfit(prices []int) int {\n\treturn 0\n}", python: "def maxProfit(prices: list[int]) -> int:\n    return 0" },
    publicTests: [{ input: [7, 1, 5, 3, 6, 4], expected: 5 }]
  },
  {
    id: "unique-streak",
    title: "Unique Streak",
    description: "Longest substring without repeating chars",
    difficulty: "medium",
    xpReward: 150,
    starterCode: { go: "func lengthOfLongestSubstring(s string) int {\n\treturn 0\n}", python: "def lengthOfLongestSubstring(s: str) -> int:\n    return 0" },
    publicTests: [{ input: "abcabcbb", expected: 3 }]
  },
  {
    id: "max-same-char",
    title: "Max Same Char",
    description: "Longest same-char string with K replacements",
    difficulty: "medium",
    xpReward: 150,
    starterCode: { go: "func characterReplacement(s string, k int) int {\n\treturn 0\n}", python: "def characterReplacement(s: str, k: int) -> int:\n    return 0" },
    publicTests: [{ input: { s: "ABAB", k: 2 }, expected: 4 }]
  },
  {
    id: "hidden-pattern",
    title: "Hidden Pattern",
    description: "Check if s2 contains permutation of s1",
    difficulty: "medium",
    xpReward: 150,
    starterCode: { go: "func checkInclusion(s1 string, s2 string) bool {\n\treturn false\n}", python: "def checkInclusion(s1: str, s2: str) -> bool:\n    return False" },
    publicTests: [{ input: { s1: "ab", s2: "eidbaooo" }, expected: true }]
  },
  {
    id: "smallest-cover",
    title: "Smallest Cover",
    description: "Minimum window containing all chars of T",
    difficulty: "hard",
    xpReward: 250,
    starterCode: { go: "func minWindow(s string, t string) string {\n\treturn \"\"\n}", python: "def minWindow(s: str, t: str) -> str:\n    return ''" },
    publicTests: [{ input: { s: "ADOBECODEBANC", t: "ABC" }, expected: "BANC" }]
  },
];

async function seed() {
  const { db } = await import("./index");
  const { modules, lessons, exercises } = await import("./schema");

  console.log("🌱 Seeding database...\n");

  // Seed Modules
  console.log("📦 Seeding modules...");
  const moduleIdMap: Record<string, number> = {};

  for (const mod of SEED_MODULES) {
    const existing = await db.select().from(modules).where(eq(modules.slug, mod.slug));

    if (existing.length === 0) {
      console.log(`  ✓ Inserting: ${mod.title}`);
      const result = await db.insert(modules).values(mod).returning({ id: modules.id });
      moduleIdMap[mod.slug] = result[0].id;
    } else {
      // UPDATE existing module
      console.log(`  ↻ Updating: ${mod.title}`);
      await db.update(modules).set(mod).where(eq(modules.slug, mod.slug));
      moduleIdMap[mod.slug] = existing[0].id;
    }
  }

  // Seed Exercises
  console.log("\n🏋️ Seeding exercises...");
  for (const ex of SEED_EXERCISES) {
    const existing = await db.select().from(exercises).where(eq(exercises.id, ex.id));

    if (existing.length === 0) {
      console.log(`  ✓ Inserting: ${ex.title}`);
      await db.insert(exercises).values(ex);
    } else {
      console.log(`  ↻ Updating: ${ex.title}`);
      await db.update(exercises).set(ex).where(eq(exercises.id, ex.id));
    }
  }

  // Seed Lessons
  console.log("\n📚 Seeding lessons...");
  for (const lesson of SEED_LESSONS) {
    const moduleId = moduleIdMap[lesson.moduleSlug];
    if (!moduleId) {
      console.log(`  ✗ Module not found for: ${lesson.title}`);
      continue;
    }

    const existing = await db.select().from(lessons).where(eq(lessons.slug, lesson.slug));

    if (existing.length === 0) {
      console.log(`  ✓ Inserting: ${lesson.title}`);
      await db.insert(lessons).values({
        moduleId,
        slug: lesson.slug,
        title: lesson.title,
        storyContent: lesson.storyContent,
        theoryContent: lesson.theoryContent,
        hasExercise: lesson.hasExercise,
        exerciseId: lesson.exerciseId,
        order: lesson.order,
      });
    } else {
      console.log(`  ↻ Updating: ${lesson.title}`);
      await db.update(lessons).set({
        moduleId,
        title: lesson.title,
        storyContent: lesson.storyContent,
        theoryContent: lesson.theoryContent,
        hasExercise: lesson.hasExercise,
        exerciseId: lesson.exerciseId,
        order: lesson.order,
      }).where(eq(lessons.slug, lesson.slug));
    }
  }

  console.log("\n✅ Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
