import type { User } from "@prisma/client";
import { getSessionUser } from "@/server/auth/services/get-session-user";
import { UnauthorizedError } from "@/server/auth/services/unauthorized-error";

export async function requireUser(): Promise<User> {
  const user = await getSessionUser();
  if (!user) throw new UnauthorizedError();
  return user;
}
