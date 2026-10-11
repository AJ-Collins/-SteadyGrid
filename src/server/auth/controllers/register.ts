import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { registerUser } from "@/server/auth/services/register-user";
import { EmailTakenError } from "@/server/auth/services/email-taken-error";
import { createSession } from "@/server/auth/services/create-session";
import { setSessionCookies } from "@/server/auth/services/set-session-cookies";
import { readRegisterBody } from "@/server/auth/requests/read-register-body";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

export async function registerAction(req: Request): Promise<NextResponse> {
  const parsed = await readRegisterBody(req);
  if (!parsed.ok) return jsonError(parsed.error, 400, "VALIDATION_FAILED");
  const limit = await enforceRateLimit(req, "auth-register", { email: parsed.data.email });
  if (limit.blocked) return limit.blocked;
  try {
    const user = await registerUser(parsed.data);
    const pair = await createSession(user, {
      userAgent: req.headers.get("user-agent") ?? undefined,
    });
    const res = ok({ id: user.id, email: user.email, name: user.name }, { status: 201 });
    setSessionCookies(res, pair);
    applyRateHeaders(res, limit.headers);
    return res;
  } catch (err) {
    if (err instanceof EmailTakenError) return jsonError(err.message, err.status);
    throw err;
  }
}
