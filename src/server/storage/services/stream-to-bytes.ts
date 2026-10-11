import type { Readable } from "node:stream";

export async function streamToBytes(stream: Readable): Promise<Uint8Array> {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : (chunk as Buffer));
  }
  return new Uint8Array(Buffer.concat(chunks));
}
