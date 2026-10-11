import { z } from "zod";

export const cartLineSchema = z.object({
  productId: z.string().min(1),
  qty: z.number().int().min(1).max(99),
});

export type CartLineInput = z.infer<typeof cartLineSchema>;
