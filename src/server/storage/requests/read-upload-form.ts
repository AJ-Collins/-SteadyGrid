export interface UploadForm {
  file: File;
  prefix: string;
}

// Reads multipart upload input. Returns a message instead of throwing so
// the controller can answer 400 in the standard envelope.
export async function readUploadForm(req: Request): Promise<UploadForm | { error: string }> {
  const form = await req.formData().catch(() => null);
  if (!form) return { error: "Invalid multipart body" };
  const file = form.get("file");
  if (!(file instanceof File)) return { error: "Missing file field" };
  const prefix = form.get("prefix");
  return { file, prefix: typeof prefix === "string" && prefix ? prefix : "uploads" };
}
