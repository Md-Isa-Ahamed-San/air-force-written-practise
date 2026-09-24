---
name: t3-stack-patterns
description: >-
  Use this skill when writing or modifying code in this T3 Stack project.
  It covers tRPC router patterns, Prisma usage, Next.js App Router conventions,
  and TanStack Query integration specific to the T3 boilerplate structure.
---

# T3 Stack Patterns

This project uses the T3 Stack. Follow these patterns.

## tRPC Routers

- Define routers in `src/server/api/routers/`
- Register routers in `src/server/api/root.ts`
- Use `publicProcedure` or `protectedProcedure` (if auth is added)
- Always validate input with Zod schemas

```typescript
// src/server/api/routers/example.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.example.findMany();
  }),
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.example.create({ data: input });
    }),
});
```

## Client-Side Data Fetching

- Use `api.<router>.<procedure>.useQuery()` in client components
- Use `api.<router>.<procedure>.prefetch()` in server components for hydration
- Wrap pages in `<HydrateClient>` when using prefetched data

## Prisma

- Schema lives in `prisma/schema.prisma`
- Access the client via `ctx.db` in tRPC procedures
- Run `npx prisma db push` for quick schema iteration
- Run `npx prisma migrate dev` for proper migrations

## Environment Variables

- Define and validate in `src/env.js` using `@t3-oss/env-nextjs`
- Access via `import { env } from "~/env"` — never `process.env` directly
