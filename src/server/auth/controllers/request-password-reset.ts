import { jsonError } from "@/server/http/json-error";
import { fail } from "@/server/http/fail-response";
import { ok } from "@/server/http/ok-response";
import { requestPasswordReset } from "@/server/auth/services/request-password-reset";
import { TooManyResetRequestsError } from "@/server/auth/services/too-many-reset-requests-error";
import { readPasswordRequestBody } from "@/server/auth/requests/read-password-request-body";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

export async function requestPasswordResetAction(req: Request): Promise<NextResponse> {
  const parsed = await readPasswordRequestBody(req);
  if (!parsed.ok) return jsonError(parsed.error, 400, "VALIDATION_FAILED");
  const limit = await enforceRateLimit(req, "password-request", { email: parsed.data.email });
  if (limit.blocked) return limit.blocked;
  try {
    const { token } = await requestPasswordReset(parsed.data.email);
    // TODO: send `token` by email. Until SMTP is configured, development
    // builds log it so the flow stays testable end to end.
    if (token && process.env.NODE_ENV !== "production") {
      console.log(`[auth] password reset token for ${parsed.data.email}: ${token}`);
    }
    const res = ok({ ok: true });
    applyRateHeaders(res, limit.headers);
    return res;
  } catch (err) {
    if (err instanceof TooManyResetRequestsError) {
      return fail("RATE_LIMITED", err.message, 429, { retryAfterSeconds: err.retryAfterSeconds });
    }
    throw err;
  }
}
