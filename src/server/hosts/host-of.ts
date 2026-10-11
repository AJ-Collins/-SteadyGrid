export function hostOf(hostHeader: string): string {
  return (hostHeader.split(":")[0] ?? "").toLowerCase();
}
