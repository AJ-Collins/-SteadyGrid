import { ACCESS_TTL_SECONDS } from "@/server/auth/services/token-ttl";

export interface CookieOptions {
  httpOnly: boolean;
  sameSite: "lax";
  secure: boolean;
  path: string;
  maxAge: number;
  domain?: string;
}

function baseOptions(maxAge: number): CookieOptions {
  // SITE_COOKIE_DOMAIN=".steadygrid.com" in production shares one login
  // across apex + admin/cms subdomains. Leave unset for localhost, where
  // browsers reject a Domain attribute on a bare hostname.
  const domain = process.env.SITE_COOKIE_DOMAIN;
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
    ...(domain ? { domain } : {}),
  };
}

export function sessionCookieOptions(): CookieOptions {
  return baseOptions(ACCESS_TTL_SECONDS);
}
