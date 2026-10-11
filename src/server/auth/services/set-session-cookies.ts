import { NextResponse } from "next/server";
import { REFRESH_COOKIE, SESSION_COOKIE } from "@/server/hosts/session-names";
import { refreshCookieOptions } from "@/server/auth/services/refresh-cookie-options";
import { sessionCookieOptions } from "@/server/auth/services/session-cookie-options";
import type { SessionPair } from "@/server/auth/services/create-session";

// Issues session cookies: access (short-lived) + refresh (long-lived),
// both HttpOnly. Tokens never touch localStorage.
export function setSessionCookies(res: NextResponse, pair: SessionPair): void {
  res.cookies.set(SESSION_COOKIE, pair.accessToken, sessionCookieOptions());
  res.cookies.set(REFRESH_COOKIE, pair.refreshToken, refreshCookieOptions());
}
