// Explicit public-API manifest — the MUST-auth rule lives here.
// Every /api route NOT listed is session-gated at the edge (middleware
// returns 401 JSON) and re-verified in its handler. A route is public only
// for a documented product reason, never by omission.

export interface PublicRoute {
  method: string; // "*" matches all methods
  prefix: string;
  reason: string;
}

export const PUBLIC_API_ROUTES: PublicRoute[] = [
  { method: "*", prefix: "/api/auth/", reason: "auth flows enforce their own per-endpoint rules" },
  { method: "GET", prefix: "/api/products", reason: "public catalog listing" },
  { method: "GET", prefix: "/api/content", reason: "public site content blocks" },
  { method: "POST", prefix: "/api/orders", reason: "guest checkout" },
  { method: "POST", prefix: "/api/contact", reason: "public contact form" },
  { method: "GET", prefix: "/api/files/", reason: "public object bytes" },
];
