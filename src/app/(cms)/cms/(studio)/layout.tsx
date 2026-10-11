import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/server/auth/services/get-session-user";
import { hasPermission } from "@/server/access/has-permission";
import { absoluteLoginUrl } from "@/server/hosts/absolute-login-url";

// Studio chrome for the gated CMS pages. Served on the cms subdomain in
// root form. Role-gated here too: ADMIN or MARKETER.
export default async function CmsStudioLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user || !hasPermission(user.role, "console:cms")) {
    redirect(await absoluteLoginUrl());
  }
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-60 shrink-0 bg-surface p-6 text-white">
        <Link href="/" className="mb-8 block text-xl font-black">SteadyGrid CMS</Link>
        <nav className="flex flex-col gap-3 text-sm font-bold">
          <Link href="/">Content</Link>
          <Link href="/products">Items for sale</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
