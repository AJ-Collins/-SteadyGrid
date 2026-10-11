import { db } from "@/server/db/client";
import type { ContactInput } from "@/shared/schemas/contact-schema";

export function saveContactMessage(input: ContactInput): Promise<{ id: string }> {
  return db.contactMessage.create(
    {
      data: {
        name: input.name.trim(),
        email: input.email.toLowerCase().trim(),
        subject: input.subject,
        message: input.message.trim(),
      },
      select: { id: true },
    },
  );
}
