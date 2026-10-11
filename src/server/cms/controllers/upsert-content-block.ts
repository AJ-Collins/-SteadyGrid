import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { upsertContentBlock } from "@/server/cms/services/upsert-content-block";
import { requireUser } from "@/server/auth/services/require-user";
import { UnauthorizedError } from "@/server/auth/services/unauthorized-error";
import { requirePermission } from "@/server/access/require-permission";
import { ForbiddenError } from "@/server/auth/services/forbidden-error";
import { readContentBody } from "@/server/cms/requests/read-content-body";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

export async function upsertContentBlockAction(req: Request): Promise<NextResponse> {
  try {
    const user = await requireUser();
    requirePermission(user, "content:write");
    const limit = await enforceRateLimit(req, "admin-write", { userId: user.id });
    if (limit.blocked) return limit.blocked;
    const parsed = await readContentBody(req);
    if (!parsed.ok) return jsonError(parsed.error, 400, "VALIDATION_FAILED");
    const res = ok(await upsertContentBlock(parsed.data));
    applyRateHeaders(res, limit.headers);
    return res;
  } catch (err) {
    if (err instanceof UnauthorizedError) return jsonError(err.message, err.status);
    if (err instanceof ForbiddenError) return jsonError(err.message, err.status);
    throw err;
  }
}
