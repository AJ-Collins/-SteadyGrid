import { NextResponse } from "next/server";
import type { ApiSuccess, PageMeta } from "@/server/http/api-response";

export function ok<T>(data: T, init?: { status?: number; meta?: PageMeta }): NextResponse {
  const body: ApiSuccess<T> = { success: true, data, ...(init?.meta ? { meta: init.meta } : {}) };
  return NextResponse.json(body, { status: init?.status ?? 200 });
}
