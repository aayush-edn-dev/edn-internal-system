import { Button } from "@/components/ui/button";
import { FeatureHeader } from "@/components/layout/feature-header";
import { CustomersTable } from "@/features/customers/components/customers-table";

export default function CustomersPage() {
  return (
    <div className="space-y-4">
      <FeatureHeader
        breadcrumb={["Home", "Customer"]}
        title="Customer"
        description="Customer index with reusable table architecture, mock data, and room for future DRF filtering and pagination."
        actions={<Button variant="secondary">Import CSV</Button>}
      />
      <CustomersTable />
    </div>
  );
}
