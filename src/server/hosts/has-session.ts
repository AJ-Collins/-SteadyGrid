import type { NextRequest } from "next/server";
import { REFRESH_COOKIE_NAME, SESSION_COOKIE_NAME } from "@/server/hosts/session-names";

export function hasSession(request: NextRequest): boolean {
  // Either cookie counts: an expired access token with a live refresh
  // token still restores via /api/auth/me or /api/auth/refresh.
  return request.cookies.has(SESSION_COOKIE_NAME) || request.cookies.has(REFRESH_COOKIE_NAME);
}
