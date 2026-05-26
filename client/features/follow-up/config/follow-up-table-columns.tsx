import type { DataTableColumn } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import type { FollowUpRow } from "@/features/follow-up/types";

export const followUpTableColumns: Array<DataTableColumn<FollowUpRow>> = [
  {
    id: "sn",
    header: "SN",
    cell: (row) => (
      <span className="font-semibold text-slate-900">{row.sn}</span>
    ),
    headerClassName: "w-16",
  },
  {
    id: "partyName",
    header: "Party name (PAN no)",
    cell: (row) => (
      <div className="space-y-1">
        <p className="font-semibold text-slate-900">{row.partyName}</p>
        <p className="text-sm text-slate-500">{row.panNo}</p>
      </div>
    ),
  },
  {
    id: "contactPerson",
    header: "Contact person",
    cell: (row) => <span className="text-slate-700">{row.contactPerson}</span>,
  },
  {
    id: "followUpCount",
    header: "Follow up count",
    cell: (row) => (
      <span className="font-semibold text-slate-900">{row.followUpCount}</span>
    ),
    headerClassName: "text-center",
    cellClassName: "text-center",
  },
  {
    id: "via",
    header: "Via",
    cell: (row) => <Badge tone="blue">{row.via}</Badge>,
  },
  {
    id: "lastFollowUp",
    header: "Last followup",
    cell: (row) => <span className="text-slate-700">{row.lastFollowUp}</span>,
  },
  {
    id: "withinDays",
    header: "Within (x) days",
    cell: (row) => (
      <span className="font-semibold text-slate-900">{row.withinDays}</span>
    ),
    headerClassName: "text-center",
    cellClassName: "text-center",
  },
  {
    id: "nextFollowUp",
    header: "Next followup",
    cell: (row) => (
      <Badge
        tone={
          row.status === "Overdue"
            ? "rose"
            : row.status === "Today"
              ? "green"
              : "amber"
        }
      >
        {row.nextFollowUp}
      </Badge>
    ),
  },
];
