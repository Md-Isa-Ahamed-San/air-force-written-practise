import { api, HydrateClient } from "~/trpc/server";
import { DashboardPage } from "@/components/dashboard/DashboardPage";

export const dynamic = "force-dynamic";

export default async function AnalyticsDashboardPage() {
  void api.stats.getOverview.prefetch();
  void api.stats.getSessionHistory.prefetch();
  void api.stats.getQuestionAccuracy.prefetch();
  void api.stats.getWeakQuestions.prefetch();
  void api.stats.getMastery.prefetch();

  return (
    <HydrateClient>
      <DashboardPage />
    </HydrateClient>
  );
}
