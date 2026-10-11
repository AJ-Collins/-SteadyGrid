import { parseBody, type ParsedBody } from "@/server/http/parse-body";
import { orderSchema, type OrderInput } from "@/shared/schemas/order-schema";

export function readOrderBody(req: Request): Promise<ParsedBody<OrderInput>> {
  return parseBody(req, orderSchema);
}
