"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, type ProductInput } from "@/shared/schemas/product-schema";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { useCreateProduct } from "@/domains/catalog/use-create-product";

export function ProductForm() {
  const { register, handleSubmit, formState } = useForm<ProductInput>({
    resolver: zodResolver(productSchema),
  });
  const create = useCreateProduct();

  return (
    <form
      onSubmit={handleSubmit((v) => create.mutate(v))}
      className="grid max-w-2xl grid-cols-1 gap-4"
    >
      {(["sku", "slug", "title", "description", "price", "oldPrice", "imageUrl", "categorySlug", "brandSlug"] as const).map((f) => (
        <label key={f} className="flex flex-col gap-1 text-sm font-semibold capitalize">
          {f}
          <Input {...register(f)} />
          {formState.errors[f] && <span className="text-xs text-error">Invalid value</span>}
        </label>
      ))}
      <Button type="submit" size="lg" disabled={create.isPending}>
        {create.isPending ? "Saving…" : "Save product"}
      </Button>
    </form>
  );
}
