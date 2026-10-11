import { hostOf } from "@/server/hosts/host-of";
import { ADMIN_HOST } from "@/server/hosts/well-known-hosts";

/** Admin hostname for this request (localhost-aware, zero-config dev). */
export function adminHostFor(hostHeader: string): string {
  const bare = hostOf(hostHeader);
  if (bare === "localhost" || bare.endsWith(".localhost")) return "admin.localhost";
  return ADMIN_HOST.toLowerCase();
}
