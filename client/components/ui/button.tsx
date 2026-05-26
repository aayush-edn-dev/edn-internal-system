import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/classnames";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_10px_20px_rgba(37,99,235,0.18)] hover:bg-primary-strong",
  secondary:
    "border border-border bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100",
  danger:
    "bg-[#f94a24] text-white shadow-[0_10px_20px_rgba(249,74,36,0.16)] hover:bg-[#e53d17]",
  icon: "border border-border bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50",
        variant === "icon" && "h-11 w-11 px-0",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
