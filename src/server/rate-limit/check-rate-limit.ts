import { getClientIp } from "@/server/rate-limit/client-ip";
import { LIMITERS, type LimitContext, type LimiterName } from "@/server/rate-limit/limiters";
import { getRateLimitStore } from "@/server/rate-limit/get-rate-limit-store";

export interface LimitCheck {
  allowed: boolean;
  retryAfterSeconds: number;
  headers: Record<string, string>;
}

// CORS preflights never consume budget — otherwise every cross-origin call
// would collapse onto the anonymous/IP bucket before the real request.
function isPreflight(req: Request): boolean {
  return req.method === "OPTIONS" && req.headers.has("access-control-request-method");
}

function openHeaders(): Record<string, string> {
  return {
    "X-RateLimit-Limit": "unlimited",
    "X-RateLimit-Remaining": "unlimited",
  };
}

export async function checkRateLimit(
  req: Request,
  names: LimiterName | LimiterName[],
  ctx: Partial<LimitContext> = {},
): Promise<LimitCheck> {
  if (isPreflight(req)) return { allowed: true, retryAfterSeconds: 0, headers: openHeaders() };
  const list = Array.isArray(names) ? names : [names];
  const full: LimitContext = { ip: getClientIp(req), ...ctx };
  try {
    const store = await getRateLimitStore();
    let worstRetry = 0;
    let headers: Record<string, string> = {};
    for (const name of list) {
      const spec = LIMITERS[name];
      const { count, resetAfterMs } = await store.increment(`rl:${spec.key(full)}`, spec.windowMs);
      const remaining = Math.max(0, spec.limit - count);
      headers = {
        "X-RateLimit-Limit": String(spec.limit),
        "X-RateLimit-Remaining": String(remaining),
        "X-RateLimit-Reset": String(Math.ceil(resetAfterMs / 1000)),
      };
      if (count > spec.limit) {
        worstRetry = Math.max(worstRetry, Math.ceil(resetAfterMs / 1000));
      }
    }
    if (worstRetry > 0) {
      return { allowed: false, retryAfterSeconds: worstRetry, headers };
    }
    return { allowed: true, retryAfterSeconds: 0, headers };
  } catch {
    // Fail-open: a dead store must not take the app down.
    return { allowed: true, retryAfterSeconds: 0, headers: openHeaders() };
  }
}
