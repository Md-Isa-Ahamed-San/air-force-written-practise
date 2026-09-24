# 🎯 Air Force Written Exam Quiz Practice — Implementation Plan v2

> **Stack:** Next.js 15 (App Router) · TypeScript · tRPC 11 · Prisma 6 + Neon · Tailwind CSS 4 · shadcn/ui  
> **Data layer:** tRPC routers (server) → `api.x.useQuery()` / `api.x.useMutation()` hooks (client)  
> **Rules:** No `useEffect` anywhere. No raw `fetch`. No server actions. tRPC handles everything.

---

## Environment Variables (already set up)

```env
DATABASE_URL="postgresql://...neon..."        # Neon Postgres
NEXT_PUBLIC_CLOUDINARY_PRESET="cpezrcat"      # Cloudinary unsigned upload preset
NEXT_PUBLIC_CLOUD_NAME="djyzlmzoe"            # Cloudinary cloud name
NEXT_PUBLIC_CLOUDINARY_FOLDER="airForceWrittenPractise"  # Cloudinary folder
```

No server-side Cloudinary keys needed — using **unsigned upload preset** (upload happens client-side directly to Cloudinary, returns URL, we store URL in DB via tRPC mutation).

---

## Non-Goals

- ❌ No OCR / AI
- ❌ No NextAuth / OAuth — just middleware password
- ❌ No `useEffect` anywhere — React Query handles all data fetching + side effects
- ❌ No server actions — tRPC is the API layer
- ❌ No raw `fetch` calls — everything goes through tRPC hooks

---

## Data Model (Prisma)

```prisma
QuizSet  1 ──→ N  Image      (book page photos, ordered)
QuizSet  1 ──→ N  Answer     (parsed from MDX: q1=A, q2=C, ...)
QuizSet  1 ──→ N  Session    (each quiz attempt)
Session  1 ──→ N  Attempt    (per-question result)
Answer   1 ──→ N  Attempt    (which answer was attempted)
```

---

## Route Structure

```
src/app/
├── layout.tsx                           # Root layout: fonts, QueryProvider, ThemeProvider
├── page.tsx                             # Landing → redirect to /quiz
│
├── (app)/                               # Route group — app shell with sidebar
│   ├── layout.tsx                       # AppShell (Sidebar + TopBar + main content area)
│   │
│   ├── dashboard/
│   │   └── page.tsx                     # Stats dashboard — RSC, prefetch stats
│   │
│   ├── quiz/
│   │   ├── page.tsx                     # Quiz set list — RSC, prefetch all quiz sets
│   │   └── [quizSetId]/
│   │       └── page.tsx                 # Active quiz — RSC shell, client quiz engine
│   │
│   └── admin/
│       ├── page.tsx                     # Admin quiz set list — RSC, prefetch
│       ├── new/
│       │   └── page.tsx                 # Create quiz set (client-heavy: upload + form)
│       └── [quizSetId]/
│           └── page.tsx                 # Edit quiz set — RSC shell, client editors
│
├── login/
│   └── page.tsx                         # Password login (no layout shell)
│
└── api/trpc/[trpc]/route.ts             # tRPC HTTP handler (exists)
```

---

## tRPC Routers

| Router | Procedure | Type | What it does |
|--------|-----------|------|-------------|
| **quizSet** | `getAll` | query | List all quiz sets with `_count` of images, answers, sessions |
| | `getById` | query | Single quiz set with images (ordered) + answers |
| | `create` | mutation | Create empty quiz set with title |
| | `delete` | mutation | Delete quiz set + cascade all children |
| **image** | `addToQuizSet` | mutation | Save Cloudinary URL + order to quiz set |
| | `removeFromQuizSet` | mutation | Delete image record |
| | `reorder` | mutation | Batch update `order` field |
| **answer** | `uploadMdx` | mutation | Receive raw MDX text → parse with gray-matter → validate → delete old answers → bulk insert |
| | `getByQuizSet` | query | All answers for a quiz set ordered by qNumber |
| **quiz** | `submitSession` | mutation | `{ quizSetId, attempts[] }` → compare answers → create Session + Attempts in transaction → return results |
| **stats** | `getOverview` | query | Total sessions, avg score, best/worst session |
| | `getSessionHistory` | query | All sessions with scores + dates (line chart data) |
| | `getQuestionAccuracy` | query | Per-question correct/total ratio |
| | `getWeakQuestions` | query | Questions wrong ≥ 2 times |
| | `getMastery` | query | Mastery % per quiz set |

---

## Packages to Install

```bash
pnpm add next-cloudinary gray-matter recharts
npx shadcn@latest init
# Then add components as needed:
# npx shadcn@latest add button card input dialog table tabs skeleton badge separator scroll-area progress
```

---

## Build Order (7 Phases)

### Phase 1: Foundation
> Schema + env + packages + shadcn

- [ ] **1.1** Replace `Post` model in `prisma/schema.prisma` with QuizSet, Image, Answer, Session, Attempt
- [ ] **1.2** Add `NEXT_PUBLIC_CLOUDINARY_PRESET`, `NEXT_PUBLIC_CLOUD_NAME`, `NEXT_PUBLIC_CLOUDINARY_FOLDER` to `src/env.js` client schema + add `ADMIN_PASSWORD` to server schema
- [ ] **1.3** Update `.env.example` with all env var placeholders
- [ ] **1.4** `pnpm add next-cloudinary gray-matter recharts`
- [ ] **1.5** `npx shadcn@latest init` → add core components (button, card, input, skeleton, dialog, table, tabs, badge, separator, scroll-area, progress)
- [ ] **1.6** `npx prisma db push`
- [ ] **1.7** Type check gate

### Phase 2: Cloudinary + Admin Quiz Set CRUD
> tRPC routers + admin pages + image upload

- [ ] **2.1** Create `quizSet` router: `getAll`, `getById`, `create`, `delete`
- [ ] **2.2** Create `image` router: `addToQuizSet`, `removeFromQuizSet`, `reorder`
- [ ] **2.3** Register routers in `root.ts`, delete `post` router + `post.ts` file
- [ ] **2.4** Configure `next.config.js` for Cloudinary image domain
- [ ] **2.5** Build admin pages: list, create, edit (see Component Plan §2)
- [ ] **2.6** Type check gate

### Phase 3: MDX Upload → Parse → Store
> Parser utility + answer router + admin upload section

- [ ] **3.1** Create `src/lib/parse-mdx.ts` — gray-matter parse + regex extract + validation
- [ ] **3.2** Create `answer` router: `uploadMdx`, `getByQuizSet`
- [ ] **3.3** Add MDX upload section to admin create/edit pages (see Component Plan §3)
- [ ] **3.4** Type check gate

### Phase 4: Quiz Mode UI
> Quiz taking experience — image display + answer input + timer

- [ ] **4.1** Build quiz selection page
- [ ] **4.2** Build quiz engine (client component with useReducer for state)
- [ ] **4.3** Build quiz sub-components (see Component Plan §4)
- [ ] **4.4** Type check gate

### Phase 5: Answer Verification + Results
> Submit session + results display

- [ ] **5.1** Create `quiz` router: `submitSession` (transaction: compare answers → create Session + Attempts)
- [ ] **5.2** Build results view (see Component Plan §5)
- [ ] **5.3** Type check gate

### Phase 6: Stats Dashboard
> Stats router + recharts

- [ ] **6.1** Create `stats` router: `getOverview`, `getSessionHistory`, `getQuestionAccuracy`, `getWeakQuestions`, `getMastery`
- [ ] **6.2** Build dashboard page + chart components (see Component Plan §6)
- [ ] **6.3** Type check gate

### Phase 7: Auth + App Shell + Polish
> Middleware, login, sidebar, cleanup

- [ ] **7.1** Create `src/middleware.ts` — cookie check → redirect `/login`
- [ ] **7.2** Build login page
- [ ] **7.3** Build app shell layout with sidebar
- [ ] **7.4** Clean up T3 boilerplate (LatestPost, default page, post router)
- [ ] **7.5** Final type check + full review

---

## Success Criteria

- [ ] Quiz sets can be created with Cloudinary images + MDX answer upload
- [ ] MDX parser handles both English (A,B,C,D) and Bangla (ক,খ,গ,ঘ) answers
- [ ] Quiz mode shows image, accepts answers, tracks time per question
- [ ] Session results are saved and displayed correctly
- [ ] Stats dashboard renders all 6 metric types with recharts
- [ ] No `useEffect` anywhere — all data via tRPC hooks
- [ ] Password middleware blocks unauthenticated access
- [ ] `npx tsc --noEmit` passes with zero errors
