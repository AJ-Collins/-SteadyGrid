import { Suspense } from "react";
import { LoginForm } from "@/domains/auth/login-form";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
