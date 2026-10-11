import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { createProduct } from "@/server/catalog/services/create-product";
import { requireUser } from "@/server/auth/services/require-user";
import { UnauthorizedError } from "@/server/auth/services/unauthorized-error";
import { requirePermission } from "@/server/access/require-permission";
import { ForbiddenError } from "@/server/auth/services/forbidden-error";
import { readProductBody } from "@/server/catalog/requests/read-product-body";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import type { NextResponse } from "next/server";

export async function createProductAction(req: Request): Promise<NextResponse> {
  try {
    const user = await requireUser();
    requirePermission(user, "catalog:write");
    const limit = await enforceRateLimit(req, "admin-write", { userId: user.id });
    if (limit.blocked) return limit.blocked;
    const parsed = await readProductBody(req);
    if (!parsed.ok) return jsonError(parsed.error, 400, "VALIDATION_FAILED");
    const product = await createProduct(parsed.data);
    const res = ok(product, { status: 201 });
    applyRateHeaders(res, limit.headers);
    return res;
  } catch (err) {
    if (err instanceof UnauthorizedError) return jsonError(err.message, err.status);
    if (err instanceof ForbiddenError) return jsonError(err.message, err.status);
    throw err;
  }
}
