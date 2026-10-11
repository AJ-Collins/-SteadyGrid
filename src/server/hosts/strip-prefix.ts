/**
 * Strip an internal surface prefix from a pathname.
 *
 *   stripPrefix('/admin/users', '/admin') → '/users'
 *   stripPrefix('/admin', '/admin')       → '/'
 *
 * Returns null when `pathname` is not under `prefix` — '/administrator'
 * is not under '/admin'.
 */
export function stripPrefix(pathname: string, prefix: string): string | null {
  if (pathname === prefix) return "/";
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return null;
}
