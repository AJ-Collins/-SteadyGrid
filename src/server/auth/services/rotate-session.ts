import { db } from "@/server/db/client";
import { createSessionToken } from "@/server/auth/services/create-session-token";
import { REFRESH_TTL_SECONDS } from "@/server/auth/services/token-ttl";
import { generateRefreshToken } from "@/server/auth/services/generate-refresh-token";
import { hashRefreshToken } from "@/server/auth/services/hash-refresh-token";
import { revokeAllSessions } from "@/server/auth/services/revoke-all-sessions";
import { RefreshRejectedError } from "@/server/auth/services/refresh-rejected-error";

export interface RotatedSession {
  accessToken: string;
  refreshToken: string;
  sessionId: string;
  userId: string;
  role: string;
}

// Rotates a refresh token: the presented token is revoked and a fresh pair
// is issued (sliding 30-day window). Reuse detection: presenting an already
// rotated-out token means the token leaked — every session for that user is
// revoked immediately.
export async function rotateSession(
  presentedToken: string,
  meta?: { userAgent?: string },
): Promise<RotatedSession> {
  const row = await db.session.findUnique({
    where: { refreshTokenHash: hashRefreshToken(presentedToken) },
    include: { user: true },
  });
  if (!row) throw new RefreshRejectedError();
  if (row.revokedAt) {
    await revokeAllSessions(row.userId);
    throw new RefreshRejectedError();
  }
  if (row.expiresAt < new Date()) throw new RefreshRejectedError();

  const refreshToken = generateRefreshToken();
  const [, created] = await db.$transaction([
    db.session.update({ where: { id: row.id }, data: { revokedAt: new Date() } }),
    db.session.create({
      data: {
        userId: row.userId,
        refreshTokenHash: hashRefreshToken(refreshToken),
        expiresAt: new Date(Date.now() + REFRESH_TTL_SECONDS * 1000),
        userAgent: meta?.userAgent,
      },
    }),
  ]);
  const accessToken = await createSessionToken({
    userId: row.userId,
    role: row.user.role,
    sid: created.id,
  });
  return { accessToken, refreshToken, sessionId: created.id, userId: row.userId, role: row.user.role };
}
