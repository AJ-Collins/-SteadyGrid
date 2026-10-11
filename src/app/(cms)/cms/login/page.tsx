import { Suspense } from "react";
import { CmsLoginForm } from "@/domains/cms/cms-login-form";

// Served as /login on the cms host (middleware rewrites /login here).
export default function CmsLoginPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Suspense>
        <CmsLoginForm />
      </Suspense>
    </div>
  );
}
