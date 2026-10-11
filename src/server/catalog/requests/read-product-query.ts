import { parsePageParams } from "@/server/http/pagination";

export interface ProductQuery {
  category?: string;
  page: number;
  pageSize: number;
  skip: number;
  take: number;
}

export function readProductQuery(req: Request): ProductQuery {
  const { searchParams } = new URL(req.url);
  const { page, pageSize, skip, take } = parsePageParams(searchParams);
  const category = searchParams.get("category") ?? undefined;
  return { category, page, pageSize, skip, take };
}
