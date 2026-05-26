import { FeatureHeader } from "@/components/layout/feature-header";
import { ContractGenerator } from "@/features/customers/components/contract-generator";

export default function ModulesPage() {
  return (
    <div className="space-y-4">
      <FeatureHeader
        breadcrumb={["Home", "Customer", "Modules & Contract"]}
        title="ERP Modules & Contract Generator"
        description="Select ERP modules, set custom prices, and generate contracts with VAT"
        actions={null}
      />
      <ContractGenerator />
    </div>
  );
}
