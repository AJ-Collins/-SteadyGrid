import { db } from "@/server/db/client";

// Revokes every live session for a user (logout everywhere + the theft
// response when a rotated-out refresh token is presented again).
export function revokeAllSessions(userId: string): Promise<{ count: number }> {
  return db.session
    .updateMany({ where: { userId, revokedAt: null }, data: { revokedAt: new Date() } })
    .then(({ count }) => ({ count }));
}
