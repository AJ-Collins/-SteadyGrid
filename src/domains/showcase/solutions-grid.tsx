"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Settings, Headset, BookOpen, Truck, Cpu } from "lucide-react";

const SOLUTIONS = [
  { icon: ShieldCheck, title: "Layered security", desc: "Multi-stage protection across every component we ship." },
  { icon: Settings, title: "Quality control of each part", desc: "Every part inspected before it leaves our warehouse." },
  { icon: Headset, title: "Reliable customer service", desc: "Real experts on call through design, install and after." },
  { icon: BookOpen, title: "Maintenance manual book", desc: "Clear guides keep your system running for decades." },
  { icon: Truck, title: "Delivered safely", desc: "Engineered packaging and insured freight on every order." },
  { icon: Cpu, title: "Based on artificial intelligence", desc: "Smart monitoring that learns how you use power." },
];

export function SolutionsGrid() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Our Capabilities</p>
        <h2 className="mx-auto mt-1 max-w-2xl text-2xl font-black tracking-tight text-text-heading md:text-3xl">
          We offer quality, with the best materials and service
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-text-muted">
          From raw material sourcing to final installation, quality leads every step.
        </p>
        <div className="mt-8 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl bg-white p-6 hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-1 font-bold text-text-heading">{s.title}</h3>
              <p className="mb-3 text-sm text-text-muted">{s.desc}</p>
              <span className="text-sm font-bold text-primary">Learn more →</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
