import { parseBody, type ParsedBody } from "@/server/http/parse-body";
import { contactSchema, type ContactInput } from "@/shared/schemas/contact-schema";

export function readContactBody(req: Request): Promise<ParsedBody<ContactInput>> {
  return parseBody(req, contactSchema);
}
