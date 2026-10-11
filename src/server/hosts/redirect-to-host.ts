import { NextResponse, type NextRequest } from "next/server";
import { originFor } from "@/server/hosts/origin-for";

/** 308 to the same path (and query) on another surface's host. */
export function redirectToHost(
  request: NextRequest,
  host: string,
  pathname: string,
): NextResponse {
  const url = new URL(pathname || "/", originFor(request, host));
  url.search = request.nextUrl.search;
  return NextResponse.redirect(url, 308);
}
