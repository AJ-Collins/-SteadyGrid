// Client IP for rate-limit keys. Trusts X-Forwarded-For only when the app
// sits behind a proxy that strips spoofed values (TRUSTED_PROXIES set — the
// nginx edge sets real_ip_header, mirroring the reference's
// cloudflare-origin + trustProxies fix so one shared egress IP doesn't burn
// a single bucket for everyone).
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded && process.env.TRUSTED_PROXIES) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = req.headers.get("x-real-ip")?.trim();
  if (realIp && process.env.TRUSTED_PROXIES) return realIp;
  // Direct exposure (dev): XFF is client-controlled, so without a trusted
  // proxy it must NOT be authoritative — fall back to unknown bucket.
  return "unknown";
}
