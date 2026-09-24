import { api, HydrateClient } from "~/trpc/server";
import { QuizSetGrid } from "@/components/quiz/QuizSetGrid";

export const dynamic = "force-dynamic";

export default async function QuizListPage() {
  void api.quizSet.getAll.prefetch();

  return (
    <HydrateClient>
      <QuizSetGrid />
    </HydrateClient>
  );
}
