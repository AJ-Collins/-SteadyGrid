"use client";

import { useState } from "react";
import { ChevronDown, Truck, RotateCcw, ShieldCheck, Headset } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { FAQ_CATEGORIES } from "@/domains/support/faq-data";

const HIGHLIGHTS = [
  { icon: Truck, title: "Fast Shipping", desc: "1–3 business day processing for all in-stock products." },
  { icon: RotateCcw, title: "Easy Returns", desc: "90-day return window for new and unused products." },
  { icon: ShieldCheck, title: "Secure Warranty", desc: "Coverage backed by licensed installation professionals." },
  { icon: Headset, title: "Nairobi, Kenyan-Based Support", desc: "In-house technical support team ready to help you." },
];

export function FaqSupport() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0]?.title ?? "");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const category = FAQ_CATEGORIES.find((c) => c.title === activeCategory) ?? FAQ_CATEGORIES[0]!;

  return (
    <div>
      <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((h) => (
          <div key={h.title} className="flex items-start gap-4 border border-gray-200 bg-white p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-surface-low">
              <h.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="mb-1 text-sm font-bold text-surface-low">{h.title}</div>
              <div className="text-xs text-gray-500">{h.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-8">
        <aside className="w-full lg:w-[240px] lg:shrink-0">
          <div className="border border-gray-200 lg:sticky lg:top-24">
            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold">Categories</div>
            {FAQ_CATEGORIES.map((c) => (
              <button
                key={c.title}
                type="button"
                onClick={() => { setActiveCategory(c.title); setOpenQuestion(null); }}
                className={cn(
                  "block w-full border-b border-gray-100 px-4 py-3 text-left text-sm font-medium last:border-0",
                  c.title === activeCategory
                    ? "bg-surface-low text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-surface-low",
                )}
              >
                {c.title}
              </button>
            ))}
          </div>
          <div className="mt-4 border border-gray-200 bg-gray-50 p-4">
            <div className="text-xs font-bold">Still have questions?</div>
            <p className="mb-3 mt-1 text-xs text-gray-500">
              Our experts are ready to help you find the right solution.
            </p>
            <a href="tel:+254700000000" className="block w-full bg-surface-low px-4 py-2 text-center text-xs font-bold text-white">
              +254700000000
            </a>
          </div>
        </aside>

        <div className="min-w-0 flex-1" id="faq-content">
          <div className="border border-gray-200 bg-white">
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <h2 className="text-base font-black md:text-lg">{category.title}</h2>
              <span className="text-xs text-gray-400">{category.items.length} topics</span>
            </div>
            <div className="px-6">
              {category.items.map((item) => {
                const open = openQuestion === item.question;
                return (
                  <div key={item.question} className="border-b border-gray-200 last:border-0">
                    <button
                      type="button"
                      onClick={() => setOpenQuestion(open ? null : item.question)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    >
                      <span className="text-sm font-semibold md:text-base">{item.question}</span>
                      <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", open && "rotate-180 text-surface-low")} />
                    </button>
                    {open && (
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-gray-500 md:text-base">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
