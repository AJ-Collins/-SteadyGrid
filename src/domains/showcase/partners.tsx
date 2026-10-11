"use client";

import { motion } from "framer-motion";
import { Leaf, Zap, Award, TrendingUp } from "lucide-react";

const PARTNERS = [
  { name: "Trivago", tagline: "Hospitality" },
  { name: "Bina Karya", tagline: "Construction" },
  { name: "Business", tagline: "Enterprise" },
  { name: "Healthcare", tagline: "Medical" },
  { name: "Medtronic", tagline: "Technology" },
];

const HIGHLIGHTS = [
  { icon: Leaf, title: "100% Renewable", desc: "Clean energy across every deployment." },
  { icon: Zap, title: "Fast Deployment", desc: "From survey to switch-on in weeks." },
  { icon: Award, title: "ISO 9001 Certified", desc: "Quality systems you can audit." },
  { icon: TrendingUp, title: "30% Cost Savings", desc: "Lower lifetime cost per kWh." },
];

export function Partners() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="max-w-xl text-2xl font-black tracking-tight text-text-heading md:text-3xl">
            Focusing on quality, we maintain customer trust
          </h2>
          <p className="mt-2 max-w-xl text-sm text-text-muted">
            We ensure that every installation meets the highest standard.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-text-heading">
            {["10+ year warranty", "24/7 monitoring", "Custom solutions"].map((c) => (
              <li key={c}>✓ {c}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8 flex flex-wrap gap-4">
          {PARTNERS.map((p) => (
            <div key={p.name} className="w-[130px] rounded-xl bg-white p-4 text-center md:w-[150px]">
              <div className="font-black text-text-heading">{p.name}</div>
              <div className="text-xs text-text-muted">{p.tagline}</div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl bg-white p-6"
            >
              <h.icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-bold text-text-heading">{h.title}</h3>
              <p className="text-sm text-text-muted">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
