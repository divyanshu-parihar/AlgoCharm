// Rich story content for all lessons
// Voice: Senior Silicon Valley dev with 10+ years experience
// Style: Build intuition, don't give answers. Hints with human touch.
// Approach: Teach like a college professor - guide discovery, don't hand solutions

export const RICH_STORIES: Record<string, { storyContent: string; theoryContent: string }> = {
        // ============================================
        // DATA VAULT - Arrays & Hashing
        // ============================================

        "pattern-hash-set": {
                storyContent: `## Before We Begin...

*Year 2, at a startup that shall remain nameless...*

I watched a junior dev spend 3 hours debugging a "performance issue." Their crime? Checking if something exists in a list... the slow way.

Their laptop fan sounded like a helicopter preparing for takeoff.

One small change later? Problem solved in milliseconds.

What did they change? That's what you're about to discover.

---

### The Million Dollar Question

You have a list of 1 million numbers. Someone asks: *"Is 42 in this list?"*

Your instinct might be: loop through everything, check each one.

**But here's the thing** - every time someone asks about a different number, you'd loop through the whole list again. And again. And again.

There HAS to be a better way, right?

---

### Think About It: The Hotel Analogy 🏨

Imagine you run a massive hotel with 10,000 rooms. A guest walks in and asks: *"Is my friend Alice staying here?"*

Would you:
A) Walk to every room and knock, asking "Are you Alice?"
B) Check your guest registry, find Alice's room number, go directly there

Obviously B. But WHY is B faster?

*Pause and think: What makes the registry work? What information does it store that makes lookup instant?*

---

### The Pattern You Need

There's a data structure that works exactly like that hotel registry. It takes any piece of data and gives you an instant way to:
- Check if you've seen it before
- Find it immediately if it exists

**Your mission**: Figure out what this structure is called, and how it achieves O(1) lookup.

---

### Hints to Get You Started

**Hint 1**: In Go, it's created with make(map[...]...)
**Hint 2**: In Python, think set() or {}
**Hint 3**: The name of this technique involves "hashing"

---

### Questions to Ask Yourself

1. What does "hashing" actually mean?
2. How does a hash function turn data into a location?
3. What's the trade-off? (There's always a trade-off in CS!)

When you understand WHY this works, you'll recognize when to use it in dozens of problems.

Ready to discover this for yourself? Open your terminal and start experimenting! 🚀`,
                theoryContent: `## Hash Set/Map Essentials

### What You Should Understand
- What "hashing" means conceptually
- The time/space trade-off
- When to reach for this tool

### Common Operations
| Operation | Time |
|-----------|------|
| Add | O(?) - figure it out! |
| Lookup | O(?) - this is the magic |
| Delete | O(?) |

### The Key Insight
*You're trading ______ for ______.*

Fill in the blanks and you've understood the core concept.`
        },

        "spot-repeat": {
                storyContent: `## The Interview That Humbled Me

*My first FAANG interview, circa 2015...*

Interviewer: "Given an array, return true if any value appears twice."

I immediately started writing nested loops. Check element 1 against all others. Check element 2 against all others. You get the idea.

Interviewer: "What's the time complexity?"

Me: "O(n²)."

Interviewer: "What if the array has a million elements?"

*Silence. Cold sweat. The career-defining moment.*

---

### The Challenge

You have an array: [1, 5, 3, 1, 2]

Is there a duplicate? YES - the number 1 appears twice.

The brute force way is to compare every element with every other element. But that's O(n²). On a million items, that's a TRILLION comparisons.

**Your challenge**: Find a way to do this in O(n) time. Single pass. Linear.

---

### Think About It 🤔

As you walk through the array, element by element...

At position 0, you see 1. 
At position 1, you see 5.
At position 2, you see 3.
At position 3, you see 1 again.

**Key question**: When you reach that second 1, how can you INSTANTLY know you've seen it before?

*What did we just learn about in the previous lesson that gives you O(1) lookups?*

---

### The "Aha!" Moment

Imagine you have a perfect memory. As you see each number, you remember it.

When you see a new number, you check your memory: "Have I seen this before?"
- No? Add it to memory.
- Yes? DUPLICATE FOUND!

**Now translate "perfect memory" into code.** What data structure acts like perfect memory for checking if something exists?

---

### Hints

**Hint 1**: What's the ONE thing you need to track as you walk through the array?

**Hint 2**: You don't need to store indices. Just the VALUES you've seen.

**Hint 3**: As soon as you find a repeat, you can stop. No need to check the rest.

---

### Before You Code

Trace through this by hand:

Array: [1, 5, 3, 1, 2]

Step 1: See 1. Memory: { ??? }. Duplicate? 
Step 2: See 5. Memory: { ??? }. Duplicate?
Step 3: See 3. Memory: { ??? }. Duplicate?
Step 4: See 1. Memory: { ??? }. Duplicate?

Fill in the ???s and you'll have your algorithm.

---

### The Real Lesson

This problem isn't about duplicates. It's about recognizing when you need **O(1) lookup** during a traversal.

Once you see that pattern, you'll solve dozens of problems the same way.

Now go implement it! 🎯`,
                theoryContent: `## Problem Breakdown

**Input**: Array of integers
**Output**: Boolean - true if any duplicate exists

### Before You Code, Answer These:

1. What data structure gives O(1) "have I seen this?" checks?
2. How many passes through the array do you need?
3. What's the space complexity of your approach?`
        },

        "letter-shuffle": {
                storyContent: `## Valid Anagram

*Two strings walk into a bar...* Actually, let me try that again.

You have two strings: "listen" and "silent"

Are they anagrams? (Same letters, different order)

---

### The Brute Force Trap

Your first instinct: sort both strings, compare.

"listen" sorted → "eilnst"
"silent" sorted → "eilnst"

Same! They're anagrams.

**But wait** - what's the time complexity of sorting? O(n log n).

Can we do better?

---

### The Key Insight

Anagrams have the EXACT same characters, just rearranged.

So... what if you:
1. Count every character in string 1
2. Count every character in string 2
3. Compare the counts

If the counts match perfectly, it's an anagram!

---

### Your Data Structure Choice

What data structure lets you:
- Store character counts
- Look up a character's count in O(1)
- Compare two sets of counts efficiently

**Think about it before reading on...**

---

### The Algorithm

1. If lengths differ, return false immediately
2. Count characters in string 1
3. Count characters in string 2
4. Compare the counts

Or even smarter: use ONE counter. Add for string 1, subtract for string 2. If all zeros at the end, it's an anagram!

Now implement it! 🔤`,
                theoryContent: `## Anagram Checking

### Key Insight
Anagrams = same character frequencies

### Approaches
| Method | Time | Space |
|--------|------|-------|
| Sort both | O(n log n) | O(1) or O(n) |
| Frequency count | O(n) | O(26) = O(1) |

### Edge Cases
- Different lengths
- Empty strings
- Case sensitivity`
        },

        "pair-hunt": {
                storyContent: `## Two Sum - The Gateway Problem

*This is THE problem. Everyone starts here.*

Given an array and a target sum, find two numbers that add up to the target.

Example: nums = [2, 7, 11, 15], target = 9
Answer: indices [0, 1] because 2 + 7 = 9

---

### The Brute Force (Don't Do This)

Check every pair:
- 2 + 7 = 9 ✓

But that's O(n²). We can do better.

---

### The Key Insight 💡

For each number X, you're looking for (target - X).

If target is 9 and current number is 2, you need 7.

**Question**: How can you check if 7 exists in the array... instantly?

*What have we been learning about?*

---

### The Algorithm

As you walk through the array:
1. For each number X, calculate the complement (target - X)
2. Check if complement exists in your "seen" collection
3. If yes, you found the pair!
4. If no, add X to your "seen" collection

**What data structure should "seen" be?**

Now implement it! 🎯`,
                theoryContent: `## Two Sum Pattern

### Core Insight
Looking for X + Y = target is the same as looking for Y = target - X

### Why HashMap?
- Need O(1) lookup for complement
- Need to store values we've seen

### Complexity
- Time: O(n) - single pass
- Space: O(n) - storing seen values`
        },

        "sort-letters": {
                storyContent: `## Group Anagrams

*Now we're combining patterns...*

Given: ["eat", "tea", "tan", "ate", "nat", "bat"]
Group the anagrams together.

Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

---

### Think About It

How do you know "eat" and "tea" belong together?

They're anagrams! Same letters, different order.

**Key question**: What's a unique "signature" that all anagrams share?

---

### The Grouping Pattern

1. Find a way to create a "key" for each word
2. All anagrams will have the SAME key
3. Group words by their key

**What should the key be?**

Option A: Sort the letters (eat → aet)
Option B: Character count (a1e1t1)

Both work! Which is more efficient?

---

### The Data Structure

You need to:
- Map each key to a list of words
- Look up keys in O(1)

**What does that sound like?**

Now implement it! 📚`,
                theoryContent: `## Group Anagrams Pattern

### Key Generation Options
1. Sorted string: "eat" → "aet"
2. Character count: "eat" → "a1e1t1"

### Data Structure
HashMap<String, List<String>>
- Key: the anagram signature
- Value: list of words with that signature

### Complexity
- Time: O(n * k log k) where k is max word length
- Space: O(n * k)`
        },

        "most-common": {
                storyContent: `## Top K Frequent Elements

*Frequency counting meets sorting...*

Given: nums = [1,1,1,2,2,3], k = 2
Find the k most frequent elements.

Answer: [1, 2] (1 appears 3 times, 2 appears 2 times)

---

### Step 1: Count Frequencies

You know how to do this by now. What data structure?

nums = [1,1,1,2,2,3]
counts = {1: 3, 2: 2, 3: 1}

---

### Step 2: Find Top K

Now you have frequency counts. How do you find the top k?

**Option A**: Sort by frequency - O(n log n)
**Option B**: Use a heap - O(n log k)
**Option C**: Bucket sort - O(n)

Think about when each option is best...

---

### The Bucket Sort Trick

Create buckets by frequency (index = count):

index 0: []
index 1: [3]
index 2: [2]
index 3: [1]

Now walk backwards from highest index, collect k elements!

Now implement it! 📊`,
                theoryContent: `## Top K Pattern

### Step 1: Frequency Count
Use HashMap to count occurrences

### Step 2: Select Top K
Options by efficiency:
| Method | Time | When to Use |
|--------|------|-------------|
| Sort | O(n log n) | Simple, k is large |
| Heap | O(n log k) | k is small |
| Bucket | O(n) | Optimal when possible |`
        },

        "encode-decode": {
                storyContent: `## Encode and Decode Strings

*Design a way to serialize and deserialize a list of strings.*

Input: ["hello", "world"]
Encode → some string representation
Decode → ["hello", "world"]

---

### The Tricky Part

What if a string contains your delimiter?

If you use "," as delimiter:
["hello,world", "foo"] → "hello,world,foo"

When decoding, how do you know where each string ends?

---

### Solutions

**Option 1**: Escape the delimiter
**Option 2**: Length-prefix each string

"5#hello5#world"
- 5 = length, # = separator, then the string

No ambiguity!

Now implement it! 🔧`,
                theoryContent: `## String Serialization

### Length-Prefix Approach
Format: "length#string"
Example: "5#hello5#world"

### Why It Works
- Length tells you exactly how many chars to read
- No delimiter collision possible

### Edge Cases
- Empty strings: "0#"
- Strings with numbers: still works!`
        },

        "multiply-rest": {
                storyContent: `## Product of Array Except Self

*A classic that tests your creativity...*

Given: [1, 2, 3, 4]
Output: [24, 12, 8, 6]

Each position contains the product of all OTHER elements.
output[0] = 2*3*4 = 24
output[1] = 1*3*4 = 12
...

**Constraint**: No division allowed!

---

### The Naive Approach (Forbidden)

Calculate total product, divide by each element.

But: 1) Division not allowed 2) Zero breaks this

---

### The Insight 💡

For each position i:
result[i] = (product of everything LEFT of i) × (product of everything RIGHT of i)

Can you compute these efficiently?

---

### Prefix and Suffix Products

Left pass: build prefix products
Right pass: build suffix products

Combine them!

Can you do it in O(1) extra space? (output array doesn't count)

Now implement it! ✨`,
                theoryContent: `## Product Except Self

### Key Insight
result[i] = prefix_product[i] × suffix_product[i]

### Optimal Approach
1. Left pass: build prefix products in result
2. Right pass: multiply by suffix products

### Complexity
- Time: O(n)
- Space: O(1) extra (result array doesn't count)`
        },

        "grid-valid": {
                storyContent: `## Valid Sudoku

*Not solving sudoku - just checking if it's valid so far.*

A 9x9 grid is valid if:
1. Each row has no duplicate digits 1-9
2. Each column has no duplicate digits 1-9
3. Each of the nine 3x3 boxes has no duplicate digits 1-9

---

### The Approach

Three types of checks:
1. For each row: any duplicates?
2. For each column: any duplicates?
3. For each 3x3 box: any duplicates?

**Key question**: What data structure helps you detect duplicates?

---

### The Box Trick

How do you determine which 3x3 box a cell belongs to?

Cell at (row, col) belongs to box (row/3, col/3)

(0,0) → box (0,0)
(2,2) → box (0,0)
(3,0) → box (1,0)
(8,8) → box (2,2)

Now implement it! 🔢`,
                theoryContent: `## Sudoku Validation

### Three Checks
1. Rows: 9 sets
2. Columns: 9 sets
3. Boxes: 9 sets

### Box Index Formula
box_index = (row/3, col/3)

### Implementation
Use HashSet for each row, column, and box`
        },

        "streak-finder": {
                storyContent: `## Longest Consecutive Sequence

*The problem that separates hash table masters from beginners.*

Given: [100, 4, 200, 1, 3, 2]
Find the longest consecutive sequence.

Answer: 4 (the sequence 1, 2, 3, 4)

**Constraint**: Must run in O(n) time!

---

### Why O(n) Is Hard

You can't sort - that's O(n log n).

So how do you find sequences without sorting?

---

### The Key Insight 💡

First, put all numbers in a set.

Now, for each number n:
- Is n-1 in the set? If YES, n is not the START of a sequence
- Is n-1 NOT in the set? Then n IS the start of a sequence!

Only START counting from sequence beginnings!

---

### The Trace

Set: {100, 4, 200, 1, 3, 2}

Check 100: Is 99 in set? No → 100 IS a start
  Count: 100 → only 100 (101 not in set) → length 1

Check 4: Is 3 in set? Yes → 4 is NOT a start, skip

Check 200: Is 199 in set? No → 200 IS a start
  Count: 200 → only 200 → length 1

Check 1: Is 0 in set? No → 1 IS a start
  Count: 1, 2, 3, 4 → length 4 ⭐

Check 3: Is 2 in set? Yes → 3 is NOT a start, skip

Check 2: Is 1 in set? Yes → 2 is NOT a start, skip

Longest: 4

---

### Why Is This O(n)?

Each number is visited at most twice:
1. Once when checking if it's a start
2. Once when being counted as part of a sequence

The while loop doesn't make it O(n²) because each element can only be counted once across ALL while loop iterations.

---

### The Takeaway

"Only process from the start" is a powerful optimization pattern.

You'll see it in:
- Finding connected components
- String matching
- Many sequence problems

Now go implement it! 🏁`,
                theoryContent: `## The "Start of Sequence" Pattern

### Key Insight
Only start counting from sequence beginnings:
n is a start if (n-1) is NOT in the set

### Why It's O(n)
- Build set: O(n)
- Check each element for "is start": O(n) total
- Extend from starts: Each element counted at most once

### Questions
1. What data structure do you need?
2. How do you check if you're at a sequence start?
3. How do you extend forward from a start?`
        },

        // ============================================
        // DUAL SCANNERS (Two Pointers)
        // ============================================

        "mirror-check": {
                storyContent: `## The Palindrome Check

*First week at a new job. The tech lead asks: "Can you check if a string reads the same forwards and backwards?"*

I almost laughed. This was baby's first coding problem.

Then he added: "Ignore spaces, punctuation, and case. And do it in O(1) space."

Oh.

---

### The Classic Example

"A man, a plan, a canal: Panama"

Clean it up → "amanaplanacanalpanama"

Read it backwards → "amanaplanacanalpanama"

Same? It's a palindrome!

---

### The Brute Force Trap

Your first instinct: reverse the string, compare.

But that's O(n) extra space for the reversed copy.

The interviewer wants O(1) space. Now what?

---

### The Key Insight 💡

You don't need to reverse anything.

Think about what makes a palindrome:
- First character = Last character
- Second character = Second-to-last character
- And so on...

**What if you compared from BOTH ends simultaneously?**

---

### The Two Pointer Setup

Put one pointer at the start (L), one at the end (R).

Compare characters at L and R. If they match, move both pointers inward. If they don't match, it's NOT a palindrome. Continue until the pointers meet in the middle.

---

### The Messy Part

Real input has spaces, punctuation, mixed case:

"A man, a plan, a canal: Panama"

You need to:
1. Skip non-alphanumeric characters
2. Compare case-insensitively

**How do you handle skipping without preprocessing the string?**

---

### Hints

**Hint 1**: Move the left pointer forward while it's pointing to non-alphanumeric.

**Hint 2**: Move the right pointer backward while it's pointing to non-alphanumeric.

**Hint 3**: When both point to valid characters, compare (lowercase them first).

---

### The Pattern

Two pointers converging from opposite ends. You'll use this for:
- Palindrome checking
- Reversing arrays in-place
- Two Sum in sorted arrays
- Container with most water

Master this and you've got a whole category of problems.

Now implement it! 🔄`,
                theoryContent: `## Two Pointers: Converging Pattern

### The Setup
- Left pointer at index 0
- Right pointer at index n-1
- Move toward each other

### Key Questions
1. How do you handle non-alphanumeric characters?
2. When do you stop the loop?
3. What's the condition for failure?

### Complexity
- Time: O(n) - each character visited at most twice
- Space: O(1) - no extra storage`
        },

        "sorted-pair": {
                storyContent: `## Two Sum, But Sorted

*"Wait, hadn't you already asked me Two Sum?"* I said to the interviewer.

*"This time the array is sorted. Can you do better on space?"*

Interesting. With the unsorted version, we needed a hash map. O(n) time, O(n) space.

But sorting gives us something powerful: **predictability**.

---

### The Setup

Given: numbers = [2, 7, 11, 15], target = 9

Find two numbers that sum to 9. Return their indices.

We already know 2 + 7 = 9. But how do we find this efficiently?

---

### Why Hash Map Is Overkill

The hash map approach still works:
- Time: O(n)
- Space: O(n)

But we're wasting the fact that the array is sorted! Surely we can do O(1) space?

---

### The Two Pointer Insight 💡

Start with the extreme pair: smallest + largest.

L points to 2, R points to 15. Sum = 2 + 15 = 17 > 9

Sum too big! We need smaller. Should we:
- Move L right (increase sum)?
- Move R left (decrease sum)?

Obviously move R left to decrease the sum.

---

### The Logic

**Sum too big** → Move right pointer left
**Sum too small** → Move left pointer right
**Sum equals target** → Found it!

Since the array is sorted:
- Moving R left decreases the sum
- Moving L right increases the sum

**We're guaranteed to find the pair if it exists!**

---

### The Pattern

Two pointers on sorted data. This pattern solves:
- Two Sum II
- 3Sum (outer loop + this technique)
- Container with Most Water
- Trapping Rain Water

When data is sorted, think two pointers.

Now implement it! 🎯`,
                theoryContent: `## Sorted Array = Two Pointers

### Key Insight
Sum too big → make it smaller (move right pointer left)
Sum too small → make it bigger (move left pointer right)

### Comparison
| Approach | Time | Space |
|----------|------|-------|
| Hash Map | O(n) | O(n) |
| Two Pointers | O(n) | O(1) |

### When to Use
- Array is sorted (or can be sorted)
- Looking for pairs with some sum/difference property
- Want O(1) extra space`
        },

        "triple-match": {
                storyContent: `## The Interview That Everyone Fails

*3Sum is the problem. You've probably heard of it. It's a rite of passage.*

"Find all unique triplets in the array that sum to zero."

Sounds simple. It's not. This problem has more edge cases than a polygon.

---

### The Example

nums = [-1, 0, 1, 2, -1, -4]

Find triplets that sum to 0. The answer:
- [-1, -1, 2]
- [-1, 0, 1]

Note: no duplicates! Even though -1 appears twice in input.

---

### The Brute Force Disaster

Check every triplet with three nested loops.

O(n³). On arrays of 3000 elements, that's 27 BILLION operations. Time limit exceeded.

---

### The Key Insight 💡

3Sum = 1 fixed element + 2Sum on the rest.

If we fix nums[i], we need to find two numbers that sum to -nums[i].

We just learned Two Sum on sorted arrays with two pointers!

---

### The Algorithm

1. Sort the array
2. For each element nums[i]:
   - Find pairs in nums[i+1...n-1] that sum to -nums[i]
   - Use two pointers for this (it's sorted!)

---

### The Duplicate Nightmare

Here's where 90% of candidates fail.

The array has [-1, -1]. If we process both, we get the same triplets twice!

**Solution**: Skip duplicates at every level.

After processing index i, skip over any identical values.
After finding a valid triplet, skip duplicate left and right values.

---

### Common Mistakes

1. **Forgetting to sort** - Two pointers requires sorted array
2. **Not skipping duplicates** - Results in duplicate triplets
3. **Off-by-one in skip logic** - Check nums[i] vs nums[i-1], not nums[i+1]
4. **Wrong loop bounds** - i goes to n-3, not n

---

### The Pattern

Sort + fix one + two pointers on rest.

This extends to 4Sum (fix two, two pointers on rest) and even kSum (recursive).

Master this and you've conquered a whole family of problems.

Now implement it carefully! 🔺`,
                theoryContent: `## 3Sum = Sort + Fix One + 2Sum

### Algorithm
1. Sort: O(n log n)
2. Outer loop: fix element i
3. Inner: two pointers for complement

### Duplicate Handling
- Skip duplicate i values after processing
- Skip duplicate pairs after finding a valid triplet

### Complexity
- Time: O(n²) - two pointers for each of n elements
- Space: O(1) or O(n) depending on sorting implementation`
        },

        "max-basin": {
                storyContent: `## Container With Most Water

*One of those problems that looks like geometry but is really about greed.*

You have n vertical lines. Line i has height[i]. Find two lines that, together with the x-axis, form a container that holds the most water.

---

### Visualizing It

Imagine bars of different heights rising from a line. You're picking two bars to hold water between them. The water level is limited by the SHORTER bar. The width is the distance between the bars.

Which two bars hold the most water?

---

### The Brute Force Way

Check every pair of lines. O(n²). Works, but too slow.

---

### The Constraint That Matters

Water level is determined by the SHORTER wall.

No matter how tall one wall is, if the other is short, you can only fill to the short one's height.

Area = min(height[L], height[R]) × (R - L)

---

### The Greedy Insight 💡

Start with the WIDEST container: leftmost and rightmost lines.

Now, which pointer should we move?

If we move the TALLER wall inward, the width decreases and the height can only stay same or decrease. Area gets worse!

If we move the SHORTER wall inward, height might increase enough to offset the width loss.

**Always move the shorter wall.**

---

### Why This Works

When L points to a short wall and R points to a tall wall:
- Any container with L stays at height ≤ height[L]
- Moving L is the only way to potentially improve

We're not missing any optimal pair because:
- If optimal used current L, moving R wouldn't help (height capped by L)
- If optimal uses some other left wall, we'll find it when we move L

---

### The Pattern

Greedy two pointers. Move the "limiting factor" to try to remove the limitation.

This thinking applies to:
- Trapping Rain Water
- Partition problems
- Optimization with two variables

Now implement it! 🌊`,
                theoryContent: `## Greedy Two Pointers

### Key Insight
Water = min(left, right) × width

Moving the taller wall can never improve the result.
Moving the shorter wall might find a taller wall.

### Algorithm
1. L = 0, R = n-1
2. Calculate area, update max
3. Move pointer pointing to shorter line
4. Repeat until L meets R

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "flood-volume": {
                storyContent: `## Trapping Rain Water

*This is THE hard two-pointer problem. If you can solve this, you understand the pattern deeply.*

Given elevation heights, calculate how much rainwater can be trapped.

---

### Visualizing It

Imagine a histogram of bars. Rain falls and fills in the gaps between taller bars. How much total water is trapped?

---

### The Key Observation

At any position, water level is determined by:
- The tallest bar to the LEFT
- The tallest bar to the RIGHT
- Take the MIN of these (water overflows over the shorter side)

Water at position i = min(max_left, max_right) - height[i]

If this is negative (bar is taller than water level), no water there.

---

### The Naive O(n) Space Approach

Precompute:
- left_max[i] = max height from 0 to i
- right_max[i] = max height from i to n-1

Then: water[i] = min(left_max[i], right_max[i]) - height[i]

This works! But uses O(n) extra space.

---

### The Brilliant O(1) Space Solution

Two pointers from both ends, tracking running maxes.

**The insight**: We don't need BOTH maxes to be fully computed. We only need to know which side is the limiting factor.

If left_max < right_max:
- Water at left is bounded by left_max (regardless of how tall right gets)
- Process left, move left pointer

If right_max <= left_max:
- Water at right is bounded by right_max
- Process right, move right pointer

---

### Why This Works

When left_max < right_max:
- We KNOW the right side has a wall at least right_max tall
- So water at L is definitely limited by left_max
- We can calculate water[L] with confidence!

---

### The Algorithm

1. Two pointers at ends, two running max variables
2. While L <= R:
   - If height[L] <= height[R], process L and move right
   - Else process R and move left
3. When processing: update max or add water

---

### Common Confusion

*"But we don't know the MAX on each side yet!"*

True. But we know ENOUGH. When left_max < right_max, we know there's something at least right_max tall on the right. That's sufficient to bound the water at the left position.

---

### The Pattern

Process from the "known" side. When one side's boundary is definitely the limiting factor, we can solve that side.

This principle appears in:
- Merge operations
- Optimization problems
- Dynamic programming

Now implement this carefully! 🌧️`,
                theoryContent: `## Two Pointers with Running Maxes

### Core Formula
water[i] = min(left_max, max_right) - height[i]

### The Optimization
We don't need both maxes at once.
If left_max < right_max: water at L is bounded by left_max.
Process the side with the smaller max.

### Algorithm
1. Two pointers at ends, two running maxes
2. Process side with smaller max
3. If current height > max, update max
4. Else add (max - height) to water

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        // ============================================
        // MOVING FRAME (Sliding Window)
        // ============================================

        "peak-profit": {
                storyContent: `## Best Time to Buy and Sell Stock

*The problem that introduces sliding window thinking...*

You have an array of stock prices over time. You can only make ONE transaction (buy then sell). Find the maximum profit.

prices = [7, 1, 5, 3, 6, 4]

Buy at 1, sell at 6 → profit = 5

---

### The Trap Everyone Falls Into

Your first instinct: find the minimum and maximum values.

But wait! The order matters. You can't sell BEFORE you buy.

[7, 6, 4, 3, 1] → max is 7, min is 1, but you can't buy at 1 and sell at 7 (7 comes first!)

---

### The Key Insight 💡

At each day, ask: "If I sold TODAY, what's my best possible profit?"

Best profit selling today = today's price - minimum price seen SO FAR

Keep track of:
1. Minimum price seen so far
2. Maximum profit seen so far

---

### Walking Through It

prices = [7, 1, 5, 3, 6, 4]

Day 0 (price=7): min=7, best_profit = 7-7 = 0
Day 1 (price=1): min=1, best_profit = max(0, 1-1) = 0
Day 2 (price=5): min=1, best_profit = max(0, 5-1) = 4
Day 3 (price=3): min=1, best_profit = max(4, 3-1) = 4
Day 4 (price=6): min=1, best_profit = max(4, 6-1) = 5 ⭐
Day 5 (price=4): min=1, best_profit = max(5, 4-1) = 5

Answer: 5

---

### Why This Is "Sliding Window"

Think of it as a window from the minimum price point to the current day.

You're always considering: buy at the min, sell at current.

This is the simplest sliding window - where the left boundary is just "the minimum we've seen."

More complex sliding windows have different criteria for when to shrink/expand.

Now implement it! 📈`,
                theoryContent: `## Single Pass Stock Profit

### Key Insight
At each position, track:
1. Minimum price so far (potential buy point)
2. Maximum profit so far

### Algorithm
min_price = infinity
max_profit = 0
for each price:
    min_price = min(min_price, price)
    max_profit = max(max_profit, price - min_price)

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "unique-streak": {
                storyContent: `## Longest Substring Without Repeating Characters

*The CLASSIC sliding window problem. If you understand this, you understand sliding window.*

Given a string, find the length of the longest substring without repeating characters.

"abcabcbb" → 3 ("abc")
"bbbbb" → 1 ("b")
"pwwkew" → 3 ("wke")

---

### The Brute Force Disaster

Check every possible substring, verify no duplicates.

That's O(n³) - generating substrings takes O(n²), checking each takes O(n).

For a string of length 10,000, that's a TRILLION operations.

---

### The Sliding Window Insight 💡

Instead of checking every substring, maintain a "window" of valid characters.

Two pointers: LEFT and RIGHT

1. **Expand** (move RIGHT): add characters to window
2. **Shrink** (move LEFT): when we see a duplicate, remove characters until valid again

---

### Visualizing It

String: "abcabcbb"

[a]bcabcbb → window = {a}, length = 1
[ab]cabcbb → window = {a,b}, length = 2
[abc]abcbb → window = {a,b,c}, length = 3
[abc]Abcbb → 'a' repeats! Shrink window
a[bca]bcbb → window = {b,c,a}, length = 3
ab[cab]cbb → 'b' repeats! Shrink
abc[abc]bb → window = {a,b,c}, length = 3
...and so on

---

### What Data Structure?

You need to quickly check: "Is this character already in my window?"

Options:
1. **Set**: just track which chars are in window
2. **Map**: track char → last seen index (allows smarter jumping)

With a map, when you see a duplicate, you can jump LEFT directly to after the previous occurrence!

---

### The Pattern

This is the **variable-size sliding window**:
- Keep expanding RIGHT
- Shrink LEFT when window becomes invalid
- Track your answer (max length) at each step

You'll see this exact pattern in:
- Longest substring with at most K distinct characters
- Minimum window substring
- Maximum consecutive ones with K flips

Master this and you've unlocked a whole category.

Now implement it! 🔤`,
                theoryContent: `## Variable-Size Sliding Window

### Template
left = 0
for right in range(n):
    add s[right] to window
    while window is invalid:
        remove s[left] from window
        left += 1
    update answer

### For This Problem
- Window is valid when no duplicates
- Use Set or Map to track characters
- Answer = max(right - left + 1)

### Complexity
- Time: O(n) - each char added/removed once
- Space: O(min(n, alphabet_size))`
        },

        "max-same-char": {
                storyContent: `## Longest Repeating Character Replacement

*A twist on sliding window that trips up even experienced devs.*

You can replace at most k characters in a string. What's the longest substring you can make with all the same character?

s = "AABABBA", k = 1
Answer: 4 ("AABA" → replace B with A → "AAAA")

---

### The Brilliant Insight 💡

For any window to be valid, we need:

**window_length - max_char_count <= k**

In other words: the number of characters we'd need to replace is at most k.

---

### Breaking It Down

Window "AABA":
- Length = 4
- Most frequent char = 'A' (appears 3 times)
- Chars to replace = 4 - 3 = 1

If k >= 1, this window is valid!

---

### The Algorithm

Maintain a window and a frequency count of characters in it.

1. Expand RIGHT, update frequency count
2. If window_length - max_frequency > k, shrink LEFT
3. Track the maximum valid window length

---

### The Subtle Trick

You don't need to recalculate max_frequency when shrinking!

Why? We're looking for the LONGEST valid window. If we found a window of length L with max_freq = M, we only care about finding windows of length > L.

So we only need to UPDATE max_freq when we find a new maximum, never decrease it.

This is counter-intuitive but correct!

---

### The Pattern

This is a **fixed constraint** sliding window:
- The constraint is: replacements needed <= k
- Expand until constraint violated
- Shrink just enough to restore validity

Similar problems:
- Max consecutive ones with k flips
- Longest substring with at most k distinct chars

Now implement it! 🔧`,
                theoryContent: `## Character Replacement Window

### Key Formula
valid window ⟺ length - max_freq <= k

### The Trick
When shrinking, don't recalculate max_freq.
We only care about LONGER windows.
If current max_freq can't help us beat our best, it doesn't matter.

### Algorithm
for right in range(n):
    count[s[right]] += 1
    max_freq = max(max_freq, count[s[right]])
    if (right - left + 1) - max_freq > k:
        count[s[left]] -= 1
        left += 1
    result = max(result, right - left + 1)

### Complexity
- Time: O(n)
- Space: O(26) = O(1)`
        },

        "hidden-pattern": {
                storyContent: `## Permutation in String

*Find if any permutation of s1 exists as a substring of s2.*

s1 = "ab", s2 = "eidbaooo"
Output: True (s2 contains "ba" which is a permutation of "ab")

---

### What Makes a Permutation?

Two strings are permutations of each other if they have the **exact same character frequencies**.

"ab" → {a:1, b:1}
"ba" → {a:1, b:1}

Same frequencies = permutation!

---

### The Sliding Window Approach

We need a substring of s2 that has the same character frequencies as s1.

Use a **fixed-size** window of length = len(s1).

Slide this window across s2, checking if frequencies match.

---

### Optimizing the Comparison

Naive: at each position, build a frequency map and compare.

Better: maintain a running frequency count!

When window slides:
- Add the new character (entering from right)
- Remove the old character (exiting from left)
- Check if frequencies match

---

### Even Better: Track Matches

Instead of comparing 26 frequencies each time, track how many characters have matching counts.

- When a character's count becomes equal to s1's count: matches++
- When it becomes unequal: matches--

If matches == 26 (or number of unique chars), we found a permutation!

---

### The Pattern

This is a **fixed-size** sliding window:
- Window size is always len(s1)
- Move both pointers together
- Maintain running state, don't recalculate

You'll use this pattern for:
- Finding anagrams in a string
- Checking if any permutation is a substring
- Fixed-size window problems

Now implement it! 🔍`,
                theoryContent: `## Fixed-Size Sliding Window

### Key Insight
Window size is fixed = len(s1)
We're checking if frequencies match at each position

### Optimization
Track number of "matching" character counts
When matches == 26, we found a permutation

### Algorithm
1. Build frequency map of s1
2. Initialize window with first len(s1) chars of s2
3. Check for match
4. Slide: remove leftmost, add rightmost
5. Check for match at each slide

### Complexity
- Time: O(n) where n = len(s2)
- Space: O(26) = O(1)`
        },

        "smallest-cover": {
                storyContent: `## Minimum Window Substring

*The HARDEST classic sliding window. If you can do this, you've mastered the pattern.*

Given strings s and t, find the minimum window in s that contains all characters of t.

s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

---

### Understanding the Problem

We need the smallest substring of s that contains at least:
- 1 'A'
- 1 'B'  
- 1 'C'

"ADOBEC" works (length 6), but "BANC" is shorter (length 4).

---

### The Two-Phase Window

**Phase 1**: Expand until valid
Keep moving RIGHT until window contains all chars of t.

**Phase 2**: Contract while still valid
Move LEFT to shrink the window, stop when it becomes invalid.

Record the minimum valid window length.

Then expand again, contract again... repeat until RIGHT reaches the end.

---

### Tracking Validity

You need to know: "Does my window contain all characters of t?"

Approach:
1. Count frequency of each char in t (what we NEED)
2. As we add chars to window, track how many we HAVE
3. When HAVE >= NEED for all chars, window is valid

---

### The "Formed" Counter Trick

Instead of checking all 26 chars:

Track a counter "formed" = number of characters where have >= need

When formed == number_of_unique_chars_in_t, window is valid!

When shrinking, if a character's count drops below need, decrement formed.

---

### The Algorithm Skeleton

while right < len(s):
    add s[right] to window
    
    while window is valid:
        update answer if smaller
        remove s[left] from window
        left += 1
    
    right += 1

---

### Why This Works

By expanding until valid, then contracting maximally, we find ALL minimal windows ending at each position.

The overall minimum must be one of these.

The key insight: once window becomes valid, we greedily shrink it as much as possible before expanding again.

This is O(n) because each character is added once and removed once.

Now implement this carefully! 🎯`,
                theoryContent: `## Minimum Window Substring

### Two-Counter Technique
1. need[char] = count required from t
2. have[char] = count in current window
3. formed = chars where have >= need

### Algorithm
expand → until valid
contract → while still valid (recording min)
repeat

### Key Transition
Valid → track "formed" counter
formed == unique chars in t → window valid

### Complexity
- Time: O(m + n)
- Space: O(m + n) for hashmaps`
        },

        "frame-maximum": {
                storyContent: `## Sliding Window Maximum

*The problem that separates the good from the great.*

Given an array and window size k, return the max of each window as it slides.

nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]

Window [1,3,-1] → max 3
Window [3,-1,-3] → max 3
Window [-1,-3,5] → max 5
...

---

### The Naive Approach

For each window position, find the max. O(n × k).

But k can be close to n. That's O(n²) in the worst case.

Can we do O(n)?

---

### The Key Insight 💡

When the window slides, most elements don't change.

If we're tracking maximums cleverly, we shouldn't need to recalculate from scratch.

---

### The Monotonic Deque

A deque (double-ended queue) that maintains elements in **decreasing order**.

Property: the front of the deque is always the maximum of the current window.

---

### How It Works

When adding a new element:
1. Remove elements from the BACK that are smaller than the new element
   (They can never be the max while the new element is in the window)
2. Add the new element to the back

When the front element goes out of window:
3. Remove it from the front

The front is always the current maximum!

---

### Why Remove Smaller Elements?

If we have [5, 3, 2] in the deque and add 4:

3 and 2 can NEVER be the maximum while 4 is in the window.
4 entered later, so 4 will leave later.
And 4 is bigger than both.

So we remove 3 and 2, giving us [5, 4].

---

### Walking Through

nums = [1,3,-1,-3,5,3,6,7], k = 3

i=0: deque = [1]
i=1: 1 < 3, remove 1, deque = [3]
i=2: 3 > -1, deque = [3,-1], output: 3
i=3: -1 > -3, deque = [3,-1,-3], output: 3
i=4: remove all < 5, deque = [5], output: 5
i=5: 5 > 3, deque = [5,3], output: 5
i=6: remove 5,3 < 6, deque = [6], output: 6
i=7: remove 6 < 7, deque = [7], output: 7

---

### The Pattern

Monotonic deque (or stack) is powerful when you need to track:
- Maximum/minimum in a sliding window
- Next greater/smaller element
- Stock span problem

The deque maintains a "useful" subset of elements in order.

This is an advanced technique. Master it and you'll handle the hardest window problems.

Now implement it! 🏆`,
                theoryContent: `## Monotonic Deque

### Key Property
Deque stores indices in decreasing order of values.
Front = index of maximum in current window.

### Operations
1. Remove from back while new element > back element
2. Add new element to back
3. Remove from front if index out of window
4. Front is the answer for current window

### Why O(n)?
Each element added once, removed once.
Total operations = O(2n) = O(n)

### Similar Problems
- Next greater element
- Stock span
- Largest rectangle in histogram`
        },

        // ============================================
        // LIFO TOWER (Stack)
        // ============================================

        "bracket-match": {
                storyContent: `## Valid Parentheses

*The problem that introduces every programmer to stacks.*

Given a string containing just '()', '{}', '[]' - is it valid?

Valid: "()", "()[]{}", "{[]}"
Invalid: "(]", "([)]", "]"

---

### The Core Intuition

Every opening bracket needs a matching closing bracket IN THE RIGHT ORDER.

When you see '(', eventually you need ')'.
When you see '[', eventually you need ']'.

But here's the tricky part: brackets must match in LIFO order (Last In, First Out).

---

### Why LIFO?

Consider: "{[]}"

You see '{' first, so '{' should be closed LAST.
You see '[' second, so '[' should be closed second-to-last.

The MOST RECENT open bracket should be closed first!

"{[]}" → open '{', open '[', close ']' (matches '['), close '}' (matches '{') ✓

---

### The Stack Solution

A stack is exactly LIFO:
- Push: add to top
- Pop: remove from top

Algorithm:
1. See opening bracket → push to stack
2. See closing bracket → pop from stack, check if they match
3. At the end, stack should be empty

---

### Handling Mismatches

What can go wrong?
1. Closing bracket doesn't match top of stack → invalid
2. Closing bracket but stack is empty → invalid
3. End of string but stack is not empty → invalid

---

### The Pattern

Stack is the perfect data structure for matching problems:
- Nested structures (brackets, HTML tags)
- Undo/redo operations
- Expression evaluation

When you see "most recent first", think stack!

Now implement it! 🎯`,
                theoryContent: `## Stack for Matching

### Algorithm
for each char:
    if opening: push
    if closing: 
        if stack empty: return false
        if top doesn't match: return false
        pop
return stack.empty()

### Key Insight
LIFO property = most recent opening matches first closing

### Time & Space
- Time: O(n)
- Space: O(n)`
        },

        "mini-stack": {
                storyContent: `## Min Stack

*Design a stack that supports push, pop, top, AND getMin in O(1) time.*

Regular stacks give you push/pop/top in O(1). But getMin - finding the minimum element - normally requires scanning everything.

How do we make it O(1)?

---

### The Naive Approach (Wrong)

Just track the minimum in a variable.

Push: update min = min(min, new_value)
Pop: ???

**Problem**: When you pop the minimum, what's the NEW minimum?

You'd have to scan the whole stack to find it. That's O(n).

---

### The Key Insight 💡

The minimum might change as you pop elements. But can it change as you push?

Pushing a new element can only make the minimum smaller or keep it the same.

So at each level of the stack, we can remember: "What was the minimum at this point?"

---

### The Solution: Paired Storage

For each element, store (value, current_min):

Push 5: [(5, 5)]           min=5
Push 3: [(5,5), (3, 3)]    min=3
Push 7: [(5,5), (3,3), (7, 3)]  min=3
Pop 7:  [(5,5), (3,3)]     min=3
Pop 3:  [(5,5)]            min=5

When we pop, the previous min is still stored with the previous element!

---

### Alternative: Two Stacks

Main stack: [5, 3, 7]
Min stack:  [5, 3, 3]  (min at each level)

Same idea, just stored separately.

---

### The Pattern

When you need O(1) access to aggregate info (min, max, etc.) that changes over time:
- Store the aggregate at each state
- Each state "remembers" what the aggregate was up to that point

You'll see this pattern in:
- Max stack
- Stock span problem
- Range query structures

Now implement it! 📚`,
                theoryContent: `## O(1) Min Tracking

### Core Insight
Store minimum alongside each element (or in parallel stack).
When element is popped, the previous min is still stored.

### Two Approaches
1. **Pairs**: Push (value, current_min)
2. **Two stacks**: Main stack + min stack

### Operations
- push(x): push (x, min(x, current_min))
- pop(): pop from both
- getMin(): return top of min stack/pair

### Time & Space
- All operations: O(1)
- Space: O(n)`
        },

        "reverse-calc": {
                storyContent: `## Evaluate Reverse Polish Notation

*The way calculators ACTUALLY work internally.*

Reverse Polish Notation (RPN) puts operators AFTER operands:

"2 3 +" means (2 + 3) = 5
"4 2 /" means (4 / 2) = 2
"2 3 + 4 *" means (2 + 3) * 4 = 20

---

### Why RPN Exists

Regular math notation needs parentheses to show order:
(2 + 3) * 4 vs 2 + (3 * 4)

RPN doesn't need parentheses. The order is unambiguous!

---

### The Stack Approach

Imagine a stack as a "workspace":

Token "2": push 2           Stack: [2]
Token "3": push 3           Stack: [2, 3]
Token "+": pop 3 and 2, compute 2+3=5, push 5    Stack: [5]
Token "4": push 4           Stack: [5, 4]
Token "*": pop 4 and 5, compute 5*4=20, push 20  Stack: [20]

Final answer: 20

---

### The Algorithm

for each token:
    if number:
        push to stack
    if operator:
        pop two values (b, then a)
        compute a op b
        push result

return stack.top()

---

### Watch the Order!

When you pop for "-" or "/", order matters!

"5 2 -" means 5 - 2, not 2 - 5

Pop gives you 2 first (top), then 5 (next).
So it's a=5, b=2 → a - b = 3

---

### The Pattern

Stack for expression evaluation:
- Numbers go on the stack "wait list"
- Operators consume from the stack and produce results
- Final result is the only thing left

This pattern extends to:
- Infix to postfix conversion
- Calculator apps
- Compiler expression parsing

Now implement it! 🧮`,
                theoryContent: `## RPN Evaluation with Stack

### Algorithm
for token in tokens:
    if isNumber(token):
        stack.push(token)
    else:
        b = stack.pop()
        a = stack.pop()
        result = apply(a, token, b)
        stack.push(result)
return stack.pop()

### Order Matters
For "-" and "/": first popped is RIGHT operand!

### Time & Space
- Time: O(n)
- Space: O(n)`
        },

        "heat-wave": {
                storyContent: `## Daily Temperatures

*Find how many days until a warmer temperature.*

Given temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
Output: [1, 1, 4, 2, 1, 1, 0, 0]

For day 0 (73°): day 1 is 74° → wait 1 day
For day 2 (75°): day 6 is 76° → wait 4 days
For day 7 (73°): no warmer day → 0

---

### The Brute Force Trap

For each day, scan forward to find the next warmer day.

That's O(n²). With 30,000 temperatures, that's 900 million operations.

---

### The Key Insight 💡

When we find a warmer day, we're answering questions for MULTIPLE previous days!

Day 6 is 76°. It's warmer than:
- Day 5 (72°)
- Day 4 (69°)
- Day 3 (71°)
- Day 2 (75°)

All those days were "waiting" for a warmer temperature.

---

### The Monotonic Stack

Keep a stack of days we haven't found answers for yet.

When we see a new temperature, check: is it warmer than the days on the stack?

If yes, those days have found their answer! Pop them.

---

### Walking Through

temps = [73, 74, 75, 71, 69, 72, 76, 73]
stack = indices of "waiting" days

Day 0 (73): stack = [0]
Day 1 (74): 74 > 73 → day 0's answer = 1. Pop. Push. stack = [1]
Day 2 (75): 75 > 74 → day 1's answer = 1. Pop. Push. stack = [2]
Day 3 (71): 71 < 75 → just push. stack = [2, 3]
Day 4 (69): 69 < 71 → just push. stack = [2, 3, 4]
Day 5 (72): 72 > 69 → day 4's answer = 1. Pop.
           72 > 71 → day 3's answer = 2. Pop.
           72 < 75 → push. stack = [2, 5]
Day 6 (76): 76 > 72 → day 5's answer = 1. Pop.
           76 > 75 → day 2's answer = 4. Pop. Push. stack = [6]
Day 7 (73): 73 < 76 → push. stack = [6, 7]

Remaining days get answer 0.

---

### The Pattern

Monotonic stack maintains elements in sorted order (decreasing for this problem).

When a new element breaks the monotonicity, we process the violating elements.

Use this for:
- Next greater element
- Next smaller element
- Stock span
- Histogram problems

Now implement it! 🌡️`,
                theoryContent: `## Monotonic Stack for "Next Greater"

### Key Idea
Stack holds indices of elements waiting for "next greater."
When we find a greater element, pop and record answers.

### Algorithm
stack = []
for i, temp in enumerate(temps):
    while stack and temp > temps[stack[-1]]:
        idx = stack.pop()
        answer[idx] = i - idx
    stack.push(i)

### Time & Space
- Time: O(n) - each element pushed/popped once
- Space: O(n)`
        },

        "car-convoy": {
                storyContent: `## Car Fleet

*A tricky problem that looks like simulation but is really about stack.*

Cars start at different positions with different speeds, driving toward a target.

A slower car blocks faster cars behind it (they form a "fleet").

How many fleets arrive at the target?

---

### Understanding Fleets

If car A is behind car B, and A is faster, A will catch up to B.

Once A catches B, they drive together at B's speed (can't pass).

They become ONE fleet.

---

### The Key Insight 💡

Calculate arrival time for each car: (target - position) / speed

Cars are processed right-to-left (closest to target first).

If a car arrives LATER than the car ahead of it, it forms a new fleet.
If a car arrives at the SAME TIME or earlier, it catches up → same fleet.

---

### Stack Approach

Sort cars by position (descending - closest to target first).

For each car, calculate arrival time.

Compare with the current fleet's arrival time (top of stack):
- If this car takes LONGER → new fleet, push
- If same or less → joins existing fleet, don't push

---

### Walking Through

target = 12, positions = [10, 8, 0, 5, 3], speeds = [2, 4, 1, 1, 3]

Sort by position: 
Car at 10 (speed 2): arrives at (12-10)/2 = 1.0
Car at 8 (speed 4): arrives at (12-8)/4 = 1.0 → same time as ahead, same fleet
Car at 5 (speed 1): arrives at (12-5)/1 = 7.0 → slower, new fleet
Car at 3 (speed 3): arrives at (12-3)/3 = 3.0 → faster than 7.0, catches up
Car at 0 (speed 1): arrives at (12-0)/1 = 12.0 → slower, new fleet

Fleets: 3

---

### Why Stack?

The stack maintains "fleet leaders" - cars that define fleet boundaries.

When a new car is slower, it becomes a new fleet leader.
When faster, it merges with the fleet ahead.

---

### The Pattern

This is a "merge to leader" pattern. Similar problems:
- Meeting rooms with merging
- Interval merging
- Process scheduling

Now implement it! 🚗`,
                theoryContent: `## Car Fleet Stack

### Key Insight
arrival_time = (target - position) / speed
A car forms a new fleet if it's SLOWER than the car ahead.

### Algorithm
1. Sort cars by position (descending)
2. Calculate arrival times
3. Stack keeps fleet leaders (increasing arrival times)
4. If new car arrives later → new fleet (push)
5. If arrives same/earlier → joins fleet (don't push)

### Time & Space
- Time: O(n log n) - sorting dominates
- Space: O(n)`
        },

        "biggest-bar": {
                storyContent: `## Largest Rectangle in Histogram

*The ULTIMATE stack problem. If you can solve this, you've mastered monotonic stacks.*

Given histogram bar heights, find the largest rectangle area.

heights = [2, 1, 5, 6, 2, 3]
Answer: 10 (rectangle with height 5 and width 2, using bars 5 and 6)

---

### The Challenge

For each bar, how wide can we extend it?

A bar of height H can extend left/right as long as neighboring bars are >= H.

---

### The Brute Force Trap

For each bar, scan left and right to find boundaries.

That's O(n²). Too slow for large histograms.

---

### The Key Insight 💡

When we see a bar SHORTER than the previous one, all taller previous bars have found their right boundary!

heights = [2, 1, 5, 6, 2, 3]

At index 4 (height 2):
- Bar at index 3 (height 6) can't extend right past here
- Bar at index 2 (height 5) can't extend right past here

Time to calculate their areas!

---

### The Monotonic Stack Approach

Stack holds indices of bars in INCREASING height order.

When we see a shorter bar:
1. Pop bars that are taller
2. For each popped bar, calculate its area
   - Height = popped bar's height
   - Width = from (bar on top of stack + 1) to current index

This gives the maximum rectangle using that bar's full height.

---

### Walking Through

heights = [2, 1, 5, 6, 2, 3]
stack = []

i=0 (h=2): push. stack = [0]
i=1 (h=1): 1 < 2 →
    pop 0, height=2, width=1, area=2
    push 1. stack = [1]
i=2 (h=5): 5 > 1 → push. stack = [1, 2]
i=3 (h=6): 6 > 5 → push. stack = [1, 2, 3]
i=4 (h=2): 2 < 6 →
    pop 3, height=6, width=1, area=6
    pop 2, height=5, width=2, area=10 ⭐
    push 4. stack = [1, 4]
i=5 (h=3): 3 > 2 → push. stack = [1, 4, 5]

End: pop remaining
    pop 5, height=3, width=1, area=3
    pop 4, height=2, width=4, area=8
    pop 1, height=1, width=6, area=6

Max: 10

---

### The Width Calculation

When we pop bar at index p:
- Right boundary = current index - 1
- Left boundary = index on top of stack + 1 (or 0 if stack empty)
- Width = right - left + 1 = current_idx - stack_top - 1

---

### The Pattern

This is the "process when boundary found" pattern:
1. Use monotonic stack to find boundaries
2. Process elements when their boundary is found
3. Handle remaining elements at the end

This exact pattern solves:
- Maximal rectangle in binary matrix
- Trapping rain water (alternate approach)
- Sum of subarray minimums

Master this and you've conquered hard stack problems!

Now implement it carefully! 🏆`,
                theoryContent: `## Histogram Rectangle Stack

### Core Idea
Stack holds indices in increasing height order.
When shorter bar found, calculate areas for taller bars.

### Area Calculation
For popped index p:
- height = heights[p]
- width = i - stack_top - 1 (or i if stack empty)
- area = height × width

### Algorithm
for i, h in enumerate(heights):
    while stack and h < heights[stack[-1]]:
        p = stack.pop()
        height = heights[p]
        width = i - stack[-1] - 1 if stack else i
        max_area = max(max_area, height * width)
    stack.push(i)
// Process remaining

### Time & Space
- Time: O(n)
- Space: O(n)`
        },

        // ============================================
        // DIVIDE CONQUER (Binary Search)
        // ============================================

        "half-search": {
                storyContent: `## Binary Search

*The algorithm every programmer should dream about.*

Given a sorted array, find if a target exists. Return the index, or -1 if not found.

nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4

---

### The Linear Search Problem

You could scan every element. That's O(n).

But the array is SORTED. We're wasting information!

---

### The Power of Elimination 💡

If you're looking for 9 and you check the middle element (5):

9 > 5 → The target must be in the RIGHT half!

You just eliminated HALF the array in ONE comparison.

---

### The Algorithm

1. Set left = 0, right = len - 1
2. While left <= right:
   - mid = (left + right) / 2
   - If nums[mid] == target: found it!
   - If nums[mid] < target: search right half (left = mid + 1)
   - If nums[mid] > target: search left half (right = mid - 1)
3. Not found

---

### The Math

Each step halves the search space:
n → n/2 → n/4 → n/8 → ... → 1

How many halvings until you reach 1?

log₂(n)

Binary search is O(log n). For a billion elements, that's only ~30 comparisons!

---

### The Classic Bugs

**Bug 1**: Infinite loop
Wrong: mid = (left + right) / 2, then left = mid
Should be: left = mid + 1 (otherwise you might never move forward)

**Bug 2**: Integer overflow
Wrong: mid = (left + right) / 2 (can overflow for large arrays)
Better: mid = left + (right - left) / 2

**Bug 3**: Off-by-one
When should you use < vs <=? When mid + 1 vs mid?
Think carefully about what's included in your search space!

---

### The Pattern

Binary search applies whenever:
- Data is sorted (or has a monotonic property)
- You can determine which half contains the answer

This is the foundation for dozens of problems.

Now implement it perfectly! 🎯`,
                theoryContent: `## Binary Search Fundamentals

### Template
left, right = 0, n-1
while left <= right:
    mid = left + (right - left) // 2
    if nums[mid] == target:
        return mid
    elif nums[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
return -1

### Complexity
- Time: O(log n)
- Space: O(1)

### Common Bugs
1. Infinite loop (wrong boundary updates)
2. Integer overflow (use left + (right-left)/2)
3. Off-by-one errors`
        },

        "grid-hunt": {
                storyContent: `## Search a 2D Matrix

*Binary search in two dimensions.*

You have an m×n matrix where:
- Each row is sorted left to right
- First element of each row is greater than the last element of the previous row

Determine if a target value exists.

---

### The Key Observation 💡

Read the matrix row by row, and it's actually ONE SORTED ARRAY!

[[1, 3, 5, 7],
 [10, 11, 16, 20],
 [23, 30, 34, 60]]

Flattened: [1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 60]

---

### The Virtual Array Trick

You don't need to actually flatten it. Just convert indices!

For an m×n matrix:
- Virtual index i maps to matrix[i / n][i % n]
- i = 7 in a 3×4 matrix → row = 7/4 = 1, col = 7%4 = 3 → matrix[1][3] = 20

---

### The Algorithm

Treat it as a 1D array of size m×n.

Binary search on indices 0 to m×n - 1.

At each step, convert virtual index to row/col and compare.

---

### Alternative: Two Binary Searches

1. Binary search to find which ROW might contain the target
2. Binary search within that row

Both approaches are O(log(m×n)) = O(log m + log n).

---

### The Pattern

When you have a 2D structure with sorted properties:
- Look for ways to treat it as 1D
- Index conversion: row = i/n, col = i%n

Now implement it! 🎯`,
                theoryContent: `## 2D Binary Search

### Approach 1: Virtual 1D Array
- Total elements: m × n
- Virtual index i → matrix[i/n][i%n]
- Binary search on [0, m×n - 1]

### Approach 2: Two Binary Searches
1. Find candidate row
2. Search within row

### Complexity
- Time: O(log(m×n)) = O(log m + log n)
- Space: O(1)`
        },

        "banana-speed": {
                storyContent: `## Koko Eating Bananas

*Binary search on the ANSWER, not the input.*

Koko has piles of bananas [3, 6, 7, 11] and h = 8 hours.

She eats K bananas per hour. If a pile has fewer than K, she finishes it and waits.

Find the minimum K so she can eat all bananas in h hours.

---

### The Insight That Changes Everything 💡

We're not searching through bananas. We're searching through POSSIBLE SPEEDS.

K can range from 1 to max(piles).

For each K, we can calculate hours needed:
hours = sum(ceil(pile / K) for each pile)

---

### Binary Search on Answer

If K=4 takes 9 hours (too slow), would K=3 be faster? NO, slower!
If K=4 takes 7 hours (fast enough), would K=5 also work? YES!

The function "hours needed" is MONOTONIC:
- Higher K → fewer hours
- Lower K → more hours

We can binary search!

---

### The Algorithm

left = 1, right = max(piles)

While left < right:
    mid = (left + right) / 2
    hours = calculate_hours(mid)
    
    if hours <= h:
        right = mid  (mid works, try smaller)
    else:
        left = mid + 1  (need faster speed)

Answer = left

---

### Why This Pattern Matters

"Binary search on answer" is HUGELY powerful:
- Minimum speed to finish in time
- Maximum capacity to fit items
- Minimum days to complete tasks

Whenever you have:
1. A range of possible answers
2. A way to check if an answer works
3. Monotonic property (if X works, X+1 works)

You can binary search!

Now implement it! 🍌`,
                theoryContent: `## Binary Search on Answer

### When to Use
1. Looking for min/max value that satisfies condition
2. Can check if a candidate answer works
3. Monotonic: if K works, K+1 also works (or vice versa)

### Template
left, right = min_answer, max_answer
while left < right:
    mid = (left + right) // 2
    if condition(mid):
        right = mid  # mid works, try smaller
    else:
        left = mid + 1
return left

### For This Problem
- Range: [1, max(piles)]
- Condition: can_finish_in_h_hours(speed)
- Want minimum speed`
        },

        "rotated-min": {
                storyContent: `## Find Minimum in Rotated Sorted Array

*Binary search when the array is... broken?*

A sorted array has been rotated:

[0,1,2,4,5,6,7] → rotate 4 times → [4,5,6,7,0,1,2]

Find the minimum element.

---

### Why Regular Binary Search Fails

We can't just compare mid to target because the array isn't fully sorted.

But there's still structure! The array has TWO sorted portions.

[4,5,6,7,|0,1,2]
   ↑       ↑
  left    right
 portion  portion

---

### The Key Insight 💡

Compare nums[mid] to nums[right]:

If nums[mid] > nums[right]:
- Mid is in the LEFT (higher) portion
- Minimum must be in the right half
- left = mid + 1

If nums[mid] <= nums[right]:
- Mid is in the RIGHT (lower) portion OR at the minimum
- Minimum is at mid or to its left
- right = mid

---

### Walking Through

[4,5,6,7,0,1,2], left=0, right=6

mid = 3, nums[3]=7, nums[6]=2
7 > 2 → min is in right half, left = 4

mid = 5, nums[5]=1, nums[6]=2
1 < 2 → min is at or left of mid, right = 5

mid = 4, nums[4]=0, nums[5]=1
0 < 1 → right = 4

left == right = 4, answer = nums[4] = 0 ✓

---

### The Pattern

For rotated sorted arrays:
- Identify which half is "normal" sorted
- Use that to decide which half to search
- Compare with endpoints, not absolute values

This pattern solves:
- Find minimum in rotated array
- Search in rotated array
- Find rotation point

Now implement it! 🔄`,
                theoryContent: `## Rotated Array Binary Search

### Key Insight
Compare nums[mid] with nums[right]:
- nums[mid] > nums[right] → min in right half
- nums[mid] ≤ nums[right] → min at mid or left

### Why Compare with Right?
If we compare with left, we can't distinguish between:
- Fully sorted array
- Minimum is at left

### Algorithm
while left < right:
    mid = (left + right) // 2
    if nums[mid] > nums[right]:
        left = mid + 1
    else:
        right = mid
return nums[left]

### Complexity
- Time: O(log n)
- Space: O(1)`
        },

        "rotated-search": {
                storyContent: `## Search in Rotated Sorted Array

*Find a specific target in a rotated array.*

[4,5,6,7,0,1,2], target = 0
Output: 4

---

### Building on "Find Minimum"

We know how to find the rotation point. But can we search without finding it first?

YES! At each step, we can determine which HALF is sorted.

---

### The Strategy 💡

At any mid point, ONE half is definitely sorted:

[4,5,6,7,0,1,2]
    mid=7
    
Left half [4,5,6,7] is sorted (nums[left] <= nums[mid])
Right half [0,1,2] is NOT in normal order relative to mid

---

### The Logic

If LEFT half is sorted (nums[left] <= nums[mid]):
- Is target in [nums[left], nums[mid]]?
- YES → search left
- NO → search right

If RIGHT half is sorted (nums[mid] <= nums[right]):
- Is target in [nums[mid], nums[right]]?
- YES → search right  
- NO → search left

---

### Walking Through

[4,5,6,7,0,1,2], target = 0

mid = 3, nums[3] = 7
Left [4,5,6,7] is sorted (4 <= 7)
Is 0 in [4, 7]? NO
Search right: left = 4

mid = 5, nums[5] = 1
Left [0,1] is sorted (0 <= 1)
Is 0 in [0, 1]? YES!
Search left: right = 5

mid = 4, nums[4] = 0 = target ✓

---

### The Pattern

When data has partial structure:
1. Identify the structured portion
2. Use it to make decisions
3. Binary search the appropriate half

Now implement it! 🎯`,
                theoryContent: `## Rotated Array Target Search

### Strategy
1. Find which half is sorted
2. Check if target is in sorted half
3. Search appropriate half

### Algorithm
while left <= right:
    mid = (left + right) // 2
    if nums[mid] == target: return mid
    
    if nums[left] <= nums[mid]:  # left sorted
        if nums[left] <= target < nums[mid]:
            right = mid - 1
        else:
            left = mid + 1
    else:  # right sorted
        if nums[mid] < target <= nums[right]:
            left = mid + 1
        else:
            right = mid - 1
return -1

### Complexity
- Time: O(log n)
- Space: O(1)`
        },

        "time-cache": {
                storyContent: `## Time Based Key-Value Store

*Binary search meets system design.*

Design a data structure that stores key-value pairs with timestamps.

set(key, value, timestamp)
get(key, timestamp) → returns value with largest timestamp <= given timestamp

---

### The Setup

set("foo", "bar", 1)
set("foo", "bar2", 4)
get("foo", 1) → "bar"
get("foo", 3) → "bar" (largest timestamp <= 3)
get("foo", 4) → "bar2"
get("foo", 5) → "bar2" (largest timestamp <= 5)

---

### The Data Structure

For each key, store a list of (timestamp, value) pairs.

Since timestamps are always increasing, the list is automatically sorted!

map = {
  "foo": [(1, "bar"), (4, "bar2")]
}

---

### The Binary Search Part 💡

When we call get("foo", 3):
- Look up the list for "foo"
- Binary search for largest timestamp <= 3
- Return that value

This is "binary search for rightmost element <= target" or "upper bound - 1"

---

### The Algorithm

For set(key, value, timestamp):
- Append (timestamp, value) to map[key]

For get(key, timestamp):
- Binary search map[key] for largest ts <= timestamp
- Return corresponding value

---

### Binary Search Variation

We want: largest index where timestamps[i] <= target

left = 0, right = len - 1, result = -1

while left <= right:
    mid = (left + right) / 2
    if timestamps[mid] <= target:
        result = mid  (valid, try for larger)
        left = mid + 1
    else:
        right = mid - 1

return values[result] if result != -1 else ""

---

### The Pattern

Binary search variations:
- Find exact match
- Find insertion point
- Find leftmost/rightmost match
- Find largest smaller or smallest larger

This problem uses "largest smaller or equal."

Now implement it! ⏰`,
                theoryContent: `## Time-Based Store Design

### Data Structure
HashMap<String, List<(timestamp, value)>>

### Set Operation
O(1) - append to list (timestamps are increasing)

### Get Operation
Binary search for largest timestamp <= query
O(log n) where n is number of values for that key

### Binary Search Variant
Find rightmost element <= target:
result = -1
while left <= right:
    if arr[mid] <= target:
        result = mid
        left = mid + 1
    else:
        right = mid - 1`
        },

        "middle-ground": {
                storyContent: `## Median of Two Sorted Arrays

*The HARDEST binary search problem. A true test of understanding.*

Given two sorted arrays, find the median of the combined sorted array.

nums1 = [1, 3], nums2 = [2]
Merged: [1, 2, 3]
Median: 2

nums1 = [1, 2], nums2 = [3, 4]
Merged: [1, 2, 3, 4]
Median: (2 + 3) / 2 = 2.5

**Constraint**: Must be O(log(m+n))

---

### Why Merge Won't Work

Merging is O(m+n). We need O(log).

We need to BINARY SEARCH our way to the answer.

---

### The Key Insight 💡

The median splits the combined array into two halves.

We need to find a partition where:
- Left half has (m+n+1)/2 elements
- All elements in left half <= all elements in right half

---

### Partitioning Two Arrays

If we take i elements from nums1, we need (half - i) from nums2.

nums1: [1, 3, | 8, 9]  (took 2)
nums2: [2, | 5, 6, 7]   (took 1)

Left half: [1, 3, 2] (not sorted, but we compare boundaries)
Right half: [8, 9, 5, 6, 7]

Valid partition if:
- nums1[i-1] <= nums2[j]
- nums2[j-1] <= nums1[i]

---

### Binary Search on Partition

We binary search the partition point in the SMALLER array.

If nums1[i-1] > nums2[j]: too many from nums1, move left
If nums2[j-1] > nums1[i]: too few from nums1, move right

---

### Finding the Median

Once partition is valid:

If total length is odd:
  median = max(nums1[i-1], nums2[j-1])

If total length is even:
  left_max = max(nums1[i-1], nums2[j-1])
  right_min = min(nums1[i], nums2[j])
  median = (left_max + right_min) / 2

---

### Edge Cases Galore

- What if i = 0? (take nothing from nums1)
- What if i = m? (take everything from nums1)
- Same for j

Use -infinity and +infinity as boundaries for empty sides.

---

### The Pattern

This is "binary search on partition" - rarely seen but incredibly powerful.

The key is realizing we're searching for a SPLIT POINT, not a value.

This problem is genuinely hard. Take your time!

Now implement it carefully! 🏆`,
                theoryContent: `## Median via Binary Search

### Core Idea
Binary search on partition of smaller array.
Take i from nums1, (half - i) from nums2.

### Valid Partition
nums1[i-1] <= nums2[j] AND nums2[j-1] <= nums1[i]

### Binary Search
If nums1[i-1] > nums2[j]: partition too far right
If nums2[j-1] > nums1[i]: partition too far left

### Median Calculation
Odd: max(left sides)
Even: (max(left) + min(right)) / 2

### Complexity
- Time: O(log(min(m, n)))
- Space: O(1)

### Edge Cases
Handle i=0, i=m, j=0, j=n with ±infinity`
        },

        // ============================================
        // CHAIN LINKS (Linked List)
        // ============================================

        "flip-list": {
                storyContent: `## Reverse Linked List

*The most fundamental linked list operation.*

Given a linked list, reverse it.

1 → 2 → 3 → 4 → 5 becomes 5 → 4 → 3 → 2 → 1

---

### Why This Is Tricky

With arrays, you can swap elements using indices.

With linked lists, you only have pointers. You can't go backwards!

Once you move forward, you've lost access to previous nodes... unless you save them.

---

### The Key Insight 💡

You need to track THREE things:
- **prev**: the node before current (starts as null)
- **curr**: the current node
- **next**: save this before changing curr.next!

---

### The Algorithm

1. Save curr.next (we'll lose it when we flip)
2. Flip: curr.next = prev
3. Move prev to curr
4. Move curr to saved next
5. Repeat until curr is null

---

### Visualizing It

1 → 2 → 3 → 4 → null

prev=null, curr=1
Save next=2, flip 1→null, prev=1, curr=2

prev=1, curr=2
Save next=3, flip 2→1, prev=2, curr=3

prev=2, curr=3
Save next=4, flip 3→2, prev=3, curr=4

prev=3, curr=4
Save next=null, flip 4→3, prev=4, curr=null

Done! Return prev (which is 4)

---

### The Pattern

This "previous, current, next" pattern appears in:
- Reversing in groups
- Swapping nodes
- Any linked list reordering

Master this and you've unlocked linked list manipulation.

Now implement it! 🔗`,
                theoryContent: `## Linked List Reversal

### Three-Pointer Technique
prev = null
curr = head
while curr:
    next = curr.next  # save
    curr.next = prev  # flip
    prev = curr       # advance
    curr = next
return prev

### Complexity
- Time: O(n)
- Space: O(1)

### Alternative: Recursive
Base: if not head or not head.next: return head
Recurse: new_head = reverse(head.next)
Flip: head.next.next = head
Clean: head.next = null
Return new_head`
        },

        "merge-pair": {
                storyContent: `## Merge Two Sorted Lists

*Building block for many advanced problems.*

Merge two sorted linked lists into one sorted list.

1→2→4 and 1→3→4 → 1→1→2→3→4→4

---

### The Dummy Node Trick 💡

Starting a new list is awkward. What's the head?

Create a "dummy" node at the start. Build your list after it. Return dummy.next.

dummy → (your result)

---

### The Algorithm

1. Create dummy node and a tail pointer
2. While both lists have nodes:
   - Compare heads
   - Attach smaller one to tail
   - Advance that list's pointer
   - Advance tail
3. Attach remaining list
4. Return dummy.next

---

### Walking Through

List1: 1→2→4, List2: 1→3→4

dummy → tail
Compare 1 vs 1: attach 1 from list1. dummy → 1, move list1 to 2
Compare 2 vs 1: attach 1 from list2. dummy → 1 → 1, move list2 to 3
Compare 2 vs 3: attach 2. dummy → 1 → 1 → 2
Compare 4 vs 3: attach 3. dummy → 1 → 1 → 2 → 3
Compare 4 vs 4: attach 4 from list1. dummy → 1 → 1 → 2 → 3 → 4
List1 empty: attach rest of list2 (4). Done!

---

### The Pattern

This merging logic is used in:
- Merge sort
- Merge K lists
- Combine stream data

The dummy node pattern eliminates edge cases!

Now implement it! 🎯`,
                theoryContent: `## Merge Sorted Lists

### Dummy Node Pattern
dummy = ListNode(0)
tail = dummy
# build list
return dummy.next

### Algorithm
while l1 and l2:
    if l1.val <= l2.val:
        tail.next = l1
        l1 = l1.next
    else:
        tail.next = l2
        l2 = l2.next
    tail = tail.next
tail.next = l1 or l2

### Complexity
- Time: O(m + n)
- Space: O(1)`
        },

        "loop-check": {
                storyContent: `## Linked List Cycle

*Can you detect a cycle without using extra memory?*

Given a linked list, determine if it has a cycle.

1 → 2 → 3 → 4 → 2 (back to node 2) → cycle!

---

### The Naive Solution

Track every node you've visited in a set.

If you see a node twice, there's a cycle.

But that's O(n) extra space...

---

### Floyd's Tortoise and Hare 💡

Use two pointers moving at different speeds!

**Slow** moves 1 step at a time.
**Fast** moves 2 steps at a time.

If there's a cycle, fast will eventually "lap" slow and they'll meet.

If no cycle, fast reaches the end.

---

### Why This Works

Imagine a circular race track. If one runner goes twice as fast, they'll eventually meet again.

In a linked list cycle:
- Fast enters the cycle first
- Once both are in the cycle, fast catches slow at 1 step per iteration
- They MUST meet

---

### The Algorithm

slow = fast = head

while fast and fast.next:
    slow = slow.next       # 1 step
    fast = fast.next.next  # 2 steps
    if slow == fast:
        return True  # cycle!

return False  # reached end

---

### The Pattern

Floyd's algorithm also helps:
- Find cycle start point
- Find duplicate number (array version)
- Find linked list middle

Two-pointer techniques are powerful!

Now implement it! 🐢🐰`,
                theoryContent: `## Floyd's Cycle Detection

### Algorithm
slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        return True
return False

### Why It Works
Fast gains 1 node per iteration.
If cycle length is k, they meet within k iterations after both enter.

### Finding Cycle Start
When they meet:
1. Reset slow to head
2. Move both at speed 1
3. They meet at cycle start

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "rearrange-list": {
                storyContent: `## Reorder List

*Combine multiple linked list techniques in one problem.*

Reorder: L0 → L1 → L2 → ... → Ln to L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...

Example: 1→2→3→4→5 becomes 1→5→2→4→3

---

### Breaking It Down

This requires THREE operations:

1. **Find the middle** of the list
2. **Reverse** the second half
3. **Merge** alternating from both halves

---

### Step 1: Find Middle

Use Floyd's slow/fast technique!

When fast reaches the end, slow is at the middle.

---

### Step 2: Reverse Second Half

We just learned this! Reverse from middle to end.

1→2→3→4→5 becomes 1→2→3 and 5→4→3

Wait, 3 is in both... we need to split them.

Before reversing: second = slow.next, slow.next = null

---

### Step 3: Merge Alternating

Weave the two lists together:

First: 1→2→3
Second: 5→4

Result: 1→5→2→4→3

---

### The Pattern

Complex linked list problems often combine:
- Fast/slow pointers (finding middle/cycle)
- Reversal (prev/curr/next)
- Merging (dummy node technique)

Master these building blocks!

Now implement it! 🔗`,
                theoryContent: `## Reorder = Find Middle + Reverse + Merge

### Step 1: Find Middle
slow, fast = head, head
while fast.next and fast.next.next:
    slow = slow.next
    fast = fast.next.next
# slow is at middle

### Step 2: Split and Reverse
second = slow.next
slow.next = None
second = reverse(second)

### Step 3: Merge Alternating
while second:
    tmp1, tmp2 = first.next, second.next
    first.next = second
    second.next = tmp1
    first, second = tmp1, tmp2`
        },

        "trim-end": {
                storyContent: `## Remove Nth Node From End

*One pass? Two passes? There's a clever trick.*

Remove the nth node from the END of a linked list.

1→2→3→4→5, n=2 → 1→2→3→5 (remove 4)

---

### The Obvious Approach

1. Count the length
2. Calculate position from start: length - n
3. Remove that node

But that's two passes through the list.

---

### The One-Pass Trick 💡

Use two pointers with a fixed GAP of n nodes.

When the front pointer reaches the end, the back pointer is at the node BEFORE the one to remove!

---

### The Algorithm

1. Advance "fast" n steps ahead
2. Move both "fast" and "slow" together until fast reaches end
3. slow is now one node before the target
4. Remove: slow.next = slow.next.next

---

### Walking Through

1→2→3→4→5, n=2

Fast moves 2 steps: at node 3
Slow at head: node 1

Move together:
Fast→4, Slow→2
Fast→5, Slow→3
Fast→null, Slow→3

Slow is at 3, remove slow.next (4)
Result: 1→2→3→5 ✓

---

### Edge Case: Remove Head

What if n equals length? We're removing the head!

Use a dummy node before the head. Start slow there.

---

### The Pattern

Fixed-gap two pointers:
- Find nth from end
- Find middle (gap of half)
- Detect cycle start

Now implement it! 🎯`,
                theoryContent: `## Two Pointers with Gap

### Algorithm
dummy = ListNode(0, head)
fast = slow = dummy

# Create gap of n+1
for _ in range(n + 1):
    fast = fast.next

# Move together
while fast:
    slow = slow.next
    fast = fast.next

# Remove
slow.next = slow.next.next
return dummy.next

### Why n+1?
We want slow to be ONE BEFORE the target.

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "clone-random": {
                storyContent: `## Copy List with Random Pointer

*Deep copy a tricky data structure.*

Each node has next pointer AND a random pointer to any node in the list.

Create a deep copy (new nodes, same structure).

---

### The Challenge

When you create node copies, how do you set the random pointers?

The target might not exist yet! Or might not have a copy yet!

---

### Approach 1: Hash Map

Pass 1: Create copies of all nodes. Map original → copy.
Pass 2: Set pointers using the map.

copy.next = map[original.next]
copy.random = map[original.random]

This works but uses O(n) extra space.

---

### Approach 2: Interweaving (Clever!) 💡

Weave copies between originals:

A → A' → B → B' → C → C'

Now copy.random = original.random.next (the copy!)

---

### The Interweaving Algorithm

Step 1: Create copies and interweave
A → B → C becomes A → A' → B → B' → C → C'

Step 2: Set random pointers
A'.random = A.random.next (which is the copy!)

Step 3: Separate the lists
Extract A' → B' → C' and restore A → B → C

---

### Walking Through

Original: A(→C) → B(→A) → C(→B)

After interweave: A → A' → B → B' → C → C'

Set randoms:
A'.random = A.random.next = C.next = C'
B'.random = B.random.next = A.next = A'
C'.random = C.random.next = B.next = B'

Separate: A' → B' → C' with correct randoms!

---

### The Pattern

Interweaving lets you establish relationships between original and copy without extra space.

This technique appears in various cloning/copying problems.

Now implement it! 🎭`,
                theoryContent: `## Clone with Random Pointer

### Hash Map Approach
map = {}
curr = head
while curr:
    map[curr] = Node(curr.val)
    curr = curr.next
curr = head
while curr:
    map[curr].next = map.get(curr.next)
    map[curr].random = map.get(curr.random)
    curr = curr.next

### Interweaving Approach
1. Insert copies: A→A'→B→B'→C→C'
2. Set randoms: copy.random = orig.random.next
3. Separate lists

### Complexity
- Hash Map: O(n) time, O(n) space
- Interweaving: O(n) time, O(1) space`
        },

        "add-lists": {
                storyContent: `## Add Two Numbers

*Numbers stored in reverse order in linked lists.*

342 is stored as 2→4→3
465 is stored as 5→6→4

Sum: 342 + 465 = 807 → 7→0→8

---

### Why Reverse Order?

It's actually EASIER! The least significant digit is first.

We can add digit by digit from head to end, carrying as we go.

Just like elementary school addition!

---

### The Algorithm

1. Set carry = 0
2. While l1 OR l2 OR carry:
   - sum = (l1.val or 0) + (l2.val or 0) + carry
   - new digit = sum % 10
   - carry = sum / 10
   - create new node, advance pointers
3. Return result

---

### Walking Through

2→4→3 (342) + 5→6→4 (465)

2+5+0 = 7, carry=0 → 7
4+6+0 = 10, digit=0, carry=1 → 7→0
3+4+1 = 8, carry=0 → 7→0→8

Result: 7→0→8 = 807 ✓

---

### Edge Cases

- Different lengths: treat missing digits as 0
- Final carry: 99 + 1 = 100, don't forget the last carry!

---

### The Pattern

Digit-by-digit operations with carry:
- Addition
- Multiplication
- Base conversion

The carry pattern is universal!

Now implement it! ➕`,
                theoryContent: `## Linked List Addition

### Algorithm
dummy = curr = ListNode(0)
carry = 0

while l1 or l2 or carry:
    val1 = l1.val if l1 else 0
    val2 = l2.val if l2 else 0
    
    total = val1 + val2 + carry
    carry = total // 10
    curr.next = ListNode(total % 10)
    
    curr = curr.next
    l1 = l1.next if l1 else None
    l2 = l2.next if l2 else None

return dummy.next

### Complexity
- Time: O(max(m, n))
- Space: O(max(m, n)) for result`
        },

        "find-clone": {
                storyContent: `## Find the Duplicate Number

*Floyd's algorithm... in an ARRAY?*

Array of n+1 integers in range [1, n]. One number appears twice. Find it.

[1, 3, 4, 2, 2] → 2

**Constraints**: O(1) space, can't modify array.

---

### Why This Is a Linked List Problem

Treat array indices as nodes, values as next pointers!

index 0: value 1 → go to index 1
index 1: value 3 → go to index 3
index 2: value 4 → go to index 4
index 3: value 2 → go to index 2
index 4: value 2 → go to index 2

See? There's a cycle because 2 appears twice!

---

### The Cycle Connection 💡

The duplicate number is where multiple "arrows" point.

That's exactly the start of a cycle (like in linked list)!

---

### Floyd's Algorithm

Phase 1: Find where slow and fast meet (proves cycle exists)

slow = fast = nums[0]
while True:
    slow = nums[slow]
    fast = nums[nums[fast]]
    if slow == fast: break

Phase 2: Find cycle start (the duplicate!)

slow = nums[0]
while slow != fast:
    slow = nums[slow]
    fast = nums[fast]

return slow

---

### Why This Works

This is EXACTLY the linked list cycle detection problem.

- Array values are like next pointers
- Duplicate means two nodes point to same location
- Cycle start = duplicate number

---

### The Pattern

Array-as-linked-list thinking:
- Index = node
- Value = next pointer

When you see constraints that eliminate obvious approaches, think of clever reinterpretations!

Now implement it! 🔍`,
                theoryContent: `## Array as Linked List

### Key Insight
Array of size n+1 with values in [1,n]
= Linked list with guaranteed cycle

index → value → next index

### Floyd's Algorithm
# Phase 1: Find meeting point
slow = fast = nums[0]
while True:
    slow = nums[slow]
    fast = nums[nums[fast]]
    if slow == fast: break

# Phase 2: Find cycle start
slow = nums[0]
while slow != fast:
    slow = nums[slow]
    fast = nums[fast]
return slow

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "memory-cache": {
                storyContent: `## LRU Cache

*The most famous data structure design problem.*

Design a cache with:
- get(key): return value, mark as recently used
- put(key, value): insert/update, evict least recently used if at capacity

Both operations must be O(1)!

---

### The Challenge

O(1) put/get suggests hash map.

But how do we track "least recently used" in O(1)?

---

### The Key Insight 💡

Use a DOUBLY LINKED LIST to track access order!

Most recently used at head, least recently used at tail.

Every access moves the node to the head.

Eviction removes from tail.

---

### The Data Structure

Hash Map: key → node reference (for O(1) lookup)
Doubly Linked List: maintains access order

Each node: key, value, prev, next

---

### The Operations

**get(key)**:
1. Look up node in map
2. Move node to front of list
3. Return value

**put(key, value)**:
1. If key exists: update value, move to front
2. If new key: create node, add to map, add to front
3. If at capacity: remove tail node, delete from map

---

### Why Doubly Linked?

We need to remove nodes from the middle in O(1).

With a doubly linked list:
- Given a node, we can access prev and next
- Remove: prev.next = node.next, next.prev = node.prev

Single linked list would require O(n) to find the predecessor.

---

### Implementation Tips

Use dummy head and tail nodes to avoid edge cases!

dummy_head ↔ node1 ↔ node2 ↔ ... ↔ dummy_tail

No special cases for empty list or single element.

---

### The Pattern

HashMap + DoublyLinkedList = O(1) everything with ordering.

This pattern appears in:
- LFU Cache
- Browser history
- Undo systems

Now implement it carefully! 🧠`,
                theoryContent: `## LRU Cache Design

### Data Structure
HashMap<key, Node>
DoublyLinkedList (access order)

### Node Structure
class Node:
    key, value
    prev, next

### Key Operations
get(key):
    if key not in map: return -1
    move_to_front(node)
    return node.value

put(key, value):
    if key in map:
        update node, move_to_front
    else:
        create node, add to map
        add_to_front(node)
        if over capacity:
            remove_from_tail()

### Complexity
- get: O(1)
- put: O(1)
- Space: O(capacity)`
        },

        "merge-many": {
                storyContent: `## Merge K Sorted Lists

*Scale the merge operation to K lists.*

Given k sorted linked lists, merge them into one sorted list.

[[1,4,5], [1,3,4], [2,6]] → [1,1,2,3,4,4,5,6]

---

### Approach 1: Merge One by One

Merge list1 with list2 → result
Merge result with list3 → result
... and so on

Time: O(kN) where N is total nodes. Works but not optimal.

---

### Approach 2: Divide and Conquer 💡

Like merge sort! Pair up the lists and merge.

Round 1: Merge k lists into k/2 lists
Round 2: Merge k/2 lists into k/4 lists
... until one list remains

Time: O(N log k) - much better!

---

### Approach 3: Min Heap

Use a min heap to always get the smallest head.

1. Add first node of each list to heap
2. Pop smallest, add to result
3. Push that node's next (if exists)
4. Repeat until heap empty

Time: O(N log k) - heap operations are log k

---

### Comparing Approaches

| Method | Time | Space |
|--------|------|-------|
| One by one | O(kN) | O(1) |
| Divide & Conquer | O(N log k) | O(log k) recursion |
| Min Heap | O(N log k) | O(k) for heap |

---

### The Pattern

When scaling a pairwise operation to K elements:
- Divide and conquer (like merge sort)
- Priority queue for selecting best among K

Both achieve log k factor instead of k.

Now implement it! 🏆`,
                theoryContent: `## Merge K Lists

### Divide and Conquer
def mergeKLists(lists):
    if not lists: return None
    while len(lists) > 1:
        merged = []
        for i in range(0, len(lists), 2):
            l1 = lists[i]
            l2 = lists[i+1] if i+1 < len(lists) else None
            merged.append(merge2(l1, l2))
        lists = merged
    return lists[0]

### Min Heap
heap = [(node.val, i, node) for i, node in enumerate(lists) if node]
heapify(heap)
while heap:
    val, i, node = heappop(heap)
    tail.next = node
    tail = tail.next
    if node.next:
        heappush(heap, (node.next.val, i, node.next))

### Complexity
- Time: O(N log k)
- Space: O(k) or O(log k)`
        },

        "group-flip": {
                storyContent: `## Reverse Nodes in K-Group

*The hardest linked list problem. Combines everything.*

Reverse every k nodes. If remaining nodes < k, leave them as-is.

1→2→3→4→5, k=2 → 2→1→4→3→5
1→2→3→4→5, k=3 → 3→2→1→4→5

---

### The Challenge

We need to:
1. Process k nodes at a time
2. Reverse each group
3. Connect groups together
4. Know when to stop (fewer than k nodes left)

---

### The Algorithm

1. Count if k nodes remain
2. Reverse next k nodes
3. Connect previous group's tail to new group's head
4. Move to next group
5. Repeat

---

### The Reversal Sub-Problem

Reverse k nodes starting from a given node:

prev = None
curr = start
for i in range(k):
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next

After reversal:
- prev is the new head
- start is now the new tail
- curr is the next group's head

---

### Connecting Groups

Before reversal of group 2:
group1_tail → group2_start → ... → group2_end → group3_start

After reversal:
group1_tail → group2_end → ... → group2_start → group3_start

So: 
- group1_tail.next = prev (new head of reversed group)
- start.next = curr (connect to next group)

---

### Walking Through k=2

1→2→3→4→5

Reverse 1→2: 2→1, connect to head
Result: 2→1→3→4→5

Reverse 3→4: 4→3, connect 1→4
Result: 2→1→4→3→5

Only 5 remaining (< 2): stop
Final: 2→1→4→3→5 ✓

---

### The Pattern

Complex linked list = combine primitives:
- Counting k nodes
- K-node reversal
- Reconnecting segments

This is the ultimate test of linked list mastery!

Now implement it! 🏆`,
                theoryContent: `## Reverse K-Group

### Algorithm Outline
dummy = ListNode(0, head)
group_prev = dummy

while True:
    # Check if k nodes remain
    kth = get_kth(group_prev, k)
    if not kth: break
    
    group_next = kth.next
    
    # Reverse group
    prev, curr = kth.next, group_prev.next
    while curr != group_next:
        tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp
    
    # Connect
    tmp = group_prev.next
    group_prev.next = kth
    group_prev = tmp

return dummy.next

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        // ============================================
        // BRANCHING PATHS (Trees)
        // ============================================

        "mirror-tree": {
                storyContent: `## Invert Binary Tree

*The problem that allegedly cost a developer a job at Google.*

Swap every left and right child in a binary tree.

    4           4
   / \\   →   / \\
  2   7     7   2
 / \\ / \\   / \\ / \\
1  3 6  9 9  6 3  1

---

### The Recursive Insight 💡

To invert a tree:
1. Swap the left and right children
2. Recursively invert the left subtree
3. Recursively invert the right subtree

That's it!

---

### The Algorithm

def invert(root):
    if not root:
        return None
    
    root.left, root.right = root.right, root.left
    
    invert(root.left)
    invert(root.right)
    
    return root

---

### The Pattern

Tree recursion = do something at current node + recurse on children.

This applies to almost every tree problem!

Now implement it! 🌳`,
                theoryContent: `## Tree Recursion Basics

### Template
def solve(node):
    if not node: return base_case
    
    # Process current node
    # Recurse on children
    
    return result

### For Invert
- Process: swap left and right
- Recurse: invert both children

### Complexity
- Time: O(n)
- Space: O(h) recursion stack`
        },

        "tree-depth": {
                storyContent: `## Maximum Depth of Binary Tree

*The classic introduction to tree recursion.*

Find the maximum depth (number of nodes along the longest path from root to leaf).

    3        depth = 3
   / \\
  9  20
    /  \\
   15   7

---

### The Recursive Insight 💡

The depth of a tree = 1 + max(depth of left, depth of right)

Base case: null node has depth 0.

---

### The Algorithm

def maxDepth(root):
    if not root:
        return 0
    
    left_depth = maxDepth(root.left)
    right_depth = maxDepth(root.right)
    
    return 1 + max(left_depth, right_depth)

---

### Iterative Alternative

Use BFS (level order traversal).

Count levels = depth!

---

### The Pattern

"Height/depth of tree" → recursive max of children + 1.

Now implement it! 📏`,
                theoryContent: `## Tree Depth Recursion

### Recursive
depth(node) = 1 + max(depth(left), depth(right))
depth(null) = 0

### Iterative (BFS)
levels = 0
while queue not empty:
    process entire level
    levels += 1
return levels

### Complexity
- Time: O(n)
- Space: O(h) or O(w)`
        },

        "tree-width": {
                storyContent: `## Diameter of Binary Tree

*Length of the longest path between any two nodes.*

The path doesn't have to go through the root!

    1        diameter = 3
   / \\      (path: 4-2-1-3 or 5-2-1-3)
  2   3
 / \\
4   5

---

### The Key Insight 💡

At each node, the longest path THROUGH that node is:

left_height + right_height

The overall diameter is the maximum across all nodes.

---

### The Trick

Calculate height AND track diameter simultaneously!

def height(node):
    if not node: return 0
    
    left_h = height(node.left)
    right_h = height(node.right)
    
    # Update diameter if this path is longer
    diameter = max(diameter, left_h + right_h)
    
    return 1 + max(left_h, right_h)

---

### The Pattern

When you need to calculate something at each node while also computing a global result, use a global variable or pass state through.

Now implement it! 📐`,
                theoryContent: `## Diameter = Height with Side Effect

### Key Insight
At each node: diameter through it = left_height + right_height

### Algorithm
diameter = 0
def height(node):
    if not node: return 0
    l, r = height(left), height(right)
    diameter = max(diameter, l + r)
    return 1 + max(l, r)

### Complexity
- Time: O(n)
- Space: O(h)`
        },

        "tree-balance": {
                storyContent: `## Balanced Binary Tree

*Check if any node's subtrees differ in height by more than 1.*

Balanced:      Unbalanced:
    3              1
   / \\              \\
  9  20              2
    /  \\              \\
   15   7              3

---

### The Naive Way

For each node, calculate height of left and right subtrees.

But that's O(n²) - we recalculate heights repeatedly!

---

### The Better Way 💡

Calculate height while also checking balance.

Return -1 if subtree is unbalanced, otherwise return height.

def checkHeight(node):
    if not node: return 0
    
    left_h = checkHeight(node.left)
    if left_h == -1: return -1  # left unbalanced
    
    right_h = checkHeight(node.right)
    if right_h == -1: return -1  # right unbalanced
    
    if abs(left_h - right_h) > 1:
        return -1  # this node unbalanced
    
    return 1 + max(left_h, right_h)

---

### The Pattern

Use return value for multiple purposes (height + is_balanced).

-1 signals "unbalanced" and propagates up.

Now implement it! ⚖️`,
                theoryContent: `## Balanced Check Optimization

### Key Insight
Return -1 for unbalanced, height for balanced.
Early termination on first unbalanced.

### Algorithm
def check(node):
    if not node: return 0
    l = check(left)
    if l == -1: return -1
    r = check(right)
    if r == -1: return -1
    if abs(l-r) > 1: return -1
    return 1 + max(l, r)

### Complexity
- Time: O(n)
- Space: O(h)`
        },

        "twin-trees": {
                storyContent: `## Same Tree

*Check if two trees are structurally identical with same values.*

Simple but important pattern!

---

### The Recursive Logic 💡

Two trees are the same if:
1. Both are null, OR
2. Values match AND left subtrees match AND right subtrees match

---

### The Algorithm

def isSameTree(p, q):
    if not p and not q:
        return True
    
    if not p or not q:
        return False
    
    if p.val != q.val:
        return False
    
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)

---

### The Pattern

Comparing trees = compare roots + recursively compare children.

This pattern extends to:
- Subtree checking
- Symmetric tree
- Comparing BSTs

Now implement it! 🌲🌲`,
                theoryContent: `## Tree Comparison

### Cases
1. Both null → True
2. One null → False
3. Values differ → False
4. Both exist, same value → recurse

### Algorithm
same(p, q) = 
    (p is null and q is null) or
    (both exist and p.val == q.val and 
     same(p.left, q.left) and 
     same(p.right, q.right))

### Complexity
- Time: O(min(n, m))
- Space: O(min(h1, h2))`
        },

        "tree-in-tree": {
                storyContent: `## Subtree of Another Tree

*Check if one tree is a subtree of another.*

Tree s is a subtree of tree t if there exists a node in t such that the subtree rooted there is identical to s.

---

### The Approach 💡

For each node in t, check if it's the root of a subtree identical to s.

isSubtree(t, s) = sameTree(t, s) OR isSubtree(t.left, s) OR isSubtree(t.right, s)

---

### The Algorithm

def isSubtree(root, subRoot):
    if not root:
        return False
    
    if sameTree(root, subRoot):
        return True
    
    return isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)

---

### The Complexity

Naive: O(m × n) where we potentially compare s at each node of t.

Can be optimized with tree hashing but usually not needed in interviews.

Now implement it! 🌳←🌲`,
                theoryContent: `## Subtree Check

### Algorithm
def isSubtree(root, subRoot):
    if not root: return False
    if sameTree(root, subRoot): return True
    return isSubtree(root.left, subRoot) or 
           isSubtree(root.right, subRoot)

### Complexity
- Time: O(m × n) worst case
- Space: O(h)

### Optimization
Use tree hashing for O(m + n)`
        },

        "common-parent": {
                storyContent: `## Lowest Common Ancestor of BST

*Find the lowest node that has both p and q as descendants.*

For BST, we can use the BST property!

---

### The BST Insight 💡

In a BST, at each node:
- If both p and q are smaller → LCA is in left subtree
- If both p and q are larger → LCA is in right subtree
- Otherwise → current node IS the LCA!

---

### Why It Works

If p and q are on opposite sides (or one equals current), then current is where their paths diverge/meet.

---

### The Algorithm

def lowestCommonAncestor(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root

---

### The Pattern

BST problems often simplify to comparisons with current node.

- Both left → go left
- Both right → go right  
- Split → found it!

Now implement it! 🎯`,
                theoryContent: `## LCA in BST

### Key Insight
BST property guides us:
p, q < root → go left
p, q > root → go right
else → this is LCA

### Algorithm
while root:
    if p < root and q < root:
        root = root.left
    elif p > root and q > root:
        root = root.right
    else:
        return root

### Complexity
- Time: O(h)
- Space: O(1)`
        },

        "level-scan": {
                storyContent: `## Binary Tree Level Order Traversal

*BFS on trees - visit level by level.*

Return values grouped by level.

    3             [[3],
   / \\      →    [9,20],
  9  20           [15,7]]
    /  \\
   15   7

---

### The BFS Approach 💡

Use a queue! Process nodes level by level.

Key: at each level, we process ALL nodes currently in queue.

---

### The Algorithm

def levelOrder(root):
    if not root: return []
    
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        level_values = []
        
        for _ in range(level_size):
            node = queue.pop(0)
            level_values.append(node.val)
            
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        
        result.append(level_values)
    
    return result

---

### The Pattern

Level-by-level BFS:
1. Record queue size at start of level
2. Process exactly that many nodes
3. Each adds its children for next level

Now implement it! 📊`,
                theoryContent: `## Level Order (BFS)

### Algorithm
queue = [root]
while queue:
    level_size = len(queue)
    level = []
    for _ in range(level_size):
        node = queue.pop(0)
        level.append(node.val)
        add children to queue
    result.append(level)

### Complexity
- Time: O(n)
- Space: O(w) max width`
        },

        "right-view": {
                storyContent: `## Binary Tree Right Side View

*What do you see looking from the right?*

Return the values visible from the right side.

    1            [1, 3, 4]
   / \\
  2   3
   \\   
    5  4

---

### The Insight 💡

At each level, we want the RIGHTMOST node.

Use level order traversal, but only keep the last node of each level!

---

### The Algorithm

def rightSideView(root):
    if not root: return []
    
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        
        for i in range(level_size):
            node = queue.pop(0)
            
            if i == level_size - 1:  # last in level
                result.append(node.val)
            
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
    
    return result

---

### Alternative: DFS

DFS that goes right first. First node at each depth is the rightmost!

Track max depth seen. If current depth > max, add to result.

Now implement it! 👁️`,
                theoryContent: `## Right Side View

### BFS Approach
Level order, take last node of each level.

### DFS Approach (Right-first)
def dfs(node, depth):
    if depth == len(result):
        result.append(node.val)
    dfs(right, depth+1)
    dfs(left, depth+1)

Go right first → first node at each depth is rightmost.

### Complexity
- Time: O(n)
- Space: O(h) or O(w)`
        },

        "good-nodes": {
                storyContent: `## Count Good Nodes in Binary Tree

*A node is "good" if no node on the path from root has a greater value.*

    3           Good: 3, 4, 5 = 3 nodes
   / \\          (3 is root, always good)
  1   4         (4 > 3, good)
 /   / \\        (5 > 4 > 3, good)
3   1   5       (1 < 3, not good)

---

### The Insight 💡

Track the maximum value seen on the path from root.

A node is good if its value >= path max.

---

### The Algorithm

def goodNodes(root):
    def dfs(node, path_max):
        if not node:
            return 0
        
        good = 1 if node.val >= path_max else 0
        new_max = max(path_max, node.val)
        
        return good + dfs(node.left, new_max) + dfs(node.right, new_max)
    
    return dfs(root, root.val)

---

### The Pattern

Pass context DOWN (path_max) and collect results UP (count).

This pattern works for many "path property" problems.

Now implement it! ✅`,
                theoryContent: `## Good Nodes with Path Context

### Key Insight
Pass max value on current path as parameter.
Node is good if val >= path_max.

### Algorithm
def dfs(node, path_max):
    if not node: return 0
    good = 1 if node.val >= path_max else 0
    new_max = max(path_max, node.val)
    return good + dfs(left, new_max) + dfs(right, new_max)

### Complexity
- Time: O(n)
- Space: O(h)`
        },

        "valid-bst": {
                storyContent: `## Validate Binary Search Tree

*Every node must satisfy the BST property - not just with its children, but with ALL descendants!*

Invalid:       Valid:
    5            5
   / \\          / \\
  1   4        1   7
     / \\          / \\
    3   6        6   8

The left invalid tree has 4 as right child of 5, but 4 < 5. And 3 is in right subtree but 3 < 5!

---

### The Trap ❌

Only checking node.left < node < node.right is NOT enough!

You need to ensure ALL nodes in left are smaller, ALL in right are larger.

---

### The Insight 💡

Pass down valid RANGE for each node.

def isValidBST(node, min_val, max_val):
    if not node: return True
    
    if node.val <= min_val or node.val >= max_val:
        return False
    
    return isValidBST(node.left, min_val, node.val) and 
           isValidBST(node.right, node.val, max_val)

Call with: isValidBST(root, -infinity, +infinity)

---

### Alternative: Inorder

Inorder traversal of BST produces sorted sequence.

Check that each value is greater than the previous!

Now implement it! ✓`,
                theoryContent: `## BST Validation

### Range Approach
isValid(node, min, max):
    if not node: return True
    if node.val <= min or node.val >= max: return False
    return isValid(left, min, node.val) and
           isValid(right, node.val, max)

### Inorder Approach
Inorder traversal must be strictly increasing.

### Complexity
- Time: O(n)
- Space: O(h)`
        },

        "kth-smallest": {
                storyContent: `## Kth Smallest Element in BST

*Use the BST property to find it efficiently.*

In a BST, inorder traversal gives sorted order!

---

### The Insight 💡

Do inorder traversal, count nodes, stop at k.

---

### The Algorithm

def kthSmallest(root, k):
    count = 0
    result = None
    
    def inorder(node):
        nonlocal count, result
        if not node or result is not None:
            return
        
        inorder(node.left)
        
        count += 1
        if count == k:
            result = node.val
            return
        
        inorder(node.right)
    
    inorder(root)
    return result

---

### Optimization

If you need to answer many kth queries:
- Augment each node with subtree size
- Use size to navigate directly to kth

Now implement it! 🔢`,
                theoryContent: `## Kth Smallest via Inorder

### Key Insight
Inorder of BST = sorted order.
Stop at the kth node.

### Algorithm
count = 0
def inorder(node):
    if not node: return
    inorder(left)
    count += 1
    if count == k: 
        result = node.val
        return
    inorder(right)

### Complexity
- Time: O(h + k)
- Space: O(h)`
        },

        "build-tree": {
                storyContent: `## Construct Binary Tree from Preorder and Inorder

*Rebuild the tree from traversal results.*

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

           3
          / \\
         9  20
           /  \\
          15   7

---

### The Key Insights 💡

1. **Preorder's first element is the root** (always!)
2. **Inorder splits left and right subtrees** (everything left of root is left subtree)

---

### The Algorithm

1. First of preorder = root (3)
2. Find root in inorder: index 1
3. Left of that in inorder = left subtree: [9]
4. Right of that in inorder = right subtree: [15,20,7]
5. Recursively build left and right

---

### Implementation

def buildTree(preorder, inorder):
    if not preorder or not inorder:
        return None
    
    root = TreeNode(preorder[0])
    mid = inorder.index(preorder[0])
    
    root.left = buildTree(preorder[1:mid+1], inorder[:mid])
    root.right = buildTree(preorder[mid+1:], inorder[mid+1:])
    
    return root

---

### Optimization

Use a hash map for inorder indices to avoid O(n) index lookup.

Now implement it! 🏗️`,
                theoryContent: `## Tree Construction

### Key Insight
Preorder: first = root
Inorder: root position splits left/right

### Algorithm
1. preorder[0] = root
2. Find root in inorder at index i
3. Left subtree: preorder[1:i+1], inorder[:i]
4. Right subtree: preorder[i+1:], inorder[i+1:]
5. Recurse

### Optimization
Use hashmap for inorder indices

### Complexity
- Time: O(n) with hashmap
- Space: O(n)`
        },

        "max-path": {
                storyContent: `## Binary Tree Maximum Path Sum

*The HARDEST tree problem. Path can start and end anywhere!*

A path is any sequence of connected nodes. Find the maximum sum.

       -10        Max: 42 (15 + 20 + 7)
       / \\
      9  20
        /  \\
       15   7

---

### The Challenge

The path doesn't have to go through root!

At each node, we have choices:
- Use just this node
- Extend left path
- Extend right path
- Use both sides (this node as the "peak")

---

### The Key Insight 💡

For each node, calculate:
1. Max path WITH this node as the top (could use both children)
2. Max path that can be EXTENDED upward (only one child allowed)

Return #2 to parent, track #1 for answer.

---

### The Algorithm

max_sum = -infinity

def maxGain(node):
    if not node: return 0
    
    # Max gain from each subtree (0 if negative)
    left = max(maxGain(node.left), 0)
    right = max(maxGain(node.right), 0)
    
    # Path through this node as peak
    price_newpath = node.val + left + right
    max_sum = max(max_sum, price_newpath)
    
    # Return max extendable path
    return node.val + max(left, right)

---

### Why max(gain, 0)?

If a subtree has negative max gain, better to not include it at all!

Now implement it carefully! 🏆`,
                theoryContent: `## Max Path Sum

### Two Calculations
1. Path with node as peak: val + left + right
2. Extendable path to parent: val + max(left, right)

### Algorithm
def maxGain(node):
    if not node: return 0
    left = max(maxGain(left), 0)
    right = max(maxGain(right), 0)
    max_sum = max(max_sum, val + left + right)
    return val + max(left, right)

### Key: max(gain, 0)
Ignore negative paths!

### Complexity
- Time: O(n)
- Space: O(h)`
        },

        "pack-tree": {
                storyContent: `## Serialize and Deserialize Binary Tree

*Convert tree to string and back.*

Design an algorithm to serialize and deserialize a binary tree.

    1           "1,2,null,null,3,4,null,null,5,null,null"
   / \\
  2   3
     / \\
    4   5

---

### The Approach 💡

Use preorder traversal. Include "null" markers for missing children.

Serialize: preorder with nulls
Deserialize: rebuild using the same order

---

### Serialize

def serialize(root):
    result = []
    
    def preorder(node):
        if not node:
            result.append("null")
            return
        result.append(str(node.val))
        preorder(node.left)
        preorder(node.right)
    
    preorder(root)
    return ",".join(result)

---

### Deserialize

def deserialize(data):
    vals = iter(data.split(","))
    
    def build():
        val = next(vals)
        if val == "null":
            return None
        node = TreeNode(int(val))
        node.left = build()
        node.right = build()
        return node
    
    return build()

---

### Why Preorder Works

The first element is always the root. The nulls tell us exactly when to stop building the left subtree and start the right.

Now implement it! 📦↔️🌳`,
                theoryContent: `## Serialize/Deserialize Tree

### Serialize (Preorder)
def serialize(node):
    if not node: return "null"
    return f"{node.val},{serialize(left)},{serialize(right)}"

### Deserialize
vals = data.split(",")
def build():
    val = next(vals)
    if val == "null": return None
    node = TreeNode(val)
    node.left = build()
    node.right = build()
    return node

### Complexity
- Time: O(n)
- Space: O(n)`
        },

        // ============================================
        // PRIORITY LANES (Heap / Priority Queue)
        // ============================================

        "kth-stream": {
                storyContent: `## Kth Largest Element in a Stream

*Maintain the kth largest as new elements arrive.*

Design a class that finds the kth largest element in a stream.

KthLargest(3, [4,5,8,2]) // k=3, initial = [4,5,8,2]
add(3) → 4  (stream: 2,3,4,5,8 → 3rd largest = 4)
add(5) → 5  (stream: 2,3,4,5,5,8 → 3rd largest = 5)
add(10) → 5 (stream: 2,3,4,5,5,8,10 → 3rd largest = 5)

---

### The Naive Approach ❌

Sort after each insertion. O(n log n) per add.

That's too slow for a stream!

---

### The Heap Insight 💡

Keep a MIN-HEAP of size k!

The heap contains the k LARGEST elements.
The SMALLEST of those (heap top) is the kth largest!

---

### Why Min Heap?

We want to discard elements that are too small.

- If new element > heap top: it's in the top k! Add it, remove old top.
- If new element ≤ heap top: it's not in top k. Ignore it.

---

### The Algorithm

def __init__(self, k, nums):
    self.heap = nums
    self.k = k
    heapify(self.heap)
    while len(self.heap) > k:
        heappop(self.heap)

def add(self, val):
    heappush(self.heap, val)
    if len(self.heap) > self.k:
        heappop(self.heap)
    return self.heap[0]

---

### The Pattern

"Top K" problems → use a heap of size K:
- Min heap for K largest
- Max heap for K smallest

Now implement it! 📈`,
                theoryContent: `## Min Heap for Top K

### Key Insight
Min heap of size k = top k values.
Heap[0] = kth largest.

### Add Operation
heappush(val)
if len > k: heappop()
return heap[0]

### Complexity
- Add: O(log k)
- Space: O(k)`
        },

        "stone-weight": {
                storyContent: `## Last Stone Weight

*Smash stones together, heaviest first.*

Take two heaviest stones, smash them:
- Equal weight: both destroyed
- Different weight: heavier survives with difference

Return weight of last stone (or 0).

stones = [2,7,4,1,8,1]
Smash 8,7 → 1. Stones: [2,4,1,1,1]
Smash 4,2 → 2. Stones: [2,1,1,1]
Smash 2,1 → 1. Stones: [1,1,1]
Smash 1,1 → 0. Stones: [1]
Answer: 1

---

### The Heap Solution 💡

Use a MAX-HEAP to always get the two heaviest!

(In Python, use negative values with min heap)

---

### The Algorithm

def lastStoneWeight(stones):
    # Make negative for max heap behavior
    heap = [-s for s in stones]
    heapify(heap)
    
    while len(heap) > 1:
        first = -heappop(heap)
        second = -heappop(heap)
        
        if first != second:
            heappush(heap, -(first - second))
    
    return -heap[0] if heap else 0

---

### The Pattern

When you need repeated access to max/min: use a heap!

Now implement it! 🪨`,
                theoryContent: `## Max Heap Simulation

### Algorithm
heap = [-s for s in stones]  # negate for max heap
heapify(heap)

while len(heap) > 1:
    a = -heappop(heap)
    b = -heappop(heap)
    if a != b:
        heappush(heap, -(a-b))

return -heap[0] if heap else 0

### Complexity
- Time: O(n log n)
- Space: O(n)`
        },

        "nearest-points": {
                storyContent: `## K Closest Points to Origin

*Find k points nearest to (0, 0).*

points = [[1,3], [-2,2]], k = 1
Distances: √10, √8
Answer: [[-2,2]]

---

### The Sorting Approach

Sort by distance, take first k. O(n log n).

Works, but can we do better?

---

### The Heap Approach 💡

Use a MAX-HEAP of size k.

Keep track of k closest so far. If a new point is closer than the farthest in our set (heap top), swap them.

---

### Why Max Heap?

We want to remove the FARTHEST of our k candidates.

Max heap gives us O(1) access to the farthest!

---

### The Algorithm

def kClosest(points, k):
    heap = []  # max heap (negative distance)
    
    for x, y in points:
        dist = -(x*x + y*y)  # negative for max heap
        
        if len(heap) < k:
            heappush(heap, (dist, [x, y]))
        elif dist > heap[0][0]:  # closer than current farthest
            heapreplace(heap, (dist, [x, y]))
    
    return [p for d, p in heap]

---

### The Pattern

"K closest/smallest" → max heap of size K
"K farthest/largest" → min heap of size K

Only the "border" element matters for comparison!

Now implement it! 📍`,
                theoryContent: `## K Closest with Max Heap

### Key Insight
Max heap of size k for k smallest.
We remove farthest when new closest found.

### Algorithm
for point in points:
    dist = euclidean(point)
    if len(heap) < k:
        heappush(heap, (-dist, point))
    elif -dist > heap[0][0]:
        heapreplace(heap, (-dist, point))

### Complexity
- Time: O(n log k)
- Space: O(k)`
        },

        "kth-array": {
                storyContent: `## Kth Largest Element in Array

*The classic quickselect/heap problem.*

nums = [3,2,1,5,6,4], k = 2
Answer: 5 (2nd largest)

---

### Approach 1: Sort

Sort descending, return index k-1. O(n log n).

---

### Approach 2: Min Heap of Size K 💡

Same as "kth in stream" - maintain k largest elements.

Heap top = kth largest. O(n log k).

---

### Approach 3: Quickselect

Like quicksort, but only recurse on ONE side!

Partition array, check which side contains kth. O(n) average.

---

### Quickselect Idea

Partition around pivot:
- Elements > pivot on left
- Elements < pivot on right

If pivot ends up at index k-1: found it!
If pivot index < k-1: search right side
If pivot index > k-1: search left side

---

### The Tradeoff

| Method | Time Average | Time Worst | Space |
|--------|--------------|------------|-------|
| Sort | O(n log n) | O(n log n) | O(1) |
| Heap | O(n log k) | O(n log k) | O(k) |
| Quickselect | O(n) | O(n²) | O(1) |

Choose based on constraints!

Now implement it! 🎯`,
                theoryContent: `## Kth Largest Approaches

### Heap (O(n log k))
min_heap of size k
for each element:
    if heap_size < k: push
    elif element > heap_top: replace
return heap[0]

### Quickselect (O(n) average)
def quickselect(left, right, k):
    pivot = partition(left, right)
    if pivot == n - k: return nums[pivot]
    elif pivot < n - k: return quickselect(pivot+1, right, k)
    else: return quickselect(left, pivot-1, k)`
        },

        "task-order": {
                storyContent: `## Task Scheduler

*Schedule tasks with cooldown between same tasks.*

tasks = ["A","A","A","B","B","B"], n = 2

A must have 2 tasks between each occurrence.

One valid schedule: A → B → idle → A → B → idle → A → B
Length: 8

---

### The Greedy Insight 💡

Always do the task with the HIGHEST remaining count!

This minimizes idle time by spreading out frequent tasks.

---

### The Approach

Use a max heap to track task counts.

Each "round" of n+1 slots:
1. Pop up to n+1 tasks from heap
2. Do those tasks (decrement counts)
3. Push back tasks with remaining count > 0
4. If round isn't full and tasks remain, add idle time

---

### Implementation

def leastInterval(tasks, n):
    counts = Counter(tasks)
    heap = [-c for c in counts.values()]  # max heap
    heapify(heap)
    
    time = 0
    
    while heap:
        cycle = []
        for _ in range(n + 1):
            if heap:
                count = -heappop(heap)
                if count > 1:
                    cycle.append(-(count - 1))
        
        for item in cycle:
            heappush(heap, item)
        
        # Full cycle or remaining tasks done
        time += n + 1 if heap else len(cycle) + len([c for c in cycle if -c > 0])
    
    return time

---

### The Pattern

Greedy + heap when we need to repeatedly get max/min and update.

Now implement it! ⏰`,
                theoryContent: `## Task Scheduler - Greedy with Heap

### Key Insight
Process most frequent task first.
Each round = n+1 slots.

### Algorithm
1. Count task frequencies
2. Max heap of counts
3. Each cycle: pop up to n+1, execute, push back decremented
4. Add idle if cycle incomplete

### Complexity
- Time: O(n × tasks)
- Space: O(26) = O(1)`
        },

        "tweet-feed": {
                storyContent: `## Design Twitter

*Combine multiple data structures for a real system.*

Implement:
- postTweet(userId, tweetId)
- getNewsFeed(userId) → 10 most recent from user + followees
- follow(followerId, followeeId)
- unfollow(followerId, followeeId)

---

### The Data Structures

1. **User tweets**: userId → list of (timestamp, tweetId)
2. **Following**: userId → set of userIds they follow

---

### The News Feed Challenge 💡

We need the 10 most recent tweets from potentially many users.

This is **Merge K Sorted Lists** but with tweets!

---

### Heap Approach for Feed

1. Get all users this user follows (+ themselves)
2. Get latest tweet from each user
3. Add to min-heap (by timestamp, max 10)
4. Pop smallest, add next from that user
5. Continue until 10 tweets or done

---

### Implementation Outline

class Twitter:
    def __init__(self):
        self.time = 0
        self.tweets = defaultdict(list)  # userId → [(time, tweetId)]
        self.following = defaultdict(set)  # userId → {followeeIds}
    
    def getNewsFeed(self, userId):
        users = self.following[userId] | {userId}
        heap = []  # max heap of latest from each user
        
        for user in users:
            if self.tweets[user]:
                # Add latest tweet
                heap.append((-time, tweetId, user, index))
        
        # Merge k sorted lists to get top 10
        ...

---

### The Pattern

System design often combines:
- Hash maps for lookups
- Sets for relationships
- Heaps for top-k merging

Now implement it! 🐦`,
                theoryContent: `## Twitter Design

### Data Structures
- tweets: userId → [(timestamp, tweetId)]
- following: userId → Set<userId>
- time: global counter for chronological order

### News Feed = Merge K Sorted
Get all followees (+ self)
Use heap to merge their tweets
Return top 10

### Operations
- postTweet: O(1)
- getNewsFeed: O(k log k) where k = followees
- follow/unfollow: O(1)`
        },

        "stream-median": {
                storyContent: `## Find Median from Data Stream

*The HARDEST heap problem. Maintain median dynamically!*

addNum(1) → median = 1
addNum(2) → median = 1.5
addNum(3) → median = 2

---

### The Challenge

Median = middle element(s) of sorted data.

We can't sort after every insertion - too slow!

---

### The Two-Heap Insight 💡

Split numbers into two halves:
- **Small half**: max heap (we want largest of small)
- **Large half**: min heap (we want smallest of large)

Median is between these two "middle" elements!

---

### Maintaining Balance

Keep heaps balanced: sizes differ by at most 1.

When adding:
1. Add to one heap
2. Rebalance if needed

---

### The Algorithm

def addNum(num):
    # Add to max heap (small half)
    heappush(small, -num)
    
    # Ensure max of small ≤ min of large
    if large and -small[0] > large[0]:
        heappush(large, -heappop(small))
    
    # Balance sizes
    if len(small) > len(large) + 1:
        heappush(large, -heappop(small))
    elif len(large) > len(small):
        heappush(small, -heappop(large))

def findMedian():
    if len(small) > len(large):
        return -small[0]
    return (-small[0] + large[0]) / 2

---

### Why This Works

Max heap gives us the largest of the small half.
Min heap gives us the smallest of the large half.

Those are the two middle elements!

Now implement it carefully! 🏆`,
                theoryContent: `## Two Heaps for Median

### Key Insight
small = max heap (lower half)
large = min heap (upper half)

Median = between small[0] and large[0]

### Add Operation
1. Push to small
2. Move to large if small[0] > large[0]
3. Rebalance sizes

### Find Median
if len(small) > len(large): return small[0]
else: return (small[0] + large[0]) / 2

### Complexity
- Add: O(log n)
- Find: O(1)
- Space: O(n)`
        },

        // ============================================
        // TRIAL ERROR (Backtracking)
        // ============================================

        "power-set": {
                storyContent: `## Subsets (Power Set)

*Generate all possible subsets of a set.*

nums = [1, 2, 3]
Output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

---

### The Key Insight 💡

For each element, you have TWO choices:
- Include it in the subset
- Exclude it from the subset

This creates a binary decision tree!

---

### The Backtracking Template

def subsets(nums):
    result = []
    
    def backtrack(index, current):
        if index == len(nums):
            result.append(current[:])
            return
        
        # Choice 1: include nums[index]
        current.append(nums[index])
        backtrack(index + 1, current)
        
        # Choice 2: exclude nums[index]
        current.pop()  # backtrack!
        backtrack(index + 1, current)
    
    backtrack(0, [])
    return result

---

### Visualizing the Tree

                    []
                  /    \\
              [1]       []
             /   \\     /   \\
         [1,2] [1]  [2]   []
           ...

Each leaf is a valid subset!

---

### The Pattern

Backtracking = try → recurse → undo

This is THE template for:
- Subsets
- Permutations
- Combinations
- All path problems

Now implement it! 🌳`,
                theoryContent: `## Backtracking Template

### Core Pattern
def backtrack(state):
    if at_goal:
        record_result()
        return
    
    for choice in choices:
        make_choice()
        backtrack(new_state)
        undo_choice()  # backtrack!

### For Subsets
Each element: include or exclude.
2^n total subsets.

### Complexity
- Time: O(2^n)
- Space: O(n) recursion`
        },

        "sum-combos": {
                storyContent: `## Combination Sum

*Find all combinations that sum to target. Can reuse elements!*

candidates = [2, 3, 6, 7], target = 7
Output: [[2,2,3], [7]]

---

### The Backtracking Approach 💡

At each step:
1. Choose a candidate
2. Subtract from target
3. If target = 0: found a solution!
4. If target < 0: went too far, backtrack
5. Recurse (can use same candidate again!)

---

### The Key: Avoiding Duplicates

Without care, we'd get [2,2,3] AND [2,3,2] AND [3,2,2]...

Solution: only look at candidates from current index onward!

---

### The Algorithm

def combinationSum(candidates, target):
    result = []
    
    def backtrack(start, remaining, path):
        if remaining == 0:
            result.append(path[:])
            return
        
        for i in range(start, len(candidates)):
            if candidates[i] <= remaining:
                path.append(candidates[i])
                backtrack(i, remaining - candidates[i], path)  # i, not i+1!
                path.pop()
    
    backtrack(0, target, [])
    return result

---

### Why start from i, not i+1?

We CAN reuse the same element.

But we DON'T look at earlier elements to avoid duplicate combinations.

Now implement it! 🎯`,
                theoryContent: `## Combination Sum Backtracking

### Key Rules
1. Can reuse elements (recurse with i, not i+1)
2. Don't look back (avoid duplicates)
3. Prune when remaining < 0

### Algorithm
def backtrack(start, remaining, path):
    if remaining == 0: record(path)
    for i in range(start, len):
        if candidates[i] <= remaining:
            path.append(candidates[i])
            backtrack(i, remaining - candidates[i], path)
            path.pop()

### Complexity
- Time: O(n^(t/m)) where t=target, m=min candidate
- Space: O(t/m)`
        },

        "sum-combos-2": {
                storyContent: `## Combination Sum II

*Like Combination Sum, but each number can only be used ONCE.*

Also, candidates may have duplicates!

candidates = [10,1,2,7,6,1,5], target = 8
Output: [[1,1,6], [1,2,5], [1,7], [2,6]]

---

### Two Changes from Combination Sum

1. **Use each element only once**: recurse with i+1, not i
2. **Handle duplicate candidates**: skip duplicate values at same level

---

### The Duplicate Problem

If candidates = [1, 1, 2] and target = 3:
- Path starting with 1st '1': [1,2]
- Path starting with 2nd '1': [1,2]

Same result! We need to skip duplicates at the same decision level.

---

### The Algorithm

def combinationSum2(candidates, target):
    candidates.sort()  # Important for duplicate detection!
    result = []
    
    def backtrack(start, remaining, path):
        if remaining == 0:
            result.append(path[:])
            return
        
        for i in range(start, len(candidates)):
            # Skip duplicates at same level
            if i > start and candidates[i] == candidates[i-1]:
                continue
            
            if candidates[i] > remaining:
                break  # sorted, so all remaining are too large
            
            path.append(candidates[i])
            backtrack(i + 1, remaining - candidates[i], path)  # i+1!
            path.pop()
    
    backtrack(0, target, [])
    return result

---

### The Skip Logic

i > start (not i > 0) means we're looking at siblings, not parent-child.

We allow [1,1,...] but not two separate [1,...] branches with different 1s.

Now implement it! 🎯`,
                theoryContent: `## Combination Sum II - No Reuse

### Key Changes from I
1. Recurse with i+1 (no reuse)
2. Sort + skip duplicates at same level

### Skip Condition
if i > start and candidates[i] == candidates[i-1]:
    continue

### Complexity
- Time: O(2^n)
- Space: O(n)`
        },

        "all-orders": {
                storyContent: `## Permutations

*Generate all possible orderings.*

nums = [1, 2, 3]
Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

---

### Subsets vs Permutations

Subsets: for each element, include or not
Permutations: for each POSITION, which element?

[1,2] and [2,1] are the same subset but different permutations.

---

### The Backtracking Approach 💡

At each position, try every unused number.

Track which numbers are used (or swap in-place).

---

### Algorithm with Used Set

def permute(nums):
    result = []
    
    def backtrack(path, used):
        if len(path) == len(nums):
            result.append(path[:])
            return
        
        for i in range(len(nums)):
            if i in used:
                continue
            
            used.add(i)
            path.append(nums[i])
            backtrack(path, used)
            path.pop()
            used.remove(i)
    
    backtrack([], set())
    return result

---

### Alternative: Swap in Place

def backtrack(first):
    if first == n:
        result.append(nums[:])
    for i in range(first, n):
        nums[first], nums[i] = nums[i], nums[first]
        backtrack(first + 1)
        nums[first], nums[i] = nums[i], nums[first]

This avoids extra space for 'used' set.

Now implement it! 🔄`,
                theoryContent: `## Permutation Backtracking

### With Used Set
def backtrack(path, used):
    if len(path) == n: record
    for i in range(n):
        if i not in used:
            add, recurse, remove

### With Swapping
def backtrack(first):
    if first == n: record
    for i in range(first, n):
        swap(first, i)
        backtrack(first + 1)
        swap(first, i)  # backtrack

### Complexity
- Time: O(n × n!)
- Space: O(n)`
        },

        "power-set-2": {
                storyContent: `## Subsets II

*Subsets but with duplicates in input.*

nums = [1, 2, 2]
Output: [[], [1], [1,2], [1,2,2], [2], [2,2]]

NOT: [[], [1], [1,2], [1,2], [1,2,2], [2], [2], [2,2]]

---

### The Duplicate Problem

If we have [1, 2, 2], how do we avoid generating [1,2] twice?

Same as Combination Sum II: skip duplicates at the same level!

---

### The Algorithm

def subsetsWithDup(nums):
    nums.sort()  # Important!
    result = []
    
    def backtrack(start, path):
        result.append(path[:])
        
        for i in range(start, len(nums)):
            # Skip duplicates at same level
            if i > start and nums[i] == nums[i-1]:
                continue
            
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    
    backtrack(0, [])
    return result

---

### Why Sort First?

Duplicates must be adjacent for our skip logic to work!

### Why i > start?

We skip only if we're choosing among siblings.

[2, 2] is valid (choosing both 2s in sequence).
But at the same decision point, we don't try both 2s separately.

Now implement it! 🎯`,
                theoryContent: `## Subsets with Duplicates

### Key Changes from Subsets I
1. Sort input
2. Skip duplicates at same decision level

### Skip Logic
if i > start and nums[i] == nums[i-1]:
    continue

### Complexity
- Time: O(n × 2^n)
- Space: O(n)`
        },

        "bracket-gen": {
                storyContent: `## Generate Parentheses

*All valid combinations of n pairs of parentheses.*

n = 3
Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

---

### What Makes Parentheses Valid?

1. Equal number of '(' and ')'
2. At any point, open count >= close count

"(()" - invalid (not enough closes)
"())" - invalid (too many closes early)
"(())" - valid!

---

### The Backtracking Insight 💡

Track:
- open: number of '(' used
- close: number of ')' used

Choices at each step:
- Can add '(' if open < n
- Can add ')' if close < open

---

### The Algorithm

def generateParenthesis(n):
    result = []
    
    def backtrack(open, close, path):
        if len(path) == 2 * n:
            result.append(path)
            return
        
        if open < n:
            backtrack(open + 1, close, path + "(")
        
        if close < open:
            backtrack(open, close + 1, path + ")")
    
    backtrack(0, 0, "")
    return result

---

### The Constraint Magic

close < open ensures we never have more ')' than '('.

open < n ensures we don't use too many '('.

These constraints automatically generate only valid combinations!

Now implement it! 🎯`,
                theoryContent: `## Parentheses Generation

### Key Insight
Track open and close counts.
Can add '(' if open < n.
Can add ')' if close < open.

### Algorithm
def backtrack(open, close, path):
    if len == 2n: record
    if open < n: backtrack(open+1, close, path+"(")
    if close < open: backtrack(open, close+1, path+")")

### Complexity
- Time: O(4^n / √n) Catalan number
- Space: O(n)`
        },

        "word-grid": {
                storyContent: `## Word Search

*Find if word exists in grid, moving only adjacent (up/down/left/right).*

board = [["A","B","C","E"],
         ["S","F","C","S"],
         ["A","D","E","E"]]
word = "ABCCED"
Output: true

---

### The Backtracking Approach 💡

For each cell that matches first letter:
1. Mark cell as visited
2. Try all 4 directions for next letter
3. If path completes word: success!
4. If stuck: unmark cell (backtrack)

---

### The Algorithm

def exist(board, word):
    rows, cols = len(board), len(board[0])
    
    def backtrack(r, c, i):
        if i == len(word):
            return True
        
        if (r < 0 or r >= rows or c < 0 or c >= cols or
            board[r][c] != word[i]):
            return False
        
        # Mark as visited
        temp = board[r][c]
        board[r][c] = '#'
        
        # Explore all directions
        found = (backtrack(r+1, c, i+1) or
                 backtrack(r-1, c, i+1) or
                 backtrack(r, c+1, i+1) or
                 backtrack(r, c-1, i+1))
        
        # Restore (backtrack)
        board[r][c] = temp
        
        return found
    
    for r in range(rows):
        for c in range(cols):
            if backtrack(r, c, 0):
                return True
    return False

---

### The Visited Trick

We modify the board in-place to mark visited cells.

This avoids extra space for a visited set!

Now implement it! 🎯`,
                theoryContent: `## Word Search Backtracking

### Strategy
1. Start from each cell matching first letter
2. DFS with backtracking
3. Mark visited in-place (restore after)

### Algorithm
def backtrack(r, c, i):
    if i == len(word): return True
    if out_of_bounds or board[r][c] != word[i]: return False
    
    temp, board[r][c] = board[r][c], '#'
    found = any(backtrack(nr, nc, i+1) for direction)
    board[r][c] = temp
    return found

### Complexity
- Time: O(m × n × 4^L) where L = word length
- Space: O(L) recursion`
        },

        "split-palindrome": {
                storyContent: `## Palindrome Partitioning

*Split string into all possible palindrome substrings.*

s = "aab"
Output: [["a","a","b"], ["aa","b"]]

---

### The Backtracking Insight 💡

At each position, try all possible first palindrome prefixes.

If prefix is palindrome, recurse on remainder, then backtrack.

---

### The Algorithm

def partition(s):
    result = []
    
    def is_palindrome(start, end):
        while start < end:
            if s[start] != s[end]:
                return False
            start += 1
            end -= 1
        return True
    
    def backtrack(start, path):
        if start == len(s):
            result.append(path[:])
            return
        
        for end in range(start, len(s)):
            if is_palindrome(start, end):
                path.append(s[start:end+1])
                backtrack(end + 1, path)
                path.pop()
    
    backtrack(0, [])
    return result

---

### Optimization

Precompute palindrome DP table:

dp[i][j] = True if s[i:j+1] is palindrome

This turns palindrome checks from O(n) to O(1).

Now implement it! 🪞`,
                theoryContent: `## Palindrome Partitioning

### Key Insight
At each position, try all palindrome prefixes.
Recurse on remaining string.

### Algorithm
def backtrack(start, path):
    if start == len(s): record
    for end in range(start, len(s)):
        if is_palindrome(start, end):
            path.append(s[start:end+1])
            backtrack(end+1, path)
            path.pop()

### Complexity
- Time: O(n × 2^n)
- Space: O(n)`
        },

        "phone-letters": {
                storyContent: `## Letter Combinations of a Phone Number

*Generate all possible letter combinations from phone digits.*

Input: "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

2 → abc, 3 → def

---

### The Mapping

phone = {
    '2': 'abc', '3': 'def',
    '4': 'ghi', '5': 'jkl', '6': 'mno',
    '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
}

---

### The Backtracking Approach 💡

For each digit, try each corresponding letter.

def letterCombinations(digits):
    if not digits:
        return []
    
    result = []
    
    def backtrack(index, path):
        if index == len(digits):
            result.append(path)
            return
        
        for letter in phone[digits[index]]:
            backtrack(index + 1, path + letter)
    
    backtrack(0, "")
    return result

---

### Why No Explicit Backtracking?

We're using string concatenation: path + letter

This creates a new string, so the original path is unchanged.

If we used a list, we'd need to pop().

---

### Complexity

With n digits, each having ~4 letters:
- O(4^n) combinations
- O(n) space for path

Now implement it! 📱`,
                theoryContent: `## Phone Letter Combinations

### Mapping
phone = {'2': 'abc', '3': 'def', ...}

### Algorithm
def backtrack(index, path):
    if index == len(digits): record
    for letter in phone[digits[index]]:
        backtrack(index + 1, path + letter)

### Complexity
- Time: O(4^n)
- Space: O(n)`
        },

        "queen-puzzle": {
                storyContent: `## N-Queens

*The classic backtracking problem. Place n queens on n×n board with no attacks.*

Queens attack same row, column, or diagonal.

n = 4:
. Q . .
. . . Q
Q . . .
. . Q .

---

### The Constraint Analysis

Each row can have exactly one queen.

So we can assign one queen per row, choosing its column.

---

### Tracking Attacks

Three sets:
- cols: columns with queens
- diag1: main diagonals (r - c is constant)
- diag2: anti-diagonals (r + c is constant)

---

### The Algorithm

def solveNQueens(n):
    cols = set()
    diag1 = set()  # r - c
    diag2 = set()  # r + c
    result = []
    board = [['.'] * n for _ in range(n)]
    
    def backtrack(row):
        if row == n:
            result.append([''.join(r) for r in board])
            return
        
        for col in range(n):
            if col in cols or (row - col) in diag1 or (row + col) in diag2:
                continue
            
            # Place queen
            cols.add(col)
            diag1.add(row - col)
            diag2.add(row + col)
            board[row][col] = 'Q'
            
            backtrack(row + 1)
            
            # Remove queen (backtrack)
            cols.remove(col)
            diag1.remove(row - col)
            diag2.remove(row + col)
            board[row][col] = '.'
    
    backtrack(0)
    return result

---

### The Diagonal Insight 💡

Main diagonal (\\): r - c is constant
Anti-diagonal (/): r + c is constant

This lets us check diagonal attacks in O(1)!

Now implement it carefully! 👑`,
                theoryContent: `## N-Queens Backtracking

### Key Insight
Place one queen per row.
Track: cols, diagonals (r-c), anti-diagonals (r+c).

### Algorithm
def backtrack(row):
    if row == n: record
    for col in range(n):
        if col or diag1 or diag2 conflict: continue
        place_queen()
        backtrack(row + 1)
        remove_queen()

### Complexity
- Time: O(n!)
- Space: O(n)`
        },

        // ============================================
        // PREFIX NETWORKS (Tries)
        // ============================================

        "build-prefix": {
                storyContent: `## Implement Trie (Prefix Tree)

*The data structure behind autocomplete.*

Implement a Trie with:
- insert(word)
- search(word) → exact match
- startsWith(prefix) → any word starts with prefix

---

### What's a Trie? 💡

A tree where each node represents a character.

Words share common prefixes in the tree structure.

        root
       /    \\
      a      b
     / \\      \\
    p   n     a
   /     \\     \\
  p      t     t
 /              
l              

Words: "app", "apple", "ant", "bat"

---

### Implementation

class TrieNode:
    def __init__(self):
        self.children = {}  # char → TrieNode
        self.is_end = False  # marks end of word

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
    
    def search(self, word):
        node = self._find(word)
        return node is not None and node.is_end
    
    def startsWith(self, prefix):
        return self._find(prefix) is not None
    
    def _find(self, s):
        node = self.root
        for char in s:
            if char not in node.children:
                return None
            node = node.children[char]
        return node

---

### Time Complexity

All operations: O(len(word))

Now implement it! 🌳`,
                theoryContent: `## Trie Structure

### Node
children: {char → TrieNode}
is_end: bool

### Operations
insert: traverse/create nodes, mark end
search: traverse, check is_end
startsWith: traverse, return if found

### Complexity
- All ops: O(word length)
- Space: O(total chars)`
        },

        "word-finder": {
                storyContent: `## Design Add and Search Words Data Structure

*Trie with wildcard search!*

- addWord(word)
- search(word) → can contain '.' which matches any letter

search("b.d") matches "bad", "bed", "bid", etc.

---

### The Trie Part

Same as regular Trie for addWord.

---

### The Wildcard Part 💡

When we see '.', we must try ALL children!

This means search becomes recursive/DFS.

---

### Implementation

def search(self, word):
    def dfs(node, i):
        if i == len(word):
            return node.is_end
        
        char = word[i]
        
        if char == '.':
            # Try all children
            for child in node.children.values():
                if dfs(child, i + 1):
                    return True
            return False
        else:
            if char not in node.children:
                return False
            return dfs(node.children[char], i + 1)
    
    return dfs(self.root, 0)

---

### Complexity

addWord: O(n)
search without '.': O(n)
search with '.': O(26^m × n) worst case, where m = number of dots

Now implement it! 🔍`,
                theoryContent: `## Trie with Wildcards

### Key Insight
'.' requires branching to all children.
Use DFS/recursion for search.

### Search Algorithm
def dfs(node, i):
    if i == len(word): return is_end
    if word[i] == '.':
        return any(dfs(child, i+1) for child in children)
    else:
        return char in children and dfs(children[char], i+1)`
        },

        "grid-search": {
                storyContent: `## Word Search II

*Find all words from list in grid. THE hardest Trie problem.*

board = [["o","a","a","n"],
         ["e","t","a","e"],
         ["i","h","k","r"],
         ["i","f","l","v"]]
words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

---

### The Naive Approach ❌

For each word, run Word Search I. O(words × m × n × 4^L)

Too slow for many words!

---

### The Trie Insight 💡

Build a Trie from all words.

DFS on the grid, but prune paths that don't exist in Trie!

Instead of searching for each word, we search ONCE and find ALL words.

---

### The Algorithm

1. Build Trie from words
2. For each cell, DFS with Trie node
3. Move to child if current char matches
4. If at word end, record it
5. Backtrack as usual

---

### Optimization: Prune Found Words

After finding a word, mark it as found in Trie.

Even remove nodes with no children (pruning).

---

### Implementation Outline

def findWords(board, words):
    trie = build_trie(words)
    result = set()
    
    def dfs(r, c, node, path):
        char = board[r][c]
        if char not in node.children:
            return
        
        child = node.children[char]
        path += char
        
        if child.is_end:
            result.add(path)
            child.is_end = False  # avoid duplicates
        
        board[r][c] = '#'  # mark visited
        # DFS all 4 directions
        board[r][c] = char  # restore
    
    for r in range(rows):
        for c in range(cols):
            dfs(r, c, trie.root, "")
    
    return list(result)

Now implement it carefully! 🏆`,
                theoryContent: `## Word Search II - Trie + DFS

### Key Insight
One DFS pass finds all words.
Trie prunes invalid paths.

### Algorithm
1. Build Trie from words
2. DFS from each cell
3. Follow Trie children
4. Record at word ends

### Optimizations
- Remove found words
- Prune empty branches

### Complexity
O(m × n × 4^L) but much faster with pruning`
        },

        // ============================================
        // NETWORK MAPS (Graphs)
        // ============================================

        "island-count": {
                storyContent: `## Number of Islands

*Year 4, helping a friend prep for their Google interview...*

They showed me their solution - nested loops checking every possible pair of cells. I watched their laptop struggle with a 300x300 grid. "There has to be a better way," they muttered.

I grabbed a napkin and drew some islands. "What if you could explore each island completely, mark it as 'visited,' and never look at it again?"

Their eyes lit up. That one insight - the power of DFS for connected components - landed them the job.

---

### The Challenge

grid = [["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]]
Output: 3

Count connected components of '1's.

---

### The Approach 💡

For each '1', do DFS/BFS to visit all connected '1's (one island).

Mark visited cells to avoid counting twice.

---

### DFS Solution

def numIslands(grid):
    if not grid:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    count = 0
    
    def dfs(r, c):
        if (r < 0 or r >= rows or c < 0 or c >= cols or
            grid[r][c] != '1'):
            return
        
        grid[r][c] = '0'  # mark visited
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    
    return count

---

### The Pattern

This is DFS for connected components.

Each DFS from an unvisited node explores one complete component.

Now implement it! 🏝️`,
                theoryContent: `## Island Counting = Connected Components

### Algorithm
for each cell:
    if cell == '1' and not visited:
        count += 1
        DFS to mark all connected

### Mark Visited
Change '1' to '0' in-place (or use visited set)

### Complexity
- Time: O(m × n)
- Space: O(m × n) recursion worst case`
        },

        "max-island": {
                storyContent: `## Max Area of Island

*During a hackathon at Stripe, 2018...*

Our team needed to find the largest contiguous region in a heatmap of user activity. Someone said, "We already know how to count islands - can't we just... measure them too?"

Brilliant. Same traversal, different return value. We won that hackathon.

---

### The Challenge

Return the area (number of cells) of the largest island.

---

### Small Modification 💡

When doing DFS, return the count of cells visited.

def dfs(r, c):
    if invalid or not '1':
        return 0
    
    grid[r][c] = '0'
    return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1)

---

### Full Solution

def maxAreaOfIsland(grid):
    max_area = 0
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1:
                area = dfs(r, c)
                max_area = max(max_area, area)
    
    return max_area

Now implement it! 🏝️`,
                theoryContent: `## Max Island Area

### Key Change
DFS returns size of component.

### Algorithm
def dfs(r, c):
    if invalid: return 0
    mark visited
    return 1 + dfs(all neighbors)

max_area = max(dfs(r,c) for each '1')

### Complexity
Same as Number of Islands`
        },

        "copy-network": {
                storyContent: `## Clone Graph

*A production incident, 3 AM...*

We had a graph representing user connections. Someone thought they were clever and modified the "copy" - except it was the original. Chaos ensued. Friendships deleted. Notifications sent to wrong people.

After we fixed the data, I said: "Let's learn how to properly deep copy a graph."

---

### The Challenge

Given reference to a node, clone the entire graph. Nodes can have cycles - if we naively follow neighbors, we'll clone forever!

---

### The Solution 💡

Use a hash map: original → clone

When cloning a node:
1. If already cloned, return the clone
2. Otherwise, create clone, add to map, then clone neighbors

---

### Implementation

def cloneGraph(node):
    if not node:
        return None
    
    cloned = {}  # original → clone
    
    def dfs(n):
        if n in cloned:
            return cloned[n]
        
        copy = Node(n.val)
        cloned[n] = copy
        
        for neighbor in n.neighbors:
            copy.neighbors.append(dfs(neighbor))
        
        return copy
    
    return dfs(node)

Now implement it! 📋`,
                theoryContent: `## Graph Cloning with HashMap

### Key Insight
Track cloned nodes to handle cycles.

### Algorithm
cloned = {}
def dfs(n):
    if n in cloned: return cloned[n]
    copy = Node(n.val)
    cloned[n] = copy
    copy.neighbors = [dfs(nb) for nb in n.neighbors]
    return copy

### Complexity
- Time: O(V + E)
- Space: O(V)`
        },

        "gate-distance": {
                storyContent: `## Walls and Gates

*Multi-source BFS.*

INF = empty room, 0 = gate, -1 = wall.
Fill each empty room with distance to nearest gate.

---

### The Insight 💡

Start BFS from ALL gates simultaneously!

This naturally finds the shortest distance for each room.

---

### Algorithm

1. Add all gates (0s) to queue
2. BFS, for each cell, update neighbors with distance + 1

---

### Implementation

def wallsAndGates(rooms):
    queue = deque()
    
    # Add all gates
    for r in range(rows):
        for c in range(cols):
            if rooms[r][c] == 0:
                queue.append((r, c))
    
    # BFS
    while queue:
        r, c = queue.popleft()
        
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r + dr, c + dc
            
            if (0 <= nr < rows and 0 <= nc < cols and
                rooms[nr][nc] == INF):
                rooms[nr][nc] = rooms[r][c] + 1
                queue.append((nr, nc))

Now implement it! 🚪`,
                theoryContent: `## Multi-Source BFS

### Key Insight
Start BFS from all sources at once.
Level by level, each cell gets correct distance.

### Algorithm
queue = all gates
while queue:
    r, c = queue.pop()
    for each neighbor:
        if room == INF:
            room = current + 1
            queue.append(neighbor)

### Complexity
- Time: O(m × n)
- Space: O(m × n)`
        },

        "rot-timer": {
                storyContent: `## Rotting Oranges

*Multi-source BFS with time tracking.*

2 = rotten, 1 = fresh, 0 = empty.
Each minute, rotten spreads to adjacent fresh oranges.
Return minutes until all rotten, or -1 if impossible.

---

### Multi-Source BFS 💡

Start BFS from all rotten oranges.

Track: time (BFS levels) and fresh count.

---

### Implementation

def orangesRotting(grid):
    queue = deque()
    fresh = 0
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                queue.append((r, c, 0))
            elif grid[r][c] == 1:
                fresh += 1
    
    time = 0
    while queue:
        r, c, t = queue.popleft()
        time = t
        
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r + dr, c + dc
            if valid and grid[nr][nc] == 1:
                grid[nr][nc] = 2
                fresh -= 1
                queue.append((nr, nc, t + 1))
    
    return time if fresh == 0 else -1

Now implement it! 🍊`,
                theoryContent: `## Rotting Oranges - BFS with Time

### Key Points
1. Multi-source BFS from all rotten
2. Track time (depth in BFS)
3. Track fresh count

### Return
time if fresh == 0 else -1

### Complexity
- Time: O(m × n)
- Space: O(m × n)`
        },

        "ocean-flow": {
                storyContent: `## Pacific Atlantic Water Flow

*Which cells can reach both oceans?*

Water flows from high to low or equal. Pacific touches top/left, Atlantic touches bottom/right.

Find cells that can reach both oceans.

---

### The Insight 💡

Instead of checking each cell → ocean, check ocean → cells!

BFS/DFS from Pacific border: all reachable cells.
BFS/DFS from Atlantic border: all reachable cells.

Intersection = answer!

---

### Implementation

def pacificAtlantic(heights):
    pacific = set()
    atlantic = set()
    
    def dfs(r, c, visited):
        visited.add((r, c))
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if (valid and (nr,nc) not in visited and
                heights[nr][nc] >= heights[r][c]):
                dfs(nr, nc, visited)
    
    # Pacific: top row + left col
    for c in range(cols):
        dfs(0, c, pacific)
    for r in range(rows):
        dfs(r, 0, pacific)
    
    # Atlantic: bottom row + right col
    for c in range(cols):
        dfs(rows-1, c, atlantic)
    for r in range(rows):
        dfs(r, cols-1, atlantic)
    
    return list(pacific & atlantic)

Now implement it! 🌊`,
                theoryContent: `## Reverse Flow - BFS from Oceans

### Key Insight
Flow from oceans UPWARD (>= instead of <=).
Intersection of both reaches = answer.

### Algorithm
1. DFS from Pacific border
2. DFS from Atlantic border
3. Return intersection

### Complexity
- Time: O(m × n)
- Space: O(m × n)`
        },

        "capture-zone": {
                storyContent: `## Surrounded Regions

*Capture all O's except border-connected ones.*

Flip all 'O's to 'X's EXCEPT those connected to the edge.

---

### The Insight 💡

Find all O's connected to border (these are SAFE).

Everything else gets captured.

---

### Algorithm

1. DFS from all border O's, mark them as safe (e.g., 'S')
2. Flip remaining O's to X's
3. Restore S's to O's

---

### Implementation

# Mark border-connected O's
for r in range(rows):
    for c in range(cols):
        if on_border and board[r][c] == 'O':
            dfs_mark_safe(r, c)

# Capture and restore
for r in range(rows):
    for c in range(cols):
        if board[r][c] == 'O':
            board[r][c] = 'X'
        elif board[r][c] == 'S':
            board[r][c] = 'O'

Now implement it! ⭕️`,
                theoryContent: `## Surrounded Regions - Border DFS

### Key Insight
Safe O's connect to border.
Everything else is captured.

### Algorithm
1. DFS mark border-connected O's as safe
2. Flip remaining O → X
3. Restore safe → O

### Complexity
- Time: O(m × n)
- Space: O(m × n)`
        },

        "class-order": {
                storyContent: `## Course Schedule

*Can you finish all courses given prerequisites? (Cycle detection)*

numCourses = 2, prerequisites = [[1,0]]
Course 1 requires course 0. Can we finish? Yes (take 0 then 1).

[[1,0], [0,1]] → No (cycle!)

---

### The Graph Problem 💡

Each course is a node. Prereq [a,b] means edge b → a.

Can we finish? Only if NO CYCLES exist.

---

### Cycle Detection

Use DFS with 3 states:
- Unvisited
- Visiting (in current path)
- Visited (done)

Cycle exists if we visit a "visiting" node.

---

### Implementation

def canFinish(numCourses, prerequisites):
    graph = defaultdict(list)
    for a, b in prerequisites:
        graph[b].append(a)
    
    # 0 = unvisited, 1 = visiting, 2 = visited
    state = [0] * numCourses
    
    def has_cycle(course):
        if state[course] == 1:
            return True  # cycle!
        if state[course] == 2:
            return False  # already done
        
        state[course] = 1
        for next_course in graph[course]:
            if has_cycle(next_course):
                return True
        
        state[course] = 2
        return False
    
    for i in range(numCourses):
        if has_cycle(i):
            return False
    
    return True

Now implement it! 📚`,
                theoryContent: `## Cycle Detection with DFS

### 3 States
0 = unvisited
1 = visiting (current path)
2 = visited (done)

### Cycle Detection
If we visit a node in state 1 → cycle exists!

### Complexity
- Time: O(V + E)
- Space: O(V)`
        },

        "class-order-2": {
                storyContent: `## Course Schedule II

*Return the order to take courses (Topological Sort).*

Same as I, but return valid order instead of just true/false.

---

### Topological Sort 💡

A linear ordering where for every edge u→v, u comes before v.

Only exists for DAGs (no cycles).

---

### DFS Approach

Finish a node after all its dependencies.

Add to result in post-order (after recursion).

Reverse at end.

---

### Implementation

def findOrder(numCourses, prerequisites):
    # Build graph, detect cycle
    # Post-order traversal
    
    order = []
    
    def dfs(course):
        if state[course] == 1: return False  # cycle
        if state[course] == 2: return True
        
        state[course] = 1
        for next_c in graph[course]:
            if not dfs(next_c):
                return False
        
        state[course] = 2
        order.append(course)  # post-order
        return True
    
    for i in range(numCourses):
        if not dfs(i):
            return []  # cycle
    
    return order[::-1]  # reverse post-order

---

### Alternative: Kahn's Algorithm (BFS)

Track in-degrees. Start from nodes with in-degree 0.

Now implement it! 📚`,
                theoryContent: `## Topological Sort

### DFS Approach
Post-order traversal, then reverse.

### Kahn's Algorithm (BFS)
1. Compute in-degrees
2. Queue all nodes with in-degree 0
3. Pop, add to result, decrease neighbors' in-degrees
4. Add neighbors with in-degree 0 to queue

### Complexity
- Time: O(V + E)
- Space: O(V)`
        },

        "valid-tree": {
                storyContent: `## Graph Valid Tree

*Is the graph a valid tree?*

Tree = connected + no cycles.

For n nodes: must have exactly n-1 edges.

---

### Approach 💡

1. Check edge count = n - 1
2. Check connectivity (DFS/BFS visits all nodes)

OR use Union-Find!

---

### DFS Solution

def validTree(n, edges):
    if len(edges) != n - 1:
        return False
    
    # Build adjacency list
    graph = defaultdict(list)
    for a, b in edges:
        graph[a].append(b)
        graph[b].append(a)
    
    # DFS to check connectivity
    visited = set()
    
    def dfs(node, parent):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor, node)
    
    dfs(0, -1)
    return len(visited) == n

Now implement it! 🌲`,
                theoryContent: `## Valid Tree Conditions

### For n nodes
1. Exactly n-1 edges
2. All nodes connected
3. No cycles

### Algorithm
Check edges == n-1 + DFS connectivity
OR Union-Find cycle detection

### Complexity
- Time: O(V + E)
- Space: O(V)`
        },

        "component-count": {
                storyContent: `## Number of Connected Components

*Count separate groups in an undirected graph.*

---

### Same as Number of Islands 💡

DFS from each unvisited node. Each DFS = one component.

---

### Implementation

def countComponents(n, edges):
    graph = defaultdict(list)
    for a, b in edges:
        graph[a].append(b)
        graph[b].append(a)
    
    visited = set()
    count = 0
    
    def dfs(node):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor)
    
    for i in range(n):
        if i not in visited:
            count += 1
            dfs(i)
    
    return count

Now implement it! 🔗`,
                theoryContent: `## Connected Components

### Algorithm
count = 0
for each node:
    if not visited:
        count += 1
        DFS to visit component

### Alternative: Union-Find
Union all edges, count unique roots.

### Complexity
- Time: O(V + E)
- Space: O(V)`
        },

        "extra-edge": {
                storyContent: `## Redundant Connection

*Find the edge that creates a cycle.*

Return the edge that, if removed, makes the graph a tree.

---

### Union-Find Solution 💡

Process edges one by one.

If two nodes are already connected (same root), adding this edge creates a cycle!

---

### Implementation

def findRedundantConnection(edges):
    parent = list(range(len(edges) + 1))
    rank = [0] * (len(edges) + 1)
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(x, y):
        px, py = find(x), find(y)
        if px == py:
            return False  # already connected!
        
        if rank[px] < rank[py]:
            px, py = py, px
        parent[py] = px
        if rank[px] == rank[py]:
            rank[px] += 1
        return True
    
    for a, b in edges:
        if not union(a, b):
            return [a, b]

Now implement it! ⚡`,
                theoryContent: `## Redundant Connection - Union-Find

### Key Insight
Process edges.
If union fails (already same set), that's the redundant edge!

### Union-Find
find: with path compression
union: by rank

### Complexity
- Time: O(E × α(V)) ≈ O(E)
- Space: O(V)`
        },

        "word-path": {
                storyContent: `## Word Ladder

*A Scrabble game gone too far, 2016...*

My friend bet me $50 I couldn't turn "COLD" into "WARM" one letter at a time, each step a valid word. COLD → CORD → CARD → WARD → WARM. I won the bet.

Then I realized - this is BFS on an implicit graph! Each word is a node, edges connect words differing by one letter. The game taught me graph theory.

---

### The Challenge

beginWord = "hit", endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]

hit → hot → dot → dog → cog = 5 transformations

---

### BFS for Shortest Path 💡

Each word is a node. Edge if they differ by one letter.

BFS from beginWord to endWord.

---

### Optimization

Instead of comparing each pair of words O(n²):

For each word, try changing each letter to a-z.

If new word is in wordList, it's a neighbor.

---

### Implementation

def ladderLength(beginWord, endWord, wordList):
    wordSet = set(wordList)
    if endWord not in wordSet:
        return 0
    
    queue = deque([(beginWord, 1)])
    visited = {beginWord}
    
    while queue:
        word, length = queue.popleft()
        
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i+1:]
                
                if new_word == endWord:
                    return length + 1
                
                if new_word in wordSet and new_word not in visited:
                    visited.add(new_word)
                    queue.append((new_word, length + 1))
    
    return 0

Now implement it! 🪜`,
                theoryContent: `## Word Ladder - BFS

### Graph Model
Nodes = words
Edges = differ by 1 letter

### Neighbor Finding
For each position, try all 26 letters.
Check if in wordList.

### Complexity
- Time: O(26 × L × n) where L = word length
- Space: O(n)`
        },

        // ============================================
        // ROUTE OPTIMIZATION (Advanced Graphs)
        // ============================================

        "signal-time": {
                storyContent: `## Network Delay Time

*Year 6, debugging latency at a fintech company...*

We had microservices calling each other across regions. "Why does this request take 3 seconds?" The network team showed me their monitoring graph - weighted edges between services with latency values.

"Find the critical path," the senior architect said. That's when Dijkstra clicked for me - not just an algorithm, but a debugging tool.

---

### The Challenge

Find time for signal to reach all nodes from source k.

Return max time to reach any node, or -1 if not all reachable.

---

### Dijkstra's Algorithm 💡

Find shortest path from source to all nodes in weighted graph.

Use a min-heap to process closest unvisited node first.

---

### Implementation

def networkDelayTime(times, n, k):
    graph = defaultdict(list)
    for u, v, w in times:
        graph[u].append((v, w))
    
    heap = [(0, k)]  # (time, node)
    dist = {}
    
    while heap:
        time, node = heappop(heap)
        
        if node in dist:
            continue
        dist[node] = time
        
        for neighbor, weight in graph[node]:
            if neighbor not in dist:
                heappush(heap, (time + weight, neighbor))
    
    if len(dist) == n:
        return max(dist.values())
    return -1

Now implement it! 📡`,
                theoryContent: `## Dijkstra's Algorithm

### Algorithm
heap = [(0, source)]
while heap:
    dist, node = heappop(heap)
    if visited: continue
    mark visited
    for neighbor:
        heappush(heap, (dist + weight, neighbor))

### Complexity
- Time: O((V + E) log V)
- Space: O(V + E)`
        },

        "flight-path": {
                storyContent: `## Reconstruct Itinerary

*Euler path: visit every edge exactly once.*

Given tickets [[A,B], [B,C]], find the itinerary.

---

### Hierholzer's Algorithm 💡

For Eulerian path, start at node with odd out-degree minus in-degree (or any if all equal).

DFS, but add to result in POST-ORDER (after all outgoing edges used).

---

### Implementation

def findItinerary(tickets):
    graph = defaultdict(list)
    for src, dst in tickets:
        graph[src].append(dst)
    
    # Sort destinations in reverse (we pop from end)
    for src in graph:
        graph[src].sort(reverse=True)
    
    result = []
    
    def dfs(airport):
        while graph[airport]:
            next_airport = graph[airport].pop()
            dfs(next_airport)
        result.append(airport)
    
    dfs("JFK")
    return result[::-1]

Now implement it! ✈️`,
                theoryContent: `## Hierholzer's Algorithm

### For Eulerian Path
Post-order DFS, reverse result.

### Implementation
def dfs(node):
    while graph[node]:
        next = graph[node].pop()
        dfs(next)
    result.append(node)
return result[::-1]

### Complexity
- Time: O(E log E)  for sorting
- Space: O(E)`
        },

        "connect-cost": {
                storyContent: `## Min Cost to Connect All Points

*Minimum Spanning Tree!*

Connect all points with minimum total Manhattan distance.

---

### Prim's Algorithm 💡

Start from any node. Always add the cheapest edge to a new node.

---

### Implementation

def minCostConnectPoints(points):
    n = len(points)
    visited = [False] * n
    heap = [(0, 0)]  # (cost, point_index)
    total_cost = 0
    edges_added = 0
    
    while edges_added < n:
        cost, node = heappop(heap)
        
        if visited[node]:
            continue
        
        visited[node] = True
        total_cost += cost
        edges_added += 1
        
        for i in range(n):
            if not visited[i]:
                dist = manhattan(points[node], points[i])
                heappush(heap, (dist, i))
    
    return total_cost

Now implement it! 🔌`,
                theoryContent: `## Prim's MST Algorithm

### Algorithm
Start from any node.
heap = [(0, start)]
while not all connected:
    pop min edge
    if visited: continue
    add to MST
    add all edges to heap

### Alternative: Kruskal's
Sort all edges, add if doesn't create cycle (Union-Find).

### Complexity
O(n² log n) for dense graph`
        },

        "swim-level": {
                storyContent: `## Swim in Rising Water

*Dijkstra-like: minimize maximum elevation.*

Find min time t such that you can swim from (0,0) to (n-1,n-1) where swim is possible when water >= elevation.

---

### Modified Dijkstra 💡

Instead of sum of edges, track MAXIMUM elevation along path.

Use min-heap with max(current_max, cell_elevation).

---

### Implementation

def swimInWater(grid):
    n = len(grid)
    heap = [(grid[0][0], 0, 0)]
    visited = set()
    
    while heap:
        t, r, c = heappop(heap)
        
        if (r, c) in visited:
            continue
        visited.add((r, c))
        
        if r == n-1 and c == n-1:
            return t
        
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if valid and (nr, nc) not in visited:
                heappush(heap, (max(t, grid[nr][nc]), nr, nc))
    
    return -1

Now implement it! 🏊`,
                theoryContent: `## Min-Max Path - Modified Dijkstra

### Key Insight
Priority = max(path_max, cell_value)
Not sum, but max along path.

### Complexity
- Time: O(n² log n)
- Space: O(n²)`
        },

        "alien-order": {
                storyContent: `## Alien Dictionary

*Derive alphabet order from sorted words.*

Given words in alien language (sorted), return order of characters.

words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"

---

### The Insight 💡

Compare adjacent words to find character orderings.

"wrt" vs "wrf": t comes before f

Build graph of orderings, then topological sort!

---

### Algorithm

1. Compare adjacent words
2. First differing char: a before b → edge a→b
3. Build graph
4. Topological sort

---

### Edge Case

If shorter word comes after longer prefix: invalid!
["abc", "ab"] → impossible

Now implement it! 👽`,
                theoryContent: `## Alien Dictionary - Topo Sort

### Steps
1. Compare adjacent words
2. Add edges for first differing char
3. Topological sort

### Edge Cases
- Prefix rule violation
- Cycle = invalid

### Complexity
- Time: O(total chars)
- Space: O(26) = O(1)`
        },

        "budget-flights": {
                storyContent: `## Cheapest Flights Within K Stops

*Planning a trip on a shoestring budget, 2019...*

I wanted to fly from San Francisco to Tokyo, but direct flights were $1,200. With one stop? $800. Two stops? $650. But Kayak's "cheapest" with 4 stops took 38 hours.

There had to be a sweet spot. I wrote a script using modified Bellman-Ford with a stop constraint. Found $720 with exactly 2 stops. The algorithm paid for itself.

---

### The Challenge

Find cheapest flight from src to dst with at most k stops.

---

### Modified Bellman-Ford 💡

Run k+1 iterations of relaxation.

Or use BFS with (cost, node, stops) priority.

---

### BFS/Dijkstra Approach

def findCheapestPrice(n, flights, src, dst, k):
    graph = defaultdict(list)
    for u, v, w in flights:
        graph[u].append((v, w))
    
    # (cost, node, stops)
    heap = [(0, src, 0)]
    best = {}  # (node, stops) → best cost
    
    while heap:
        cost, node, stops = heappop(heap)
        
        if node == dst:
            return cost
        
        if stops > k:
            continue
        
        if (node, stops) in best and best[(node, stops)] <= cost:
            continue
        best[(node, stops)] = cost
        
        for neighbor, price in graph[node]:
            heappush(heap, (cost + price, neighbor, stops + 1))
    
    return -1

Now implement it! 💰✈️`,
                theoryContent: `## K-Stop Shortest Path

### Key Insight
Track stops in state.
Can't use standard Dijkstra (might revisit with fewer stops).

### State
(cost, node, stops_used)

### Complexity
- Time: O(E × k × log(E × k))
- Space: O(E × k)`
        },

        // ============================================
        // MEMORY LANE (1-D Dynamic Programming)
        // ============================================

        "step-climb": {
                storyContent: `## Climbing Stairs

*The introduction to dynamic programming.*

You can climb 1 or 2 steps. How many ways to reach step n?

n = 3 → 3 ways: (1,1,1), (1,2), (2,1)

---

### The DP Insight 💡

To reach step n, you either:
- Came from step n-1 (1 step)
- Came from step n-2 (2 steps)

dp[n] = dp[n-1] + dp[n-2]

This is Fibonacci!

---

### Implementation

def climbStairs(n):
    if n <= 2:
        return n
    
    prev, curr = 1, 2
    for i in range(3, n + 1):
        prev, curr = curr, prev + curr
    
    return curr

Now implement it! 🪜`,
                theoryContent: `## Fibonacci DP

### Recurrence
dp[n] = dp[n-1] + dp[n-2]
dp[1] = 1, dp[2] = 2

### Space Optimization
Only need prev two values.

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "cheap-stairs": {
                storyContent: `## Min Cost Climbing Stairs

*A silly conversation at a startup retreat...*

"If every stair had a price tag, and you could skip one, how would you climb cheapest?" My PM asked this at 2 AM after too many drinks.

"That's just DP with an extra dimension," I said. He didn't get it. But you will.

---

### The Challenge

cost[i] = cost to step on stair i. Pay cost to climb 1 or 2 steps.

Start from step 0 or 1. Reach past the last step.

---

### DP Approach 💡

dp[i] = min cost to reach step i

dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])

---

### Implementation

def minCostClimbingStairs(cost):
    n = len(cost)
    prev2, prev1 = 0, 0
    
    for i in range(2, n + 1):
        curr = min(prev1 + cost[i-1], prev2 + cost[i-2])
        prev2, prev1 = prev1, curr
    
    return prev1

Now implement it! 💰`,
                theoryContent: `## Min Cost Stairs

### Recurrence
dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "home-heist": {
                storyContent: `## House Robber

*My favorite DP problem - taught to 50+ engineers...*

I use this in every intro DP session. "You're a thief. Houses in a row. Alarm goes off if you rob adjacent houses. Maximize your haul."

Their eyes light up when they see how the subproblem structure emerges. Rob this house and skip next, or skip this and have full choice later.

---

### The Challenge

Rob houses for max money. Can't rob two adjacent.

nums = [2,7,9,3,1] → 12 (rob house 0, 2, 4)

---

### DP Insight 💡

For each house, decide: rob or skip?

dp[i] = max money considering houses 0..i

dp[i] = max(
    dp[i-1],           # skip house i
    dp[i-2] + nums[i]  # rob house i
)

---

### Implementation

def rob(nums):
    prev2, prev1 = 0, 0
    
    for num in nums:
        curr = max(prev1, prev2 + num)
        prev2, prev1 = prev1, curr
    
    return prev1

Now implement it! 🏠`,
                theoryContent: `## House Robber DP

### Recurrence
dp[i] = max(dp[i-1], dp[i-2] + nums[i])

### Space Optimization
Only need prev two values.

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "home-heist-2": {
                storyContent: `## House Robber II

*Houses in a circle!*

Same as I, but first and last houses are adjacent.

---

### The Insight 💡

We can't rob both first AND last.

Run House Robber I twice:
1. Exclude first house: nums[1:]
2. Exclude last house: nums[:-1]

Return max of both.

---

### Implementation

def rob(nums):
    if len(nums) == 1:
        return nums[0]
    
    return max(
        rob_linear(nums[1:]),
        rob_linear(nums[:-1])
    )

Now implement it! 🏘️`,
                theoryContent: `## Circular House Robber

### Key Insight
Can't rob both first and last.
Split into two linear problems.

### Algorithm
return max(rob(1 to n-1), rob(0 to n-2))

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "long-palindrome": {
                storyContent: `## Longest Palindromic Substring

*Expand around center technique.*

s = "babad" → "bab" or "aba"

---

### Approach 1: Expand Around Center 💡

For each possible center, expand outward while palindrome.

Centers: n single chars + n-1 gaps = 2n-1 centers.

---

### Implementation

def longestPalindrome(s):
    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l+1:r]
    
    result = ""
    for i in range(len(s)):
        # Odd length
        odd = expand(i, i)
        # Even length
        even = expand(i, i+1)
        
        result = max(result, odd, even, key=len)
    
    return result

O(n²) time, O(1) space.

Now implement it! 🪞`,
                theoryContent: `## Expand Around Center

### Algorithm
For each center (2n-1 total):
    expand while s[l] == s[r]
    track longest

### Complexity
- Time: O(n²)
- Space: O(1)`
        },

        "count-palindrome": {
                storyContent: `## Palindromic Substrings

*Count all palindromic substrings.*

s = "aaa" → 6: "a", "a", "a", "aa", "aa", "aaa"

---

### Same Technique 💡

Expand around each center, count valid palindromes.

---

### Implementation

def countSubstrings(s):
    count = 0
    
    for i in range(len(s)):
        # Odd length
        l, r = i, i
        while l >= 0 and r < len(s) and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
        
        # Even length
        l, r = i, i + 1
        while l >= 0 and r < len(s) and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
    
    return count

Now implement it! 🔢`,
                theoryContent: `## Count Palindromes

### Same as longest, but count
For each center:
    expand while palindrome
    count += 1 for each expansion

### Complexity
- Time: O(n²)
- Space: O(1)`
        },

        "decode-path": {
                storyContent: `## Decode Ways

*Count ways to decode numeric string to letters.*

'1' → A, '2' → B, ..., '26' → Z

"12" → 2 ways: "AB" (1,2) or "L" (12)

---

### DP Approach 💡

dp[i] = ways to decode s[0..i-1]

If s[i-1] is valid (1-9): dp[i] += dp[i-1]
If s[i-2..i-1] is valid (10-26): dp[i] += dp[i-2]

---

### Implementation

def numDecodings(s):
    if s[0] == '0':
        return 0
    
    prev2, prev1 = 1, 1
    
    for i in range(1, len(s)):
        curr = 0
        
        if s[i] != '0':
            curr += prev1
        
        two_digit = int(s[i-1:i+1])
        if 10 <= two_digit <= 26:
            curr += prev2
        
        prev2, prev1 = prev1, curr
    
    return prev1

Now implement it! 🔤`,
                theoryContent: `## Decode Ways DP

### Recurrence
dp[i] += dp[i-1] if s[i] valid (1-9)
dp[i] += dp[i-2] if s[i-1:i+1] valid (10-26)

### Edge Cases
Leading zeros, "0" alone is invalid.

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "coin-change": {
                storyContent: `## Coin Change

*Minimum coins to make amount.*

coins = [1,2,5], amount = 11 → 3 (5+5+1)

---

### DP Approach 💡

dp[i] = min coins to make amount i

dp[i] = min(dp[i - coin] + 1 for each coin)

---

### Implementation

def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

Now implement it! 🪙`,
                theoryContent: `## Coin Change DP

### Recurrence
dp[i] = min(dp[i - coin] + 1) for each coin <= i
dp[0] = 0

### Complexity
- Time: O(amount × coins)
- Space: O(amount)`
        },

        "max-multiply": {
                storyContent: `## Maximum Product Subarray

*Tricky: negatives can flip sign!*

nums = [2,3,-2,4] → 6 (2×3)
nums = [-2,3,-4] → 24 (-2×3×-4)

---

### The Insight 💡

Track BOTH max and min at each position!

A negative × min can become the new max.

---

### Implementation

def maxProduct(nums):
    max_prod = min_prod = result = nums[0]
    
    for num in nums[1:]:
        candidates = (num, max_prod * num, min_prod * num)
        max_prod = max(candidates)
        min_prod = min(candidates)
        result = max(result, max_prod)
    
    return result

Now implement it! ✖️`,
                theoryContent: `## Max Product with Min Tracking

### Key Insight
Negative × negative = positive.
Track both max and min.

### Recurrence
max_i = max(nums[i], max_{i-1} × nums[i], min_{i-1} × nums[i])
min_i = min(...)

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "word-split": {
                storyContent: `## Word Break

*Can string be segmented into dictionary words?*

s = "leetcode", wordDict = ["leet", "code"] → true

---

### DP Approach 💡

dp[i] = true if s[0..i-1] can be segmented

dp[i] = any(dp[j] and s[j:i] in wordDict for j < i)

---

### Implementation

def wordBreak(s, wordDict):
    words = set(wordDict)
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True
    
    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in words:
                dp[i] = True
                break
    
    return dp[n]

Now implement it! 📖`,
                theoryContent: `## Word Break DP

### Recurrence
dp[i] = any(dp[j] and s[j:i] in dict for j < i)
dp[0] = True

### Complexity
- Time: O(n² × L) for substring
- Space: O(n)`
        },

        "long-increase": {
                storyContent: `## Longest Increasing Subsequence

*Classic O(n²) DP or O(n log n) with binary search.*

nums = [10,9,2,5,3,7,101,18] → 4 ([2,3,7,101])

---

### O(n²) DP

dp[i] = LIS ending at index i

dp[i] = max(dp[j] + 1 for j < i if nums[j] < nums[i])

---

### O(n log n) Solution 💡

Maintain smallest tail for each length.

tails[i] = smallest end element for LIS of length i+1

Binary search to find where to insert each element.

---

### Implementation

def lengthOfLIS(nums):
    tails = []
    
    for num in nums:
        idx = bisect_left(tails, num)
        if idx == len(tails):
            tails.append(num)
        else:
            tails[idx] = num
    
    return len(tails)

Now implement it! 📈`,
                theoryContent: `## LIS

### O(n²) DP
dp[i] = max(dp[j] + 1) for j < i, nums[j] < nums[i]

### O(n log n) with Binary Search
Maintain tails array.
Binary search insertion point.

### Complexity
- Time: O(n log n)
- Space: O(n)`
        },

        "equal-split": {
                storyContent: `## Partition Equal Subset Sum

*Can we split array into two equal-sum subsets?*

nums = [1,5,11,5] → true ([1,5,5] and [11])

---

### Knapsack Insight 💡

Target = total / 2

Can we pick subset that sums to target?

---

### DP

dp[i] = true if sum i is achievable

For each num, update from high to low (so we don't reuse).

---

### Implementation

def canPartition(nums):
    total = sum(nums)
    if total % 2:
        return False
    
    target = total // 2
    dp = {0}
    
    for num in nums:
        dp = dp | {x + num for x in dp if x + num <= target}
        if target in dp:
            return True
    
    return False

Now implement it! ⚖️`,
                theoryContent: `## 0/1 Knapsack for Equal Partition

### Key Insight
Target = total / 2
Find subset summing to target.

### DP
For each num:
    for sum from target down to num:
        dp[sum] |= dp[sum - num]

### Complexity
- Time: O(n × sum)
- Space: O(sum)`
        },

        // ============================================
        // GRID GAME (2-D Dynamic Programming)
        // ============================================

        "path-count": {
                storyContent: `## Unique Paths

*Count paths in grid, moving only right or down.*

m × n grid, start top-left, end bottom-right.

---

### DP Approach 💡

dp[i][j] = number of ways to reach (i, j)

dp[i][j] = dp[i-1][j] + dp[i][j-1]

---

### Space Optimization

Only need current and previous row.

def uniquePaths(m, n):
    row = [1] * n
    
    for i in range(1, m):
        for j in range(1, n):
            row[j] += row[j-1]
    
    return row[-1]

Now implement it! 🎮`,
                theoryContent: `## Unique Paths

### Recurrence
dp[i][j] = dp[i-1][j] + dp[i][j-1]

### Space Optimization
Single row DP.

### Complexity
- Time: O(m × n)
- Space: O(n)`
        },

        "common-sequence": {
                storyContent: `## Longest Common Subsequence

*Classic 2D DP.*

text1 = "abcde", text2 = "ace" → 3 ("ace")

---

### DP Table 💡

dp[i][j] = LCS of text1[0..i-1] and text2[0..j-1]

If text1[i-1] == text2[j-1]:
    dp[i][j] = dp[i-1][j-1] + 1
Else:
    dp[i][j] = max(dp[i-1][j], dp[i][j-1])

---

### Implementation

def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

Now implement it! 🔗`,
                theoryContent: `## LCS DP

### Recurrence
if match: dp[i][j] = dp[i-1][j-1] + 1
else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])

### Complexity
- Time: O(m × n)
- Space: O(m × n) or O(n)`
        },

        "trade-cooldown": {
                storyContent: `## Best Time to Buy and Sell Stock with Cooldown

*State machine DP.*

After selling, must wait one day before buying.

---

### States 💡

- hold: holding a stock
- sold: just sold
- rest: not holding, not in cooldown

Transitions:
- hold[i] = max(hold[i-1], rest[i-1] - price[i])
- sold[i] = hold[i-1] + price[i]
- rest[i] = max(rest[i-1], sold[i-1])

---

### Implementation

def maxProfit(prices):
    hold, sold, rest = float('-inf'), 0, 0
    
    for price in prices:
        hold, sold, rest = (
            max(hold, rest - price),
            hold + price,
            max(rest, sold)
        )
    
    return max(sold, rest)

Now implement it! 📊`,
                theoryContent: `## Stock with Cooldown - State Machine

### States
hold, sold, rest

### Transitions
hold = max(hold, rest - price)
sold = hold + price
rest = max(rest, sold)

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "coin-ways": {
                storyContent: `## Coin Change II

*Count number of ways to make amount.*

coins = [1,2,5], amount = 5 → 4 ways

---

### Unbounded Knapsack 💡

dp[i] = number of ways to make amount i

Process each coin, update all amounts.

Order matters: process coins in outer loop to avoid duplicates!

---

### Implementation

def change(amount, coins):
    dp = [0] * (amount + 1)
    dp[0] = 1
    
    for coin in coins:  # outer: each coin type
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]
    
    return dp[amount]

Now implement it! 🪙`,
                theoryContent: `## Coin Change II - Counting Ways

### Key: Order of Loops
Outer: coins
Inner: amounts
This counts combinations, not permutations.

### Complexity
- Time: O(amount × coins)
- Space: O(amount)`
        },

        "target-ways": {
                storyContent: `## Target Sum

*Assign + or - to reach target.*

nums = [1,1,1,1,1], target = 3 → 5 ways

---

### Math Transformation 💡

Let P = sum of positives, N = sum of negatives.
P - N = target
P + N = total

P = (target + total) / 2

Count subsets that sum to P!

---

### Implementation

def findTargetSumWays(nums, target):
    total = sum(nums)
    if (total + target) % 2 or abs(target) > total:
        return 0
    
    P = (total + target) // 2
    
    dp = [0] * (P + 1)
    dp[0] = 1
    
    for num in nums:
        for i in range(P, num - 1, -1):
            dp[i] += dp[i - num]
    
    return dp[P]

Now implement it! ➕➖`,
                theoryContent: `## Target Sum → Subset Sum

### Key Insight
Transform to: count subsets summing to (total + target) / 2

### Complexity
- Time: O(n × sum)
- Space: O(sum)`
        },

        "string-weave": {
                storyContent: `## Interleaving String

*Can s3 be formed by interleaving s1 and s2?*

s1="aab", s2="axy", s3="aaxaby" → true

---

### 2D DP 💡

dp[i][j] = true if s1[0..i-1] and s2[0..j-1] can form s3[0..i+j-1]

dp[i][j] = (dp[i-1][j] and s1[i-1] == s3[i+j-1]) or
           (dp[i][j-1] and s2[j-1] == s3[i+j-1])

---

### Implementation

def isInterleave(s1, s2, s3):
    m, n = len(s1), len(s2)
    if m + n != len(s3):
        return False
    
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    
    for i in range(m + 1):
        for j in range(n + 1):
            if i > 0 and s1[i-1] == s3[i+j-1]:
                dp[i][j] |= dp[i-1][j]
            if j > 0 and s2[j-1] == s3[i+j-1]:
                dp[i][j] |= dp[i][j-1]
    
    return dp[m][n]

Now implement it! 🧵`,
                theoryContent: `## Interleaving String DP

### State
dp[i][j] = can s1[:i] and s2[:j] form s3[:i+j]

### Complexity
- Time: O(m × n)
- Space: O(m × n)`
        },

        "matrix-climb": {
                storyContent: `## Longest Increasing Path in Matrix

*DFS + Memoization.*

Find longest strictly increasing path.

---

### Approach 💡

DFS from each cell with memoization.

dp[r][c] = longest path starting from (r, c)

---

### Implementation

def longestIncreasingPath(matrix):
    memo = {}
    
    def dfs(r, c):
        if (r, c) in memo:
            return memo[(r, c)]
        
        length = 1
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if valid and matrix[nr][nc] > matrix[r][c]:
                length = max(length, 1 + dfs(nr, nc))
        
        memo[(r, c)] = length
        return length
    
    return max(dfs(r, c) for r in range(rows) for c in range(cols))

Now implement it! ⛰️`,
                theoryContent: `## DFS + Memoization

### Key Insight
DAG (strictly increasing means no cycles).
DFS with memo gives optimal.

### Complexity
- Time: O(m × n)
- Space: O(m × n)`
        },

        "rare-sequence": {
                storyContent: `## Distinct Subsequences

*Count distinct subsequences of s that equal t.*

s = "rabbbit", t = "rabbit" → 3

---

### DP 💡

dp[i][j] = ways s[0..i-1] contains t[0..j-1] as subsequence

If s[i-1] == t[j-1]:
    dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
Else:
    dp[i][j] = dp[i-1][j]

---

### Explanation

Match: use char OR skip char
No match: must skip char

Now implement it! 🔢`,
                theoryContent: `## Distinct Subsequences

### Recurrence
if s[i-1] == t[j-1]:
    dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
else:
    dp[i][j] = dp[i-1][j]

### Complexity
- Time: O(m × n)
- Space: O(n)`
        },

        "edit-steps": {
                storyContent: `## Edit Distance

*Interview prep, helping a friend at Airbnb, 2017...*

"How many operations to transform 'intention' into 'execution'?" she asked. Insert, delete, replace.

I drew a 2D table on the whiteboard. "When characters match, we don't need an operation. When they don't, we pick the best of three options."

She got the job. Said this problem came up verbatim.

---

### The Challenge

Min operations to transform word1 to word2.

Operations: insert, delete, replace.

---

### DP 💡

dp[i][j] = min edits for word1[0..i-1] → word2[0..j-1]

If word1[i-1] == word2[j-1]:
    dp[i][j] = dp[i-1][j-1]
Else:
    dp[i][j] = 1 + min(
        dp[i-1][j],    # delete
        dp[i][j-1],    # insert
        dp[i-1][j-1]   # replace
    )

Now implement it! ✏️`,
                theoryContent: `## Edit Distance DP

### Recurrence
if match: dp[i][j] = dp[i-1][j-1]
else: dp[i][j] = 1 + min(delete, insert, replace)

### Complexity
- Time: O(m × n)
- Space: O(m × n)`
        },

        "pop-balloons": {
                storyContent: `## Burst Balloons

*The problem that broke me at a Netflix onsite, 2018...*

I tried forward DP - which balloon to burst first. Spent 40 minutes getting nowhere. The interviewer gave a hint: "What if you think about which balloon to burst LAST?"

Mind. Blown. Interval DP clicked instantly. I still didn't finish in time, but I learned the most important DP lesson of my career.

---

### The Challenge

Burst balloon i: get nums[i-1] × nums[i] × nums[i+1] coins.

---

### Key Insight 💡

Think about LAST balloon burst in range, not first!

dp[l][r] = max coins for bursting balloons l..r

If k is last burst in [l,r]:
dp[l][r] = dp[l][k-1] + nums[l-1]×nums[k]×nums[r+1] + dp[k+1][r]

---

### Why Last?

When k is last, its neighbors are the boundaries l-1 and r+1!

Now implement it carefully! 🎈`,
                theoryContent: `## Interval DP - Burst Balloons

### Key Insight
Think about LAST balloon burst.
When k is last, neighbors are boundaries.

### Recurrence
dp[l][r] = max over k of:
    dp[l][k-1] + nums[l-1]×nums[k]×nums[r+1] + dp[k+1][r]

### Complexity
- Time: O(n³)
- Space: O(n²)`
        },

        "pattern-match": {
                storyContent: `## Regular Expression Matching

*Hardest DP problem. '.' matches any, '*' matches zero or more of prev.*

---

### DP 💡

dp[i][j] = s[0..i-1] matches p[0..j-1]

Cases:
1. p[j-1] is letter: match if same and dp[i-1][j-1]
2. p[j-1] is '.': match any, check dp[i-1][j-1]
3. p[j-1] is '*':
   - Zero of prev: dp[i][j-2]
   - One+ of prev: dp[i-1][j] if pattern prev matches s[i-1]

Now implement it carefully! 🧩`,
                theoryContent: `## Regex Matching DP

### Cases
- Letter/'.': match current, check dp[i-1][j-1]
- '*': zero matches dp[i][j-2], or one+ matches dp[i-1][j]

### Complexity
- Time: O(m × n)
- Space: O(m × n)`
        },

        // ============================================
        // QUICK DECISIONS (Greedy)
        // ============================================

        "max-segment": {
                storyContent: `## Maximum Subarray

*Kadane's Algorithm - the classic greedy.*

Find contiguous subarray with max sum.

nums = [-2,1,-3,4,-1,2,1,-5,4] → 6 ([4,-1,2,1])

---

### Kadane's Insight 💡

At each position: extend current subarray OR start fresh.

current = max(nums[i], current + nums[i])

If current is negative, starting fresh is better!

---

### Implementation

def maxSubArray(nums):
    current = result = nums[0]
    
    for num in nums[1:]:
        current = max(num, current + num)
        result = max(result, current)
    
    return result

Now implement it! 📊`,
                theoryContent: `## Kadane's Algorithm

### Key Decision
Extend or start new at each position.
current = max(nums[i], current + nums[i])

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "jump-reach": {
                storyContent: `## Jump Game

*Can you reach the last index?*

nums[i] = max jump from position i.

nums = [2,3,1,1,4] → true

---

### Greedy Approach 💡

Track farthest we can reach.

def canJump(nums):
    farthest = 0
    
    for i, jump in enumerate(nums):
        if i > farthest:
            return False
        farthest = max(farthest, i + jump)
    
    return True

Now implement it! 🦘`,
                theoryContent: `## Jump Game Greedy

### Key Insight
Track farthest reachable.
If current position > farthest, can't proceed.

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "jump-count": {
                storyContent: `## Jump Game II

*Minimum jumps to reach end.*

---

### BFS/Greedy 💡

Think of it as BFS levels. Each jump is one level.

Track current level end and next level farthest.

---

### Implementation

def jump(nums):
    jumps = 0
    current_end = farthest = 0
    
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        
        if i == current_end:
            jumps += 1
            current_end = farthest
    
    return jumps

Now implement it! 🎯`,
                theoryContent: `## Jump Game II - Level BFS

### Key Insight
Each "level" is one jump.
When we reach level end, increment jumps.

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "gas-route": {
                storyContent: `## Gas Station

*Can you complete a circular trip?*

gas[i] = fuel at station i
cost[i] = fuel to reach station i+1

---

### Greedy Insight 💡

1. If total gas >= total cost, solution exists.
2. Reset start whenever tank goes negative.

---

### Implementation

def canCompleteCircuit(gas, cost):
    if sum(gas) < sum(cost):
        return -1
    
    start = tank = 0
    
    for i in range(len(gas)):
        tank += gas[i] - cost[i]
        if tank < 0:
            start = i + 1
            tank = 0
    
    return start

Now implement it! ⛽`,
                theoryContent: `## Gas Station Greedy

### Two Insights
1. If total gas >= total cost, solution exists
2. If tank < 0 at i, start must be after i

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "card-groups": {
                storyContent: `## Hand of Straights

*Group cards into consecutive sequences of size W.*

hand = [1,2,3,6,2,3,4,7,8], W = 3
→ true: [1,2,3], [2,3,4], [6,7,8]

---

### Greedy Approach 💡

Sort and greedily form groups starting from smallest.

Use frequency map.

---

### Implementation

def isNStraightHand(hand, W):
    if len(hand) % W:
        return False
    
    count = Counter(hand)
    
    for card in sorted(count):
        while count[card] > 0:
            for i in range(W):
                if count[card + i] <= 0:
                    return False
                count[card + i] -= 1
    
    return True

Now implement it! 🃏`,
                theoryContent: `## Hand of Straights

### Greedy
Start groups from smallest available card.
Check if consecutive W cards exist.

### Complexity
- Time: O(n log n)
- Space: O(n)`
        },

        "triple-merge": {
                storyContent: `## Merge Triplets to Form Target

*Can we form target triplet [x,y,z]?*

Each triplet [a,b,c]. Operation: take max of each position from two triplets.

---

### Greedy Insight 💡

Only consider triplets where no element exceeds target.

Check if we can find triplets that together cover all target values.

---

### Implementation

def mergeTriplets(triplets, target):
    good = set()
    
    for t in triplets:
        if t[0] <= target[0] and t[1] <= target[1] and t[2] <= target[2]:
            for i in range(3):
                if t[i] == target[i]:
                    good.add(i)
    
    return len(good) == 3

Now implement it! 🎯`,
                theoryContent: `## Merge Triplets

### Key Insight
Skip triplets with any element > target.
Collect which positions can match target.

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "label-split": {
                storyContent: `## Partition Labels

*Split string so each letter appears in exactly one part.*

s = "ababcbacadefegdehijhklij"
→ [9, 7, 8] ("ababcbaca", "defegde", "hijhklij")

---

### Greedy Approach 💡

For each char, find last occurrence.

Expand current partition to include all chars' last occurrences.

---

### Implementation

def partitionLabels(s):
    last = {c: i for i, c in enumerate(s)}
    
    result = []
    start = end = 0
    
    for i, c in enumerate(s):
        end = max(end, last[c])
        if i == end:
            result.append(end - start + 1)
            start = i + 1
    
    return result

Now implement it! 🏷️`,
                theoryContent: `## Partition Labels

### Key Insight
Expand partition end to last occurrence of each char.
Cut when i == end.

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "wild-brackets": {
                storyContent: `## Valid Parenthesis String

*'(' ')' and '*' which can be '(' or ')' or empty.*

---

### Two Counters 💡

Track range of possible open counts: [low, high].

- '(': low++, high++
- ')': low--, high--
- '*': low-- (could be ')'), high++ (could be '(')

Keep low >= 0.
Valid if low == 0 at end.

---

### Implementation

def checkValidString(s):
    low = high = 0
    
    for c in s:
        if c == '(':
            low += 1
            high += 1
        elif c == ')':
            low -= 1
            high -= 1
        else:  # '*'
            low -= 1
            high += 1
        
        if high < 0:
            return False
        low = max(low, 0)
    
    return low == 0

Now implement it! ⭐`,
                theoryContent: `## Valid Parenthesis with Wildcards

### Range Tracking
low = min possible open
high = max possible open

### Validity
high >= 0 always
low == 0 at end

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        // ============================================
        // TIME BLOCKS (Intervals)
        // ============================================

        "insert-range": {
                storyContent: `## Insert Interval

*Calendar syncing at a productivity startup, 2020...*

We had a bug where adding a new meeting overlapping with existing ones created gaps or duplicates. The fix? Proper interval merging.

Three cases: before overlap, during overlap, after overlap. Once you see the pattern, interval problems become routine.

---

### The Challenge

inserts = [[1,3],[6,9]], newInterval = [2,5]
→ [[1,5],[6,9]]

---

### Three Steps 💡

1. Add all intervals ending before new starts
2. Merge overlapping intervals
3. Add remaining intervals

---

### Implementation

def insert(intervals, newInterval):
    result = []
    
    for interval in intervals:
        if interval[1] < newInterval[0]:
            result.append(interval)
        elif interval[0] > newInterval[1]:
            result.append(newInterval)
            newInterval = interval
        else:
            newInterval = [
                min(interval[0], newInterval[0]),
                max(interval[1], newInterval[1])
            ]
    
    result.append(newInterval)
    return result

Now implement it! ➕`,
                theoryContent: `## Insert Interval

### Cases
1. Before: add as is
2. After: add new, update new to current
3. Overlap: merge

### Complexity
- Time: O(n)
- Space: O(n)`
        },

        "merge-ranges": {
                storyContent: `## Merge Intervals

*Same calendar bug, same week...*

"What if intervals aren't sorted?" my PM asked. "And what if there are multiple overlapping ones?"

Sort first, then sweep. So elegant. This is the template for almost every interval problem.

---

### The Challenge

[[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]

---

### Approach 💡

Sort by start. Merge if overlap with previous.

---

### Implementation

def merge(intervals):
    intervals.sort()
    result = [intervals[0]]
    
    for start, end in intervals[1:]:
        if start <= result[-1][1]:
            result[-1][1] = max(result[-1][1], end)
        else:
            result.append([start, end])
    
    return result

Now implement it! 🔗`,
                theoryContent: `## Merge Intervals

### Algorithm
Sort by start.
If overlap with last result: extend.
Else: add new.

### Complexity
- Time: O(n log n)
- Space: O(n)`
        },

        "skip-ranges": {
                storyContent: `## Non-overlapping Intervals

*Minimum intervals to remove for no overlap.*

[[1,2],[2,3],[3,4],[1,3]] → 1 (remove [1,3])

---

### Greedy Insight 💡

Keep intervals that end earliest!

Sort by end. Count intervals we keep.

---

### Implementation

def eraseOverlapIntervals(intervals):
    intervals.sort(key=lambda x: x[1])
    
    count = 0
    prev_end = float('-inf')
    
    for start, end in intervals:
        if start >= prev_end:
            prev_end = end
            count += 1
    
    return len(intervals) - count

Now implement it! ✂️`,
                theoryContent: `## Activity Selection / Remove Overlapping

### Greedy
Sort by END time.
Keep non-overlapping, count kept.

### Complexity
- Time: O(n log n)
- Space: O(1)`
        },

        "room-booking": {
                storyContent: `## Meeting Rooms

*Can one person attend all meetings?*

intervals = [[0,30],[5,10],[15,20]] → false

---

### Simple Check 💡

Sort by start. Check if any overlap.

---

### Implementation

def canAttendMeetings(intervals):
    intervals.sort()
    
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]:
            return False
    
    return True

Now implement it! 📅`,
                theoryContent: `## Meeting Rooms

### Algorithm
Sort by start.
Check: start[i] >= end[i-1]

### Complexity
- Time: O(n log n)
- Space: O(1)`
        },

        "room-count": {
                storyContent: `## Meeting Rooms II

*Minimum meeting rooms needed.*

---

### Two Approaches 💡

1. **Event-based**: +1 for starts, -1 for ends, track max overlap
2. **Min Heap**: track end times, pop if meeting ended

---

### Implementation (Heap)

def minMeetingRooms(intervals):
    if not intervals:
        return 0
    
    intervals.sort()
    heap = [intervals[0][1]]
    
    for start, end in intervals[1:]:
        if start >= heap[0]:
            heappop(heap)
        heappush(heap, end)
    
    return len(heap)

Now implement it! 🏢`,
                theoryContent: `## Meeting Rooms II

### Min Heap Approach
Heap stores end times of active meetings.
Pop if current meeting starts after heap top.

### Event-based
Sort all events (+1 start, -1 end).
Track max concurrent.

### Complexity
- Time: O(n log n)
- Space: O(n)`
        },

        "query-cover": {
                storyContent: `## Minimum Interval to Include Each Query

*For each query, find smallest interval containing it.*

---

### Sort + Heap 💡

1. Sort intervals by size
2. Sort queries
3. For each query, add valid intervals to heap, check top

---

### Implementation

def minInterval(intervals, queries):
    intervals.sort(key=lambda x: x[1] - x[0])
    sorted_queries = sorted(enumerate(queries), key=lambda x: x[1])
    
    result = [-1] * len(queries)
    # ... complex implementation with interval tracking
    
    return result

This is a hard problem combining sorting and heap!

Now implement it! 🎯`,
                theoryContent: `## Min Interval for Queries

### Strategy
Sort intervals by size.
Process queries in order.
Use heap for active valid intervals.

### Complexity
- Time: O((n + q) log n)
- Space: O(n + q)`
        },

        // ============================================
        // NUMBER THEORY (Math & Geometry)
        // ============================================

        "spin-grid": {
                storyContent: `## Rotate Image

*Building a photo editor at a hackathon, 2015...*

We needed a "rotate right" button. Everyone wanted to allocate a new matrix, but we had 50MB images. "Can we do it in-place?" someone asked.

Transpose, then reverse rows. Two simple operations. We saved memory and won Best Technical Implementation.

---

### The Challenge

Rotate n×n matrix 90° clockwise in-place.

---

### Two-Step Approach 💡

1. Transpose: swap matrix[i][j] with matrix[j][i]
2. Reverse each row

---

### Implementation

def rotate(matrix):
    n = len(matrix)
    
    # Transpose
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse rows
    for row in matrix:
        row.reverse()

Now implement it! 🔄`,
                theoryContent: `## Rotate Matrix

### 90° Clockwise
1. Transpose
2. Reverse each row

### 90° Counter-clockwise
1. Transpose
2. Reverse each column

### Complexity
- Time: O(n²)
- Space: O(1)`
        },

        "spiral-read": {
                storyContent: `## Spiral Matrix

*A visual debugger feature, 2019...*

We wanted to animate filling a grid "outward from center." Needed to generate coordinates in spiral order.

"It's just shrinking boundaries," the artist said, drawing on a whiteboard. She wasn't a programmer but described the algorithm perfectly.

---

### The Challenge

Return elements in spiral order.

---

### Boundary Approach 💡

Track top, bottom, left, right boundaries.

Move right → down → left → up, shrink boundaries.

---

### Implementation

def spiralOrder(matrix):
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        for c in range(left, right + 1):
            result.append(matrix[top][c])
        top += 1
        
        for r in range(top, bottom + 1):
            result.append(matrix[r][right])
        right -= 1
        
        if top <= bottom:
            for c in range(right, left - 1, -1):
                result.append(matrix[bottom][c])
            bottom -= 1
        
        if left <= right:
            for r in range(bottom, top - 1, -1):
                result.append(matrix[r][left])
            left += 1
    
    return result

Now implement it! 🌀`,
                theoryContent: `## Spiral Traversal

### Algorithm
Maintain 4 boundaries.
Right → Down → Left → Up
Shrink after each direction.

### Complexity
- Time: O(m × n)
- Space: O(1)`
        },

        "zero-grid": {
                storyContent: `## Set Matrix Zeroes

*If element is 0, set entire row and column to 0.*

Do it in-place!

---

### O(1) Space Approach 💡

Use first row and column as markers!

1. Mark if first row/col have zeros
2. Mark rows/cols to zero using first row/col
3. Zero based on markers
4. Zero first row/col if needed

Now implement it! 0️⃣`,
                theoryContent: `## Set Matrix Zeroes

### O(1) Space
Use first row and column as flags.
Track first row/col separately.

### Complexity
- Time: O(m × n)
- Space: O(1)`
        },

        "happy-loop": {
                storyContent: `## Happy Number

*Square digits repeatedly. Happy if reaches 1.*

19 → 1+81=82 → 64+4=68 → ... → 1 ✓

---

### Cycle Detection 💡

Either reaches 1 or enters a cycle.

Use Floyd's (fast/slow) or a set.

---

### Implementation

def isHappy(n):
    def sum_squares(num):
        total = 0
        while num:
            num, digit = divmod(num, 10)
            total += digit ** 2
        return total
    
    slow = fast = n
    while True:
        slow = sum_squares(slow)
        fast = sum_squares(sum_squares(fast))
        if fast == 1:
            return True
        if slow == fast:
            return False

Now implement it! 😊`,
                theoryContent: `## Happy Number

### Insight
Either reaches 1 or cycles.
Use cycle detection.

### Complexity
- Time: O(log n)
- Space: O(1) with Floyd's`
        },

        "add-one": {
                storyContent: `## Plus One

*Increment array representing a number.*

[1,2,9] → [1,3,0]
[9,9,9] → [1,0,0,0]

---

### Right to Left 💡

Add 1 from end. Handle carry.

---

### Implementation

def plusOne(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    
    return [1] + digits

Now implement it! ➕`,
                theoryContent: `## Plus One

### Algorithm
From right: if < 9, increment and return.
Else set to 0, continue.
If reach start, prepend 1.

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "power-calc": {
                storyContent: `## Pow(x, n)

*Cryptography lecture, grad school...*

The professor asked: "How would you compute 2^1000000?" Someone said "loop a million times." The professor laughed. "You'd be waiting until the heat death of the universe."

Binary exponentiation. Log n operations instead of n. This technique is everywhere in crypto.

---

### The Challenge

Calculate x^n efficiently.

Use binary exponentiation!

---

### The Insight 💡

x^n = (x^(n/2))^2 if n even
x^n = x × (x^(n-1)) if n odd

---

### Implementation

def myPow(x, n):
    if n < 0:
        x = 1 / x
        n = -n
    
    result = 1
    while n:
        if n % 2:
            result *= x
        x *= x
        n //= 2
    
    return result

Now implement it! ⚡`,
                theoryContent: `## Binary Exponentiation

### Key Insight
x^n = x^(n/2) × x^(n/2)

### Complexity
- Time: O(log n)
- Space: O(1)`
        },

        "string-multiply": {
                storyContent: `## Multiply Strings

*Multiply two numbers as strings.*

Without BigInt, simulate multiplication!

---

### Grade School Multiplication 💡

Multiply digit by digit.
result[i + j + 1] += digit1 × digit2

Handle carries at end.

Now implement it! ✖️`,
                theoryContent: `## String Multiplication

### Algorithm
For each digit pair, add to position i+j+1.
Handle carries.

### Complexity
- Time: O(m × n)
- Space: O(m + n)`
        },

        "square-detect": {
                storyContent: `## Detect Squares

*Count squares that can be formed with a new point.*

Given points, count axis-aligned squares with query point as one corner.

---

### Hash Map Approach 💡

Store point frequencies.

For query (x, y), find diagonal points (x', y') where |x - x'| == |y - y'|.

Check if other two corners exist.

Now implement it! ⬜`,
                theoryContent: `## Detect Squares

### Key Insight
For each point forming diagonal, check other two corners.

### Storage
Use HashMap: point → count

### Complexity
- Add: O(1)
- Count: O(n) for points on same x or y`
        },

        // ============================================
        // BINARY LOGIC (Bit Manipulation)
        // ============================================

        "solo-number": {
                storyContent: `## Single Number

*A coding bootcamp Q&A session...*

Student: "I sorted and checked adjacent pairs." O(n log n).

Another student: "I used a hash set." O(n) space.

Me: "What if I told you there's O(n) time and O(1) space?" Blank stares. Then I revealed XOR magic. Best teaching moment ever.

---

### The Challenge

Every element appears twice except one. Find it.

---

### XOR Magic 💡

a ^ a = 0
a ^ 0 = a
XOR is associative and commutative.

XOR all numbers. Pairs cancel out!

---

### Implementation

def singleNumber(nums):
    result = 0
    for num in nums:
        result ^= num
    return result

Now implement it! 🎯`,
                theoryContent: `## XOR Properties

### Key Properties
a ^ a = 0
a ^ 0 = a
Commutative and associative

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "count-ones": {
                storyContent: `## Number of 1 Bits

*A whiteboard coding session at Dropbox, 2016...*

The interviewer said: "Count the 1s in a binary number without converting to string."

I showed the obvious way - check each bit. Then I revealed Brian Kernighan's trick. n & (n-1) clears the lowest set bit. Their eyebrows raised.

---

### The Challenge

Count set bits in integer.

---

### Approach 💡

While n: n &= (n - 1) clears lowest set bit.

Count iterations.

---

### Implementation

def hammingWeight(n):
    count = 0
    while n:
        n &= (n - 1)
        count += 1
    return count

Now implement it! 1️⃣`,
                theoryContent: `## Brian Kernighan's Algorithm

### Key Insight
n & (n-1) clears lowest set bit.
Count iterations = count of 1s.

### Complexity
- Time: O(number of 1 bits)
- Space: O(1)`
        },

        "bit-count": {
                storyContent: `## Counting Bits

*For 0 to n, count 1 bits in each.*

---

### DP Insight 💡

dp[i] = dp[i >> 1] + (i & 1)

Right shift gives prior answer, add 1 if odd.

---

### Implementation

def countBits(n):
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp

Now implement it! 📊`,
                theoryContent: `## Counting Bits DP

### Recurrence
dp[i] = dp[i >> 1] + (i & 1)

### Complexity
- Time: O(n)
- Space: O(n)`
        },

        "flip-bits": {
                storyContent: `## Reverse Bits

*Reverse bit order of 32-bit unsigned integer.*

---

### Bit by Bit 💡

def reverseBits(n):
    result = 0
    for i in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result

Now implement it! 🔄`,
                theoryContent: `## Reverse Bits

### Algorithm
Extract lowest bit, shift into result.
Repeat 32 times.

### Complexity
- Time: O(32) = O(1)
- Space: O(1)`
        },

        "missing-one": {
                storyContent: `## Missing Number

*Find missing number in 0 to n.*

---

### XOR Approach 💡

XOR all numbers AND all indices.

Missing number remains!

---

### Implementation

def missingNumber(nums):
    result = len(nums)
    for i, num in enumerate(nums):
        result ^= i ^ num
    return result

Or use sum: n(n+1)/2 - sum(nums)

Now implement it! 🔍`,
                theoryContent: `## Missing Number

### XOR Approach
XOR 0..n with all elements.
Missing number remains.

### Sum Approach
expected - actual = missing

### Complexity
- Time: O(n)
- Space: O(1)`
        },

        "no-op-add": {
                storyContent: `## Sum of Two Integers

*Add without + or -!*

---

### Bit Manipulation 💡

Sum without carry: a ^ b
Carry: (a & b) << 1

Repeat until no carry.

---

### Implementation

def getSum(a, b):
    mask = 0xffffffff
    
    while b & mask:
        carry = (a & b) << 1
        a = a ^ b
        b = carry
    
    return a if b == 0 else ~(a ^ mask)

Handle negative numbers with mask!

Now implement it! ➕`,
                theoryContent: `## Bitwise Addition

### Key Insight
XOR = sum without carry
AND << 1 = carry
Repeat until no carry

### Complexity
- Time: O(1) for fixed-width integers
- Space: O(1)`
        },

        "flip-integer": {
                storyContent: `## Reverse Integer

*Reverse digits of integer.*

123 → 321
-123 → -321
Overflow → 0

---

### Implementation 💡

def reverse(x):
    sign = -1 if x < 0 else 1
    x = abs(x)
    result = 0
    
    while x:
        result = result * 10 + x % 10
        x //= 10
    
    result *= sign
    
    if result < -2**31 or result > 2**31 - 1:
        return 0
    
    return result

Now implement it! 🔢`,
                theoryContent: `## Reverse Integer

### Algorithm
Extract last digit, build reversed number.
Check overflow before/after.

### Complexity
- Time: O(log x)
- Space: O(1)`
        }
};

// Export a function to get story for a lesson slug
export function getStory(slug: string) {
        return RICH_STORIES[slug as keyof typeof RICH_STORIES];
}
