import type { Surface } from "@/server/hosts/surface";
import { ADMIN_HOST, CMS_HOST, WEB_HOSTS } from "@/server/hosts/well-known-hosts";

/** Which surface a Host names, or null for a host we do not serve. */
export function surfaceOf(host: string): Surface | null {
  if (host === ADMIN_HOST.toLowerCase() || host === "admin.localhost") return "admin";
  if (host === CMS_HOST.toLowerCase() || host === "cms.localhost") return "cms";
  if (WEB_HOSTS.has(host)) return "web";
  return null;
}
