// @vitest-environment node
import { describe, expect, it } from "vitest";
import { stripPrefix } from "@/server/hosts/strip-prefix";
import { surfaceOf } from "@/server/hosts/surface-of";
import { isForeignSessionApi } from "@/server/hosts/is-foreign-session-api";

const APEX_DOM = "steadygrid.com";
process.env.SITE_APEX_DOMAIN = APEX_DOM;

describe("stripPrefix", () => {
  it("strips exact and nested prefixes only", () => {
    expect(stripPrefix("/admin", "/admin")).toBe("/");
    expect(stripPrefix("/admin/users", "/admin")).toBe("/users");
    expect(stripPrefix("/administrator", "/admin")).toBeNull();
    expect(stripPrefix("/", "/admin")).toBeNull();
  });
});

describe("surfaceOf", () => {
  it("classifies apex, www and localhost as web", () => {
    expect(surfaceOf("steadygrid.com")).toBe("web");
    expect(surfaceOf("www.steadygrid.com")).toBe("web");
    expect(surfaceOf("localhost")).toBe("web");
  });

  it("classifies admin and cms subdomains", () => {
    expect(surfaceOf("admin.steadygrid.com")).toBe("admin");
    expect(surfaceOf("cms.steadygrid.com")).toBe("cms");
    expect(surfaceOf("admin.localhost")).toBe("admin");
    expect(surfaceOf("cms.localhost")).toBe("cms");
  });

  it("fails closed on anything else", () => {
    expect(surfaceOf("evil.com")).toBeNull();
    expect(surfaceOf("shop.steadygrid.com")).toBeNull();
  });
});

describe("isForeignSessionApi", () => {
  it("confines /api/admin to the admin surface", () => {
    expect(isForeignSessionApi("/api/admin/stats", "web")).toBe(true);
    expect(isForeignSessionApi("/api/admin/stats", "cms")).toBe(true);
    expect(isForeignSessionApi("/api/admin/stats", "admin")).toBe(false);
  });

  it("allows uploads on admin and cms only", () => {
    expect(isForeignSessionApi("/api/uploads", "web")).toBe(true);
    expect(isForeignSessionApi("/api/uploads", "cms")).toBe(false);
  });

  it("leaves shared APIs alone", () => {
    expect(isForeignSessionApi("/api/auth/me", "web")).toBe(false);
    expect(isForeignSessionApi("/api/products", "cms")).toBe(false);
  });
});
