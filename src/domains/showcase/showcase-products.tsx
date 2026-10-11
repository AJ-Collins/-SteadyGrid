"use client";

import { motion } from "framer-motion";

const PRODUCTS = [
  { id: "sg-pro-400", name: "SteadyGrid Pro 400W", category: "Solar Panel", price: "$299", image: "https://images.unsplash.com/photo-1509391366360-1f9509eebadf?auto=format&fit=crop&w=600&q=80", features: ["22% Efficiency", "400W Output"] },
  { id: "sg-max-600", name: "SteadyGrid Max 600W", category: "Commercial Panel", price: "$449", image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80", features: ["24% Efficiency", "600W Output"] },
  { id: "sg-powerwall", name: "SteadyGrid PowerBank", category: "Home Storage", price: "$4,500", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80", features: ["10kWh Capacity", "Smart Grid Sync"] },
  { id: "sg-inverter", name: "Hybrid Smart Inverter", category: "Inverter", price: "$1,200", image: "https://images.unsplash.com/photo-1559056961-1f4dbbf9d36a?auto=format&fit=crop&w=600&q=80", features: ["98% Conversion", "Battery Ready"] },
];

export function ShowcaseProducts() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Top Selling Products</p>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-text-heading md:text-3xl">
              Power your future with our premium hardware
            </h2>
          </div>
          <button className="text-sm font-bold text-primary hover:underline">View full catalog →</button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-xl border border-border/40 bg-white hover:shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} className="h-48 w-full rounded-t-xl object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-1 w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                  {p.category}
                </span>
                <h3 className="font-bold text-text-heading">{p.name}</h3>
                <p className="mb-2 text-lg font-black text-text-heading">{p.price}</p>
                <ul className="mb-4 text-xs text-text-muted">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <button className="mt-auto rounded-md bg-surface-low py-2.5 text-sm font-bold text-white hover:bg-surface-high">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
