import { parseBody, type ParsedBody } from "@/server/http/parse-body";
import { cartLineSchema, type CartLineInput } from "@/shared/schemas/cart-schema";

export function readCartLine(req: Request): Promise<ParsedBody<CartLineInput>> {
  return parseBody(req, cartLineSchema);
}
