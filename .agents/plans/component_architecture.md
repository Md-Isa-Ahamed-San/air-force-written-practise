# 🧩 Component Architecture & Relationship Plan

> **Pattern:** RSC pages prefetch → `<HydrateClient>` → client components consume via `api.x.useQuery()`  
> **Rule:** No `useEffect`. No server actions. No raw fetch. tRPC hooks only.

---

## Component Legend

| Symbol | Meaning |
|--------|---------|
| 🟦 | Server Component (RSC) |
| 🟧 | Client Component (`"use client"`) |
| 📦 | Shared / UI component |
| 💀 | Has loading skeleton |

---

## Global Layout Components

### Root Layout (`src/app/layout.tsx`) 🟦
```
layout.tsx (RSC)
├── <TRPCReactProvider>          — already exists, wraps QueryClientProvider + tRPC
│   └── {children}
```

### App Shell Layout (`src/app/(app)/layout.tsx`) 🟧 💀

```
(app)/layout.tsx (client — needs active route state for sidebar)
├── <AppSidebar />               🟧
│   ├── Logo / App title
│   ├── <SidebarNavItem to="/dashboard" icon={BarChart3} />
│   ├── <SidebarNavItem to="/quiz" icon={BookOpen} />
│   └── <SidebarNavItem to="/admin" icon={Settings} />
├── <TopBar />                   🟧
│   └── Page title (from route) + optional breadcrumb
└── <main>{children}</main>
```

**Skeleton:** Sidebar renders instantly (static nav links). Main content area shows page-level skeleton.

---

## §1 — Admin Pages

### Admin Quiz Set List (`/admin/page.tsx`) 🟦 💀

```
page.tsx (RSC — prefetch quizSet.getAll)
└── <HydrateClient>
    └── <AdminQuizSetList />                    🟧
        ├── <CreateQuizSetButton />             🟧
        │   └── <Dialog>                        📦 shadcn
        │       └── <CreateQuizSetForm />       🟧
        │           ├── <Input name="title" />
        │           └── <Button type="submit" />
        │           └── uses: api.quizSet.create.useMutation()
        │                     → invalidates: quizSet.getAll
        │
        └── <QuizSetCard />                     📦 (mapped for each quiz set)
            ├── Title
            ├── Badge: "{n} images" / "{n} questions"
            ├── Badge: "{n} sessions"
            ├── <Link to="/admin/{id}">Edit</Link>
            └── <DeleteQuizSetButton />         🟧
                └── uses: api.quizSet.delete.useMutation()
                          → invalidates: quizSet.getAll
```

**Data:** `api.quizSet.getAll.useQuery()` → returns `QuizSet[]` with `_count: { images, answers, sessions }`

**Skeleton — `<AdminQuizSetListSkeleton />`:**
- 4× `<Skeleton className="h-36 w-full rounded-xl" />` in a 2-col grid

---

### Create Quiz Set (`/admin/new/page.tsx`) 🟦

```
page.tsx (RSC — no prefetch needed, this is a form page)
└── <CreateQuizSetPage />                       🟧
    ├── <QuizSetTitleForm />                    🟧
    │   └── uses: api.quizSet.create.useMutation()
    │            → onSuccess: redirect to /admin/{newId}
```

No skeleton needed — renders instantly (just a form).

---

### Edit Quiz Set (`/admin/[quizSetId]/page.tsx`) 🟦 💀

```
page.tsx (RSC — prefetch quizSet.getById + answer.getByQuizSet)
└── <HydrateClient>
    └── <EditQuizSetPage quizSetId={id} />      🟧
        │
        ├── <ImageUploadSection />              🟧
        │   ├── <CloudinaryUploadWidget />      🟧 (from next-cloudinary)
        │   │   └── onSuccess: calls api.image.addToQuizSet.useMutation()
        │   │                  → invalidates: quizSet.getById
        │   │
        │   └── <ImageGallery />                🟧
        │       └── (maps over quizSet.images, sorted by `order`)
        │           └── <ImageCard />           📦
        │               ├── <CldImage />        📦 (next-cloudinary)
        │               ├── Order badge
        │               └── <RemoveImageButton />
        │                   └── uses: api.image.removeFromQuizSet.useMutation()
        │
        ├── <MdxUploadSection />                🟧
        │   ├── <FileInput accept=".mdx,.md,.txt" />
        │   │   └── onFileSelect: reads file as text (FileReader in onChange)
        │   │
        │   ├── <MdxPreview rawText={text} />   📦
        │   │   └── Shows parsed Q/A pairs before confirming
        │   │
        │   └── <ConfirmUploadButton />         🟧
        │       └── uses: api.answer.uploadMdx.useMutation()
        │                → invalidates: answer.getByQuizSet, quizSet.getById
        │
        └── <AnswerList />                      🟧
            └── uses: api.answer.getByQuizSet.useQuery()
            └── <Table> rows: Q#, Answer </Table>
```

**Skeleton — `<EditQuizSetSkeleton />`:**
- Left: `<Skeleton className="h-32 w-32" />` × 4 in a grid
- Right: `<Skeleton className="h-8 w-full" />` × 6 in a column

---

## §2 — Quiz Pages

### Quiz Set Selection (`/quiz/page.tsx`) 🟦 💀

```
page.tsx (RSC — prefetch quizSet.getAll)
└── <HydrateClient>
    └── <QuizSetGrid />                         🟧
        └── uses: api.quizSet.getAll.useQuery()
        └── maps → <QuizSetPickCard />          📦
            ├── Title
            ├── "{n} questions" badge
            ├── Last score (if any session exists)
            ├── Mastery % progress bar
            └── <Link to="/quiz/{id}">Start Quiz</Link>
```

**Skeleton — `<QuizSetGridSkeleton />`:**
- 6× `<Skeleton className="h-40 w-full rounded-xl" />` in a responsive grid

---

### Active Quiz (`/quiz/[quizSetId]/page.tsx`) 🟦 💀

```
page.tsx (RSC — prefetch quizSet.getById for images + answer count)
└── <HydrateClient>
    └── <QuizEngine quizSetId={id} />           🟧 (THE core component)
        │
        │ State (useReducer):
        │   currentQuestion: number
        │   answers: Map<qNumber, string>
        │   timers: Map<qNumber, number>        // ms per question
        │   timerStart: number                  // Date.now() when Q shown
        │   phase: "answering" | "reviewing" | "submitted"
        │
        │ Data:
        │   api.quizSet.getById.useQuery(quizSetId)
        │   api.quiz.submitSession.useMutation()
        │
        ├── <QuizHeader />                      📦
        │   ├── Quiz title
        │   ├── Progress: "Q {n} / {total}"
        │   └── <Progress value={progress%} />  📦 shadcn
        │
        ├── <QuizImageViewer />                 🟧
        │   ├── <CldImage />                    📦 (current page image)
        │   └── Pinch-to-zoom / scroll support
        │
        ├── <AnswerInputPanel />                🟧
        │   ├── <QuestionTimer />               📦 (elapsed time for current Q)
        │   ├── <Input />                       📦 (answer input, auto-focus)
        │   ├── <QuestionNavigator />           🟧
        │   │   ├── grid of Q# buttons (1-30)
        │   │   ├── color: answered=green / current=blue / unanswered=gray
        │   │   └── onClick: dispatch({ type: "GO_TO_QUESTION", qNumber })
        │   └── <div> Prev / Next buttons </div>
        │
        └── <SubmitQuizDialog />                🟧
            ├── Shows: answered count / total, unanswered list
            ├── Confirm button
            └── onConfirm: api.quiz.submitSession.mutate(...)
                → phase → "submitted" → renders <QuizResults />
```

**Skeleton — `<QuizEngineSkeleton />`:**
- Large image skeleton (h-96) + input skeleton + number grid circles

---

## §3 — Quiz Results

```
<QuizResults results={mutationData} />          🟧
├── <ScoreSummary />                            📦
│   ├── Big score: "24 / 30"
│   ├── Percentage badge (color-coded)
│   └── Time taken total
│
├── <ResultsBreakdown />                        🟧
│   └── <ScrollArea>
│       └── maps → <ResultRow />                📦
│           ├── Q#, Your answer, Correct answer (if wrong), ✅/❌, Time
│
└── <ResultActions />                           📦
    ├── <Button> Retry Quiz </Button>
    └── <Button> Back to Quiz List </Button>
```

No skeleton — renders from mutation response.

---

## §4 — Stats Dashboard

### Dashboard (`/dashboard/page.tsx`) 🟦 💀

```
page.tsx (RSC — prefetch stats.getOverview, stats.getSessionHistory)
└── <HydrateClient>
    └── <DashboardPage />                       🟧
        ├── <StatsOverviewCards />               🟧
        │   └── uses: api.stats.getOverview.useQuery()
        │   └── 4× <StatCard />: Sessions, Avg Score, Best Session, Mastery
        │
        ├── <ScoreOverTimeChart />               🟧
        │   └── uses: api.stats.getSessionHistory.useQuery()
        │   └── recharts <LineChart>
        │
        ├── <AvgTimePerQuestionChart />          🟧
        │   └── uses: api.stats.getQuestionAccuracy.useQuery()
        │   └── recharts <BarChart>
        │
        ├── <WeakQuestionsTable />               🟧
        │   └── uses: api.stats.getWeakQuestions.useQuery()
        │   └── <Table> columns: Quiz Set, Q#, Times Wrong, Last Answer
        │
        └── <MasteryByQuizSet />                 🟧
            └── uses: api.stats.getMastery.useQuery()
            └── maps → <MasteryCard /> with <Progress>
```

**Skeleton — `<DashboardSkeleton />`:**
- 4 stat card skeletons + chart area skeleton + 2 table skeletons

---

## Skeleton Summary

| Page | Skeleton | Shows |
|------|----------|-------|
| `/admin` | `AdminQuizSetListSkeleton` | 4 card placeholders (2-col grid) |
| `/admin/[id]` | `EditQuizSetSkeleton` | Title + image grid + answer table |
| `/quiz` | `QuizSetGridSkeleton` | 6 card placeholders (responsive grid) |
| `/quiz/[id]` | `QuizEngineSkeleton` | Image area + input + number grid |
| `/dashboard` | `DashboardSkeleton` | Stat cards + chart area + tables |
| `/login` | None | Static form |
| `/admin/new` | None | Static form |

---

## Data Hook Usage Matrix

| Component | Hook | Returns |
|-----------|------|---------|
| `AdminQuizSetList` | `api.quizSet.getAll.useQuery()` | `QuizSet[]` with counts |
| `EditQuizSetPage` | `api.quizSet.getById.useQuery(id)` | `QuizSet` with images + answers |
| `AnswerList` | `api.answer.getByQuizSet.useQuery(id)` | `Answer[]` |
| `CreateQuizSetForm` | `api.quizSet.create.useMutation()` | → new `QuizSet` |
| `ImageUploadSection` | `api.image.addToQuizSet.useMutation()` | → invalidates `quizSet.getById` |
| `MdxUploadSection` | `api.answer.uploadMdx.useMutation()` | → invalidates `answer.getByQuizSet` |
| `QuizSetGrid` | `api.quizSet.getAll.useQuery()` | `QuizSet[]` with counts |
| `QuizEngine` | `api.quizSet.getById.useQuery(id)` | `QuizSet` with images |
| `SubmitQuizDialog` | `api.quiz.submitSession.useMutation()` | → results |
| `StatsOverviewCards` | `api.stats.getOverview.useQuery()` | summary stats |
| `ScoreOverTimeChart` | `api.stats.getSessionHistory.useQuery()` | `Session[]` |
| `WeakQuestionsTable` | `api.stats.getWeakQuestions.useQuery()` | weak Q list |
| `MasteryByQuizSet` | `api.stats.getMastery.useQuery()` | mastery per set |
