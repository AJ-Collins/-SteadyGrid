"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, type CheckoutInput } from "@/shared/schemas/checkout-schema";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

export function CheckoutForm() {
  const { register, handleSubmit, formState } = useForm<CheckoutInput>({
    resolver: zodResolver(checkoutSchema),
  });

  function onSubmit(_values: CheckoutInput) {
    // TODO: POST /api/orders via TanStack mutation.
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-lg flex-col gap-4">
      {(["email", "name", "address", "city", "phone"] as const).map((f) => (
        <label key={f} className="flex flex-col gap-1 text-sm font-semibold capitalize">
          {f}
          <Input {...register(f)} />
          {formState.errors[f] && <span className="text-xs text-error">{formState.errors[f]?.message}</span>}
        </label>
      ))}
      <Button type="submit" size="lg">Place order</Button>
    </form>
  );
}
