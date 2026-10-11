import { listProductsAction } from "@/server/catalog/controllers/list-products";
import { createProductAction } from "@/server/catalog/controllers/create-product";
import type { NextResponse } from "next/server";

export function GET(req: Request): Promise<NextResponse> {
  return listProductsAction(req);
}

export function POST(req: Request): Promise<NextResponse> {
  return createProductAction(req);
}
