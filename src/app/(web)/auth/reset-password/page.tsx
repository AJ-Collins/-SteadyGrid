import { Suspense } from "react";
import { ResetPasswordForm } from "@/domains/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
      <Suspense>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
