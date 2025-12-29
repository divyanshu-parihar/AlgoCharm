// Problem descriptions for all 150+ problems
// These are LeetCode-style descriptions for each algorithm challenge
// Auto-generated from NeetCode150List.json

export const PROBLEM_DESCRIPTIONS: Record<string, string> = {
    "add-lists": `You are given two **non-empty** linked lists, \`l1\` and \`l2\`, where each represents a non-negative integer.
    
The digits are stored in **reverse order**, e.g. the number 321 is represented as \`1 -> 2 -> 3 ->\` in the linked list.

Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number \`0\` itself.

Return the sum of the two numbers as a linked list.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/fee72e19-6a21-45a5-365e-3cb45aba9700/public)

\`\`\`java
Input: l1 = [1,2,3], l2 = [4,5,6]

Output: [5,7,9]

Explanation: 321 + 654 = 975.
\`\`\`

**Example 2:**

\`\`\`java
Input: l1 = [9], l2 = [9]

Output: [8,1]
\`\`\`

**Constraints:**
* \`1 <= l1.length, l2.length <= 100\`.
* \`0 <= Node.val <= 9\``,

    "add-one": `You are given an integer array \`digits\`, where each \`digits[i]\` is the \`ith\` digit of a large integer. It is ordered from most significant to least significant digit, and it will not contain any leading zero.

Return the digits of the given integer after incrementing it by one.

**Example 1:**

\`\`\`java
Input: digits = [1,2,3,4]

Output: [1,2,3,5]
\`\`\`

Explanation \`1234\` + \`1\` = \`1235\`.

**Example 2:**

\`\`\`java
Input: digits = [9,9,9]

Output: [1,0,0,0]
\`\`\`

**Constraints:**
* \`1 <= digits.length <= 100\`
* \`0 <= digits[i] <= 9\``,

    "alien-order": `There is a foreign language which uses the latin alphabet, but the order among letters is *not* "a", "b", "c" ... "z" as in English.

You receive a list of *non-empty* strings \`words\` from the dictionary, where the words are **sorted lexicographically** based on the rules of this new language. 

Derive the order of letters in this language. If the order is invalid, return an empty string. If there are multiple valid order of letters, return **any** of them.

A string \`a\` is lexicographically smaller than a string \`b\` if either of the following is true:
* The first letter where they differ is smaller in \`a\` than in \`b\`.
* \`a\` is a prefix of \`b\` *and* \`a.length < b.length\`.

**Example 1:**

\`\`\`java
Input: ["z","o"]

Output: "zo"
\`\`\`

Explanation:
From "z" and "o", we know 'z' < 'o', so return "zo".

**Example 2:**

\`\`\`java
Input: ["hrn","hrf","er","enn","rfnn"]

Output: "hernf"
\`\`\`

Explanation:
* from "hrn" and "hrf", we know 'n' < 'f'
* from "hrf" and "er", we know 'h' < 'e'
* from "er" and "enn", we know get 'r' < 'n'
* from "enn" and "rfnn" we know 'e'<'r'
* so one possibile solution is "hernf"

**Constraints:**
* The input \`words\` will contain characters only from lowercase \`'a'\` to \`'z'\`.
* \`1 <= words.length <= 100\`
* \`1 <= words[i].length <= 100\``,

    "all-orders": `Given an array \`nums\` of **unique** integers, return all the possible permutations. You may return the answer in **any order**.

**Example 1:**

\`\`\`java
Input: nums = [1,2,3]

Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [7]

Output: [[7]]
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 6\`
* \`-10 <= nums[i] <= 10\``,

    "banana-speed": `You are given an integer array \`piles\` where \`piles[i]\` is the number of bananas in the \`ith\` pile. You are also given an integer \`h\`, which represents the number of hours you have to eat all the bananas.

You may decide your bananas-per-hour eating rate of \`k\`. Each hour, you may choose a pile of bananas and eats \`k\` bananas from that pile. If the pile has less than \`k\` bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

Return the minimum integer \`k\` such that you can eat all the bananas within \`h\` hours.

**Example 1:**

\`\`\`java
Input: piles = [1,4,3,2], h = 9

Output: 2
\`\`\`

Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

**Example 2:**

\`\`\`java
Input: piles = [25,10,23,4], h = 4

Output: 25
\`\`\`

**Constraints:**
* \`1 <= piles.length <= 1,000\`
* \`piles.length <= h <= 1,000,000\`
* \`1 <= piles[i] <= 1,000,000,000\``,

    "biggest-bar": `You are given an array of integers \`heights\` where \`heights[i]\` represents the height of a bar. The width of each bar is \`1\`.
    
Return the area of the largest rectangle that can be formed among the bars.

Note: This chart is known as a [histogram](https://en.wikipedia.org/wiki/Histogram).

**Example 1:**

\`\`\`java
Input: heights = [7,1,7,2,2,4]

Output: 8
\`\`\`

**Example 2:**

\`\`\`java
Input: heights = [1,3,7]

Output: 7
\`\`\`

**Constraints:**
* \`1 <= heights.length <= 1000\`.
* \`0 <= heights[i] <= 1000\``,

    "bit-count": `Given an integer \`n\`, count the number of \`1\`'s in the binary representation of every number in the range \`[0, n]\`.
    
Return an array \`output\` where \`output[i]\` is the number of \`1\`'s in the binary representation of \`i\`.

**Example 1:**

\`\`\`java
Input: n = 4

Output: [0,1,1,2,1]
\`\`\`

Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100

**Constraints:**
* \`0 <= n <= 1000\``,

    "bracket-gen": `You are given an integer \`n\`. Return all well-formed parentheses strings that you can generate with \`n\` pairs of parentheses.

**Example 1:**

\`\`\`java
Input: n = 1

Output: ["()"]
\`\`\`

**Example 2:**

\`\`\`java
Input: n = 3

Output: ["((()))","(()())","(())()","()(())","()()()"]
\`\`\`

You may return the answer in **any order**.

**Constraints:**
* \`1 <= n <= 7\``,

    "bracket-match": `You are given a string \`s\` consisting of the following characters: \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`.

The input string \`s\` is valid if and only if:

1. Every open bracket is closed by the same type of close bracket.
2. Open brackets are closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Return \`true\` if \`s\` is a valid string, and \`false\` otherwise.

**Example 1:**

\`\`\`java
Input: s = "[]"

Output: true
\`\`\`

**Example 2:**

\`\`\`java
Input: s = "([{}])"

Output: true
\`\`\`

**Example 3:**

\`\`\`java
Input: s = "[(])"

Output: false
\`\`\`

Explanation: The brackets are not closed in the correct order.

**Constraints:**
* \`1 <= s.length <= 1000\``,

    "budget-flights": `There are \`n\` airports, labeled from \`0\` to \`n - 1\`, which are connected by some flights. You are given an array \`flights\` where \`flights[i] = [from_i, to_i, price_i]\` represents a one-way flight from airport \`from_i\` to airport \`to_i\` with cost \`price_i\`. You may assume there are no duplicate flights and no flights from an airport to itself.

You are also given three integers \`src\`, \`dst\`, and \`k\` where:

* \`src\` is the starting airport
* \`dst\` is the destination airport
* \`src != dst\`
* \`k\` is the maximum number of stops you can make (not including \`src\` and \`dst\`)

Return **the cheapest price** from \`src\` to \`dst\` with at most \`k\` stops, or return \`-1\` if it is impossible.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e272e71f-c38b-4db8-3c4e-1158418d2a00/public)

\`\`\`java
Input: n = 4, flights = [[0,1,200],[1,2,100],[1,3,300],[2,3,100]], src = 0, dst = 3, k = 1

Output: 500
\`\`\`

Explanation:
The optimal path with at most 1 stop from airport 0 to 3 is shown in red, with total cost \`200 + 300 = 500\`.
Note that the path \`[0 -> 1 -> 2 -> 3]\` costs only 400, and thus is cheaper, but it requires 2 stops, which is more than k.

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/93e910ee-378d-4ac8-93e0-471df7ccf600/public)

\`\`\`java
Input: n = 3, flights = [[1,0,100],[1,2,200],[0,2,100]], src = 1, dst = 2, k = 1

Output: 200
\`\`\`

Explanation:
The optimal path with at most 1 stop from airport 1 to 2 is shown in red and has cost \`200\`.

**Constraints:**
* \`1 <= n <= 100\`
* \`fromi != toi\`
* \`1 <= pricei <= 1000\`
* \`0 <= src, dst, k < n\``,

    "build-prefix": `A **prefix tree** (also known as a trie) is a tree data structure used to efficiently store and retrieve keys in a set of strings. Some applications of this data structure include auto-complete and spell checker systems.

Implement the PrefixTree class:
* \`PrefixTree()\` Initializes the prefix tree object.
* \`void insert(String word)\` Inserts the string \`word\` into the prefix tree.
* \`boolean search(String word)\` Returns \`true\` if the string \`word\` is in the prefix tree (i.e., was inserted before), and \`false\` otherwise.
* \`boolean startsWith(String prefix)\` Returns \`true\` if there is a previously inserted string \`word\` that has the prefix \`prefix\`, and \`false\` otherwise.

**Example 1:**

\`\`\`java
Input: 
["Trie", "insert", "dog", "search", "dog", "search", "do", "startsWith", "do", "insert", "do", "search", "do"]

Output:
[null, null, true, false, true, null, true]

Explanation:
PrefixTree prefixTree = new PrefixTree();
prefixTree.insert("dog");
prefixTree.search("dog");    // return true
prefixTree.search("do");     // return false
prefixTree.startsWith("do"); // return true
prefixTree.insert("do");
prefixTree.search("do");     // return true
\`\`\`

**Constraints:**
* \`1 <= word.length, prefix.length <= 1000\`
* \`word\` and \`prefix\` are made up of lowercase English letters.`,

    "build-tree": `You are given two integer arrays \`preorder\` and \`inorder\`.
        
* \`preorder\` is the preorder traversal of a binary tree
* \`inorder\` is the inorder traversal of the same tree
* Both arrays are of the same size and consist of unique values.

Rebuild the binary tree from the preorder and inorder traversals and return its root.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/938c14d3-6669-47ab-924b-a1a08640f200/public)

\`\`\`java
Input: preorder = [1,2,3,4], inorder = [2,1,3,4]

Output: [1,2,3,null,null,null,4]
\`\`\`

**Example 2:**

\`\`\`java
Input: preorder = [1], inorder = [1]

Output: [1]
\`\`\`

**Constraints:**
* \`1 <= inorder.length <= 1000\`.
* \`inorder.length == preorder.length\`
* \`-1000 <= preorder[i], inorder[i] <= 1000\``,

    "capture-zone": `You are given a 2-D matrix \`board\` containing \`'X'\` and \`'O'\` characters.

If a continous, four-directionally connected group of \`'O'\`s is surrounded by \`'X'\`s, it is considered to be **surrounded**. 

Change all **surrounded** regions of \`'O'\`s to \`'X'\`s and do so **in-place** by modifying the input board.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9e6916bf-0e25-4e15-9619-cbc42d2d8f00/public)

\`\`\`java
Input: board = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","O","O","X"],
  ["X","X","X","O"]
]

Output: [
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","O"]
]
\`\`\`

Explanation: Note that regions that are on the border are not considered surrounded regions.

**Constraints:**
* \`1 <= board.length, board[i].length <= 200\`
* \`board[i][j]\` is \`'X'\` or \`'O'\`.`,

    "car-convoy": `There are \`n\` cars traveling to the same destination on a one-lane highway.

You are given two arrays of integers \`position\` and \`speed\`, both of length \`n\`. 
* \`position[i]\` is the position of the \`ith car\` (in miles)
* \`speed[i]\` is the speed of the \`ith\` car (in miles per hour)

The **destination** is at position \`target\` miles.

A car can **not** pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

A **car fleet** is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

Return the number of **different car fleets** that will arrive at the destination.

**Example 1:**

\`\`\`java
Input: target = 10, position = [1,4], speed = [3,2]

Output: 1
\`\`\`

Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

**Example 2:**

\`\`\`java
Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]

Output: 3
\`\`\`

Explanation: The cars starting at 4 and 7 become a fleet at position 10. The cars starting at 1 and 0 never catch up to the car ahead of them. Thus, there are 3 car fleets that will arrive at the destination.

**Constraints:**
* \`n == position.length == speed.length\`.
* \`1 <= n <= 1000\`
* \`0 < target <= 1000\`
* \`0 < speed[i] <= 100\`
* \`0 <= position[i] < target\`
* All the values of \`position\` are **unique**.`,

    "card-groups": `You are given an integer array \`hand\` where \`hand[i]\` is the value written on the \`ith\` card and an integer \`groupSize\`.
    
You want to rearrange the cards into groups so that each group is of size \`groupSize\`, and card values are consecutively increasing by \`1\`.

Return \`true\` if it's possible to rearrange the cards in this way, otherwise, return \`false\`.

**Example 1:**

\`\`\`java
Input: hand = [1,2,4,2,3,5,3,4], groupSize = 4

Output: true
\`\`\`

Explanation: The cards can be rearranged as \`[1,2,3,4]\` and \`[2,3,4,5]\`.

**Example 2:**

\`\`\`java
Input: hand = [1,2,3,3,4,5,6,7], groupSize = 4

Output: false
\`\`\`

Explanation: The closest we can get is \`[1,2,3,4]\` and \`[3,5,6,7]\`, but the cards in the second group are not consecutive.

**Constraints:**
* \`1 <= hand.length <= 1000\`
* \`0 <= hand[i] <= 1000\`
* \`1 <= groupSize <= hand.length\``,

    "cheap-stairs": `You are given an array of integers \`cost\` where \`cost[i]\` is the cost of taking a step from the \`ith\` floor of a staircase. After paying the cost, you can step to either the \`(i + 1)th\` floor or the \`(i + 2)th\` floor.

You may choose to start at the index \`0\` or the index \`1\` floor.

Return the minimum cost to reach the top of the staircase, i.e. just past the last index in \`cost\`.

**Example 1:**

\`\`\`java
Input: cost = [1,2,3]

Output: 2
\`\`\`

Explanation: We can start at index = \`1\` and pay the cost of \`cost[1] = 2\` and take two steps to reach the top. The total cost is \`2\`.

**Example 2:**

\`\`\`java
Input: cost = [1,2,1,2,1,1,1]

Output: 4
\`\`\`

Explanation: Start at index = \`0\`.
* Pay the cost of \`cost[0] = 1\` and take two steps to reach index = \`2\`.
* Pay the cost of \`cost[2] = 1\` and take two steps to reach index = \`4\`.
* Pay the cost of \`cost[4] = 1\` and take two steps to reach index = \`6\`.
* Pay the cost of \`cost[6] = 1\` and take one step to reach the top.
* The total cost is \`4\`.

**Constraints:**
* \`2 <= cost.length <= 100\`
* \`0 <= cost[i] <= 100\``,

    "class-order": `You are given an array \`prerequisites\` where \`prerequisites[i] = [a, b]\` indicates that you **must** take course \`b\` first if you want to take course \`a\`.

The pair \`[0, 1]\`, indicates that must take course \`1\` before taking course \`0\`.

There are a total of \`numCourses\` courses you are required to take, labeled from \`0\` to \`numCourses - 1\`. 

Return \`true\` if it is possible to finish all courses, otherwise return \`false\`.

**Example 1:**

\`\`\`java
Input: numCourses = 2, prerequisites = [[0,1]]

Output: true
\`\`\`
Explanation: First take course 1 (no prerequisites) and then take course 0.

**Example 2:**

\`\`\`java
Input: numCourses = 2, prerequisites = [[0,1],[1,0]]

Output: false
\`\`\`

Explanation: In order to take course 1 you must take course 0, and to take course 0 you must take course 1. So it is impossible.

**Constraints:**
* \`1 <= numCourses <= 1000\`
* \`0 <= prerequisites.length <= 1000\`
* \`prerequisites[i].length == 2\`
* \`0 <= a[i], b[i] < numCourses\`
* All \`prerequisite\` pairs are **unique**.`,

    "class-order-2": `You are given an array \`prerequisites\` where \`prerequisites[i] = [a, b]\` indicates that you **must** take course \`b\` first if you want to take course \`a\`.

* For example, the pair \`[0, 1]\`, indicates that to take course \`0\` you have to first take course \`1\`.

There are a total of \`numCourses\` courses you are required to take, labeled from \`0\` to \`numCourses - 1\`. 

Return a valid ordering of courses you can take to finish all courses. If there are many valid answers, return **any** of them. If it's not possible to finish all courses, return an **empty array**.

**Example 1:**

\`\`\`java
Input: numCourses = 3, prerequisites = [[1,0]]

Output: [0,1,2]
\`\`\`

Explanation: We must ensure that course 0 is taken before course 1.

**Example 2:**

\`\`\`java
Input: numCourses = 3, prerequisites = [[0,1],[1,2],[2,0]]

Output: []
\`\`\`

Explanation: It's impossible to finish all courses.

**Constraints:**
* \`1 <= numCourses <= 1000\`
* \`0 <= prerequisites.length <= 1000\`
* All \`prerequisite\` pairs are **unique**.`,

    "clone-random": `You are given the head of a linked list of length \`n\`. Unlike a singly linked list, each node contains an additional pointer \`random\`, which may point to any node in the list, or \`null\`.

Create a **deep copy** of the list. 

The deep copy should consist of exactly \`n\` **new** nodes, each including:
* The original value \`val\` of the copied node
* A \`next\` pointer to the new node corresponding to the \`next\` pointer of the original node
* A \`random\` pointer to the new node corresponding to the \`random\` pointer of the original node

Note: None of the pointers in the new list should point to nodes in the original list.

*Return the head of the copied linked list.*

In the examples, the linked list is represented as a list of \`n\` nodes. Each node is represented as a pair of \`[val, random_index]\` where \`random_index\` is the index of the node (0-indexed) that the \`random\` pointer points to, or \`null\` if it does not point to any node.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/5a5c2bdd-51e2-4795-4544-096af4b6cc00/public)

\`\`\`java
Input: head = [[3,null],[7,3],[4,0],[5,1]]

Output: [[3,null],[7,3],[4,0],[5,1]]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/6e56fa98-cf1e-4ca6-18d4-716dac4ba900/public)

\`\`\`java
Input: head = [[1,null],[2,2],[3,2]]

Output: [[1,null],[2,2],[3,2]]
\`\`\`

**Constraints:**
* \`0 <= n <= 100\`
* \`-100 <= Node.val <= 100\`
* \`random\` is \`null\` or is pointing to some node in the linked list.`,

    "coin-change": `You are given an integer array \`coins\` representing coins of different denominations (e.g. 1 dollar, 5 dollars, etc) and an integer \`amount\` representing a target amount of money.

Return the fewest number of coins that you need to make up the *exact* target amount. If it is impossible to make up the amount, return \`-1\`.

You may assume that you have an unlimited number of each coin.

**Example 1:**

\`\`\`java
Input: coins = [1,5,10], amount = 12

Output: 3
\`\`\`

Explanation: 12 = 10 + 1 + 1. Note that we do not have to use every kind coin available.

**Example 2:**

\`\`\`java
Input: coins = [2], amount = 3

Output: -1
\`\`\`

Explanation: The amount of 3 cannot be made up with coins of 2.

**Example 3:**

\`\`\`java
Input: coins = [1], amount = 0

Output: 0
\`\`\`

Explanation: Choosing 0 coins is a valid way to make up 0.

**Constraints:**
* \`1 <= coins.length <= 10\`
* \`1 <= coins[i] <= 2^31 - 1\`
* \`0 <= amount <= 10000\``,

    "coin-ways": `You are given an integer array \`coins\` representing coins of different denominations (e.g. 1 dollar, 5 dollars, etc) and an integer \`amount\` representing a target amount of money.

Return the number of distinct combinations that total up to \`amount\`. If it's impossible to make up the amount, return \`0\`.

You may assume that you have an unlimited number of each coin and that each value in \`coins\` is unique.

**Example 1:**

\`\`\`java
Input: amount = 4, coins = [1,2,3]

Output: 4
\`\`\`

Explanation:
* 1+1+1+1 = 4
* 1+1+2 = 4
* 2+2 = 4
* 1+3 = 4

**Example 2:**

\`\`\`java
Input: amount = 7, coins = [2,4]

Output: 0
\`\`\`

**Constraints:**
* \`1 <= coins.length <= 100\`
* \`1 <= coins[i] <= 5000\`
* \`0 <= amount <= 5000\``,

    "common-parent": `Given a binary search tree (BST) where all node values are *unique*, and two nodes from the tree \`p\` and \`q\`, return the lowest common ancestor (LCA) of the two nodes.

The lowest common ancestor between two nodes \`p\` and \`q\` is the lowest node in a tree \`T\` such that both \`p\` and \`q\` as descendants. The ancestor is allowed to be a descendant of itself.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/2080ee6a-3d27-4cd5-0db2-07672ead8200/public)

\`\`\`java
Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8

Output: 5
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/2080ee6a-3d27-4cd5-0db2-07672ead8200/public)

\`\`\`java
Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 4

Output: 3
\`\`\`

Explanation: The LCA of nodes 3 and 4 is 3, since a node can be a descendant of itself.

**Constraints:**
* \`2 <= The number of nodes in the tree <= 100\`.
* \`-100 <= Node.val <= 100\`
* \`p != q\`
* \`p\` and \`q\` will both exist in the BST.`,

    "common-sequence": `Given two strings \`text1\` and \`text2\`, return the length of the *longest common subsequence* between the two strings if one exists, otherwise return \`0\`.

A **subsequence** is a sequence that can be derived from the given sequence by deleting some or no elements  without changing the relative order of the remaining characters.

* For example, \`"cat"\` is a subsequence of \`"crabt"\`.

A **common subsequence** of two strings is a subsequence that exists in both strings.

**Example 1:**

\`\`\`java
Input: text1 = "cat", text2 = "crabt" 

Output: 3 
\`\`\`

Explanation: The longest common subsequence is "cat" which has a length of 3.

**Example 2:**

\`\`\`java
Input: text1 = "abcd", text2 = "abcd"

Output: 4
\`\`\`

**Example 3:**

\`\`\`java
Input: text1 = "abcd", text2 = "efgh"

Output: 0
\`\`\`

**Constraints:**
* \`1 <= text1.length, text2.length <= 1000\`
* \`text1\` and \`text2\` consist of only lowercase English characters.`,

    "component-count": `There is an undirected graph with \`n\` nodes. There is also an \`edges\` array, where \`edges[i] = [a, b]\` means that there is an edge between node \`a\` and node \`b\` in the graph.

The nodes are numbered from \`0\` to \`n - 1\`.

Return the total number of connected components in that graph.

**Example 1:**

\`\`\`java
Input:
n=3
edges=[[0,1], [0,2]]

Output:
1
\`\`\`

**Example 2:**

\`\`\`java
Input:
n=6
edges=[[0,1], [1,2], [2,3], [4,5]]

Output:
2
\`\`\`

**Constraints:**
* \`1 <= n <= 100\`
* \`0 <= edges.length <= n * (n - 1) / 2\``,

    "connect-cost": `You are given a 2-D integer array \`points\`, where \`points[i] = [xi, yi]\`. Each \`points[i]\` represents a distinct point on a 2-D plane.

The cost of connecting two points \`[xi, yi]\` and \`[xj, yj]\` is the **manhattan distance** between the two points, i.e. \`|xi - xj| + |yi - yj|\`.

Return the minimum cost to connect all points together, such that there exists exactly one path between each pair of points.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e0cd5270-73b5-42d4-3c3f-5451f795ca00/public)

\`\`\`java
Input: points = [[0,0],[2,2],[3,3],[2,4],[4,2]]

Output: 10
\`\`\`

**Constraints:**
* \`1 <= points.length <= 1000\`
* \`-1,000,000 <= xi, yi <= 1,000,000\`
* All pairs \`(xi, yi)\` are distinct.`,

    "copy-network": `Given a node in a connected undirected graph, return a deep copy of the graph.

Each node in the graph contains an integer value and a list of its neighbors.

\`\`\`java
class Node {
    public int val;
    public List<Node> neighbors;
}
\`\`\`

The graph is shown in the test cases as an adjacency list. **An adjacency list** is a mapping of nodes to lists, used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

For simplicity, nodes values are numbered from 1 to \`n\`, where \`n\` is the total number of nodes in the graph. The index of each node within the adjacency list is the same as the node's value (1-indexed).

The input node will always be the first node in the graph and have \`1\` as the value.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/ca68c09d-4d0e-4d80-9c20-078c666cf900/public)

\`\`\`java
Input: adjList = [[2],[1,3],[2]]

Output: [[2],[1,3],[2]]
\`\`\`

Explanation: There are 3 nodes in the graph.
Node 1: val = 1 and neighbors = [2].
Node 2: val = 2 and neighbors = [1, 3].
Node 3: val = 3 and neighbors = [2].

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/96c7fb34-26e8-42e0-5f5d-61b8b8c96800/public)

\`\`\`java
Input: adjList = [[]]

Output: [[]]
\`\`\`

Explanation: The graph has one node with no neighbors.

**Example 3:**

\`\`\`java
Input: adjList = []

Output: []
\`\`\`

Explanation: The graph is empty.

**Constraints:**
* \`0 <= The number of nodes in the graph <= 100\`.
* \`1 <= Node.val <= 100\`
* There are no duplicate edges and no self-loops in the graph.`,

    "count-ones": `You are given an unsigned integer \`n\`. Return the number of \`1\` bits in its binary representation.

You may assume \`n\` is a non-negative integer which fits within 32-bits.

**Example 1:**

\`\`\`java
Input: n = 00000000000000000000000000010111

Output: 4
\`\`\`

**Example 2:**

\`\`\`java
Input: n = 01111111111111111111111111111101

Output: 30
\`\`\``,

    "count-palindrome": `Given a string \`s\`, return the number of substrings within \`s\` that are palindromes.

A **palindrome** is a string that reads the same forward and backward.

**Example 1:**

\`\`\`java
Input: s = "abc"

Output: 3
\`\`\`

Explanation: "a", "b", "c".

**Example 2:**

\`\`\`java
Input: s = "aaa"

Output: 6
\`\`\`

Explanation: "a", "a", "a", "aa", "aa", "aaa". Note that different substrings are counted as different palindromes even if the string contents are the same.

**Constraints:**
* \`1 <= s.length <= 1000\`
* \`s\` consists of lowercase English letters.`,

    "decode-path": `A string consisting of uppercase english characters can be encoded to a number using the following mapping:

\`\`\`java
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
\`\`\`

To **decode** a message, digits must be grouped and then mapped back into letters using the reverse of the mapping above. There may be multiple ways to decode a message. For example, \`"1012"\` can be mapped into:

* \`"JAB"\` with the grouping \`(10 1 2)\`
* \`"JL"\` with the grouping \`(10 12)\`

The grouping \`(1 01 2)\` is invalid because \`01\` cannot be mapped into a letter since it contains a leading zero.

Given a string \`s\` containing only digits, return the number of ways to **decode** it. You can assume that the answer fits in a **32-bit** integer.

**Example 1:**

\`\`\`java
Input: s = "12"

Output: 2

Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
\`\`\`

**Example 2:**

\`\`\`java
Input: s = "01"

Output: 0
\`\`\`

Explanation: "01" cannot be decoded because "01" cannot be mapped into a letter.

**Constraints:**
* \`1 <= s.length <= 100\`
* \`s\` consists of digits`,

    "edit-steps": `You are given two strings \`word1\` and \`word2\`, each consisting of lowercase English letters.

You are allowed to perform three operations on \`word1\` an unlimited number of times:

* Insert a character at any position
* Delete a character at any position
* Replace a character at any position

Return the minimum number of operations to make \`word1\` equal \`word2\`.

**Example 1:**

\`\`\`java
Input: word1 = "monkeys", word2 = "money"

Output: 2
\`\`\`

Explanation: 
\`monkeys\` -> \`monkey\` (remove \`s\`)
\`monkey\` -> \`money\`  (remove \`k\`)

**Example 2:**

\`\`\`java
Input: word1 = "neatcdee", word2 = "neetcode"

Output: 3
\`\`\`

Explanation: 
\`neatcdee\` -> \`neetcdee\`  (replace \`a\` with \`e\`)
\`neetcdee\` -> \`neetcde\`   (remove last \`e\`)
\`neetcde\`  -> \`neetcode\`  (insert \`o\`)

**Constraints:**
* \`0 <= word1.length, word2.length <= 100\`
* \`word1\` and \`word2\` consist of lowercase English letters.`,

    "encode-decode": `Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement \`encode\` and \`decode\`

**Example 1:**

\`\`\`java
Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
\`\`\`

**Example 2:**
\`\`\`java
Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
\`\`\`

**Constraints:**
* \`0 <= strs.length < 100\`
* \`0 <= strs[i].length < 200\`
* \`strs[i]\` contains only UTF-8 characters.`,

    "equal-split": `You are given an array of positive integers \`nums\`.
    
Return \`true\` if you can partition the array into two subsets, \`subset1\` and \`subset2\` where \`sum(subset1) == sum(subset2)\`. Otherwise, return \`false\`.

**Example 1:**

\`\`\`java
Input: nums = [1,2,3,4]

Output: true
\`\`\`

Explanation: The array can be partitioned as \`[1, 4]\` and \`[2, 3]\`.

**Example 2:**

\`\`\`java
Input: nums = [1,2,3,4,5]

Output: false
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 100\`
* \`1 <= nums[i] <= 50\``,

    "extra-edge": `You are given a connected **undirected graph** with \`n\` nodes labeled from \`1\` to \`n\`. Initially, it contained no cycles and consisted of \`n-1\` edges.

We have now added one additional edge to the graph. The edge has two **different** vertices chosen from \`1\` to \`n\`, and was not an edge that previously existed in the graph.

The graph is represented as an array \`edges\` of length \`n\` where \`edges[i] = [ai, bi]\` represents an edge between nodes \`ai\` and \`bi\` in the graph.

Return an edge that can be removed so that the graph is still a connected non-cyclical graph. If there are multiple answers, return the edge that appears last in the input \`edges\`.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/1a966522-e4d9-4215-18a1-4df7d26c3700/public)

\`\`\`java
Input: edges = [[1,2],[1,3],[3,4],[2,4]]

Output: [2,4]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/5cf17b17-8758-4f0a-8829-99cea143b100/public)

\`\`\`java
Input: edges = [[1,2],[1,3],[1,4],[3,4],[4,5]]

Output: [3,4]
\`\`\`

**Constraints:**
* \`n == edges.length\`
* \`3 <= n <= 100\`
* \`1 <= edges[i][0] < edges[i][1] <= edges.length\`
* There are no repeated edges and no self-loops in the input.`,

    "find-clone": `You are given an array of integers \`nums\` containing \`n + 1\` integers. Each integer in \`nums\` is in the range \`[1, n]\` inclusive.

Every integer appears **exactly once**, except for one integer which appears **two or more times**. Return the integer that appears more than once.

**Example 1:**

\`\`\`java
Input: nums = [1,2,3,2,2]

Output: 2
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [1,2,3,4,4]

Output: 4
\`\`\`

Follow-up: Can you solve the problem **without** modifying the array \`nums\` and using \$O(1)\$ extra space?

**Constraints:**
* \`1 <= n <= 10000\`
* \`nums.length == n + 1\`
* \`1 <= nums[i] <= n\``,

    "flight-path": `You are given a list of flight tickets \`tickets\` where \`tickets[i] = [from_i, to_i]\` represent the source airport and the destination airport. 

Each \`from_i\` and \`to_i\` consists of three uppercase English letters.

Reconstruct the itinerary in order and return it.

All of the tickets belong to someone who originally departed from \`"JFK"\`. Your objective is to reconstruct the flight path that this person took, assuming each ticket was used exactly once.

If there are multiple valid flight paths, return the lexicographically smallest one.
* For example, the itinerary \`["JFK", "SEA"]\` has a smaller lexical order than \`["JFK", "SFO"]\`.

You may assume all the tickets form at least one valid flight path.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e5ea2ea5-da22-4c22-a5c1-5840dab7fb00/public)

\`\`\`java
Input: tickets = [["BUF","HOU"],["HOU","SEA"],["JFK","BUF"]]

Output: ["JFK","BUF","HOU","SEA"]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9bfece1f-1fec-4618-4f95-31b2abcd3100/public)

\`\`\`java
Input: tickets = [["HOU","JFK"],["SEA","JFK"],["JFK","SEA"],["JFK","HOU"]]

Output: ["JFK","HOU","JFK","SEA","JFK"]
\`\`\`

Explanation: Another possible reconstruction is \`["JFK","SEA","JFK","HOU","JFK"]\` but it is lexicographically larger.

**Constraints:**
* \`1 <= tickets.length <= 300\`
* \`from_i != to_i\``,

    "flip-bits": `Given a 32-bit unsigned integer \`n\`, reverse the bits of the binary representation of \`n\` and return the result.

**Example 1:**

\`\`\`java
Input: n = 00000000000000000000000000010101

Output:    2818572288 (10101000000000000000000000000000)
\`\`\`

Explanation: Reversing \`00000000000000000000000000010101\`, which represents the unsigned integer \`21\`, gives us \`10101000000000000000000000000000\` which represents the unsigned integer \`2818572288\`.`,

    "flip-integer": `You are given a signed 32-bit integer \`x\`.
    
Return \`x\` after reversing each of its digits. After reversing, if \`x\` goes outside the signed 32-bit integer range \`[-2^31, 2^31 - 1]\`, then return \`0\` instead.

Solve the problem without using integers that are outside the signed 32-bit integer range.

**Example 1:**

\`\`\`java
Input: x = 1234

Output: 4321
\`\`\`

**Example 2:**

\`\`\`java
Input: x = -1234

Output: -4321
\`\`\`

**Example 3:**

\`\`\`java
Input: x = 1234236467

Output: 0
\`\`\`

**Constraints:**
* \`-2^31 <= x <= 2^31 - 1\``,

    "flip-list": `Given the beginning of a singly linked list \`head\`, reverse the list, and return the new beginning of the list.

**Example 1:**

\`\`\`java
Input: head = [0,1,2,3]

Output: [3,2,1,0]
\`\`\`

**Example 2:**

\`\`\`java
Input: head = []

Output: []
\`\`\`

**Constraints:**
* \`0 <= The length of the list <= 1000\`.
* \`-1000 <= Node.val <= 1000\``,

    "flood-volume": `You are given an array of non-negative integers \`height\` which represent an elevation map. Each value \`height[i]\` represents the height of a bar, which has a width of \`1\`.

Return the maximum area of water that can be trapped between the bars.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0c25cb81-1095-4382-fff2-6ef77c1fd100/public)

\`\`\`java
Input: height = [0,2,0,3,1,0,1,3,2,1]

Output: 9
\`\`\`

**Constraints:**
* \`1 <= height.length <= 1000\`
* \`0 <= height[i] <= 1000\``,

    "frame-maximum": `You are given an array of integers \`nums\` and an integer \`k\`. There is a sliding window of size \`k\` that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.

Return a list that contains the maximum element in the window at each step.

**Example 1:**

\`\`\`java
Input: nums = [1,2,1,0,4,2,6], k = 3

Output: [2,2,4,4,6]

Explanation: 
Window position            Max
---------------           -----
[1  2  1] 0  4  2  6        2
 1 [2  1  0] 4  2  6        2
 1  2 [1  0  4] 2  6        4
 1  2  1 [0  4  2] 6        4
 1  2  1  0 [4  2  6]       6
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 1000\`
* \`-10,000 <= nums[i] <= 10,000\`
* \`1 <= k <= nums.length\``,

    "gas-route": `There are \`n\` gas stations along a circular route. You are given two integer arrays \`gas\` and \`cost\` where:

* \`gas[i]\` is the amount of gas at the \`ith\` station.
* \`cost[i]\` is the amount of gas needed to travel from the \`ith\` station to the \`(i + 1)th\` station. (The last station is connected to the first station)

You have a car that can store an unlimited amount of gas, but you begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index such that you can travel around the circuit once in the clockwise direction. If it's impossible, then return \`-1\`.

It's guaranteed that at most one solution exists.

**Example 1:**

\`\`\`java
Input: gas = [1,2,3,4], cost = [2,2,4,1]

Output: 3
\`\`\`

Explanation: Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 1 + 1 = 4
Travel to station 1. Your tank = 4 - 2 + 2 = 4
Travel to station 2. Your tank = 4 - 2 + 3 = 5
Travel to station 3. Your tank = 5 - 4 + 4 = 5

**Example 2:**

\`\`\`java
Input: gas = [1,2,3], cost = [2,3,2]

Output: -1
\`\`\`

Explanation:
You can't start at station 0 or 1, since there isn't enough gas to travel to the next station.
If you start at station 2, you can move to station 0, and then station 1. 
At station 1 your tank = 0 + 3 - 2 + 1 - 2 = 0.
You're stuck at station 1, so you can't travel around the circuit.

**Constraints:**
* \`1 <= gas.length == cost.length <= 1000\`
* \`0 <= gas[i], cost[i] <= 1000\``,

    "gate-distance": `You are given a \$m \\times n\$ 2D \`grid\` initialized with these three possible values:

1. \`-1\` - A water cell that *can not* be traversed.
2. \`0\` - A treasure chest.
3. \`INF\` - A land cell that *can* be traversed. We use the integer \`2^31 - 1 = 2147483647\` to represent \`INF\`.

Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest then the value should remain \`INF\`.

Assume the grid can only be traversed up, down, left, or right.

Modify the \`grid\` **in-place**.

**Example 1:**

\`\`\`java
Input: [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]

Output: [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]
\`\`\`

**Example 2:**

\`\`\`java
Input: [
  [0,-1],
  [2147483647,2147483647]
]

Output: [
  [0,-1],
  [1,2]
]
\`\`\`

**Constraints:**
* \`m == grid.length\`
* \`n == grid[i].length\`
* \`1 <= m, n <= 100\`
* \`grid[i][j]\` is one of \`{-1, 0, 2147483647}\``,

    "good-nodes": `Within a binary tree, a node \`x\` is considered **good** if the path from the root of the tree to the node \`x\` contains no nodes with a value greater than the value of node \`x\`

Given the root of a binary tree \`root\`, return the number of **good** nodes within the tree.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9bf374f1-71fe-469e-2840-5d223d9d1b00/public)

\`\`\`java
Input: root = [2,1,1,3,null,1,5]

Output: 3
\`\`\`

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/8df65da7-abac-4948-9a92-0bc7a8dda100/public)

**Example 2:**

\`\`\`java
Input: root = [1,2,-1,3,4]

Output: 4
\`\`\`

**Constraints:**
* \`1 <= number of nodes in the tree <= 100\`
* \`-100 <= Node.val <= 100\``,

    "grid-hunt": `You are given an \`m x n\` 2-D integer array \`matrix\` and an integer \`target\`.

* Each row in \`matrix\` is sorted in *non-decreasing* order.
* The first integer of every row is greater than the last integer of the previous row.

Return \`true\` if \`target\` exists within \`matrix\` or \`false\` otherwise.

Can you write a solution that runs in \`O(log(m * n))\` time?

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/7ca61f56-00d4-4fa0-26cf-56809028ac00/public)

\`\`\`java
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

Output: true
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/f25f2085-ce04-4447-9cee-f0a66c32a300/public)

\`\`\`java
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15

Output: false
\`\`\`

**Constraints:**
* \`m == matrix.length\`
* \`n == matrix[i].length\`
* \`1 <= m, n <= 100\`
* \`-10000 <= matrix[i][j], target <= 10000\``,

    "grid-search": `Given a 2-D grid of characters \`board\` and a list of strings \`words\`, return all words that are present in the grid.

For a word to be present it must be possible to form the word with a path in the board with horizontally or vertically neighboring cells. The same cell may not be used more than once in a word.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/06435c8e-bac3-49f5-5df7-77fd5dd42800/public)

\`\`\`java
Input:
board = [
  ["a","b","c","d"],
  ["s","a","a","t"],
  ["a","c","k","e"],
  ["a","c","d","n"]
],
words = ["bat","cat","back","backend","stack"]

Output: ["cat","back","backend"]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/6f244a10-78bf-4a30-0a5f-b8f3e03ce000/public)

\`\`\`java
Input:
board = [
  ["x","o"],
  ["x","o"]
],
words = ["xoxo"]

Output: []
\`\`\`

**Constraints:**
* \`1 <= board.length, board[i].length <= 12\`
* \`board[i]\` consists only of lowercase English letter.
* \`1 <= words.length <= 30,000\`
* \`1 <= words[i].length <= 10\`
* \`words[i]\` consists only of lowercase English letters.
* All strings within \`words\` are distinct.`,

    "grid-valid": `You are given a \`9 x 9\` Sudoku board \`board\`. A Sudoku board is valid if the following rules are followed:

1. Each row must contain the digits \`1-9\` without duplicates.
2. Each column must contain the digits \`1-9\` without duplicates.
3. Each of the nine \`3 x 3\` sub-boxes of the grid must contain the digits \`1-9\` without duplicates.

Return \`true\` if the Sudoku board is valid, otherwise return \`false\`

Note: A board does not need to be full or be solvable to be valid.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0be40c5d-2d18-42b8-261b-13ca50de4100/public)

\`\`\`java
Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true
\`\`\`

**Example 2:**

\`\`\`java
Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: false
\`\`\`

Explanation: There are two 1's in the top-left 3x3 sub-box.

**Constraints:**
* \`board.length == 9\`
* \`board[i].length == 9\`
* \`board[i][j]\` is a digit \`1-9\` or \`'.'\`.`,

    "group-flip": `You are given the head of a singly linked list \`head\` and a positive integer \`k\`.

You must reverse the first \`k\` nodes in the linked list, and then reverse the next \`k\` nodes, and so on. If there are fewer than \`k\` nodes left, leave the nodes as they are.

Return the modified list after reversing the nodes in each group of \`k\`.

You are only allowed to modify the nodes' \`next\` pointers, not the values of the nodes.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/67cf2fff-f20a-4558-6091-c3e857f56e00/public)

\`\`\`java
Input: head = [1,2,3,4,5,6], k = 3

Output: [3,2,1,6,5,4]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/af843e59-df12-4c55-652b-6ddab0a92900/public)

\`\`\`java
Input: head = [1,2,3,4,5], k = 3

Output: [3,2,1,4,5]
\`\`\`

**Constraints:**
* The length of the linked list is \`n\`.
* \`1 <= k <= n <= 100\`
* \`0 <= Node.val <= 100\``,

    "half-search": `You are given an array of **distinct** integers \`nums\`, sorted in ascending order, and an integer \`target\`.
    
Implement a function to search for \`target\` within \`nums\`. If it exists, then return its index, otherwise, return \`-1\`.

Your solution must run in \$O(log n)\$ time.

**Example 1:**

\`\`\`java
Input: nums = [-1,0,2,4,6,8], target = 4

Output: 3
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [-1,0,2,4,6,8], target = 3

Output: -1
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 10000\`.
* \`-10000 < nums[i], target < 10000\`
* All the integers in \`nums\` are **unique**.`,

    "happy-loop": `A **non-cyclical number** is an integer defined by the following algorithm:

* Given a positive integer, replace it with the sum of the squares of its digits.
* Repeat the above step until the number equals \`1\`, or it **loops infinitely in a cycle** which does not include \`1\`.
* If it stops at \`1\`, then the number is a **non-cyclical number**.

Given a positive integer \`n\`, return \`true\` if it is a **non-cyclical number**, otherwise return \`false\`.

**Example 1:**

\`\`\`java
Input: n = 100

Output: true
\`\`\`

Explanation: 1^2 + 0^2 + 0^2 = 1

**Example 2:**

\`\`\`java
Input: n = 101

Output: false
\`\`\`

Explanation:
1^2 + 0^2 + 1^2 = 2
2^2 = 4
4^2 = 16
1^2 + 6^2 = 37
3^2 + 7^2 = 58
5^2 + 8^2 = 89
8^2 + 9^2 = 145
1^2 + 4^2 + 5^2 = 42
4^2 + 2^2 = 20
2^2 + 0^2 = 4 (This number has already been seen)

**Constraints:**
* \`1 <= n <= 1000\``,

    "heat-wave": `You are given an array of integers \`temperatures\` where \`temperatures[i]\` represents the daily temperatures on the \`ith\` day.
    
Return an array \`result\` where \`result[i]\` is the number of days after the \`ith\` day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the \`ith\` day, set \`result[i]\` to \`0\` instead.

**Example 1:**

\`\`\`java
Input: temperatures = [30,38,30,36,35,40,28]

Output: [1,4,1,2,1,0,0]
\`\`\`

**Example 2:**

\`\`\`java
Input: temperatures = [22,21,20]

Output: [0,0,0]
\`\`\`

**Constraints:**
* \`1 <= temperatures.length <= 1000\`.
* \`1 <= temperatures[i] <= 100\``,

    "hidden-pattern": `You are given two strings \`s1\` and \`s2\`.
    
Return \`true\` if \`s2\` contains a permutation of \`s1\`, or \`false\` otherwise. That means if a permutation of \`s1\` exists as a substring of \`s2\`, then return \`true\`.

Both strings only contain lowercase letters.

**Example 1:**

\`\`\`java
Input: s1 = "abc", s2 = "lecabee"

Output: true
\`\`\`

Explanation: The substring \`"cab"\` is a permutation of \`"abc"\` and is present in \`"lecabee"\`.

**Example 2:**

\`\`\`java
Input: s1 = "abc", s2 = "lecaabee"

Output: false
\`\`\`

**Constraints:**
* \`1 <= s1.length, s2.length <= 1000\``,

    "home-heist": `You are given an integer array \`nums\` where \`nums[i]\` represents the amount of money the \`i\`th house has. The houses are arranged in a straight line, i.e. the \`i\`th house is the neighbor of the \`(i-1)\`th and \`(i+1)\`th house.

You are planning to rob money from the houses, but you cannot rob **two adjacent houses** because the security system will automatically alert the police if two adjacent houses were *both* broken into.

Return the *maximum* amount of money you can rob **without** alerting the police.

**Example 1:**

\`\`\`java
Input: nums = [1,1,3,3]

Output: 4
\`\`\`

Explanation: \`nums[0] + nums[2] = 1 + 3 = 4\`.

**Example 2:**

\`\`\`java
Input: nums = [2,9,8,3,6]

Output: 16
\`\`\`

Explanation: \`nums[0] + nums[2] + nums[4] = 2 + 8 + 6 = 16\`.

**Constraints:**
* \`1 <= nums.length <= 100\`
* \`0 <= nums[i] <= 100\``,

    "home-heist-2": `You are given an integer array \`nums\` where \`nums[i]\` represents the amount of money the \`i\`th house has. The houses are arranged in a circle, i.e. the first house and the last house are neighbors.

You are planning to rob money from the houses, but you cannot rob **two adjacent houses** because the security system will automatically alert the police if two adjacent houses were *both* broken into.
    
Return the *maximum* amount of money you can rob **without** alerting the police.

**Example 1:**

\`\`\`java
Input: nums = [3,4,3]

Output: 4
\`\`\`

Explanation: You cannot rob \`nums[0] + nums[2] = 6\` because \`nums[0]\` and \`nums[2]\` are adjacent houses. The maximum you can rob is \`nums[1] = 4\`.

**Example 2:**

\`\`\`java
Input: nums = [2,9,8,3,6]

Output: 15
\`\`\`

Explanation: You cannot rob \`nums[0] + nums[2] + nums[4] = 16\` because \`nums[0]\` and \`nums[4]\` are adjacent houses. The maximum you can rob is \`nums[1] + nums[4] = 15\`.

**Constraints:**
* \`1 <= nums.length <= 100\`
* \`0 <= nums[i] <= 100\``,

    "insert-range": `You are given an array of non-overlapping intervals \`intervals\` where \`intervals[i] = [start_i, end_i]\` represents the start and the end time of the \`ith\` interval. \`intervals\` is initially sorted in ascending order by \`start_i\`.

You are given another interval \`newInterval = [start, end]\`.

Insert \`newInterval\` into \`intervals\` such that \`intervals\` is still sorted in ascending order by \`start_i\` and also \`intervals\` still does not have any overlapping intervals. You may merge the overlapping intervals if needed.

Return \`intervals\` after adding \`newInterval\`.

Note: Intervals are *non-overlapping* if they have no common point. For example, [1,2] and [3,4] are non-overlapping, but [1,2] and [2,3] are overlapping.

**Example 1:**

\`\`\`java
Input: intervals = [[1,3],[4,6]], newInterval = [2,5]

Output: [[1,6]]
\`\`\`

**Example 2:**

\`\`\`java
Input: intervals = [[1,2],[3,5],[9,10]], newInterval = [6,7]

Output: [[1,2],[3,5],[6,7],[9,10]]
\`\`\`

**Constraints:**
* \`0 <= intervals.length <= 1000\`
* \`newInterval.length == intervals[i].length == 2\`
* \`0 <= start <= end <= 1000\``,

    "island-count": `Given a 2D grid \`grid\` where \`'1'\` represents land and \`'0'\` represents water, count and return the number of islands.

An **island** is formed by connecting adjacent lands horizontally or vertically and is surrounded by water. You may assume water is surrounding the grid (i.e., all the edges are water).   

**Example 1:**

\`\`\`java
Input: grid = [
    ["0","1","1","1","0"],
    ["0","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
Output: 1
\`\`\`

**Example 2:**

\`\`\`java
Input: grid = [
    ["1","1","0","0","1"],
    ["1","1","0","0","1"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
Output: 4
\`\`\`

**Constraints:**
* \`1 <= grid.length, grid[i].length <= 100\`
* \`grid[i][j]\` is \`'0'\` or \`'1'\`.`,

    "jump-count": `You are given an array of integers \`nums\`, where \`nums[i]\` represents the maximum length of a jump towards the right from index \`i\`. For example, if you are at \`nums[i]\`, you can jump to any index \`i + j\` where:

* \`j <= nums[i]\`
* \`i + j < nums.length\`

You are initially positioned at \`nums[0]\`.

Return the minimum number of jumps to reach the last position in the array (index \`nums.length - 1\`). You may assume there is always a valid answer.

**Example 1:**

\`\`\`java
Input: nums = [2,4,1,1,1,1]

Output: 2
\`\`\`

Explanation: Jump from index \`0\` to index \`1\`, then jump from index \`1\` to the last index.

**Example 2:**

\`\`\`java
Input: nums = [2,1,2,1,0]

Output: 2
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 1000\`
* \`0 <= nums[i] <= 100\``,

    "jump-reach": `You are given an integer array \`nums\` where each element \`nums[i]\` indicates your maximum jump length at that position.

Return \`true\` if you can reach the last index starting from index \`0\`, or \`false\` otherwise.

**Example 1:**

\`\`\`java
Input: nums = [1,2,0,1,0]

Output: true
\`\`\`

Explanation: First jump from index 0 to 1, then from index 1 to 3, and lastly from index 3 to 4.

**Example 2:**

\`\`\`java
Input: nums = [1,2,1,0,1]

Output: false
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 1000\`
* \`0 <= nums[i] <= 1000\``,

    "kth-array": `Given an unsorted array of integers \`nums\` and an integer \`k\`, return the \`kth\` largest element in the array.

By \`kth\` largest element, we mean the \`kth\` largest element in the sorted order, not the \`kth\` distinct element.

Follow-up: Can you solve it without sorting?

**Example 1:**

\`\`\`java
Input: nums = [2,3,1,5,4], k = 2

Output: 4
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [2,3,1,1,5,5,4], k = 3

Output: 4
\`\`\`

**Constraints:**
* \`1 <= k <= nums.length <= 10000\`
* \`-1000 <= nums[i] <= 1000\``,

    "kth-smallest": `Given the \`root\` of a binary search tree, and an integer \`k\`, return the \`kth\` smallest value (**1-indexed**) in the tree.

A **binary search tree** satisfies the following constraints:    
* The left subtree of every node contains only nodes with keys **less than** the node's key.
* The right subtree of every node contains only nodes with keys **greater than** the node's key.
* Both the left and right subtrees are also binary search trees.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/02eca3db-f72f-4277-7134-faec4f02e500/public)

\`\`\`java
Input: root = [2,1,3], k = 1

Output: 1
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/dca6c42d-2327-4036-f7f2-3e99d8203100/public)

\`\`\`java
Input: root = [4,3,5,2,null], k = 4

Output: 5
\`\`\`

**Constraints:**
* \`1 <= k <= The number of nodes in the tree <= 1000\`.
* \`0 <= Node.val <= 1000\``,

    "kth-stream": `Design a class to find the \`kth\` largest integer in a stream of values, including duplicates. E.g. the \`2nd\` largest from [1, 2, 3, 3] is \`3\`. The stream is not necessarily sorted.

Implement the following methods:
* \`constructor(int k, int[] nums)\` Initializes the object given an integer \`k\` and the stream of integers \`nums\`.
* \`int add(int val)\` Adds the integer \`val\` to the stream and returns the \`kth\` largest integer in the stream.

**Example 1:**

\`\`\`java
Input:
["KthLargest", [3, [1, 2, 3, 3]], "add", [3], "add", [5], "add", [6], "add", [7], "add", [8]]

Output:
[null, 3, 3, 3, 5, 6]

Explanation:
KthLargest kthLargest = new KthLargest(3, [1, 2, 3, 3]);
kthLargest.add(3);   // return 3
kthLargest.add(5);   // return 3
kthLargest.add(6);   // return 3
kthLargest.add(7);   // return 5
kthLargest.add(8);   // return 6
\`\`\`

**Constraints:**
* \`1 <= k <= 1000\`
* \`0 <= nums.length <= 1000\`
* \`-1000 <= nums[i] <= 1000\`
* \`-1000 <= val <= 1000\`
* There will always be at least \`k\` integers in the stream when you search for the \`kth\` integer.`,

    "label-split": `You are given a string \`s\` consisting of lowercase english letters. 
    
We want to split the string into as many substrings as possible, while ensuring that each letter appears in at most one substring.

Return a list of integers representing the size of these substrings in the order they appear in the string.

**Example 1:**

\`\`\`java
Input: s = "xyxxyzbzbbisl"

Output: [5, 5, 1, 1, 1]
\`\`\`

Explanation: The string can be split into \`["xyxxy", "zbzbb", "i", "s", "l"]\`.

**Example 2:**

\`\`\`java
Input: s = "abcabc"

Output: [6]
\`\`\`

**Constraints:**
* \`1 <= s.length <= 100\``,

    "letter-shuffle": `Given two strings \`s\` and \`t\`, return \`true\` if the two strings are anagrams of each other, otherwise return \`false\`.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

**Example 1:**

\`\`\`java
Input: s = "racecar", t = "carrace"

Output: true
\`\`\`

**Example 2:**

\`\`\`java
Input: s = "jar", t = "jam"

Output: false
\`\`\`

**Constraints:**
* \`s\` and \`t\` consist of lowercase English letters.`,

    "level-scan": `Given a binary tree \`root\`, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a4639809-0754-4eda-221f-a4cd58bd9c00/public)

\`\`\`java
Input: root = [1,2,3,4,5,6,7]

Output: [[1],[2,3],[4,5,6,7]]
\`\`\`

**Example 2:**

\`\`\`java
Input: root = [1]

Output: [[1]]
\`\`\`

**Example 3:**

\`\`\`java
Input: root = []

Output: []
\`\`\`

**Constraints:**
* \`0 <= The number of nodes in the tree <= 1000\`.
* \`-1000 <= Node.val <= 1000\``,

    "long-increase": `Given an integer array \`nums\`, return the *length* of the longest strictly *increasing* subsequence.

A **subsequence** is a sequence that can be derived from the given sequence by deleting some or no elements  without changing the relative order of the remaining characters.

* For example, \`"cat"\` is a subsequence of \`"crabt"\`.

**Example 1:**

\`\`\`java
Input: nums = [9,1,4,2,3,3,7]

Output: 4
\`\`\`

Explanation: The longest increasing subsequence is [1,2,3,7], which has a length of 4.

**Example 2:**

\`\`\`java
Input: nums = [0,3,1,3,2,3]

Output: 4
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 1000\`
* \`-1000 <= nums[i] <= 1000\``,

    "long-palindrome": `Given a string \`s\`, return the longest substring of \`s\` that is a *palindrome*.

A **palindrome** is a string that reads the same forward and backward.

If there are multiple palindromic substrings that have the same length, return any one of them.

**Example 1:**

\`\`\`java
Input: s = "ababd"

Output: "bab"
\`\`\`

Explanation: Both "aba" and "bab" are valid answers.

**Example 2:**

\`\`\`java
Input: s = "abbc"

Output: "bb"
\`\`\`

**Constraints:**
* \`1 <= s.length <= 1000\`
* \`s\` contains only digits and English letters.`,

    "loop-check": `Given the beginning of a linked list \`head\`, return \`true\` if there is a cycle in the linked list. Otherwise, return \`false\`.

There is a cycle in a linked list if at least one node in the list can be visited again by following the \`next\` pointer.

Internally, \`index\` determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's \`next\` pointer to the \`index-th\` node. If \`index = -1\`, then the tail node points to \`null\` and no cycle exists.

**Note:** \`index\` is **not** given to you as a parameter.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/3ecdbcfc-70fc-429a-4654-cf4f6a7dbe00/public)

\`\`\`java
Input: head = [1,2,3,4], index = 1

Output: true
\`\`\`

Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/89e6716c-9f65-46da-d7b2-f04a93269700/public)

\`\`\`java
Input: head = [1,2], index = -1

Output: false
\`\`\`

**Constraints:**
* \`1 <= Length of the list <= 1000\`.
* \`-1000 <= Node.val <= 1000\`
* \`index\` is \`-1\` or a valid index in the linked list.`,

    "matrix-climb": `You are given a 2-D grid of integers \`matrix\`, where each integer is greater than or equal to \`0\`. 
    
Return the length of the longest strictly increasing path within \`matrix\`.

From each cell within the path, you can move either horizontally or vertically. You **may not** move **diagonally**.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c302dea2-1695-4edb-e1b3-91e96d9bb700/public)

\`\`\`java
Input: matrix = [[5,5,3],[2,3,6],[1,1,1]]

Output: 4
\`\`\`

Explanation: The longest increasing path is \`[1, 2, 3, 6]\` or \`[1, 2, 3, 5]\`.

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/72004ec9-6f68-464c-93c1-0ba0b384c700/public)

\`\`\`java
Input: matrix = [[1,2,3],[2,1,4],[7,6,5]]

Output: 7
\`\`\`

Explanation: The longest increasing path is \`[1, 2, 3, 4, 5, 6, 7]\`.

**Constraints:**
* \`1 <= matrix.length, matrix[i].length <= 100\``,

    "max-basin": `You are given an integer array \`heights\` where \`heights[i]\` represents the height of the \$i^{th}\$ bar.

You may choose any two bars to form a container. Return the *maximum* amount of water a container can store.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/77f004c6-e773-4e63-7b99-a2309303c700/public)

\`\`\`java
Input: height = [1,7,2,5,4,7,3,6]

Output: 36
\`\`\`

**Example 2:**

\`\`\`java
Input: height = [2,2,2]

Output: 4
\`\`\`

**Constraints:**
* \`2 <= height.length <= 1000\`
* \`0 <= height[i] <= 1000\``,

    "max-island": `You are given a matrix \`grid\` where \`grid[i]\` is either a \`0\` (representing water) or \`1\` (representing land).
    
An island is defined as a group of \`1\`'s connected horizontally or vertically. You may assume all four edges of the grid are surrounded by water.

The **area** of an island is defined as the number of cells within the island.

Return the maximum **area** of an island in \`grid\`. If no island exists, return \`0\`.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/8eeb491c-c8ff-4ed6-78ed-ce4cf87d7200/public)

\`\`\`java
Input: grid = [
  [0,1,1,0,1],
  [1,0,1,0,1],
  [0,1,1,0,1],
  [0,1,0,0,1]
]

Output: 6
\`\`\`
Explanation: \`1\`'s cannot be connected diagonally, so the maximum area of the island is \`6\`.

**Constraints:**
* \`1 <= grid.length, grid[i].length <= 50\``,

    "max-multiply": `Given an integer array \`nums\`, find a **subarray** that has the largest product within the array and return it.

A **subarray** is a contiguous non-empty sequence of elements within an array.

You can assume the output will fit into a **32-bit** integer.

**Example 1:**

\`\`\`java
Input: nums = [1,2,-3,4]

Output: 4
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [-2,-1]

Output: 2
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 1000\`
* \`-10 <= nums[i] <= 10\``,

    "max-path": `Given the \`root\` of a *non-empty* binary tree, return the maximum **path sum** of any *non-empty* path.

A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can *not* appear in the sequence more than once. The path does *not* necessarily need to include the root.

The **path sum** of a path is the sum of the node's values in the path.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9896b041-9021-44c2-ab3e-5cff76adf100/public)

\`\`\`java
Input: root = [1,2,3]

Output: 6
\`\`\`

Explanation: The path is 2 -> 1 -> 3 with a sum of 2 + 1 + 3 = 6.

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/19ce1187-387e-4323-f2c9-1a317ab36200/public)

\`\`\`java
Input: root = [-15,10,20,null,null,15,5,-5]

Output: 40
\`\`\`

Explanation: The path is 15 -> 20 -> 5 with a sum of 15 + 20 + 5 = 40.

**Constraints:**
* \`1 <= The number of nodes in the tree <= 1000\`.
* \`-1000 <= Node.val <= 1000\``,

    "max-same-char": `You are given a string \`s\` consisting of only uppercase english characters and an integer \`k\`. You can choose up to \`k\` characters of the string and replace them with any other uppercase English character.

After performing at most \`k\` replacements, return the length of the longest substring which contains only one distinct character.

**Example 1:**

\`\`\`java
Input: s = "XYYX", k = 2

Output: 4
\`\`\`

Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

**Example 2:**

\`\`\`java
Input: s = "AAABABB", k = 1

Output: 5
\`\`\`

**Constraints:**
* \`1 <= s.length <= 1000\`
* \`0 <= k <= s.length\``,

    "max-segment": `Given an array of integers \`nums\`, find the subarray with the largest sum and return the sum.

A **subarray** is a contiguous non-empty sequence of elements within an array.

**Example 1:**

\`\`\`java
Input: nums = [2,-3,4,-2,2,1,-1,4]

Output: 8
\`\`\`

Explanation: The subarray [4,-2,2,1,-1,4] has the largest sum 8.

**Example 2:**

\`\`\`java
Input: nums = [-1]

Output: -1
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 1000\`
* \`-1000 <= nums[i] <= 1000\``,

    "memory-cache": `Implement the [Least Recently Used (LRU)](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU) cache class \`LRUCache\`. The class should support the following operations

* \`LRUCache(int capacity)\` Initialize the LRU cache of size \`capacity\`.
* \`int get(int key)\` Return the value corresponding to the \`key\` if the \`key\` exists, otherwise return \`-1\`.
* \`void put(int key, int value)\` Update the \`value\` of the \`key\` if the \`key\` exists. Otherwise, add the \`key\`-\`value\` pair to the cache. If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.

A key is considered used if a \`get\` or a \`put\` operation is called on it.

Ensure that \`get\` and \`put\` each run in \$O(1)\$ average time complexity.

**Example 1:**

\`\`\`java
Input:
["LRUCache", [2], "put", [1, 10],  "get", [1], "put", [2, 20], "put", [3, 30], "get", [2], "get", [1]]

Output:
[null, null, 10, null, null, 20, -1]

Explanation:
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 10);  // cache: {1=10}
lRUCache.get(1);      // return 10
lRUCache.put(2, 20);  // cache: {1=10, 2=20}
lRUCache.put(3, 30);  // cache: {2=20, 3=30}, key=1 was evicted
lRUCache.get(2);      // returns 20 
lRUCache.get(1);      // return -1 (not found)
\`\`\`

**Constraints:**
* \`1 <= capacity <= 100\`
* \`0 <= key <= 1000\`
* \`0 <= value <= 1000\``,

    "merge-many": `You are given an array of \`k\` linked lists \`lists\`, where each list is sorted in ascending order.

Return the **sorted** linked list that is the result of merging all of the individual linked lists.

**Example 1:**

\`\`\`java
Input: lists = [[1,2,4],[1,3,5],[3,6]]

Output: [1,1,2,3,3,4,5,6]
\`\`\`

**Example 2:**

\`\`\`java
Input: lists = []

Output: []
\`\`\`

**Example 3:**

\`\`\`java
Input: lists = [[]]

Output: []
\`\`\`

**Constraints:**
* \`0 <= lists.length <= 1000\`
* \`0 <= lists[i].length <= 100\`
* \`-1000 <= lists[i][j] <= 1000\``,

    "merge-pair": `You are given the heads of two sorted linked lists \`list1\` and \`list2\`.

Merge the two lists into one **sorted** linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from \`list1\` and \`list2\`.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/51adfea9-493a-4abb-ece7-fbb359d1c800/public)

\`\`\`java
Input: list1 = [1,2,4], list2 = [1,3,5]

Output: [1,1,2,3,4,5]
\`\`\`

**Example 2:**

\`\`\`java
Input: list1 = [], list2 = [1,2]

Output: [1,2]
\`\`\`

**Example 3:**

\`\`\`java
Input: list1 = [], list2 = []

Output: []
\`\`\`

**Constraints:**
* \`0 <= The length of the each list <= 100\`.
* \`-100 <= Node.val <= 100\``,

    "merge-ranges": `Given an array of \`intervals\` where \`intervals[i] = [start_i, end_i]\`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

You may return the answer in **any order**.

Note: Intervals are *non-overlapping* if they have no common point. For example, \`[1, 2]\` and \`[3, 4]\` are non-overlapping, but \`[1, 2]\` and \`[2, 3]\` are overlapping.

**Example 1:**

\`\`\`java
Input: intervals = [[1,3],[1,5],[6,7]]

Output: [[1,5],[6,7]]
\`\`\`

**Example 2:**

\`\`\`java
Input: intervals = [[1,2],[2,3]]

Output: [[1,3]]
\`\`\`

**Constraints:**
* \`1 <= intervals.length <= 1000\`
* \`intervals[i].length == 2\`
* \`0 <= start <= end <= 1000\``,

    "middle-ground": `You are given two integer arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, where each is sorted in ascending order. Return the [median](https://en.wikipedia.org/wiki/Median) value among all elements of the two arrays.

Your solution must run in \$O(log (m+n))\$ time.

**Example 1:**

\`\`\`java
Input: nums1 = [1,2], nums2 = [3]

Output: 2.0
\`\`\`

Explanation: Among \`[1, 2, 3]\` the median is 2.

**Example 2:**

\`\`\`java
Input: nums1 = [1,3], nums2 = [2,4]

Output: 2.5
\`\`\`

Explanation: Among \`[1, 2, 3, 4]\` the median is (2 + 3) / 2 = 2.5.

**Constraints:**
* \`nums1.length == m\`
* \`nums2.length == n\`
* \`0 <= m <= 1000\`
* \`0 <= n <= 1000\`
* \`-10^6 <= nums1[i], nums2[i] <= 10^6\``,

    "mini-stack": `Design a stack class that supports the \`push\`, \`pop\`, \`top\`, and \`getMin\` operations.

* \`MinStack()\` initializes the stack object.
* \`void push(int val)\` pushes the element \`val\` onto the stack.
* \`void pop()\` removes the element on the top of the stack.
* \`int top()\` gets the top element of the stack.
* \`int getMin()\` retrieves the minimum element in the stack.

Each function should run in \$O(1)\$ time.

**Example 1:**

\`\`\`java
Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
\`\`\`

**Constraints:**
* \`-2^31 <= val <= 2^31 - 1\`.
* \`pop\`, \`top\` and \`getMin\` will always be called on **non-empty** stacks.`,

    "mirror-check": `Given a string \`s\`, return \`true\` if it is a **palindrome**, otherwise return \`false\`.
    
A **palindrome** is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

**Note:** Alphanumeric characters consist of letters \`(A-Z, a-z)\` and numbers \`(0-9)\`.

**Example 1:**

\`\`\`java
Input: s = "Was it a car or a cat I saw?"

Output: true
\`\`\`

Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

**Example 2:**

\`\`\`java
Input: s = "tab a cat"

Output: false
\`\`\`

Explanation: "tabacat" is not a palindrome.

**Constraints:**
* \`1 <= s.length <= 1000\`
* \`s\` is made up of only printable ASCII characters.`,

    "mirror-tree": `You are given the root of a binary tree \`root\`. Invert the binary tree and return its root.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/ac124ee6-207f-41f6-3aaa-dfb35815f200/public)

\`\`\`java
Input: root = [1,2,3,4,5,6,7]

Output: [1,3,2,7,6,5,4]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e39e8d4f-9946-4f99-ee3d-0d4df08d4d00/public)

\`\`\`java
Input: root = [3,2,1]

Output: [3,1,2]
\`\`\`

**Example 3:**

\`\`\`java
Input: root = []

Output: []
\`\`\`

**Constraints:**
* \`0 <= The number of nodes in the tree <= 100\`.
* \`-100 <= Node.val <= 100\``,

    "missing-one": `Given an array \`nums\` containing \`n\` integers in the range \`[0, n]\` without any duplicates, return the single number in the range that is missing from \`nums\`.

**Follow-up**: Could you implement a solution using only \`O(1)\` extra space complexity and \`O(n)\` runtime complexity?

**Example 1:**

\`\`\`java
Input: nums = [1,2,3]

Output: 0
\`\`\`

Explanation: Since there are 3 numbers, the range is [0,3]. The missing number is 0 since it does not appear in nums.

**Example 2:**

\`\`\`java
Input: nums = [0,2]

Output: 1
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 1000\``,

    "most-common": `Given an integer array \`nums\` and an integer \`k\`, return the \`k\` most frequent elements within the array.

The test cases are generated such that the answer is always **unique**.

You may return the output in **any order**.

**Example 1:**

\`\`\`java
Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [7,7], k = 1

Output: [7]
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 10^4\`.
* \`-1000 <= nums[i] <= 1000\`
* \`1 <= k <= number of distinct elements in nums\`.`,

    "multiply-rest": `Given an integer array \`nums\`, return an array \`output\` where \`output[i]\` is the product of all the elements of \`nums\` except \`nums[i]\`.

Each product is **guaranteed** to fit in a **32-bit** integer.   

Follow-up: Could you solve it in \$O(n)\$ time without using the division operation?

**Example 1:**

\`\`\`java
Input: nums = [1,2,4,6]

Output: [48,24,12,8]
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
\`\`\`

**Constraints:**
* \`2 <= nums.length <= 1000\`
* \`-20 <= nums[i] <= 20\``,

    "nearest-points": `You are given an 2-D array \`points\` where \`points[i] = [xi, yi]\` represents the coordinates of a point on an X-Y axis plane. You are also given an integer \`k\`.
    
Return the \`k\` closest points to the origin \`(0, 0)\`. 

The distance between two points is defined as the Euclidean distance (\`sqrt((x1 - x2)^2 + (y1 - y2)^2))\`.

You may return the answer in **any order**.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/ffe90895-5c8e-47f1-6719-d5c0f656d700/public)

\`\`\`java
Input: points = [[0,2],[2,2]], k = 1

Output: [[0,2]]
\`\`\`

Explanation : The distance between \`(0, 2)\` and the origin \`(0, 0)\` is \`2\`. The distance between \`(2, 2)\` and the origin is \`sqrt(2^2 + 2^2) = 2.82842\`. So the closest point to the origin is \`(0, 2)\`.

**Example 2:**

\`\`\`java
Input: points = [[0,2],[2,0],[2,2]], k = 2

Output: [[0,2],[2,0]]
\`\`\`

Explanation: The output \`[2,0],[0,2]\` would also be accepted.

**Constraints:**
* \`1 <= k <= points.length <= 1000\`
* \`-100 <= points[i][0], points[i][1] <= 100\``,

    "no-op-add": `Given two integers \`a\` and \`b\`, return the sum of the two integers without using the \`+\` and \`-\` operators.

**Example 1:**

\`\`\`java
Input: a = 1, b = 1

Output: 2
\`\`\`

**Example 2:**

\`\`\`java
Input: a = 4, b = 7

Output: 11
\`\`\`

**Constraints:**
* \`-1000 <= a, b <= 1000\``,

    "ocean-flow": `You are given a rectangular island \`heights\` where \`heights[r][c]\` represents the **height above sea level** of the cell at coordinate \`(r, c)\`.
    
The islands borders the **Pacific Ocean** from the top and left sides, and borders the **Atlantic Ocean** from the bottom and right sides.

Water can flow in **four directions** (up, down, left, or right) from a cell to a neighboring cell with **height equal or lower**. Water can also flow into the ocean from cells adjacent to the ocean.

Find all cells where water can flow from that cell to **both** the Pacific and Atlantic oceans. Return it as a **2D list** where each element is a list \`[r, c]\` representing the row and column of the cell. You may return the answer in **any order**.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/3899fae1-ab18-4d6b-15b4-c7f7aa224700/public)

\`\`\`java
Input: heights = [
  [4,2,7,3,4],
  [7,4,6,4,7],
  [6,3,5,3,6]
]

Output: [[0,2],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0]]
\`\`\`

**Example 2:**

\`\`\`java
Input: heights = [[1],[1]]

Output: [[0,0],[0,1]]
\`\`\`

**Constraints:**
* \`1 <= heights.length, heights[r].length <= 100\`
* \`0 <= heights[r][c] <= 1000\``,

    "pack-tree": `Implement an algorithm to serialize and deserialize a binary tree.

Serialization is the process of converting an in-memory structure into a sequence of bits so that it can be stored or sent across a network to be reconstructed later in another computer environment.

You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure. There is no additional restriction on how your serialization/deserialization algorithm should work.

**Note:** The input/output format in the examples is the same as how NeetCode serializes a binary tree. You do not necessarily need to follow this format.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a9dfb17f-70e9-42a3-ba97-33cfd82f6100/public)

\`\`\`java
Input: root = [1,2,3,null,null,4,5]

Output: [1,2,3,null,null,4,5]
\`\`\`

**Example 2:**

\`\`\`java
Input: root = []

Output: []
\`\`\`

**Constraints:**
* \`0 <= The number of nodes in the tree <= 1000\`.
* \`-1000 <= Node.val <= 1000\``,

    "pair-hunt": `Given an array of integers \`nums\` and an integer \`target\`, return the indices \`i\` and \`j\` such that \`nums[i] + nums[j] == target\` and \`i != j\`.
    
You may assume that *every* input has exactly one pair of indices \`i\` and \`j\` that satisfy the condition.

Return the answer with the smaller index first. 

**Example 1:**

\`\`\`java
Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
\`\`\`

Explanation: \`nums[0] + nums[1] == 7\`, so we return \`[0, 1]\`.

**Example 2:**

\`\`\`java
Input: nums = [4,5,6], target = 10

Output: [0,2]
\`\`\`

**Example 3:**

\`\`\`java
Input: nums = [5,5], target = 10

Output: [0,1]
\`\`\`

**Constraints:**
* \`2 <= nums.length <= 1000\`
* \`-10,000,000 <= nums[i] <= 10,000,000\`
* \`-10,000,000 <= target <= 10,000,000\`
* **Only one valid answer exists.**`,

    "path-count": `There is an \`m x n\` grid where you are allowed to move either down or to the right at any point in time.

Given the two integers \`m\` and \`n\`, return the number of possible unique paths that can be taken from the top-left corner of the grid (\`grid[0][0]\`) to the bottom-right corner (\`grid[m - 1][n - 1]\`).

You may assume the output will fit in a **32-bit** integer.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/7eddce4e-2fc4-4c3a-bb0f-9d1060243500/public)

\`\`\`java
Input: m = 3, n = 6

Output: 21
\`\`\`

**Example 2:**

\`\`\`java
Input: m = 3, n = 3

Output: 6
\`\`\`

**Constraints:**
* \`1 <= m, n <= 100\``,

    "pattern-match": `You are given an input string \`s\` consisting of lowercase english letters, and a pattern \`p\` consisting of lowercase english letters, as well as \`'.'\`, and \`'*'\` characters.
    
Return \`true\` if the pattern matches the **entire** input string, otherwise return \`false\`.

* \`'.'\` Matches any single character
* \`'*'\` Matches zero or more of the preceding element.

**Example 1:**

\`\`\`java
Input: s = "aa", p = ".b"

Output: false
\`\`\`

Explanation: Regardless of which character we choose for the \`'.'\` in the pattern, we cannot match the second character in the input string.

**Example 2:**

\`\`\`java
Input: s = "nnn", p = "n*"

Output: true
\`\`\`

Explanation: \`'*'\` means zero or more of the preceding element, \`'n'\`. We choose \`'n'\` to repeat three times.

**Example 3:**

\`\`\`java
Input: s = "xyz", p = ".*z"

Output: true
\`\`\`

Explanation: The pattern \`".*"\` means zero or more of any character, so we choose \`".."\` to match \`"xy"\` and \`"z"\` to match \`"z"\`.

**Constraints:**
* \`1 <= s.length <= 20\`
* \`1 <= p.length <= 20\`
* Each appearance of \`'*'\`, will be preceded by a valid character or \`'.'\`.`,

    "peak-profit": `You are given an integer array \`prices\` where \`prices[i]\` is the price of NeetCoin on the \`ith\` day.

You may choose a **single day** to buy one NeetCoin and choose a **different day in the future** to sell it.

Return the maximum profit you can achieve. You may choose to **not make any transactions**, in which case the profit would be \`0\`.

**Example 1:**

\`\`\`java
Input: prices = [10,1,5,6,7,1]

Output: 6
\`\`\`
Explanation: Buy \`prices[1]\` and sell \`prices[4]\`, \`profit = 7 - 1 = 6\`.

**Example 2:**

\`\`\`java
Input: prices = [10,8,7,5,2]

Output: 0
\`\`\`

Explanation: No profitable transactions can be made, thus the max profit is 0.

**Constraints:**
* \`1 <= prices.length <= 100\`
* \`0 <= prices[i] <= 100\``,

    "phone-letters": `You are given a string \`digits\` made up of digits from \`2\` through \`9\` inclusive.

Each digit (not including 1) is mapped to a set of characters as shown below:

A digit could represent any one of the characters it maps to.

Return all possible letter combinations that \`digits\` could represent. You may return the answer in **any order**.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/796a0dc1-2fcd-4ebb-0686-28f9007ec800/public)

**Example 1:**

\`\`\`java
Input: digits = "34"

Output: ["dg","dh","di","eg","eh","ei","fg","fh","fi"]
\`\`\`

**Example 2:**

\`\`\`java
Input: digits = ""

Output: []
\`\`\`

**Constraints:**
* \`0 <= digits.length <= 4\`
* \`2 <= digits[i] <= 9\``,

    "pop-balloons": `You are given an array of integers \`nums\` of size \`n\`. The \`ith\` element represents a balloon with an integer value of \`nums[i]\`. You must burst all of the balloons.

If you burst the \`ith\` balloon, you will receive \`nums[i - 1] * nums[i] * nums[i + 1]\` coins. If \`i - 1\` or \`i + 1\` goes out of bounds of the array, then assume the out of bounds value is 1.

Return the maximum number of coins you can receive by bursting all of the balloons.

**Example 1:**

\`\`\`java
Input: nums = [4,2,3,7]

Output: 143

Explanation:
nums = [4,2,3,7] --> [4,3,7] --> [4,7] --> [7] --> []
coins =  4*2*3    +   4*3*7   +  1*4*7  + 1*7*1 = 143
\`\`\`

**Constraints:**
* \`n == nums.length\`
* \`1 <= n <= 300\`
* \`0 <= nums[i] <= 100\``,

    "power-calc": `\`Pow(x, n)\` is a mathematical function to calculate the value of \`x\` raised to the power of \`n\` (i.e., \`x^n\`).
    
Given a floating-point value \`x\` and an integer value \`n\`, implement the \`myPow(x, n)\` function, which calculates \`x\` raised to the power \`n\`.

You may **not** use any built-in library functions.

**Example 1:**

\`\`\`java
Input: x = 2.00000, n = 5

Output: 32.00000
\`\`\`

**Example 2:**

\`\`\`java
Input: x = 1.10000, n = 10

Output: 2.59374
\`\`\`

**Example 3:**

\`\`\`java
Input: x = 2.00000, n = -3

Output: 0.12500
\`\`\`

**Constraints:**
* \`-100.0 < x < 100.0\`
* \`-1000 <= n <= 1000\`
* \`n\` is an integer.
* If \`x = 0\`, then \`n\` will be positive.`,

    "power-set": `Given an array \`nums\` of **unique** integers, return all possible subsets of \`nums\`.

The solution set must **not** contain duplicate subsets. You may return the solution in **any order**.

**Example 1:**

\`\`\`java
Input: nums = [1,2,3]

Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [7]

Output: [[],[7]]
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 10\`
* \`-10 <= nums[i] <= 10\``,

    "power-set-2": `You are given an array \`nums\` of integers, which may contain duplicates. Return all possible subsets.

The solution must **not** contain duplicate subsets. You may return the solution in **any order**.

**Example 1:**

\`\`\`java
Input: nums = [1,2,1]

Output: [[],[1],[1,2],[1,1],[1,2,1],[2]]
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [7,7]

Output: [[],[7], [7,7]]
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 11\`
* \`-20 <= nums[i] <= 20\``,

    "queen-puzzle": `The **n-queens** puzzle is the problem of placing \`n\` queens on an \`n x n\` chessboard so that no two queens can attack each other.

A **queen** in a chessboard can attack horizontally, vertically, and diagonally.

Given an integer \`n\`, return all distinct solutions to the **n-queens puzzle**.

Each solution contains a unique board layout where the queen pieces are placed. \`'Q'\` indicates a queen and \`'.'\` indicates an empty space.

You may return the answer in **any order**.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/cdf2b34d-7905-4388-db0b-9a120ebf4a00/public)

\`\`\`java
Input: n = 4

Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
\`\`\`

Explanation: There are two different solutions to the 4-queens puzzle.

**Example 2:**

\`\`\`java
Input: n = 1

Output: [["Q"]]
\`\`\`

**Constraints:**
* \`1 <= n <= 8\``,

    "query-cover": `You are given a 2D integer array \`intervals\`, where \`intervals[i] = [left_i, right_i]\` represents the \`ith\` interval starting at \`left_i\` and ending at \`right_i\` **(inclusive)**. 

You are also given an integer array of query points \`queries\`. The result of \`query[j]\` is the **length of the shortest interval** \`i\` such that \`left_i <= queries[j] <= right_i\`. If no such interval exists, the result of this query is \`-1\`.

Return an array \`output\` where \`output[j]\` is the result of \`query[j]\`.

Note: The length of an interval is calculated as \`right_i - left_i + 1\`.

**Example 1:**

\`\`\`java
Input: intervals = [[1,3],[2,3],[3,7],[6,6]], queries = [2,3,1,7,6,8]

Output: [2,2,3,5,1,-1]
\`\`\`

Explanation:
- Query = 2: The interval \`[2,3]\` is the smallest one containing 2, it's length is 2.
- Query = 3: The interval \`[2,3]\` is the smallest one containing 3, it's length is 2.
- Query = 1: The interval \`[1,3]\` is the smallest one containing 1, it's length is 3.
- Query = 7: The interval \`[3,7]\` is the smallest one containing 7, it's length is 5.
- Query = 6: The interval \`[6,6]\` is the smallest one containing 6, it's length is 1.
- Query = 8: There is no interval containing 8.

**Constraints:**
* \`1 <= intervals.length <= 1000\`
* \`1 <= queries.length <= 1000\`
* \`1 <= left_i <= right_i <= 10000\`
* \`1 <= queries[j] <= 10000\``,

    "rare-sequence": `You are given two strings \`s\` and \`t\`, both consisting of english letters.
    
Return the number of distinct **subsequences** of \`s\` which are equal to \`t\`.

**Example 1:**

\`\`\`java
Input: s = "caaat", t = "cat"

Output: 3
\`\`\`

Explanation: There are 3 ways you can generate \`"cat"\` from \`s\`.
* (c)aa(at)
* (c)a(a)a(t)
* (ca)aa(t)

**Example 2:**

\`\`\`java
Input: s = "xxyxy", t = "xy"

Output: 5
\`\`\`

Explanation: There are 5 ways you can generate \`"xy"\` from \`s\`.
* (x)x(y)xy
* (x)xyx(y)
* x(x)(y)xy
* x(x)yx(y)
* xxy(x)(y)

**Constraints:**
* \`1 <= s.length, t.length <= 1000\`
* \`s\` and \`t\` consist of English letters.`,

    "rearrange-list": `You are given the head of a singly linked-list.
    
The positions of a linked list of \`length = 7\` for example, can intially be represented as:

\`[0, 1, 2, 3, 4, 5, 6]\`

Reorder the nodes of the linked list to be in the following order:

\`[0, 6, 1, 5, 2, 4, 3]\`

Notice that in the general case for a list of \`length = n\` the nodes are reordered to be in the following order:

\`[0, n-1, 1, n-2, 2, n-3, ...]\`

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

**Example 1:**

\`\`\`java
Input: head = [2,4,6,8]

Output: [2,8,4,6]
\`\`\`

**Example 2:**

\`\`\`java
Input: head = [2,4,6,8,10]

Output: [2,10,4,8,6]
\`\`\`

**Constraints:**
* \`1 <= Length of the list <= 1000\`.
* \`1 <= Node.val <= 1000\``,

    "reverse-calc": `You are given an array of strings \`tokens\` that represents a **valid** arithmetic expression in [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation).

Return the integer that represents the evaluation of the expression.

* The operands may be integers or the results of other operations.
* The operators include \`'+'\`, \`'-'\`, \`'*'\`, and \`'/'\`.
* Assume that division between integers always truncates toward zero.

**Example 1:**

\`\`\`java
Input: tokens = ["1","2","+","3","*","4","-"]

Output: 5

Explanation: ((1 + 2) * 3) - 4 = 5
\`\`\`

**Constraints:**
* \`1 <= tokens.length <= 1000\`.
* tokens[i] is \`"+"\`, \`"-"\`, \`"*"\`, or \`"/"\`, or a string representing an integer in the range \`[-100, 100]\`.`,

    "right-view": `You are given the \`root\` of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d348893a-8917-456c-9599-c405cfc4e000/public)

\`\`\`java
Input: root = [1,2,3]

Output: [1,3]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c0b72861-13dc-42a6-030b-a4fb78139e00/public)

\`\`\`java
Input: root = [1,2,3,4,5,6,7]

Output: [1,3,7]
\`\`\`

**Constraints:**
* \`0 <= number of nodes in the tree <= 100\`
* \`-100 <= Node.val <= 100\``,

    "room-booking": `Given an array of meeting time interval objects consisting of start and end times \`[[start_1,end_1],[start_2,end_2],...] (start_i < end_i)\`, determine if a person could add all meetings to their schedule without any conflicts.

**Note:** (0,8),(8,10) is not considered a conflict at 8

**Example 1:**

\`\`\`java
Input: intervals = [(0,30),(5,10),(15,20)]

Output: false
\`\`\`

Explanation:
* \`(0,30)\` and \`(5,10)\` will conflict
* \`(0,30)\` and \`(15,20)\` will conflict

**Example 2:**

\`\`\`java
Input: intervals = [(5,8),(9,15)]

Output: true
\`\`\`

**Constraints:**
* \`0 <= intervals.length <= 500\`
* \`0 <= intervals[i].start < intervals[i].end <= 1,000,000\``,

    "room-count": `Given an array of meeting time interval objects consisting of start and end times \`[[start_1,end_1],[start_2,end_2],...] (start_i < end_i)\`, find the minimum number of days required to schedule all meetings without any conflicts.

**Note:** (0,8),(8,10) is not considered a conflict at 8.

**Example 1:**

\`\`\`java
Input: intervals = [(0,40),(5,10),(15,20)]

Output: 2
\`\`\`

Explanation:
day1: (0,40)
day2: (5,10),(15,20)

**Example 2:**

\`\`\`java
Input: intervals = [(4,9)]

Output: 1
\`\`\`

**Constraints:**
* \`0 <= intervals.length <= 500\`
* \`0 <= intervals[i].start < intervals[i].end <= 1,000,000\``,

    "rot-timer": `You are given a 2-D matrix \`grid\`. Each cell can have one of three possible values:
* \`0\` representing an empty cell
* \`1\` representing a fresh fruit
* \`2\` representing a rotten fruit

Every minute, if a fresh fruit is horizontally or vertically adjacent to a rotten fruit, then the fresh fruit also becomes rotten.

Return the minimum number of minutes that must elapse until there are zero fresh fruits remaining. If this state is impossible within the grid, return \`-1\`.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/5daa219c-ae90-4027-41c3-6ea4d9158300/public)

\`\`\`java
Input: grid = [[1,1,0],[0,1,1],[0,1,2]]

Output: 4
\`\`\`

**Example 2:**

\`\`\`java
Input: grid = [[1,0,1],[0,2,0],[1,0,1]]

Output: -1
\`\`\`

**Constraints:**
* \`1 <= grid.length, grid[i].length <= 10\``,

    "rotated-min": `You are given an array of length \`n\` which was originally sorted in ascending order. It has now been **rotated** between \`1\` and \`n\` times. For example, the array \`nums = [1,2,3,4,5,6]\` might become:

* \`[3,4,5,6,1,2]\` if it was rotated \`4\` times.
* \`[1,2,3,4,5,6]\` if it was rotated \`6\` times.

Notice that rotating the array \`4\` times moves the last four elements of the array to the beginning. Rotating the array \`6\` times produces the original array.

Assuming all elements in the rotated sorted array \`nums\` are **unique**, return the minimum element of this array.

A solution that runs in \`O(n)\` time is trivial, can you write an algorithm that runs in \`O(log n) time\`?

**Example 1:**

\`\`\`java
Input: nums = [3,4,5,6,1,2]

Output: 1
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [4,5,0,1,2,3]

Output: 0
\`\`\`

**Example 3:**

\`\`\`java
Input: nums = [4,5,6,7]

Output: 4
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 1000\`
* \`-1000 <= nums[i] <= 1000\``,

    "rotated-search": `You are given an array of length \`n\` which was originally sorted in ascending order. It has now been **rotated** between \`1\` and \`n\` times. For example, the array \`nums = [1,2,3,4,5,6]\` might become:

* \`[3,4,5,6,1,2]\` if it was rotated \`4\` times.
* \`[1,2,3,4,5,6]\` if it was rotated \`6\` times.

Given the rotated sorted array \`nums\` and an integer \`target\`, return the index of \`target\` within \`nums\`, or \`-1\` if it is not present.

You may assume all elements in the sorted rotated array \`nums\` are **unique**,

A solution that runs in \`O(n)\` time is trivial, can you write an algorithm that runs in \`O(log n) time\`?

**Example 1:**

\`\`\`java
Input: nums = [3,4,5,6,1,2], target = 1

Output: 4
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [3,5,6,0,1,2], target = 4

Output: -1
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 1000\`
* \`-1000 <= nums[i] <= 1000\`
* \`-1000 <= target <= 1000\`
* All values of \`nums\` are **unique**.
* \`nums\` is an ascending array that is possibly rotated.`,

    "signal-time": `You are given a network of \`n\` directed nodes, labeled from \`1\` to \`n\`. You are also given \`times\`, a list of directed edges where \`times[i] = (ui, vi, ti)\`. 
    
* \`ui\` is the source node (an integer from \`1\` to \`n\`)
* \`vi\` is the target node (an integer from \`1\` to \`n\`)
* \`ti\` is the time it takes for a signal to travel from the source to the target node (an integer greater than or equal to \`0\`).

You are also given an integer \`k\`, representing the node that we will send a signal from.

Return the **minimum** time it takes for all of the \`n\` nodes to receive the signal. If it is impossible for all the nodes to receive the signal, return \`-1\` instead.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/ba9b9be8-b888-45d6-627a-e719d1ac4e00/public)

\`\`\`java
Input: times = [[1,2,1],[2,3,1],[1,4,4],[3,4,1]], n = 4, k = 1

Output: 3
\`\`\`

**Example 2:**

\`\`\`java
Input: times = [[1,2,1],[2,3,1]], n = 3, k = 2

Output: -1
\`\`\`

**Constraints:**
* \`1 <= k <= n <= 100\`
* \`1 <= times.length <= 1000\``,

    "skip-ranges": `Given an array of intervals \`intervals\` where \`intervals[i] = [start_i, end_i]\`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note: Intervals are *non-overlapping* even if they have a common point. For example, \`[1, 3]\` and \`[2, 4]\` are overlapping, but \`[1, 2]\` and \`[2, 3]\` are non-overlapping.

**Example 1:**

\`\`\`java
Input: intervals = [[1,2],[2,4],[1,4]]

Output: 1
\`\`\`

Explanation: After [1,4] is removed, the rest of the intervals are non-overlapping.

**Example 2:**

\`\`\`java
Input: intervals = [[1,2],[2,4]]

Output: 0
\`\`\`

**Constraints:**
* \`1 <= intervals.length <= 1000\`
* \`intervals[i].length == 2\`
* \`-50000 <= starti < endi <= 50000\``,

    "smallest-cover": `Given two strings \`s\` and \`t\`, return the shortest **substring** of \`s\` such that every character in \`t\`, including duplicates, is present in the substring. If such a substring does not exist, return an empty string \`""\`.

You may assume that the correct output is always unique.

**Example 1:**

\`\`\`java
Input: s = "OUZODYXAZV", t = "XYZ"

Output: "YXAZ"
\`\`\`

Explanation: \`"YXAZ"\` is the shortest substring that includes \`"X"\`, \`"Y"\`, and \`"Z"\` from string \`t\`.

**Example 2:**

\`\`\`java
Input: s = "xyz", t = "xyz"

Output: "xyz"
\`\`\`

**Example 3:**

\`\`\`java
Input: s = "x", t = "xy"

Output: ""
\`\`\`

**Constraints:**
* \`1 <= s.length <= 1000\`
* \`1 <= t.length <= 1000\`
* \`s\` and \`t\` consist of uppercase and lowercase English letters.`,

    "solo-number": `You are given a **non-empty** array of integers \`nums\`. Every integer appears twice except for one.

Return the integer that appears only once.

You must implement a solution with \$O(n)\$ runtime complexity and use only \$O(1)\$ extra space.

**Example 1:**

\`\`\`java
Input: nums = [3,2,3]

Output: 2
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [7,6,6,7,8]

Output: 8
\`\`\`

**Constraints:**
* \`1 <= nums.length <= 10000\`
* \`-10000 <= nums[i] <= 10000\``,

    "sort-letters": `Given an array of strings \`strs\`, group all *anagrams* together into sublists. You may return the output in **any order**.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

**Example 1:**

\`\`\`java
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
\`\`\`

**Example 2:**

\`\`\`java
Input: strs = ["x"]

Output: [["x"]]
\`\`\`

**Example 3:**

\`\`\`java
Input: strs = [""]

Output: [[""]]
\`\`\`

**Constraints:**
* \`1 <= strs.length <= 1000\`.
* \`0 <= strs[i].length <= 100\`
* \`strs[i]\` is made up of lowercase English letters.`,

    "sorted-pair": `Given an array of integers \`numbers\` that is sorted in **non-decreasing order**.

Return the indices (**1-indexed**) of two numbers, \`[index1, index2]\`, such that they add up to a given target number \`target\` and \`index1 < index2\`. Note that \`index1\` and \`index2\` cannot be equal, therefore you may not use the same element twice.

There will always be **exactly one valid solution**.

Your solution must use \$O(1)\$ additional space.

**Example 1:**

\`\`\`java
Input: numbers = [1,2,3,4], target = 3

Output: [1,2]
\`\`\`

Explanation:
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, \`index1\` = 1, \`index2\` = 2. We return \`[1, 2]\`.

**Constraints:**
* \`2 <= numbers.length <= 1000\`
* \`-1000 <= numbers[i] <= 1000\`
* \`-1000 <= target <= 1000\``,

    "spin-grid": `Given a square \`n x n\` matrix of integers \`matrix\`, rotate it by 90 degrees *clockwise*.

You must rotate the matrix *in-place*. Do not allocate another 2D matrix and do the rotation.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e13e93ed-4fdb-49e4-f971-de1e30356600/public)

\`\`\`java
Input: matrix = [
  [1,2],
  [3,4]
]

Output: [
  [3,1],
  [4,2]
]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/37d34844-e6a0-4809-0895-f15e782efe00/public)

\`\`\`java
Input: matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

Output: [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
\`\`\`

**Constraints:**
* \`n == matrix.length == matrix[i].length\`
* \`1 <= n <= 20\`
* \`-1000 <= matrix[i][j] <= 1000\``,

    "spiral-read": `Given an \`m x n\` matrix of integers \`matrix\`, return a list of all elements within the matrix in *spiral order*.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/fe678b92-8606-4e07-ce70-08ec3479aa00/public)

\`\`\`java
Input: matrix = [[1,2],[3,4]]

Output: [1,2,4,3]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/8a460616-db14-4ccf-068b-00aa6d398400/public)

\`\`\`java
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [1,2,3,6,9,8,7,4,5]
\`\`\`

**Example 3:**

\`\`\`java
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

Output: [1,2,3,4,8,12,11,10,9,5,6,7]
\`\`\`

**Constraints:**
* \`1 <= matrix.length, matrix[i].length <= 10\`
* \`-100 <= matrix[i][j] <= 100\``,

    "split-palindrome": `Given a string \`s\`, split \`s\` into substrings where every substring is a palindrome. Return all possible lists of palindromic substrings.

You may return the solution in **any order**.

**Example 1:**

\`\`\`java
Input: s = "aab"

Output: [["a","a","b"],["aa","b"]]
\`\`\`

**Example 2:**

\`\`\`java
Input: s = "a"

Output: [["a"]]
\`\`\`

**Constraints:**
* \`1 <= s.length <= 20\`
* \`s\` contains only lowercase English letters.`,

    "spot-repeat": `Given an integer array \`nums\`, return \`true\` if any value appears **more than once** in the array, otherwise return \`false\`.

**Example 1:**

\`\`\`java
Input: nums = [1, 2, 3, 3]

Output: true
\`\`\`

**Example 2:**

\`\`\`java
Input: nums = [1, 2, 3, 4]

Output: false
\`\`\``,

    "square-detect": `You are given a stream of points consisting of x-y coordinates on a 2-D plane. Points can be added and queried as follows:

* **Add** - new points can be added to the stream into a data structure. Duplicate points are allowed and should be treated as separate points.
* **Query** - Given a single query point, **count** the number of ways to choose three additional points from the data structure such that the three points and the query point form a **square**. The square must have all sides parallel to the x-axis and y-axis, i.e. no diagonal squares are allowed. Recall that a **square** must have four equal sides.

Implement the \`CountSquares\` class:
* \`CountSquares()\` Initializes the object.
* \`void add(int[] point)\` Adds a new point \`point = [x, y]\`.
* \`int count(int[] point)\` Counts the number of ways to form valid **squares** with point \`point = [x, y]\` as described above.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/4ff69d9c-cd7d-43fa-bad1-e718fc207600/public)

\`\`\`java
Input: 
["CountSquares", "add", [[1, 1]], "add", [[2, 2]], "add", [[1, 2]], "count", [[2, 1]], "count", [[3, 3]], "add", [[2, 2]], "count", [[2, 1]]]
       
Output:
[null, null, null, null, 1, 0, null, 2]

Explanation:
CountSquares countSquares = new CountSquares();
countSquares.add([1, 1]);
countSquares.add([2, 2]);
countSquares.add([1, 2]);

countSquares.count([2, 1]);   // return 1.
countSquares.count([3, 3]);   // return 0.
countSquares.add([2, 2]);     // Duplicate points are allowed.
countSquares.count([2, 1]);   // return 2. 
\`\`\`

**Constraints:**
* \`point.length == 2\`
* \`0 <= x, y <= 1000\``,

    "step-climb": `You are given an integer \`n\` representing the number of steps to reach the top of a staircase. You can climb with either \`1\` or \`2\` steps at a time.
    
Return the number of distinct ways to climb to the top of the staircase.   

**Example 1:**

\`\`\`java
Input: n = 2

Output: 2
\`\`\`

Explanation:
1. \`1 + 1 = 2\`
2. \`2 = 2\`

**Example 2:**

\`\`\`java
Input: n = 3

Output: 3
\`\`\`

Explanation:
1. \`1 + 1 + 1 = 3\`
2. \`1 + 2 = 3\`
3. \`2 + 1 = 3\`

**Constraints:**
* \`1 <= n <= 30\``,

    "stone-weight": `You are given an array of integers \`stones\` where \`stones[i]\` represents the weight of the \`ith\` stone.

We want to run a simulation on the stones as follows:

* At each step we choose the **two heaviest stones**, with weight \`x\` and \`y\` and smash them togethers
* If \`x == y\`, both stones are destroyed
* If \`x < y\`, the stone of weight \`x\` is destroyed, and the stone of weight \`y\` has new weight \`y - x\`.

Continue the simulation until there is no more than one stone remaining.

Return the weight of the last remaining stone or return \`0\` if none remain.

**Example 1:**

\`\`\`java
Input: stones = [2,3,6,2,4]

Output: 1
\`\`\`
Explanation: 
We smash 6 and 4 and are left with a 2, so the array becomes [2,3,2,2].
We smash 3 and 2 and are left with a 1, so the array becomes [1,2,2].
We smash 2 and 2, so the array becomes [1].

**Example 2:**

\`\`\`java
Input: stones = [1,2]

Output: 1
\`\`\`

**Constraints:**
* \`1 <= stones.length <= 20\`
* \`1 <= stones[i] <= 100\``,

    "streak-finder": `Given an array of integers \`nums\`, return *the length* of the longest consecutive sequence of elements that can be formed.

A *consecutive sequence* is a sequence of elements in which each element is exactly \`1\` greater than the previous element. The elements do *not* have to be consecutive in the original array.

You must write an algorithm that runs in \`O(n)\` time.

**Example 1:**

\`\`\`java
Input: nums = [2,20,4,10,3,4,5]

Output: 4
\`\`\`

Explanation: The longest consecutive sequence is \`[2, 3, 4, 5]\`.

**Example 2:**

\`\`\`java
Input: nums = [0,3,2,5,4,6,1,1]

Output: 7
\`\`\`

**Constraints:**
* \`0 <= nums.length <= 1000\`
* \`-10^9 <= nums[i] <= 10^9\``,

    "stream-median": `The **[median](https://en.wikipedia.org/wiki/Median)** is the middle value in a sorted list of integers. For lists of *even* length, there is no middle value, so the median is the [mean](https://en.wikipedia.org/wiki/Mean) of the two middle values.

For example:
* For \`arr = [1,2,3]\`, the median is \`2\`.
* For \`arr = [1,2]\`, the median is \`(1 + 2) / 2 = 1.5\`

Implement the MedianFinder class:

* \`MedianFinder()\` initializes the \`MedianFinder\` object.
* \`void addNum(int num)\` adds the integer \`num\` from the data stream to the data structure.
* \`double findMedian()\` returns the median of all elements so far.

**Example 1:**

\`\`\`java
Input:
["MedianFinder", "addNum", "1", "findMedian", "addNum", "3" "findMedian", "addNum", "2", "findMedian"]

Output:
[null, null, 1.0, null, 2.0, null, 2.0]

Explanation:
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.findMedian(); // return 1.0
medianFinder.addNum(3);    // arr = [1, 3]
medianFinder.findMedian(); // return 2.0
medianFinder.addNum(2);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
\`\`\`

**Constraints:**
* \`-100,000 <= num <= 100,000\`
* \`findMedian\` will only be called after adding at least one integer to the data structure.`,

    "string-multiply": `You are given two strings \`num1\` and \`num2\` that represent non-negative integers. 
    
Return the product of \`num1\` and \`num2\` in the form of a string.

Assume that neither \`num1\` nor \`num2\` contain any leading zero, unless they are the number \`0\` itself.

**Note**: You can not use any built-in library to convert the inputs directly into integers.

**Example 1:**

\`\`\`java
Input: num1 = "3", num2 = "4"

Output: "12"
\`\`\`

**Example 2:**

\`\`\`java
Input: num1 = "111", num2 = "222"

Output: "24642"
\`\`\`

**Constraints:**
* \`1 <= num1.length, num2.length <= 200\`
* \`num1\` and \`num2\` consist of digits only.`,

    "string-weave": `You are given three strings \`s1\`, \`s2\`, and \`s3\`. Return \`true\` if \`s3\` is formed by **interleaving** \`s1\` and \`s2\` together or \`false\` otherwise.

**Interleaving** two strings \`s\` and \`t\` is done by dividing \`s\` and \`t\` into \`n\` and \`m\` substrings respectively, where the following conditions are met

* \`|n - m| <= 1\`, i.e. the difference between the number of substrings of \`s\` and \`t\` is at most \`1\`.
* \`s = s1 + s2 + ... + sn\`
* \`t = t1 + t2 + ... + tm\`
* **Interleaving** \`s\` and \`t\` is  \`s1 + t1 + s2 + t2 + ...\` or \`t1 + s1 + t2 + s2 + ...\`

You may assume that \`s1\`, \`s2\` and \`s3\` consist of lowercase English letters.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/fc30feb8-d898-4b9f-3667-4e2c98a1a900/public)

\`\`\`java
Input: s1 = "aaaa", s2 = "bbbb", s3 = "aabbbbaa"

Output: true
\`\`\`

Explanation: We can split \`s1\` into \`["aa", "aa"]\`, \`s2\` can remain as \`"bbbb"\` and \`s3\` is formed by interleaving \`["aa", "aa"]\` and \`"bbbb"\`.

**Example 2:**

\`\`\`java
Input: s1 = "", s2 = "", s3 = ""

Output: true
\`\`\`

**Example 3:**

\`\`\`java
Input: s1 = "abc", s2 = "xyz", s3 = "abxzcy"

Output: false
\`\`\`

Explanation: We can't split \`s3\` into \`["ab", "xz", "cy"]\` as the order of characters is not maintained.

**Constraints:**
* \`0 <= s1.length, s2.length <= 100\`
* \`0 <= s3.length <= 200\``,

    "sum-combos": `You are given an array of **distinct** integers \`nums\` and a target integer \`target\`. Your task is to return a list of all **unique combinations** of \`nums\` where the chosen numbers sum to \`target\`.

The **same** number may be chosen from \`nums\` an **unlimited number of times**. Two combinations are the same if the frequency of each of the chosen numbers is the same, otherwise they are different.

You may return the combinations in **any order** and the order of the numbers in each combination can be in **any order**.

**Example 1:**

\`\`\`java
Input: 
nums = [2,5,6,9] 
target = 9

Output: [[2,2,5],[9]]
\`\`\`

Explanation:
2 + 2 + 5 = 9. We use 2 twice, and 5 once.
9 = 9. We use 9 once.

**Example 2:**

\`\`\`java
Input: 
nums = [3,4,5]
target = 16

Output: [[3,3,3,3,4],[3,3,5,5],[4,4,4,4],[3,4,4,5]]
\`\`\`

**Example 3:**

\`\`\`java
Input: 
nums = [3]
target = 5

Output: []
\`\`\`

**Constraints:**
* All elements of \`nums\` are **distinct**.
* \`1 <= nums.length <= 20\`
* \`2 <= nums[i] <= 30\`
* \`2 <= target <= 30\``,

    "sum-combos-2": `You are given an array of integers \`candidates\`, which may contain duplicates, and a target integer \`target\`. Your task is to return a list of all **unique combinations** of \`candidates\` where the chosen numbers sum to \`target\`.

Each element from \`candidates\` may be chosen **at most once** within a combination. The solution set must not contain duplicate combinations.

You may return the combinations in **any order** and the order of the numbers in each combination can be in **any order**.

**Example 1:**

\`\`\`java
Input: candidates = [9,2,2,4,6,1,5], target = 8

Output: [
  [1,2,5],
  [2,2,4],
  [2,6]
]
\`\`\`

**Example 2:**

\`\`\`java
Input: candidates = [1,2,3,4,5], target = 7

Output: [
  [1,2,4],
  [2,5],
  [3,4]
]
\`\`\`

**Constraints:**
* \`1 <= candidates.length <= 100\`
* \`1 <= candidates[i] <= 50\`
* \`1 <= target <= 30\``,

    "swim-level": `You are given a square 2-D matrix of distinct integers \`grid\` where each integer \`grid[i][j]\` represents the elevation at position \`(i, j)\`.

Rain starts to fall at time = \`0\`, which causes the water level to rise. At time \`t\`, the water level across the entire grid is \`t\`.

You may swim either horizontally or vertically in the grid between two adjacent squares if the original elevation of both squares is less than or equal to the water level at time \`t\`.

Starting from the top left square \`(0, 0)\`, return the minimum amount of time it will take until it is possible to reach the bottom right square \`(n - 1, n - 1)\`.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/11a45dd8-625f-4be6-9fbb-a3b6ffcc1100/public)

\`\`\`java
Input: grid = [[0,1],[2,3]]

Output: 3
\`\`\`

Explanation: For a path to exist to the bottom right square \`grid[1][1]\` the water elevation must be at least \`3\`. At time \`t = 3\`, the water level is \`3\`.

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e585e59c-a1f9-4d10-538d-9e52bcdb6200/public)

\`\`\`java
Input: grid = [
  [0,1,2,10],
  [9,14,4,13],
  [12,3,8,15],
  [11,5,7,6]
]

Output: 8
\`\`\`

Explanation: The water level must be at least \`8\` to reach the bottom right square. The path is \`[0, 1, 2, 4, 8, 7, 6]\`.

**Constraints:**
* \`grid.length == grid[i].length\`
* \`1 <= grid.length <= 50\`
* \`0 <= grid[i][j] < n^2\``,

    "target-ways": `You are given an array of integers \`nums\` and an integer \`target\`.

For each number in the array, you can choose to either add or subtract it to a total sum. 

* For example, if \`nums = [1, 2]\`, one possible sum would be \`"+1-2=-1"\`.

If \`nums=[1,1]\`, there are **two different ways** to sum the input numbers to get a sum of \`0\`: \`"+1-1"\` and \`"-1+1"\`.

Return the number of **different ways** that you can build the expression such that the total sum equals \`target\`.

**Example 1:**

\`\`\`java
Input: nums = [2,2,2], target = 2

Output: 3
\`\`\`
Explanation: There are 3 different ways to sum the input numbers to get a sum of 2.
\`+2 +2 -2 = 2\`
\`+2 -2 +2 = 2\`
\`-2 +2 +2 = 2\`

**Constraints:**
* \`1 <= nums.length <= 20\`
* \`0 <= nums[i] <= 1000\`
* \`-1000 <= target <= 1000\``,

    "task-order": `You are given an array of CPU  tasks \`tasks\`, where \`tasks[i]\` is an uppercase english character from \`A\` to \`Z\`. You are also given an integer \`n\`. 
    
Each CPU cycle allows the completion of a single task, and tasks may be completed in any order.

The only constraint is that **identical** tasks must be separated by at least \`n\` CPU cycles, to cooldown the CPU.

Return the *minimum number* of CPU cycles required to complete all tasks.

**Example 1:**

\`\`\`java
Input: tasks = ["X","X","Y","Y"], n = 2

Output: 5
\`\`\`

Explanation: A possible sequence is: X -> Y -> idle -> X -> Y.

**Example 2:**

\`\`\`java
Input: tasks = ["A","A","A","B","C"], n = 3

Output: 9
\`\`\`

Explanation: A possible sequence is: A -> B -> C -> Idle -> A -> Idle -> Idle -> Idle -> A.

**Constraints:**
* \`1 <= tasks.length <= 1000\`
* \`0 <= n <= 100\``,

    "time-cache": `Implement a time-based key-value data structure that supports:
 
* Storing multiple values for the same key at specified time stamps
* Retrieving the key's value at a specified timestamp

Implement the \`TimeMap\` class:
* \`TimeMap()\` Initializes the object.
* \`void set(String key, String value, int timestamp)\` Stores the key \`key\` with the value \`value\` at the given time \`timestamp\`.
* \`String get(String key, int timestamp)\` Returns the most recent value of \`key\` if \`set\` was previously called on it *and* the most recent timestamp for that key \`prev_timestamp\` is less than or equal to the given timestamp (\`prev_timestamp <= timestamp\`). If there are no values, it returns \`""\`.

Note: For all calls to \`set\`, the timestamps are in strictly increasing order.

**Example 1:**

\`\`\`java
Input:
["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

Output:
[null, null, "happy", "happy", null, "sad"]

Explanation:
TimeMap timeMap = new TimeMap();
timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
timeMap.get("alice", 1);           // return "happy"
timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
timeMap.get("alice", 3);           // return "sad"
\`\`\`

**Constraints:**
* \`1 <= key.length, value.length <= 100\`
* \`key\` and \`value\` only include lowercase English letters and digits.
* \`1 <= timestamp <= 1000\``,

    "trade-cooldown": `You are given an integer array \`prices\` where \`prices[i]\` is the price of NeetCoin on the \`ith\` day.

You may buy and sell one NeetCoin multiple times with the following restrictions:
* After you sell your NeetCoin, you cannot buy another one on the next day (i.e., there is a cooldown period of one day).
* You may only own at most one NeetCoin at a time.

You may complete as many transactions as you like.

Return the **maximum profit** you can achieve. 

**Example 1:**

\`\`\`java
Input: prices = [1,3,4,0,4]

Output: 6
\`\`\`

Explanation: Buy on day 0 (price = 1) and sell on day 1 (price = 3), profit = 3-1 = 2. Then buy on day 3 (price = 0) and sell on day 4 (price = 4), profit = 4-0 = 4. Total profit is 2 + 4 = 6.

**Example 2:**

\`\`\`java
Input: prices = [1]

Output: 0
\`\`\`

**Constraints:**
* \`1 <= prices.length <= 5000\`
* \`0 <= prices[i] <= 1000\``,

    "tree-balance": `Given a binary tree, return \`true\` if it is **height-balanced** and \`false\` otherwise.

A **height-balanced** binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c19c3727-ea28-416c-3873-79ee75f2b400/public)

\`\`\`java
Input: root = [1,2,3,null,null,4]

Output: true
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/24fcc2da-e012-4f9e-856e-040f200f3c00/public)

\`\`\`java
Input: root = [1,2,3,null,null,4,null,5]

Output: false
\`\`\`

**Example 3:**

\`\`\`java
Input: root = []

Output: true
\`\`\`

**Constraints:**
* The number of nodes in the tree is in the range \`[0, 1000]\`.
* \`-1000 <= Node.val <= 1000\``,

    "tree-depth": `Given the \`root\` of a binary tree, return its **depth**.

The **depth** of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/5ea6da77-7e43-43e0-dd9d-e879ca0b1600/public)

\`\`\`java
Input: root = [1,2,3,null,null,4]

Output: 3
\`\`\`

**Example 2:**

\`\`\`java
Input: root = []

Output: 0
\`\`\`

**Constraints:**
* \`0 <= The number of nodes in the tree <= 100\`.
* \`-100 <= Node.val <= 100\``,

    "tree-in-tree": `Given the roots of two binary trees \`root\` and \`subRoot\`, return \`true\` if there is a subtree of \`root\` with the same structure and node values of \`subRoot\` and \`false\` otherwise.

A subtree of a binary tree \`tree\` is a tree that consists of a node in \`tree\` and all of this node's descendants. The tree \`tree\` could also be considered as a subtree of itself.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/2991a77a-9664-46ed-528d-019e392f7400/public)

\`\`\`java
Input: root = [1,2,3,4,5], subRoot = [2,4,5]

Output: true
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/ae6114cb-23a0-457f-c441-0a82b7a58500/public)

\`\`\`java
Input: root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]

Output: false
\`\`\`

**Constraints:**
* \`1 <= The number of nodes in both trees <= 100\`.
* \`-100 <= root.val, subRoot.val <= 100\``,

    "tree-width": `The **diameter** of a binary tree is defined as the **length** of the longest path between *any two nodes within the tree*. The path does not necessarily have to pass through the root.
    
The **length** of a path between two nodes in a binary tree is the number of edges between the nodes. Note that the path can *not* include the same node twice.

Given the root of a binary tree \`root\`, return the **diameter** of the tree.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/90e1d7a0-4322-4c5d-c59b-dde2bf92bb00/public)

\`\`\`java
Input: root = [1,null,2,3,4,5]

Output: 3
\`\`\`

Explanation: 3 is the length of the path \`[1,2,3,5]\` or \`[5,3,2,4]\`.

**Example 2:**

\`\`\`java
Input: root = [1,2,3]

Output: 2
\`\`\`

**Constraints:**
* \`1 <= number of nodes in the tree <= 100\`
* \`-100 <= Node.val <= 100\``,

    "trim-end": `You are given the beginning of a linked list \`head\`, and an integer \`n\`.
    
Remove the \`nth\` node from the end of the list and return the beginning of the list.

**Example 1:**

\`\`\`java
Input: head = [1,2,3,4], n = 2

Output: [1,2,4]
\`\`\`

**Example 2:**

\`\`\`java
Input: head = [5], n = 1

Output: []
\`\`\`

**Example 3:**

\`\`\`java
Input: head = [1,2], n = 2

Output: [2]
\`\`\`

**Constraints:**
* The number of nodes in the list is \`sz\`.
* \`1 <= sz <= 30\`
* \`0 <= Node.val <= 100\`
* \`1 <= n <= sz\``,

    "triple-match": `Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` where \`nums[i] + nums[j] + nums[k] == 0\`, and the indices \`i\`, \`j\` and \`k\` are all distinct.

The output should *not* contain any duplicate triplets. You may return the output and the triplets in **any order**.

**Example 1:**

\`\`\`java
Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
\`\`\`

Explanation: 
\`nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\`
\`nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\`
\`nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\`
The distinct triplets are \`[-1,0,1]\` and \`[-1,-1,2]\`.

**Example 2:**

\`\`\`java
Input: nums = [0,1,1]

Output: []
\`\`\`

Explanation: The only possible triplet does not sum up to 0.

**Example 3:**

\`\`\`java
Input: nums = [0,0,0]

Output: [[0,0,0]]
\`\`\`

Explanation: The only possible triplet sums up to 0.

**Constraints:**
* \`3 <= nums.length <= 1000\`
* \`-10^5 <= nums[i] <= 10^5\``,

    "triple-merge": `You are given a 2D array of integers \`triplets\`, where \`triplets[i] = [ai, bi, ci]\` represents the \`ith\` **triplet**. You are also given an array of integers \`target = [x, y, z]\` which is the triplet we want to obtain.
    
To obtain \`target\`, you may apply the following operation on \`triplets\` zero or more times:

Choose two **different** triplets \`triplets[i]\` and \`triplets[j]\` and update \`triplets[j]\` to become \`[max(ai, aj), max(bi, bj), max(ci, cj)]\`.
    * E.g. if \`triplets[i] = [1, 3, 1]\` and \`triplets[j] = [2, 1, 2]\`, \`triplets[j]\` will be updated to \`[max(1, 2), max(3, 1), max(1, 2)] = [2, 3, 2]\`.

Return \`true\` if it is possible to obtain \`target\` as an **element** of \`triplets\`, or \`false\` otherwise.

**Example 1:**

\`\`\`java
Input: triplets = [[1,2,3],[7,1,1]], target = [7,2,3]

Output: true
\`\`\`

Explanation: 
Choose the first and second triplets, update the second triplet to be [max(1, 7), max(2, 1), max(3, 1)] = [7, 2, 3].

**Example 2:**

\`\`\`java
Input: triplets = [[2,5,6],[1,4,4],[5,7,5]], target = [5,4,6]

Output: false
\`\`\`

**Constraints:**
* \`1 <= triplets.length <= 1000\`
* \`1 <= ai, bi, ci, x, y, z <= 100\``,

    "tweet-feed": `Implement a simplified version of Twitter which allows users to post tweets, follow/unfollow each other, and view the \`10\` most recent tweets within their own news feed.

Users and tweets are uniquely identified by their IDs (integers).

Implement the following methods:

* \`Twitter()\` Initializes the twitter object.
* \`void postTweet(int userId, int tweetId)\` Publish a new tweet with ID \`tweetId\` by the user \`userId\`. You may assume that each \`tweetId\` is unique.
* \`List<Integer> getNewsFeed(int userId)\` Fetches at most the \`10\` most recent tweet IDs in the user's news feed. Each item must be posted by users who the user is following or by the user themself. Tweets IDs should be **ordered from most recent to least recent**.
* \`void follow(int followerId, int followeeId)\` The user with ID \`followerId\` follows the user with ID \`followeeId\`.
* \`void unfollow(int followerId, int followeeId)\` The user with ID \`followerId\` unfollows the user with ID \`followeeId\`.

**Example 1:**

\`\`\`java
Input:
["Twitter", "postTweet", [1, 10], "postTweet", [2, 20], "getNewsFeed", [1], "getNewsFeed", [2], "follow", [1, 2], "getNewsFeed", [1], "getNewsFeed", [2], "unfollow", [1, 2], "getNewsFeed", [1]]

Output:
[null, null, null, [10], [20], null, [20, 10], [20], null, [10]]

Explanation:
Twitter twitter = new Twitter();
twitter.postTweet(1, 10); // User 1 posts a new tweet with id = 10.
twitter.postTweet(2, 20); // User 2 posts a new tweet with id = 20.
twitter.getNewsFeed(1);   // User 1's news feed should only contain their own tweets -> [10].
twitter.getNewsFeed(2);   // User 2's news feed should only contain their own tweets -> [20].
twitter.follow(1, 2);     // User 1 follows user 2.
twitter.getNewsFeed(1);   // User 1's news feed should contain both tweets from user 1 and user 2 -> [20, 10].
twitter.getNewsFeed(2);   // User 2's news feed should still only contain their own tweets -> [20].
twitter.unfollow(1, 2);   // User 1 unfollows user 2.
twitter.getNewsFeed(1);   // User 1's news feed should only contain their own tweets -> [10].
\`\`\`

**Constraints:**
* \`1 <= userId, followerId, followeeId <= 100\`
* \`0 <= tweetId <= 1000\``,

    "twin-trees": `Given the roots of two binary trees \`p\` and \`q\`, return \`true\` if the trees are **equivalent**, otherwise return \`false\`.

Two binary trees are considered **equivalent** if they share the exact same structure and the nodes have the same values.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e78fc10c-4692-471f-5261-61e9be4f3a00/public)

\`\`\`java
Input: p = [1,2,3], q = [1,2,3]

Output: true
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0b0ee764-c643-46ff-cb3f-86ce8b58ab00/public)

\`\`\`java
Input: p = [4,7], q = [4,null,7]

Output: false
\`\`\`

**Example 3:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/4d811f95-0488-490b-1f4f-fc5489df0f00/public)

\`\`\`java
Input: p = [1,2,3], q = [1,3,2]

Output: false
\`\`\`

**Constraints:**
* \`0 <= The number of nodes in both trees <= 100\`.
* \`-100 <= Node.val <= 100\``,

    "unique-streak": `Given a string \`s\`, find the *length of the longest substring* without duplicate characters.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

\`\`\`java
Input: s = "zxyzxyz"

Output: 3
\`\`\`

Explanation: The string "xyz" is the longest without duplicate characters.

**Example 2:**

\`\`\`java
Input: s = "xxxx"

Output: 1
\`\`\`

**Constraints:**
* \`0 <= s.length <= 1000\`
* \`s\` may consist of printable ASCII characters.`,

    "valid-bst": `Given the \`root\` of a binary tree, return \`true\` if it is a **valid binary search tree**, otherwise return \`false\`.

A **valid binary search tree** satisfies the following constraints:    
* The left subtree of every node contains only nodes with keys **less than** the node's key.
* The right subtree of every node contains only nodes with keys **greater than** the node's key.
* Both the left and right subtrees are also binary search trees.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/18f9a316-8dc2-4e11-d304-51204454ac00/public)

\`\`\`java
Input: root = [2,1,3]

Output: true
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/6f14cb8d-efad-4221-2beb-fba2b19c8a00/public)

\`\`\`java
Input: root = [1,2,3]

Output: false
\`\`\`

Explanation: The root node's value is 1 but its left child's value is 2 which is greater than 1.

**Constraints:**
* \`1 <= The number of nodes in the tree <= 1000\`.
* \`-1000 <= Node.val <= 1000\``,

    "valid-tree": `Given \`n\` nodes labeled from \`0\` to \`n - 1\` and a list of **undirected** edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

**Example 1:**

\`\`\`java
Input:
n = 5
edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

Output:
true
\`\`\`

**Example 2:**

\`\`\`java
Input:
n = 5
edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

Output:
false
\`\`\`

**Note:**
* You can assume that no duplicate edges will appear in edges. Since all edges are \`undirected\`, \`[0, 1]\` is the same as \`[1, 0]\` and thus will not appear together in edges.

**Constraints:**
* \`1 <= n <= 100\`
* \`0 <= edges.length <= n * (n - 1) / 2\``,

    "wild-brackets": `You are given a string \`s\` which contains only three types of characters: \`'('\`, \`')'\` and \`'*'\`. 
    
Return \`true\` if \`s\` is **valid**, otherwise return \`false\`.

A string is valid if it follows all of the following rules:

* Every left parenthesis \`'('\` must have a corresponding right parenthesis \`')'\`.
* Every right parenthesis \`')'\` must have a corresponding left parenthesis \`'('\`.
* Left parenthesis \`'('\` must go before the corresponding right parenthesis \`')'\`.
* A \`'*'\` could be treated as a right parenthesis \`')'\` character or a left parenthesis \`'('\` character, or as an empty string \`""\`.

**Example 1:**

\`\`\`java
Input: s = "((**)"

Output: true
\`\`\`

Explanation: One of the \`'*'\` could be a \`')'\` and the other could be an empty string.

**Example 2:**

\`\`\`java
Input: s = "(((*)"

Output: false
\`\`\`

Explanation: The string is not valid because there is an extra \`'('\` at the beginning, regardless of the extra \`'*'\`.

**Constraints:**
* \`1 <= s.length <= 100\``,

    "word-finder": `Design a data structure that supports adding new words and searching for existing words.

Implement the \`WordDictionary\` class:

* \`void addWord(word)\` Adds \`word\` to the data structure.
* \`bool search(word)\` Returns \`true\` if there is any string in the data structure that matches \`word\` or \`false\` otherwise. \`word\` may contain dots \`'.'\` where dots can be matched with any letter.

**Example 1:**

\`\`\`java
Input:
["WordDictionary", "addWord", "day", "addWord", "bay", "addWord", "may", "search", "say", "search", "day", "search", ".ay", "search", "b.."]

Output:
[null, null, null, null, false, true, true, true]

Explanation:
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("day");
wordDictionary.addWord("bay");
wordDictionary.addWord("may");
wordDictionary.search("say"); // return false
wordDictionary.search("day"); // return true
wordDictionary.search(".ay"); // return true
wordDictionary.search("b.."); // return true
\`\`\`

**Constraints:**
* \`1 <= word.length <= 20\`
* \`word\` in \`addWord\` consists of lowercase English letters.
* \`word\` in \`search\` consist of \`'.'\` or lowercase English letters.
* There will be at most \`2\` dots in \`word\` for \`search\` queries.
* At most \`10,000\` calls will be made to \`addWord\` and \`search\`.`,

    "word-grid": `Given a 2-D grid of characters \`board\` and a string \`word\`, return \`true\` if the word is present in the grid, otherwise return \`false\`.

For the word to be present it must be possible to form it with a path in the board with horizontally or vertically neighboring cells. The same cell may not be used more than once in a word.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/7c1fcf82-71c8-4750-3ddd-4ab6a666a500/public)

\`\`\`java
Input: 
board = [
  ["A","B","C","D"],
  ["S","A","A","T"],
  ["A","C","A","E"]
],
word = "CAT"

Output: true
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/79721392-44b6-4de7-c571-d3d1640ac100/public)

\`\`\`java
Input: 
board = [
  ["A","B","C","D"],
  ["S","A","A","T"],
  ["A","C","A","E"]
],
word = "BAT"

Output: false
\`\`\`

**Constraints:**
* \`1 <= board.length, board[i].length <= 5\`
* \`1 <= word.length <= 10\`
* \`board\` and \`word\` consists of only lowercase and uppercase English letters.`,

    "word-ladder": `You are given two words, \`beginWord\` and \`endWord\`, and also a list of words \`wordList\`. All of the given words are of the same length, consisting of lowercase English letters, and are all distinct.

Your goal is to transform \`beginWord\` into \`endWord\` by following the rules:
    
* You may transform \`beginWord\` to any word within \`wordList\`, provided that at exactly one position the words have a different character, and the rest of the positions have the same characters.
* You may repeat the previous step with the new word that you obtain, and you may do this as many times as needed.

Return the **minimum number of words within the transformation sequence** needed to obtain the \`endWord\`, or \`0\` if no such sequence exists.

**Example 1:**

\`\`\`java
Input: beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sag","dag","dot"]

Output: 4
\`\`\`

Explanation: The transformation sequence is \`"cat" -> "bat" -> "bag" -> "sag"\`.

**Example 2:**

\`\`\`java
Input: beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sat","dag","dot"]

Output: 0
\`\`\`

Explanation: There is no possible transformation sequence from \`"cat"\` to \`"sag"\` since the word \`"sag"\` is not in the wordList.

**Constraints:**
* \`1 <= beginWord.length <= 10\`
* \`1 <= wordList.length <= 100\``,

    "word-split": `Given a string \`s\` and a dictionary of strings \`wordDict\`, return \`true\` if \`s\` can be segmented into a space-separated sequence of dictionary words.

You are allowed to reuse words in the dictionary an unlimited number of times. You may assume all dictionary words are unique.

**Example 1:**

\`\`\`java
Input: s = "neetcode", wordDict = ["neet","code"]

Output: true
\`\`\`

Explanation: Return true because "neetcode" can be split into "neet" and "code".

**Example 2:**

\`\`\`java
Input: s = "applepenapple", wordDict = ["apple","pen","ape"]

Output: true
\`\`\`

Explanation: Return true because "applepenapple" can be split into "apple", "pen" and "apple". Notice that we can reuse words and also not use all the words.

**Example 3:**

\`\`\`java
Input: s = "catsincars", wordDict = ["cats","cat","sin","in","car"]

Output: false
\`\`\`

**Constraints:**
* \`1 <= s.length <= 200\`
* \`1 <= wordDict.length <= 100\`
* \`1 <= wordDict[i].length <= 20\`
* \`s\` and \`wordDict[i]\` consist of only lowercase English letters.`,

    "zero-grid": `Given an \`m x n\` matrix of integers \`matrix\`, if an element is \`0\`, set its entire row and column to \`0\`'s.

You must update the matrix *in-place*.

**Follow up:** Could you solve it using \`O(1)\` space?

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/49ffd14e-b32b-4ed8-e0d0-9378e5eb9b00/public)

\`\`\`java
Input: matrix = [
  [0,1],
  [1,0]
]

Output: [
  [0,0],
  [0,0]
]
\`\`\`

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/04d99cc8-e453-464d-888c-58d0a95daf00/public)

\`\`\`java
Input: matrix = [
  [1,2,3],
  [4,0,5],
  [6,7,8]
]

Output: [
  [1,0,3],
  [0,0,0],
  [6,0,8]
]
\`\`\`

**Constraints:**
* \`1 <= matrix.length, matrix[0].length <= 100\`
* \`-2^31 <= matrix[i][j] <= (2^31) - 1\``,

};
