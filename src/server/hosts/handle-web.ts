import { NextResponse, type NextRequest } from "next/server";
import { stripPrefix } from "@/server/hosts/strip-prefix";
import { redirectToHost } from "@/server/hosts/redirect-to-host";
import { adminHostFor } from "@/server/hosts/admin-host-for";
import { cmsHostFor } from "@/server/hosts/cms-host-for";

// Apex (web) surface holds no session-gated content of its own: the
// storefront and public pages render, while /admin* and /cms* 308 to
// their canonical subdomain in root form.
export function handleWebHost(request: NextRequest, hostHeader: string): NextResponse {
  const pathname = request.nextUrl.pathname;

  const adminPath = stripPrefix(pathname, "/admin");
  if (adminPath !== null) {
    return redirectToHost(request, adminHostFor(hostHeader), adminPath);
  }

  const cmsPath = stripPrefix(pathname, "/cms");
  if (cmsPath !== null) {
    return redirectToHost(request, cmsHostFor(hostHeader), cmsPath);
  }

  return NextResponse.next();
}
