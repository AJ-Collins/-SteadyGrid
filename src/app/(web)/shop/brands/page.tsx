import { PageHeader } from "@/shared/components/common/page-header";
import { Pagination } from "@/shared/components/common/pagination";
import { BrandCard } from "@/shared/components/common/brand-card";
import { db } from "@/server/db/client";

export default async function BrandsPage() {
  const brands = await db.brand.findMany({ orderBy: { name: "asc" } }).catch(() => []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <PageHeader
        title="Brands"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "All Brands" }]}
        imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
      />
      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        <div className="flex gap-8">
          <div className="flex-1">
            {brands.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                No brands yet. Run the database seed to populate them.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:grid-cols-4">
                {brands.map((b) => (
                  <BrandCard
                    key={b.id}
                    name={b.name}
                    logoUrl={b.logoUrl ?? ""}
                    href={`/shop/brands/${b.slug}`}
                  />
                ))}
              </div>
            )}
            <Pagination currentPage={1} totalPages={3} />
          </div>
        </div>
      </main>
    </div>
  );
}
