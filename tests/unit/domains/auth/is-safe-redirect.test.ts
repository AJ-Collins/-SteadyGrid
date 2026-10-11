import { describe, expect, it } from "vitest";
import { isSafeRedirect } from "@/domains/auth/is-safe-redirect";
import { safeRedirectTarget } from "@/domains/auth/safe-redirect-target";

describe("isSafeRedirect", () => {
  it("allows relative paths", () => {
    expect(isSafeRedirect("/admin/products", "steadygrid.com")).toBe(true);
    expect(isSafeRedirect("//evil.com/x", "steadygrid.com")).toBe(false);
  });

  it("allows same-host and localhost absolute URLs", () => {
    expect(isSafeRedirect("http://admin.localhost:3000/", "localhost")).toBe(true);
    expect(isSafeRedirect("https://steadygrid.com/", "steadygrid.com")).toBe(true);
  });

  it("rejects off-site URLs", () => {
    expect(isSafeRedirect("https://evil.com/", "steadygrid.com")).toBe(false);
    expect(isSafeRedirect(null, "steadygrid.com")).toBe(false);
  });
});

describe("safeRedirectTarget", () => {
  it("collapses same-origin absolute URLs to paths", () => {
    expect(
      safeRedirectTarget("http://localhost:3000/account?x=1", "http://localhost:3000", "localhost"),
    ).toBe("/account?x=1");
  });

  it("falls back on unsafe targets", () => {
    expect(safeRedirectTarget("https://evil.com/", "http://localhost:3000", "localhost")).toBe("/");
  });
});
