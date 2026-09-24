import { answerRouter } from "~/server/api/routers/answer";
import { imageRouter } from "~/server/api/routers/image";
import { quizRouter } from "~/server/api/routers/quiz";
import { quizSetRouter } from "~/server/api/routers/quizSet";
import { statsRouter } from "~/server/api/routers/stats";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  quizSet: quizSetRouter,
  image: imageRouter,
  answer: answerRouter,
  quiz: quizRouter,
  stats: statsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 */
export const createCaller = createCallerFactory(appRouter);
