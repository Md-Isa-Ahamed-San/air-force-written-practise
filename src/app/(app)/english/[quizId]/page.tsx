import { api, HydrateClient } from "~/trpc/server";
import { EnglishQuizEngine } from "@/components/english/EnglishQuizEngine";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Active English Examination • BAF Written Exam",
  description:
    "Timed English MCQ practice with live question tracking and instant pacing analytics.",
};

export default async function ActiveEnglishQuizPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;

  void api.englishQuiz.getById.prefetch({ id: quizId });

  return (
    <HydrateClient>
      <EnglishQuizEngine quizId={quizId} />
    </HydrateClient>
  );
}
