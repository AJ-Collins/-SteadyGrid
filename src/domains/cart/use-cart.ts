"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/shared/lib/api-client";

export interface CartLine {
  productId: string;
  qty: number;
}

export const cartKeys = { all: ["cart"] as const };

export function useCart() {
  return useQuery({
    queryKey: cartKeys.all,
    queryFn: () => apiFetch<CartLine[]>("/api/cart"),
    // Cart is server state; offline reads fall back to cache.
    staleTime: 10_000,
  });
}
