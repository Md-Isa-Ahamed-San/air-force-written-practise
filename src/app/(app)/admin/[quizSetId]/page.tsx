import { api, HydrateClient } from "~/trpc/server";
import { EditQuizSetPage } from "@/components/admin/EditQuizSetPage";

export const dynamic = "force-dynamic";

export default async function AdminEditQuizSetPage({
  params,
}: {
  params: Promise<{ quizSetId: string }>;
}) {
  const { quizSetId } = await params;

  void api.quizSet.getById.prefetch({ id: quizSetId });
  void api.answer.getByQuizSet.prefetch({ quizSetId });

  return (
    <HydrateClient>
      <EditQuizSetPage quizSetId={quizSetId} />
    </HydrateClient>
  );
}
