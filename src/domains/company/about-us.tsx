"use client";

import { useEffect, useRef, useState } from "react";
import { BatteryCharging, Sun, Fuel, Thermometer, Mail } from "lucide-react";

const STATS = [
  { value: 2017, label: "Founded", suffix: "" },
  { value: 1, label: "Projected Users", suffix: "M+" },
  { value: 50, label: "Regions served", suffix: "+" },
  { value: 3, label: "Headquarters", suffix: "" },
];

const VALUES = [
  { letter: "F", word: "Flexible", description: "Power that adapts to home, outdoor, and off-grid life." },
  { letter: "I", word: "Innovative", description: "Self-developed battery and software technology." },
  { letter: "R", word: "Reliable", description: "Engineered for real-world, everyday dependability." },
  { letter: "S", word: "Simple", description: "Straightforward setup, control, and everyday use." },
  { letter: "T", word: "Thorough", description: "Complete systems, from solar input to last-mile output." },
];

const ECOSYSTEM = [
  { icon: BatteryCharging, title: "Portable power stations", description: "RIVER, DELTA, and TRAIL series covering everyday backup to whole-home power." },
  { icon: Sun, title: "Solar panels", description: "Portable, rigid, and bifacial panels from 45W to 400W for any setup." },
  { icon: Fuel, title: "Smart generators", description: "Dual-fuel backup generators with real-time app monitoring and alerts." },
  { icon: Thermometer, title: "Off-grid living", description: "GLACIER coolers and WAVE air conditioning built for outdoor and mobile life." },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / 1200);
            setN(Math.round(value * p));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);
  return (
    <span ref={ref} className="text-3xl font-black tabular-nums text-surface-low md:text-4xl">
      {n.toLocaleString()}{suffix}
    </span>
  );
}

export function AboutUs() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <section className="rounded-md border border-gray-200 bg-white px-6 py-10 md:px-12 md:py-16">
        <h1 className="text-3xl font-black tracking-tight text-surface-low md:text-5xl">Power a new world.</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
          SteadyGrid is a growing provider of eco-friendly energy solutions. What began as a commitment
          to be the first in flexible, innovative, reliable, simple, and thorough power has grown into a
          global energy company serving individuals and families at home, outdoors, and on the go.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-gray-200 bg-gray-200 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white p-6 md:p-8">
            <CountUp value={s.value} suffix={s.suffix} />
            <div className="mt-1 text-xs text-gray-500 md:text-sm">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Who we are</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-surface-low md:text-3xl">
            A trusted energy company, built for the real world.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            SteadyGrid has become a reliable and trusted energy company for individuals and families,
            providing accessible and renewable power solutions for homes, outdoors, and off-grid living.
            With operational headquarters in the Nairobi, kenya, SteadyGrid has empowered more than 1+
            million users in over 50+ regions.
          </p>
        </div>
        <div className="flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
            alt="Home powered by EcoFlow energy solutions at dusk"
            className="h-full max-h-[320px] w-full rounded-md object-cover"
          />
        </div>
      </section>

      <section className="rounded-md border border-gray-200 bg-white px-6 py-8 md:px-10 md:py-10">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">What guides us</p>
        <h2 className="mb-6 mt-2 text-2xl font-black tracking-tight text-surface-low">First to be F.I.R.S.T.</h2>
        <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v) => (
            <div key={v.letter} className="bg-white p-5">
              <div className="text-2xl font-black text-surface-low">{v.letter}</div>
              <div className="mt-1 text-sm font-bold">{v.word}</div>
              <div className="mt-1 text-xs text-gray-500">{v.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">What we build</p>
        <h2 className="mb-6 mt-2 text-2xl font-black tracking-tight text-surface-low">
          One ecosystem, every kind of power.
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM.map((e) => (
            <div key={e.title}>
              <div className="flex h-10 w-10 items-center justify-center bg-surface-low">
                <e.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mb-1 mt-3 text-sm font-bold text-surface-low">{e.title}</h3>
              <p className="text-xs leading-relaxed text-gray-500">{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-md border border-gray-200 bg-white px-6 py-8 md:px-10 md:py-10">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Where we operate</p>
        <h2 className="mb-4 mt-2 text-2xl font-black tracking-tight text-surface-low">
          Headquartered across three continents.
        </h2>
        <div className="text-sm font-bold text-surface-low">Nairobi, Kenya</div>
        <div className="text-xs text-gray-500">Global headquarters</div>
      </section>

      <section className="flex flex-col gap-4 rounded-md border border-gray-200 bg-gray-50 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Become our partner</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-surface-low">
            Let&apos;s power a new world, together.
          </h2>
        </div>
        <a
          href="mailto:sales@steadygrid.com"
          className="flex w-fit items-center gap-2 bg-surface-low px-6 py-3 text-xs font-bold text-white hover:bg-[#1a2d4a]"
        >
          <Mail className="h-4 w-4" /> sales@steadygrid.com
        </a>
      </section>
    </div>
  );
}
