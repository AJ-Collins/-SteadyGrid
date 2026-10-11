export class InvalidCredentialsError extends Error {
  status = 401 as const;
  constructor() {
    super("Invalid email or password");
  }
}
