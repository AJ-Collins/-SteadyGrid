import type { Role } from "@prisma/client";
import { ROLE_PERMISSIONS, type Permission } from "@/server/access/permissions";

export function hasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}
