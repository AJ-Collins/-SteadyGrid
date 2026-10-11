import { parseBody, type ParsedBody } from "@/server/http/parse-body";
import { loginSchema, type LoginInput } from "@/shared/schemas/login-schema";

export function readLoginBody(req: Request): Promise<ParsedBody<LoginInput>> {
  return parseBody(req, loginSchema);
}
