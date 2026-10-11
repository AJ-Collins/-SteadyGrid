"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/shared/lib/api-client";
import { cartKeys, type CartLine } from "@/domains/cart/use-cart";

export function useAddToCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (line: CartLine) =>
      apiFetch("/api/cart", { method: "POST", body: JSON.stringify(line) }),
    onMutate: async (line) => {
      await qc.cancelQueries({ queryKey: cartKeys.all });
      const prev = qc.getQueryData<CartLine[]>(cartKeys.all) ?? [];
      qc.setQueryData<CartLine[]>(cartKeys.all, [...prev, line]);
      return { prev };
    },
    onError: (_e, _v, ctx) => {
      if (ctx?.prev) qc.setQueryData(cartKeys.all, ctx.prev);
    },
    onSettled: () => qc.invalidateQueries({ queryKey: cartKeys.all }),
  });
}
