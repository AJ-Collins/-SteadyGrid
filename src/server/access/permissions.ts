import type { Role } from "@prisma/client";

export type Permission =
  | "catalog:read"
  | "catalog:write"
  | "orders:read"
  | "orders:create"
  | "content:read"
  | "content:write"
  | "users:read"
  | "stats:read"
  | "uploads:create"
  | "console:admin"
  | "console:cms";

// Role → permission matrix. The single table that answers "who may do
// what": ADMIN runs everything, MARKETER owns content + uploads,
// CUSTOMER buys and reads.
export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  ADMIN: [
    "catalog:read",
    "catalog:write",
    "orders:read",
    "orders:create",
    "content:read",
    "content:write",
    "users:read",
    "stats:read",
    "uploads:create",
    "console:admin",
    "console:cms",
  ],
  MARKETER: ["catalog:read", "content:read", "content:write", "uploads:create", "orders:create", "console:cms"],
  CUSTOMER: ["catalog:read", "content:read", "orders:create"],
};
