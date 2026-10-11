export class EmailTakenError extends Error {
  status = 409 as const;
  constructor() {
    super("Email already registered");
  }
}
