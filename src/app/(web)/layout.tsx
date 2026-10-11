import { SiteNavbar } from "@/shared/components/layout/site-navbar";
import { SiteFooter } from "@/shared/components/layout/site-footer";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SiteNavbar />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
