import { Skeleton } from "@/components/ui/skeleton";

export function EditQuizSetSkeleton() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border/40 pb-5">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64 rounded-lg" />
          <Skeleton className="h-4 w-40 rounded" />
        </div>
        <Skeleton className="h-10 w-28 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Images */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-36 rounded-md" />
            <Skeleton className="h-9 w-32 rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-xl border border-border/50 bg-card/40 p-2 flex flex-col justify-between">
                <Skeleton className="w-full h-4/5 rounded-lg" />
                <div className="flex justify-between items-center pt-2">
                  <Skeleton className="h-4 w-12 rounded" />
                  <Skeleton className="h-6 w-6 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Answers */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-40 rounded-md" />
            <Skeleton className="h-9 w-32 rounded-lg" />
          </div>
          <div className="space-y-2 rounded-xl border border-border/50 p-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-border/30">
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="h-6 w-10 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
