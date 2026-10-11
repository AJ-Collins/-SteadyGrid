import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { authenticateUser } from "@/server/auth/services/authenticate-user";
import { InvalidCredentialsError } from "@/server/auth/services/invalid-credentials-error";
import { createSession } from "@/server/auth/services/create-session";
import { setSessionCookies } from "@/server/auth/services/set-session-cookies";
import { readLoginBody } from "@/server/auth/requests/read-login-body";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

export async function loginAction(req: Request): Promise<NextResponse> {
  const parsed = await readLoginBody(req);
  if (!parsed.ok) return jsonError(parsed.error, 400, "VALIDATION_FAILED");
  const limit = await enforceRateLimit(req, ["auth-login", "auth-login-ip"], {
    email: parsed.data.email,
  });
  if (limit.blocked) return limit.blocked;
  try {
    const user = await authenticateUser(parsed.data);
    const pair = await createSession(user, {
      userAgent: req.headers.get("user-agent") ?? undefined,
    });
    const res = ok({ id: user.id, email: user.email, name: user.name, role: user.role });
    setSessionCookies(res, pair);
    applyRateHeaders(res, limit.headers);
    return res;
  } catch (err) {
    if (err instanceof InvalidCredentialsError) return jsonError(err.message, err.status);
    throw err;
  }
}
