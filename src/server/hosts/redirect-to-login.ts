import { NextResponse, type NextRequest } from "next/server";
import { originFor } from "@/server/hosts/origin-for";
import { apexHostFor } from "@/server/hosts/apex-host-for";
import { hostOf } from "@/server/hosts/host-of";

/**
 * Redirect unauthenticated page visits to the surface-local login.
 * Never nests: if already headed to the login path, the callback is dropped
 * so a misconfiguration degrades to one redirect, never a loop.
 */
export function redirectToLogin(
  request: NextRequest,
  hostHeader: string,
  loginPath = "/auth/login",
): NextResponse {
  const loginHost = loginPath === "/auth/login" ? apexHostFor(hostHeader) : hostOf(hostHeader);
  const loginUrl = new URL(loginPath, originFor(request, loginHost));
  if (request.nextUrl.pathname !== loginPath) {
    // Callback rebuilt from the Host header (not request.url): behind a
    // proxy or port-forward, request.url names the internal address.
    const back = new URL(request.nextUrl.pathname, originFor(request, hostOf(hostHeader)));
    back.search = request.nextUrl.search;
    loginUrl.searchParams.set("callbackUrl", back.toString());
  }
  return NextResponse.redirect(loginUrl, 307);
}
