import type { DataTableColumn } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import type { CustomerRow } from "@/features/customers/types";

function statusTone(status: CustomerRow["status"]) {
  switch (status) {
    case "Active": return "green";
    case "Pending": return "amber";
    case "Hold": return "purple";
    case "Overdue": return "rose";
    default: return "neutral";
  }
}

export const customerTableColumns: Array<DataTableColumn<CustomerRow>> = [
  {
    id: "select",
    header: "",
    cell: () => (
      <input
        aria-label="Select customer"
        className="h-4 w-4 rounded border-slate-300"
        type="checkbox"
      />
    ),
    headerClassName: "w-10 text-center",
    cellClassName: "text-center",
  },
  {
    id: "sn",
    header: "SN",
    cell: (row) => <span className="font-semibold text-slate-900">{row.sn}</span>,
    headerClassName: "w-16",
  },
  {
    id: "legalName",
    header: "Legal Name",
    cell: (row) => (
      <div className="space-y-1">
        <p className="font-semibold text-slate-900">{row.legalName}</p>
        <Badge tone={statusTone(row.status)}>{row.status}</Badge>
      </div>
    ),
  },
  {
    id: "partyName",
    header: "Party Name/Address",
    cell: (row) => (
      <div className="space-y-1">
        <p className="font-medium text-slate-700">{row.partyName}</p>
        <p className="text-sm text-slate-500">{row.address}</p>
      </div>
    ),
  },
  {
    id: "salesPerson",
    header: "Sales Person",
    cell: (row) => <span className="text-slate-700">{row.salesPerson}</span>,
  },
  {
    id: "overallDue",
    header: "Overall Due",
    cell: (row) => (
      <span className="font-semibold text-rose-600">{row.overallDue}</span>
    ),
    headerClassName: "text-right",
    cellClassName: "text-right",
  },
  {
    id: "actualDue",
    header: "Actual Due",
    cell: (row) => (
      <span className="font-semibold text-orange-500">{row.actualDue}</span>
    ),
    headerClassName: "text-right",
    cellClassName: "text-right",
  },
  {
    id: "nextFollowupDate",
    header: "Nxt Followup Date",
    cell: (row) => (
      <span className="text-slate-700">{row.nextFollowupDate}</span>
    ),
  },
  {
    id: "contactDetails",
    header: "Contact Details",
    cell: (row) => (
      <span className="text-slate-700">{row.contactDetails}</span>
    ),
  },
  {
    id: "email",
    header: "Email",
    cell: (row) => (
      <span className="text-blue-600 underline">{row.email}</span>
    ),
  },
  {
    id: "status",
    header: "Status",
    cell: (row) => (
      <Badge tone={statusTone(row.status)}>{row.status}</Badge>
    ),
  },
  {
    id: "modifiedBy",
    header: "Modified By/At",
    cell: (row) => (
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-700">{row.modifiedBy}</p>
        <p className="text-xs text-slate-500">{row.modifiedAt}</p>
      </div>
    ),
  },
];