import { cookies } from "next/headers";
import { SESSION_COOKIE } from "@/server/hosts/session-names";
import { verifySessionToken } from "@/server/auth/services/verify-session-token";
import { db } from "@/server/db/client";
import type { User } from "@prisma/client";

// Current user from the short-lived access token. The token is bound to a
// server-side session row (sid claim) which is re-checked here, so logout
// and revoke-all take effect even before the 15-minute access token dies.
export async function getSessionUser(): Promise<User | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const claims = await verifySessionToken(token);
  if (!claims) return null;
  const session = await db.session.findUnique({
    where: { id: claims.sid },
    include: { user: true },
  });
  if (!session || session.revokedAt || session.expiresAt < new Date()) return null;
  if (session.userId !== claims.userId) return null;
  return session.user;
}
