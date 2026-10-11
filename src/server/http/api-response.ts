// Standard API envelope for the whole system. Every JSON endpoint returns
// exactly one of these — the frontend never has to guess the shape.
//
//   success → { success: true, data: T, meta?: PageMeta }
//   failure → { success: false, error: { code, message, retryAfterSeconds?, details? } }
//
// Binary endpoints (/api/files) are the only exception.

export type ErrorCode =
  | "BAD_REQUEST"
  | "VALIDATION_FAILED"
  | "UNAUTHORIZED"
  | "SESSION_EXPIRED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "INVALID_TOKEN"
  | "INTERNAL_ERROR";

export interface PageMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
  meta?: PageMeta;
}

export interface ApiFailure {
  success: false;
  error: {
    code: ErrorCode;
    message: string;
    retryAfterSeconds?: number;
    details?: unknown;
  };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
