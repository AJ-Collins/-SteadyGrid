import { Phone, Truck, Sun } from "lucide-react";

const BADGES = [
  { icon: Phone, title: "On-Time Solar Support", desc: "Talk to real solar experts based in Nairobi. whenever you need assistance.", cta: "Call Now" },
  { icon: Truck, title: "FREE SHIPPING OFFERS", desc: "Free shipping on qualifying orders — no surprises at checkout.", cta: "Shop Now" },
  { icon: Sun, title: "Custom Design Services", desc: "Get a custom system design built by solar professionals at no cost.", cta: "Design Now" },
];

export function TrustBadges() {
  return (
    <section className="w-full border-b border-neutral-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black text-surface-low sm:text-3xl">The SteadyGrid Difference</h2>
          <p className="mt-2 text-sm text-neutral-500">
            Our team is committed to providing you with solar services from start to finish.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-3">
          {BADGES.map((b) => (
            <div key={b.title} className="flex flex-col items-center rounded-2xl bg-[#f8f9fa] px-6 py-10 text-center">
              <b.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold text-surface-low">{b.title}</h3>
              <p className="mb-6 text-sm text-neutral-500">{b.desc}</p>
              <button className="bg-primary px-8 py-2.5 text-[13px] font-bold text-white hover:bg-primary-hover">
                {b.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
