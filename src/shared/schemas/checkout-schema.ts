import { z } from "zod";

export const checkoutSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  address: z.string().min(5),
  city: z.string().min(2),
  phone: z.string().min(7),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
