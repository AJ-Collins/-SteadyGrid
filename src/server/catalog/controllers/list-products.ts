import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { pageMeta } from "@/server/http/page-meta";
import { listProducts } from "@/server/catalog/services/list-products";
import { readProductQuery } from "@/server/catalog/requests/read-product-query";
import { enforceRateLimit } from "@/server/rate-limit/enforce-rate-limit";
import { applyRateHeaders } from "@/server/rate-limit/apply-rate-headers";
import type { NextResponse } from "next/server";

export async function listProductsAction(req: Request): Promise<NextResponse> {
  const { category, page, pageSize, skip, take } = readProductQuery(req);
  const limit = await enforceRateLimit(req, "api");
  if (limit.blocked) return limit.blocked;
  const { items, total } = await listProducts({ categorySlug: category, skip, take });
  const res = ok(items, { meta: pageMeta(page, pageSize, total) });
  applyRateHeaders(res, limit.headers);
  return res;
}
