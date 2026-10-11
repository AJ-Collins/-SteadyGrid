"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";

const TABS = ["Electric car charging station", "Residential resources", "Wind power for industry"];

export function CaseStudy() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Case Studies</p>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-text-heading md:text-3xl">
          See how we solve problems, right on target
        </h2>
        <p className="mt-2 text-sm text-text-muted">Real-world deployments, measured results.</p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col-reverse rounded-xl bg-white p-6 shadow-md md:p-8 lg:flex-row lg:gap-8"
        >
          <div className="flex-1">
            <div className="mb-3 flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h3 className="text-xl font-black text-text-heading">Medtronic</h3>
            <p className="my-3 text-sm italic leading-relaxed text-text-muted">
              “We partnered with SteadyGrid to power all of our EV charging stations across three
              continents — on time and under budget.”
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-low text-sm font-black text-white">
                JK
              </div>
              <div>
                <div className="text-sm font-bold text-text-heading">Jennifer Kennedy</div>
                <div className="text-xs text-text-muted">Chief Technology Officer, Medtronic</div>
              </div>
            </div>
            <Link href="/case-studies/medtronic" className="mt-4 inline-block text-sm font-bold text-primary hover:underline">
              View Full Case Study
            </Link>
          </div>
          <div className="relative mb-6 flex-1 lg:mb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=80"
              alt="Medtronic solar deployment"
              className="h-64 w-full rounded-xl object-cover lg:h-full"
            />
            <div className="absolute bottom-4 left-4 flex gap-3">
              {[["85%", "Grid reduction"], ["3", "Continents"]].map(([v, l]) => (
                <div key={l} className="rounded-lg bg-white/95 px-4 py-2 text-center">
                  <div className="text-lg font-black text-text-heading">{v}</div>
                  <div className="text-[11px] text-text-muted">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="mt-6 flex flex-wrap gap-2">
          {TABS.map((t, i) => (
            <button
              key={t}
              className={
                i === 0
                  ? "rounded-md bg-surface-low px-4 py-2 text-xs font-bold text-white"
                  : "rounded-md border border-border bg-white px-4 py-2 text-xs font-bold text-text-muted"
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
