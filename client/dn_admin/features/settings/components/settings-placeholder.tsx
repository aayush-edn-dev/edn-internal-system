import { Settings2 } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";

export function SettingsPlaceholder() {
  return (
    <EmptyState
      title="Settings module scaffolded"
      description="Place workspace defaults, roles, permissions, and user preferences here when authentication is introduced."
      action={
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <Settings2 className="h-4 w-4" />
          <span>RBAC and profile controls are future-ready.</span>
        </div>
      }
    />
  );
}
