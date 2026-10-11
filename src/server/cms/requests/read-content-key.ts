export function readContentKey(req: Request): string | null {
  return new URL(req.url).searchParams.get("key");
}
