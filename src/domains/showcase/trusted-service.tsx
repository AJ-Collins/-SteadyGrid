"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Factory, BatteryCharging, Wind } from "lucide-react";

const SERVICES = [
  { num: "01", icon: Sun, title: "Solar panels for home", desc: "Rooftop systems sized for your household.", href: "/services/01" },
  { num: "02", icon: Factory, title: "Solar panels for industry", desc: "Commercial arrays that cut operating cost.", href: "/services/02" },
  { num: "03", icon: BatteryCharging, title: "Solar panels for chargers", desc: "Clean power for EV charging hubs.", href: "/services/03" },
  { num: "04", icon: Wind, title: "Wind power generator", desc: "Hybrid wind-solar for round-the-clock power.", href: "/services/04" },
];

export function TrustedService() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 rounded-xl bg-white p-6 shadow-sm md:p-10 lg:flex-row">
        <div className="lg:w-1/2">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">What We Do</p>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-text-heading md:text-3xl">
            Trusted service, for your various needs
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Whether you need residential panels or industrial arrays, our team delivers.
          </p>
          <Link href="/contact" className="mt-4 inline-block text-sm font-bold text-primary hover:underline">
            Get in touch ↗
          </Link>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-border/50 p-5 hover:border-primary/50"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-black text-primary">{s.num}</span>
                  <s.icon className="h-5 w-5 text-surface-low" />
                </div>
                <h3 className="text-sm font-bold text-text-heading">{s.title}</h3>
                <p className="mb-2 text-xs text-text-muted">{s.desc}</p>
                <Link href={s.href} className="text-xs font-bold text-primary hover:underline">
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative lg:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80"
            alt="Worker carrying a solar panel"
            className="h-[300px] w-full rounded-xl object-cover md:h-[400px] lg:h-[500px]"
          />
          <div className="absolute bottom-4 left-4 rounded-xl bg-white px-5 py-3 shadow-lg">
            <div className="text-xl font-black text-text-heading">98%</div>
            <div className="text-xs text-text-muted">Client satisfaction rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
