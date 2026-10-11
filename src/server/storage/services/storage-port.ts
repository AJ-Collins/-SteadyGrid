// Object-storage port. The rest of the backend programs against this
// interface; drivers (local disk, S3-compatible cloud) implement it.
// The DB NEVER stores bytes — only the opaque key + public URL.

export interface PutOptions {
  mimeType: string;
  prefix?: string;
}

export interface StoredObject {
  key: string;
  sizeBytes: number;
  mimeType: string;
}

export interface ObjectStorage {
  readonly name: "local" | "minio";
  put(data: Uint8Array, options: PutOptions): Promise<StoredObject>;
  get(key: string): Promise<{ data: Uint8Array; mimeType: string } | null>;
  delete(key: string): Promise<void>;
  exists(key: string): Promise<boolean>;
}
