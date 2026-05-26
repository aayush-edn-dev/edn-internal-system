import type { LucideIcon } from "lucide-react";
import {
  ChartColumnIncreasing,
  CircleDollarSign,
  LayoutDashboard,
  NotebookText,
  Settings2,
  Users,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const adminNavigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/",
    description: "Overview and operational health",
    icon: LayoutDashboard,
  },
  {
    label: "Customers",
    href: "/customers",
    description: "Accounts, balances, and ownership",
    icon: Users,
  },
  {
    label: "Follow up",
    href: "/follow-up",
    description: "Upcoming and overdue actions",
    icon: NotebookText,
  },
  {
    label: "Billing",
    href: "/billing",
    description: "Receipts and due amounts",
    icon: CircleDollarSign,
  },
  {
    label: "Reports",
    href: "/reports",
    description: "Analytics and summaries",
    icon: ChartColumnIncreasing,
  },
  {
    label: "Settings",
    href: "/settings",
    description: "Workspace defaults and access controls",
    icon: Settings2,
  },
];
