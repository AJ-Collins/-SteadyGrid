import { PageHeader } from "@/shared/components/common/page-header";
import { OurBlog } from "@/domains/company/our-blog";

export default function OurBlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <PageHeader
        title="Our Blog"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80"
      />
      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        <OurBlog />
      </main>
    </div>
  );
}
