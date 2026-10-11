import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/server/auth/services/get-session-user";
import { hasPermission } from "@/server/access/has-permission";
import { absoluteLoginUrl } from "@/server/hosts/absolute-login-url";

// Console chrome for the gated admin pages (dashboard, products, orders,
// users). Served on the admin subdomain in root form. Role-gated here too:
// the middleware gate only proves a session exists, this proves ADMIN.
export default async function AdminConsoleLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user || !hasPermission(user.role, "console:admin")) {
    redirect(await absoluteLoginUrl());
  }
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-60 shrink-0 bg-surface-low p-6 text-white">
        <Link href="/" className="mb-8 block text-xl font-black">SteadyGrid Admin</Link>
        <nav className="flex flex-col gap-3 text-sm font-bold">
          <Link href="/">Dashboard</Link>
          <Link href="/products">Products</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/users">Users</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
