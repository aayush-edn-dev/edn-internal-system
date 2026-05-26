import { FeatureHeader } from "@/components/layout/feature-header";
import { CustomersTable } from "@/features/customers/components/customers-table";

export default function CustomersPage() {
  return (
    <div className="space-y-4">
      <FeatureHeader
        breadcrumb={["Home", "Customer"]}
        title="Customer"
        description="Manage your customers"
        actions={null}
      />
      <CustomersTable />
    </div>
  );
}