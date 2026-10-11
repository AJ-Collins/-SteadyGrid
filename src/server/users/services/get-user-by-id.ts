import type { User } from "@prisma/client";
import { db } from "@/server/db/client";

export function getUserById(id: string): Promise<User | null> {
  return db.user.findUnique({ where: { id } });
}
