import { api, HydrateClient } from "~/trpc/server";
import { AdminQuizSetList } from "@/components/admin/AdminQuizSetList";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  void api.quizSet.getAll.prefetch();

  return (
    <HydrateClient>
      <AdminQuizSetList />
    </HydrateClient>
  );
}
