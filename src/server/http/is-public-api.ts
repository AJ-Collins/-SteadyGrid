import { PUBLIC_API_ROUTES } from "@/server/http/public-api-routes";

function under(pathname: string, prefix: string): boolean {
  return pathname === prefix || pathname.startsWith(prefix.endsWith("/") ? prefix : `${prefix}/`);
}

export function isPublicApi(pathname: string, method: string): boolean {
  return PUBLIC_API_ROUTES.some(
    (r) => (r.method === "*" || r.method === method) && under(pathname, r.prefix),
  );
}
