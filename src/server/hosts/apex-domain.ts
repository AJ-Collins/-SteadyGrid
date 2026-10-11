// Canonical apex domain (e.g. "steadygrid.com").
// Override with SITE_APEX_DOMAIN for staging or custom deployments.
export function apexDomain(): string {
  return (process.env.SITE_APEX_DOMAIN ?? "steadygrid.com")
    .toLowerCase()
    .replace(/:\d+$/, "");
}
