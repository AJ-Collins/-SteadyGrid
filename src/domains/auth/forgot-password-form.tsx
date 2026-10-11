"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail, MailCheck } from "lucide-react";
import { passwordRequestSchema, type PasswordRequestInput } from "@/shared/schemas/password-request-schema";
import { AuthShell } from "@/domains/auth/auth-shell";
import { FieldLabel } from "@/domains/auth/field-label";
import { fieldInputClass, fieldWrapClass } from "@/domains/auth/field-classes";

export function ForgotPasswordForm() {
  const [sentEmail, setSentEmail] = useState<string | null>(null);
  const [otherEmail, setOtherEmail] = useState(false);
  const { register, handleSubmit, formState } = useForm<PasswordRequestInput>({
    resolver: zodResolver(passwordRequestSchema),
  });

  async function onSubmit(values: PasswordRequestInput) {
    await fetch("/api/auth/password-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    setSentEmail(values.email);
    setOtherEmail(false);
  }

  return (
    <AuthShell
      image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80"
      imageAlt="EcoFlow power station charging on the road"
      captionTitle="Locked out happens to everyone."
      captionText="Enter your email and we'll send you a link to get back in."
      minHeight="lg:min-h-[520px]"
    >
      {sentEmail && !otherEmail ? (
        <>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Check your inbox</p>
          <h1 className="mb-8 mt-2 flex items-center gap-2 text-2xl font-black text-surface-low md:text-3xl">
            Reset link sent <MailCheck className="h-6 w-6 text-green-600" />
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            If an account exists for {sentEmail}, you&apos;ll receive an email with a link to reset your
            password.
          </p>
          <button
            type="button"
            onClick={() => setOtherEmail(true)}
            className="mb-4 text-xs font-bold uppercase tracking-widest underline underline-offset-2"
          >
            Use a different email
          </button>
          <Link href="/auth/login" className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3">
            <ArrowLeft className="h-4 w-4" /> Back to sign in
          </Link>
        </>
      ) : (
        <>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Forgot password</p>
          <h1 className="mt-2 text-2xl font-black text-surface-low md:text-3xl">Reset your password</h1>
          <p className="mb-8 mt-2 text-sm text-gray-500">
            Enter the email address associated with your account and we&apos;ll send you a link to reset
            your password.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <FieldLabel>Email address</FieldLabel>
              <div className={fieldWrapClass}>
                <Mail className="h-4 w-4 shrink-0 text-gray-400" />
                <input type="email" required placeholder="you@company.com" {...register("email")} className={fieldInputClass} />
              </div>
              {formState.errors.email && <span className="text-xs text-error">{formState.errors.email.message}</span>}
            </label>
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="rounded-md bg-surface-low py-3 text-sm font-bold text-white hover:bg-[#1a2d4a] disabled:opacity-60"
            >
              {formState.isSubmitting ? "Sending…" : "Send reset link"}
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
