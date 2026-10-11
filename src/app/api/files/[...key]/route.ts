import { db } from "@/server/db/client";
import { getStorage } from "@/server/storage/services/get-storage";

interface Params {
  params: Promise<{ key: string[] }>;
}

// Serves objects stored via the storage driver. The DB holds the key;
// bytes stream from here (local driver) or redirect to cloud URLs.
export async function GET(_req: Request, { params }: Params): Promise<Response> {
  const key = (await params).key.join("/");
  if (!key || key.includes("..")) return new Response("Not found", { status: 404 });

  const [asset, stored] = await Promise.all([
    db.fileAsset.findUnique({ where: { key } }),
    getStorage().get(key),
  ]);
  if (!stored) return new Response("Not found", { status: 404 });

  const body = new Uint8Array(stored.data);
  return new Response(body, {
    headers: {
      "Content-Type": asset?.mimeType ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
