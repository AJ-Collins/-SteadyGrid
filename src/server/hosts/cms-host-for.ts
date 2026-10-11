import { hostOf } from "@/server/hosts/host-of";
import { CMS_HOST } from "@/server/hosts/well-known-hosts";

/** CMS hostname for this request (localhost-aware, zero-config dev). */
export function cmsHostFor(hostHeader: string): string {
  const bare = hostOf(hostHeader);
  if (bare === "localhost" || bare.endsWith(".localhost")) return "cms.localhost";
  return CMS_HOST.toLowerCase();
}
