export type DashboardSummaryMetric = {
  label: string;
  value: string;
};

export type DashboardSummaryCard = {
  title: string;
  tone: "blue" | "emerald" | "amber" | "rose";
  icon: "customers" | "contract" | "amount" | "followUp";
  metrics: DashboardSummaryMetric[];
  footer: string;
};

export type DistributionItem = {
  label: string;
  value: number;
  color: string;
};

export type FollowUpNote = {
  time: string;
  customer: string;
  note: string;
  status: string;
  tone: "amber" | "rose" | "blue" | "green";
};

export type StatusBar = {
  label: string;
  value: number;
  color: string;
};
