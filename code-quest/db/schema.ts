import { pgTable, serial, text, integer, boolean, timestamp, jsonb, primaryKey } from "drizzle-orm/pg-core";

// 1. USERS: Extends Clerk auth with game-specific stats
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: text("clerk_id").unique().notNull(), // Link to Clerk
  email: text("email").notNull(),
  username: text("username"),

  // Game Stats
  level: integer("level").default(1),
  xp: integer("xp").default(0),
  apiKey: text("api_key").unique(), // For the CLI tool to authenticate

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// 2. MODULES: The broad chapters (e.g., "The Array Archives", "The Linked List Labyrinth")
export const modules = pgTable("modules", {
  id: serial("id").primaryKey(),
  slug: text("slug").unique().notNull(), // e.g., 'arrays', 'linked-lists'
  title: text("title").notNull(),
  description: text("description").notNull(),
  order: integer("order").notNull(), // 1, 2, 3...
  isLocked: boolean("is_locked").default(true),
});

// 3. LESSONS: The individual story beats. Some have coding exercises, some are just lore/theory.
export const lessons = pgTable("lessons", {
  id: serial("id").primaryKey(),
  moduleId: integer("module_id").references(() => modules.id).notNull(),
  slug: text("slug").unique().notNull(), // e.g., 'arrays-intro', 'binary-search-story'
  title: text("title").notNull(),

  // Content
  storyContent: text("story_content").notNull(), // Markdown format: The narrative part
  theoryContent: text("theory_content"), // Markdown: The actual CS concept explanation

  // CLI Integration
  hasExercise: boolean("has_exercise").default(false),
  exerciseId: text("exercise_id"), // ID used by CLI to fetch specific problem (if hasExercise is true)

  order: integer("order").notNull(),
});

// 4. EXERCISES: Technical details for the coding challenges
export const exercises = pgTable("exercises", {
  id: text("id").primaryKey(), // e.g., 'two-sum', 'reverse-linked-list'
  title: text("title").notNull(),
  description: text("description").notNull(), // Problem statement

  // Boilerplate code for different languages
  starterCode: jsonb("starter_code").notNull(), // { "typescript": "export function solve()...", "go": "func Solve()...", "cpp": "class Solution..." }

  // Test cases split into public (shown to user) and hidden (for verification)
  publicTests: jsonb("public_tests").notNull(),  // 2-3 example tests shown upfront
  hiddenTests: jsonb("hidden_tests").notNull(),  // 5-10 tests for server verification

  difficulty: text("difficulty").default("easy"), // easy, medium, hard, boss
  xpReward: integer("xp_reward").default(100),
});

// 5. TEST SESSIONS: Challenge-response verification for CLI submissions
export const testSessions = pgTable("test_sessions", {
  id: text("id").primaryKey(), // UUID v4

  userId: integer("user_id").references(() => users.id).notNull(),
  exerciseId: text("exercise_id").references(() => exercises.id).notNull(),

  // Challenge data
  testInputs: jsonb("test_inputs").notNull(),     // Array of test inputs sent to CLI
  expectedHash: text("expected_hash").notNull(),  // SHA256 of correct outputs

  // Timing
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at").notNull(),   // 30 min TTL
});

// 6. USER PROGRESS: Tracking what they've completed
export const userProgress = pgTable("user_progress", {
  userId: integer("user_id").references(() => users.id).notNull(),
  lessonId: integer("lesson_id").references(() => lessons.id).notNull(),

  status: text("status").default("locked"), // locked, active, completed
  completedAt: timestamp("completed_at"),

  // Optional: Link to the code they submitted
  submissionUrl: text("submission_url"),
}, (t) => ({
  pk: primaryKey({ columns: [t.userId, t.lessonId] }),
}));
