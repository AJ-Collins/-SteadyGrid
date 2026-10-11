import { REFRESH_TTL_SECONDS } from "@/server/auth/services/token-ttl";
import type { CookieOptions } from "@/server/auth/services/session-cookie-options";

export function refreshCookieOptions(): CookieOptions {
  const domain = process.env.SITE_COOKIE_DOMAIN;
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: REFRESH_TTL_SECONDS,
    ...(domain ? { domain } : {}),
  };
}
