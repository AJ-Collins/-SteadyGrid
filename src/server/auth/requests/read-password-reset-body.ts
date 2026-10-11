import { parseBody, type ParsedBody } from "@/server/http/parse-body";
import { passwordResetSchema, type PasswordResetInput } from "@/shared/schemas/password-reset-schema";

export function readPasswordResetBody(req: Request): Promise<ParsedBody<PasswordResetInput>> {
  return parseBody(req, passwordResetSchema);
}
