export class InvalidResetTokenError extends Error {
  status = 400 as const;
  constructor() {
    super("Reset link is invalid or has expired");
  }
}
