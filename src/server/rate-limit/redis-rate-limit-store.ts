import type { RedisClientType } from "redis";
import type { RateLimitStore } from "@/server/rate-limit/rate-limit-store";

const PREFIX = "steadygrid:rl:";

export class RedisRateLimitStore implements RateLimitStore {
  constructor(private readonly client: RedisClientType) {}

  async increment(key: string, windowMs: number): Promise<{ count: number; resetAfterMs: number }> {
    const redisKey = `${PREFIX}${key}`;
    // Atomic fixed window: INCR + PEXPIRE-on-first-write in one script.
    const [count, ttl] = (await this.client.eval(
      `local c = redis.call('INCR', KEYS[1])
       if c == 1 then redis.call('PEXPIRE', KEYS[1], ARGV[1]) end
       return {c, redis.call('PTTL', KEYS[1])}`,
      { keys: [redisKey], arguments: [String(windowMs)] },
    )) as [number, number];
    return { count, resetAfterMs: Math.max(0, ttl) };
  }
}
