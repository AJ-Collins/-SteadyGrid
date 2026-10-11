export class RefreshRejectedError extends Error {
  status = 401 as const;
  constructor() {
    super("Session expired — please sign in again");
  }
}
