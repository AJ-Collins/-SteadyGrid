import type { User } from "@prisma/client";
import { db } from "@/server/db/client";

export interface UserListResult {
  items: User[];
  total: number;
}

export async function listUsers(limit = 50): Promise<UserListResult> {
  const take = Math.min(100, Math.max(1, limit));
  const [total, items] = await Promise.all([
    db.user.count(),
    db.user.findMany({ orderBy: { createdAt: "desc" }, take }),
  ]);
  return { items, total };
}
