import { Skeleton } from "@/components/ui/skeleton";

export function QuizEngineSkeleton() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Quiz Top bar skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card/60 p-4 rounded-2xl border border-border/50">
        <div className="space-y-2">
          <Skeleton className="h-6 w-48 rounded" />
          <Skeleton className="h-3 w-32 rounded" />
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Skeleton className="h-3 w-32 rounded-full" />
          <Skeleton className="h-9 w-28 rounded-lg" />
        </div>
      </div>

      {/* Main split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Image Viewer area */}
        <div className="lg:col-span-8 bg-card/40 rounded-2xl border border-border/50 p-4 min-h-[460px] flex flex-col justify-between">
          <div className="flex justify-between items-center pb-3">
            <Skeleton className="h-5 w-24 rounded" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-8 rounded-lg" />
              <Skeleton className="h-8 w-8 rounded-lg" />
            </div>
          </div>
          <Skeleton className="w-full flex-1 rounded-xl min-h-[360px]" />
        </div>

        {/* Input & Question Navigator */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-card/40 rounded-2xl border border-border/50 p-5 space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton className="h-5 w-20 rounded" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="grid grid-cols-4 gap-2 pt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-12 rounded-xl" />
              ))}
            </div>
            <Skeleton className="h-10 w-full rounded-xl" />
            <div className="flex justify-between gap-3 pt-2">
              <Skeleton className="h-10 flex-1 rounded-xl" />
              <Skeleton className="h-10 flex-1 rounded-xl" />
            </div>
          </div>

          <div className="bg-card/40 rounded-2xl border border-border/50 p-5 space-y-3">
            <Skeleton className="h-5 w-32 rounded" />
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <Skeleton key={i} className="h-9 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
