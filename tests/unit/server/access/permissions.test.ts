// @vitest-environment node
import { describe, expect, it } from "vitest";
import { ROLE_PERMISSIONS } from "@/server/access/permissions";
import { hasPermission } from "@/server/access/has-permission";
import { requirePermission } from "@/server/access/require-permission";
import { ForbiddenError } from "@/server/auth/services/forbidden-error";

describe("role matrix", () => {
  it("grants ADMIN everything", () => {
    for (const p of ROLE_PERMISSIONS.ADMIN) {
      expect(hasPermission("ADMIN", p)).toBe(true);
    }
    expect(hasPermission("ADMIN", "console:admin")).toBe(true);
  });

  it("scopes MARKETER to content and uploads", () => {
    expect(hasPermission("MARKETER", "content:write")).toBe(true);
    expect(hasPermission("MARKETER", "uploads:create")).toBe(true);
    expect(hasPermission("MARKETER", "console:cms")).toBe(true);
    expect(hasPermission("MARKETER", "users:read")).toBe(false);
    expect(hasPermission("MARKETER", "orders:read")).toBe(false);
    expect(hasPermission("MARKETER", "console:admin")).toBe(false);
  });

  it("keeps CUSTOMER to buying and reading", () => {
    expect(hasPermission("CUSTOMER", "orders:create")).toBe(true);
    expect(hasPermission("CUSTOMER", "catalog:read")).toBe(true);
    expect(hasPermission("CUSTOMER", "catalog:write")).toBe(false);
    expect(hasPermission("CUSTOMER", "content:write")).toBe(false);
  });
});

describe("requirePermission", () => {
  it("returns the user when granted", () => {
    const user = { role: "ADMIN" } as never;
    expect(requirePermission(user, "users:read")).toBe(user);
  });

  it("throws ForbiddenError when denied or anonymous", () => {
    const customer = { role: "CUSTOMER" } as never;
    expect(() => requirePermission(customer, "users:read")).toThrow(ForbiddenError);
    expect(() => requirePermission(null, "catalog:read")).toThrow(ForbiddenError);
  });
});
