import { randomBytes } from "node:crypto";
import { db } from "@/server/db/client";
import { getUserByEmail } from "@/server/users/services/get-user-by-email";
import { hashResetToken } from "@/server/auth/services/hash-reset-token";
import { TooManyResetRequestsError } from "@/server/auth/services/too-many-reset-requests-error";

const TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour
const MAX_ACTIVE_TOKENS_24H = 5;

// Always resolves successfully (anti-enumeration): unknown emails return
// ok without creating a token. Returns the raw token so the caller can
// deliver it (email in production, server log in development).
//
// Domain second-check (independent of the transport limiter): at most 5
// live tokens per user per 24h, so a transport bypass still can't flood
// the mailbox or stockpile tokens.
export async function requestPasswordReset(email: string): Promise<{ ok: true; token: string | null }> {
  const user = await getUserByEmail(email);
  if (!user) return { ok: true, token: null };
  const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recent = await db.passwordResetToken.count({
    where: { userId: user.id, createdAt: { gte: dayAgo }, usedAt: null },
  });
  if (recent >= MAX_ACTIVE_TOKENS_24H) {
    const oldest = await db.passwordResetToken.findFirst({
      where: { userId: user.id, createdAt: { gte: dayAgo }, usedAt: null },
      orderBy: { createdAt: "asc" },
      select: { createdAt: true },
    });
    const retryAfterSeconds = oldest
      ? Math.max(60, Math.ceil((oldest.createdAt.getTime() + 24 * 60 * 60 * 1000 - Date.now()) / 1000))
      : 3600;
    throw new TooManyResetRequestsError(retryAfterSeconds);
  }
  const token = randomBytes(32).toString("hex");
  await db.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash: hashResetToken(token),
      expiresAt: new Date(Date.now() + TOKEN_TTL_MS),
    },
  });
  return { ok: true, token };
}
