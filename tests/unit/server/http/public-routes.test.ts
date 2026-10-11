// @vitest-environment node
import { describe, expect, it } from "vitest";
import { isPublicApi } from "@/server/http/is-public-api";
import { PUBLIC_API_ROUTES } from "@/server/http/public-api-routes";

describe("public API manifest", () => {
  it("keeps auth flows public (handlers enforce their own rules)", () => {
    for (const p of ["/api/auth/login", "/api/auth/register", "/api/auth/me", "/api/auth/refresh", "/api/auth/logout"]) {
      expect(isPublicApi(p, "POST")).toBe(true);
    }
    expect(isPublicApi("/api/auth/me", "GET")).toBe(true);
  });

  it("keeps the storefront readable without a session", () => {
    expect(isPublicApi("/api/products", "GET")).toBe(true);
    expect(isPublicApi("/api/content", "GET")).toBe(true);
    expect(isPublicApi("/api/orders", "POST")).toBe(true);
    expect(isPublicApi("/api/contact", "POST")).toBe(true);
  });

  it("gates everything else — method-aware", () => {
    expect(isPublicApi("/api/products", "POST")).toBe(false);
    expect(isPublicApi("/api/orders", "GET")).toBe(false);
    expect(isPublicApi("/api/contact", "GET")).toBe(false);
    expect(isPublicApi("/api/cart", "GET")).toBe(false);
    expect(isPublicApi("/api/cart", "POST")).toBe(false);
    expect(isPublicApi("/api/admin/stats", "GET")).toBe(false);
    expect(isPublicApi("/api/uploads", "POST")).toBe(false);
    expect(isPublicApi("/api/content", "PUT")).toBe(false);
  });

  it("does not confuse prefixes", () => {
    expect(isPublicApi("/api/productivity", "GET")).toBe(false);
    expect(isPublicApi("/api/orders-history", "POST")).toBe(false);
  });

  it("documents every entry", () => {
    for (const r of PUBLIC_API_ROUTES) {
      expect(r.reason.length).toBeGreaterThan(10);
    }
  });
});
