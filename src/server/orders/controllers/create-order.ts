import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { createOrder } from "@/server/orders/services/create-order";
import { getSessionUser } from "@/server/auth/services/get-session-user";
import { requirePermission } from "@/server/access/require-permission";
import { ForbiddenError } from "@/server/auth/services/forbidden-error";
import { readOrderBody } from "@/server/orders/requests/read-order-body";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

export async function createOrderAction(req: Request): Promise<NextResponse> {
  const parsed = await readOrderBody(req);
  if (!parsed.ok) return jsonError(parsed.error, 400, "VALIDATION_FAILED");
  const sessionUser = await getSessionUser();
  // Signed-in buyers need orders:create; guests check out without a session.
  if (sessionUser) {
    try {
      requirePermission(sessionUser, "orders:create");
    } catch (err) {
      if (err instanceof ForbiddenError) return jsonError(err.message, err.status);
      throw err;
    }
  }
  const limit = await enforceRateLimit(req, "order-create", { userId: sessionUser?.id });
  if (limit.blocked) return limit.blocked;
  const order = await createOrder(parsed.data.items, sessionUser?.id);
  const res = ok(order, { status: 201 });
  applyRateHeaders(res, limit.headers);
  return res;
}
