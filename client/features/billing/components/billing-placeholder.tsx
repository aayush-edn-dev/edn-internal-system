import { ReceiptText } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";

export function BillingPlaceholder() {
  return (
    <EmptyState
      title="Billing workspace coming next"
      description="Use this module for invoices, receipts, and amount reconciliation once the REST API is attached."
      action={
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <ReceiptText className="h-4 w-4" />
          <span>Invoice and receipt views will live here.</span>
        </div>
      }
    />
  );
}
