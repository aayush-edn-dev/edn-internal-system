import type { DataTableColumn } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import type { CustomerRow } from "@/features/customers/types";

function statusTone(status: CustomerRow["status"]) {
  switch (status) {
    case "Active":
      return "green";
    case "Pending":
      return "amber";
    case "Hold":
      return "purple";
    case "Overdue":
      return "rose";
    default:
      return "neutral";
  }
}

export const customerTableColumns: Array<DataTableColumn<CustomerRow>> = [
  {
    id: "select",
    header: <span className="inline-flex items-center justify-center">⌁</span>,
    cell: () => (
      <input
        aria-label="Select customer"
        className="h-4 w-4 rounded border-slate-300 text-primary"
        type="checkbox"
      />
    ),
    headerClassName: "w-16 text-center",
    cellClassName: "text-center",
  },
  {
    id: "sn",
    header: "SN",
    cell: (row) => (
      <span className="font-semibold text-slate-900">{row.sn}</span>
    ),
    headerClassName: "w-16",
  },
  {
    id: "legalName",
    header: "Legal name",
    cell: (row) => (
      <div className="space-y-1">
        <p className="font-semibold text-slate-900">{row.legalName}</p>
        <Badge tone={statusTone(row.status)}>{row.status}</Badge>
      </div>
    ),
  },
  {
    id: "partyName",
    header: "Party name/address",
    cell: (row) => (
      <div className="space-y-1">
        <p className="font-medium text-slate-700">{row.partyName}</p>
        <p className="text-sm text-slate-500">{row.address}</p>
      </div>
    ),
  },
  {
    id: "salesPerson",
    header: "Sales person",
    cell: (row) => <span className="text-slate-700">{row.salesPerson}</span>,
  },
  {
    id: "overallDue",
    header: "Overall due",
    cell: (row) => (
      <span className="font-semibold text-rose-600">{row.overallDue}</span>
    ),
    headerClassName: "text-right",
    cellClassName: "text-right",
  },
];
