import { cookies } from "next/headers";
import { getSessionUser } from "@/server/auth/services/get-session-user";
import { getUserById } from "@/server/users/services/get-user-by-id";
import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { REFRESH_COOKIE } from "@/server/hosts/session-names";
import { rotateSession } from "@/server/auth/services/rotate-session";
import { RefreshRejectedError } from "@/server/auth/services/refresh-rejected-error";
import { setSessionCookies } from "@/server/auth/services/set-session-cookies";
import type { NextResponse } from "next/server";

export async function meAction(req: Request): Promise<NextResponse> {
  const user = await getSessionUser();
  if (user) {
    return ok({ id: user.id, email: user.email, name: user.name, role: user.role });
  }

  // Access token expired but the browser still holds a refresh cookie:
  // rotate inline (new cookies on this response) so dashboards survive
  // the 15-minute access window without a separate refresh round-trip.
  const store = await cookies();
  const refreshToken = store.get(REFRESH_COOKIE)?.value;
  if (!refreshToken) return jsonError("Not authenticated", 401);
  try {
    const rotated = await rotateSession(refreshToken, {
      userAgent: req.headers.get("user-agent") ?? undefined,
    });
    const fresh = await getUserById(rotated.userId);
    if (!fresh) return jsonError("Not authenticated", 401);
    const res = ok({ id: fresh.id, email: fresh.email, name: fresh.name, role: fresh.role });
    setSessionCookies(res, rotated);
    return res;
  } catch (err) {
    if (err instanceof RefreshRejectedError) return jsonError(err.message, err.status, "SESSION_EXPIRED");
    throw err;
  }
}
