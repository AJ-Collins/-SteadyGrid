// @vitest-environment node
import { describe, expect, it } from "vitest";
import { createSessionToken } from "@/server/auth/services/create-session-token";
import { verifySessionToken } from "@/server/auth/services/verify-session-token";

describe("session", () => {
  it("round-trips claims through a signed token", async () => {
    process.env.AUTH_SECRET ??= "test-secret-that-is-32-chars-long!!";
    const token = await createSessionToken({ userId: "user_1", role: "ADMIN", sid: "sess_1" });
    const claims = await verifySessionToken(token);
    expect(claims).toEqual({ userId: "user_1", role: "ADMIN", sid: "sess_1" });
  });

  it("rejects tampered tokens", async () => {
    process.env.AUTH_SECRET ??= "test-secret-that-is-32-chars-long!!";
    await expect(verifySessionToken("tampered.token.value")).resolves.toBeNull();
  });
});
