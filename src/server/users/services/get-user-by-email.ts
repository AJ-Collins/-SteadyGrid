import type { User } from "@prisma/client";
import { db } from "@/server/db/client";

export function getUserByEmail(email: string): Promise<User | null> {
  return db.user.findUnique({ where: { email: email.toLowerCase().trim() } });
}
