"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/shared/lib/api-client";
import type { ProductInput } from "@/shared/schemas/product-schema";
import { productKeys } from "@/domains/catalog/use-products";

// Optimistic-update example for admin/CMS product mutations.
export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: ProductInput) =>
      apiFetch("/api/products", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => qc.invalidateQueries({ queryKey: productKeys.all }),
  });
}
