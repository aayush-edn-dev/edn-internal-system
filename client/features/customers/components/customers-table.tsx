"use client";
import { useState } from "react";
import { Funnel, Plus, Trash2, Download, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { customerTableColumns } from "@/features/customers/config/customer-table-columns";
import { mockCustomers } from "@/features/customers/data/mock-customers";
import Link from "next/link";

export function CustomersTable() {
  const [search, setSearch] = useState("");

  const filtered = mockCustomers.filter((c) =>
    c.legalName.toLowerCase().includes(search.toLowerCase()) ||
    c.partyName.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 rounded-[28px] border border-border bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/customers/add">
            <Button>
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </Link>
          <Link href="/customers/modules">
            <Button variant="secondary">
              <FileText className="h-4 w-4" />
              ERP Modules & Contract
            </Button>
          </Link>
          <Button variant="icon" aria-label="Filter">
            <Funnel className="h-4 w-4" />
          </Button>
          <Button variant="icon" aria-label="Export">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="icon" aria-label="Import">
            <Upload className="h-4 w-4" />
          </Button>
          <Button variant="danger" aria-label="Delete selected">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        <label className="flex items-center gap-3 self-start rounded-2xl border border-border bg-slate-50/80 px-4 py-3 text-sm text-slate-500 xl:min-w-[320px]">
          <span>Search:</span>
          <input
            className="w-full border-0 bg-transparent outline-none placeholder:text-slate-400"
            placeholder="Search by name or email..."
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <DataTable
        columns={customerTableColumns}
        rows={filtered}
        getRowKey={(row) => row.id}
        emptyState={
          <div className="space-y-2 text-center py-8">
            <p className="text-sm font-semibold text-slate-900">No customers found</p>
            <p className="text-sm text-slate-500">Try a different search or add a new customer.</p>
          </div>
        }
      />
    </div>
  );
}
