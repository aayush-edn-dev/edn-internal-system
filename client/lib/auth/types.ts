import type { Permission } from "@/lib/auth/permissions";

export type UserRole = "admin" | "manager" | "finance" | "collector" | "viewer";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  permissions: Permission[];
};
