import { parseBody, type ParsedBody } from "@/server/http/parse-body";
import { contentBlockSchema, type ContentBlockInput } from "@/shared/schemas/content-schema";

export function readContentBody(req: Request): Promise<ParsedBody<ContentBlockInput>> {
  return parseBody(req, contentBlockSchema);
}
