import type { User } from "@prisma/client";
import { verifyPassword } from "@/server/auth/services/verify-password";
import { getUserByEmail } from "@/server/users/services/get-user-by-email";
import { InvalidCredentialsError } from "@/server/auth/services/invalid-credentials-error";
import type { LoginInput } from "@/shared/schemas/login-schema";

export async function authenticateUser(input: LoginInput): Promise<User> {
  const user = await getUserByEmail(input.email);
  if (!user) throw new InvalidCredentialsError();
  const ok = await verifyPassword(input.password, user.password);
  if (!ok) throw new InvalidCredentialsError();
  return user;
}
