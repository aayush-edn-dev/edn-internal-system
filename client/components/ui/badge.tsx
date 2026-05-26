import type { HTMLAttributes } from "react";
import { cn } from "@/lib/classnames";

type BadgeTone = "neutral" | "blue" | "green" | "amber" | "rose" | "purple";

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-slate-100 text-slate-700",
  blue: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100",
  green: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100",
  amber: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-100",
  rose: "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-100",
  purple: "bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-100",
};

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
