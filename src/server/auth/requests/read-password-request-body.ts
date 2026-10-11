import { parseBody, type ParsedBody } from "@/server/http/parse-body";
import { passwordRequestSchema, type PasswordRequestInput } from "@/shared/schemas/password-request-schema";

export function readPasswordRequestBody(req: Request): Promise<ParsedBody<PasswordRequestInput>> {
  return parseBody(req, passwordRequestSchema);
}
