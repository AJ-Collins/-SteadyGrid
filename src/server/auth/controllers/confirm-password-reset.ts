import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { resetPassword } from "@/server/auth/services/reset-password";
import { InvalidResetTokenError } from "@/server/auth/services/invalid-reset-token-error";
import { readPasswordResetBody } from "@/server/auth/requests/read-password-reset-body";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

export async function confirmPasswordResetAction(req: Request): Promise<NextResponse> {
  const parsed = await readPasswordResetBody(req);
  if (!parsed.ok) return jsonError(parsed.error, 400, "VALIDATION_FAILED");
  const limit = await enforceRateLimit(req, "password-reset");
  if (limit.blocked) return limit.blocked;
  try {
    await resetPassword(parsed.data.token, parsed.data.password);
    return ok({ ok: true });
  } catch (err) {
    if (err instanceof InvalidResetTokenError) return jsonError(err.message, err.status, "INVALID_TOKEN");
    throw err;
  }
}
