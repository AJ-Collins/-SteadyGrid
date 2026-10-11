function s3ErrorCode(err: unknown): string | undefined {
  if (typeof err === "object" && err !== null && "code" in err) {
    const code = (err as { code?: unknown }).code;
    return typeof code === "string" ? code : undefined;
  }
  return undefined;
}

export function isNotFoundError(err: unknown): boolean {
  const code = s3ErrorCode(err);
  return code === "NoSuchKey" || code === "NotFound" || code === "NoSuchBucket";
}
