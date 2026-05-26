import { Button } from "@/components/ui/button";
import { FeatureHeader } from "@/components/layout/feature-header";
import { FollowUpTable } from "@/features/follow-up/components/follow-up-table";

export default function FollowUpPage() {
  return (
    <div className="space-y-4">
      <FeatureHeader
        breadcrumb={["Home", "Follow up"]}
        title="Follow up"
        description="Feature module for timelines, date windows, and next-action tracking without coupling the UI to backend state."
        actions={<Button variant="secondary">Bulk assign</Button>}
      />
      <FollowUpTable />
    </div>
  );
}