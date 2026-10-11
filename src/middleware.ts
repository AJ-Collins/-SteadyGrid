import { NextResponse, type NextRequest } from "next/server";
import { hostOf } from "@/server/hosts/host-of";
import { surfaceOf } from "@/server/hosts/surface-of";
import { isForeignSessionApi } from "@/server/hosts/is-foreign-session-api";
import { hasSession } from "@/server/hosts/has-session";
import { isPublicApi } from "@/server/http/is-public-api";
import { fail } from "@/server/http/fail-response";
import { handleWebHost } from "@/server/hosts/handle-web";
import { handleAdminHost } from "@/server/hosts/handle-admin";
import { handleCmsHost } from "@/server/hosts/handle-cms";

// Subdomain gateway (edge). host = surface:
//
//   steadygrid.com         → storefront (web)
//   admin.steadygrid.com  → admin console (root-form URLs, /admin internal)
//   cms.steadygrid.com    → content studio (root-form URLs, /cms internal)
//
// Unknown hosts fail closed (404), session APIs answer only on the surface
// they belong to, and every non-public /api route requires a session cookie
// (401 JSON). Handlers re-verify, so this gate is depth, not the lock.
// Local dev mirrors this via *.localhost.
export function middleware(request: NextRequest): NextResponse {
  const hostHeader = request.headers.get("host") ?? request.nextUrl.hostname;
  const surface = surfaceOf(hostOf(hostHeader));

  if (surface === null) {
    return new NextResponse("Unknown host", { status: 404 });
  }

  if (isForeignSessionApi(request.nextUrl.pathname, surface)) {
    return new NextResponse(null, { status: 404 });
  }

  if (
    request.nextUrl.pathname.startsWith("/api/") &&
    !isPublicApi(request.nextUrl.pathname, request.method) &&
    !hasSession(request)
  ) {
    return fail("UNAUTHORIZED", "Not authenticated", 401);
  }

  switch (surface) {
    case "admin":
      return handleAdminHost(request, hostHeader);
    case "cms":
      return handleCmsHost(request, hostHeader);
    case "web":
      return handleWebHost(request, hostHeader);
  }
}

export const config = {
  // /api is INCLUDED so foreign session APIs fail closed at the edge
  // (handlers re-enforce). Static assets and files with extensions skip.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
