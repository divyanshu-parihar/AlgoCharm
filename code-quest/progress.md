# Code Quest - Project Progress Report
**Date:** 2025-12-24

## 1. Project Overview
**Code Quest** is a gamified CLI-first platform for mastering Data Structures and Algorithms.
**Stack:** Next.js 16 (App Router), Drizzle ORM, PostgreSQL (Supabase/Neon), Clerk Auth, Tailwind CSS.

---

## 2. Status by Component

### 🏗️ Infrastructure
- [x] **Database Setup**: PostgreSQL connected via Drizzle ORM.
- [x] **Schema Design**: Tables for `users`, `modules`, `lessons`, `exercises`, `user_progress` defined.
- [x] **Migrations**: Initial migrations pushed to Supabase.
- [x] **Authentication**: Clerk installed and wrapped in RootLayout.
- [x] **Environment**: `.env.local` configured with DB connection.

### 🎨 Frontend (Web)
- [x] **Landing Page**: Brutalist/Cyberpunk aesthetic implemented. Responsive.
- [x] **Campaign Map**: 
    - [x] Visual design (Nodes/Paths).
    - [x] Database connection (Fetches Modules from DB).
- [ ] **Lesson Interface**: 
    - [x] Layout (Story Panel / Action Panel).
    - [ ] Database Connection (Currently uses Mock Data).
    - [ ] Markdown Rendering for Story Content.
- [ ] **User Dashboard**:
    - [ ] Profile / Stats view.
    - [ ] Progress tracking visualization.

### 🛠️ Backend / API
- [x] **DB Seeding Script**: Basic script to seed `modules`.
- [ ] **Content Seeding**: Script needs to be expanded to seed `lessons` and `exercises`.
- [ ] **Mission API**: API endpoints for the CLI to fetch missions (instructions/starter code).
- [ ] **Submission API**: API to receive code/results from the CLI.

### 💻 CLI Tool (The "Game" Client)
- [ ] **Core Logic**: Logic to authenticate user via API Key.
- [ ] **Mission Fetching**: Ability to pull mission files to local disk.
- [ ] **Test Runner**: Local execution of user code against hidden test cases (or server-side execution?).
- *Current Status*: Only a mock `mission-service.ts` exists in the web repo.

---

## 3. Immediate Next Steps (Priority Order)

1.  **Content Expansion**: Update `db/seed.ts` to include initial Lessons and Exercises for "The Array Archives".
2.  **Lesson Page Integration**: Update `app/campaign/[module]/[lesson]/page.tsx` to fetch real data from the DB based on the URL params.
3.  **Markdown Support**: Install a markdown renderer (e.g., `react-markdown`) to properly display story/theory content.
4.  **CLI API Definition**: Define the exact JSON structure the CLI expects.

---

## 4. Known Issues / Debt
- **Middleware Warning**: Next.js deprecation warning for middleware (minor).
- **Hardcoded Mocks**: `app/campaign/[module]/[lesson]/page.tsx` relies on `MOCK_LESSON`.
