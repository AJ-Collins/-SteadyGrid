import { z } from "zod";

export const productSchema = z.object({
  sku: z.string().min(2),
  slug: z.string().min(2),
  title: z.string().min(3),
  description: z.string().min(10),
  price: z.coerce.number().positive(),
  oldPrice: z.coerce.number().positive().optional(),
  imageUrl: z.string().url().optional().or(z.literal("")),
  inStock: z.boolean().default(true),
  featured: z.boolean().default(false),
  topSeller: z.boolean().default(false),
  isNew: z.boolean().default(false),
  categorySlug: z.string().optional(),
  brandSlug: z.string().optional(),
});

export type ProductInput = z.input<typeof productSchema>;
export type ProductData = z.output<typeof productSchema>;
