import type { ContentBlock } from "@prisma/client";
import { db } from "@/server/db/client";

export function listContentBlocks(): Promise<ContentBlock[]> {
  return db.contentBlock.findMany({ orderBy: { updatedAt: "desc" } });
}
