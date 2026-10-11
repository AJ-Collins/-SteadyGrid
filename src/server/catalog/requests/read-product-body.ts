import { parseBody, type ParsedBody } from "@/server/http/parse-body";
import { productSchema, type ProductInput } from "@/shared/schemas/product-schema";

export function readProductBody(req: Request): Promise<ParsedBody<ProductInput>> {
  return parseBody(req, productSchema);
}
