import { NextResponse } from "next/server";
import type { ApiFailure, ErrorCode } from "@/server/http/api-response";

export function fail(
  code: ErrorCode,
  message: string,
  status: number,
  opts?: { retryAfterSeconds?: number; details?: unknown },
): NextResponse {
  const body: ApiFailure = {
    success: false,
    error: {
      code,
      message,
      ...(opts?.retryAfterSeconds !== undefined ? { retryAfterSeconds: opts.retryAfterSeconds } : {}),
      ...(opts?.details !== undefined ? { details: opts.details } : {}),
    },
  };
  return NextResponse.json(body, { status });
}
