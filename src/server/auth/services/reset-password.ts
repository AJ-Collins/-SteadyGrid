import { db } from "@/server/db/client";
import { hashPassword } from "@/server/auth/services/hash-password";
import { hashResetToken } from "@/server/auth/services/hash-reset-token";
import { InvalidResetTokenError } from "@/server/auth/services/invalid-reset-token-error";

export async function resetPassword(token: string, newPassword: string): Promise<{ ok: true }> {
  const record = await db.passwordResetToken.findUnique({
    where: { tokenHash: hashResetToken(token) },
  });
  if (!record || record.usedAt || record.expiresAt < new Date()) {
    throw new InvalidResetTokenError();
  }
  await db.$transaction([
    db.user.update({
      where: { id: record.userId },
      data: { password: await hashPassword(newPassword) },
    }),
    db.passwordResetToken.update({
      where: { id: record.id },
      data: { usedAt: new Date() },
    }),
  ]);
  return { ok: true };
}
