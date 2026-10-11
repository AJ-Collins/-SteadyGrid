import { jsonError } from "@/server/http/json-error";
import { ok } from "@/server/http/ok-response";
import { getContentBlock } from "@/server/cms/services/get-content-block";
import { readContentKey } from "@/server/cms/requests/read-content-key";
import type { NextResponse } from "next/server";

export async function getContentBlockAction(req: Request): Promise<NextResponse> {
  const key = readContentKey(req);
  if (!key) return jsonError("Missing key", 400);
  const block = await getContentBlock(key);
  if (!block) return jsonError("Not found", 404);
  return ok(block);
}
