import { z } from "zod";

export const orderSchema = z.object({
  items: z
    .array(z.object({ productId: z.string().min(1), qty: z.number().int().min(1).max(99) }))
    .min(1)
    .max(50),
});

export type OrderInput = z.infer<typeof orderSchema>;
