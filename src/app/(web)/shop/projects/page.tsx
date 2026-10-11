import { PageHeader } from "@/shared/components/common/page-header";
import { ShopByProjectCard } from "@/domains/catalog/shop-by-project-card";
import { PROJECTS } from "@/domains/catalog/shop-by-project";

export default function ProjectsIndexPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <PageHeader
        title="All Projects"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "All Projects" }]}
        imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
      />
      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ShopByProjectCard key={p.id} {...p} />
          ))}
        </div>
      </main>
    </div>
  );
}
