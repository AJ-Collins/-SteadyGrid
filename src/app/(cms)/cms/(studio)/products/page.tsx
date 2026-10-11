import { ProductForm } from "@/domains/cms/product-form";

export default function CmsProductsPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-extrabold">Items for sale</h1>
      <p className="mb-6 text-sm text-text-muted">Create or update the items sold on the website. Writes go through Zod validation → Prisma → Postgres, then TanStack Query invalidation refreshes the storefront.</p>
      <ProductForm />
    </div>
  );
}
