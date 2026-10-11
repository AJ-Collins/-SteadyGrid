import { cookies } from "next/headers";
import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { REFRESH_COOKIE } from "@/server/hosts/session-names";
import { hashRefreshToken } from "@/server/auth/services/hash-refresh-token";
import { rotateSession } from "@/server/auth/services/rotate-session";
import { RefreshRejectedError } from "@/server/auth/services/refresh-rejected-error";
import { setSessionCookies } from "@/server/auth/services/set-session-cookies";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

// Explicit rotation endpoint for clients that manage their own retry
// (see authFetch). Cookies stay HttpOnly — nothing is exposed to JS.
export async function refreshAction(req: Request): Promise<NextResponse> {
  const store = await cookies();
  const refreshToken = store.get(REFRESH_COOKIE)?.value;
  if (!refreshToken) return jsonError("Not authenticated", 401);
  const limit = await enforceRateLimit(req, "auth-refresh", {
    tokenHash: hashRefreshToken(refreshToken).slice(0, 16),
  });
  if (limit.blocked) return limit.blocked;
  try {
    const rotated = await rotateSession(refreshToken, {
      userAgent: req.headers.get("user-agent") ?? undefined,
    });
    const res = ok({ ok: true });
    setSessionCookies(res, rotated);
    applyRateHeaders(res, limit.headers);
    return res;
  } catch (err) {
    if (err instanceof RefreshRejectedError) return jsonError(err.message, err.status, "SESSION_EXPIRED");
    throw err;
  }
}
