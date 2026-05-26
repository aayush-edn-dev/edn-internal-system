import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <Card className="flex flex-col items-start gap-4 border-dashed bg-slate-50/80">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
        <Sparkles className="h-5 w-5" />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="max-w-xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
      {action}
    </Card>
  );
}
