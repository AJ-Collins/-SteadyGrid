export class TooManyResetRequestsError extends Error {
  readonly retryAfterSeconds: number;
  constructor(retryAfterSeconds: number) {
    super("Too many reset requests — try again later");
    this.retryAfterSeconds = retryAfterSeconds;
  }
}
