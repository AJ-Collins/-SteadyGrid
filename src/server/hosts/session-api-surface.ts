import type { Surface } from "@/server/hosts/surface";

// Session-adjacent API routes and the surfaces each may be served on.
//
// The session cookie is Domain-scoped, so the browser sends it to every
// surface. A same-origin proxy answering on the wrong host would let script
// on one surface exercise another surface's session. CORS does not help:
// these are same-origin requests.
//
// Enforced in middleware (before any surface handler) and again inside each
// route handler, so a matcher change cannot silently reopen it.
export const SESSION_API_SURFACE: ReadonlyArray<{ prefix: string; surfaces: Surface[] }> = [
  { prefix: "/api/admin", surfaces: ["admin"] },
  { prefix: "/api/uploads", surfaces: ["admin", "cms"] },
];
