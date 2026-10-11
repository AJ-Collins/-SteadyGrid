import { SiteNavbar } from "@/shared/components/layout/site-navbar";
import { SiteFooter } from "@/shared/components/layout/site-footer";
import { webOrigin } from "@/server/hosts/web-origin";

// Public shell for the admin surface: top nav + footer around the login
// screen, with nav links pointed at the web surface.
export default async function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  const origin = await webOrigin();
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <SiteNavbar webOrigin={origin} />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-8 md:px-6 md:py-12">{children}</main>
      <SiteFooter webOrigin={origin} />
    </div>
  );
}
