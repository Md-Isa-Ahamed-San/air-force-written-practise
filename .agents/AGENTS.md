# Air Force Written Exam Quiz Practice — Workspace Rules

> This is an Air Force written exam practice application built with the **T3 Stack** (Next.js 15, tRPC, Prisma, Tailwind CSS 4, TypeScript).

---

## Project Overview

A quiz/practice app for Bangladesh Air Force written examination preparation. The app helps candidates practice questions across different subjects, track progress, and improve their performance.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.8
- **API Layer:** tRPC 11
- **Database ORM:** Prisma 6
- **Styling:** Tailwind CSS 4
- **State/Data Fetching:** TanStack React Query 5
- **Package Manager:** pnpm

---

## Coding Standards

### Always Do

- Use `@/` path aliases for all imports (never relative `../../` paths)
- Use TypeScript strict mode — no `any` types, no `@ts-ignore`
- Run `npx tsc --noEmit` after code changes to verify zero type errors
- Use server components by default; only add `"use client"` when interactive state is needed
- Verify imports exist before using them — grep the source file to confirm exports
- Check `package.json` before adding new dependencies to avoid duplicates
- Use Context7 MCP to verify modern API usage for Next.js 15, React 19, tRPC 11, Prisma 6, and TanStack Query 5

### Never Do

- Never use deprecated React patterns (`useFormState`, synchronous `params`/`searchParams`)
- Never add `console.log` in production code — use proper error handling
- Never leave unused imports or dead code
- Never skip type checking before committing

---

## Architecture Conventions

- **Pages:** `src/app/(routes)/page.tsx`
- **Components:** `src/app/_components/` for shared, route-level `_components/` for local
- **Server procedures:** `src/server/api/routers/` (tRPC routers)
- **Database schema:** `prisma/schema.prisma`
- **Environment:** `src/env.js` (T3 env validation with `@t3-oss/env-nextjs`)
