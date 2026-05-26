export const permissions = {
  dashboardRead: "dashboard:read",
  customerRead: "customer:read",
  customerWrite: "customer:write",
  followUpRead: "followup:read",
  followUpWrite: "followup:write",
  billingRead: "billing:read",
  reportRead: "report:read",
  settingsManage: "settings:manage",
} as const;

export type Permission = (typeof permissions)[keyof typeof permissions];

export function canAccess(required: Permission, granted: Permission[]) {
  return granted.includes(required);
}
