// Post-login destinations must stay inside our surfaces: relative paths
// or absolute URLs on localhost / the current host.
export function isSafeRedirect(target: string | null, currentHostname: string): boolean {
  if (!target) return false;
  if (target.startsWith("/") && !target.startsWith("//")) return true;
  try {
    const url = new URL(target);
    if (url.hostname === currentHostname) return true;
    return url.hostname === "localhost" || url.hostname.endsWith(".localhost");
  } catch {
    return false;
  }
}
