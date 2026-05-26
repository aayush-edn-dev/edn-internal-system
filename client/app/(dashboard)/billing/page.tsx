import { FeatureHeader } from "@/components/layout/feature-header";
import { BillingPlaceholder } from "@/features/billing/components/billing-placeholder";

export default function BillingPage() {
  return (
    <div className="space-y-4">
      <FeatureHeader
        breadcrumb={["Home", "Billing"]}
        title="Billing"
        description="Billing and receipts are intentionally isolated so finance-specific flows can be introduced without rewriting the dashboard shell."
      />
      <BillingPlaceholder />
    </div>
  );
}