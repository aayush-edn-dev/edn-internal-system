import { CalendarCheck, CircleDollarSign, FileText, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { formatCurrency } from "@/lib/formatters";
import {
  customerDistribution,
  customerStatusBars,
  dashboardSummaryCards,
  followUpDistribution,
  todayFollowUps,
} from "@/features/dashboard/data/mock-dashboard";

const iconMap = {
  customers: Users,
  contract: FileText,
  amount: CircleDollarSign,
  followUp: CalendarCheck,
} as const;

export function DashboardOverview() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-4">
        {dashboardSummaryCards.map((card) => {
          const Icon = iconMap[card.icon];

          return (
            <StatCard
              key={card.title}
              title={card.title}
              icon={Icon}
              tone={card.tone}
              metrics={card.metrics}
              footer={card.footer}
            />
          );
        })}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr_1fr]">
        <Card className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Status wise customer distribution
              </h2>
              <p className="text-sm text-slate-500">
                Mock snapshot for visual validation before backend integration.
              </p>
            </div>
            <Badge tone="blue">Live style preview</Badge>
          </div>

          <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div className="flex items-center justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-[conic-gradient(#4f46e5_0%_21%,#f97316_21%_34%,#14b8a6_34%_46%,#c2410c_46%_54%,#8b5cf6_54%_68%,#f59e0b_68%_77%,#0f766e_77%_80%,#ec4899_80%_100%)] shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-center shadow-inner">
                  <span className="text-2xl font-semibold text-slate-900">
                    660
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    customers
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {customerDistribution.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-slate-50/80 px-4 py-3"
                >
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-700">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-500">
                      {formatCurrency(item.value * 127500)}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="space-y-5">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Follow-up status
            </h2>
            <p className="text-sm text-slate-500">
              Cards and chart placeholders built with no external chart
              dependency.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-[conic-gradient(#ef4444_0%_68%,#f59e0b_68%_91%,#3b82f6_91%_100%)] shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-center shadow-inner">
                <span className="text-2xl font-semibold text-slate-900">
                  182
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  open items
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {followUpDistribution.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {item.label}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {item.value}
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        backgroundColor: item.color,
                        width: `${Math.min(100, item.value)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-5">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Today&apos;s follow-ups
            </h2>
            <p className="text-sm text-slate-500">
              Priority timeline for the field and support teams.
            </p>
          </div>

          <div className="space-y-4">
            {todayFollowUps.map((item) => (
              <div key={`${item.time}-${item.customer}`} className="flex gap-4">
                <div className="flex w-16 shrink-0 flex-col items-end pt-0.5 text-right text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">
                    {item.time}
                  </span>
                </div>
                <div className="relative flex-1 border-l border-border pl-4 pb-5">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <div className="space-y-1 rounded-2xl bg-slate-50/90 px-4 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold text-slate-900">
                        {item.customer}
                      </p>
                      <Badge tone={item.tone}>{item.status}</Badge>
                    </div>
                    <p className="text-sm leading-6 text-slate-500">
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Customer vs Status
            </h2>
            <p className="text-sm text-slate-500">
              Mock bar chart aligned with the screenshot layout.
            </p>
          </div>
          <Badge tone="green">Frontend only</Badge>
        </div>

        <div className="flex h-[360px] items-end gap-3 overflow-x-auto rounded-[24px] border border-border bg-slate-50/70 px-4 py-5">
          {customerStatusBars.map((bar) => (
            <div
              key={bar.label}
              className="flex min-w-[76px] flex-1 flex-col items-center gap-3 text-center"
            >
              <div className="flex h-[220px] items-end">
                <div
                  className="w-10 rounded-t-2xl shadow-[0_14px_26px_rgba(15,23,42,0.08)]"
                  style={{
                    height: `${Math.max(6, bar.value * 2)}px`,
                    backgroundColor: bar.color,
                  }}
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-700">
                  {bar.value}
                </p>
                <p className="max-w-[90px] text-[11px] leading-4 text-slate-500">
                  {bar.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
