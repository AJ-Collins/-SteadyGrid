// @vitest-environment node
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { redirectToLogin } from "@/server/hosts/redirect-to-login";

describe("redirectToLogin", () => {
  it("targets the surface-local login with a same-host callback", () => {
    const req = new NextRequest("http://admin.localhost:3000/products", {
      headers: { host: "admin.localhost:3000" },
    });
    const res = redirectToLogin(req, "admin.localhost:3000", "/login");
    expect(res.status).toBe(307);
    const target = new URL(res.headers.get("location")!);
    expect(target.host).toBe("admin.localhost:3000");
    expect(target.pathname).toBe("/login");
    expect(target.searchParams.get("callbackUrl")).toBe("http://admin.localhost:3000/products");
  });

  it("never nests callbacks when already on the login path", () => {
    const req = new NextRequest("http://admin.localhost:3000/login");
    const res = redirectToLogin(req, "admin.localhost:3000", "/login");
    const target = new URL(res.headers.get("location")!);
    expect(target.pathname).toBe("/login");
    expect(target.searchParams.has("callbackUrl")).toBe(false);
  });

  it("sends web-surface logins to the apex", () => {
    const req = new NextRequest("http://steadygrid.com/account");
    const res = redirectToLogin(req, "steadygrid.com");
    const target = new URL(res.headers.get("location")!);
    expect(target.pathname).toBe("/auth/login");
    expect(target.host).toBe("steadygrid.com");
  });
});
