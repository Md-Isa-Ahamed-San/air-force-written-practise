import { api, HydrateClient } from "~/trpc/server";
import { QuizEngine } from "@/components/quiz/QuizEngine";

export const dynamic = "force-dynamic";

export default async function ActiveQuizPage({
  params,
}: {
  params: Promise<{ quizSetId: string }>;
}) {
  const { quizSetId } = await params;

  void api.quizSet.getById.prefetch({ id: quizSetId });

  return (
    <HydrateClient>
      <QuizEngine quizSetId={quizSetId} />
    </HydrateClient>
  );
}
