import { NextResponse, type NextRequest } from "next/server";
import { redirectToHost } from "@/server/hosts/redirect-to-host";
import { stripPrefix } from "@/server/hosts/strip-prefix";
import { hasSession } from "@/server/hosts/has-session";
import { isLocalMockMode } from "@/server/hosts/is-local-mock-mode";
import { redirectToLogin } from "@/server/hosts/redirect-to-login";
import type { SurfaceConfig } from "@/server/hosts/surface-config";

// Shared gated-surface logic (used by the admin and cms hosts):
// 1. strip the internal prefix to its canonical browser form (308),
// 2. let /api through (foreign session APIs already rejected in dispatch),
// 3. bounce the other surface's prefix across,
// 4. require a session for pages (redirect to login + callbackUrl),
// 5. rewrite the browser path onto the internal prefix.
export function handleSurfaceHost(
  request: NextRequest,
  hostHeader: string,
  config: SurfaceConfig,
): NextResponse {
  const pathname = request.nextUrl.pathname;

  const stripped = stripPrefix(pathname, config.prefix);
  if (stripped !== null) {
    const url = request.nextUrl.clone();
    url.pathname = stripped;
    return NextResponse.redirect(url, 308);
  }

  if (pathname.startsWith("/api/")) return NextResponse.next();

  if (pathname === config.otherPrefix || pathname.startsWith(`${config.otherPrefix}/`)) {
    return redirectToHost(request, config.otherHost, pathname);
  }

  if (!config.publicPaths.has(pathname) && !hasSession(request) && !isLocalMockMode()) {
    return redirectToLogin(request, hostHeader, config.loginPath);
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? config.prefix : `${config.prefix}${pathname}`;
  return NextResponse.rewrite(url);
}
