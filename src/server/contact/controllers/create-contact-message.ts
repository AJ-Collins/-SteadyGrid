import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { saveContactMessage } from "@/server/contact/services/save-contact-message";
import { readContactBody } from "@/server/contact/requests/read-contact-body";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

export async function createContactMessageAction(req: Request): Promise<NextResponse> {
  const parsed = await readContactBody(req);
  if (!parsed.ok) return jsonError(parsed.error, 400, "VALIDATION_FAILED");
  const limit = await enforceRateLimit(req, ["contact-ip", "contact-email"], {
    email: parsed.data.email,
  });
  if (limit.blocked) return limit.blocked;
  const saved = await saveContactMessage(parsed.data);
  const res = ok(saved, { status: 201 });
  applyRateHeaders(res, limit.headers);
  return res;
}
