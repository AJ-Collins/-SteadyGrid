import { productSchema, type ProductInput } from "@/shared/schemas/product-schema";
import { db } from "@/server/db/client";

export async function updateProduct(id: string, input: ProductInput): Promise<{ id: string }> {
  const data = productSchema.parse(input);
  const product = await db.product.update({
    where: { id },
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
  return product;
}
