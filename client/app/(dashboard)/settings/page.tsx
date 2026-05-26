import { FeatureHeader } from "@/components/layout/feature-header";
import { SettingsPlaceholder } from "@/features/settings/components/settings-placeholder";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <FeatureHeader
        breadcrumb={["Home", "Settings"]}
        title="Settings"
        description="Keep access control, workspace defaults, and future authentication wiring isolated inside this module."
      />
      <SettingsPlaceholder />
    </div>
  );
}
