import type { PageMeta } from "@/server/http/api-response";

export function pageMeta(page: number, pageSize: number, total: number): PageMeta {
  return { page, pageSize, total, totalPages: Math.max(1, Math.ceil(total / Math.max(1, pageSize))) };
}
