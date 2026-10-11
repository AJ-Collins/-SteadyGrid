// @vitest-environment node
import { describe, expect, it } from "vitest";
import { LIMITERS } from "@/server/rate-limit/limiters";
import { checkRateLimit } from "@/server/rate-limit/check-rate-limit";
import { MemoryRateLimitStore } from "@/server/rate-limit/memory-rate-limit-store";
import { resetRateLimitStore } from "@/server/rate-limit/get-rate-limit-store";
import { emailKey } from "@/server/rate-limit/email-key";
import { phoneKey } from "@/server/rate-limit/phone-key";

function req(ip = "9.9.9.9"): Request {
  return new Request("http://localhost/api/auth/login", { headers: { "x-forwarded-for": ip } });
}

describe("limiter table", () => {
  it("pins auth/login budgets", () => {
    expect(LIMITERS["auth-login"].limit).toBe(5);
    expect(LIMITERS["auth-login-ip"].limit).toBe(20);
    expect(LIMITERS["password-request"].limit).toBe(3);
    expect(LIMITERS["auth-refresh"].limit).toBe(20);
  });

  it("normalises identity keys", () => {
    expect(emailKey("  ADMIN@Example.COM ")).toBe("admin@example.com");
    expect(phoneKey("0712 345 678")).toBe("254712345678");
    expect(phoneKey("+254712345678")).toBe("254712345678");
    expect(phoneKey("254712345678")).toBe("254712345678");
  });
});

describe("checkRateLimit", () => {
  it("allows then 429s with Retry-After contract", async () => {
    process.env.TRUSTED_PROXIES = "test";
    resetRateLimitStore();
    const headers: Record<string, string> = {};
    for (let i = 0; i < 5; i++) {
      const r = await checkRateLimit(req("10.1.1.1"), "auth-login", { email: "a@b.com" });
      expect(r.allowed).toBe(true);
      Object.assign(headers, r.headers);
    }
    const blocked = await checkRateLimit(req("10.1.1.1"), "auth-login", { email: "a@b.com" });
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
    expect(blocked.headers["X-RateLimit-Limit"]).toBe("5");
    expect(blocked.headers["X-RateLimit-Remaining"]).toBe("0");
    expect(headers["X-RateLimit-Remaining"]).toBe("0");
    delete process.env.TRUSTED_PROXIES;
    resetRateLimitStore();
  });

  it("exempts CORS preflights", async () => {
    const preflight = new Request("http://localhost/api/auth/login", {
      method: "OPTIONS",
      headers: { "access-control-request-method": "POST" },
    });
    const r = await checkRateLimit(preflight, "auth-login", { email: "a@b.com" });
    expect(r.allowed).toBe(true);
  });
});

describe("MemoryRateLimitStore", () => {
  it("counts fixed windows and resets", async () => {
    const store = new MemoryRateLimitStore();
    expect((await store.increment("k", 50)).count).toBe(1);
    expect((await store.increment("k", 50)).count).toBe(2);
    await new Promise((r) => setTimeout(r, 60));
    expect((await store.increment("k", 50)).count).toBe(1);
  });
});
