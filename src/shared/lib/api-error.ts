export class ApiError extends Error {
  constructor(
    readonly code: string,
    message: string,
    readonly status: number,
    readonly retryAfterSeconds?: number,
    readonly details?: unknown,
  ) {
    super(message);
  }
}
