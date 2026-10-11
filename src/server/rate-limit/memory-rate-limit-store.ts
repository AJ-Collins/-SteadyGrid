import type { RateLimitCount, RateLimitStore } from "@/server/rate-limit/rate-limit-store";

interface Bucket {
  count: number;
  resetAt: number;
}

// Single-instance store. Used when REDIS_URL is unset (dev, tests) and as
// the shape every driver honours.
export class MemoryRateLimitStore implements RateLimitStore {
  private readonly buckets = new Map<string, Bucket>();

  async increment(key: string, windowMs: number): Promise<RateLimitCount> {
    const now = Date.now();
    const bucket = this.buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      const fresh = { count: 1, resetAt: now + windowMs };
      this.buckets.set(key, fresh);
      if (this.buckets.size % 1000 === 0) this.sweep(now);
      return { count: 1, resetAfterMs: windowMs };
    }
    bucket.count += 1;
    return { count: bucket.count, resetAfterMs: Math.max(0, bucket.resetAt - now) };
  }

  private sweep(now: number): void {
    for (const [key, bucket] of this.buckets) {
      if (bucket.resetAt <= now) this.buckets.delete(key);
    }
  }
}
