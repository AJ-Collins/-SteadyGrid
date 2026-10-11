import { productSchema, type ProductInput } from "@/shared/schemas/product-schema";
import { db } from "@/server/db/client";

// Accepts raw (input-side) data and normalizes schema defaults via parse,
// so one definition owns both validation and defaulting.
export function createProduct(input: ProductInput): Promise<{ id: string }> {
  const data = productSchema.parse(input);
  return db.product.create({
    data: {
      sku: data.sku,
      slug: data.slug,
      title: data.title,
      description: data.description,
      price: data.price,
      oldPrice: data.oldPrice ?? null,
      imageUrl: data.imageUrl || null,
      inStock: data.inStock,
      featured: data.featured,
      topSeller: data.topSeller,
      isNew: data.isNew,
      category: data.categorySlug
        ? { connect: { slug: data.categorySlug } }
        : undefined,
      brand: data.brandSlug ? { connect: { slug: data.brandSlug } } : undefined,
    },
    select: { id: true },
  });
}
