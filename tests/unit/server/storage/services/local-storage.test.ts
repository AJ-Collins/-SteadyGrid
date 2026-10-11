// @vitest-environment node
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { LocalObjectStorage } from "@/server/storage/services/local-storage";

describe("LocalObjectStorage", () => {
  it("stores and retrieves bytes under opaque keys", async () => {
    const root = await mkdtemp(join(tmpdir(), "steadygrid-storage-"));
    try {
      const storage = new LocalObjectStorage(root);
      const data = new Uint8Array([1, 2, 3, 4]);
      const stored = await storage.put(data, { mimeType: "image/png", prefix: "products" });

      expect(stored.key.startsWith("products/")).toBe(true);
      expect(stored.key.endsWith(".png")).toBe(true);
      expect(stored.sizeBytes).toBe(4);
      await expect(storage.exists(stored.key)).resolves.toBe(true);

      const got = await storage.get(stored.key);
      expect(got?.data).toEqual(data);

      await storage.delete(stored.key);
      await expect(storage.exists(stored.key)).resolves.toBe(false);
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });

  it("rejects path traversal keys", async () => {
    const root = await mkdtemp(join(tmpdir(), "steadygrid-storage-"));
    try {
      const storage = new LocalObjectStorage(root);
      await expect(storage.get("../../etc/passwd")).resolves.toBeNull();
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });
});
