import type { HTMLAttributes } from "react";
import { cn } from "@/lib/classnames";

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-border bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
