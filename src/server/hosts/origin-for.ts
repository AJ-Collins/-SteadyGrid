import type { NextRequest } from "next/server";

/**
 * Origin for a cross-host redirect.
 *
 * Scheme and port come from the incoming request rather than being hardcoded,
 * so one code path covers dev (http, non-443 port) and production (https).
 */
export function originFor(request: NextRequest, host: string): string {
  const proto =
    request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "");
  const port = (request.headers.get("host") ?? "").split(":")[1];
  return `${proto}://${host}${port ? `:${port}` : ""}`;
}
