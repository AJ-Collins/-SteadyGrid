import { cookies } from "next/headers";
import { REFRESH_COOKIE } from "@/server/hosts/session-names";
import { revokeSession } from "@/server/auth/services/revoke-session";
import { clearSessionCookies } from "@/server/auth/services/clear-session-cookies";
import { ok } from "@/server/http/ok-response";
import type { NextResponse } from "next/server";

export async function logoutAction(): Promise<NextResponse> {
  const store = await cookies();
  const refreshToken = store.get(REFRESH_COOKIE)?.value;
  if (refreshToken) {
    await revokeSession(refreshToken);
  }
  const res = ok({ ok: true });
  clearSessionCookies(res);
  return res;
}
