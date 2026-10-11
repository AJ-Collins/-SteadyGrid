import { db } from "@/server/db/client";
import { hashRefreshToken } from "@/server/auth/services/hash-refresh-token";

// Revokes the single session behind a refresh token (logout on this
// device). Unknown tokens resolve silently — logout must be idempotent.
export async function revokeSession(presentedToken: string): Promise<void> {
  await db.session.updateMany({
    where: { refreshTokenHash: hashRefreshToken(presentedToken), revokedAt: null },
    data: { revokedAt: new Date() },
  });
}
