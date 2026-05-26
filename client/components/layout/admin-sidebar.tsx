"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/classnames";
import { adminNavigation } from "@/lib/navigation";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-border bg-white/95 px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
      <div className="flex h-full flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white shadow-[0_18px_30px_rgba(37,99,235,0.28)]">
            <span className="text-2xl font-semibold tracking-tight">dn</span>
          </div>
          <div className="min-w-0">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-blue-600">Digital Nepal</p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">Admin Console</h2>
            <p className="text-xs text-slate-500">Feature-first frontend foundation</p>
          </div>
        </div>

        <nav className="space-y-2">
          {adminNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-2xl border px-4 py-3 transition-colors",
                  active
                    ? "border-blue-200 bg-blue-50 text-blue-700 shadow-[0_8px_20px_rgba(59,130,246,0.08)]"
                    : "border-transparent bg-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900",
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                    active ? "bg-white text-primary" : "bg-slate-100 text-slate-500 group-hover:bg-white",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{item.label}</span>
                  <span className="block truncate text-xs text-slate-500">{item.description}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-[24px] border border-border bg-slate-50/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Architecture</p>
          <p className="mt-2 text-sm font-medium text-slate-800">Ready for DRF APIs, auth, and RBAC.</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Keep feature modules isolated so API, permissions, and domain state can be attached later without a
            refactor.
          </p>
        </div>
      </div>
    </aside>
  );
}