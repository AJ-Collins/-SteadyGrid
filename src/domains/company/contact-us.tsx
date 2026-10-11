"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Globe, CheckCircle2, Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/shared/schemas/contact-schema";

const CONTACT_METHODS = [
  { icon: Phone, title: "Call us", detail: "+254700000000", href: "tel:+254700000000", note: "Kenya, Nairobi-based support team" },
  { icon: Send, title: "Email us", detail: "sales@steadygrid.com", href: "mailto:sales@steadygrid.com", note: "Sales and partnership enquiries" },
  { icon: Globe, title: "Visit online", detail: "steadygrid.com", href: "https://www.steadygrid.com", note: "Full product catalogue" },
];

const SUBJECTS = ["Product enquiry", "Order support", "Warranty & returns", "Partnership", "Other"];

const inputClass =
  "w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-surface-low placeholder:text-gray-400 focus:outline-none focus:border-surface-low";
const labelClass = "flex flex-col gap-2";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{children}</span>;
}

export function ContactUs() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: SUBJECTS[0] },
  });

  async function onSubmit(values: ContactInput) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) return;
    setSent(true);
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Get in touch</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-surface-low md:text-4xl">
          We&apos;re here to help.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Whether you have a question about a product, need support with an order, or want to explore
          a partnership, our team is ready to help you find the right solution.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-gray-200 bg-gray-200 sm:grid-cols-3">
        {CONTACT_METHODS.map((m) => (
          <a key={m.title} href={m.href} className="group bg-white p-6 hover:bg-gray-50">
            <div className="flex h-10 w-10 items-center justify-center bg-surface-low">
              <m.icon className="h-5 w-5 text-white" />
            </div>
            <div className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-500">{m.title}</div>
            <div className="text-sm font-bold text-surface-low group-hover:underline">{m.detail}</div>
            <div className="mt-1 text-xs text-gray-400">{m.note}</div>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        <div className="w-full flex-1 rounded-md border border-gray-200 p-6 md:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="mb-4 h-10 w-10 text-green-600" />
              <div className="text-sm font-bold">Message sent</div>
              <p className="mb-6 mt-2 text-sm text-gray-500">
                Thanks for reaching out — our team will get back to you within 1–2 business days.
              </p>
              <button
                type="button"
                onClick={() => { setSent(false); reset(); }}
                className="text-xs font-bold uppercase tracking-widest underline underline-offset-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Send a message</p>
              <h2 className="mb-6 mt-2 text-2xl font-black tracking-tight text-surface-low">
                Tell us what you need.
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <label className={labelClass}>
                  <Label>Full name</Label>
                  <input type="text" placeholder="Jane Doe" {...register("name")} className={inputClass} />
                  {formState.errors.name && <span className="text-xs text-error">Enter your name</span>}
                </label>
                <label className={labelClass}>
                  <Label>Email address</Label>
                  <input type="email" placeholder="jane@company.com" {...register("email")} className={inputClass} />
                  {formState.errors.email && <span className="text-xs text-error">Enter a valid email</span>}
                </label>
                <label className={labelClass}>
                  <Label>Subject</Label>
                  <select {...register("subject")} className={inputClass}>
                    {SUBJECTS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>
                  <Label>Message</Label>
                  <textarea rows={5} placeholder="How can we help?" {...register("message")} className={inputClass} />
                  {formState.errors.message && <span className="text-xs text-error">Tell us a little more (min 10 characters)</span>}
                </label>
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="flex w-fit items-center gap-2 rounded-md bg-surface-low px-6 py-3 text-xs font-bold text-white hover:bg-[#1a2d4a] disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {formState.isSubmitting ? "Sending…" : "Send message"}
                </button>
              </form>
            </>
          )}
        </div>
        <aside className="w-full lg:w-[320px] lg:shrink-0">
          <div className="border border-gray-200">
            <div className="border-b border-gray-200 bg-gray-50 px-5 py-3 text-sm font-bold">Our offices</div>
            <div className="flex items-start gap-3 px-5 py-4">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-surface-low" />
              <div>
                <div className="text-sm font-bold">Nairobi, Kenya</div>
                <div className="text-xs text-gray-500">Our Headquarters</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
