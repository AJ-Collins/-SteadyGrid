import { apexDomain } from "@/server/hosts/apex-domain";
import { hostOf } from "@/server/hosts/host-of";

/** Apex hostname to use for redirects from this request (localhost-aware). */
export function apexHostFor(hostHeader: string): string {
  const bare = hostOf(hostHeader);
  if (bare === "localhost" || bare.endsWith(".localhost")) return "localhost";
  return apexDomain();
}
