import { headers } from "next/headers";
import { apexHostFor } from "@/server/hosts/apex-host-for";

// Absolute origin of the web surface for the current request, so shared
// chrome (navbar/footer) rendered on admin/cms hosts links back correctly.
// Port-preserving for localhost dev; x-forwarded-proto aware in production.
export async function webOrigin(): Promise<string> {
  const store = await headers();
  const hostHeader = store.get("host") ?? "localhost";
  const proto =
    store.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "production" ? "https" : "http");
  const port = hostHeader.split(":")[1];
  const apex = apexHostFor(hostHeader);
  return `${proto}://${apex}${port ? `:${port}` : ""}`;
}
