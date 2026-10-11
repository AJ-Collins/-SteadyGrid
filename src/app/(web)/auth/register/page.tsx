import { Suspense } from "react";
import { RegisterForm } from "@/domains/auth/register-form";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
      <Suspense>
        <RegisterForm />
      </Suspense>
    </div>
  );
}
