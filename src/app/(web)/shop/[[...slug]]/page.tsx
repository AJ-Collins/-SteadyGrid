import { notFound } from "next/navigation";
import { PageHeader } from "@/shared/components/common/page-header";
import { Pagination } from "@/shared/components/common/pagination";
import { ShopCategory } from "@/domains/catalog/shop-category";
import { ProductGroupSection } from "@/domains/catalog/product-group-section";
import { SHOP_CATEGORIES } from "@/domains/catalog/shop-categories";
import { KIT_GROUPS, NEW_ARRIVAL_GROUPS } from "@/domains/catalog/kit-groups";
import { listProducts } from "@/server/catalog/services/list-products";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export default async function ShopCategoryPage({ params }: Props) {
  const key = ((await params).slug ?? []).join("/");
  const entry = SHOP_CATEGORIES[key];
  if (!entry) return notFound();

  if (entry.layout === "groups") {
    const groups = key === "solar-kits" ? KIT_GROUPS : NEW_ARRIVAL_GROUPS;
    return (
      <div className="min-h-screen bg-white font-sans">
        <PageHeader
          title={entry.title}
          breadcrumbs={entry.breadcrumbs}
          imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
        />
        <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-4 py-8 md:px-6 md:py-12">
          {groups.map((g) => (
            <ProductGroupSection key={g.heading} {...g} />
          ))}
          <div className="border-t border-neutral-200 pt-4">
            <Pagination currentPage={1} totalPages={3} />
          </div>
        </main>
      </div>
    );
  }

  const { items: products } = await listProducts({ categorySlug: entry.categorySlug, take: 24 }).catch(
    () => ({ items: [], total: 0 }),
  );
  return (
    <ShopCategory
      config={{
        title: entry.title,
        breadcrumbs: entry.breadcrumbs,
        description: entry.description,
        banner: entry.banner,
      }}
      products={products}
    />
  );
}
