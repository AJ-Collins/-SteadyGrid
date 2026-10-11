export class ForbiddenError extends Error {
  status = 403 as const;
  constructor(message = "Forbidden") {
    super(message);
  }
}
