import type { Surface } from "@/server/hosts/surface";
import { SESSION_API_SURFACE } from "@/server/hosts/session-api-surface";

/** True when `pathname` is a session API that `surface` may not serve. */
export function isForeignSessionApi(pathname: string, surface: Surface): boolean {
  const entry = SESSION_API_SURFACE.find((e) => pathname === e.prefix || pathname.startsWith(`${e.prefix}/`));
  if (!entry) return false;
  return !entry.surfaces.includes(surface);
}
