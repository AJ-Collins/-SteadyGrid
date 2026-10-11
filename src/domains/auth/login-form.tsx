"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { loginSchema, type LoginInput } from "@/shared/schemas/login-schema";
import { useToastStore } from "@/shared/stores/use-toast-store";
import { AuthShell } from "@/domains/auth/auth-shell";
import { FieldLabel } from "@/domains/auth/field-label";
import { GoogleIcon } from "@/domains/auth/google-icon";
import { VisibilityToggle } from "@/domains/auth/visibility-toggle";
import { fieldInputClass, fieldWrapClass } from "@/domains/auth/field-classes";
import { usePasswordVisibility } from "@/domains/auth/use-password-visibility";
import { safeRedirectTarget } from "@/domains/auth/safe-redirect-target";

function navigate(router: ReturnType<typeof useRouter>, target: string) {
  if (target.startsWith("http")) {
    window.location.assign(target);
  } else {
    router.push(target);
  }
}

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pushToast = useToastStore((s) => s.pushToast);
  const { show, toggle } = usePasswordVisibility();
  const { register, handleSubmit, formState } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(values: LoginInput) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      pushToast({ title: "Login failed", description: "Invalid email or password" });
      return;
    }
    pushToast({ title: "Welcome back", description: values.email });
    const callbackUrl = searchParams.get("callbackUrl");
    navigate(
      router,
      safeRedirectTarget(callbackUrl, window.location.origin, window.location.hostname),
    );
  }

  return (
    <AuthShell
      image="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80"
      imageAlt="EcoFlow power station set up outdoors at sunset"
      captionTitle="Power a new world."
      captionText="Sign in to track orders, manage your devices, and shop faster."
    >
      <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Welcome back</p>
      <h1 className="mb-8 mt-2 text-2xl font-black text-surface-low md:text-3xl">Sign in to your account</h1>
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
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-xs text-gray-500">
            <input type="checkbox" className="accent-surface-low" /> Remember me
          </label>
          <Link href="/auth/forgot-password" className="text-xs font-bold text-surface-low hover:underline">
            Forgot your password?
          </Link>
        </div>
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="rounded-md bg-surface-low py-3 text-sm font-bold text-white hover:bg-[#1a2d4a] disabled:opacity-60"
        >
          {formState.isSubmitting ? "Signing in…" : "Sign in"}
        </button>
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="text-xs uppercase tracking-widest text-gray-400">or</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <button
          type="button"
          onClick={() => pushToast({ title: "Google sign-in", description: "Google sign-in is not enabled yet." })}
          className="flex items-center justify-center gap-2 rounded-md border border-gray-200 py-3 text-sm font-bold hover:bg-gray-50"
        >
          <GoogleIcon /> Continue with Google
        </button>
        <p className="text-center text-sm text-gray-500">
          New customer?{" "}
          <Link href="/auth/register" className="font-bold text-surface-low hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
