import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { requireUser } from "@/server/auth/services/require-user";
import { UnauthorizedError } from "@/server/auth/services/unauthorized-error";
import { addCartLine } from "@/server/cart/services/cart-store";
import { readCartLine } from "@/server/cart/requests/read-cart-line";
import type { NextResponse } from "next/server";

export async function addCartLineAction(req: Request): Promise<NextResponse> {
  try {
    await requireUser();
    const parsed = await readCartLine(req);
    if (!parsed.ok) return jsonError(parsed.error, 400, "VALIDATION_FAILED");
    addCartLine({ productId: parsed.data.productId, qty: parsed.data.qty });
    return ok({ ok: true }, { status: 201 });
  } catch (err) {
    if (err instanceof UnauthorizedError) return jsonError(err.message, err.status);
    throw err;
  }
}
