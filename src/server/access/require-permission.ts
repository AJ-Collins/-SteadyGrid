import type { User } from "@prisma/client";
import { ForbiddenError } from "@/server/auth/services/forbidden-error";
import { hasPermission } from "@/server/access/has-permission";
import type { Permission } from "@/server/access/permissions";

export function requirePermission(user: User | null, permission: Permission): User {
  if (!user || !hasPermission(user.role, permission)) {
    throw new ForbiddenError("Forbidden");
  }
  return user;
}
