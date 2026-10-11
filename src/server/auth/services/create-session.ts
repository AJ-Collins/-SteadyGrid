import type { User } from "@prisma/client";
import { db } from "@/server/db/client";
import { createSessionToken } from "@/server/auth/services/create-session-token";
import { REFRESH_TTL_SECONDS } from "@/server/auth/services/token-ttl";
import { generateRefreshToken } from "@/server/auth/services/generate-refresh-token";
import { hashRefreshToken } from "@/server/auth/services/hash-refresh-token";

export interface SessionPair {
  accessToken: string;
  refreshToken: string;
  sessionId: string;
}

// Opens a new server-side session: persists the hashed refresh token,
// signs a short-lived access token bound to the session id.
export async function createSession(
  user: User,
  meta?: { userAgent?: string },
): Promise<SessionPair> {
  const refreshToken = generateRefreshToken();
  const session = await db.session.create({
    data: {
      userId: user.id,
      refreshTokenHash: hashRefreshToken(refreshToken),
      expiresAt: new Date(Date.now() + REFRESH_TTL_SECONDS * 1000),
      userAgent: meta?.userAgent,
    },
    select: { id: true },
  });
  const accessToken = await createSessionToken({ userId: user.id, role: user.role, sid: session.id });
  return { accessToken, refreshToken, sessionId: session.id };
}
