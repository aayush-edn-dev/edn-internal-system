export const apiEndpoints = {
  dashboardSummary: "/api/v1/dashboard/summary/",
  customers: "/api/v1/customers/",
  followUps: "/api/v1/follow-ups/",
  billing: "/api/v1/billing/",
  reports: "/api/v1/reports/",
  authLogin: "/api/v1/auth/login/",
  authProfile: "/api/v1/auth/profile/",
} as const;

export type ApiEndpointKey = keyof typeof apiEndpoints;
