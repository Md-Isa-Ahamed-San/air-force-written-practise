import { Skeleton } from "@/components/ui/skeleton";

export function QuizSetGridSkeleton() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="space-y-2">
        <Skeleton className="h-9 w-60 rounded-lg" />
        <Skeleton className="h-4 w-80 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-border/50 bg-card/40 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <Skeleton className="h-6 w-4/5 rounded-md" />
              <div className="flex gap-2">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-border/30">
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-4 w-12 rounded" />
              </div>
              <Skeleton className="h-2 w-full rounded-full" />
              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
