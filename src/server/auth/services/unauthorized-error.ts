export class UnauthorizedError extends Error {
  status = 401 as const;
  constructor(message = "Not authenticated") {
    super(message);
  }
}
