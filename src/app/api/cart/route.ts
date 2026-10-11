import { getCartAction } from "@/server/cart/controllers/get-cart";
import { addCartLineAction } from "@/server/cart/controllers/add-cart-line";
import type { NextResponse } from "next/server";

export function GET(): Promise<NextResponse> {
  return getCartAction();
}

export function POST(req: Request): Promise<NextResponse> {
  return addCartLineAction(req);
}
