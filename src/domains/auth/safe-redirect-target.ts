import { isSafeRedirect } from "@/domains/auth/is-safe-redirect";

export function safeRedirectTarget(
  callbackUrl: string | null,
  currentOrigin: string,
  currentHostname: string,
  fallback = "/",
): string {
  if (!callbackUrl || !isSafeRedirect(callbackUrl, currentHostname)) return fallback;
  try {
    const url = new URL(callbackUrl, currentOrigin);
    // Same-origin absolute URLs collapse to path form for router.push;
    // cross-subdomain targets need a full navigation (handled by caller).
    if (url.origin === new URL(currentOrigin).origin) {
      return `${url.pathname}${url.search}`;
    }
    return url.toString();
  } catch {
    return fallback;
  }
}
