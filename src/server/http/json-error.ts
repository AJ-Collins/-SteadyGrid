import { NextResponse } from "next/server";
import { fail } from "@/server/http/fail-response";
import type { ErrorCode } from "@/server/http/api-response";

const CODE_BY_STATUS: Record<number, ErrorCode> = {
  400: "BAD_REQUEST",
  401: "UNAUTHORIZED",
  403: "FORBIDDEN",
  404: "NOT_FOUND",
  409: "CONFLICT",
  429: "RATE_LIMITED",
};

// Legacy helper kept for terse error returns. Emits the standard envelope;
// prefer fail() with an explicit code for new code.
export function jsonError(message: string, status = 400, code?: ErrorCode): NextResponse {
  return fail(code ?? CODE_BY_STATUS[status] ?? "INTERNAL_ERROR", message, status);
}
