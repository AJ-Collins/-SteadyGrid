import { headers } from "next/headers";

// Absolute surface-local login URL for server components. next/navigation's
// relative redirect() can resolve against the internal address after a
// middleware rewrite — building from the Host header keeps the browser on
// the surface it came from.
export async function absoluteLoginUrl(): Promise<string> {
  const store = await headers();
  const host = store.get("host") ?? "localhost";
  const proto =
    store.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "production" ? "https" : "http");
  return `${proto}://${host}/login`;
}
