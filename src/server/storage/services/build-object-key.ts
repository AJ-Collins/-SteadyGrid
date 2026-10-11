export function buildObjectKey(prefix: string, extension: string): string {
  const safePrefix = prefix.replace(/^\/+|\/+$/g, "") || "uploads";
  const id = crypto.randomUUID();
  const ext = extension.replace(/^\.+/, "").toLowerCase();
  return ext ? `${safePrefix}/${id}.${ext}` : `${safePrefix}/${id}`;
}
