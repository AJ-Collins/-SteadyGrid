import { createContactMessageAction } from "@/server/contact/controllers/create-contact-message";
import type { NextResponse } from "next/server";

export function POST(req: Request): Promise<NextResponse> {
  return createContactMessageAction(req);
}
