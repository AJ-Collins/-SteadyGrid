import { db } from "@/server/db/client";

export interface ProductListItem {
  id: string;
  sku: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number | null;
  imageUrl: string | null;
  inStock: boolean;
  brand: { name: string } | null;
}

export interface ListProductsOptions {
  categorySlug?: string;
  skip?: number;
  take?: number;
}

export interface ProductListResult {
  items: ProductListItem[];
  total: number;
}

export async function listProducts(options: ListProductsOptions = {}): Promise<ProductListResult> {
  const where = options.categorySlug ? { category: { slug: options.categorySlug } } : undefined;
  const [total, products] = await Promise.all([
    db.product.count({ where }),
    db.product.findMany({
      where,
      include: { brand: true },
      orderBy: { createdAt: "desc" },
      skip: options.skip ?? 0,
      take: options.take ?? 48,
    }),
  ]);
  return {
    total,
    items: products.map((p) => ({
      id: p.id,
      sku: p.sku,
      slug: p.slug,
      title: p.title,
      description: p.description,
      price: Number(p.price),
      oldPrice: p.oldPrice ? Number(p.oldPrice) : null,
      imageUrl: p.imageUrl,
      inStock: p.inStock,
      brand: p.brand ? { name: p.brand.name } : null,
    })),
  };
}
