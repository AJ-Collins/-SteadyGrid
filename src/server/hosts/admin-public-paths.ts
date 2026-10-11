// The admin surface logs in on its own host (/login): a web-host login
// cookie is host-only on localhost dev, so cross-host callbacks can never
// complete there. Production shares one cookie via SITE_COOKIE_DOMAIN.
export const PUBLIC_ADMIN_PATHS = new Set<string>(["/login"]);
