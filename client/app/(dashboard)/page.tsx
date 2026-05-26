import { FeatureHeader } from "@/components/layout/feature-header";
import { DashboardOverview } from "@/features/dashboard/components/dashboard-overview";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <FeatureHeader
        breadcrumb={["Home", "Dashboard"]}
        title="Dashboard"
        description="A scalable, feature-first admin shell with mock data, reusable primitives, and DRF-ready structure."
      />
      <DashboardOverview />
    </div>
  );
}
