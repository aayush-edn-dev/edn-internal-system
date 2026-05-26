import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/layout/admin-sidebar";
import { TopBar } from "@/components/layout/topbar";

type AdminShellProps = {
  children: ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
      <AdminSidebar />
      <div className="flex min-w-0 flex-col gap-4 px-4 py-4 lg:px-5 lg:py-5">
        <TopBar />
        <main className="min-w-0 flex-1 pb-4">{children}</main>
      </div>
    </div>
  );
}