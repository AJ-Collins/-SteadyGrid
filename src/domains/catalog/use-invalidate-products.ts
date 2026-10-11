"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productKeys } from "@/domains/catalog/use-products";

export function useInvalidateProducts() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async () => {},
    onSuccess: () => qc.invalidateQueries({ queryKey: productKeys.all }),
  });
}
