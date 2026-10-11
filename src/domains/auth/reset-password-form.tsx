"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Check, CheckCircle2, Lock, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { AuthShell } from "@/domains/auth/auth-shell";
import { FieldLabel } from "@/domains/auth/field-label";
import { VisibilityToggle } from "@/domains/auth/visibility-toggle";
import { fieldInputClass, fieldWrapClass } from "@/domains/auth/field-classes";
import { usePasswordVisibility } from "@/domains/auth/use-password-visibility";

const REQUIREMENTS = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /[0-9]/.test(v) },
];

interface ResetFields {
  password: string;
  confirmPassword: string;
}

export function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const pw = usePasswordVisibility();
  const pw2 = usePasswordVisibility();
  const { register, handleSubmit, watch, formState } = useForm<ResetFields>();
  const password = watch("password") ?? "";
  const confirm = watch("confirmPassword") ?? "";
  const mismatch = confirm.length > 0 && confirm !== password;
  const allMet = REQUIREMENTS.every((r) => r.test(password)) && !mismatch && password.length > 0;

  async function onSubmit(values: ResetFields) {
    setServerError(null);
    const res = await fetch("/api/auth/password-reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password: values.password, confirmPassword: values.confirmPassword }),
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as {
        error?: { message?: string };
      } | null;
      setServerError(body?.error?.message ?? "Reset failed — the link may have expired.");
      return;
    }
    setDone(true);
  }

  return (
    <AuthShell
      image="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80"
      imageAlt="EcoFlow power station set up outdoors"
      captionTitle="Almost back in."
      captionText="Choose a strong new password to secure your account."
    >
      {done ? (
        <>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">All set</p>
          <h1 className="mb-8 mt-2 flex items-center gap-2 text-2xl font-black text-surface-low md:text-3xl">
            Password reset <CheckCircle2 className="h-6 w-6 text-green-600" />
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            Your password has been updated. You can now sign in with your new password.
          </p>
          <Link href="/auth/login" className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3">
            <ArrowLeft className="h-4 w-4" /> Back to sign in
          </Link>
        </>
      ) : (
        <>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Reset password</p>
          <h1 className="mt-2 text-2xl font-black text-surface-low md:text-3xl">Set a new password</h1>
          <p className="mb-8 mt-2 text-sm text-gray-500">
            Your new password must be different from previously used passwords.
          </p>
          {!token && (
            <p className="mb-4 rounded-md bg-error-bg p-3 text-sm text-error">
              This reset link is missing its token. Request a new link below.
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <FieldLabel>New password</FieldLabel>
              <div className={fieldWrapClass}>
                <Lock className="h-4 w-4 shrink-0 text-gray-400" />
                <input type={pw.show ? "text" : "password"} required placeholder="Enter new password" {...register("password")} className={fieldInputClass} />
                <VisibilityToggle show={pw.show} onToggle={pw.toggle} />
              </div>
            </label>
            {password.length > 0 && (
              <ul className="-mt-2 flex flex-col gap-1.5">
                {REQUIREMENTS.map((r) => {
                  const met = r.test(password);
                  return (
                    <li key={r.label} className={cn("flex items-center gap-2 text-xs", met ? "text-surface-low" : "text-gray-400")}>
                      {met ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                      {r.label}
                    </li>
                  );
                })}
              </ul>
            )}
            <label className="flex flex-col gap-2">
              <FieldLabel>Confirm new password</FieldLabel>
              <div className={fieldWrapClass}>
                <Lock className="h-4 w-4 shrink-0 text-gray-400" />
                <input type={pw2.show ? "text" : "password"} required placeholder="Re-enter new password" {...register("confirmPassword")} className={fieldInputClass} />
                <VisibilityToggle show={pw2.show} onToggle={pw2.toggle} />
              </div>
            </label>
            {mismatch && <span className="-mt-3 text-xs text-red-500">Passwords don&apos;t match.</span>}
            {serverError && <span className="text-xs text-red-500">{serverError}</span>}
            <button
              type="submit"
              disabled={!allMet || !token || formState.isSubmitting}
              className="rounded-md bg-surface-low py-3 text-sm font-bold text-white hover:bg-[#1a2d4a] disabled:opacity-40"
            >
              {formState.isSubmitting ? "Resetting…" : "Reset password"}
            </button>
            <Link href="/auth/login" className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3">
              <ArrowLeft className="h-4 w-4" /> Back to sign in
            </Link>
          </form>
        </>
      )}
    </AuthShell>
  );
}
