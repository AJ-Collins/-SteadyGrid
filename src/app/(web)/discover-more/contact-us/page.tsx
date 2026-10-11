import { PageHeader } from "@/shared/components/common/page-header";
import { ContactUs } from "@/domains/company/contact-us";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <PageHeader
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
      />
      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        <ContactUs />
      </main>
    </div>
  );
}
