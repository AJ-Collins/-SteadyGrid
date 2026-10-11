import { listOrdersAction } from "@/server/orders/controllers/list-orders";
import { createOrderAction } from "@/server/orders/controllers/create-order";
import type { NextResponse } from "next/server";

export function GET(req: Request): Promise<NextResponse> {
  return listOrdersAction(req);
}

export function POST(req: Request): Promise<NextResponse> {
  return createOrderAction(req);
}
