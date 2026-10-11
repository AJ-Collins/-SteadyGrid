"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Lock, Mail, User } from "lucide-react";
import { registerSchema, type RegisterInput } from "@/shared/schemas/register-schema";
import { useToastStore } from "@/shared/stores/use-toast-store";
import { AuthShell } from "@/domains/auth/auth-shell";
import { FieldLabel } from "@/domains/auth/field-label";
import { GoogleIcon } from "@/domains/auth/google-icon";
import { VisibilityToggle } from "@/domains/auth/visibility-toggle";
import { fieldInputClass, fieldWrapClass } from "@/domains/auth/field-classes";
import { usePasswordVisibility } from "@/domains/auth/use-password-visibility";
import { safeRedirectTarget } from "@/domains/auth/safe-redirect-target";

const PERKS = [
  "Check out faster",
  "Save multiple shipping addresses",
  "Access your order history",
  "Track new orders",
  "Save items to your wish list",
];

export function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pushToast = useToastStore((s) => s.pushToast);
  const pw = usePasswordVisibility();
  const pw2 = usePasswordVisibility();
  const { register, handleSubmit, formState, setError } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(values: RegisterInput) {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.status === 409) {
      setError("email", { message: "Email already registered" });
      return;
    }
    if (!res.ok) {
      pushToast({ title: "Registration failed", description: "Please try again" });
      return;
    }
    pushToast({ title: "Account created", description: values.email });
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
      image="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&q=80"
      imageAlt="Solar panels powering an off-grid home"
      captionTitle="Join 5 million+ users worldwide."
      captionText="Create an account to unlock faster checkout and order tracking."
      minHeight="lg:min-h-[640px]"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-gray-500">New customer?</p>
      <h1 className="mt-2 text-2xl font-black text-surface-low md:text-3xl">Create your account</h1>
      <p className="mb-6 mt-2 text-sm text-gray-500">Create an account with us and you&apos;ll be able to:</p>
      <ul className="mb-8 flex flex-col gap-2">
        {PERKS.map((p) => (
          <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
            <Check className="h-4 w-4 text-surface-low" /> {p}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <FieldLabel>Full name</FieldLabel>
          <div className={fieldWrapClass}>
            <User className="h-4 w-4 shrink-0 text-gray-400" />
            <input type="text" required placeholder="Jane Doe" {...register("name")} className={fieldInputClass} />
          </div>
          {formState.errors.name && <span className="text-xs text-error">{formState.errors.name.message}</span>}
        </label>
        <label className="flex flex-col gap-2">
          <FieldLabel>Email address</FieldLabel>
          <div className={fieldWrapClass}>
            <Mail className="h-4 w-4 shrink-0 text-gray-400" />
            <input type="email" required placeholder="you@company.com" {...register("email")} className={fieldInputClass} />
          </div>
          {formState.errors.email && <span className="text-xs text-error">{formState.errors.email.message}</span>}
        </label>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <FieldLabel>Password</FieldLabel>
            <div className={fieldWrapClass}>
              <Lock className="h-4 w-4 shrink-0 text-gray-400" />
              <input type={pw.show ? "text" : "password"} required placeholder="Create a password" {...register("password")} className={fieldInputClass} />
              <VisibilityToggle show={pw.show} onToggle={pw.toggle} />
            </div>
            {formState.errors.password && <span className="text-xs text-error">{formState.errors.password.message}</span>}
          </label>
          <label className="flex flex-col gap-2">
            <FieldLabel>Confirm password</FieldLabel>
            <div className={fieldWrapClass}>
              <Lock className="h-4 w-4 shrink-0 text-gray-400" />
              <input type={pw2.show ? "text" : "password"} required placeholder="Re-enter password" {...register("confirmPassword")} className={fieldInputClass} />
              <VisibilityToggle show={pw2.show} onToggle={pw2.toggle} />
            </div>
            {formState.errors.confirmPassword && <span className="text-xs text-error">{formState.errors.confirmPassword.message}</span>}
          </label>
        </div>
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="rounded-md bg-surface-low py-3 text-sm font-bold text-white hover:bg-[#1a2d4a] disabled:opacity-60"
        >
          {formState.isSubmitting ? "Creating…" : "Create account"}
        </button>
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="text-xs uppercase tracking-widest text-gray-400">or</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <button
          type="button"
          onClick={() => pushToast({ title: "Google sign-up", description: "Google sign-up is not enabled yet." })}
          className="flex items-center justify-center gap-2 rounded-md border border-gray-200 py-3 text-sm font-bold hover:bg-gray-50"
        >
          <GoogleIcon /> Sign up with Google
        </button>
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-bold text-surface-low hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
