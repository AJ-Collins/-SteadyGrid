import { mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join, resolve, sep } from "node:path";
import {
  type ObjectStorage,
  type PutOptions,
  type StoredObject,
} from "@/server/storage/services/storage-port";
import { buildObjectKey } from "@/server/storage/services/build-object-key";
import { extensionForMime } from "@/server/storage/services/extension-for-mime";

// Local driver with cloud-like semantics: files are stored under opaque
// keys inside STORAGE_DIR and served through /api/files/<key>.
// Swapping to S3 later changes no calling code — only get-storage.ts.
export class LocalObjectStorage implements ObjectStorage {
  readonly name = "local" as const;
  private readonly root: string;

  constructor(rootDir = process.env.STORAGE_DIR ?? "./storage") {
    this.root = resolve(process.cwd(), rootDir);
  }

  private resolveKey(key: string): string {
    const normalized = key.replace(/^\/+/, "");
    const full = resolve(this.root, normalized);
    if (full !== this.root && !full.startsWith(this.root + sep)) {
      throw new Error("Invalid object key");
    }
    return full;
  }

  async put(data: Uint8Array, options: PutOptions): Promise<StoredObject> {
    const key = buildObjectKey(options.prefix ?? "uploads", extensionForMime(options.mimeType));
    const full = this.resolveKey(key);
    await mkdir(dirname(full), { recursive: true });
    await writeFile(full, data);
    return { key, sizeBytes: data.byteLength, mimeType: options.mimeType };
  }

  async get(key: string): Promise<{ data: Uint8Array; mimeType: string } | null> {
    try {
      const full = this.resolveKey(key);
      const data = await readFile(full);
      return { data: new Uint8Array(data), mimeType: "application/octet-stream" };
    } catch {
      return null;
    }
  }

  async delete(key: string): Promise<void> {
    await rm(this.resolveKey(key), { force: true });
  }

  async exists(key: string): Promise<boolean> {
    try {
      const info = await stat(this.resolveKey(key));
      return info.isFile();
    } catch {
      return false;
    }
  }
}
