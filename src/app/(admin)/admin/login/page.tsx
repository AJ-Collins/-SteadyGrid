import { Suspense } from "react";
import { AdminLoginForm } from "@/domains/admin/admin-login-form";

// Served as /login on the admin host (middleware rewrites /login here).
export default function AdminLoginPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Suspense>
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
