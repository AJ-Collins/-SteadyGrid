export class UploadRejectedError extends Error {
  status = 400 as const;
  constructor(message: string) {
    super(message);
  }
}
