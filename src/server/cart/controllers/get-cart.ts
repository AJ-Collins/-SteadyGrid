import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { requireUser } from "@/server/auth/services/require-user";
import { UnauthorizedError } from "@/server/auth/services/unauthorized-error";
import { getCartLines } from "@/server/cart/services/cart-store";
import type { NextResponse } from "next/server";

export async function getCartAction(): Promise<NextResponse> {
  try {
    await requireUser();
    return ok(getCartLines());
  } catch (err) {
    if (err instanceof UnauthorizedError) return jsonError(err.message, err.status);
    throw err;
  }
}
