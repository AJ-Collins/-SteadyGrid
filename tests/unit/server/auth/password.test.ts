// @vitest-environment node
import { describe, expect, it } from "vitest";
import { hashPassword } from "@/server/auth/services/hash-password";
import { verifyPassword } from "@/server/auth/services/verify-password";

describe("password", () => {
  it("hashes and verifies a password", async () => {
    const hash = await hashPassword("Correct Horse 123");
    expect(hash).not.toContain("Correct Horse 123");
    await expect(verifyPassword("Correct Horse 123", hash)).resolves.toBe(true);
    await expect(verifyPassword("wrong password", hash)).resolves.toBe(false);
  });
});
