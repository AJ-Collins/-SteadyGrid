"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, ShieldAlert } from "lucide-react";
import { loginSchema, type LoginInput } from "@/shared/schemas/login-schema";
import { useToastStore } from "@/shared/stores/use-toast-store";
import { AuthShell } from "@/domains/auth/auth-shell";
import { FieldLabel } from "@/domains/auth/field-label";
import { VisibilityToggle } from "@/domains/auth/visibility-toggle";
import { fieldInputClass, fieldWrapClass } from "@/domains/auth/field-classes";
import { usePasswordVisibility } from "@/domains/auth/use-password-visibility";
import { safeRedirectTarget } from "@/domains/auth/safe-redirect-target";

// Admin-console login. Same AuthShell design as the storefront login, but
// served on the admin host (/login) so auth cookies stay same-host, and
// gated to the ADMIN role after credentials verify.
export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pushToast = useToastStore((s) => s.pushToast);
  const { show, toggle } = usePasswordVisibility();
  const [roleError, setRoleError] = useState<string | null>(null);
  const { register, handleSubmit, formState } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(values: LoginInput) {
    setRoleError(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      pushToast({ title: "Login failed", description: "Invalid email or password" });
      return;
    }
    const me = await fetch("/api/auth/me").then((r) => r.json() as Promise<{ data?: { role?: string } }>);
    if (me.data?.role !== "ADMIN") {
      await fetch("/api/auth/logout", { method: "POST" });
      setRoleError("This account does not have admin access.");
      return;
    }
    pushToast({ title: "Welcome back", description: values.email });
    const callbackUrl = searchParams.get("callbackUrl");
    const target = safeRedirectTarget(callbackUrl, window.location.origin, window.location.hostname);
    if (target.startsWith("http")) {
      window.location.assign(target);
    } else {
      router.push(target);
    }
  }

  return (
    <AuthShell
      image="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
      imageAlt="Solar panels at dusk"
      captionTitle="SteadyGrid Admin."
      captionText="Sign in with an administrator account to manage the store."
      minHeight="lg:min-h-[520px]"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Admin console</p>
      <h1 className="mb-8 mt-2 text-2xl font-black text-surface-low md:text-3xl">Sign in to admin</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <FieldLabel>Email address</FieldLabel>
          <div className={fieldWrapClass}>
            <Mail className="h-4 w-4 shrink-0 text-gray-400" />
            <input type="email" required placeholder="you@company.com" {...register("email")} className={fieldInputClass} />
          </div>
          {formState.errors.email && <span className="text-xs text-error">{formState.errors.email.message}</span>}
        </label>
        <label className="flex flex-col gap-2">
          <FieldLabel>Password</FieldLabel>
          <div className={fieldWrapClass}>
            <Lock className="h-4 w-4 shrink-0 text-gray-400" />
            <input type={show ? "text" : "password"} required placeholder="Enter your password" {...register("password")} className={fieldInputClass} />
            <VisibilityToggle show={show} onToggle={toggle} />
          </div>
          {formState.errors.password && <span className="text-xs text-error">{formState.errors.password.message}</span>}
        </label>
        {roleError && (
          <p className="flex items-center gap-2 rounded-md bg-error-bg p-3 text-xs font-bold text-error">
            <ShieldAlert className="h-4 w-4 shrink-0" /> {roleError}
          </p>
        )}
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="rounded-md bg-surface-low py-3 text-sm font-bold text-white hover:bg-[#1a2d4a] disabled:opacity-60"
        >
          {formState.isSubmitting ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </AuthShell>
  );
}
