import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-9 w-52 rounded-lg" />
        <Skeleton className="h-4 w-72 rounded" />
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl border border-border/50 bg-card/40 space-y-3"
          >
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-28 rounded" />
              <Skeleton className="h-8 w-8 rounded-lg" />
            </div>
            <Skeleton className="h-8 w-20 rounded" />
            <Skeleton className="h-3 w-36 rounded" />
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-border/50 bg-card/40 space-y-4">
          <Skeleton className="h-6 w-44 rounded" />
          <Skeleton className="h-[280px] w-full rounded-xl" />
        </div>
        <div className="p-6 rounded-2xl border border-border/50 bg-card/40 space-y-4">
          <Skeleton className="h-6 w-52 rounded" />
          <Skeleton className="h-[280px] w-full rounded-xl" />
        </div>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-border/50 bg-card/40 space-y-4">
          <Skeleton className="h-6 w-48 rounded" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded-lg" />
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl border border-border/50 bg-card/40 space-y-4">
          <Skeleton className="h-6 w-44 rounded" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
