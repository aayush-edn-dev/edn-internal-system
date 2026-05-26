import { ChartColumnIncreasing } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";

export function ReportsPlaceholder() {
  return (
    <EmptyState
      title="Reporting module scaffolded"
      description="Add enterprise reporting, export flows, and analytics cards here once the DRF endpoints are available."
      action={
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <ChartColumnIncreasing className="h-4 w-4" />
          <span>
            Charts and exports can be composed from shared primitives.
          </span>
        </div>
      }
    />
  );
}
