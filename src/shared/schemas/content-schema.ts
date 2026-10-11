import { z } from "zod";

export const contentBlockSchema = z.object({
  key: z.string().min(2),
  title: z.string().min(2),
  payload: z.record(z.string(), z.unknown()),
  published: z.boolean().default(true),
});

export type ContentBlockInput = z.input<typeof contentBlockSchema>;
export type ContentBlockData = z.output<typeof contentBlockSchema>;
