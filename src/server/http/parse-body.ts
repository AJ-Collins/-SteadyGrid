import type { z } from "zod";

export type ParsedBody<T> = { ok: true; data: T } | { ok: false; error: string };

export async function parseBody<TOutput, TInput>(
  req: Request,
  schema: z.ZodType<TOutput, z.ZodTypeDef, TInput>,
): Promise<ParsedBody<TOutput>> {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return { ok: false, error: "Invalid JSON body" };
  }
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return { ok: false, error: "Validation failed" };
  }
  return { ok: true, data: parsed.data };
}
