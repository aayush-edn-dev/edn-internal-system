import { FeatureHeader } from "@/components/layout/feature-header";
import { ReportsPlaceholder } from "@/features/reports/components/reports-placeholder";

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <FeatureHeader
        breadcrumb={["Home", "Reports"]}
        title="Reports"
        description="Use this module as the future home for charts, export jobs, and operational summaries built on shared components."
      />
      <ReportsPlaceholder />
    </div>
  );
}