export interface RateLimitCount {
  count: number;
  resetAfterMs: number;
}

// Fixed-window counter port. Implementations must be atomic per key
// (Redis INCR+EXPIRE; single-process Map otherwise).
export interface RateLimitStore {
  increment(key: string, windowMs: number): Promise<RateLimitCount>;
}
