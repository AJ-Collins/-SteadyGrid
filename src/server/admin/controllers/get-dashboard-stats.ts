import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { requireUser } from "@/server/auth/services/require-user";
import { UnauthorizedError } from "@/server/auth/services/unauthorized-error";
import { requirePermission } from "@/server/access/require-permission";
import { ForbiddenError } from "@/server/auth/services/forbidden-error";
import { getDashboardStats } from "@/server/admin/services/get-dashboard-stats";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import type { NextResponse } from "next/server";

export async function getDashboardStatsAction(req: Request): Promise<NextResponse> {
  try {
    const user = await requireUser();
    requirePermission(user, "stats:read");
    const limit = await enforceRateLimit(req, "admin", { userId: user.id });
    if (limit.blocked) return limit.blocked;
    const res = ok(await getDashboardStats());
    applyRateHeaders(res, limit.headers);
    return res;
  } catch (err) {
    if (err instanceof UnauthorizedError) return jsonError(err.message, err.status);
    if (err instanceof ForbiddenError) return jsonError(err.message, err.status);
    throw err;
  }
}
