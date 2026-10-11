/**
 * Local UI development with no session cookie available. NEVER true in a
 * production build — checked only by per-surface page gates, never by host
 * allow-listing or the internal rewrites.
 */
export function isLocalMockMode(): boolean {
  return process.env.NEXT_PUBLIC_API_MOCKING === "enabled" && process.env.NODE_ENV !== "production";
}
