import { FeatureHeader } from "@/components/layout/feature-header";
import { AddCustomerForm } from "@/features/customers/components/add-customer-form";

export default function AddCustomerPage() {
  return (
    <div className="space-y-4">
      <FeatureHeader
        breadcrumb={["Home", "Customer", "Add"]}
        title="Add Customer"
        description="Add a new customer to the system"
        actions={null}
      />
      <AddCustomerForm />
    </div>
  );
}