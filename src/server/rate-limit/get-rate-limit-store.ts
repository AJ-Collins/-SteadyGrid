import { createClient, type RedisClientType } from "redis";
import type { RateLimitStore } from "@/server/rate-limit/rate-limit-store";
import { MemoryRateLimitStore } from "@/server/rate-limit/memory-rate-limit-store";
import { RedisRateLimitStore } from "@/server/rate-limit/redis-rate-limit-store";

let clientPromise: Promise<RedisClientType | null> | null = null;
let storePromise: Promise<RateLimitStore> | null = null;

async function connectRedis(): Promise<RedisClientType | null> {
  const url = process.env.REDIS_URL;
  if (!url) return null;
  try {
    const client = createClient({ url });
    client.on("error", () => {});
    await client.connect();
    return client as RedisClientType;
  } catch (err) {
    // Fail-open: a down store must never take the app down with it.
    console.warn("[rate-limit] Redis unavailable, failing open to memory store");
    void err;
    return null;
  }
}

// Shared store singleton lifecycle (get + test reset): Redis when
// REDIS_URL is set and reachable, otherwise the in-memory store (correct
// for single-instance dev/test).
export function getRateLimitStore(): Promise<RateLimitStore> {
  storePromise ??= (async () => {
    clientPromise ??= connectRedis();
    const client = await clientPromise;
    if (client) return new RedisRateLimitStore(client);
    return new MemoryRateLimitStore();
  })();
  return storePromise;
}

// Test-only: drop cached store/client so env changes take effect.
export function resetRateLimitStore(): void {
  storePromise = null;
  clientPromise = null;
}
