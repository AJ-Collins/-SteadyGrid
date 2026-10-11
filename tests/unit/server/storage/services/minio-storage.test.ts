// @vitest-environment node
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import S3rver, { type S3rverInstance } from "s3rver";
import { MinioObjectStorage } from "@/server/storage/services/minio-storage";

// Live S3-protocol test: the MinIO driver talks real S3 REST against a
// local S3-compatible server (s3rver), proving wire compatibility with
// MinIO / any S3 endpoint — not just unit-level mocks.
const PORT = 14569;
let dir = "";
let server: S3rverInstance | null = null;

beforeAll(async () => {
  dir = await mkdtemp(join(tmpdir(), "steadygrid-s3rver-"));
  server = new S3rver({ port: PORT, address: "127.0.0.1", silent: true, directory: dir });
  await server.run();
}, 60_000);

afterAll(async () => {
  await server?.close();
  if (dir) await rm(dir, { recursive: true, force: true });
});

function storage(): MinioObjectStorage {
  return new MinioObjectStorage({
    endPoint: "127.0.0.1",
    port: PORT,
    useSSL: false,
    accessKey: "S3RVER",
    secretKey: "S3RVER",
    bucket: "steadygrid-test",
    region: "us-east-1",
  });
}

describe("MinioObjectStorage over S3 protocol", () => {
  it("round-trips bytes through put/get/exists/delete", async () => {
    const s = storage();
    const data = new Uint8Array([9, 8, 7, 6, 5]);
    const stored = await s.put(data, { mimeType: "image/png", prefix: "products" });

    expect(stored.key.startsWith("products/")).toBe(true);
    expect(stored.key.endsWith(".png")).toBe(true);
    expect(stored.sizeBytes).toBe(5);

    await expect(s.exists(stored.key)).resolves.toBe(true);

    const got = await s.get(stored.key);
    expect(got?.data).toEqual(data);
    expect(got?.mimeType).toBe("image/png");

    await s.delete(stored.key);
    await expect(s.exists(stored.key)).resolves.toBe(false);
    await expect(s.get(stored.key)).resolves.toBeNull();
  }, 60_000);
});
