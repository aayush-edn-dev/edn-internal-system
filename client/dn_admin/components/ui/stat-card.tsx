import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/classnames";
import { Card } from "@/components/ui/card";

type Metric = {
  label: string;
  value: string;
};

type StatCardProps = {
  title: string;
  icon: LucideIcon;
  tone?: "blue" | "emerald" | "amber" | "rose";
  metrics: Metric[];
  footer?: string;
};

const toneClasses: Record<NonNullable<StatCardProps["tone"]>, string> = {
  blue: "from-blue-500/14 via-blue-500/6 to-white",
  emerald: "from-emerald-500/14 via-emerald-500/6 to-white",
  amber: "from-amber-500/14 via-amber-500/6 to-white",
  rose: "from-rose-500/14 via-rose-500/6 to-white",
};

export function StatCard({
  title,
  icon: Icon,
  tone = "blue",
  metrics,
  footer,
}: StatCardProps) {
  return (
    <Card className={cn("bg-gradient-to-br", toneClasses[tone])}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {title}
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="text-2xl font-semibold tracking-tight text-slate-900">
                  {metric.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-white text-primary shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {footer ? <p className="mt-5 text-xs text-slate-500">{footer}</p> : null}
    </Card>
  );
}
