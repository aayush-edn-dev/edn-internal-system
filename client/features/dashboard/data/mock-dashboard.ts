import type {
  DashboardSummaryCard,
  DistributionItem,
  FollowUpNote,
  StatusBar,
} from "@/features/dashboard/types";

export const dashboardSummaryCards: DashboardSummaryCard[] = [
  {
    title: "Customers",
    tone: "blue",
    icon: "customers",
    metrics: [
      { label: "Total", value: "660" },
      { label: "Active", value: "522" },
      { label: "Inactive", value: "138" },
    ],
    footer: "Track portfolio growth and account health.",
  },
  {
    title: "Contract",
    tone: "emerald",
    icon: "contract",
    metrics: [
      { label: "Approved", value: "409" },
      { label: "Pending", value: "94" },
      { label: "Declined", value: "19" },
    ],
    footer: "Keep approvals, reviews, and declines visible.",
  },
  {
    title: "Amount",
    tone: "amber",
    icon: "amount",
    metrics: [
      { label: "Due", value: "Rs. 1,46,41,311.38" },
      { label: "Receipt", value: "Rs. 2,08,37,850" },
      { label: "Net gap", value: "Rs. 61,96,538.62" },
    ],
    footer: "Surface cashflow, receivables, and receipts together.",
  },
  {
    title: "Follow-up",
    tone: "rose",
    icon: "followUp",
    metrics: [
      { label: "Due today", value: "4" },
      { label: "Not followed up", value: "375" },
      { label: "Overdue", value: "119" },
    ],
    footer: "Keep the field team focused on the highest-priority accounts.",
  },
];

export const customerDistribution: DistributionItem[] = [
  { label: "Paid", value: 96, color: "#4f46e5" },
  { label: "Pending", value: 58, color: "#f97316" },
  { label: "Waiting for documents", value: 21, color: "#14b8a6" },
  { label: "Can not reach client", value: 17, color: "#c2410c" },
  { label: "On hold", value: 34, color: "#8b5cf6" },
  { label: "Partially paid", value: 14, color: "#f59e0b" },
  { label: "Closed", value: 7, color: "#0f766e" },
  { label: "Payment promised", value: 27, color: "#ec4899" },
];

export const followUpDistribution: DistributionItem[] = [
  { label: "Pending", value: 119, color: "#ef4444" },
  { label: "Upcoming", value: 59, color: "#f59e0b" },
  { label: "Today", value: 4, color: "#3b82f6" },
];

export const todayFollowUps: FollowUpNote[] = [
  {
    time: "11:35 AM",
    customer: "Siraha Public School",
    note: "Getting update regarding ID department for repricing.",
    status: "On hold",
    tone: "amber",
  },
  {
    time: "11:44 AM",
    customer: "Shepherd Children Academy",
    note: "Mam will provide accounts number; call not received yet.",
    status: "On hold",
    tone: "amber",
  },
  {
    time: "03:16 PM",
    customer: "Peace Zone Model Secondary School",
    note: "Need some guide related billing. Confirm payment after issue solved.",
    status: "Payment promised",
    tone: "rose",
  },
  {
    time: "05:09 PM",
    customer: "Madan Bhandari Memorial Academy",
    note: "Awaiting follow-up call after invoice confirmation.",
    status: "Upcoming",
    tone: "blue",
  },
];

export const customerStatusBars: StatusBar[] = [
  { label: "Cannot reach client", value: 16, color: "#7c2d12" },
  { label: "Closed", value: 6, color: "#ea580c" },
  { label: "Disputed", value: 3, color: "#84cc16" },
  { label: "On hold", value: 34, color: "#808000" },
  { label: "Overdue", value: 2, color: "#0f766e" },
  { label: "Paid", value: 96, color: "#a3e635" },
  { label: "Partially paid", value: 13, color: "#7e22ce" },
  { label: "Payment promised", value: 25, color: "#a21caf" },
  { label: "Pending", value: 56, color: "#0f4c5c" },
  { label: "Unpaid", value: 1, color: "#ef4444" },
  { label: "Waiting for client", value: 20, color: "#a7f3d0" },
  { label: "Waiting for documents", value: 6, color: "#65a30d" },
];
