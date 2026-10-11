// @vitest-environment node
import { afterAll, describe, expect, it } from "vitest";
import { db } from "@/server/db/client";
import { hashPassword } from "@/server/auth/services/hash-password";
import { createSession } from "@/server/auth/services/create-session";
import { rotateSession } from "@/server/auth/services/rotate-session";
import { RefreshRejectedError } from "@/server/auth/services/refresh-rejected-error";
import { revokeAllSessions } from "@/server/auth/services/revoke-all-sessions";
import { revokeSession } from "@/server/auth/services/revoke-session";
import { hashRefreshToken } from "@/server/auth/services/hash-refresh-token";

// DB-backed session lifecycle. Requires Postgres (docker-compose):
// DATABASE_URL must be set or this suite skips.
const hasDb = Boolean(process.env.DATABASE_URL);
const describeDb = hasDb ? describe : describe.skip;

describeDb("refresh-token sessions", () => {
  const email = `refresh-test-${Date.now()}@example.com`;
  let userId = "";

  afterAll(async () => {
    if (userId) {
      await db.user.deleteMany({ where: { id: userId } });
    }
    await db.$disconnect();
  });

  it("creates, rotates, and enforces reuse detection", async () => {
    process.env.AUTH_SECRET ??= "test-secret-that-is-32-chars-long!!";
    const user = await db.user.create({
      data: { email, name: "Refresh Test", password: await hashPassword("Password123"), role: "CUSTOMER" },
    });
    userId = user.id;

    const first = await createSession(user);
    expect(first.accessToken.length).toBeGreaterThan(20);
    expect(first.refreshToken.length).toBe(64);

    // Only the hash is stored — the raw token is unrecoverable from the DB.
    const stored = await db.session.findUniqueOrThrow({ where: { id: first.sessionId } });
    expect(stored.refreshTokenHash).toBe(hashRefreshToken(first.refreshToken));
    expect(stored.refreshTokenHash).not.toContain(first.refreshToken);

    // Rotation issues a fresh pair and revokes the old row.
    const second = await rotateSession(first.refreshToken);
    expect(second.sessionId).not.toBe(first.sessionId);
    const oldRow = await db.session.findUniqueOrThrow({ where: { id: first.sessionId } });
    expect(oldRow.revokedAt).not.toBeNull();

    // Re-presenting the rotated-out token = theft signal: every session
    // for the user is revoked and rotation is rejected.
    await expect(rotateSession(first.refreshToken)).rejects.toBeInstanceOf(RefreshRejectedError);
    const live = await db.session.count({ where: { userId, revokedAt: null } });
    expect(live).toBe(0);

    // Unknown tokens are rejected without side effects.
    await expect(rotateSession("00".repeat(32))).rejects.toBeInstanceOf(RefreshRejectedError);
  });

  it("revokes a single session on logout", async () => {
    process.env.AUTH_SECRET ??= "test-secret-that-is-32-chars-long!!";
    const user = await db.user.findUniqueOrThrow({ where: { email } });
    // Re-activate: previous test revoked everything via reuse detection.
    const pair = await createSession(user);
    await revokeSession(pair.refreshToken);
    const row = await db.session.findUniqueOrThrow({ where: { id: pair.sessionId } });
    expect(row.revokedAt).not.toBeNull();
    await expect(rotateSession(pair.refreshToken)).rejects.toBeInstanceOf(RefreshRejectedError);
    await revokeAllSessions(user.id);
  });
});
