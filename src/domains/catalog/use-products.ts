"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/shared/lib/api-client";

export interface ProductDto {
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

export const productKeys = {
  all: ["products"] as const,
  list: (category?: string) => ["products", category ?? "all"] as const,
};

export function useProducts(category?: string) {
  return useQuery({
    queryKey: productKeys.list(category),
    queryFn: () =>
      apiFetch<ProductDto[]>(
        category ? `/api/products?category=${category}` : "/api/products",
      ),
    staleTime: 30_000,
  });
}
