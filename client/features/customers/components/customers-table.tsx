import { Funnel, Plus, SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { customerTableColumns } from "@/features/customers/config/customer-table-columns";
import { mockCustomers } from "@/features/customers/data/mock-customers";

export function CustomersTable() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 rounded-[28px] border border-border bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <Plus className="h-4 w-4" />
            Add
          </Button>
          <Button variant="icon" aria-label="Filter customers">
            <Funnel className="h-4 w-4" />
          </Button>
          <Button variant="icon" aria-label="Export customers">
            <SquarePen className="h-4 w-4" />
          </Button>
          <Button variant="danger" aria-label="Delete selected customers">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <label className="flex items-center gap-3 self-start rounded-2xl border border-border bg-slate-50/80 px-4 py-3 text-sm text-slate-500 xl:min-w-[320px]">
          <span>Search:</span>
          <input
            className="w-full border-0 bg-transparent outline-none placeholder:text-slate-400"
            placeholder="Search customers"
            type="search"
          />
        </label>
      </div>

      <DataTable
        columns={customerTableColumns}
        rows={mockCustomers}
        getRowKey={(row) => row.id}
        emptyState={
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900">
              No customers found
            </p>
            <p className="text-sm text-slate-500">
              Add mock rows or connect the DRF customers endpoint later.
            </p>
          </div>
        }
      />
    </div>
  );
}
