import { CalendarDays, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { followUpTableColumns } from "@/features/follow-up/config/follow-up-table-columns";
import { mockFollowUps } from "@/features/follow-up/data/mock-follow-ups";

const tabs = [
  "Today",
  "Tomorrow",
  "Upcoming 7 Days",
  "Upcoming 14 Days",
  "Upcoming 30 Days",
  "All Time",
  "Pending",
];

export function FollowUpTable() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 rounded-[28px] border border-border bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <Plus className="h-4 w-4" />
            Add
          </Button>
          <div className="flex max-w-full flex-wrap rounded-2xl border border-blue-200 bg-blue-50 p-1 shadow-sm">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={[
                  "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                  index === 0
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-blue-700 hover:bg-white",
                ].join(" ")}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-3 rounded-2xl border border-border bg-slate-50/80 px-4 py-3 text-sm text-slate-500">
            <span>From:</span>
            <input
              className="border-0 bg-transparent outline-none placeholder:text-slate-400"
              placeholder="From Date"
              type="text"
            />
          </label>
          <label className="flex items-center gap-3 rounded-2xl border border-border bg-slate-50/80 px-4 py-3 text-sm text-slate-500">
            <span>To:</span>
            <input
              className="border-0 bg-transparent outline-none placeholder:text-slate-400"
              placeholder="To Date"
              type="text"
            />
          </label>
          <Button variant="secondary">Go</Button>
          <Button variant="danger" aria-label="Clear filters">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <Button variant="icon" aria-label="Export follow-ups">
          <CalendarDays className="h-4 w-4" />
        </Button>
      </div>

      <DataTable
        columns={followUpTableColumns}
        rows={mockFollowUps}
        getRowKey={(row) => row.id}
        emptyState={
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900">
              No follow-ups available
            </p>
            <p className="text-sm text-slate-500">
              Connect the DRF endpoint when the backend is ready.
            </p>
          </div>
        }
      />
    </div>
  );
}
