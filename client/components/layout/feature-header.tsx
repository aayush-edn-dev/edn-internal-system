import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/classnames";

type FeatureHeaderProps = {
  breadcrumb: string[];
  title: string;
  description: string;
  actions?: ReactNode;
  className?: string;
};

export function FeatureHeader({
  breadcrumb,
  title,
  description,
  actions,
  className,
}: FeatureHeaderProps) {
  return (
    <header className={cn("space-y-4", className)}>
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {breadcrumb.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-2">
            <span className={cn(index === breadcrumb.length - 1 && "font-medium text-slate-700")}>{item}</span>
            {index < breadcrumb.length - 1 ? <ChevronRight className="h-4 w-4" /> : null}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 rounded-[28px] border border-border bg-white/85 px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h1>
          <p className="max-w-3xl text-sm leading-6 text-slate-500">{description}</p>
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
      </div>
    </header>
  );
}