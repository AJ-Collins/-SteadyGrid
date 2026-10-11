// Re-export of the server Prisma singleton so existing UI imports keep
// working. Server code should import from "@/server/db/client" directly.
export { db } from "@/server/db/client";
