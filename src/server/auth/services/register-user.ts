import type { User } from "@prisma/client";
import { db } from "@/server/db/client";
import { hashPassword } from "@/server/auth/services/hash-password";
import { getUserByEmail } from "@/server/users/services/get-user-by-email";
import { EmailTakenError } from "@/server/auth/services/email-taken-error";
import type { RegisterInput } from "@/shared/schemas/register-schema";

export async function registerUser(input: RegisterInput): Promise<User> {
  const email = input.email.toLowerCase().trim();
  const existing = await getUserByEmail(email);
  if (existing) throw new EmailTakenError();
  return db.user.create({
    data: {
      email,
      name: input.name.trim(),
      password: await hashPassword(input.password),
      role: "CUSTOMER",
    },
  });
}
