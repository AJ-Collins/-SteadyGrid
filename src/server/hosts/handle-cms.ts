import { type NextRequest, type NextResponse } from "next/server";
import { handleSurfaceHost } from "@/server/hosts/handle-surface-host";
import { PUBLIC_CMS_PATHS } from "@/server/hosts/cms-public-paths";
import { adminHostFor } from "@/server/hosts/admin-host-for";
import { cmsHostFor } from "@/server/hosts/cms-host-for";

// cms.* surface: mirror of the admin surface for the content studio.
export function handleCmsHost(request: NextRequest, hostHeader: string): NextResponse {
  return handleSurfaceHost(request, hostHeader, {
    surface: "cms",
    prefix: "/cms",
    publicPaths: PUBLIC_CMS_PATHS,
    loginPath: "/login",
    otherPrefix: "/admin",
    otherHost: adminHostFor(hostHeader),
  });
}

export { cmsHostFor };
