import type { ApiResponse } from "@/server/http/api-response";
import { ApiError } from "@/shared/lib/api-error";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

function isEnvelope(body: unknown): body is ApiResponse<unknown> {
  return (
    typeof body === "object" &&
    body !== null &&
    "success" in body &&
    typeof (body as { success: unknown }).success === "boolean"
  );
}

// Typed client for the standard envelope: resolves with `data`, throws
// ApiError (code + status, never a shape to guess) on any failure.
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  const body: unknown = await res.json().catch(() => null);
  if (!res.ok || !isEnvelope(body) || body.success !== true) {
    if (isEnvelope(body) && body.success === false) {
      throw new ApiError(
        body.error.code,
        body.error.message,
        res.status,
        body.error.retryAfterSeconds,
        body.error.details,
      );
    }
    throw new ApiError("INTERNAL_ERROR", `Request failed: ${res.status}`, res.status);
  }
  return body.data as T;
}
