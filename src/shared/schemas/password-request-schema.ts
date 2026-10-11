import { z } from "zod";

export const passwordRequestSchema = z.object({
  email: z.string().email(),
});

export type PasswordRequestInput = z.infer<typeof passwordRequestSchema>;
