import { parseBody, type ParsedBody } from "@/server/http/parse-body";
import { registerSchema, type RegisterInput } from "@/shared/schemas/register-schema";

export function readRegisterBody(req: Request): Promise<ParsedBody<RegisterInput>> {
  return parseBody(req, registerSchema);
}
