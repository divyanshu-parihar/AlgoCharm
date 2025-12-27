// Structured hints and solutions for lessons
// Hints: Array of strings, revealed progressively
// Solutions: Code in C++/Python/TypeScript + explanation + pattern tips

export interface LessonExtras {
    hints: string[];
    solutions: {
        cpp?: string;
        python?: string;
        typescript?: string;
    };
    explanation: string;
    patternTips: string;
}

export const LESSON_EXTRAS: Record<string, LessonExtras> = {
    // ============================================
    // DATA VAULT (Arrays & Hashing)
    // ============================================

    "spot-repeat": {
        hints: [
            "You only need to track ONE thing: the values you've seen so far.",
            "There's a data structure that lets you check 'have I seen X?' in O(1) time.",
            "As soon as you find something you've seen before, you can stop immediately."
        ],
        solutions: {
            python: `def containsDuplicate(nums: list[int]) -> bool:
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False`,
            cpp: `bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> seen;
    for (int num : nums) {
        if (seen.count(num)) return true;
        seen.insert(num);
    }
    return false;
}`,
            typescript: `function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();
    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}`
        },
        explanation: "We use a hash set to remember every number we've seen. For each new number, we check if it's already in the set. If yes, we found a duplicate! If no, we add it and continue. This gives us O(n) time and O(n) space.",
        patternTips: "This is the 'have I seen this before?' pattern. Anytime you need to check for duplicates or existence during a single pass, reach for a hash set. You'll use this in Two Sum, finding cycles, and many more problems."
    },

    "letter-shuffle": {
        hints: [
            "Two words are anagrams if they have the same character frequencies.",
            "You could use ONE counter: increment for word A, decrement for word B.",
            "If they're anagrams, every count should be zero at the end."
        ],
        solutions: {
            python: `def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    count = {}
    for c in s:
        count[c] = count.get(c, 0) + 1
    for c in t:
        count[c] = count.get(c, 0) - 1
        if count[c] < 0:
            return False
    return True`,
            cpp: `bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    unordered_map<char, int> count;
    for (char c : s) count[c]++;
    for (char c : t) {
        if (--count[c] < 0) return false;
    }
    return true;
}`,
            typescript: `function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const count: Record<string, number> = {};
    for (const c of s) count[c] = (count[c] || 0) + 1;
    for (const c of t) {
        count[c] = (count[c] || 0) - 1;
        if (count[c] < 0) return false;
    }
    return true;
}`
        },
        explanation: "We count character frequencies. Increment for the first string, decrement for the second. If any count goes negative, the second string has a character the first doesn't (or more of it). O(n) time, O(1) space (bounded by alphabet size).",
        patternTips: "When order doesn't matter, think frequencies! This pattern appears in anagram grouping, permutation checks, and any problem where you're comparing 'content' regardless of arrangement."
    },

    "pair-hunt": {
        hints: [
            "For each number x, you're looking for (target - x). That's the 'complement'.",
            "What if you could check instantly whether the complement exists?",
            "Store each number AFTER checking for its complement. That way you find pairs on the second occurrence."
        ],
        solutions: {
            python: `def twoSum(nums: list[int], target: int) -> list[int]:
    seen = {}  # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
            cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}`,
            typescript: `function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }
        seen.set(nums[i], i);
    }
    return [];
}`
        },
        explanation: "Transform the problem: instead of finding two numbers that sum to target, find one number whose complement exists. Use a hash map to store numbers as you go. Check for complement BEFORE storing to avoid using the same element twice.",
        patternTips: "This 'complement lookup' pattern is foundational. It extends to 3Sum (sort + two pointers), 4Sum, and any 'find pairs with property X' problem. Always ask: can I reframe this as a lookup?"
    },

    "sort-letters": {
        hints: [
            "All anagrams share a common 'signature' - something identical about them.",
            "What if you sorted the letters? All anagrams would become the same string!",
            "Use a hash map where the key is the signature, value is the list of words."
        ],
        solutions: {
            python: `def groupAnagrams(strs: list[str]) -> list[list[str]]:
    groups = {}
    for word in strs:
        key = ''.join(sorted(word))
        if key not in groups:
            groups[key] = []
        groups[key].append(word)
    return list(groups.values())`,
            cpp: `vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> groups;
    for (string& word : strs) {
        string key = word;
        sort(key.begin(), key.end());
        groups[key].push_back(word);
    }
    vector<vector<string>> result;
    for (auto& pair : groups) {
        result.push_back(pair.second);
    }
    return result;
}`,
            typescript: `function groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>();
    for (const word of strs) {
        const key = word.split('').sort().join('');
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key)!.push(word);
    }
    return Array.from(groups.values());
}`
        },
        explanation: "Create a 'canonical form' for each word (sorted letters). Words with the same canonical form are anagrams. Group by this key using a hash map. Time: O(n * k log k) where k is max word length.",
        patternTips: "The 'signature/canonical form' pattern is powerful for grouping. Use it whenever you need to group by equivalence: anagrams, isomorphic strings, equivalent SQL queries, etc."
    },

    "most-common": {
        hints: [
            "First, count the frequency of each element. You know how to do this!",
            "Then find the top K. Sorting works but is O(n log n). Can you do O(n)?",
            "The maximum frequency is n. What if you created 'buckets' by frequency?"
        ],
        solutions: {
            python: `def topKFrequent(nums: list[int], k: int) -> list[int]:
    from collections import Counter
    freq = Counter(nums)
    buckets = [[] for _ in range(len(nums) + 1)]
    for num, count in freq.items():
        buckets[count].append(num)
    result = []
    for i in range(len(buckets) - 1, -1, -1):
        result.extend(buckets[i])
        if len(result) >= k:
            return result[:k]
    return result`,
            cpp: `vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for (int num : nums) freq[num]++;
    
    vector<vector<int>> buckets(nums.size() + 1);
    for (auto& [num, count] : freq) {
        buckets[count].push_back(num);
    }
    
    vector<int> result;
    for (int i = buckets.size() - 1; i >= 0 && result.size() < k; i--) {
        for (int num : buckets[i]) {
            result.push_back(num);
            if (result.size() == k) return result;
        }
    }
    return result;
}`,
            typescript: `function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    const buckets: number[][] = Array.from({length: nums.length + 1}, () => []);
    for (const [num, count] of freq) {
        buckets[count].push(num);
    }
    
    const result: number[] = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }
    return result.slice(0, k);
}`
        },
        explanation: "Count frequencies with a hash map, then use bucket sort. Since max frequency is n, create n buckets where bucket[i] holds elements appearing i times. Walk from highest bucket down to collect top K. O(n) time!",
        patternTips: "Bucket sort works when values are bounded. For frequency problems, the bound is the array size. Also know the heap approach for when k << n (O(n log k))."
    },

    "streak-finder": {
        hints: [
            "Put all numbers in a set for O(1) lookup.",
            "The trick: only start counting from the BEGINNING of a sequence.",
            "A number n is a sequence start if (n-1) doesn't exist in the set."
        ],
        solutions: {
            python: `def longestConsecutive(nums: list[int]) -> int:
    num_set = set(nums)
    longest = 0
    
    for num in num_set:
        if num - 1 not in num_set:
            current = num
            streak = 1
            while current + 1 in num_set:
                current += 1
                streak += 1
            longest = max(longest, streak)
    
    return longest`,
            cpp: `int longestConsecutive(vector<int>& nums) {
    unordered_set<int> numSet(nums.begin(), nums.end());
    int longest = 0;
    
    for (int num : numSet) {
        if (!numSet.count(num - 1)) {
            int current = num;
            int streak = 1;
            while (numSet.count(current + 1)) {
                current++;
                streak++;
            }
            longest = max(longest, streak);
        }
    }
    return longest;
}`,
            typescript: `function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let longest = 0;
    
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let current = num;
            let streak = 1;
            while (numSet.has(current + 1)) {
                current++;
                streak++;
            }
            longest = Math.max(longest, streak);
        }
    }
    return longest;
}`
        },
        explanation: "The key insight: only count from sequence starts. A number is a start if its predecessor doesn't exist. This prevents counting the same sequence multiple times. Each number is visited at most twice → O(n).",
        patternTips: "The 'process only from start' optimization appears in many problems: connected components, string matching, interval processing. It's about avoiding redundant work."
    },

    // ============================================
    // DUAL SCANNERS (Two Pointers)
    // ============================================

    "mirror-check": {
        hints: [
            "Use two pointers: one at the start, one at the end.",
            "Skip non-alphanumeric characters as you go.",
            "Compare characters case-insensitively."
        ],
        solutions: {
            python: `def isPalindrome(s: str) -> bool:
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True`,
            cpp: `bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++;
        right--;
    }
    return true;
}`,
            typescript: `function isPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < right && !s[left].match(/[a-z0-9]/i)) left++;
        while (left < right && !s[right].match(/[a-z0-9]/i)) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
}`
        },
        explanation: "Two pointers converge from both ends. Skip non-alphanumeric chars and compare case-insensitively. If all pairs match, it's a palindrome.",
        patternTips: "Two pointers from opposite ends is the classic palindrome pattern. Use it for any 'check from both sides' problem."
    },

    "sorted-pair": {
        hints: [
            "The array is SORTED. This changes everything!",
            "With two pointers, you can adjust based on whether sum is too big or too small.",
            "No hash map needed when the array is sorted."
        ],
        solutions: {
            python: `def twoSum(numbers: list[int], target: int) -> list[int]:
    left, right = 0, len(numbers) - 1
    while left < right:
        curr_sum = numbers[left] + numbers[right]
        if curr_sum == target:
            return [left + 1, right + 1]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return []`,
            cpp: `vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0, right = numbers.size() - 1;
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) return {left + 1, right + 1};
        else if (sum < target) left++;
        else right--;
    }
    return {};
}`,
            typescript: `function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        else if (sum < target) left++;
        else right--;
    }
    return [];
}`
        },
        explanation: "Sorted array = two pointers! Start at both ends. Sum too small? Move left pointer right. Sum too big? Move right pointer left. O(n) time, O(1) space!",
        patternTips: "When array is sorted and you need pairs/triplets, two pointers usually beats hash maps. O(1) space is a nice bonus."
    },

    "triple-match": {
        hints: [
            "Sort the array first. Then fix one number and use two pointers for the other two.",
            "Skip duplicates to avoid duplicate triplets.",
            "After sorting, two pointers can find pairs that sum to -(current number)."
        ],
        solutions: {
            python: `def threeSum(nums: list[int]) -> list[list[int]]:
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left+1]: left += 1
                while left < right and nums[right] == nums[right-1]: right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    return result`,
            cpp: `vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> result;
    for (int i = 0; i < nums.size() - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        int left = i + 1, right = nums.size() - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push_back({nums[i], nums[left], nums[right]});
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++; right--;
            } else if (sum < 0) left++;
            else right--;
        }
    }
    return result;
}`,
            typescript: `function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left+1]) left++;
                while (left < right && nums[right] === nums[right-1]) right--;
                left++; right--;
            } else if (sum < 0) left++;
            else right--;
        }
    }
    return result;
}`
        },
        explanation: "Sort first, then for each number, use two pointers to find pairs summing to its negative. Skip duplicates carefully to avoid duplicate triplets.",
        patternTips: "3Sum = sort + fix one + two pointers. 4Sum extends this with another outer loop. This pattern scales to kSum problems."
    },

    "max-basin": {
        hints: [
            "The water area depends on the SHORTER wall, not the taller one.",
            "Start with widest possible container (pointers at both ends).",
            "Move the pointer pointing to the shorter wall inward."
        ],
        solutions: {
            python: `def maxArea(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        h = min(height[left], height[right])
        w = right - left
        max_water = max(max_water, h * w)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water`,
            cpp: `int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int maxWater = 0;
    while (left < right) {
        int h = min(height[left], height[right]);
        int w = right - left;
        maxWater = max(maxWater, h * w);
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}`,
            typescript: `function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1;
    let maxWater = 0;
    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        maxWater = Math.max(maxWater, h * w);
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}`
        },
        explanation: "Start widest, then shrink by moving the shorter wall. Why? Moving the taller wall can only decrease area (shorter wall still limits height). Moving shorter wall might find a taller one.",
        patternTips: "This greedy two-pointer approach works because we can prove moving the taller wall never helps. Always look for such invariants."
    },

    "flood-volume": {
        hints: [
            "Each position can trap water based on the min of max-heights on its left and right.",
            "Two pointers from ends, tracking left_max and right_max.",
            "Water at any position = min(left_max, right_max) - height[i]."
        ],
        solutions: {
            python: `def trap(height: list[int]) -> int:
    if not height: return 0
    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]
    result = 0
    while left < right:
        if left_max < right_max:
            left += 1
            left_max = max(left_max, height[left])
            result += left_max - height[left]
        else:
            right -= 1
            right_max = max(right_max, height[right])
            result += right_max - height[right]
    return result`,
            cpp: `int trap(vector<int>& height) {
    if (height.empty()) return 0;
    int left = 0, right = height.size() - 1;
    int leftMax = height[left], rightMax = height[right];
    int result = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = max(leftMax, height[left]);
            result += leftMax - height[left];
        } else {
            right--;
            rightMax = max(rightMax, height[right]);
            result += rightMax - height[right];
        }
    }
    return result;
}`,
            typescript: `function trap(height: number[]): number {
    if (!height.length) return 0;
    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right];
    let result = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            result += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            result += rightMax - height[right];
        }
    }
    return result;
}`
        },
        explanation: "Water trapped at position i = min(leftMax, rightMax) - height[i]. Two pointers let us compute this in O(1) space by always processing the side with smaller max.",
        patternTips: "This is a masterclass in two pointers. The key insight: we only need to know the min of the two maxes, so we can process greedily from the smaller side."
    },

    // ============================================
    // MOVING FRAME (Sliding Window)
    // ============================================

    "peak-profit": {
        hints: [
            "Track the minimum price seen so far as you iterate.",
            "At each price, calculate profit if you sold today.",
            "One pass is enough!"
        ],
        solutions: {
            python: `def maxProfit(prices: list[int]) -> int:
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`,
            cpp: `int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX, maxProfit = 0;
    for (int price : prices) {
        minPrice = min(minPrice, price);
        maxProfit = max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
            typescript: `function maxProfit(prices: number[]): number {
    let minPrice = Infinity, maxProfit = 0;
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`
        },
        explanation: "Track minimum seen so far. For each day, best profit is today's price minus that minimum. One pass, O(n) time, O(1) space.",
        patternTips: "This 'track best seen so far' pattern is foundational for many DP problems. It's the simplest form of sliding window."
    },

    "unique-streak": {
        hints: [
            "Sliding window: expand right, shrink left when you see a duplicate.",
            "Use a set to track characters in current window.",
            "Update max length when window is valid."
        ],
        solutions: {
            python: `def lengthOfLongestSubstring(s: str) -> int:
    chars = set()
    left = max_len = 0
    for right in range(len(s)):
        while s[right] in chars:
            chars.remove(s[left])
            left += 1
        chars.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len`,
            cpp: `int lengthOfLongestSubstring(string s) {
    unordered_set<char> chars;
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.size(); right++) {
        while (chars.count(s[right])) {
            chars.erase(s[left++]);
        }
        chars.insert(s[right]);
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
            typescript: `function lengthOfLongestSubstring(s: string): number {
    const chars = new Set<string>();
    let left = 0, maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        while (chars.has(s[right])) {
            chars.delete(s[left++]);
        }
        chars.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`
        },
        explanation: "Classic sliding window: expand right, shrink left when constraint violated. Set tracks current window's characters for O(1) duplicate check.",
        patternTips: "This is THE sliding window template. Expand right, shrink left until valid. Works for any 'longest valid substring' problem."
    },

    "max-same-char": {
        hints: [
            "Valid window: length - maxFrequency <= k",
            "Expand right always, shrink left only when constraint violated.",
            "Track frequency of each character in window.",
            "You don't need to decrease maxFrequency when shrinking - we only care about longer windows."
        ],
        solutions: {
            python: `def characterReplacement(s: str, k: int) -> int:
    count = {}
    left = max_freq = result = 0
    
    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_freq = max(max_freq, count[s[right]])
        
        if (right - left + 1) - max_freq > k:
            count[s[left]] -= 1
            left += 1
        
        result = max(result, right - left + 1)
    
    return result`,
            cpp: `int characterReplacement(string s, int k) {
    vector<int> count(26, 0);
    int left = 0, maxFreq = 0, result = 0;
    
    for (int right = 0; right < s.size(); right++) {
        count[s[right] - 'A']++;
        maxFreq = max(maxFreq, count[s[right] - 'A']);
        
        if ((right - left + 1) - maxFreq > k) {
            count[s[left] - 'A']--;
            left++;
        }
        
        result = max(result, right - left + 1);
    }
    
    return result;
}`,
            typescript: `function characterReplacement(s: string, k: number): number {
    const count: Record<string, number> = {};
    let left = 0, maxFreq = 0, result = 0;
    
    for (let right = 0; right < s.length; right++) {
        count[s[right]] = (count[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, count[s[right]]);
        
        if ((right - left + 1) - maxFreq > k) {
            count[s[left]]--;
            left++;
        }
        
        result = Math.max(result, right - left + 1);
    }
    
    return result;
}`
        },
        explanation: "Sliding window where validity = (window size - max frequency) <= k. Key insight: we don't shrink maxFreq because we only care about finding LONGER windows.",
        patternTips: "The 'don't decrease max' trick is subtle but powerful. When searching for max, past max values don't hurt us if they don't help."
    },

    "frame-maximum": {
        hints: [
            "Use a deque to maintain indices of potential maximums.",
            "Keep deque in decreasing order - remove smaller elements from back.",
            "Remove front element when it goes out of window.",
            "Front of deque is always the maximum of current window."
        ],
        solutions: {
            python: `from collections import deque

def maxSlidingWindow(nums: list[int], k: int) -> list[int]:
    dq = deque()  # stores indices
    result = []
    
    for i in range(len(nums)):
        # Remove indices out of window
        if dq and dq[0] < i - k + 1:
            dq.popleft()
        
        # Remove smaller elements from back
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        
        dq.append(i)
        
        # Start recording after first window
        if i >= k - 1:
            result.append(nums[dq[0]])
    
    return result`,
            cpp: `vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;  // stores indices
    vector<int> result;
    
    for (int i = 0; i < nums.size(); i++) {
        // Remove indices out of window
        if (!dq.empty() && dq.front() < i - k + 1) {
            dq.pop_front();
        }
        
        // Remove smaller elements from back
        while (!dq.empty() && nums[dq.back()] < nums[i]) {
            dq.pop_back();
        }
        
        dq.push_back(i);
        
        // Start recording after first window
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }
    
    return result;
}`,
            typescript: `function maxSlidingWindow(nums: number[], k: number): number[] {
    const dq: number[] = [];  // stores indices
    const result: number[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices out of window
        if (dq.length && dq[0] < i - k + 1) {
            dq.shift();
        }
        
        // Remove smaller elements from back
        while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
            dq.pop();
        }
        
        dq.push(i);
        
        // Start recording after first window
        if (i >= k - 1) {
            result.push(nums[dq[0]]);
        }
    }
    
    return result;
}`
        },
        explanation: "Monotonic deque maintains indices in decreasing order of values. Front is always max. Each element added/removed once, giving O(n) time.",
        patternTips: "Monotonic deque pattern: maintain useful elements in sorted order. Works for next greater element, histogram area, and window min/max problems."
    },

    "bracket-match": {
        hints: [
            "Push opening brackets onto stack.",
            "For closing brackets, check if top of stack matches.",
            "Stack should be empty at the end."
        ],
        solutions: {
            python: `def isValid(s: str) -> bool:
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    for c in s:
        if c in pairs:
            if not stack or stack[-1] != pairs[c]:
                return False
            stack.pop()
        else:
            stack.append(c)
    return len(stack) == 0`,
            cpp: `bool isValid(string s) {
    stack<char> st;
    unordered_map<char, char> pairs = {{')', '('}, {'}', '{'}, {']', '['}};
    for (char c : s) {
        if (pairs.count(c)) {
            if (st.empty() || st.top() != pairs[c]) return false;
            st.pop();
        } else {
            st.push(c);
        }
    }
    return st.empty();
}`,
            typescript: `function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: Record<string, string> = {')': '(', '}': '{', ']': '['};
    for (const c of s) {
        if (c in pairs) {
            if (!stack.length || stack[stack.length - 1] !== pairs[c]) return false;
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
}`
        },
        explanation: "Stack is perfect for matching nested structures. Opening brackets go on, closing brackets must match top. Empty stack at end = valid.",
        patternTips: "This is THE intro to stacks. Any nested/matching structure problem (HTML tags, expressions) uses this same pattern."
    },

    "mini-stack": {
        hints: [
            "Track minimum at each level of the stack.",
            "When pushing, also track what the min was at that point.",
            "Use an auxiliary stack or store (value, min) pairs."
        ],
        solutions: {
            python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    
    def pop(self) -> None:
        if self.stack.pop() == self.min_stack[-1]:
            self.min_stack.pop()
    
    def top(self) -> int:
        return self.stack[-1]
    
    def getMin(self) -> int:
        return self.min_stack[-1]`,
            cpp: `class MinStack {
    stack<int> st, minSt;
public:
    void push(int val) {
        st.push(val);
        if (minSt.empty() || val <= minSt.top()) minSt.push(val);
    }
    void pop() {
        if (st.top() == minSt.top()) minSt.pop();
        st.pop();
    }
    int top() { return st.top(); }
    int getMin() { return minSt.top(); }
};`,
            typescript: `class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    push(val: number): void {
        this.stack.push(val);
        if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }
    pop(): void {
        if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }
    top(): number { return this.stack[this.stack.length - 1]; }
    getMin(): number { return this.minStack[this.minStack.length - 1]; }
}`
        },
        explanation: "Auxiliary min stack: push to min stack only when new value <= current min. Pop from min stack only when popping the current min.",
        patternTips: "Augmenting data structures is key. Ask: 'What extra info can I track to answer queries faster?'"
    },

    "reverse-calc": {
        hints: [
            "Process tokens left to right using a stack.",
            "Numbers go on the stack.",
            "Operators pop two numbers, compute, push result."
        ],
        solutions: {
            python: `def evalRPN(tokens: list[str]) -> int:
    stack = []
    for token in tokens:
        if token in '+-*/':
            b, a = stack.pop(), stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            else: stack.append(int(a / b))
        else:
            stack.append(int(token))
    return stack[0]`,
            cpp: `int evalRPN(vector<string>& tokens) {
    stack<long long> st;
    for (const string& token : tokens) {
        if (token == "+" || token == "-" || token == "*" || token == "/") {
            long long b = st.top(); st.pop();
            long long a = st.top(); st.pop();
            if (token == "+") st.push(a + b);
            else if (token == "-") st.push(a - b);
            else if (token == "*") st.push(a * b);
            else st.push(a / b);
        } else st.push(stoll(token));
    }
    return st.top();
}`,
            typescript: `function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    for (const token of tokens) {
        if (['+', '-', '*', '/'].includes(token)) {
            const b = stack.pop()!, a = stack.pop()!;
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else stack.push(Math.trunc(a / b));
        } else stack.push(parseInt(token));
    }
    return stack[0];
}`
        },
        explanation: "RPN is designed for stack evaluation. Numbers push, operators pop two operands, compute, push result.",
        patternTips: "This is exactly how calculators work. Expression parsing almost always involves a stack."
    },

    "heat-wave": {
        hints: [
            "For each day, you need the NEXT warmer day.",
            "Process from right to left, or use monotonic decreasing stack.",
            "Stack stores indices, not temperatures."
        ],
        solutions: {
            python: `def dailyTemperatures(temperatures: list[int]) -> list[int]:
    n = len(temperatures)
    result = [0] * n
    stack = []
    for i in range(n):
        while stack and temperatures[i] > temperatures[stack[-1]]:
            prev = stack.pop()
            result[prev] = i - prev
        stack.append(i)
    return result`,
            cpp: `vector<int> dailyTemperatures(vector<int>& temps) {
    int n = temps.size();
    vector<int> result(n, 0);
    stack<int> st;
    for (int i = 0; i < n; i++) {
        while (!st.empty() && temps[i] > temps[st.top()]) {
            int prev = st.top(); st.pop();
            result[prev] = i - prev;
        }
        st.push(i);
    }
    return result;
}`,
            typescript: `function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stack: number[] = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prev = stack.pop()!;
            result[prev] = i - prev;
        }
        stack.push(i);
    }
    return result;
}`
        },
        explanation: "Monotonic decreasing stack: when you find a warmer day, it's the answer for all cooler days on the stack. Pop them and record the distance.",
        patternTips: "'Next greater element' pattern. Stack stores elements waiting for their answer. New element pops and answers smaller ones."
    },

    "car-convoy": {
        hints: [
            "Calculate time for each car to reach the target.",
            "Process from the end (closest to target) backwards.",
            "A car joins the fleet in front if it catches up."
        ],
        solutions: {
            python: `def carFleet(target: int, position: list[int], speed: list[int]) -> int:
    pairs = sorted(zip(position, speed), reverse=True)
    stack = []
    for pos, spd in pairs:
        time = (target - pos) / spd
        if not stack or time > stack[-1]:
            stack.append(time)
    return len(stack)`,
            cpp: `int carFleet(int target, vector<int>& position, vector<int>& speed) {
    vector<pair<int,double>> cars;
    for (int i = 0; i < position.size(); i++) {
        cars.push_back({position[i], (double)(target - position[i]) / speed[i]});
    }
    sort(cars.rbegin(), cars.rend());
    int fleets = 0;
    double maxTime = 0;
    for (auto& [pos, time] : cars) {
        if (time > maxTime) { fleets++; maxTime = time; }
    }
    return fleets;
}`,
            typescript: `function carFleet(target: number, position: number[], speed: number[]): number {
    const cars = position.map((p, i) => [p, (target - p) / speed[i]]);
    cars.sort((a, b) => b[0] - a[0]);
    let fleets = 0, maxTime = 0;
    for (const [_, time] of cars) {
        if (time > maxTime) { fleets++; maxTime = time; }
    }
    return fleets;
}`
        },
        explanation: "Sort by position (closest to target first). If a car takes longer than the one in front, it forms a new fleet. Otherwise, it joins the fleet.",
        patternTips: "This is a greedy + stack pattern. The key insight: slower cars block faster ones behind them."
    },

    "biggest-bar": {
        hints: [
            "For each bar, find the first smaller bar on left and right.",
            "Monotonic increasing stack helps find boundaries.",
            "Area = height × (right_boundary - left_boundary - 1)."
        ],
        solutions: {
            python: `def largestRectangleArea(heights: list[int]) -> int:
    stack = []
    max_area = 0
    for i, h in enumerate(heights + [0]):
        while stack and heights[stack[-1]] > h:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area`,
            cpp: `int largestRectangleArea(vector<int>& heights) {
    stack<int> st;
    int maxArea = 0;
    heights.push_back(0);
    for (int i = 0; i < heights.size(); i++) {
        while (!st.empty() && heights[st.top()] > heights[i]) {
            int h = heights[st.top()]; st.pop();
            int w = st.empty() ? i : i - st.top() - 1;
            maxArea = max(maxArea, h * w);
        }
        st.push(i);
    }
    return maxArea;
}`,
            typescript: `function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
    let maxArea = 0;
    heights.push(0);
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            const h = heights[stack.pop()!];
            const w = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }
    return maxArea;
}`
        },
        explanation: "Monotonic increasing stack. When we see a shorter bar, pop taller ones and calculate their max rectangle. The stack gives us left boundary.",
        patternTips: "This is THE hard stack problem. Master it and you understand monotonic stacks deeply."
    },

    // ============================================
    // DIVIDE CONQUER (Binary Search)
    // ============================================

    "half-search": {
        hints: [
            "Classic binary search: compare middle element to target.",
            "If target < mid, search left half. If target > mid, search right.",
            "Be careful with overflow when calculating mid."
        ],
        solutions: {
            python: `def search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
            cpp: `int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
            typescript: `function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`
        },
        explanation: "Halve the search space each iteration. Use left + (right - left) / 2 to avoid integer overflow.",
        patternTips: "This is THE foundational algorithm. O(log n) is incredibly powerful. From 1 billion elements to 30 comparisons."
    },

    "grid-hunt": {
        hints: [
            "Treat the 2D matrix as a 1D sorted array.",
            "Convert index i to (row, col) = (i / cols, i % cols).",
            "Then apply standard binary search."
        ],
        solutions: {
            python: `def searchMatrix(matrix: list[list[int]], target: int) -> bool:
    if not matrix: return False
    m, n = len(matrix), len(matrix[0])
    left, right = 0, m * n - 1
    while left <= right:
        mid = left + (right - left) // 2
        val = matrix[mid // n][mid % n]
        if val == target: return True
        elif val < target: left = mid + 1
        else: right = mid - 1
    return False`,
            cpp: `bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int m = matrix.size(), n = matrix[0].size();
    int left = 0, right = m * n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int val = matrix[mid / n][mid % n];
        if (val == target) return true;
        else if (val < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}`,
            typescript: `function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const val = matrix[Math.floor(mid / n)][mid % n];
        if (val === target) return true;
        else if (val < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}`
        },
        explanation: "The matrix is essentially a sorted array laid out in rows. Map 1D index to 2D coordinates and binary search.",
        patternTips: "Always look for ways to reduce dimensions. If it's 'sorted' in any sense, binary search likely applies."
    },

    "banana-speed": {
        hints: [
            "Binary search on the ANSWER (eating speed), not the input.",
            "For a given speed k, can Koko finish in h hours?",
            "Search range: 1 to max(piles)."
        ],
        solutions: {
            python: `def minEatingSpeed(piles: list[int], h: int) -> int:
    def canFinish(k):
        return sum((p + k - 1) // k for p in piles) <= h
    
    left, right = 1, max(piles)
    while left < right:
        mid = left + (right - left) // 2
        if canFinish(mid):
            right = mid
        else:
            left = mid + 1
    return left`,
            cpp: `int minEatingSpeed(vector<int>& piles, int h) {
    int left = 1, right = *max_element(piles.begin(), piles.end());
    while (left < right) {
        int mid = left + (right - left) / 2;
        long hours = 0;
        for (int p : piles) hours += (p + mid - 1) / mid;
        if (hours <= h) right = mid;
        else left = mid + 1;
    }
    return left;
}`,
            typescript: `function minEatingSpeed(piles: number[], h: number): number {
    let left = 1, right = Math.max(...piles);
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        const hours = piles.reduce((sum, p) => sum + Math.ceil(p / mid), 0);
        if (hours <= h) right = mid;
        else left = mid + 1;
    }
    return left;
}`
        },
        explanation: "Binary search on answer space. The predicate 'can finish in h hours at speed k' is monotonic - use binary search to find minimum k.",
        patternTips: "Binary search on answer is powerful. If answer space is bounded and predicate is monotonic, binary search works."
    },

    "rotated-min": {
        hints: [
            "The array is sorted but rotated. One half is always sorted.",
            "Compare mid with right to determine which half has the minimum.",
            "The minimum is at the rotation point."
        ],
        solutions: {
            python: `def findMin(nums: list[int]) -> int:
    left, right = 0, len(nums) - 1
    while left < right:
        mid = left + (right - left) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    return nums[left]`,
            cpp: `int findMin(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
}`,
            typescript: `function findMin(nums: number[]): number {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
}`
        },
        explanation: "If mid > right, minimum is in right half. Otherwise, minimum is in left half (including mid). Narrow down to the pivot point.",
        patternTips: "Rotated arrays: always identify which half is sorted. The anomaly (min or target) is in the unsorted half."
    },

    "rotated-search": {
        hints: [
            "First determine which half is sorted.",
            "Then check if target is in the sorted half.",
            "Search the half where target could be."
        ],
        solutions: {
            python: `def search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`,
            cpp: `int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}`,
            typescript: `function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}`
        },
        explanation: "Identify sorted half. If target is in sorted half's range, search there. Otherwise search the other half.",
        patternTips: "Modified binary search. The invariant: one half is always sorted. Use that to determine where to search."
    },

    "time-cache": {
        hints: [
            "Store (timestamp, value) pairs for each key.",
            "Binary search for the largest timestamp <= given timestamp.",
            "Keep timestamps sorted (natural if set() is called with increasing timestamps)."
        ],
        solutions: {
            python: `class TimeMap:
    def __init__(self):
        self.store = {}
    
    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.store:
            self.store[key] = []
        self.store[key].append((timestamp, value))
    
    def get(self, key: str, timestamp: int) -> str:
        if key not in self.store:
            return ""
        vals = self.store[key]
        left, right = 0, len(vals) - 1
        result = ""
        while left <= right:
            mid = (left + right) // 2
            if vals[mid][0] <= timestamp:
                result = vals[mid][1]
                left = mid + 1
            else:
                right = mid - 1
        return result`,
            cpp: `class TimeMap {
    unordered_map<string, vector<pair<int, string>>> store;
public:
    void set(string key, string value, int timestamp) {
        store[key].push_back({timestamp, value});
    }
    string get(string key, int timestamp) {
        if (!store.count(key)) return "";
        auto& vals = store[key];
        int left = 0, right = vals.size() - 1;
        string result = "";
        while (left <= right) {
            int mid = (left + right) / 2;
            if (vals[mid].first <= timestamp) {
                result = vals[mid].second;
                left = mid + 1;
            } else right = mid - 1;
        }
        return result;
    }
};`,
            typescript: `class TimeMap {
    private store: Map<string, [number, string][]> = new Map();
    
    set(key: string, value: string, timestamp: number): void {
        if (!this.store.has(key)) this.store.set(key, []);
        this.store.get(key)!.push([timestamp, value]);
    }
    
    get(key: string, timestamp: number): string {
        if (!this.store.has(key)) return "";
        const vals = this.store.get(key)!;
        let left = 0, right = vals.length - 1, result = "";
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (vals[mid][0] <= timestamp) {
                result = vals[mid][1];
                left = mid + 1;
            } else right = mid - 1;
        }
        return result;
    }
}`
        },
        explanation: "Store values with timestamps. For get(), binary search for floor of timestamp. Since set calls have increasing timestamps, array stays sorted.",
        patternTips: "Time-based data: often just need binary search on timestamps. The constraint 'increasing timestamps' simplifies things."
    },

    "middle-ground": {
        hints: [
            "Median requires the (n/2)th element if we merged both arrays.",
            "Binary search on the smaller array for the partition point.",
            "Ensure elements on left of partition are less than elements on right."
        ],
        solutions: {
            python: `def findMedianSortedArrays(nums1: list[int], nums2: list[int]) -> float:
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    left, right = 0, m
    while left <= right:
        i = (left + right) // 2
        j = (m + n + 1) // 2 - i
        
        left1 = nums1[i-1] if i > 0 else float('-inf')
        right1 = nums1[i] if i < m else float('inf')
        left2 = nums2[j-1] if j > 0 else float('-inf')
        right2 = nums2[j] if j < n else float('inf')
        
        if left1 <= right2 and left2 <= right1:
            if (m + n) % 2:
                return max(left1, left2)
            return (max(left1, left2) + min(right1, right2)) / 2
        elif left1 > right2:
            right = i - 1
        else:
            left = i + 1
    return 0.0`,
            cpp: `double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    if (nums1.size() > nums2.size()) swap(nums1, nums2);
    int m = nums1.size(), n = nums2.size();
    int left = 0, right = m;
    while (left <= right) {
        int i = (left + right) / 2;
        int j = (m + n + 1) / 2 - i;
        int left1 = i > 0 ? nums1[i-1] : INT_MIN;
        int right1 = i < m ? nums1[i] : INT_MAX;
        int left2 = j > 0 ? nums2[j-1] : INT_MIN;
        int right2 = j < n ? nums2[j] : INT_MAX;
        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2) return max(left1, left2);
            return (max(left1, left2) + min(right1, right2)) / 2.0;
        } else if (left1 > right2) right = i - 1;
        else left = i + 1;
    }
    return 0.0;
}`,
            typescript: `function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    const m = nums1.length, n = nums2.length;
    let left = 0, right = m;
    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;
        const left1 = i > 0 ? nums1[i-1] : -Infinity;
        const right1 = i < m ? nums1[i] : Infinity;
        const left2 = j > 0 ? nums2[j-1] : -Infinity;
        const right2 = j < n ? nums2[j] : Infinity;
        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2) return Math.max(left1, left2);
            return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
        } else if (left1 > right2) right = i - 1;
        else left = i + 1;
    }
    return 0;
}`
        },
        explanation: "Binary search on the smaller array for partition point. Valid partition: all left elements ≤ all right elements. O(log min(m,n)).",
        patternTips: "This is THE hard binary search problem. The partition concept is key: we're not searching for a value, but a valid split."
    },

    // ============================================
    // CHAIN LINKS (Linked List)
    // ============================================

    "flip-list": {
        hints: [
            "You need three pointers: prev, curr, next.",
            "For each node, save next, point curr to prev, move forward.",
            "At the end, prev is the new head."
        ],
        solutions: {
            python: `def reverseList(head):
    prev, curr = None, head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev`,
            cpp: `ListNode* reverseList(ListNode* head) {
    ListNode *prev = nullptr, *curr = head;
    while (curr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
            typescript: `function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null, curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`
        },
        explanation: "Iterate through, reversing each pointer. Save next before changing, then advance all three pointers.",
        patternTips: "This is THE fundamental linked list operation. Master it - it appears in dozens of problems."
    },

    "merge-pair": {
        hints: [
            "Use a dummy head to simplify edge cases.",
            "Compare current nodes, attach smaller one to result.",
            "Don't forget to attach remaining nodes at the end."
        ],
        solutions: {
            python: `def mergeTwoLists(list1, list2):
    dummy = ListNode()
    curr = dummy
    while list1 and list2:
        if list1.val < list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next
    curr.next = list1 or list2
    return dummy.next`,
            cpp: `ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    while (l1 && l2) {
        if (l1->val < l2->val) { curr->next = l1; l1 = l1->next; }
        else { curr->next = l2; l2 = l2->next; }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}`,
            typescript: `function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let curr = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; }
        else { curr.next = l2; l2 = l2.next; }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}`
        },
        explanation: "Dummy head pattern avoids edge cases. Compare heads, take smaller, advance that list. Attach remainder.",
        patternTips: "Dummy head is your friend. Use it whenever building a new list to avoid null checks."
    },

    "loop-check": {
        hints: [
            "Fast and slow pointers (Floyd's algorithm).",
            "Fast moves 2 steps, slow moves 1 step.",
            "If they meet, there's a cycle."
        ],
        solutions: {
            python: `def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
            cpp: `bool hasCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
            typescript: `function hasCycle(head: ListNode | null): boolean {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}`
        },
        explanation: "Floyd's cycle detection. If there's a cycle, fast will lap slow. If fast reaches null, no cycle.",
        patternTips: "Fast/slow pointers detect cycles in O(1) space. Also used to find middle, detect intersection, etc."
    },

    "rearrange-list": {
        hints: [
            "Find middle, reverse second half, then interleave.",
            "Use fast/slow to find middle.",
            "Merge the two halves alternating."
        ],
        solutions: {
            python: `def reorderList(head):
    # Find middle
    slow = fast = head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    
    # Reverse second half
    prev, curr = None, slow.next
    slow.next = None
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    
    # Merge
    first, second = head, prev
    while second:
        tmp1, tmp2 = first.next, second.next
        first.next = second
        second.next = tmp1
        first, second = tmp1, tmp2`,
            cpp: `void reorderList(ListNode* head) {
    if (!head || !head->next) return;
    // Find middle
    ListNode *slow = head, *fast = head;
    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    // Reverse second half
    ListNode *prev = nullptr, *curr = slow->next;
    slow->next = nullptr;
    while (curr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    // Merge
    ListNode *first = head, *second = prev;
    while (second) {
        ListNode *tmp1 = first->next, *tmp2 = second->next;
        first->next = second;
        second->next = tmp1;
        first = tmp1;
        second = tmp2;
    }
}`,
            typescript: `function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return;
    let slow: ListNode = head, fast: ListNode = head;
    while (fast.next && fast.next.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }
    let prev: ListNode | null = null, curr: ListNode | null = slow.next;
    slow.next = null;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    let first: ListNode | null = head, second: ListNode | null = prev;
    while (second) {
        const tmp1 = first!.next, tmp2 = second.next;
        first!.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
}`
        },
        explanation: "Three steps: find middle (fast/slow), reverse second half, merge alternating. Classic combination of linked list techniques.",
        patternTips: "This combines three patterns: find middle, reverse, merge. Practice each separately first."
    },

    "trim-end": {
        hints: [
            "Two pointers: advance first pointer n nodes ahead.",
            "Then move both until first reaches end.",
            "Second pointer will be at the node BEFORE the one to remove."
        ],
        solutions: {
            python: `def removeNthFromEnd(head, n):
    dummy = ListNode(0, head)
    first = second = dummy
    for _ in range(n + 1):
        first = first.next
    while first:
        first = first.next
        second = second.next
    second.next = second.next.next
    return dummy.next`,
            cpp: `ListNode* removeNthFromEnd(ListNode* head, int n) {
    ListNode dummy(0, head);
    ListNode *first = &dummy, *second = &dummy;
    for (int i = 0; i <= n; i++) first = first->next;
    while (first) {
        first = first->next;
        second = second->next;
    }
    second->next = second->next->next;
    return dummy.next;
}`,
            typescript: `function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let first: ListNode | null = dummy, second: ListNode | null = dummy;
    for (let i = 0; i <= n; i++) first = first!.next;
    while (first) {
        first = first.next;
        second = second!.next;
    }
    second!.next = second!.next!.next;
    return dummy.next;
}`
        },
        explanation: "Gap technique: create n-node gap between two pointers. When first reaches end, second is at the right position.",
        patternTips: "Dummy head + two pointers with gap. This pattern finds kth from end efficiently."
    },

    "clone-random": {
        hints: [
            "First pass: create all cloned nodes, store in hash map.",
            "Second pass: set next and random pointers using the map.",
            "Alternative: interleave clones in original list, then separate."
        ],
        solutions: {
            python: `def copyRandomList(head):
    if not head:
        return None
    old_to_new = {}
    curr = head
    while curr:
        old_to_new[curr] = Node(curr.val)
        curr = curr.next
    curr = head
    while curr:
        old_to_new[curr].next = old_to_new.get(curr.next)
        old_to_new[curr].random = old_to_new.get(curr.random)
        curr = curr.next
    return old_to_new[head]`,
            cpp: `Node* copyRandomList(Node* head) {
    if (!head) return nullptr;
    unordered_map<Node*, Node*> oldToNew;
    Node* curr = head;
    while (curr) {
        oldToNew[curr] = new Node(curr->val);
        curr = curr->next;
    }
    curr = head;
    while (curr) {
        oldToNew[curr]->next = oldToNew[curr->next];
        oldToNew[curr]->random = oldToNew[curr->random];
        curr = curr->next;
    }
    return oldToNew[head];
}`,
            typescript: `function copyRandomList(head: Node | null): Node | null {
    if (!head) return null;
    const oldToNew = new Map<Node, Node>();
    let curr: Node | null = head;
    while (curr) {
        oldToNew.set(curr, new Node(curr.val));
        curr = curr.next;
    }
    curr = head;
    while (curr) {
        oldToNew.get(curr)!.next = oldToNew.get(curr.next!) || null;
        oldToNew.get(curr)!.random = oldToNew.get(curr.random!) || null;
        curr = curr.next;
    }
    return oldToNew.get(head)!;
}`
        },
        explanation: "Two passes: create clones, then set pointers. Hash map maps old nodes to new nodes.",
        patternTips: "When cloning complex structures, hash map is your friend. Map original to clone, then set references."
    },

    "add-lists": {
        hints: [
            "Like adding numbers digit by digit with carry.",
            "Process both lists simultaneously.",
            "Don't forget the final carry!"
        ],
        solutions: {
            python: `def addTwoNumbers(l1, l2):
    dummy = ListNode()
    curr = dummy
    carry = 0
    while l1 or l2 or carry:
        val = carry
        if l1: val += l1.val; l1 = l1.next
        if l2: val += l2.val; l2 = l2.next
        carry, val = divmod(val, 10)
        curr.next = ListNode(val)
        curr = curr.next
    return dummy.next`,
            cpp: `ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    int carry = 0;
    while (l1 || l2 || carry) {
        int val = carry;
        if (l1) { val += l1->val; l1 = l1->next; }
        if (l2) { val += l2->val; l2 = l2->next; }
        carry = val / 10;
        val = val % 10;
        curr->next = new ListNode(val);
        curr = curr->next;
    }
    return dummy.next;
}`,
            typescript: `function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let curr = dummy, carry = 0;
    while (l1 || l2 || carry) {
        let val = carry;
        if (l1) { val += l1.val; l1 = l1.next; }
        if (l2) { val += l2.val; l2 = l2.next; }
        carry = Math.floor(val / 10);
        curr.next = new ListNode(val % 10);
        curr = curr.next;
    }
    return dummy.next;
}`
        },
        explanation: "Elementary addition with carry. Process digit by digit, carry the overflow. Dummy head simplifies construction.",
        patternTips: "Simulate arithmetic. The carry logic is the same for any base. Handle unequal lengths and final carry."
    },

    "find-clone": {
        hints: [
            "This is cycle detection in disguise.",
            "Treat array values as pointers: nums[i] points to index nums[i].",
            "Floyd's algorithm finds the duplicate."
        ],
        solutions: {
            python: `def findDuplicate(nums):
    slow = fast = nums[0]
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow`,
            cpp: `int findDuplicate(vector<int>& nums) {
    int slow = nums[0], fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}`,
            typescript: `function findDuplicate(nums: number[]): number {
    let slow = nums[0], fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}`
        },
        explanation: "Treat array as implicit linked list. A duplicate means two indices point to the same value = cycle entry point.",
        patternTips: "This beautiful reduction: array → linked list → cycle detection. O(1) extra space!"
    },

    "memory-cache": {
        hints: [
            "Hash map for O(1) lookup + doubly linked list for O(1) eviction.",
            "Most recently used goes to head, least recently used at tail.",
            "On access, move node to head. On eviction, remove tail."
        ],
        solutions: {
            python: `class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = self.tail = None
    
    # Full implementation involves doubly linked list nodes
    # with move_to_front, add_to_front, remove_node operations`,
            cpp: `class LRUCache {
    int cap;
    list<pair<int,int>> dll;
    unordered_map<int, list<pair<int,int>>::iterator> cache;
public:
    LRUCache(int capacity) : cap(capacity) {}
    
    int get(int key) {
        if (!cache.count(key)) return -1;
        dll.splice(dll.begin(), dll, cache[key]);
        return cache[key]->second;
    }
    
    void put(int key, int value) {
        if (cache.count(key)) {
            cache[key]->second = value;
            dll.splice(dll.begin(), dll, cache[key]);
            return;
        }
        if (dll.size() == cap) {
            cache.erase(dll.back().first);
            dll.pop_back();
        }
        dll.push_front({key, value});
        cache[key] = dll.begin();
    }
};`,
            typescript: `class LRUCache {
    private cap: number;
    private cache: Map<number, number>;
    
    constructor(capacity: number) {
        this.cap = capacity;
        this.cache = new Map();
    }
    
    get(key: number): number {
        if (!this.cache.has(key)) return -1;
        const val = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }
    
    put(key: number, value: number): void {
        this.cache.delete(key);
        this.cache.set(key, value);
        if (this.cache.size > this.cap) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}`
        },
        explanation: "Hash map + doubly linked list. Map gives O(1) lookup, list gives O(1) insert/delete at ends. JS Map maintains insertion order as bonus.",
        patternTips: "Classic system design DS. OrderedDict in Python, LinkedHashMap in Java, Map in JS maintain order. Otherwise, implement DLL."
    },

    "merge-many": {
        hints: [
            "Use a min-heap to always get the smallest head.",
            "Pop smallest, add to result, push its next.",
            "Alternative: divide and conquer merge."
        ],
        solutions: {
            python: `def mergeKLists(lists):
    import heapq
    dummy = ListNode()
    curr = dummy
    heap = []
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(heap, (node.val, i, node))
    while heap:
        val, i, node = heapq.heappop(heap)
        curr.next = node
        curr = curr.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next`,
            cpp: `ListNode* mergeKLists(vector<ListNode*>& lists) {
    auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };
    priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);
    for (auto& list : lists) if (list) pq.push(list);
    ListNode dummy(0);
    ListNode* curr = &dummy;
    while (!pq.empty()) {
        curr->next = pq.top(); pq.pop();
        curr = curr->next;
        if (curr->next) pq.push(curr->next);
    }
    return dummy.next;
}`,
            typescript: `function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap: ListNode[] = lists.filter(n => n) as ListNode[];
    heap.sort((a, b) => a.val - b.val);
    const dummy = new ListNode();
    let curr = dummy;
    while (heap.length) {
        heap.sort((a, b) => a.val - b.val);
        const node = heap.shift()!;
        curr.next = node;
        curr = curr.next;
        if (node.next) heap.push(node.next);
    }
    return dummy.next;
}`
        },
        explanation: "Min-heap keeps track of k list heads. Always extract min, add its next back. O(n log k) where n = total nodes.",
        patternTips: "Heap is perfect for 'k-way merge'. Also works for merge k sorted arrays, streams, etc."
    },

    "group-flip": {
        hints: [
            "Count k nodes, reverse them, connect to next group.",
            "Recursion or iteration both work.",
            "Save the head of next group before reversing."
        ],
        solutions: {
            python: `def reverseKGroup(head, k):
    count = 0
    curr = head
    while curr and count < k:
        curr = curr.next
        count += 1
    if count < k:
        return head
    prev = reverseKGroup(curr, k)
    while count > 0:
        next_node = head.next
        head.next = prev
        prev = head
        head = next_node
        count -= 1
    return prev`,
            cpp: `ListNode* reverseKGroup(ListNode* head, int k) {
    ListNode* curr = head;
    int count = 0;
    while (curr && count < k) { curr = curr->next; count++; }
    if (count < k) return head;
    ListNode* prev = reverseKGroup(curr, k);
    while (count-- > 0) {
        ListNode* next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}`,
            typescript: `function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let curr = head, count = 0;
    while (curr && count < k) { curr = curr.next; count++; }
    if (count < k) return head;
    let prev = reverseKGroup(curr, k);
    while (count-- > 0) {
        const next = head!.next;
        head!.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}`
        },
        explanation: "Recursive: count k, reverse k, connect to reversed rest. Base case: fewer than k remaining.",
        patternTips: "This is the hard linked list problem. Combines counting, reversing, and recursion. Think in groups."
    },

    // ============================================
    // BRANCHING PATHS (Trees)
    // ============================================

    "mirror-tree": {
        hints: [
            "Swap left and right children at each node.",
            "Recursively invert both subtrees.",
            "The base case is a null node."
        ],
        solutions: {
            python: `def invertTree(root):
    if not root:
        return None
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root`,
            cpp: `TreeNode* invertTree(TreeNode* root) {
    if (!root) return nullptr;
    swap(root->left, root->right);
    invertTree(root->left);
    invertTree(root->right);
    return root;
}`,
            typescript: `function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root;
}`
        },
        explanation: "Swap children, recurse on both. Tree operations are naturally recursive - base case handles null.",
        patternTips: "This is THE intro to tree recursion. Most tree problems follow: do something at node, recurse on children."
    },

    "tree-depth": {
        hints: [
            "Depth = 1 + max(left depth, right depth).",
            "Base case: null node has depth 0.",
            "Think recursively - each subtree is its own tree."
        ],
        solutions: {
            python: `def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`,
            cpp: `int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}`,
            typescript: `function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`
        },
        explanation: "Classic tree recursion. Depth of tree = 1 + max of subtree depths. Elegant one-liner solution.",
        patternTips: "Height/depth problems: 1 + max(left, right). This pattern appears in many tree problems."
    },

    "tree-width": {
        hints: [
            "Diameter passes through some node as leftHeight + rightHeight.",
            "Track max diameter seen so far as you recurse.",
            "Return height from each call, but update diameter as side effect."
        ],
        solutions: {
            python: `def diameterOfBinaryTree(root):
    diameter = 0
    def height(node):
        nonlocal diameter
        if not node:
            return 0
        left = height(node.left)
        right = height(node.right)
        diameter = max(diameter, left + right)
        return 1 + max(left, right)
    height(root)
    return diameter`,
            cpp: `int diameterOfBinaryTree(TreeNode* root) {
    int diameter = 0;
    function<int(TreeNode*)> height = [&](TreeNode* node) {
        if (!node) return 0;
        int left = height(node->left);
        int right = height(node->right);
        diameter = max(diameter, left + right);
        return 1 + max(left, right);
    };
    height(root);
    return diameter;
}`,
            typescript: `function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;
    function height(node: TreeNode | null): number {
        if (!node) return 0;
        const left = height(node.left);
        const right = height(node.right);
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    }
    height(root);
    return diameter;
}`
        },
        explanation: "Diameter through node = leftHeight + rightHeight. Track global max while computing heights.",
        patternTips: "Pattern: compute one thing (height), but track another (diameter) as side effect. Common in tree problems."
    },

    "tree-balance": {
        hints: [
            "A tree is balanced if |leftHeight - rightHeight| <= 1 at every node.",
            "Return -1 to signal 'unbalanced' early.",
            "Check balance bottom-up, not top-down."
        ],
        solutions: {
            python: `def isBalanced(root):
    def height(node):
        if not node:
            return 0
        left = height(node.left)
        right = height(node.right)
        if left == -1 or right == -1 or abs(left - right) > 1:
            return -1
        return 1 + max(left, right)
    return height(root) != -1`,
            cpp: `bool isBalanced(TreeNode* root) {
    function<int(TreeNode*)> height = [&](TreeNode* node) {
        if (!node) return 0;
        int left = height(node->left);
        int right = height(node->right);
        if (left == -1 || right == -1 || abs(left - right) > 1) return -1;
        return 1 + max(left, right);
    };
    return height(root) != -1;
}`,
            typescript: `function isBalanced(root: TreeNode | null): boolean {
    function height(node: TreeNode | null): number {
        if (!node) return 0;
        const left = height(node.left);
        const right = height(node.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
        return 1 + Math.max(left, right);
    }
    return height(root) !== -1;
}`
        },
        explanation: "Use -1 as sentinel to signal unbalanced. Check balance while computing height. O(n) time.",
        patternTips: "Sentinel value pattern: use special return value to signal condition. Avoids separate boolean tracking."
    },

    "twin-trees": {
        hints: [
            "Two trees are same if: roots equal AND left subtrees same AND right subtrees same.",
            "Both null = same. One null = different.",
            "Compare values and recurse."
        ],
        solutions: {
            python: `def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    return p.val == q.val and isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`,
            cpp: `bool isSameTree(TreeNode* p, TreeNode* q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p->val == q->val && isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
}`,
            typescript: `function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`
        },
        explanation: "Structural recursion: same if values match and subtrees match. Handle null cases first.",
        patternTips: "Two-tree comparison: always check both null, one null, then values and recurse."
    },

    "tree-in-tree": {
        hints: [
            "For each node in main tree, check if it matches subtree.",
            "Use isSameTree helper.",
            "Subtree match can start at any node."
        ],
        solutions: {
            python: `def isSubtree(root, subRoot):
    def isSame(p, q):
        if not p and not q: return True
        if not p or not q: return False
        return p.val == q.val and isSame(p.left, q.left) and isSame(p.right, q.right)
    
    if not root:
        return False
    if isSame(root, subRoot):
        return True
    return isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)`,
            cpp: `bool isSubtree(TreeNode* root, TreeNode* subRoot) {
    auto isSame = [](auto&& isSame, TreeNode* p, TreeNode* q) -> bool {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p->val == q->val && isSame(isSame, p->left, q->left) && isSame(isSame, p->right, q->right);
    };
    if (!root) return false;
    if (isSame(isSame, root, subRoot)) return true;
    return isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
}`,
            typescript: `function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    function isSame(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p.val === q.val && isSame(p.left, q.left) && isSame(p.right, q.right);
    }
    if (!root) return false;
    if (isSame(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}`
        },
        explanation: "At each node, check if trees match. If not, recurse on children. O(m*n) worst case.",
        patternTips: "Subtree problems: try matching at each node. Can optimize with tree hashing for O(m+n)."
    },

    "common-parent": {
        hints: [
            "In BST, LCA is where p and q split (one left, one right).",
            "If both less than current, go left. Both greater, go right.",
            "Otherwise, current node is LCA."
        ],
        solutions: {
            python: `def lowestCommonAncestor(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root`,
            cpp: `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    while (root) {
        if (p->val < root->val && q->val < root->val) root = root->left;
        else if (p->val > root->val && q->val > root->val) root = root->right;
        else return root;
    }
    return nullptr;
}`,
            typescript: `function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    while (root) {
        if (p.val < root.val && q.val < root.val) root = root.left;
        else if (p.val > root.val && q.val > root.val) root = root.right;
        else return root;
    }
    return null;
}`
        },
        explanation: "BST property: LCA is first node where p and q diverge (or equals one of them).",
        patternTips: "BST LCA is easy. For general trees, need to check if p,q in same or different subtrees."
    },

    "level-scan": {
        hints: [
            "BFS with a queue, processing level by level.",
            "Track the number of nodes at each level.",
            "Collect all values at current level before moving to next."
        ],
        solutions: {
            python: `def levelOrder(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.pop(0)
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result`,
            cpp: `vector<vector<int>> levelOrder(TreeNode* root) {
    if (!root) return {};
    vector<vector<int>> result;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        vector<int> level;
        int size = q.size();
        for (int i = 0; i < size; i++) {
            TreeNode* node = q.front(); q.pop();
            level.push_back(node->val);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}`,
            typescript: `function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    while (queue.length) {
        const level: number[] = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}`
        },
        explanation: "BFS template: queue with level-by-level processing. Process all nodes at current level before moving on.",
        patternTips: "This is THE BFS template for trees. Use for any level-order traversal, minimum depth, right view, etc."
    },

    "right-view": {
        hints: [
            "BFS: last node of each level is visible from right.",
            "Or DFS: visit right child first, track depth.",
            "First node at each new depth is the rightmost."
        ],
        solutions: {
            python: `def rightSideView(root):
    result = []
    def dfs(node, depth):
        if not node:
            return
        if depth == len(result):
            result.append(node.val)
        dfs(node.right, depth + 1)
        dfs(node.left, depth + 1)
    dfs(root, 0)
    return result`,
            cpp: `vector<int> rightSideView(TreeNode* root) {
    vector<int> result;
    function<void(TreeNode*, int)> dfs = [&](TreeNode* node, int depth) {
        if (!node) return;
        if (depth == result.size()) result.push_back(node->val);
        dfs(node->right, depth + 1);
        dfs(node->left, depth + 1);
    };
    dfs(root, 0);
    return result;
}`,
            typescript: `function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = [];
    function dfs(node: TreeNode | null, depth: number): void {
        if (!node) return;
        if (depth === result.length) result.push(node.val);
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }
    dfs(root, 0);
    return result;
}`
        },
        explanation: "DFS visiting right first. First node we see at each depth is the rightmost. Elegant depth tracking.",
        patternTips: "For 'view' problems, think about which order to visit children. Right-first for right view, left-first for left view."
    },

    "good-nodes": {
        hints: [
            "A node is 'good' if no node on path from root is greater.",
            "Track maximum value seen on path.",
            "DFS passing max down to children."
        ],
        solutions: {
            python: `def goodNodes(root):
    def dfs(node, max_so_far):
        if not node:
            return 0
        count = 1 if node.val >= max_so_far else 0
        new_max = max(max_so_far, node.val)
        return count + dfs(node.left, new_max) + dfs(node.right, new_max)
    return dfs(root, root.val)`,
            cpp: `int goodNodes(TreeNode* root) {
    function<int(TreeNode*, int)> dfs = [&](TreeNode* node, int maxVal) {
        if (!node) return 0;
        int count = node->val >= maxVal ? 1 : 0;
        int newMax = max(maxVal, node->val);
        return count + dfs(node->left, newMax) + dfs(node->right, newMax);
    };
    return dfs(root, root->val);
}`,
            typescript: `function goodNodes(root: TreeNode): number {
    function dfs(node: TreeNode | null, maxVal: number): number {
        if (!node) return 0;
        const count = node.val >= maxVal ? 1 : 0;
        const newMax = Math.max(maxVal, node.val);
        return count + dfs(node.left, newMax) + dfs(node.right, newMax);
    }
    return dfs(root, root.val);
}`
        },
        explanation: "DFS with path maximum. Pass down the max seen so far. Node is good if val >= maxSoFar.",
        patternTips: "Path tracking: pass information down as DFS parameter. Common for path sum, path max, path validation."
    },

    "valid-bst": {
        hints: [
            "BST property: all nodes in left < root < all nodes in right.",
            "Track valid range (min, max) as you recurse.",
            "Each node must be within its valid range."
        ],
        solutions: {
            python: `def isValidBST(root):
    def valid(node, low, high):
        if not node:
            return True
        if not (low < node.val < high):
            return False
        return valid(node.left, low, node.val) and valid(node.right, node.val, high)
    return valid(root, float('-inf'), float('inf'))`,
            cpp: `bool isValidBST(TreeNode* root) {
    function<bool(TreeNode*, long, long)> valid = [&](TreeNode* node, long low, long high) {
        if (!node) return true;
        if (node->val <= low || node->val >= high) return false;
        return valid(node->left, low, node->val) && valid(node->right, node->val, high);
    };
    return valid(root, LONG_MIN, LONG_MAX);
}`,
            typescript: `function isValidBST(root: TreeNode | null): boolean {
    function valid(node: TreeNode | null, low: number, high: number): boolean {
        if (!node) return true;
        if (node.val <= low || node.val >= high) return false;
        return valid(node.left, low, node.val) && valid(node.right, node.val, high);
    }
    return valid(root, -Infinity, Infinity);
}`
        },
        explanation: "Pass valid range down. Left child: (low, node.val), Right child: (node.val, high). Check bounds at each node.",
        patternTips: "Range passing pattern. Each child narrows the valid range. Elegant way to validate BST property."
    },

    "kth-smallest": {
        hints: [
            "Inorder traversal of BST gives sorted order.",
            "Count nodes as you traverse inorder.",
            "Stop when you've seen k nodes."
        ],
        solutions: {
            python: `def kthSmallest(root, k):
    result = [0]
    count = [0]
    def inorder(node):
        if not node:
            return
        inorder(node.left)
        count[0] += 1
        if count[0] == k:
            result[0] = node.val
            return
        inorder(node.right)
    inorder(root)
    return result[0]`,
            cpp: `int kthSmallest(TreeNode* root, int k) {
    int result = 0, count = 0;
    function<void(TreeNode*)> inorder = [&](TreeNode* node) {
        if (!node || count >= k) return;
        inorder(node->left);
        if (++count == k) { result = node->val; return; }
        inorder(node->right);
    };
    inorder(root);
    return result;
}`,
            typescript: `function kthSmallest(root: TreeNode | null, k: number): number {
    let result = 0, count = 0;
    function inorder(node: TreeNode | null): void {
        if (!node || count >= k) return;
        inorder(node.left);
        if (++count === k) { result = node.val; return; }
        inorder(node.right);
    }
    inorder(root);
    return result;
}`
        },
        explanation: "Inorder traversal = sorted for BST. Count as you go, return when count reaches k.",
        patternTips: "BST + sorted order = inorder traversal. Use this for kth smallest, closest value, etc."
    },

    "build-tree": {
        hints: [
            "Preorder: first element is root. Inorder: elements left of root are left subtree.",
            "Use inorder to split left and right subtrees.",
            "Recurse with appropriate slices."
        ],
        solutions: {
            python: `def buildTree(preorder, inorder):
    if not preorder:
        return None
    root = TreeNode(preorder[0])
    mid = inorder.index(preorder[0])
    root.left = buildTree(preorder[1:mid+1], inorder[:mid])
    root.right = buildTree(preorder[mid+1:], inorder[mid+1:])
    return root`,
            cpp: `TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    unordered_map<int, int> idx;
    for (int i = 0; i < inorder.size(); i++) idx[inorder[i]] = i;
    int preIdx = 0;
    function<TreeNode*(int, int)> build = [&](int left, int right) -> TreeNode* {
        if (left > right) return nullptr;
        int val = preorder[preIdx++];
        TreeNode* root = new TreeNode(val);
        root->left = build(left, idx[val] - 1);
        root->right = build(idx[val] + 1, right);
        return root;
    };
    return build(0, inorder.size() - 1);
}`,
            typescript: `function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const idx = new Map<number, number>();
    inorder.forEach((val, i) => idx.set(val, i));
    let preIdx = 0;
    function build(left: number, right: number): TreeNode | null {
        if (left > right) return null;
        const val = preorder[preIdx++];
        const root = new TreeNode(val);
        root.left = build(left, idx.get(val)! - 1);
        root.right = build(idx.get(val)! + 1, right);
        return root;
    }
    return build(0, inorder.length - 1);
}`
        },
        explanation: "Preorder gives root, inorder gives left/right split. Use indices to avoid slicing (O(n²) → O(n)).",
        patternTips: "Tree construction from traversals. Think about what each traversal tells you about structure."
    },

    "max-path": {
        hints: [
            "Path can start and end anywhere, but can't branch.",
            "At each node, consider: go left, go right, or both through this node.",
            "Track global max while returning single-path max to parent."
        ],
        solutions: {
            python: `def maxPathSum(root):
    result = [float('-inf')]
    def dfs(node):
        if not node:
            return 0
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        result[0] = max(result[0], node.val + left + right)
        return node.val + max(left, right)
    dfs(root)
    return result[0]`,
            cpp: `int maxPathSum(TreeNode* root) {
    int result = INT_MIN;
    function<int(TreeNode*)> dfs = [&](TreeNode* node) {
        if (!node) return 0;
        int left = max(0, dfs(node->left));
        int right = max(0, dfs(node->right));
        result = max(result, node->val + left + right);
        return node->val + max(left, right);
    };
    dfs(root);
    return result;
}`,
            typescript: `function maxPathSum(root: TreeNode | null): number {
    let result = -Infinity;
    function dfs(node: TreeNode | null): number {
        if (!node) return 0;
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));
        result = Math.max(result, node.val + left + right);
        return node.val + Math.max(left, right);
    }
    dfs(root);
    return result;
}`
        },
        explanation: "At each node, path through it = left + node + right. Return max(left, right) + node to parent. Track global max.",
        patternTips: "Two things: global answer (path through any node) vs return value (path going up). This split is key."
    },

    "pack-tree": {
        hints: [
            "Serialize: preorder with null markers.",
            "Deserialize: rebuild from preorder, consuming values.",
            "Use delimiter between values."
        ],
        solutions: {
            python: `class Codec:
    def serialize(self, root):
        vals = []
        def dfs(node):
            if not node:
                vals.append('N')
                return
            vals.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return ','.join(vals)
    
    def deserialize(self, data):
        vals = iter(data.split(','))
        def dfs():
            val = next(vals)
            if val == 'N':
                return None
            node = TreeNode(int(val))
            node.left = dfs()
            node.right = dfs()
            return node
        return dfs()`,
            cpp: `class Codec {
public:
    string serialize(TreeNode* root) {
        if (!root) return "N";
        return to_string(root->val) + "," + serialize(root->left) + "," + serialize(root->right);
    }
    
    TreeNode* deserialize(string data) {
        queue<string> vals;
        string val;
        for (char c : data) {
            if (c == ',') { vals.push(val); val = ""; }
            else val += c;
        }
        vals.push(val);
        return build(vals);
    }
    
    TreeNode* build(queue<string>& vals) {
        string val = vals.front(); vals.pop();
        if (val == "N") return nullptr;
        TreeNode* node = new TreeNode(stoi(val));
        node->left = build(vals);
        node->right = build(vals);
        return node;
    }
};`,
            typescript: `class Codec {
    serialize(root: TreeNode | null): string {
        const vals: string[] = [];
        function dfs(node: TreeNode | null): void {
            if (!node) { vals.push('N'); return; }
            vals.push(String(node.val));
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        return vals.join(',');
    }
    
    deserialize(data: string): TreeNode | null {
        const vals = data.split(',')[Symbol.iterator]();
        function dfs(): TreeNode | null {
            const val = vals.next().value;
            if (val === 'N') return null;
            const node = new TreeNode(parseInt(val));
            node.left = dfs();
            node.right = dfs();
            return node;
        }
        return dfs();
    }
}`
        },
        explanation: "Preorder with N for null nodes. Serialize to string, deserialize by consuming tokens in same order.",
        patternTips: "Serialization: choose traversal + null representation. Preorder with null markers is simplest."
    },

    // ============================================
    // PRIORITY LANES (Heap / Priority Queue)
    // ============================================

    "kth-stream": {
        hints: [
            "Keep a min-heap of size k.",
            "Top of heap is always kth largest.",
            "Add element, pop if size > k."
        ],
        solutions: {
            python: `import heapq

class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.heap = nums
        heapq.heapify(self.heap)
        while len(self.heap) > k:
            heapq.heappop(self.heap)
    
    def add(self, val: int) -> int:
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]`,
            cpp: `class KthLargest {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    int k;
public:
    KthLargest(int k, vector<int>& nums) : k(k) {
        for (int n : nums) add(n);
    }
    
    int add(int val) {
        minHeap.push(val);
        if (minHeap.size() > k) minHeap.pop();
        return minHeap.top();
    }
};`,
            typescript: `class KthLargest {
    private heap: number[] = [];
    private k: number;
    
    constructor(k: number, nums: number[]) {
        this.k = k;
        for (const n of nums) this.add(n);
    }
    
    add(val: number): number {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b);
        while (this.heap.length > this.k) this.heap.shift();
        return this.heap[0];
    }
}`
        },
        explanation: "Min-heap of size k. Smallest in heap = kth largest overall. Push then pop to maintain size.",
        patternTips: "For kth largest, use min-heap of size k. For kth smallest, use max-heap of size k."
    },

    "stone-weight": {
        hints: [
            "Always smash two heaviest stones → max-heap.",
            "Pop two, push difference if non-zero.",
            "Continue until one or zero stones remain."
        ],
        solutions: {
            python: `import heapq

def lastStoneWeight(stones):
    h = [-s for s in stones]  # Max heap via negation
    heapq.heapify(h)
    while len(h) > 1:
        first = -heapq.heappop(h)
        second = -heapq.heappop(h)
        if first != second:
            heapq.heappush(h, -(first - second))
    return -h[0] if h else 0`,
            cpp: `int lastStoneWeight(vector<int>& stones) {
    priority_queue<int> pq(stones.begin(), stones.end());
    while (pq.size() > 1) {
        int a = pq.top(); pq.pop();
        int b = pq.top(); pq.pop();
        if (a != b) pq.push(a - b);
    }
    return pq.empty() ? 0 : pq.top();
}`,
            typescript: `function lastStoneWeight(stones: number[]): number {
    const pq = [...stones].sort((a, b) => b - a);
    while (pq.length > 1) {
        const a = pq.shift()!;
        const b = pq.shift()!;
        if (a !== b) {
            pq.push(a - b);
            pq.sort((a, b) => b - a);
        }
    }
    return pq.length ? pq[0] : 0;
}`
        },
        explanation: "Max-heap simulation. Pop two largest, push difference. Python: negate for max-heap behavior.",
        patternTips: "Simulation with 'always pick max/min' → heap. Real interviews: mention you'd use actual heap, not sort."
    },

    "nearest-points": {
        hints: [
            "Distance from origin = sqrt(x² + y²), but can skip sqrt.",
            "Use max-heap of size k to track k closest.",
            "Or quickselect for O(n) average."
        ],
        solutions: {
            python: `import heapq

def kClosest(points, k):
    return heapq.nsmallest(k, points, key=lambda p: p[0]**2 + p[1]**2)`,
            cpp: `vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    auto dist = [](vector<int>& p) { return p[0]*p[0] + p[1]*p[1]; };
    auto cmp = [&](vector<int>& a, vector<int>& b) { return dist(a) < dist(b); };
    priority_queue<vector<int>, vector<vector<int>>, decltype(cmp)> pq(cmp);
    for (auto& p : points) {
        pq.push(p);
        if (pq.size() > k) pq.pop();
    }
    vector<vector<int>> result;
    while (!pq.empty()) { result.push_back(pq.top()); pq.pop(); }
    return result;
}`,
            typescript: `function kClosest(points: number[][], k: number): number[][] {
    return points
        .sort((a, b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2))
        .slice(0, k);
}`
        },
        explanation: "Compare by squared distance (skip sqrt). Heap or sort. Quickselect achieves O(n) average.",
        patternTips: "K closest = min-heap or quickselect. Skip sqrt when comparing distances."
    },

    "kth-array": {
        hints: [
            "Quickselect: partition around pivot, recurse on correct side.",
            "Or use min-heap if k is small.",
            "Average O(n), worst O(n²)."
        ],
        solutions: {
            python: `import heapq

def findKthLargest(nums, k):
    return heapq.nlargest(k, nums)[-1]`,
            cpp: `int findKthLargest(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int n : nums) {
        pq.push(n);
        if (pq.size() > k) pq.pop();
    }
    return pq.top();
}`,
            typescript: `function findKthLargest(nums: number[], k: number): number {
    return nums.sort((a, b) => b - a)[k - 1];
}`
        },
        explanation: "Min-heap of size k: top is kth largest. Or quickselect for O(n) average. Interviewers love quickselect discussion.",
        patternTips: "Kth element: heap O(n log k) or quickselect O(n) average. Know both approaches."
    },

    "task-order": {
        hints: [
            "Process most frequent task first to minimize idle.",
            "Use max-heap for frequencies.",
            "After each round (n+1 slots), decrement frequencies."
        ],
        solutions: {
            python: `from collections import Counter
import heapq

def leastInterval(tasks, n):
    counts = Counter(tasks)
    maxHeap = [-c for c in counts.values()]
    heapq.heapify(maxHeap)
    time = 0
    while maxHeap:
        temp = []
        for _ in range(n + 1):
            if maxHeap:
                cnt = heapq.heappop(maxHeap) + 1
                if cnt: temp.append(cnt)
        for cnt in temp:
            heapq.heappush(maxHeap, cnt)
        time += n + 1 if maxHeap else len(temp)
    return time`,
            cpp: `int leastInterval(vector<char>& tasks, int n) {
    unordered_map<char, int> freq;
    for (char t : tasks) freq[t]++;
    priority_queue<int> pq;
    for (auto& [_, c] : freq) pq.push(c);
    int time = 0;
    while (!pq.empty()) {
        vector<int> temp;
        for (int i = 0; i <= n; i++) {
            if (!pq.empty()) {
                temp.push_back(pq.top() - 1);
                pq.pop();
            }
        }
        for (int c : temp) if (c > 0) pq.push(c);
        time += pq.empty() ? temp.size() : n + 1;
    }
    return time;
}`,
            typescript: `function leastInterval(tasks: string[], n: number): number {
    const freq = new Map<string, number>();
    for (const t of tasks) freq.set(t, (freq.get(t) || 0) + 1);
    const pq = [...freq.values()].sort((a, b) => b - a);
    let time = 0;
    while (pq.length) {
        const temp: number[] = [];
        for (let i = 0; i <= n; i++) {
            if (pq.length) temp.push(pq.shift()! - 1);
        }
        for (const c of temp) if (c > 0) pq.push(c);
        pq.sort((a, b) => b - a);
        time += pq.length ? n + 1 : temp.length;
    }
    return time;
}`
        },
        explanation: "Greedy: always schedule most frequent available task. Each cycle is n+1 slots. Count idle only when heap not empty.",
        patternTips: "Scheduling with cooldown: greedy with max-heap. Think in cycles of (n+1) slots."
    },

    "tweet-feed": {
        hints: [
            "Follow/unfollow: set per user.",
            "Post: list of (timestamp, tweetId) per user.",
            "getNewsFeed: merge k sorted lists of tweets."
        ],
        solutions: {
            python: `import heapq
from collections import defaultdict

class Twitter:
    def __init__(self):
        self.time = 0
        self.tweets = defaultdict(list)
        self.following = defaultdict(set)
    
    def postTweet(self, userId, tweetId):
        self.tweets[userId].append((-self.time, tweetId))
        self.time += 1
    
    def getNewsFeed(self, userId):
        self.following[userId].add(userId)
        heap = []
        for followee in self.following[userId]:
            for tweet in self.tweets[followee][-10:]:
                heapq.heappush(heap, tweet)
        return [heapq.heappop(heap)[1] for _ in range(min(10, len(heap)))]
    
    def follow(self, followerId, followeeId):
        self.following[followerId].add(followeeId)
    
    def unfollow(self, followerId, followeeId):
        self.following[followerId].discard(followeeId)`,
            cpp: `// Simplified implementation`,
            typescript: `// See Python for full implementation`
        },
        explanation: "Object-oriented design with heap for merging feeds. Store tweets with timestamps, merge on request.",
        patternTips: "System design + data structure. Think about what operations need to be fast (usually getNewsFeed)."
    },

    "stream-median": {
        hints: [
            "Use two heaps: max-heap for smaller half, min-heap for larger half.",
            "Median is either max of small heap or average of both tops.",
            "Balance heaps to differ by at most 1."
        ],
        solutions: {
            python: `import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # max heap (negated)
        self.large = []  # min heap
    
    def addNum(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))
    
    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`,
            cpp: `class MedianFinder {
    priority_queue<int> small;  // max heap
    priority_queue<int, vector<int>, greater<int>> large;  // min heap
public:
    void addNum(int num) {
        small.push(num);
        large.push(small.top());
        small.pop();
        if (large.size() > small.size()) {
            small.push(large.top());
            large.pop();
        }
    }
    
    double findMedian() {
        if (small.size() > large.size()) return small.top();
        return (small.top() + large.top()) / 2.0;
    }
};`,
            typescript: `class MedianFinder {
    private small: number[] = [];  // max heap (store negated)
    private large: number[] = [];  // min heap
    
    addNum(num: number): void {
        this.small.push(-num);
        this.small.sort((a, b) => a - b);
        this.large.push(-this.small.shift()!);
        this.large.sort((a, b) => a - b);
        if (this.large.length > this.small.length) {
            this.small.push(-this.large.shift()!);
            this.small.sort((a, b) => a - b);
        }
    }
    
    findMedian(): number {
        if (this.small.length > this.large.length) return -this.small[0];
        return (-this.small[0] + this.large[0]) / 2;
    }
}`
        },
        explanation: "Two heaps partition data. Small (max-heap) ≤ large (min-heap). Median from heap tops.",
        patternTips: "Classic two-heap pattern. Works for running median, sliding window median with deletions."
    },

    // ============================================
    // TRIAL ERROR (Backtracking)
    // ============================================

    "power-set": {
        hints: [
            "For each element: include it or exclude it.",
            "Build subsets recursively.",
            "Base case: processed all elements."
        ],
        solutions: {
            python: `def subsets(nums):
    result = []
    def backtrack(start, path):
        result.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    backtrack(0, [])
    return result`,
            cpp: `vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> path;
    function<void(int)> backtrack = [&](int start) {
        result.push_back(path);
        for (int i = start; i < nums.size(); i++) {
            path.push_back(nums[i]);
            backtrack(i + 1);
            path.pop_back();
        }
    };
    backtrack(0);
    return result;
}`,
            typescript: `function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    function backtrack(start: number, path: number[]): void {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return result;
}`
        },
        explanation: "At each position, try including each remaining element. Add current subset at every step (not just leaves).",
        patternTips: "This is THE backtracking template. Push, recurse, pop. Modify for combinations, permutations, etc."
    },

    "sum-combos": {
        hints: [
            "Backtrack with target sum, allowing reuse.",
            "Sort to enable pruning (skip if element > remaining target).",
            "Can use same element multiple times."
        ],
        solutions: {
            python: `def combinationSum(candidates, target):
    result = []
    candidates.sort()
    def backtrack(start, path, remaining):
        if remaining == 0:
            result.append(path[:])
            return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining:
                break
            path.append(candidates[i])
            backtrack(i, path, remaining - candidates[i])
            path.pop()
    backtrack(0, [], target)
    return result`,
            cpp: `vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    sort(candidates.begin(), candidates.end());
    vector<vector<int>> result;
    vector<int> path;
    function<void(int, int)> backtrack = [&](int start, int remaining) {
        if (remaining == 0) { result.push_back(path); return; }
        for (int i = start; i < candidates.size() && candidates[i] <= remaining; i++) {
            path.push_back(candidates[i]);
            backtrack(i, remaining - candidates[i]);
            path.pop_back();
        }
    };
    backtrack(0, target);
    return result;
}`,
            typescript: `function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const result: number[][] = [];
    function backtrack(start: number, path: number[], remaining: number): void {
        if (remaining === 0) { result.push([...path]); return; }
        for (let i = start; i < candidates.length && candidates[i] <= remaining; i++) {
            path.push(candidates[i]);
            backtrack(i, path, remaining - candidates[i]);
            path.pop();
        }
    }
    backtrack(0, [], target);
    return result;
}`
        },
        explanation: "Allow reusing elements: recurse with same index. Sort for early termination when element > remaining.",
        patternTips: "Combination sum: 'start from i' for reuse, 'start from i+1' for no reuse. Pruning is key for efficiency."
    },

    "all-orders": {
        hints: [
            "Each position can use any unused element.",
            "Track used elements with a set or boolean array.",
            "Result when path length equals input length."
        ],
        solutions: {
            python: `def permute(nums):
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
    return result`,
            cpp: `vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> path;
    vector<bool> used(nums.size(), false);
    function<void()> backtrack = [&]() {
        if (path.size() == nums.size()) { result.push_back(path); return; }
        for (int i = 0; i < nums.size(); i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push_back(nums[i]);
            backtrack();
            path.pop_back();
            used[i] = false;
        }
    };
    backtrack();
    return result;
}`,
            typescript: `function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    function backtrack(path: number[], used: Set<number>): void {
        if (path.length === nums.length) { result.push([...path]); return; }
        for (let i = 0; i < nums.length; i++) {
            if (used.has(i)) continue;
            used.add(i);
            path.push(nums[i]);
            backtrack(path, used);
            path.pop();
            used.delete(i);
        }
    }
    backtrack([], new Set());
    return result;
}`
        },
        explanation: "Unlike subsets, try all positions for each slot. Track used indices to avoid reusing same element.",
        patternTips: "Permutations vs subsets: permutations use every element, order matters. Track 'used' not 'start'."
    },

    "bracket-gen": {
        hints: [
            "Track open and close counts.",
            "Can add '(' if open < n.",
            "Can add ')' if close < open."
        ],
        solutions: {
            python: `def generateParenthesis(n):
    result = []
    def backtrack(path, open_count, close_count):
        if len(path) == 2 * n:
            result.append(path)
            return
        if open_count < n:
            backtrack(path + '(', open_count + 1, close_count)
        if close_count < open_count:
            backtrack(path + ')', open_count, close_count + 1)
    backtrack('', 0, 0)
    return result`,
            cpp: `vector<string> generateParenthesis(int n) {
    vector<string> result;
    function<void(string, int, int)> backtrack = [&](string path, int open, int close) {
        if (path.size() == 2 * n) { result.push_back(path); return; }
        if (open < n) backtrack(path + '(', open + 1, close);
        if (close < open) backtrack(path + ')', open, close + 1);
    };
    backtrack("", 0, 0);
    return result;
}`,
            typescript: `function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    function backtrack(path: string, open: number, close: number): void {
        if (path.length === 2 * n) { result.push(path); return; }
        if (open < n) backtrack(path + '(', open + 1, close);
        if (close < open) backtrack(path + ')', open, close + 1);
    }
    backtrack('', 0, 0);
    return result;
}`
        },
        explanation: "Two rules: can add '(' if haven't used n yet. Can add ')' only if it won't exceed opens.",
        patternTips: "Constraint-based backtracking. Define valid conditions, recurse only on valid choices."
    },

    "word-grid": {
        hints: [
            "DFS from each cell matching first letter.",
            "Mark visited to avoid reusing cells in same word.",
            "Unmark when backtracking."
        ],
        solutions: {
            python: `def exist(board, word):
    rows, cols = len(board), len(board[0])
    def dfs(r, c, i):
        if i == len(word):
            return True
        if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] != word[i]:
            return False
        temp = board[r][c]
        board[r][c] = '#'
        found = (dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or
                 dfs(r, c+1, i+1) or dfs(r, c-1, i+1))
        board[r][c] = temp
        return found
    
    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
    return False`,
            cpp: `bool exist(vector<vector<char>>& board, string word) {
    int m = board.size(), n = board[0].size();
    function<bool(int, int, int)> dfs = [&](int r, int c, int i) {
        if (i == word.size()) return true;
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] != word[i]) return false;
        char temp = board[r][c];
        board[r][c] = '#';
        bool found = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1);
        board[r][c] = temp;
        return found;
    };
    for (int r = 0; r < m; r++)
        for (int c = 0; c < n; c++)
            if (dfs(r, c, 0)) return true;
    return false;
}`,
            typescript: `function exist(board: string[][], word: string): boolean {
    const m = board.length, n = board[0].length;
    function dfs(r: number, c: number, i: number): boolean {
        if (i === word.length) return true;
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[i]) return false;
        const temp = board[r][c];
        board[r][c] = '#';
        const found = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1);
        board[r][c] = temp;
        return found;
    }
    for (let r = 0; r < m; r++)
        for (let c = 0; c < n; c++)
            if (dfs(r, c, 0)) return true;
    return false;
}`
        },
        explanation: "Grid backtracking. Modify cell to mark visited, restore on backtrack. Check all 4 directions.",
        patternTips: "Grid + backtracking: mark visited in-place (modify value), restore on return. Classic DFS pattern."
    },

    "queen-puzzle": {
        hints: [
            "Place one queen per row, check column and diagonal conflicts.",
            "Track: columns used, diagonals (r-c), anti-diagonals (r+c).",
            "Backtrack when placement invalid."
        ],
        solutions: {
            python: `def solveNQueens(n):
    result = []
    cols = set()
    diag = set()
    anti_diag = set()
    board = [['.' for _ in range(n)] for _ in range(n)]
    
    def backtrack(r):
        if r == n:
            result.append([''.join(row) for row in board])
            return
        for c in range(n):
            if c in cols or (r - c) in diag or (r + c) in anti_diag:
                continue
            cols.add(c)
            diag.add(r - c)
            anti_diag.add(r + c)
            board[r][c] = 'Q'
            backtrack(r + 1)
            board[r][c] = '.'
            cols.remove(c)
            diag.remove(r - c)
            anti_diag.remove(r + c)
    
    backtrack(0)
    return result`,
            cpp: `vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> result;
    vector<string> board(n, string(n, '.'));
    unordered_set<int> cols, diag, antiDiag;
    function<void(int)> backtrack = [&](int r) {
        if (r == n) { result.push_back(board); return; }
        for (int c = 0; c < n; c++) {
            if (cols.count(c) || diag.count(r - c) || antiDiag.count(r + c)) continue;
            cols.insert(c); diag.insert(r - c); antiDiag.insert(r + c);
            board[r][c] = 'Q';
            backtrack(r + 1);
            board[r][c] = '.';
            cols.erase(c); diag.erase(r - c); antiDiag.erase(r + c);
        }
    };
    backtrack(0);
    return result;
}`,
            typescript: `function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const cols = new Set<number>(), diag = new Set<number>(), antiDiag = new Set<number>();
    const board = Array.from({length: n}, () => '.'.repeat(n).split(''));
    function backtrack(r: number): void {
        if (r === n) { result.push(board.map(row => row.join(''))); return; }
        for (let c = 0; c < n; c++) {
            if (cols.has(c) || diag.has(r - c) || antiDiag.has(r + c)) continue;
            cols.add(c); diag.add(r - c); antiDiag.add(r + c);
            board[r][c] = 'Q';
            backtrack(r + 1);
            board[r][c] = '.';
            cols.delete(c); diag.delete(r - c); antiDiag.delete(r + c);
        }
    }
    backtrack(0);
    return result;
}`
        },
        explanation: "Track conflicts with sets. Row implicit in recursion depth. r-c and r+c uniquely identify diagonals.",
        patternTips: "Classic backtracking. The diagonal trick (r-c, r+c) is key insight. One queen per row simplifies."
    },

    // ============================================
    // NETWORK MAPS (Graphs)
    // ============================================

    "island-count": {
        hints: [
            "Each unvisited '1' starts a new island.",
            "DFS/BFS to mark all connected '1's as visited.",
            "Count number of DFS/BFS calls."
        ],
        solutions: {
            python: `def numIslands(grid):
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count`,
            cpp: `int numIslands(vector<vector<char>>& grid) {
    int rows = grid.size(), cols = grid[0].size(), count = 0;
    function<void(int, int)> dfs = [&](int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != '1') return;
        grid[r][c] = '0';
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1);
    };
    for (int r = 0; r < rows; r++)
        for (int c = 0; c < cols; c++)
            if (grid[r][c] == '1') { dfs(r, c); count++; }
    return count;
}`,
            typescript: `function numIslands(grid: string[][]): number {
    const rows = grid.length, cols = grid[0].length;
    let count = 0;
    function dfs(r: number, c: number): void {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== '1') return;
        grid[r][c] = '0';
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1);
    }
    for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
            if (grid[r][c] === '1') { dfs(r, c); count++; }
    return count;
}`
        },
        explanation: "Flood fill pattern. DFS from each unvisited land cell, marking all connected cells. Count = # of DFS initiations.",
        patternTips: "This is THE intro graph problem. Same pattern for connected components, region marking, etc."
    },

    "max-island": {
        hints: [
            "Similar to island count, but track size during DFS.",
            "Return count of cells visited in each DFS.",
            "Track maximum."
        ],
        solutions: {
            python: `def maxAreaOfIsland(grid):
    rows, cols = len(grid), len(grid[0])
    
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != 1:
            return 0
        grid[r][c] = 0
        return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1)
    
    return max((dfs(r, c) for r in range(rows) for c in range(cols)), default=0)`,
            cpp: `int maxAreaOfIsland(vector<vector<int>>& grid) {
    int rows = grid.size(), cols = grid[0].size(), maxArea = 0;
    function<int(int, int)> dfs = [&](int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != 1) return 0;
        grid[r][c] = 0;
        return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1);
    };
    for (int r = 0; r < rows; r++)
        for (int c = 0; c < cols; c++)
            maxArea = max(maxArea, dfs(r, c));
    return maxArea;
}`,
            typescript: `function maxAreaOfIsland(grid: number[][]): number {
    const rows = grid.length, cols = grid[0].length;
    function dfs(r: number, c: number): number {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1) return 0;
        grid[r][c] = 0;
        return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1);
    }
    let max = 0;
    for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
            max = Math.max(max, dfs(r, c));
    return max;
}`
        },
        explanation: "DFS returns count of cells in island. Sum 1 + recursive calls for each direction.",
        patternTips: "Counting variant of flood fill. Return size instead of just marking."
    },

    "copy-network": {
        hints: [
            "Like linked list clone: create all nodes first, then set neighbors.",
            "Use hash map: original node → cloned node.",
            "DFS/BFS to traverse original graph."
        ],
        solutions: {
            python: `def cloneGraph(node):
    if not node:
        return None
    visited = {}
    
    def dfs(n):
        if n in visited:
            return visited[n]
        clone = Node(n.val)
        visited[n] = clone
        for neighbor in n.neighbors:
            clone.neighbors.append(dfs(neighbor))
        return clone
    
    return dfs(node)`,
            cpp: `Node* cloneGraph(Node* node) {
    if (!node) return nullptr;
    unordered_map<Node*, Node*> visited;
    function<Node*(Node*)> dfs = [&](Node* n) {
        if (visited.count(n)) return visited[n];
        Node* clone = new Node(n->val);
        visited[n] = clone;
        for (Node* neighbor : n->neighbors)
            clone->neighbors.push_back(dfs(neighbor));
        return clone;
    };
    return dfs(node);
}`,
            typescript: `function cloneGraph(node: Node | null): Node | null {
    if (!node) return null;
    const visited = new Map<Node, Node>();
    function dfs(n: Node): Node {
        if (visited.has(n)) return visited.get(n)!;
        const clone = new Node(n.val);
        visited.set(n, clone);
        for (const neighbor of n.neighbors)
            clone.neighbors.push(dfs(neighbor));
        return clone;
    }
    return dfs(node);
}`
        },
        explanation: "DFS with memoization. Create clone, store in map immediately (before recursion to handle cycles), then clone neighbors.",
        patternTips: "Graph cloning: same as linked list but with visited map for cycles. Clone node BEFORE recursing."
    },

    "rot-timer": {
        hints: [
            "Multi-source BFS: start from ALL rotten oranges.",
            "Each minute = one BFS level.",
            "Track if any fresh remain at end."
        ],
        solutions: {
            python: `from collections import deque

def orangesRotting(grid):
    rows, cols = len(grid), len(grid[0])
    queue = deque()
    fresh = 0
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                queue.append((r, c))
            elif grid[r][c] == 1:
                fresh += 1
    
    minutes = 0
    while queue and fresh:
        minutes += 1
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for dr, dc in [(1,0), (-1,0), (0,1), (0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    queue.append((nr, nc))
    
    return -1 if fresh else minutes`,
            cpp: `int orangesRotting(vector<vector<int>>& grid) {
    int rows = grid.size(), cols = grid[0].size(), fresh = 0;
    queue<pair<int,int>> q;
    for (int r = 0; r < rows; r++)
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == 2) q.push({r, c});
            else if (grid[r][c] == 1) fresh++;
        }
    int mins = 0;
    int dirs[5] = {0, 1, 0, -1, 0};
    while (!q.empty() && fresh) {
        mins++;
        int size = q.size();
        while (size--) {
            auto [r, c] = q.front(); q.pop();
            for (int i = 0; i < 4; i++) {
                int nr = r + dirs[i], nc = c + dirs[i+1];
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {
                    grid[nr][nc] = 2;
                    fresh--;
                    q.push({nr, nc});
                }
            }
        }
    }
    return fresh ? -1 : mins;
}`,
            typescript: `function orangesRotting(grid: number[][]): number {
    const rows = grid.length, cols = grid[0].length;
    const queue: [number, number][] = [];
    let fresh = 0;
    for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c]);
            else if (grid[r][c] === 1) fresh++;
        }
    let mins = 0;
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    while (queue.length && fresh) {
        mins++;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift()!;
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;
                    fresh--;
                    queue.push([nr, nc]);
                }
            }
        }
    }
    return fresh ? -1 : mins;
}`
        },
        explanation: "Multi-source BFS. Enqueue all starting points. Each BFS level = 1 time unit. Track remaining fresh count.",
        patternTips: "Multi-source BFS: start with all sources in queue. Level = distance from any source. Very common pattern."
    },

    "class-order": {
        hints: [
            "Classic topological sort: detect if DAG.",
            "DFS with three states: unvisited, visiting, visited.",
            "Cycle exists if we revisit a 'visiting' node."
        ],
        solutions: {
            python: `def canFinish(numCourses, prerequisites):
    graph = [[] for _ in range(numCourses)]
    for a, b in prerequisites:
        graph[b].append(a)
    
    # 0: unvisited, 1: visiting, 2: visited
    state = [0] * numCourses
    
    def dfs(node):
        if state[node] == 1:  # cycle
            return False
        if state[node] == 2:
            return True
        state[node] = 1
        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False
        state[node] = 2
        return True
    
    return all(dfs(i) for i in range(numCourses))`,
            cpp: `bool canFinish(int n, vector<vector<int>>& prerequisites) {
    vector<vector<int>> graph(n);
    for (auto& p : prerequisites) graph[p[1]].push_back(p[0]);
    vector<int> state(n, 0);
    function<bool(int)> dfs = [&](int node) {
        if (state[node] == 1) return false;
        if (state[node] == 2) return true;
        state[node] = 1;
        for (int neighbor : graph[node])
            if (!dfs(neighbor)) return false;
        state[node] = 2;
        return true;
    };
    for (int i = 0; i < n; i++)
        if (!dfs(i)) return false;
    return true;
}`,
            typescript: `function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array.from({length: numCourses}, () => []);
    for (const [a, b] of prerequisites) graph[b].push(a);
    const state = new Array(numCourses).fill(0);
    function dfs(node: number): boolean {
        if (state[node] === 1) return false;
        if (state[node] === 2) return true;
        state[node] = 1;
        for (const neighbor of graph[node])
            if (!dfs(neighbor)) return false;
        state[node] = 2;
        return true;
    }
    for (let i = 0; i < numCourses; i++)
        if (!dfs(i)) return false;
    return true;
}`
        },
        explanation: "Three-state cycle detection. 'Visiting' means in current DFS path. If we see 'visiting' again, cycle exists.",
        patternTips: "Topological sort: DFS with 3 states or Kahn's algorithm (BFS with indegree). Both detect cycles."
    },

    "class-order-2": {
        hints: [
            "Same as course schedule, but return the ORDER.",
            "Post-order DFS gives reverse topological order.",
            "Or use Kahn's algorithm for forward order."
        ],
        solutions: {
            python: `def findOrder(numCourses, prerequisites):
    graph = [[] for _ in range(numCourses)]
    for a, b in prerequisites:
        graph[b].append(a)
    
    state = [0] * numCourses
    result = []
    
    def dfs(node):
        if state[node] == 1:
            return False
        if state[node] == 2:
            return True
        state[node] = 1
        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False
        state[node] = 2
        result.append(node)
        return True
    
    for i in range(numCourses):
        if not dfs(i):
            return []
    return result[::-1]`,
            cpp: `vector<int> findOrder(int n, vector<vector<int>>& prerequisites) {
    vector<vector<int>> graph(n);
    for (auto& p : prerequisites) graph[p[1]].push_back(p[0]);
    vector<int> state(n, 0), result;
    function<bool(int)> dfs = [&](int node) {
        if (state[node] == 1) return false;
        if (state[node] == 2) return true;
        state[node] = 1;
        for (int neighbor : graph[node])
            if (!dfs(neighbor)) return false;
        state[node] = 2;
        result.push_back(node);
        return true;
    };
    for (int i = 0; i < n; i++)
        if (!dfs(i)) return {};
    reverse(result.begin(), result.end());
    return result;
}`,
            typescript: `function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: number[][] = Array.from({length: numCourses}, () => []);
    for (const [a, b] of prerequisites) graph[b].push(a);
    const state = new Array(numCourses).fill(0);
    const result: number[] = [];
    function dfs(node: number): boolean {
        if (state[node] === 1) return false;
        if (state[node] === 2) return true;
        state[node] = 1;
        for (const neighbor of graph[node])
            if (!dfs(neighbor)) return false;
        state[node] = 2;
        result.push(node);
        return true;
    }
    for (let i = 0; i < numCourses; i++)
        if (!dfs(i)) return [];
    return result.reverse();
}`
        },
        explanation: "Add to result after all descendants processed (post-order). Reverse for correct topological order.",
        patternTips: "Post-order DFS gives reverse topo order. Kahn's (BFS) gives forward order directly."
    },

    "component-count": {
        hints: [
            "Union-Find or DFS/BFS from each unvisited node.",
            "Count number of connected components.",
            "Each component = one DFS/BFS or one union operation."
        ],
        solutions: {
            python: `def countComponents(n, edges):
    graph = [[] for _ in range(n)]
    for a, b in edges:
        graph[a].append(b)
        graph[b].append(a)
    
    visited = set()
    count = 0
    
    def dfs(node):
        if node in visited:
            return
        visited.add(node)
        for neighbor in graph[node]:
            dfs(neighbor)
    
    for i in range(n):
        if i not in visited:
            dfs(i)
            count += 1
    return count`,
            cpp: `int countComponents(int n, vector<vector<int>>& edges) {
    vector<vector<int>> graph(n);
    for (auto& e : edges) {
        graph[e[0]].push_back(e[1]);
        graph[e[1]].push_back(e[0]);
    }
    vector<bool> visited(n, false);
    int count = 0;
    function<void(int)> dfs = [&](int node) {
        if (visited[node]) return;
        visited[node] = true;
        for (int neighbor : graph[node]) dfs(neighbor);
    };
    for (int i = 0; i < n; i++) {
        if (!visited[i]) { dfs(i); count++; }
    }
    return count;
}`,
            typescript: `function countComponents(n: number, edges: number[][]): number {
    const graph: number[][] = Array.from({length: n}, () => []);
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    const visited = new Set<number>();
    let count = 0;
    function dfs(node: number): void {
        if (visited.has(node)) return;
        visited.add(node);
        for (const neighbor of graph[node]) dfs(neighbor);
    }
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) { dfs(i); count++; }
    }
    return count;
}`
        },
        explanation: "DFS from each unvisited node, marking all reachable. Count = number of DFS initiations.",
        patternTips: "Connected components = # of DFS calls with fresh start. Union-Find also works, often simpler for dynamic graphs."
    },

    "valid-tree": {
        hints: [
            "Tree = connected + no cycles.",
            "Tree with n nodes has exactly n-1 edges.",
            "Verify connected AND edges == n-1."
        ],
        solutions: {
            python: `def validTree(n, edges):
    if len(edges) != n - 1:
        return False
    
    graph = [[] for _ in range(n)]
    for a, b in edges:
        graph[a].append(b)
        graph[b].append(a)
    
    visited = set()
    def dfs(node):
        if node in visited:
            return
        visited.add(node)
        for neighbor in graph[node]:
            dfs(neighbor)
    
    dfs(0)
    return len(visited) == n`,
            cpp: `bool validTree(int n, vector<vector<int>>& edges) {
    if (edges.size() != n - 1) return false;
    vector<vector<int>> graph(n);
    for (auto& e : edges) {
        graph[e[0]].push_back(e[1]);
        graph[e[1]].push_back(e[0]);
    }
    vector<bool> visited(n, false);
    function<void(int)> dfs = [&](int node) {
        if (visited[node]) return;
        visited[node] = true;
        for (int neighbor : graph[node]) dfs(neighbor);
    };
    dfs(0);
    return count(visited.begin(), visited.end(), true) == n;
}`,
            typescript: `function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) return false;
    const graph: number[][] = Array.from({length: n}, () => []);
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    const visited = new Set<number>();
    function dfs(node: number): void {
        if (visited.has(node)) return;
        visited.add(node);
        for (const neighbor of graph[node]) dfs(neighbor);
    }
    dfs(0);
    return visited.size === n;
}`
        },
        explanation: "Tree: connected graph with n-1 edges. Check edge count first (quick reject), then verify connectivity via DFS.",
        patternTips: "Tree properties: n-1 edges, connected, no cycles (any two imply third). Use edge count + connectivity check."
    },

    "extra-edge": {
        hints: [
            "Find the edge that creates a cycle.",
            "Union-Find: edge that connects already-connected nodes.",
            "Return the last such edge found."
        ],
        solutions: {
            python: `def findRedundantConnection(edges):
    parent = list(range(len(edges) + 1))
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(x, y):
        px, py = find(x), find(y)
        if px == py:
            return False
        parent[px] = py
        return True
    
    for a, b in edges:
        if not union(a, b):
            return [a, b]`,
            cpp: `vector<int> findRedundantConnection(vector<vector<int>>& edges) {
    int n = edges.size();
    vector<int> parent(n + 1);
    iota(parent.begin(), parent.end(), 0);
    function<int(int)> find = [&](int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    };
    for (auto& e : edges) {
        int px = find(e[0]), py = find(e[1]);
        if (px == py) return e;
        parent[px] = py;
    }
    return {};
}`,
            typescript: `function findRedundantConnection(edges: number[][]): number[] {
    const n = edges.length;
    const parent = Array.from({length: n + 1}, (_, i) => i);
    function find(x: number): number {
        return parent[x] === x ? x : parent[x] = find(parent[x]);
    }
    for (const [a, b] of edges) {
        const pa = find(a), pb = find(b);
        if (pa === pb) return [a, b];
        parent[pa] = pb;
    }
    return [];
}`
        },
        explanation: "Union-Find: when union fails (already connected), that edge is redundant. Process edges in order, return first failure.",
        patternTips: "Cycle detection in undirected graph: Union-Find is elegant. Edge creates cycle if both endpoints already connected."
    },

    // ============================================
    // ROUTE OPTIMIZATION (Advanced Graphs)
    // ============================================

    "signal-time": {
        hints: [
            "Shortest path from source to all nodes: Dijkstra.",
            "Return max of all shortest paths.",
            "If any node unreachable, return -1."
        ],
        solutions: {
            python: `import heapq

def networkDelayTime(times, n, k):
    graph = [[] for _ in range(n + 1)]
    for u, v, w in times:
        graph[u].append((v, w))
    
    dist = [float('inf')] * (n + 1)
    dist[k] = 0
    heap = [(0, k)]
    
    while heap:
        d, node = heapq.heappop(heap)
        if d > dist[node]:
            continue
        for neighbor, weight in graph[node]:
            if dist[node] + weight < dist[neighbor]:
                dist[neighbor] = dist[node] + weight
                heapq.heappush(heap, (dist[neighbor], neighbor))
    
    result = max(dist[1:])
    return result if result < float('inf') else -1`,
            cpp: `int networkDelayTime(vector<vector<int>>& times, int n, int k) {
    vector<vector<pair<int,int>>> graph(n + 1);
    for (auto& t : times) graph[t[0]].push_back({t[1], t[2]});
    vector<int> dist(n + 1, INT_MAX);
    dist[k] = 0;
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    pq.push({0, k});
    while (!pq.empty()) {
        auto [d, node] = pq.top(); pq.pop();
        if (d > dist[node]) continue;
        for (auto [neighbor, weight] : graph[node]) {
            if (dist[node] + weight < dist[neighbor]) {
                dist[neighbor] = dist[node] + weight;
                pq.push({dist[neighbor], neighbor});
            }
        }
    }
    int result = *max_element(dist.begin() + 1, dist.end());
    return result == INT_MAX ? -1 : result;
}`,
            typescript: `function networkDelayTime(times: number[][], n: number, k: number): number {
    const graph: [number, number][][] = Array.from({length: n + 1}, () => []);
    for (const [u, v, w] of times) graph[u].push([v, w]);
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;
    const pq: [number, number][] = [[0, k]];
    while (pq.length) {
        pq.sort((a, b) => a[0] - b[0]);
        const [d, node] = pq.shift()!;
        if (d > dist[node]) continue;
        for (const [neighbor, weight] of graph[node]) {
            if (dist[node] + weight < dist[neighbor]) {
                dist[neighbor] = dist[node] + weight;
                pq.push([dist[neighbor], neighbor]);
            }
        }
    }
    const result = Math.max(...dist.slice(1));
    return result === Infinity ? -1 : result;
}`
        },
        explanation: "Dijkstra's algorithm. Min-heap processes nodes in order of shortest distance. Answer = max of all shortest paths.",
        patternTips: "Dijkstra for single-source shortest paths (non-negative weights). Skip stale entries (d > dist[node])."
    },

    "connect-cost": {
        hints: [
            "Minimum spanning tree: Prim's or Kruskal's.",
            "Distance = Manhattan: |x1-x2| + |y1-y2|.",
            "Don't pre-compute all edges (n² edges)."
        ],
        solutions: {
            python: `import heapq

def minCostConnectPoints(points):
    n = len(points)
    visited = [False] * n
    heap = [(0, 0)]  # (cost, point index)
    total = 0
    edges = 0
    
    while edges < n:
        cost, i = heapq.heappop(heap)
        if visited[i]:
            continue
        visited[i] = True
        total += cost
        edges += 1
        for j in range(n):
            if not visited[j]:
                dist = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])
                heapq.heappush(heap, (dist, j))
    
    return total`,
            cpp: `int minCostConnectPoints(vector<vector<int>>& points) {
    int n = points.size();
    vector<bool> visited(n, false);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    pq.push({0, 0});
    int total = 0, edges = 0;
    while (edges < n) {
        auto [cost, i] = pq.top(); pq.pop();
        if (visited[i]) continue;
        visited[i] = true;
        total += cost;
        edges++;
        for (int j = 0; j < n; j++) {
            if (!visited[j]) {
                int dist = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1]);
                pq.push({dist, j});
            }
        }
    }
    return total;
}`,
            typescript: `function minCostConnectPoints(points: number[][]): number {
    const n = points.length;
    const visited = new Array(n).fill(false);
    const pq: [number, number][] = [[0, 0]];
    let total = 0, edges = 0;
    while (edges < n) {
        pq.sort((a, b) => a[0] - b[0]);
        const [cost, i] = pq.shift()!;
        if (visited[i]) continue;
        visited[i] = true;
        total += cost;
        edges++;
        for (let j = 0; j < n; j++) {
            if (!visited[j]) {
                const dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
                pq.push([dist, j]);
            }
        }
    }
    return total;
}`
        },
        explanation: "Prim's MST. Add edges from current MST greedily. Compute distances on-the-fly rather than storing all n² edges.",
        patternTips: "MST: Prim's (grow from one node) or Kruskal's (sort edges, union-find). Prim's better for dense graphs."
    },

    "budget-flights": {
        hints: [
            "Bellman-Ford with at most k+1 edges.",
            "Or BFS with k levels.",
            "Track min cost with exactly i stops."
        ],
        solutions: {
            python: `from collections import deque

def findCheapestPrice(n, flights, src, dst, k):
    prices = [float('inf')] * n
    prices[src] = 0
    
    for _ in range(k + 1):
        temp = prices[:]
        for u, v, w in flights:
            if prices[u] != float('inf'):
                temp[v] = min(temp[v], prices[u] + w)
        prices = temp
    
    return prices[dst] if prices[dst] != float('inf') else -1`,
            cpp: `int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
    vector<int> prices(n, INT_MAX);
    prices[src] = 0;
    for (int i = 0; i <= k; i++) {
        vector<int> temp = prices;
        for (auto& f : flights) {
            if (prices[f[0]] != INT_MAX) {
                temp[f[1]] = min(temp[f[1]], prices[f[0]] + f[2]);
            }
        }
        prices = temp;
    }
    return prices[dst] == INT_MAX ? -1 : prices[dst];
}`,
            typescript: `function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;
    for (let i = 0; i <= k; i++) {
        const temp = [...prices];
        for (const [u, v, w] of flights) {
            if (prices[u] !== Infinity) {
                temp[v] = Math.min(temp[v], prices[u] + w);
            }
        }
        prices = temp;
    }
    return prices[dst] === Infinity ? -1 : prices[dst];
}`
        },
        explanation: "Bellman-Ford variant: relax edges k+1 times for at most k stops. Use temp array to not mix rounds.",
        patternTips: "Limited hops: Bellman-Ford or BFS with level tracking. Key: don't mix updates from different rounds."
    },

    // ============================================
    // MEMORY LANE (1D Dynamic Programming)
    // ============================================

    "climb-ways": {
        hints: [
            "Base cases: 1 way to reach step 0, 1 way to reach step 1.",
            "For each step: ways(n) = ways(n-1) + ways(n-2).",
            "It's Fibonacci in disguise!"
        ],
        solutions: {
            python: `def climbStairs(n: int) -> int:
    if n <= 2:
        return n
    prev, curr = 1, 2
    for _ in range(3, n + 1):
        prev, curr = curr, prev + curr
    return curr`,
            cpp: `int climbStairs(int n) {
    if (n <= 2) return n;
    int prev = 1, curr = 2;
    for (int i = 3; i <= n; i++) {
        int next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}`,
            typescript: `function climbStairs(n: number): number {
    if (n <= 2) return n;
    let prev = 1, curr = 2;
    for (let i = 3; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return curr;
}`
        },
        explanation: "Classic DP. Each step reachable from prev two. Space optimized: only need last two values.",
        patternTips: "This is Fibonacci. Many problems reduce to this pattern. Always check if you can space-optimize to O(1)."
    },

    "min-cost-climb": {
        hints: [
            "dp[i] = min cost to reach step i.",
            "dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]).",
            "Start from step 0 or 1, reach step n."
        ],
        solutions: {
            python: `def minCostClimbingStairs(cost):
    n = len(cost)
    prev2, prev1 = 0, 0
    for i in range(2, n + 1):
        curr = min(prev1 + cost[i-1], prev2 + cost[i-2])
        prev2, prev1 = prev1, curr
    return prev1`,
            cpp: `int minCostClimbingStairs(vector<int>& cost) {
    int n = cost.size();
    int prev2 = 0, prev1 = 0;
    for (int i = 2; i <= n; i++) {
        int curr = min(prev1 + cost[i-1], prev2 + cost[i-2]);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`,
            typescript: `function minCostClimbingStairs(cost: number[]): number {
    let prev2 = 0, prev1 = 0;
    for (let i = 2; i <= cost.length; i++) {
        const curr = Math.min(prev1 + cost[i-1], prev2 + cost[i-2]);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`
        },
        explanation: "Similar to climb stairs, but minimize cost. Pay cost to step onto, goal is to reach top (past last index).",
        patternTips: "Add 'cost' dimension to Fibonacci-style DP. Space optimize to O(1)."
    },

    "home-heist": {
        hints: [
            "Can't rob adjacent houses.",
            "For each house: max(skip it, take it + rob(i-2)).",
            "dp[i] = max(dp[i-1], dp[i-2] + nums[i])."
        ],
        solutions: {
            python: `def rob(nums):
    if len(nums) == 1:
        return nums[0]
    prev2, prev1 = 0, 0
    for num in nums:
        curr = max(prev1, prev2 + num)
        prev2, prev1 = prev1, curr
    return prev1`,
            cpp: `int rob(vector<int>& nums) {
    int prev2 = 0, prev1 = 0;
    for (int num : nums) {
        int curr = max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`,
            typescript: `function rob(nums: number[]): number {
    let prev2 = 0, prev1 = 0;
    for (const num of nums) {
        const curr = Math.max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`
        },
        explanation: "Classic 'skip or take' DP. If take current, add to best from 2 back. If skip, keep best from 1 back.",
        patternTips: "This pattern appears everywhere: knapsack, delete vs keep, include vs exclude."
    },

    "house-circle": {
        hints: [
            "Houses in circle: first and last are adjacent.",
            "Two cases: rob houses [0..n-2] or [1..n-1].",
            "Take max of both cases."
        ],
        solutions: {
            python: `def rob(nums):
    if len(nums) == 1:
        return nums[0]
    
    def rob_linear(houses):
        prev2, prev1 = 0, 0
        for num in houses:
            prev2, prev1 = prev1, max(prev1, prev2 + num)
        return prev1
    
    return max(rob_linear(nums[:-1]), rob_linear(nums[1:]))`,
            cpp: `int rob(vector<int>& nums) {
    if (nums.size() == 1) return nums[0];
    auto robLinear = [](vector<int>& nums, int start, int end) {
        int prev2 = 0, prev1 = 0;
        for (int i = start; i <= end; i++) {
            int curr = max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    };
    return max(robLinear(nums, 0, nums.size()-2), robLinear(nums, 1, nums.size()-1));
}`,
            typescript: `function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    const robLinear = (arr: number[]) => {
        let prev2 = 0, prev1 = 0;
        for (const num of arr) {
            [prev2, prev1] = [prev1, Math.max(prev1, prev2 + num)];
        }
        return prev1;
    };
    return Math.max(robLinear(nums.slice(0, -1)), robLinear(nums.slice(1)));
}`
        },
        explanation: "Circular constraint: break into two linear problems. Exclude either first or last house.",
        patternTips: "Circular DP: often decompose into linear subproblems with different boundaries."
    },

    "longest-climb": {
        hints: [
            "For each index, what's the longest increasing subsequence ending here?",
            "For LIS ending at i: find max LIS among all j < i where nums[j] < nums[i].",
            "Binary search optimization: O(n log n)."
        ],
        solutions: {
            python: `def lengthOfLIS(nums):
    tails = []
    for num in nums:
        left, right = 0, len(tails)
        while left < right:
            mid = (left + right) // 2
            if tails[mid] < num:
                left = mid + 1
            else:
                right = mid
        if left == len(tails):
            tails.append(num)
        else:
            tails[left] = num
    return len(tails)`,
            cpp: `int lengthOfLIS(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return tails.size();
}`,
            typescript: `function lengthOfLIS(nums: number[]): number {
    const tails: number[] = [];
    for (const num of nums) {
        let left = 0, right = tails.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) left = mid + 1;
            else right = mid;
        }
        if (left === tails.length) tails.push(num);
        else tails[left] = num;
    }
    return tails.length;
}`
        },
        explanation: "Patience sorting: maintain smallest tail for each LIS length. Binary search where to place new element.",
        patternTips: "O(n²) DP is straightforward. O(n log n) uses 'tails' array + binary search. Know both."
    },

    "coin-ways": {
        hints: [
            "dp[amount] = number of ways to make amount.",
            "For each coin, add ways without it + ways with it.",
            "Unbounded: each coin can be used multiple times."
        ],
        solutions: {
            python: `def change(amount, coins):
    dp = [0] * (amount + 1)
    dp[0] = 1
    for coin in coins:
        for x in range(coin, amount + 1):
            dp[x] += dp[x - coin]
    return dp[amount]`,
            cpp: `int change(int amount, vector<int>& coins) {
    vector<int> dp(amount + 1, 0);
    dp[0] = 1;
    for (int coin : coins) {
        for (int x = coin; x <= amount; x++) {
            dp[x] += dp[x - coin];
        }
    }
    return dp[amount];
}`,
            typescript: `function change(amount: number, coins: number[]): number {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let x = coin; x <= amount; x++) {
            dp[x] += dp[x - coin];
        }
    }
    return dp[amount];
}`
        },
        explanation: "Outer loop: coins. Inner loop: amounts. This ordering avoids counting same combination twice.",
        patternTips: "Coin change variations: min coins (min), number of ways (sum). Loop order matters for combinations vs permutations."
    },

    "word-split": {
        hints: [
            "dp[i] = can we segment s[0:i]?",
            "For each position, check all words: does s end with this word AND dp[i-wordLen]?",
            "BFS also works."
        ],
        solutions: {
            python: `def wordBreak(s, wordDict):
    word_set = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    return dp[len(s)]`,
            cpp: `bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> words(wordDict.begin(), wordDict.end());
    int n = s.size();
    vector<bool> dp(n + 1, false);
    dp[0] = true;
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && words.count(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}`,
            typescript: `function wordBreak(s: string, wordDict: string[]): boolean {
    const words = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && words.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
}`
        },
        explanation: "dp[i] = true if s[0:i] can be segmented. Check all possible last words. O(n² × m) or O(n × m × L).",
        patternTips: "String split DP: check all suffixes that are valid words. Works for counting too."
    },

    "decode-ways": {
        hints: [
            "dp[i] = ways to decode s[0:i].",
            "If s[i] valid (1-9): dp[i] += dp[i-1].",
            "If s[i-1:i+1] valid (10-26): dp[i] += dp[i-2]."
        ],
        solutions: {
            python: `def numDecodings(s):
    if s[0] == '0':
        return 0
    n = len(s)
    prev2, prev1 = 1, 1
    for i in range(1, n):
        curr = 0
        if s[i] != '0':
            curr += prev1
        two_digit = int(s[i-1:i+1])
        if 10 <= two_digit <= 26:
            curr += prev2
        prev2, prev1 = prev1, curr
    return prev1`,
            cpp: `int numDecodings(string s) {
    if (s[0] == '0') return 0;
    int n = s.size();
    int prev2 = 1, prev1 = 1;
    for (int i = 1; i < n; i++) {
        int curr = 0;
        if (s[i] != '0') curr += prev1;
        int twoDigit = stoi(s.substr(i-1, 2));
        if (twoDigit >= 10 && twoDigit <= 26) curr += prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`,
            typescript: `function numDecodings(s: string): number {
    if (s[0] === '0') return 0;
    let prev2 = 1, prev1 = 1;
    for (let i = 1; i < s.length; i++) {
        let curr = 0;
        if (s[i] !== '0') curr += prev1;
        const twoDigit = parseInt(s.slice(i-1, i+1));
        if (twoDigit >= 10 && twoDigit <= 26) curr += prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`
        },
        explanation: "Like Fibonacci but with validity conditions. Single digit (1-9) and two digits (10-26) contribute differently.",
        patternTips: "Parsing DP: handle edge cases ('0', leading zeros). Often Fibonacci-like with conditions."
    },

    // ============================================
    // GRID GAME (2D Dynamic Programming)
    // ============================================

    "unique-trails": {
        hints: [
            "dp[i][j] = paths to reach (i, j).",
            "Can only come from top or left: dp[i][j] = dp[i-1][j] + dp[i][j-1].",
            "Base case: first row and column are all 1s."
        ],
        solutions: {
            python: `def uniquePaths(m, n):
    dp = [1] * n
    for _ in range(1, m):
        for j in range(1, n):
            dp[j] += dp[j-1]
    return dp[n-1]`,
            cpp: `int uniquePaths(int m, int n) {
    vector<int> dp(n, 1);
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[j] += dp[j-1];
        }
    }
    return dp[n-1];
}`,
            typescript: `function uniquePaths(m: number, n: number): number {
    const dp = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j-1];
        }
    }
    return dp[n-1];
}`
        },
        explanation: "Pascal's triangle pattern. Space optimized to 1D: dp[j] is 'from top', dp[j-1] is 'from left'.",
        patternTips: "Grid path counting: often space-optimizable to O(n). This is also C(m+n-2, m-1) combinatorially."
    },

    "longest-common": {
        hints: [
            "dp[i][j] = LCS of s1[0:i] and s2[0:j].",
            "If s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1.",
            "Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])."
        ],
        solutions: {
            python: `def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]`,
            cpp: `int longestCommonSubsequence(string text1, string text2) {
    int m = text1.size(), n = text2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1[i-1] == text2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}`,
            typescript: `function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length, n = text2.length;
    const dp: number[][] = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i-1] === text2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}`
        },
        explanation: "Classic 2D DP. Match = extend diagonal. No match = best of excluding one character from either string.",
        patternTips: "LCS is THE two-sequence DP. Edit distance, sequence alignment all build on this."
    },

    "zero-one-pack": {
        hints: [
            "Classic 0/1 knapsack: take or skip each item.",
            "dp[w] = max value achievable with capacity w.",
            "Iterate items, then capacity (reverse for 0/1)."
        ],
        solutions: {
            python: `def knapsack(weights, values, capacity):
    dp = [0] * (capacity + 1)
    for w, v in zip(weights, values):
        for c in range(capacity, w - 1, -1):
            dp[c] = max(dp[c], dp[c - w] + v)
    return dp[capacity]`,
            cpp: `int knapsack(vector<int>& weights, vector<int>& values, int capacity) {
    vector<int> dp(capacity + 1, 0);
    for (int i = 0; i < weights.size(); i++) {
        for (int c = capacity; c >= weights[i]; c--) {
            dp[c] = max(dp[c], dp[c - weights[i]] + values[i]);
        }
    }
    return dp[capacity];
}`,
            typescript: `function knapsack(weights: number[], values: number[], capacity: number): number {
    const dp = new Array(capacity + 1).fill(0);
    for (let i = 0; i < weights.length; i++) {
        for (let c = capacity; c >= weights[i]; c--) {
            dp[c] = Math.max(dp[c], dp[c - weights[i]] + values[i]);
        }
    }
    return dp[capacity];
}`
        },
        explanation: "0/1 knapsack: iterate capacity in reverse to avoid using same item twice. Space: O(capacity).",
        patternTips: "Subset sum, partition equal, coin change (min) are all knapsack variants. Know the template."
    },

    "half-sum": {
        hints: [
            "Can we partition into two equal halves?",
            "Target = sum/2. Reduce to subset sum.",
            "dp[x] = can we make sum x?"
        ],
        solutions: {
            python: `def canPartition(nums):
    total = sum(nums)
    if total % 2:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for t in range(target, num - 1, -1):
            dp[t] = dp[t] or dp[t - num]
    return dp[target]`,
            cpp: `bool canPartition(vector<int>& nums) {
    int total = accumulate(nums.begin(), nums.end(), 0);
    if (total % 2) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums) {
        for (int t = target; t >= num; t--) {
            dp[t] = dp[t] || dp[t - num];
        }
    }
    return dp[target];
}`,
            typescript: `function canPartition(nums: number[]): boolean {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % 2) return false;
    const target = total / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (const num of nums) {
        for (let t = target; t >= num; t--) {
            dp[t] = dp[t] || dp[t - num];
        }
    }
    return dp[target];
}`
        },
        explanation: "Reduce to subset sum: can we pick elements summing to total/2? 0/1 knapsack pattern.",
        patternTips: "Many partition problems reduce to subset sum. Check if total is even first."
    },

    // ============================================
    // TIME BLOCKS (Intervals)
    // ============================================

    "event-merge": {
        hints: [
            "Sort by start time.",
            "If current overlaps with last merged, extend end time.",
            "Otherwise, add as new interval."
        ],
        solutions: {
            python: `def merge(intervals):
    intervals.sort()
    merged = []
    for interval in intervals:
        if merged and interval[0] <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], interval[1])
        else:
            merged.append(interval)
    return merged`,
            cpp: `vector<vector<int>> merge(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged;
    for (auto& interval : intervals) {
        if (!merged.empty() && interval[0] <= merged.back()[1]) {
            merged.back()[1] = max(merged.back()[1], interval[1]);
        } else {
            merged.push_back(interval);
        }
    }
    return merged;
}`,
            typescript: `function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged: number[][] = [];
    for (const interval of intervals) {
        if (merged.length && interval[0] <= merged[merged.length - 1][1]) {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
        } else {
            merged.push(interval);
        }
    }
    return merged;
}`
        },
        explanation: "Sort by start. Merge if overlapping (current start <= last end). Core interval operation.",
        patternTips: "This is THE interval pattern. Sort by start, process linearly, check overlap condition."
    },

    "slot-insert": {
        hints: [
            "Find position to insert by comparing start times.",
            "Merge overlapping intervals after insertion.",
            "Can do in one pass with careful merging."
        ],
        solutions: {
            python: `def insert(intervals, newInterval):
    result = []
    for i, interval in enumerate(intervals):
        if newInterval[1] < interval[0]:
            return result + [newInterval] + intervals[i:]
        elif newInterval[0] > interval[1]:
            result.append(interval)
        else:
            newInterval = [min(newInterval[0], interval[0]), max(newInterval[1], interval[1])]
    result.append(newInterval)
    return result`,
            cpp: `vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
    vector<vector<int>> result;
    int i = 0, n = intervals.size();
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push_back(intervals[i++]);
    }
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = min(newInterval[0], intervals[i][0]);
        newInterval[1] = max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push_back(newInterval);
    while (i < n) result.push_back(intervals[i++]);
    return result;
}`,
            typescript: `function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i++]);
    }
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    while (i < intervals.length) result.push(intervals[i++]);
    return result;
}`
        },
        explanation: "Three phases: add non-overlapping before, merge all overlapping (updating newInterval), add remaining.",
        patternTips: "Insertion maintains sorted order. Three cases: before, overlapping, after."
    },

    "no-overlap": {
        hints: [
            "Minimum removals = total - max non-overlapping.",
            "Greedy: sort by end time, always pick earliest ending.",
            "Classic activity selection."
        ],
        solutions: {
            python: `def eraseOverlapIntervals(intervals):
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[1])
    count = 1
    end = intervals[0][1]
    for i in range(1, len(intervals)):
        if intervals[i][0] >= end:
            count += 1
            end = intervals[i][1]
    return len(intervals) - count`,
            cpp: `int eraseOverlapIntervals(vector<vector<int>>& intervals) {
    if (intervals.empty()) return 0;
    sort(intervals.begin(), intervals.end(), [](auto& a, auto& b) {
        return a[1] < b[1];
    });
    int count = 1, end = intervals[0][1];
    for (int i = 1; i < intervals.size(); i++) {
        if (intervals[i][0] >= end) {
            count++;
            end = intervals[i][1];
        }
    }
    return intervals.size() - count;
}`,
            typescript: `function eraseOverlapIntervals(intervals: number[][]): number {
    if (!intervals.length) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 1, end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= end) {
            count++;
            end = intervals[i][1];
        }
    }
    return intervals.length - count;
}`
        },
        explanation: "Greedy activity selection: sort by end, pick non-overlapping greedily. Answer = total - picked.",
        patternTips: "Removing minimum = keeping maximum. Sort by END time for greedy selection."
    },

    // ============================================
    // QUICK DECISIONS (Greedy)
    // ============================================

    "max-sub": {
        hints: [
            "Kadane's algorithm: track max ending at current position.",
            "If sum goes negative, reset to 0.",
            "Track global max."
        ],
        solutions: {
            python: `def maxSubArray(nums):
    max_sum = nums[0]
    current = 0
    for num in nums:
        current = max(num, current + num)
        max_sum = max(max_sum, current)
    return max_sum`,
            cpp: `int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0], current = 0;
    for (int num : nums) {
        current = max(num, current + num);
        maxSum = max(maxSum, current);
    }
    return maxSum;
}`,
            typescript: `function maxSubArray(nums: number[]): number {
    let maxSum = nums[0], current = 0;
    for (const num of nums) {
        current = Math.max(num, current + num);
        maxSum = Math.max(maxSum, current);
    }
    return maxSum;
}`
        },
        explanation: "Kadane: either extend current subarray or start fresh. If previous sum hurts, discard it.",
        patternTips: "Kadane is THE greedy pattern for subarrays. O(n) time, O(1) space."
    },

    "hop-game": {
        hints: [
            "Track the farthest position reachable.",
            "At each position, update max reach.",
            "If current position > max reach, can't continue."
        ],
        solutions: {
            python: `def canJump(nums):
    max_reach = 0
    for i, num in enumerate(nums):
        if i > max_reach:
            return False
        max_reach = max(max_reach, i + num)
    return True`,
            cpp: `bool canJump(vector<int>& nums) {
    int maxReach = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (i > maxReach) return false;
        maxReach = max(maxReach, i + nums[i]);
    }
    return true;
}`,
            typescript: `function canJump(nums: number[]): boolean {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}`
        },
        explanation: "Greedy: track frontier. If we can reach position i, try to extend frontier. Fail if stuck.",
        patternTips: "Frontier tracking is powerful. Works for many reachability problems."
    },

    "hop-game-2": {
        hints: [
            "Track the current range [left, right] of positions.",
            "Each jump expands range to farthest reachable.",
            "Count jumps until range includes last index."
        ],
        solutions: {
            python: `def jump(nums):
    jumps = 0
    current_end = 0
    farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == current_end:
            jumps += 1
            current_end = farthest
    return jumps`,
            cpp: `int jump(vector<int>& nums) {
    int jumps = 0, currentEnd = 0, farthest = 0;
    for (int i = 0; i < nums.size() - 1; i++) {
        farthest = max(farthest, i + nums[i]);
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    return jumps;
}`,
            typescript: `function jump(nums: number[]): number {
    let jumps = 0, currentEnd = 0, farthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    return jumps;
}`
        },
        explanation: "BFS-like: each 'level' is positions reachable in k jumps. Expand to farthest, increment jump at boundary.",
        patternTips: "Track range of current 'level'. At boundary, increment and expand range."
    },

    "refuel-car": {
        hints: [
            "Greedy: delay using stations until needed.",
            "Use max-heap to always pick best available station.",
            "Add station to heap when passed, use when out of gas."
        ],
        solutions: {
            python: `import heapq

def minRefuelStops(target, startFuel, stations):
    heap = []  # max heap (negative fuel)
    fuel = startFuel
    stops = 0
    prev = 0
    
    for pos, gas in stations + [[target, 0]]:
        fuel -= pos - prev
        while heap and fuel < 0:
            fuel -= heapq.heappop(heap)
            stops += 1
        if fuel < 0:
            return -1
        heapq.heappush(heap, -gas)
        prev = pos
    
    return stops`,
            cpp: `int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {
    priority_queue<int> pq;
    int fuel = startFuel, stops = 0, prev = 0;
    stations.push_back({target, 0});
    for (auto& s : stations) {
        fuel -= s[0] - prev;
        while (!pq.empty() && fuel < 0) {
            fuel += pq.top(); pq.pop();
            stops++;
        }
        if (fuel < 0) return -1;
        pq.push(s[1]);
        prev = s[0];
    }
    return stops;
}`,
            typescript: `function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {
    const pq: number[] = [];
    let fuel = startFuel, stops = 0, prev = 0;
    stations.push([target, 0]);
    for (const [pos, gas] of stations) {
        fuel -= pos - prev;
        while (pq.length && fuel < 0) {
            pq.sort((a, b) => b - a);
            fuel += pq.shift()!;
            stops++;
        }
        if (fuel < 0) return -1;
        pq.push(gas);
        prev = pos;
    }
    return stops;
}`
        },
        explanation: "Greedy with regret: pass stations, add to heap. When out of fuel, 'use' best passed station.",
        patternTips: "Postpone decisions until necessary, then pick best. Max-heap enables this pattern."
    },

    // ============================================
    // BINARY LOGIC (Bit Manipulation)
    // ============================================

    "lone-number": {
        hints: [
            "XOR of a number with itself is 0.",
            "XOR of a number with 0 is the number.",
            "XOR all numbers: pairs cancel, single remains."
        ],
        solutions: {
            python: `def singleNumber(nums):
    result = 0
    for num in nums:
        result ^= num
    return result`,
            cpp: `int singleNumber(vector<int>& nums) {
    int result = 0;
    for (int num : nums) result ^= num;
    return result;
}`,
            typescript: `function singleNumber(nums: number[]): number {
    return nums.reduce((a, b) => a ^ b, 0);
}`
        },
        explanation: "XOR properties: a ^ a = 0, a ^ 0 = a, commutative. All pairs cancel, single remains.",
        patternTips: "XOR for 'find odd one out'. Generalizes to 'find elements appearing odd times'."
    },

    "count-bits": {
        hints: [
            "dp[i] = dp[i >> 1] + (i & 1).",
            "Bit count of n = bit count of n/2 + last bit.",
            "Or use dp[i] = dp[i & (i-1)] + 1."
        ],
        solutions: {
            python: `def countBits(n):
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp`,
            cpp: `vector<int> countBits(int n) {
    vector<int> dp(n + 1);
    for (int i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
}`,
            typescript: `function countBits(n: number): number[] {
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
}`
        },
        explanation: "DP on bit representation. i >> 1 removes last bit, i & 1 is last bit value.",
        patternTips: "Bit DP: often relate n to n/2 or n & (n-1) (clear lowest set bit)."
    },

    "flip-bits": {
        hints: [
            "XOR with all 1s flips all bits.",
            "How many bits does n have? Find that first.",
            "Create mask of all 1s of same length."
        ],
        solutions: {
            python: `def findComplement(num):
    mask = num
    mask |= mask >> 1
    mask |= mask >> 2
    mask |= mask >> 4
    mask |= mask >> 8
    mask |= mask >> 16
    return num ^ mask`,
            cpp: `int findComplement(int num) {
    unsigned mask = ~0;
    while (mask & num) mask <<= 1;
    return ~mask & ~num;
}`,
            typescript: `function findComplement(num: number): number {
    let mask = 1;
    while (mask < num) mask = (mask << 1) | 1;
    return num ^ mask;
}`
        },
        explanation: "Find a mask of all 1s the same length as num. XOR num with mask to flip all bits.",
        patternTips: "To flip bits: XOR with mask. Building the right mask is the key step."
    },

    "sum-bits": {
        hints: [
            "a + b = (a XOR b) + (a AND b) << 1.",
            "XOR gives sum without carry, AND << 1 gives carry.",
            "Repeat until no carry."
        ],
        solutions: {
            python: `def getSum(a, b):
    mask = 0xFFFFFFFF
    while b & mask:
        carry = (a & b) << 1
        a = a ^ b
        b = carry
    return a if b == 0 else a & mask`,
            cpp: `int getSum(int a, int b) {
    while (b) {
        int carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}`,
            typescript: `function getSum(a: number, b: number): number {
    while (b) {
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}`
        },
        explanation: "Half adder simulation. XOR is sum bit, AND is carry bit. Shift carry and repeat.",
        patternTips: "Bit-level arithmetic: understand how carry propagates. Same principle for multiplication."
    },

    "bit-reverse": {
        hints: [
            "Take bits from right, build result from left.",
            "32 iterations, or clever divide and conquer.",
            "result = (result << 1) | (n & 1), n >>= 1."
        ],
        solutions: {
            python: `def reverseBits(n):
    result = 0
    for _ in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result`,
            cpp: `uint32_t reverseBits(uint32_t n) {
    uint32_t result = 0;
    for (int i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result;
}`,
            typescript: `function reverseBits(n: number): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1;
    }
    return result >>> 0;
}`
        },
        explanation: "Extract rightmost bit of n, add to left of result. Shift n right, result left. 32 times.",
        patternTips: "Bit reversal: extract LSB, append to result. Use >>> for unsigned in JS."
    },

    "miss-val": {
        hints: [
            "XOR all numbers with all indices.",
            "Same numbers cancel, missing one remains.",
            "Or use sum formula: n*(n+1)/2 - sum(nums)."
        ],
        solutions: {
            python: `def missingNumber(nums):
    n = len(nums)
    expected = n * (n + 1) // 2
    return expected - sum(nums)`,
            cpp: `int missingNumber(vector<int>& nums) {
    int n = nums.size();
    int expected = n * (n + 1) / 2;
    return expected - accumulate(nums.begin(), nums.end(), 0);
}`,
            typescript: `function missingNumber(nums: number[]): number {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    return expected - nums.reduce((a, b) => a + b, 0);
}`
        },
        explanation: "Sum formula for 0..n minus actual sum = missing. Or XOR approach works too.",
        patternTips: "Missing element: math (sum) or XOR. Both O(n) time, O(1) space."
    },

    // ============================================
    // MISSING SLUGS FROM SEED.TS
    // ============================================

    "pattern-hash-set": {
        hints: [
            "This is a theory lesson introducing hash sets.",
            "Key insight: O(1) lookups vs O(n) linear search.",
            "Trade-off is O(n) extra space."
        ],
        solutions: {
            python: `# Hash set usage pattern
seen = set()
for num in nums:
    if num in seen:  # O(1) lookup!
        return True
    seen.add(num)
return False`,
            cpp: `// Hash set pattern
unordered_set<int> seen;
for (int num : nums) {
    if (seen.count(num)) return true;
    seen.insert(num);
}
return false;`,
            typescript: `// Hash set pattern
const seen = new Set<number>();
for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
}
return false;`
        },
        explanation: "Hash sets provide O(1) average lookup by trading space. When 'have I seen this?' is the question, use a set.",
        patternTips: "Pattern recognition: duplicate detection, membership testing, frequency counting → hash set/map."
    },

    "multiply-rest": {
        hints: [
            "Can't use division? Build prefix and suffix products.",
            "result[i] = product of all elements except nums[i].",
            "Two passes: left products, then right products."
        ],
        solutions: {
            python: `def productExceptSelf(nums):
    n = len(nums)
    result = [1] * n
    left = 1
    for i in range(n):
        result[i] = left
        left *= nums[i]
    right = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right
        right *= nums[i]
    return result`,
            cpp: `vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, 1);
    int left = 1;
    for (int i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }
    int right = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    return result;
}`,
            typescript: `function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);
    let left = 1;
    for (let i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    return result;
}`
        },
        explanation: "Prefix × suffix pattern. First pass stores left products, second multiplies by right products. O(n) time, O(1) extra space.",
        patternTips: "When you can't use division, think prefix/suffix. This pattern appears often with products and sums."
    },

    "pair-hunt-ii": {
        hints: [
            "Array is sorted! Use two pointers.",
            "Left pointer at start, right at end.",
            "Sum too small? Move left. Too big? Move right."
        ],
        solutions: {
            python: `def twoSum(numbers, target):
    left, right = 0, len(numbers) - 1
    while left < right:
        total = numbers[left] + numbers[right]
        if total == target:
            return [left + 1, right + 1]
        elif total < target:
            left += 1
        else:
            right -= 1`,
            cpp: `vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0, right = numbers.size() - 1;
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) return {left + 1, right + 1};
        else if (sum < target) left++;
        else right--;
    }
    return {};
}`,
            typescript: `function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        else if (sum < target) left++;
        else right--;
    }
    return [];
}`
        },
        explanation: "Sorted array enables two-pointer approach. O(n) time, O(1) space. Much better than hash map for sorted input.",
        patternTips: "Sorted + pair → two pointers. Unsorted + pair → hash map. Always check if input is sorted!"
    },

    "best-time-to-buy-sell": {
        hints: [
            "Track minimum price seen so far.",
            "At each day, calculate potential profit if selling today.",
            "Update max profit seen."
        ],
        solutions: {
            python: `def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`,
            cpp: `int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX, maxProfit = 0;
    for (int price : prices) {
        minPrice = min(minPrice, price);
        maxProfit = max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
            typescript: `function maxProfit(prices: number[]): number {
    let minPrice = Infinity, maxProfit = 0;
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`
        },
        explanation: "Track running minimum. At each point, profit = currentPrice - minSoFar. Track global max. O(n) time, O(1) space.",
        patternTips: "Running min/max tracking. This is a foundational pattern for many optimization problems."
    },

    "longest-repeating-char-replacement": {
        hints: [
            "Window is valid if: length - maxFreq <= k.",
            "Track frequency of each character in window.",
            "Expand right, shrink left when invalid."
        ],
        solutions: {
            python: `def characterReplacement(s, k):
    count = {}
    left = max_freq = result = 0
    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_freq = max(max_freq, count[s[right]])
        while (right - left + 1) - max_freq > k:
            count[s[left]] -= 1
            left += 1
        result = max(result, right - left + 1)
    return result`,
            cpp: `int characterReplacement(string s, int k) {
    vector<int> count(26, 0);
    int left = 0, maxFreq = 0, result = 0;
    for (int right = 0; right < s.size(); right++) {
        count[s[right] - 'A']++;
        maxFreq = max(maxFreq, count[s[right] - 'A']);
        while ((right - left + 1) - maxFreq > k) {
            count[s[left++] - 'A']--;
        }
        result = max(result, right - left + 1);
    }
    return result;
}`,
            typescript: `function characterReplacement(s: string, k: number): number {
    const count = new Map<string, number>();
    let left = 0, maxFreq = 0, result = 0;
    for (let right = 0; right < s.length; right++) {
        count.set(s[right], (count.get(s[right]) || 0) + 1);
        maxFreq = Math.max(maxFreq, count.get(s[right])!);
        while ((right - left + 1) - maxFreq > k) {
            count.set(s[left], count.get(s[left])! - 1);
            left++;
        }
        result = Math.max(result, right - left + 1);
    }
    return result;
}`
        },
        explanation: "Sliding window with max freq tracking. Window valid if replacements needed <= k. Key insight: don't need to decrease maxFreq.",
        patternTips: "Sliding window + frequency. The trick is the validity condition: windowLen - maxFreq <= allowed replacements."
    },

    "hidden-pattern": {
        hints: [
            "Check if p is a permutation of some substring of s.",
            "Sliding window of size len(p).",
            "Match character frequencies."
        ],
        solutions: {
            python: `def checkInclusion(s1, s2):
    if len(s1) > len(s2):
        return False
    count1 = {}
    count2 = {}
    for c in s1:
        count1[c] = count1.get(c, 0) + 1
    for i, c in enumerate(s2):
        count2[c] = count2.get(c, 0) + 1
        if i >= len(s1):
            left = s2[i - len(s1)]
            count2[left] -= 1
            if count2[left] == 0:
                del count2[left]
        if count1 == count2:
            return True
    return False`,
            cpp: `bool checkInclusion(string s1, string s2) {
    if (s1.size() > s2.size()) return false;
    vector<int> c1(26), c2(26);
    for (char c : s1) c1[c - 'a']++;
    for (int i = 0; i < s2.size(); i++) {
        c2[s2[i] - 'a']++;
        if (i >= s1.size()) c2[s2[i - s1.size()] - 'a']--;
        if (c1 == c2) return true;
    }
    return false;
}`,
            typescript: `function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;
    const c1 = new Array(26).fill(0);
    const c2 = new Array(26).fill(0);
    for (const c of s1) c1[c.charCodeAt(0) - 97]++;
    for (let i = 0; i < s2.length; i++) {
        c2[s2.charCodeAt(i) - 97]++;
        if (i >= s1.length) c2[s2.charCodeAt(i - s1.length) - 97]--;
        if (c1.every((v, j) => v === c2[j])) return true;
    }
    return false;
}`
        },
        explanation: "Fixed-size sliding window matching frequency arrays. Anagram detection in substring.",
        patternTips: "Permutation in string = anagram = same character frequencies. Fixed window + freq comparison."
    },

    "smallest-cover": {
        hints: [
            "Sliding window: expand to include all chars, shrink to minimize.",
            "Track required character counts.",
            "Have/need counters for valid window check."
        ],
        solutions: {
            python: `def minWindow(s, t):
    if not t: return ""
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    have, required = 0, len(need)
    left = 0
    result = (float('inf'), 0, 0)
    window = {}
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]:
            have += 1
        while have == required:
            if (right - left + 1) < result[0]:
                result = (right - left + 1, left, right)
            window[s[left]] -= 1
            if s[left] in need and window[s[left]] < need[s[left]]:
                have -= 1
            left += 1
    return "" if result[0] == float('inf') else s[result[1]:result[2]+1]`,
            cpp: `// See Python for full implementation`,
            typescript: `// See Python for full implementation`
        },
        explanation: "Two-pointer with have/need tracking. Expand until valid, shrink while valid, track minimum.",
        patternTips: "Classic variable sliding window. Have/need pattern for multi-character requirements."
    },

    // ============================================
    // PREFIX NETWORKS (Trie)
    // ============================================

    "prefix-tree": {
        hints: [
            "Each node stores children (26 for lowercase letters).",
            "Mark end of word with a flag.",
            "Traverse character by character."
        ],
        solutions: {
            python: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.is_end = True
    
    def search(self, word):
        node = self._traverse(word)
        return node is not None and node.is_end
    
    def startsWith(self, prefix):
        return self._traverse(prefix) is not None
    
    def _traverse(self, s):
        node = self.root
        for c in s:
            if c not in node.children:
                return None
            node = node.children[c]
        return node`,
            cpp: `class Trie {
    struct TrieNode {
        TrieNode* children[26] = {};
        bool isEnd = false;
    };
    TrieNode* root;
public:
    Trie() : root(new TrieNode()) {}
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (!node->children[c-'a']) node->children[c-'a'] = new TrieNode();
            node = node->children[c-'a'];
        }
        node->isEnd = true;
    }
    bool search(string word) {
        TrieNode* node = traverse(word);
        return node && node->isEnd;
    }
    bool startsWith(string prefix) {
        return traverse(prefix) != nullptr;
    }
    TrieNode* traverse(string s) {
        TrieNode* node = root;
        for (char c : s) {
            if (!node->children[c-'a']) return nullptr;
            node = node->children[c-'a'];
        }
        return node;
    }
};`,
            typescript: `class Trie {
    private root = new Map<string, any>();
    
    insert(word: string): void {
        let node = this.root;
        for (const c of word) {
            if (!node.has(c)) node.set(c, new Map());
            node = node.get(c);
        }
        node.set('$', true);
    }
    
    search(word: string): boolean {
        const node = this.traverse(word);
        return node !== null && node.get('$') === true;
    }
    
    startsWith(prefix: string): boolean {
        return this.traverse(prefix) !== null;
    }
    
    private traverse(s: string): Map<string, any> | null {
        let node = this.root;
        for (const c of s) {
            if (!node.has(c)) return null;
            node = node.get(c);
        }
        return node;
    }
}`
        },
        explanation: "Trie = tree where each path from root spells a word. Insert/search/prefix all O(L) where L = word length.",
        patternTips: "Use Trie for: prefix matching, autocomplete, word search in grid, word validation."
    },

    "add-search-words": {
        hints: [
            "Trie with wildcard support ('.').",
            "When '.', try all children recursively.",
            "Mark word endings."
        ],
        solutions: {
            python: `class WordDictionary:
    def __init__(self):
        self.root = {}
    
    def addWord(self, word):
        node = self.root
        for c in word:
            if c not in node:
                node[c] = {}
            node = node[c]
        node['$'] = True
    
    def search(self, word):
        def dfs(idx, node):
            if idx == len(word):
                return '$' in node
            c = word[idx]
            if c == '.':
                return any(dfs(idx + 1, node[k]) for k in node if k != '$')
            if c not in node:
                return False
            return dfs(idx + 1, node[c])
        return dfs(0, self.root)`,
            cpp: `// Similar to Python with DFS for wildcards`,
            typescript: `// Similar to Python with DFS for wildcards`
        },
        explanation: "Trie + DFS for wildcards. On '.', branch to all existing children. O(26^m) worst case for m wildcards.",
        patternTips: "Trie + backtracking for wildcards. Same idea applies to regex-like matching."
    },

    "word-search-grid": {
        hints: [
            "Build trie from words, then DFS from each cell.",
            "Prune branches when prefix not in trie.",
            "Remove words from trie when found to avoid duplicates."
        ],
        solutions: {
            python: `def findWords(board, words):
    trie = {}
    for word in words:
        node = trie
        for c in word:
            node = node.setdefault(c, {})
        node['$'] = word
    
    result = []
    rows, cols = len(board), len(board[0])
    
    def dfs(r, c, node):
        c = board[r][c]
        if c not in node:
            return
        next_node = node[c]
        if '$' in next_node:
            result.append(next_node['$'])
            del next_node['$']
        board[r][c] = '#'
        for dr, dc in [(0,1), (0,-1), (1,0), (-1,0)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] in next_node:
                dfs(nr, nc, next_node)
        board[r][c] = c
    
    for r in range(rows):
        for c in range(cols):
            dfs(r, c, trie)
    return result`,
            cpp: `// Complex - see Python implementation`,
            typescript: `// Complex - see Python implementation`
        },
        explanation: "Trie optimization for word search. Prune invalid prefixes early. Remove found words to avoid duplicates.",
        patternTips: "Grid + multiple words = Trie. Much faster than searching each word separately."
    },

    // ============================================
    // NUMBER THEORY (Math)
    // ============================================

    "rotate-array": {
        hints: [
            "Rotate by k means last k elements move to front.",
            "Reverse entire array, then reverse first k, then reverse rest.",
            "Or use extra space: copy to temp positions."
        ],
        solutions: {
            python: `def rotate(nums, k):
    n = len(nums)
    k %= n
    def reverse(l, r):
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1
            r -= 1
    reverse(0, n - 1)
    reverse(0, k - 1)
    reverse(k, n - 1)`,
            cpp: `void rotate(vector<int>& nums, int k) {
    int n = nums.size();
    k %= n;
    reverse(nums.begin(), nums.end());
    reverse(nums.begin(), nums.begin() + k);
    reverse(nums.begin() + k, nums.end());
}`,
            typescript: `function rotate(nums: number[], k: number): void {
    k %= nums.length;
    const reverse = (l: number, r: number) => {
        while (l < r) [nums[l++], nums[r--]] = [nums[r], nums[l]];
    };
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
}`
        },
        explanation: "Three reversals: all, first k, rest. Elegant O(n) time, O(1) space solution.",
        patternTips: "Rotation = reversal trick. Works for strings too. Think about what k > n means."
    },

    "pow-fast": {
        hints: [
            "Binary exponentiation: x^n = (x^(n/2))^2.",
            "If n is odd: x^n = x * x^(n-1).",
            "Handle negative exponents."
        ],
        solutions: {
            python: `def myPow(x, n):
    if n < 0:
        x = 1 / x
        n = -n
    result = 1
    while n:
        if n & 1:
            result *= x
        x *= x
        n >>= 1
    return result`,
            cpp: `double myPow(double x, int n) {
    long long exp = n;
    if (exp < 0) { x = 1 / x; exp = -exp; }
    double result = 1;
    while (exp) {
        if (exp & 1) result *= x;
        x *= x;
        exp >>= 1;
    }
    return result;
}`,
            typescript: `function myPow(x: number, n: number): number {
    if (n < 0) { x = 1 / x; n = -n; }
    let result = 1;
    while (n) {
        if (n & 1) result *= x;
        x *= x;
        n = Math.floor(n / 2);
    }
    return result;
}`
        },
        explanation: "Binary exponentiation: O(log n) multiplications. Double x, halve n, multiply result when bit is 1.",
        patternTips: "Standard fast power. Know this for modular exponentiation too (add mod at each step)."
    },

    "sqrt-approx": {
        hints: [
            "Binary search: find largest m where m*m <= x.",
            "Or Newton's method: m = (m + x/m) / 2.",
            "Watch for overflow in m*m."
        ],
        solutions: {
            python: `def mySqrt(x):
    if x < 2:
        return x
    left, right = 1, x // 2
    while left <= right:
        mid = (left + right) // 2
        if mid * mid == x:
            return mid
        elif mid * mid < x:
            left = mid + 1
        else:
            right = mid - 1
    return right`,
            cpp: `int mySqrt(int x) {
    if (x < 2) return x;
    long left = 1, right = x / 2;
    while (left <= right) {
        long mid = (left + right) / 2;
        if (mid * mid == x) return mid;
        else if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}`,
            typescript: `function mySqrt(x: number): number {
    if (x < 2) return x;
    let left = 1, right = Math.floor(x / 2);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}`
        },
        explanation: "Binary search for integer sqrt. Search space [1, x/2]. Return right (floor of sqrt).",
        patternTips: "Binary search on answer. Classic pattern for finding values satisfying monotonic condition."
    },

    "happy-detect": {
        hints: [
            "Sum of squares of digits, repeat until 1 or cycle.",
            "Use Floyd's cycle detection (slow/fast pointers).",
            "Or use a set to detect cycles."
        ],
        solutions: {
            python: `def isHappy(n):
    def next_num(x):
        total = 0
        while x:
            x, d = divmod(x, 10)
            total += d * d
        return total
    
    slow = fast = n
    while True:
        slow = next_num(slow)
        fast = next_num(next_num(fast))
        if fast == 1:
            return True
        if slow == fast:
            return False`,
            cpp: `bool isHappy(int n) {
    auto next = [](int x) {
        int sum = 0;
        while (x) { sum += (x % 10) * (x % 10); x /= 10; }
        return sum;
    };
    int slow = n, fast = n;
    do {
        slow = next(slow);
        fast = next(next(fast));
    } while (slow != fast);
    return slow == 1;
}`,
            typescript: `function isHappy(n: number): boolean {
    const next = (x: number) => {
        let sum = 0;
        while (x) { sum += (x % 10) ** 2; x = Math.floor(x / 10); }
        return sum;
    };
    let slow = n, fast = n;
    do {
        slow = next(slow);
        fast = next(next(fast));
    } while (slow !== fast);
    return slow === 1;
}`
        },
        explanation: "Floyd's cycle detection on the sequence. If reaches 1, happy. If cycle not including 1, not happy.",
        patternTips: "Cycle detection with slow/fast pointers works beyond linked lists—any sequence with next function."
    },

    "plus-one": {
        hints: [
            "Add 1 to last digit, handle carry.",
            "If all 9s, result is 1 followed by 0s.",
            "Iterate from right, stop when no carry."
        ],
        solutions: {
            python: `def plusOne(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits`,
            cpp: `vector<int> plusOne(vector<int>& digits) {
    for (int i = digits.size() - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.insert(digits.begin(), 1);
    return digits;
}`,
            typescript: `function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits];
}`
        },
        explanation: "Grade school addition. If digit < 9, increment and done. If 9 → 0 and carry. All 9s → prepend 1.",
        patternTips: "Simple carry handling. Early return when no carry propagates."
    },

    "gcd-calc": {
        hints: [
            "Euclidean algorithm: gcd(a, b) = gcd(b, a % b).",
            "Base case: gcd(a, 0) = a.",
            "LCM = a * b / gcd(a, b)."
        ],
        solutions: {
            python: `def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return a * b // gcd(a, b)`,
            cpp: `int gcd(int a, int b) {
    while (b) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int lcm(int a, int b) {
    return a / gcd(a, b) * b;  // Avoid overflow
}`,
            typescript: `function gcd(a: number, b: number): number {
    while (b) [a, b] = [b, a % b];
    return a;
}

function lcm(a: number, b: number): number {
    return (a / gcd(a, b)) * b;
}`
        },
        explanation: "Euclid's algorithm: O(log min(a,b)). For LCM, compute a/gcd first to avoid overflow.",
        patternTips: "GCD foundation for many number theory problems. Know both iterative and recursive forms."
    },

    // ============================================
    // ADDITIONAL MISSING PROBLEMS
    // ============================================

    "step-climb": {
        hints: [
            "This is Fibonacci in disguise.",
            "To reach step n, you came from n-1 or n-2.",
            "dp[n] = dp[n-1] + dp[n-2]"
        ],
        solutions: {
            python: `def climbStairs(n):
    if n <= 2: return n
    prev, curr = 1, 2
    for _ in range(3, n + 1):
        prev, curr = curr, prev + curr
    return curr`,
            typescript: `function climbStairs(n: number): number {
    if (n <= 2) return n;
    let [prev, curr] = [1, 2];
    for (let i = 3; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return curr;
}`,
            cpp: `int climbStairs(int n) {
    if (n <= 2) return n;
    int prev = 1, curr = 2;
    for (int i = 3; i <= n; i++) {
        int temp = curr;
        curr = prev + curr;
        prev = temp;
    }
    return curr;
}`
        },
        explanation: "Classic Fibonacci DP - ways to reach step n = ways to reach n-1 + ways to reach n-2.",
        patternTips: "Recognize Fibonacci patterns in counting problems. Always check for space optimization."
    },

    "cheap-stairs": {
        hints: [
            "Similar to climbing stairs but track minimum cost.",
            "dp[i] = min cost to reach step i.",
            "You can start from step 0 or 1."
        ],
        solutions: {
            python: `def minCostClimbingStairs(cost):
    prev2, prev1 = 0, 0
    for i in range(2, len(cost) + 1):
        curr = min(prev1 + cost[i-1], prev2 + cost[i-2])
        prev2, prev1 = prev1, curr
    return prev1`,
            typescript: `function minCostClimbingStairs(cost: number[]): number {
    let [prev2, prev1] = [0, 0];
    for (let i = 2; i <= cost.length; i++) {
        const curr = Math.min(prev1 + cost[i-1], prev2 + cost[i-2]);
        [prev2, prev1] = [prev1, curr];
    }
    return prev1;
}`
        },
        explanation: "DP with space optimization. At each step, take minimum of coming from 1 or 2 steps back.",
        patternTips: "Min cost path problems often use this pattern. Track previous states only."
    },

    "home-heist-2": {
        hints: [
            "Houses are in a circle - first and last are adjacent.",
            "Can't rob both first AND last house.",
            "Run House Robber I twice: exclude first, exclude last."
        ],
        solutions: {
            python: `def rob(nums):
    if len(nums) == 1: return nums[0]
    def rob_linear(arr):
        prev2, prev1 = 0, 0
        for num in arr:
            prev2, prev1 = prev1, max(prev1, prev2 + num)
        return prev1
    return max(rob_linear(nums[1:]), rob_linear(nums[:-1]))`,
            typescript: `function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    const robLinear = (arr: number[]) => {
        let [prev2, prev1] = [0, 0];
        for (const num of arr) {
            [prev2, prev1] = [prev1, Math.max(prev1, prev2 + num)];
        }
        return prev1;
    };
    return Math.max(robLinear(nums.slice(1)), robLinear(nums.slice(0, -1)));
}`
        },
        explanation: "Circular constraint means first and last can't both be robbed. Solve two linear subproblems.",
        patternTips: "Handle circular arrays by breaking into linear subproblems excluding one boundary element."
    },

    "long-palindrome": {
        hints: [
            "Expand around center for each position.",
            "There are 2n-1 centers (n single + n-1 gaps).",
            "Track longest found so far."
        ],
        solutions: {
            python: `def longestPalindrome(s):
    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1; r += 1
        return s[l+1:r]
    
    res = ""
    for i in range(len(s)):
        odd = expand(i, i)
        even = expand(i, i+1)
        res = max(res, odd, even, key=len)
    return res`,
            typescript: `function longestPalindrome(s: string): string {
    const expand = (l: number, r: number) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
        return s.slice(l + 1, r);
    };
    let res = "";
    for (let i = 0; i < s.length; i++) {
        const odd = expand(i, i);
        const even = expand(i, i + 1);
        if (odd.length > res.length) res = odd;
        if (even.length > res.length) res = even;
    }
    return res;
}`
        },
        explanation: "Expand around center is O(n²) time, O(1) space. Try each center, expand while palindrome.",
        patternTips: "Center expansion is optimal for palindrome substring problems. Consider both odd and even lengths."
    },

    "count-palindrome": {
        hints: [
            "Same as longest palindrome, but count instead.",
            "Each expansion step is one palindrome.",
            "Count expansions for each center."
        ],
        solutions: {
            python: `def countSubstrings(s):
    count = 0
    for i in range(len(s)):
        for l, r in [(i, i), (i, i+1)]:
            while l >= 0 and r < len(s) and s[l] == s[r]:
                count += 1
                l -= 1; r += 1
    return count`,
            typescript: `function countSubstrings(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (const [l0, r0] of [[i, i], [i, i + 1]]) {
            let [l, r] = [l0, r0];
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                count++; l--; r++;
            }
        }
    }
    return count;
}`
        },
        explanation: "Same center expansion, increment count for each valid expansion instead of tracking max.",
        patternTips: "Counting version of palindrome problems. Each expansion discovers one new palindrome."
    },

    "decode-path": {
        hints: [
            "dp[i] = number of ways to decode s[0..i-1].",
            "Check if single digit (1-9) is valid.",
            "Check if two digits (10-26) are valid."
        ],
        solutions: {
            python: `def numDecodings(s):
    if s[0] == '0': return 0
    prev2, prev1 = 1, 1
    for i in range(1, len(s)):
        curr = 0
        if s[i] != '0': curr += prev1
        if 10 <= int(s[i-1:i+1]) <= 26: curr += prev2
        prev2, prev1 = prev1, curr
    return prev1`,
            typescript: `function numDecodings(s: string): number {
    if (s[0] === '0') return 0;
    let [prev2, prev1] = [1, 1];
    for (let i = 1; i < s.length; i++) {
        let curr = 0;
        if (s[i] !== '0') curr += prev1;
        const twoDigit = parseInt(s.slice(i - 1, i + 1));
        if (twoDigit >= 10 && twoDigit <= 26) curr += prev2;
        [prev2, prev1] = [prev1, curr];
    }
    return prev1;
}`
        },
        explanation: "DP with two choices: decode 1 digit or 2 digits. Watch for leading zeros!",
        patternTips: "String decoding = partitioning problem. Handle edge cases with '0' carefully."
    },

    "coin-change": {
        hints: [
            "dp[i] = minimum coins to make amount i.",
            "For each amount, try each coin.",
            "dp[i] = min(dp[i], dp[i-coin] + 1)"
        ],
        solutions: {
            python: `def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
            typescript: `function coinChange(coins: number[], amount: number): number {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}`
        },
        explanation: "Unbounded knapsack variant. Each coin can be used unlimited times.",
        patternTips: "Classic DP. For combinations (order doesn't matter), outer loop = coins. For permutations, outer loop = amounts."
    },

    "max-multiply": {
        hints: [
            "Negative × negative = positive!",
            "Track BOTH max and min at each position.",
            "Current min can become max after multiplying negative."
        ],
        solutions: {
            python: `def maxProduct(nums):
    max_prod = min_prod = result = nums[0]
    for num in nums[1:]:
        candidates = (num, max_prod * num, min_prod * num)
        max_prod, min_prod = max(candidates), min(candidates)
        result = max(result, max_prod)
    return result`,
            typescript: `function maxProduct(nums: number[]): number {
    let maxP = nums[0], minP = nums[0], result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const candidates = [nums[i], maxP * nums[i], minP * nums[i]];
        maxP = Math.max(...candidates);
        minP = Math.min(...candidates);
        result = Math.max(result, maxP);
    }
    return result;
}`
        },
        explanation: "Track both max and min because negative can flip sign. Three candidates at each step.",
        patternTips: "When negatives can flip, track both extremes. This pattern appears in product problems."
    },

    "long-increase": {
        hints: [
            "O(n²): dp[i] = LIS ending at i.",
            "O(n log n): maintain smallest tail for each length.",
            "Binary search to find insertion point."
        ],
        solutions: {
            python: `from bisect import bisect_left
def lengthOfLIS(nums):
    tails = []
    for num in nums:
        idx = bisect_left(tails, num)
        if idx == len(tails): tails.append(num)
        else: tails[idx] = num
    return len(tails)`,
            typescript: `function lengthOfLIS(nums: number[]): number {
    const tails: number[] = [];
    for (const num of nums) {
        let lo = 0, hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] < num) lo = mid + 1;
            else hi = mid;
        }
        if (lo === tails.length) tails.push(num);
        else tails[lo] = num;
    }
    return tails.length;
}`
        },
        explanation: "Patience sorting: maintain smallest ending element for each subsequence length. O(n log n).",
        patternTips: "LIS is foundational. Know both O(n²) DP and O(n log n) binary search approaches."
    },

    "equal-split": {
        hints: [
            "Can we find subset summing to total/2?",
            "This is 0/1 knapsack.",
            "dp[sum] = can we achieve this sum?"
        ],
        solutions: {
            python: `def canPartition(nums):
    total = sum(nums)
    if total % 2: return False
    target = total // 2
    dp = {0}
    for num in nums:
        dp |= {x + num for x in dp if x + num <= target}
    return target in dp`,
            typescript: `function canPartition(nums: number[]): boolean {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % 2) return false;
    const target = total / 2;
    const dp = new Set([0]);
    for (const num of nums) {
        for (const x of [...dp]) {
            if (x + num <= target) dp.add(x + num);
        }
    }
    return dp.has(target);
}`
        },
        explanation: "Transform to subset sum: find subset summing to total/2. Classic 0/1 knapsack.",
        patternTips: "Partition = subset sum to half. Reduce to knapsack whenever possible."
    },

    "path-count": {
        hints: [
            "dp[i][j] = ways to reach (i, j).",
            "Can only come from top or left.",
            "dp[i][j] = dp[i-1][j] + dp[i][j-1]"
        ],
        solutions: {
            python: `def uniquePaths(m, n):
    row = [1] * n
    for i in range(1, m):
        for j in range(1, n):
            row[j] += row[j-1]
    return row[-1]`,
            typescript: `function uniquePaths(m: number, n: number): number {
    const row = Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            row[j] += row[j - 1];
        }
    }
    return row[n - 1];
}`
        },
        explanation: "Space-optimized 2D DP. Only need previous row. Also has math solution: C(m+n-2, m-1).",
        patternTips: "Path counting = additive DP. Consider mathematical combinatorics for direct formula."
    },

    "common-sequence": {
        hints: [
            "Classic 2D DP problem.",
            "If chars match: dp[i][j] = dp[i-1][j-1] + 1",
            "If not: dp[i][j] = max(dp[i-1][j], dp[i][j-1])"
        ],
        solutions: {
            python: `def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]`,
            typescript: `function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length, n = text2.length;
    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i-1] === text2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}`
        },
        explanation: "Foundational 2D DP. Match extends diagonal, mismatch takes max of skipping either char.",
        patternTips: "LCS is template for string comparison problems. Learn space optimization to O(n)."
    },

    "trade-cooldown": {
        hints: [
            "State machine: hold, sold, rest.",
            "After selling, must rest 1 day before buying.",
            "Track all three states."
        ],
        solutions: {
            python: `def maxProfit(prices):
    hold, sold, rest = float('-inf'), 0, 0
    for price in prices:
        hold, sold, rest = (
            max(hold, rest - price),
            hold + price,
            max(rest, sold)
        )
    return max(sold, rest)`,
            typescript: `function maxProfit(prices: number[]): number {
    let hold = -Infinity, sold = 0, rest = 0;
    for (const price of prices) {
        [hold, sold, rest] = [
            Math.max(hold, rest - price),
            hold + price,
            Math.max(rest, sold)
        ];
    }
    return Math.max(sold, rest);
}`
        },
        explanation: "State machine DP with cooldown. Each state transitions based on action taken.",
        patternTips: "Stock with constraints = state machine. Draw transition diagram first."
    },

    "target-ways": {
        hints: [
            "Transform: P - N = target, P + N = total",
            "So P = (target + total) / 2",
            "Count subsets summing to P."
        ],
        solutions: {
            python: `def findTargetSumWays(nums, target):
    total = sum(nums)
    if (total + target) % 2 or abs(target) > total:
        return 0
    P = (total + target) // 2
    dp = [0] * (P + 1)
    dp[0] = 1
    for num in nums:
        for i in range(P, num - 1, -1):
            dp[i] += dp[i - num]
    return dp[P]`,
            typescript: `function findTargetSumWays(nums: number[], target: number): number {
    const total = nums.reduce((a, b) => a + b, 0);
    if ((total + target) % 2 || Math.abs(target) > total) return 0;
    const P = (total + target) / 2;
    const dp = Array(P + 1).fill(0);
    dp[0] = 1;
    for (const num of nums) {
        for (let i = P; i >= num; i--) dp[i] += dp[i - num];
    }
    return dp[P];
}`
        },
        explanation: "Math transformation converts to subset sum counting. 0/1 knapsack for counting.",
        patternTips: "Look for algebraic transformations to convert to known problems."
    },

    "string-weave": {
        hints: [
            "dp[i][j] = can s1[:i] and s2[:j] form s3[:i+j]?",
            "Must use s1 and s2 chars in order.",
            "Check both options at each step."
        ],
        solutions: {
            python: `def isInterleave(s1, s2, s3):
    m, n = len(s1), len(s2)
    if m + n != len(s3): return False
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for i in range(m + 1):
        for j in range(n + 1):
            if i > 0 and s1[i-1] == s3[i+j-1]: dp[i][j] |= dp[i-1][j]
            if j > 0 and s2[j-1] == s3[i+j-1]: dp[i][j] |= dp[i][j-1]
    return dp[m][n]`,
            typescript: `function isInterleave(s1: string, s2: string, s3: string): boolean {
    const m = s1.length, n = s2.length;
    if (m + n !== s3.length) return false;
    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(false));
    dp[0][0] = true;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i > 0 && s1[i-1] === s3[i+j-1]) dp[i][j] ||= dp[i-1][j];
            if (j > 0 && s2[j-1] === s3[i+j-1]) dp[i][j] ||= dp[i][j-1];
        }
    }
    return dp[m][n];
}`
        },
        explanation: "2D DP where dp[i][j] represents if we can form s3[:i+j] using s1[:i] and s2[:j].",
        patternTips: "String interleaving = path in 2D grid. Each move uses char from one string."
    },

    "matrix-climb": {
        hints: [
            "DFS + memoization from each cell.",
            "DAG - strictly increasing means no cycles.",
            "dp[r][c] = longest path starting from (r,c)."
        ],
        solutions: {
            python: `def longestIncreasingPath(matrix):
    m, n = len(matrix), len(matrix[0])
    memo = {}
    def dfs(r, c):
        if (r, c) in memo: return memo[(r, c)]
        length = 1
        for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and matrix[nr][nc] > matrix[r][c]:
                length = max(length, 1 + dfs(nr, nc))
        memo[(r, c)] = length
        return length
    return max(dfs(r, c) for r in range(m) for c in range(n))`,
            typescript: `function longestIncreasingPath(matrix: number[][]): number {
    const m = matrix.length, n = matrix[0].length;
    const memo = new Map<string, number>();
    const dfs = (r: number, c: number): number => {
        const key = \`\${r},\${c}\`;
        if (memo.has(key)) return memo.get(key)!;
        let len = 1;
        for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && matrix[nr][nc] > matrix[r][c]) {
                len = Math.max(len, 1 + dfs(nr, nc));
            }
        }
        memo.set(key, len);
        return len;
    };
    let max = 0;
    for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) max = Math.max(max, dfs(r, c));
    return max;
}`
        },
        explanation: "DFS + memoization. Strictly increasing = DAG = memoization is safe.",
        patternTips: "Matrix path problems often combine DFS with memoization. Check for cycles."
    },

    "rare-sequence": {
        hints: [
            "dp[i][j] = ways s[:i] contains t[:j] as subsequence.",
            "Match: use this char + skip this char.",
            "No match: must skip."
        ],
        solutions: {
            python: `def numDistinct(s, t):
    m, n = len(s), len(t)
    dp = [0] * (n + 1)
    dp[0] = 1
    for i in range(1, m + 1):
        for j in range(min(i, n), 0, -1):
            if s[i-1] == t[j-1]:
                dp[j] += dp[j-1]
    return dp[n]`,
            typescript: `function numDistinct(s: string, t: string): number {
    const n = t.length;
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= s.length; i++) {
        for (let j = Math.min(i, n); j > 0; j--) {
            if (s[i-1] === t[j-1]) dp[j] += dp[j-1];
        }
    }
    return dp[n];
}`
        },
        explanation: "Space-optimized DP. When chars match, add both 'use' and 'skip' options.",
        patternTips: "Subsequence counting = additive DP. Match adds paths, mismatch propagates."
    },

    "edit-steps": {
        hints: [
            "dp[i][j] = min edits for word1[:i] to word2[:j].",
            "Match: dp[i-1][j-1]",
            "Mismatch: 1 + min(insert, delete, replace)"
        ],
        solutions: {
            python: `def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i
    for j in range(n + 1): dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[m][n]`,
            typescript: `function minDistance(word1: string, word2: string): number {
    const m = word1.length, n = word2.length;
    const dp = Array.from({length: m + 1}, (_, i) => 
        Array.from({length: n + 1}, (_, j) => i === 0 ? j : j === 0 ? i : 0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i-1] === word2[j-1]) dp[i][j] = dp[i-1][j-1];
            else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
        }
    }
    return dp[m][n];
}`
        },
        explanation: "Classic edit distance. Three operations: insert (top), delete (left), replace (diagonal).",
        patternTips: "Edit distance is template for string transformation problems. Know the 3 operations."
    },

    "pop-balloons": {
        hints: [
            "Think about LAST balloon to burst, not first.",
            "Interval DP: dp[l][r] = max coins bursting l..r.",
            "When k is last, neighbors are boundaries l-1 and r+1."
        ],
        solutions: {
            python: `def maxCoins(nums):
    nums = [1] + nums + [1]
    n = len(nums)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for l in range(n - length):
            r = l + length
            for k in range(l + 1, r):
                dp[l][r] = max(dp[l][r], 
                    dp[l][k] + nums[l]*nums[k]*nums[r] + dp[k][r])
    return dp[0][n-1]`,
            typescript: `function maxCoins(nums: number[]): number {
    nums = [1, ...nums, 1];
    const n = nums.length;
    const dp = Array.from({length: n}, () => Array(n).fill(0));
    for (let len = 2; len < n; len++) {
        for (let l = 0; l < n - len; l++) {
            const r = l + len;
            for (let k = l + 1; k < r; k++) {
                dp[l][r] = Math.max(dp[l][r], 
                    dp[l][k] + nums[l] * nums[k] * nums[r] + dp[k][r]);
            }
        }
    }
    return dp[0][n - 1];
}`
        },
        explanation: "Interval DP. Key insight: think about LAST balloon burst. Its neighbors become boundaries.",
        patternTips: "Interval DP often requires thinking backwards. 'What's last?' instead of 'What's first?'"
    },

    "pattern-match": {
        hints: [
            "'.' matches any single char.",
            "'*' matches zero or more of preceding element.",
            "dp[i][j] = s[:i] matches p[:j]"
        ],
        solutions: {
            python: `def isMatch(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(2, n + 1):
        if p[j-1] == '*': dp[0][j] = dp[0][j-2]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j-1] == '*':
                dp[i][j] = dp[i][j-2]  # zero of preceding
                if p[j-2] == '.' or p[j-2] == s[i-1]:
                    dp[i][j] |= dp[i-1][j]  # one or more
            elif p[j-1] == '.' or p[j-1] == s[i-1]:
                dp[i][j] = dp[i-1][j-1]
    return dp[m][n]`,
            typescript: `function isMatch(s: string, p: string): boolean {
    const m = s.length, n = p.length;
    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(false));
    dp[0][0] = true;
    for (let j = 2; j <= n; j++) if (p[j-1] === '*') dp[0][j] = dp[0][j-2];
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j-1] === '*') {
                dp[i][j] = dp[i][j-2];
                if (p[j-2] === '.' || p[j-2] === s[i-1]) dp[i][j] ||= dp[i-1][j];
            } else if (p[j-1] === '.' || p[j-1] === s[i-1]) {
                dp[i][j] = dp[i-1][j-1];
            }
        }
    }
    return dp[m][n];
}`
        },
        explanation: "Hardest string DP. '*' has two choices: zero matches or 1+ matches (stay in same column).",
        patternTips: "Pattern matching = careful case analysis. Handle '*' by considering zero/one+ cases."
    },

    "max-segment": {
        hints: [
            "Kadane's algorithm.",
            "At each position: extend or start new.",
            "current = max(nums[i], current + nums[i])"
        ],
        solutions: {
            python: `def maxSubArray(nums):
    current = result = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)
        result = max(result, current)
    return result`,
            typescript: `function maxSubArray(nums: number[]): number {
    let current = nums[0], result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        result = Math.max(result, current);
    }
    return result;
}`
        },
        explanation: "Kadane's greedy: if prefix sum is negative, start fresh. O(n) time, O(1) space.",
        patternTips: "Kadane's is fundamental. Know it cold. Works because negative prefix never helps."
    },

    "jump-reach": {
        hints: [
            "Track farthest reachable position.",
            "If current position > farthest, can't proceed.",
            "Greedy: always update farthest."
        ],
        solutions: {
            python: `def canJump(nums):
    farthest = 0
    for i, jump in enumerate(nums):
        if i > farthest: return False
        farthest = max(farthest, i + jump)
    return True`,
            typescript: `function canJump(nums: number[]): boolean {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;
        farthest = Math.max(farthest, i + nums[i]);
    }
    return true;
}`
        },
        explanation: "Greedy: track farthest reachable. If we can't reach current position, return false.",
        patternTips: "Reachability = track farthest. Simple greedy often beats DP for these problems."
    },

    "jump-count": {
        hints: [
            "Think of it as BFS levels.",
            "Each jump = one level.",
            "Track current level end and next level farthest."
        ],
        solutions: {
            python: `def jump(nums):
    jumps = current_end = farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == current_end:
            jumps += 1
            current_end = farthest
    return jumps`,
            typescript: `function jump(nums: number[]): number {
    let jumps = 0, currentEnd = 0, farthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    return jumps;
}`
        },
        explanation: "BFS-style greedy. Each 'level' is one jump. Count levels to reach end.",
        patternTips: "Minimum jumps = BFS. Track level boundaries for implicit graph traversal."
    },

    "gas-route": {
        hints: [
            "If total gas >= total cost, solution exists.",
            "Reset start whenever tank goes negative.",
            "The reset point + 1 is valid start."
        ],
        solutions: {
            python: `def canCompleteCircuit(gas, cost):
    if sum(gas) < sum(cost): return -1
    start = tank = 0
    for i in range(len(gas)):
        tank += gas[i] - cost[i]
        if tank < 0:
            start = i + 1
            tank = 0
    return start`,
            typescript: `function canCompleteCircuit(gas: number[], cost: number[]): number {
    const totalGas = gas.reduce((a, b) => a + b, 0);
    const totalCost = cost.reduce((a, b) => a + b, 0);
    if (totalGas < totalCost) return -1;
    let start = 0, tank = 0;
    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        if (tank < 0) { start = i + 1; tank = 0; }
    }
    return start;
}`
        },
        explanation: "Two insights: 1) Total gas >= cost means solution exists. 2) If tank < 0 at i, start after i.",
        patternTips: "Circular problems: first check feasibility, then find start point greedily."
    },

    "card-groups": {
        hints: [
            "Sort and greedily form groups from smallest.",
            "Use frequency map.",
            "For each card, try to form group of W consecutive."
        ],
        solutions: {
            python: `from collections import Counter
def isNStraightHand(hand, W):
    if len(hand) % W: return False
    count = Counter(hand)
    for card in sorted(count):
        while count[card] > 0:
            for i in range(W):
                if count[card + i] <= 0: return False
                count[card + i] -= 1
    return True`,
            typescript: `function isNStraightHand(hand: number[], W: number): boolean {
    if (hand.length % W) return false;
    const count = new Map<number, number>();
    for (const c of hand) count.set(c, (count.get(c) || 0) + 1);
    const sorted = [...new Set(hand)].sort((a, b) => a - b);
    for (const card of sorted) {
        while ((count.get(card) || 0) > 0) {
            for (let i = 0; i < W; i++) {
                if ((count.get(card + i) || 0) <= 0) return false;
                count.set(card + i, count.get(card + i)! - 1);
            }
        }
    }
    return true;
}`
        },
        explanation: "Greedy: start groups from smallest available. Ensures we use all cards optimally.",
        patternTips: "Consecutive grouping = sort + greedy from smallest. Count frequencies to track usage."
    },

    "triple-merge": {
        hints: [
            "Skip triplets with any element > target.",
            "Collect which positions can match target.",
            "Need all 3 positions covered."
        ],
        solutions: {
            python: `def mergeTriplets(triplets, target):
    good = set()
    for t in triplets:
        if t[0] <= target[0] and t[1] <= target[1] and t[2] <= target[2]:
            for i in range(3):
                if t[i] == target[i]: good.add(i)
    return len(good) == 3`
        },
        explanation: "Filter out invalidating triplets, collect positions that can match target exactly.",
        patternTips: "Greedy filtering: eliminate bad options first, then check coverage."
    },

    "label-split": {
        hints: [
            "Find last occurrence of each character.",
            "Expand partition to include all chars' last occurrences.",
            "Cut when i == end."
        ],
        solutions: {
            python: `def partitionLabels(s):
    last = {c: i for i, c in enumerate(s)}
    result, start, end = [], 0, 0
    for i, c in enumerate(s):
        end = max(end, last[c])
        if i == end:
            result.append(end - start + 1)
            start = i + 1
    return result`
        },
        explanation: "Greedy: expand partition end to last occurrence of each char seen. Cut when i == end.",
        patternTips: "Partition with constraints = precompute bounds, then greedy expansion."
    },

    "wild-brackets": {
        hints: [
            "Track range of possible open counts: [low, high].",
            "'*' can be '(', ')' or empty.",
            "Valid if low == 0 at end."
        ],
        solutions: {
            python: `def checkValidString(s):
    low = high = 0
    for c in s:
        if c == '(': low += 1; high += 1
        elif c == ')': low -= 1; high -= 1
        else: low -= 1; high += 1
        if high < 0: return False
        low = max(low, 0)
    return low == 0`
        },
        explanation: "Track range of possible open parens. Low can't go below 0, high can't go below 0.",
        patternTips: "Wildcards = track range of possibilities. Greedy with bounds."
    },

    "insert-range": {
        hints: [
            "Three phases: before overlap, merge overlap, after overlap.",
            "Merge while intervals overlap.",
            "Insert merged result."
        ],
        solutions: {
            python: `def insert(intervals, newInterval):
    result = []
    for interval in intervals:
        if interval[1] < newInterval[0]:
            result.append(interval)
        elif interval[0] > newInterval[1]:
            result.append(newInterval)
            newInterval = interval
        else:
            newInterval = [min(interval[0], newInterval[0]), max(interval[1], newInterval[1])]
    result.append(newInterval)
    return result`
        },
        explanation: "Process intervals: add non-overlapping, merge overlapping, update newInterval.",
        patternTips: "Interval insertion = merge pattern. Track the 'current' interval being built."
    },

    "merge-ranges": {
        hints: [
            "Sort by start time.",
            "Merge if overlap with previous.",
            "Overlap: current start <= prev end."
        ],
        solutions: {
            python: `def merge(intervals):
    intervals.sort()
    result = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= result[-1][1]:
            result[-1][1] = max(result[-1][1], end)
        else:
            result.append([start, end])
    return result`
        },
        explanation: "Sort by start, greedily merge overlapping. Extend end if overlap, else new interval.",
        patternTips: "Merge intervals = sort + extend pattern. Template for interval problems."
    },

    "skip-ranges": {
        hints: [
            "Sort by END time, not start.",
            "Keep intervals that end earliest.",
            "Count kept, return removed."
        ],
        solutions: {
            python: `def eraseOverlapIntervals(intervals):
    intervals.sort(key=lambda x: x[1])
    count, prev_end = 0, float('-inf')
    for start, end in intervals:
        if start >= prev_end:
            prev_end = end
            count += 1
    return len(intervals) - count`
        },
        explanation: "Activity selection: sort by end, greedily pick non-overlapping. Return removed count.",
        patternTips: "Min removal for non-overlap = max kept. Sort by end for greedy."
    },

    "room-booking": {
        hints: [
            "Sort by start time.",
            "Check if any adjacent intervals overlap.",
            "Overlap: current start < previous end."
        ],
        solutions: {
            python: `def canAttendMeetings(intervals):
    intervals.sort()
    return all(intervals[i][0] >= intervals[i-1][1] for i in range(1, len(intervals)))`
        },
        explanation: "Sort by start, check no overlap between adjacent. O(n log n) for sort.",
        patternTips: "Meeting attendance = no overlap check. Simple sort + adjacent comparison."
    },

    "room-count": {
        hints: [
            "Use min-heap for end times.",
            "Pop if current meeting starts after earliest end.",
            "Heap size = rooms needed."
        ],
        solutions: {
            python: `import heapq
def minMeetingRooms(intervals):
    if not intervals: return 0
    intervals.sort()
    heap = [intervals[0][1]]
    for start, end in intervals[1:]:
        if start >= heap[0]: heapq.heappop(heap)
        heapq.heappush(heap, end)
    return len(heap)`
        },
        explanation: "Heap tracks active meeting end times. Pop if meeting ended, push new end.",
        patternTips: "Max concurrent = min heap of end times. Count = heap size."
    },

    "query-cover": {
        hints: [
            "Sort intervals by size.",
            "Sort queries.",
            "Use heap for active valid intervals."
        ],
        solutions: {
            python: `# Complex problem - key insight is to process queries in order
# and maintain valid intervals in a heap/sorted structure
# See detailed solution in story`
        },
        explanation: "Sweep line with heap. Process queries in order, track valid intervals by size.",
        patternTips: "Query problems often use sweep line + appropriate data structure."
    },

    "gate-distance": {
        hints: [
            "Multi-source BFS from all gates.",
            "Process level by level.",
            "Each room gets distance from nearest gate."
        ],
        solutions: {
            python: `from collections import deque
def wallsAndGates(rooms):
    if not rooms: return
    q = deque()
    for r in range(len(rooms)):
        for c in range(len(rooms[0])):
            if rooms[r][c] == 0: q.append((r, c))
    while q:
        r, c = q.popleft()
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < len(rooms) and 0 <= nc < len(rooms[0]) and rooms[nr][nc] == 2147483647:
                rooms[nr][nc] = rooms[r][c] + 1
                q.append((nr, nc))`
        },
        explanation: "Multi-source BFS: start from all gates, expand level by level.",
        patternTips: "Nearest source problems = multi-source BFS. Add all sources to queue first."
    },

    "ocean-flow": {
        hints: [
            "BFS from both oceans, not from each cell.",
            "Flow upward (>= instead of <=).",
            "Return intersection of both reachable sets."
        ],
        solutions: {
            python: `def pacificAtlantic(heights):
    m, n = len(heights), len(heights[0])
    def bfs(starts):
        reachable = set(starts)
        q = deque(starts)
        while q:
            r, c = q.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and (nr, nc) not in reachable and heights[nr][nc] >= heights[r][c]:
                    reachable.add((nr, nc)); q.append((nr, nc))
        return reachable
    pacific = bfs([(0, c) for c in range(n)] + [(r, 0) for r in range(m)])
    atlantic = bfs([(m-1, c) for c in range(n)] + [(r, n-1) for r in range(m)])
    return list(pacific & atlantic)`
        },
        explanation: "Reverse flow: BFS from oceans upward. Intersection = can reach both.",
        patternTips: "Reverse direction problems: flow from destination to source."
    },

    "capture-zone": {
        hints: [
            "Border-connected O's are safe.",
            "Mark safe O's, then flip remaining.",
            "Use DFS from border cells."
        ],
        solutions: {
            python: `def solve(board):
    m, n = len(board), len(board[0])
    def dfs(r, c):
        if 0 <= r < m and 0 <= c < n and board[r][c] == 'O':
            board[r][c] = 'S'
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]: dfs(r + dr, c + dc)
    for r in range(m):
        dfs(r, 0); dfs(r, n-1)
    for c in range(n):
        dfs(0, c); dfs(m-1, c)
    for r in range(m):
        for c in range(n):
            if board[r][c] == 'O': board[r][c] = 'X'
            elif board[r][c] == 'S': board[r][c] = 'O'`
        },
        explanation: "Mark border-connected as safe, flip rest. DFS from all border O's.",
        patternTips: "Surrounded regions: identify what's NOT surrounded (border-connected)."
    },


    "word-ladder": {
        hints: [
            "BFS for shortest path.",
            "Generate neighbors by trying all letters.",
            "Check if neighbor in word set."
        ],
        solutions: {
            python: `from collections import deque
def ladderLength(beginWord, endWord, wordList):
    words = set(wordList)
    if endWord not in words: return 0
    q = deque([(beginWord, 1)])
    visited = {beginWord}
    while q:
        word, length = q.popleft()
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i+1:]
                if new_word == endWord: return length + 1
                if new_word in words and new_word not in visited:
                    visited.add(new_word); q.append((new_word, length + 1))
    return 0`
        },
        explanation: "BFS for shortest path. Generate neighbors by single-letter changes.",
        patternTips: "Word transformation = implicit graph. BFS for shortest path."
    },

    "build-prefix": {
        hints: [
            "TrieNode has children dict and is_end flag.",
            "Insert: traverse/create nodes, mark end.",
            "Search: traverse, check is_end."
        ],
        solutions: {
            python: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for c in word:
            if c not in node.children: node.children[c] = TrieNode()
            node = node.children[c]
        node.is_end = True
    
    def search(self, word):
        node = self._find(word)
        return node is not None and node.is_end
    
    def startsWith(self, prefix):
        return self._find(prefix) is not None
    
    def _find(self, s):
        node = self.root
        for c in s:
            if c not in node.children: return None
            node = node.children[c]
        return node`
        },
        explanation: "Trie: tree of characters. Each node has children map and end marker.",
        patternTips: "Trie is foundation for prefix problems. Know insert/search/startsWith."
    },

    "word-finder": {
        hints: [
            "'.' matches any character.",
            "Use DFS/recursion for wildcard search.",
            "Try all children when seeing '.'."
        ],
        solutions: {
            python: `class WordDictionary:
    def __init__(self):
        self.root = {}
    
    def addWord(self, word):
        node = self.root
        for c in word:
            node = node.setdefault(c, {})
        node['$'] = True
    
    def search(self, word):
        def dfs(node, i):
            if i == len(word): return '$' in node
            if word[i] == '.':
                return any(dfs(node[c], i+1) for c in node if c != '$')
            return word[i] in node and dfs(node[word[i]], i+1)
        return dfs(self.root, 0)`
        },
        explanation: "Trie with wildcard: DFS, branch to all children on '.'.",
        patternTips: "Wildcard matching = DFS through trie. Try all options on wildcard."
    },

    "grid-search": {
        hints: [
            "Build trie from words, not grid.",
            "DFS on grid with trie node.",
            "Prune when path not in trie."
        ],
        solutions: {
            python: `# Key idea: Trie + DFS
# Build trie from words, DFS grid cells
# At each cell, check if char in current trie node's children
# If at word end, add to result
# See detailed solution in story for full implementation`
        },
        explanation: "Trie prunes invalid paths. One DFS pass finds all words. Remove found words.",
        patternTips: "Word Search II = Trie + backtracking. Trie enables efficient pruning."
    },

    "solo-number": {
        hints: [
            "XOR all numbers together.",
            "Pairs cancel out (a ^ a = 0).",
            "Single number remains."
        ],
        solutions: {
            python: `def singleNumber(nums):
    result = 0
    for num in nums:
        result ^= num
    return result`
        },
        explanation: "XOR magic: a ^ a = 0, a ^ 0 = a. Pairs cancel, single remains.",
        patternTips: "XOR for 'one different' problems. Know XOR properties cold."
    },

    "count-ones": {
        hints: [
            "n & (n-1) clears lowest set bit.",
            "Count iterations until n = 0.",
            "Brian Kernighan's algorithm."
        ],
        solutions: {
            python: `def hammingWeight(n):
    count = 0
    while n:
        n &= (n - 1)
        count += 1
    return count`
        },
        explanation: "n & (n-1) clears lowest 1-bit. Count iterations = number of 1s.",
        patternTips: "Brian Kernighan's: n &= (n-1). Know this bit trick."
    },

    "bit-count": {
        hints: [
            "dp[i] = dp[i >> 1] + (i & 1)",
            "Right shift gives previous answer.",
            "Add 1 if odd."
        ],
        solutions: {
            python: `def countBits(n):
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp`
        },
        explanation: "DP: dp[i] = dp[i/2] + last bit. O(n) time building on previous results.",
        patternTips: "Counting bits for range = DP with bit shift."
    },

    "missing-one": {
        hints: [
            "XOR all indices and all values.",
            "Or use sum formula: n(n+1)/2.",
            "Missing number remains."
        ],
        solutions: {
            python: `def missingNumber(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)
# Or XOR approach:
# result = len(nums)
# for i, num in enumerate(nums): result ^= i ^ num
# return result`
        },
        explanation: "Sum: expected - actual = missing. XOR: all pairs cancel except missing.",
        patternTips: "Missing number: sum formula or XOR. Both O(n) time, O(1) space."
    },

    "no-op-add": {
        hints: [
            "XOR = sum without carry.",
            "AND << 1 = carry.",
            "Repeat until no carry."
        ],
        solutions: {
            python: `def getSum(a, b):
    mask = 0xffffffff
    while b & mask:
        carry = (a & b) << 1
        a = a ^ b
        b = carry
    return a if b == 0 else ~(a ^ mask)`
        },
        explanation: "Bitwise add: XOR for sum, AND for carry. Handle negative with mask.",
        patternTips: "Addition without operators = XOR + carry. Watch for negative numbers."
    },

    "flip-integer": {
        hints: [
            "Extract last digit with % 10.",
            "Build reversed number.",
            "Check overflow."
        ],
        solutions: {
            python: `def reverse(x):
    sign = -1 if x < 0 else 1
    x = abs(x)
    result = 0
    while x:
        result = result * 10 + x % 10
        x //= 10
    result *= sign
    return result if -2**31 <= result <= 2**31 - 1 else 0`
        },
        explanation: "Extract digits from end, build reversed. Check 32-bit overflow.",
        patternTips: "Integer reversal: modulo for last digit, division for next. Always check overflow."
    },

    "add-one": {
        hints: [
            "Process from right to left.",
            "If digit < 9, increment and return.",
            "If all 9s, prepend 1."
        ],
        solutions: {
            python: `def plusOne(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits`
        },
        explanation: "Increment from right. If < 9, done. If 9, set to 0 and continue. All 9s = prepend 1.",
        patternTips: "Array arithmetic: process right to left with carry."
    },

    "power-calc": {
        hints: [
            "Binary exponentiation.",
            "x^n = (x^2)^(n/2) if even.",
            "Handle negative exponents."
        ],
        solutions: {
            python: `def myPow(x, n):
    if n < 0: x, n = 1/x, -n
    result = 1
    while n:
        if n % 2: result *= x
        x *= x
        n //= 2
    return result`
        },
        explanation: "Binary exponentiation: square x, halve n. O(log n) multiplications.",
        patternTips: "Power calculation: binary exponentiation. Fundamental for large exponents."
    },

    "string-multiply": {
        hints: [
            "Simulate grade-school multiplication.",
            "Product of digits at i,j goes to position i+j+1.",
            "Handle carries at end."
        ],
        solutions: {
            python: `def multiply(num1, num2):
    m, n = len(num1), len(num2)
    result = [0] * (m + n)
    for i in range(m - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            mul = int(num1[i]) * int(num2[j])
            p1, p2 = i + j, i + j + 1
            total = mul + result[p2]
            result[p2] = total % 10
            result[p1] += total // 10
    result = ''.join(map(str, result)).lstrip('0')
    return result or '0'`
        },
        explanation: "Grade-school multiplication. Position i,j contributes to result[i+j+1] with carry to [i+j].",
        patternTips: "String math: simulate manual calculation. Track positions carefully."
    },

    "spin-grid": {
        hints: [
            "Transpose matrix.",
            "Reverse each row.",
            "90° clockwise rotation."
        ],
        solutions: {
            python: `def rotate(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()`
        },
        explanation: "90° clockwise = transpose + reverse rows. In-place O(1) extra space.",
        patternTips: "Matrix rotation: transpose + reverse. Know both clockwise and counter-clockwise."
    },

    "spiral-read": {
        hints: [
            "Track 4 boundaries.",
            "Shrink boundaries after each direction.",
            "Check bounds after each direction change."
        ],
        solutions: {
            python: `def spiralOrder(matrix):
    result = []
    top, bottom, left, right = 0, len(matrix) - 1, 0, len(matrix[0]) - 1
    while top <= bottom and left <= right:
        for c in range(left, right + 1): result.append(matrix[top][c])
        top += 1
        for r in range(top, bottom + 1): result.append(matrix[r][right])
        right -= 1
        if top <= bottom:
            for c in range(right, left - 1, -1): result.append(matrix[bottom][c])
            bottom -= 1
        if left <= right:
            for r in range(bottom, top - 1, -1): result.append(matrix[r][left])
            left += 1
    return result`
        },
        explanation: "Layer by layer spiral. Four boundaries, shrink after each direction.",
        patternTips: "Spiral traversal = boundaries. Check validity before each direction."
    },

    "zero-grid": {
        hints: [
            "Use first row and column as markers.",
            "Track if first row/col need zeroing separately.",
            "Zero based on markers, then first row/col."
        ],
        solutions: {
            python: `def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(n))
    first_col_zero = any(matrix[i][0] == 0 for i in range(m))
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = matrix[0][j] = 0
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0
    if first_row_zero:
        for j in range(n): matrix[0][j] = 0
    if first_col_zero:
        for i in range(m): matrix[i][0] = 0`
        },
        explanation: "Use first row/col as flags. O(1) extra space. Handle first row/col separately.",
        patternTips: "Space optimization: use matrix itself as storage for flags."
    },

    "happy-loop": {
        hints: [
            "Either reaches 1 or enters cycle.",
            "Use Floyd's cycle detection.",
            "Or use a set to track seen values."
        ],
        solutions: {
            python: `def isHappy(n):
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
        if fast == 1: return True
        if slow == fast: return False`
        },
        explanation: "Floyd's cycle detection. If reaches 1, happy. If cycle, not happy.",
        patternTips: "Sequence problems with possible cycles = Floyd's algorithm."
    },

    "square-detect": {
        hints: [
            "Store points by count.",
            "For query point, find diagonal candidates.",
            "Check if other two corners exist."
        ],
        solutions: {
            python: `# Key: For query (x, y), find diagonal (x', y')
# where |x - x'| = |y - y'|
# Check if (x, y') and (x', y) exist
# See detailed solution in story for class implementation`
        },
        explanation: "For each point on same x or y, check if square can be formed with query.",
        patternTips: "Geometric counting: hash points, enumerate one dimension, check others."
    },

    "encode-decode": {
        hints: [
            "Use length-prefixed encoding.",
            "Format: length + delimiter + string.",
            "Delimiter can be any char not in length."
        ],
        solutions: {
            python: `class Codec:
    def encode(self, strs):
        return ''.join(f'{len(s)}#{s}' for s in strs)
    
    def decode(self, s):
        result, i = [], 0
        while i < len(s):
            j = s.index('#', i)
            length = int(s[i:j])
            result.append(s[j+1:j+1+length])
            i = j + 1 + length
        return result`
        },
        explanation: "Length-prefix encoding: \"len#string\". Unambiguous parsing.",
        patternTips: "String serialization: length-prefix is most robust. Handles any characters."
    },

    "grid-valid": {
        hints: [
            "Check each row, column, and 3x3 box.",
            "Use sets to track seen numbers.",
            "Box index: (row/3)*3 + col/3."
        ],
        solutions: {
            python: `def isValidSudoku(board):
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]
    for r in range(9):
        for c in range(9):
            if board[r][c] != '.':
                num = board[r][c]
                box = (r // 3) * 3 + c // 3
                if num in rows[r] or num in cols[c] or num in boxes[box]:
                    return False
                rows[r].add(num); cols[c].add(num); boxes[box].add(num)
    return True`
        },
        explanation: "Track seen numbers in each row, column, and 3x3 box. O(81) = O(1).",
        patternTips: "Sudoku validation: index boxes with (r/3)*3 + c/3."
    },

    "phone-letters": {
        hints: [
            "Map digits to letters.",
            "Backtracking to generate all combinations.",
            "Build path, add when complete."
        ],
        solutions: {
            python: `def letterCombinations(digits):
    if not digits: return []
    mapping = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
               '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
    result = []
    def backtrack(i, path):
        if i == len(digits):
            result.append(path); return
        for c in mapping[digits[i]]:
            backtrack(i + 1, path + c)
    backtrack(0, '')
    return result`
        },
        explanation: "Backtracking: for each digit, try all mapped letters. Build combinations.",
        patternTips: "Phone combinations = cartesian product via backtracking."
    },

    "power-set-2": {
        hints: [
            "Sort to group duplicates.",
            "Skip duplicate elements at same level.",
            "Same as subsets but skip if same as previous."
        ],
        solutions: {
            python: `def subsetsWithDup(nums):
    nums.sort()
    result = []
    def backtrack(start, path):
        result.append(path[:])
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i-1]: continue
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    backtrack(0, [])
    return result`
        },
        explanation: "Sort + skip duplicates at same recursion level. Prevents duplicate subsets.",
        patternTips: "Duplicates in backtracking: sort + skip if same as previous at same level."
    },

    "split-palindrome": {
        hints: [
            "Try cutting at each position.",
            "Check if prefix is palindrome.",
            "Recursively partition rest."
        ],
        solutions: {
            python: `def partition(s):
    result = []
    def backtrack(start, path):
        if start == len(s):
            result.append(path[:]); return
        for i in range(start, len(s)):
            if s[start:i+1] == s[start:i+1][::-1]:
                path.append(s[start:i+1])
                backtrack(i + 1, path)
                path.pop()
    backtrack(0, [])
    return result`
        },
        explanation: "Backtrack: try each cut point, include if prefix is palindrome.",
        patternTips: "Palindrome partitioning: cut + validate + recurse. Precompute for optimization."
    },

    "sum-combos-2": {
        hints: [
            "Sort to group duplicates.",
            "Skip duplicates at same level.",
            "Can't reuse same element."
        ],
        solutions: {
            python: `def combinationSum2(candidates, target):
    candidates.sort()
    result = []
    def backtrack(start, target, path):
        if target == 0:
            result.append(path[:]); return
        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i-1]: continue
            if candidates[i] > target: break
            path.append(candidates[i])
            backtrack(i + 1, target - candidates[i], path)
            path.pop()
    backtrack(0, target, [])
    return result`
        },
        explanation: "Like Combination Sum but each number used once. Sort + skip duplicates.",
        patternTips: "Combination Sum II: skip duplicates, start from i+1 not i."
    },

    "alien-order": {
        hints: [
            "Compare adjacent words for ordering.",
            "Build graph of character orderings.",
            "Topological sort."
        ],
        solutions: {
            python: `def alienOrder(words):
    graph = {c: set() for w in words for c in w}
    for w1, w2 in zip(words, words[1:]):
        for c1, c2 in zip(w1, w2):
            if c1 != c2:
                graph[c1].add(c2); break
        else:
            if len(w1) > len(w2): return ''
    # Topological sort (see story for full implementation)
    # Return order or '' if cycle`
        },
        explanation: "Extract orderings from adjacent words, topological sort the graph.",
        patternTips: "Alien dictionary = extract edges + topo sort. Watch for invalid cases."
    },

    "flight-path": {
        hints: [
            "Hierholzer's algorithm for Eulerian path.",
            "Post-order DFS, reverse result.",
            "Sort destinations, pop from end."
        ],
        solutions: {
            python: `from collections import defaultdict
def findItinerary(tickets):
    graph = defaultdict(list)
    for src, dst in tickets: graph[src].append(dst)
    for src in graph: graph[src].sort(reverse=True)
    result = []
    def dfs(airport):
        while graph[airport]:
            dfs(graph[airport].pop())
        result.append(airport)
    dfs('JFK')
    return result[::-1]`
        },
        explanation: "Hierholzer's: post-order DFS, reverse. Sort destinations for lexical order.",
        patternTips: "Eulerian path: Hierholzer's algorithm. Post-order + reverse."
    },

    "swim-level": {
        hints: [
            "Modified Dijkstra: minimize max elevation.",
            "Priority = max(current_max, cell_value).",
            "Use min-heap."
        ],
        solutions: {
            python: `import heapq
def swimInWater(grid):
    n = len(grid)
    heap = [(grid[0][0], 0, 0)]
    visited = set()
    while heap:
        t, r, c = heapq.heappop(heap)
        if (r, c) in visited: continue
        visited.add((r, c))
        if r == n - 1 and c == n - 1: return t
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited:
                heapq.heappush(heap, (max(t, grid[nr][nc]), nr, nc))
    return -1`
        },
        explanation: "Modified Dijkstra: track max elevation along path, not sum.",
        patternTips: "Min-max path: Dijkstra with max instead of sum. Priority = path maximum."
    }
};

export function getLessonExtras(slug: string): LessonExtras | undefined {
    return LESSON_EXTRAS[slug];
}
