import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="space-y-4">
            <Skeleton className="h-4 w-28" />
            <div className="grid gap-3 sm:grid-cols-3">
              <Skeleton className="h-12" />
              <Skeleton className="h-12" />
              <Skeleton className="h-12" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="space-y-4">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-56" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </Card>
        ))}
      </div>

      <Card className="space-y-4">
        <Skeleton className="h-5 w-56" />
        <Skeleton className="h-[360px]" />
      </Card>
    </div>
  );
}
