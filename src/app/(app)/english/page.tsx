import { api, HydrateClient } from "~/trpc/server";
import { EnglishQuizGrid } from "@/components/english/EnglishQuizGrid";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "English Practice Hub • BAF Written Exam",
  description:
    "Upload custom English question sets in JSON format and take timed practice exams with quadrant pacing analytics.",
};

export default async function EnglishPracticePage() {
  void api.englishQuiz.getAll.prefetch();

  return (
    <HydrateClient>
      <EnglishQuizGrid />
    </HydrateClient>
  );
}
