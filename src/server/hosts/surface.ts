// host = surface. Each surface is one hostname; the internal App Router
// prefix it maps to is a containment boundary — a middleware failure fails
// closed (404), never serves another surface.
//
//   steadygrid.com        (web)    storefront + public pages + account auth
//   admin.steadygrid.com  (admin)  admin console (/admin internal)
//   cms.steadygrid.com    (cms)    content studio (/cms internal)
//
// Local dev mirrors this with admin.localhost / cms.localhost (any port).
export type Surface = "web" | "admin" | "cms";
