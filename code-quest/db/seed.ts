import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { eq } from "drizzle-orm";

const SEED_MODULES = [
  {
    title: "The Array Archives",
    slug: "arrays",
    description: "Infiltrate the data vaults. Master array manipulation to crack the security systems.",
    isLocked: false,
    order: 1,
  },
  {
    title: "Linked List Labyrinth",
    slug: "linked-lists",
    description: "Navigate the pointer tunnels. Chain your way through interconnected nodes.",
    isLocked: true,
    order: 2,
  },
  {
    title: "Stack & Queue Citadel",
    slug: "stacks-queues",
    description: "Master the order of operations. First in, first out - or last in, first out?",
    isLocked: true,
    order: 3,
  },
];

const SEED_LESSONS = [
  // Module 1: Arrays
  {
    moduleSlug: "arrays",
    slug: "arrays-1",
    title: "The Vault Door",
    storyContent: `## 🐿️ "Psst! Over here!"

*A small figure drops from the ceiling vent—a cybernetic squirrel with glowing circuit patterns in his fur. He lands with a soft THUMP, adjusting neon goggles on his face.*

**Dice:** "Name's Dice. I'm your guide through this digital nightmare. You want to crack the Mainframe? First, you gotta understand how data is stored."

*He projects a hologram from his paw:*

\`\`\`
╔══════════════════════════════════════════╗
║     S E C U R I T Y   L O G S            ║
╠═════╦═════╦═════╦═════╦═════════════════╣
║  0  ║  1  ║  2  ║  3  ║  4  ← INDEX      ║
╠═════╬═════╬═════╬═════╬═════════════════╣
║ 10  ║ 20  ║ 30  ║ 40  ║ 50  ← VALUES     ║
╚═════╩═════╩═════╩═════╩═════════════════╝
             ↑
         TARGET: logs[2] = 30
\`\`\`

**Dice:** "See that? An **array**. Think of it as a row of lockers in a high-security facility. Each locker has a number—we call it an **index**."

*He taps locker 0.*

**Dice:** "Here's the catch: computers count from ZERO, not one. Weird, I know. But it makes the math easier for them."

*He scurries up to your eye level.*

**Dice:** "The vault door needs the **third** entry in those logs. But third means index 2. Get it?"

---

### 🎯 Your Mission

Extract the value at **index 2** from the security logs array.`,
    theoryContent: `## Array Indexing 101

Arrays are **zero-indexed** in most programming languages:

| Position | Index | Value |
|----------|-------|-------|
| First    | 0     | 10    |
| Second   | 1     | 20    |
| **Third**| **2** | **30**|
| Fourth   | 3     | 40    |
| Fifth    | 4     | 50    |

### Key Insight
> The "nth" element is at index \`n - 1\`

### Code Pattern
\`\`\`go
// Access element at index 2
value := logs[2]  // Returns 30
\`\`\`

**Time Complexity:** O(1) — instant access! That's the beauty of arrays.`,
    hasExercise: true,
    exerciseId: "arrays-1",
    order: 1,
  },
  {
    moduleSlug: "arrays",
    slug: "arrays-2",
    title: "Power Grid Override",
    storyContent: `# Power Grid Override

The vault door slides open with a hiss. Beyond it lies a corridor pulsing with energy—cables running along every surface, each one feeding into a central power grid.

Dice leaps onto your shoulder.

*"We need to disable the grid, but first we need to know its total load. Those readings over there—"* he gestures toward a monitor displaying numbers *"—they're power consumption from each sector."*

*"Sum them up. The override code requires the total wattage."*

He scratches behind his ear thoughtfully.

*"A simple loop should do the trick. Visit each reading, add it to your running total."*`,
    theoryContent: `## Array Traversal & Summation

To sum all elements in an array, we traverse (visit) each element:

\`\`\`go
total := 0
for _, value := range readings {
    total += value
}
\`\`\`

**Time Complexity:** O(n) - we visit each element once.`,
    hasExercise: true,
    exerciseId: "arrays-2",
    order: 2,
  },
  {
    moduleSlug: "arrays",
    slug: "arrays-3",
    title: "The Highest Signal",
    storyContent: `# The Highest Signal

The power grid flickers and dies. Emergency lights bathe the corridor in red.

Dice's whiskers twitch as he taps on his earpiece.

*"We're picking up enemy transmissions—multiple frequencies. The command center broadcasts on the strongest signal. Find it."*

A wall of crackling numbers appears on your HUD—signal strengths from across the spectrum.

*"Scan through them all. Keep track of the maximum you've seen. That's your target frequency."*`,
    theoryContent: `## Finding Maximum Value

To find the max in an array:
1. Assume first element is the max
2. Compare each subsequent element
3. Update max if current is larger

\`\`\`go
max := signals[0]
for _, s := range signals[1:] {
    if s > max {
        max = s
    }
}
\`\`\``,
    hasExercise: true,
    exerciseId: "arrays-3",
    order: 3,
  },
  {
    moduleSlug: "arrays",
    slug: "arrays-4",
    title: "Mirror Protocol",
    storyContent: `# Mirror Protocol

Following the signal leads you to a server room. Banks of machines hum with encrypted data.

Dice plugs into a terminal, his tail twitching with excitement.

*"Got it! An encrypted message... but it's backwards. Classic spy tradecraft."*

He pulls up a sequence on the screen.

*"Reverse it. But here's the catch—we need to do it IN PLACE. No extra memory, no copies. The system's watching for suspicious allocations."*

*"Two pointers. One at the start, one at the end. Swap and squeeze inward."*`,
    theoryContent: `## Two-Pointer Technique: Reverse

To reverse in-place:
1. Set left pointer at start (0)
2. Set right pointer at end (n-1)
3. Swap elements at both pointers
4. Move left++, right--
5. Repeat until they meet

\`\`\`go
left, right := 0, len(arr)-1
for left < right {
    arr[left], arr[right] = arr[right], arr[left]
    left++
    right--
}
\`\`\`

**Space Complexity:** O(1) - no extra array needed!`,
    hasExercise: true,
    exerciseId: "arrays-4",
    order: 4,
  },
  {
    moduleSlug: "arrays",
    slug: "arrays-5",
    title: "The Key Pair",
    storyContent: `# The Key Pair

The decoded message reveals coordinates—and a warning.

*"The final vault requires TWO keys,"* Dice reads, his eyes scanning rapidly. *"Two access codes that, when combined, equal the master code."*

He projects an array of numbers onto the wall.

*"These are all the potential key values. The master code is our target sum. Find which TWO of these add up to it."*

*"Brute force would check every pair... but we're smarter than that, aren't we?"*

He winks.

*"Think about what you've already seen. A map of values to their positions might just save us some time."*`,
    theoryContent: `## Two Sum Problem

**Brute Force:** O(n²) - check every pair
**Optimal with Hash Map:** O(n)

For each number, ask: "Have I seen the complement?"

\`\`\`go
seen := map[int]int{}  // value -> index
for i, num := range codes {
    complement := target - num
    if j, exists := seen[complement]; exists {
        return []int{j, i}
    }
    seen[num] = i
}
\`\`\`

This is a **classic** interview question!`,
    hasExercise: true,
    exerciseId: "arrays-5",
    order: 5,
  },
];

const SEED_EXERCISES = [
  {
    id: "arrays-1",
    title: "Array Access",
    description: "Access the 3rd element of an array",
    starterCode: {
      go: `func GetAccessCode(logs []int) int {\n\treturn 0\n}`,
      python: `def get_access_code(logs):\n    return 0`,
    },
    testCases: [
      { input: [10, 20, 30, 40, 50], expected: 30 },
      { input: [1, 2, 3], expected: 3 },
    ],
    difficulty: "easy",
    xpReward: 100,
  },
  {
    id: "arrays-2",
    title: "Array Sum",
    description: "Calculate the sum of all elements",
    starterCode: {
      go: `func CalculateTotalPower(readings []int) int {\n\treturn 0\n}`,
      python: `def calculate_total_power(readings):\n    return 0`,
    },
    testCases: [
      { input: [10, 20, 30, 40, 50], expected: 150 },
      { input: [1, 2, 3, 4, 5], expected: 15 },
    ],
    difficulty: "easy",
    xpReward: 100,
  },
  {
    id: "arrays-3",
    title: "Find Maximum",
    description: "Find the maximum value in an array",
    starterCode: {
      go: `func FindStrongestSignal(signals []int) int {\n\treturn 0\n}`,
      python: `def find_strongest_signal(signals):\n    return 0`,
    },
    testCases: [
      { input: [23, 45, 12, 89, 34, 67], expected: 89 },
      { input: [1, 100, 50], expected: 100 },
    ],
    difficulty: "easy",
    xpReward: 100,
  },
  {
    id: "arrays-4",
    title: "Reverse Array",
    description: "Reverse an array in-place",
    starterCode: {
      go: `func DecodeMessage(message []int) []int {\n\treturn message\n}`,
      python: `def decode_message(message):\n    return message`,
    },
    testCases: [
      { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
      { input: [1, 2], expected: [2, 1] },
    ],
    difficulty: "medium",
    xpReward: 150,
  },
  {
    id: "arrays-5",
    title: "Two Sum",
    description: "Find indices of two numbers that sum to target",
    starterCode: {
      go: `func FindKeyPair(codes []int, target int) []int {\n\treturn []int{-1, -1}\n}`,
      python: `def find_key_pair(codes, target):\n    return [-1, -1]`,
    },
    testCases: [
      { input: { codes: [2, 7, 11, 15], target: 22 }, expected: [1, 3] },
      { input: { codes: [3, 3], target: 6 }, expected: [0, 1] },
    ],
    difficulty: "medium",
    xpReward: 200,
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
      console.log(`  - Exists: ${mod.title}`);
      moduleIdMap[mod.slug] = existing[0].id;
    }
  }

  // Seed Exercises
  console.log("\n🏋️ Seeding exercises...");
  for (const ex of SEED_EXERCISES) {
    const existing = await db.select().from(exercises).where(eq(exercises.id, ex.id));

    if (existing.length === 0) {
      console.log(`  ✓ Inserting: ${ex.title}`);
      await db.insert(exercises).values({
        id: ex.id,
        title: ex.title,
        description: ex.description,
        starterCode: ex.starterCode,
        testCases: ex.testCases,
        difficulty: ex.difficulty,
        xpReward: ex.xpReward,
      });
    } else {
      console.log(`  - Exists: ${ex.title}`);
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
      console.log(`  - Exists: ${lesson.title}`);
    }
  }

  console.log("\n✅ Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
