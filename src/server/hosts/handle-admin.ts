import { type NextRequest, type NextResponse } from "next/server";
import { adminHostFor } from "@/server/hosts/admin-host-for";
import { handleSurfaceHost } from "@/server/hosts/handle-surface-host";
import { PUBLIC_ADMIN_PATHS } from "@/server/hosts/admin-public-paths";
import { cmsHostFor } from "@/server/hosts/cms-host-for";

// admin.* surface: browser URLs are root-form (/products); the internal
// /admin-prefixed form 308s to canonical; pages require a session, and the
// surface-local /login keeps auth on the same host (cookies can't cross
// subdomains on localhost dev).
export function handleAdminHost(request: NextRequest, hostHeader: string): NextResponse {
  return handleSurfaceHost(request, hostHeader, {
    surface: "admin",
    prefix: "/admin",
    publicPaths: PUBLIC_ADMIN_PATHS,
    loginPath: "/login",
    otherPrefix: "/cms",
    otherHost: cmsHostFor(hostHeader),
  });
}

export { adminHostFor };
