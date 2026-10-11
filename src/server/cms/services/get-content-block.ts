import type { ContentBlock } from "@prisma/client";
import { db } from "@/server/db/client";

export function getContentBlock(key: string): Promise<ContentBlock | null> {
  return db.contentBlock.findUnique({ where: { key } });
}
