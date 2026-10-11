import { PageHeader } from "@/shared/components/common/page-header";
import { AboutUs } from "@/domains/company/about-us";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
      />
      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        <AboutUs />
      </main>
    </div>
  );
}
