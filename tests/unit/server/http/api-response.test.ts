// @vitest-environment node
import { describe, expect, it } from "vitest";
import { fail } from "@/server/http/fail-response";
import { ok } from "@/server/http/ok-response";
import { pageMeta } from "@/server/http/page-meta";
import { jsonError } from "@/server/http/json-error";

async function body(res: Response): Promise<unknown> {
  return res.json();
}

describe("api envelope", () => {
  it("wraps success data with optional meta", async () => {
    expect(await body(ok({ id: "1" }))).toEqual({ success: true, data: { id: "1" } });
    expect(await body(ok([1, 2], { meta: pageMeta(2, 10, 25), status: 200 }))).toEqual({
      success: true,
      data: [1, 2],
      meta: { page: 2, pageSize: 10, total: 25, totalPages: 3 },
    });
  });

  it("wraps failures with code and message", async () => {
    const res = fail("VALIDATION_FAILED", "bad input", 400);
    expect(res.status).toBe(400);
    expect(await body(res)).toEqual({
      success: false,
      error: { code: "VALIDATION_FAILED", message: "bad input" },
    });
  });

  it("carries retryAfterSeconds on rate limits", async () => {
    const res = fail("RATE_LIMITED", "slow down", 429, { retryAfterSeconds: 42 });
    expect(await body(res)).toEqual({
      success: false,
      error: { code: "RATE_LIMITED", message: "slow down", retryAfterSeconds: 42 },
    });
  });

  it("maps legacy jsonError statuses to codes", async () => {
    expect(await body(jsonError("nope", 404))).toEqual({
      success: false,
      error: { code: "NOT_FOUND", message: "nope" },
    });
    expect(await body(jsonError("bad", 400, "VALIDATION_FAILED"))).toEqual({
      success: false,
      error: { code: "VALIDATION_FAILED", message: "bad" },
    });
  });
});
