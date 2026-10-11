import type { Prisma } from "@prisma/client";
import { contentBlockSchema, type ContentBlockInput } from "@/shared/schemas/content-schema";
import { db } from "@/server/db/client";

export function upsertContentBlock(input: ContentBlockInput): Promise<{ id: string }> {
  const data = contentBlockSchema.parse(input);
  // JSON column: validated shape, cast to Prisma's JSON input type.
  const payload = data.payload as Prisma.InputJsonValue;
  return db.contentBlock.upsert({
    where: { key: data.key },
    update: { title: data.title, payload, published: data.published },
    create: { key: data.key, title: data.title, payload, published: data.published },
    select: { id: true },
  });
}
