import { NextResponse } from "next/server";
import { fail } from "@/server/http/fail-response";
import { checkRateLimit } from "@/server/rate-limit/check-rate-limit";
import type { LimitContext, LimiterName } from "@/server/rate-limit/limiters";

// Route helper: returns a 429 response when any named limiter is spent,
// otherwise null (and the caller continues). Applies check headers to the
// eventual success response via `applyRateHeaders`.
export async function enforceRateLimit(
  req: Request,
  names: LimiterName | LimiterName[],
  ctx: Partial<LimitContext> = {},
): Promise<{ blocked: NextResponse | null; headers: Record<string, string> }> {
  const check = await checkRateLimit(req, names, ctx);
  if (!check.allowed) {
    const res = fail("RATE_LIMITED", "Too many requests", 429, {
      retryAfterSeconds: check.retryAfterSeconds,
    });
    for (const [k, v] of Object.entries(check.headers)) res.headers.set(k, v);
    res.headers.set("Retry-After", String(check.retryAfterSeconds));
    return { blocked: res, headers: check.headers };
  }
  return { blocked: null, headers: check.headers };
}
