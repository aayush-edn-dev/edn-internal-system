import { RefreshCcw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <div className="rounded-[28px] border border-border bg-white/90 px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur sm:px-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <label className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-border bg-slate-50/80 px-4 py-3 text-slate-500 shadow-inner shadow-white/70">
          <Search className="h-5 w-5 shrink-0 text-slate-400" />
          <span className="sr-only">Search the admin workspace</span>
          <input
            className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            placeholder="Search by name, PAN, or address..."
            type="search"
          />
        </label>

        <div className="flex items-center justify-between gap-3 xl:justify-end">
          <Button variant="icon" aria-label="Refresh dashboard">
            <RefreshCcw className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-slate-50/80 px-3 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
              dn
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Digital Nepal</p>
              <p className="text-[11px] text-slate-400">Admin workspace</p>
            </div>
            <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(34,197,94,0.12)]" />
          </div>
        </div>
      </div>
    </div>
  );
}