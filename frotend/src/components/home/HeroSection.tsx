import { ArrowRight, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-visible">
      {/* Hero image container with curved bottom */}
      <div
        className="relative overflow-hidden"
        style={{
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          minHeight: "620px",
        }}
      >
        {/* Background image – use a real solar image or replace src */}
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
          alt="Solar energy field at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />

        {/* Gradient overlay – lighter on right, darker on left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(10,20,15,0.82) 0%, rgba(10,20,15,0.55) 55%, rgba(10,20,15,0.18) 100%)",
          }}
        />

        {/* Ghost headline (large watermark text) */}
        <div
          className="absolute top-[80px] left-0 right-0 px-8 lg:px-16 pointer-events-none select-none hidden lg:block"
          aria-hidden
        >
          <div
            className="text-[72px] xl:text-[90px] font-black leading-none"
            style={{ color: "rgba(255,255,255,0.06)", letterSpacing: "-0.03em" }}
          >
            Smart Energy
          </div>
          <div
            className="text-[72px] xl:text-[90px] font-black leading-none"
            style={{ color: "rgba(255,255,255,0.06)", letterSpacing: "-0.03em" }}
          >
            Sustainable Future
          </div>
        </div>

        {/* Main hero content */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-10 lg:pt-14 pb-32 lg:pb-40 max-w-[1280px] mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ color: "var(--primary)" }}
          >
            Powering Today. Sustaining Tomorrow.
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.08] mb-6 max-w-xl"
            style={{ color: "#ffffff", letterSpacing: "-0.025em", margin: "0 0 24px 0" }}
          >
            Smart Energy{" "}
            <span style={{ color: "var(--primary)", display: "block" }}>
              Sustainable Future
            </span>
          </h1>

          <p
            className="text-sm sm:text-base max-w-md mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            We deliver reliable, affordable and clean energy solutions for homes,
            businesses and industrial infrastructure. Engineered for precision,
            built for stability.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-0">
            <button
              className="flex items-center gap-2 text-sm font-bold px-6 py-3 rounded transition-all"
              style={{ background: "var(--primary)", color: "var(--primary-text)" }}
            >
              Our Solutions <ArrowRight size={15} />
            </button>
            <button
              className="text-sm font-semibold px-6 py-3 rounded transition-all"
              style={{
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.5)",
                color: "#ffffff",
              }}
            >
              Explore Projects
            </button>
          </div>
        </div>

        {/* Bottom right badges inside hero */}
        <div className="absolute bottom-24 right-8 lg:right-16 hidden lg:flex flex-col items-end gap-3 z-10">
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded text-white text-xs font-semibold"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <span className="text-2xl font-black" style={{ color: "var(--primary)" }}>1MW+</span>
            <span className="text-white/70">Energy Delivered</span>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded text-white text-xs font-semibold"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <Shield size={14} style={{ color: "var(--primary)" }} />
            <span className="text-2xl font-black" style={{ color: "#fff" }}>100%</span>
            <span className="text-white/70">Commitment to Quality</span>
          </div>
        </div>
      </div>

      {/* Overlapping image card — bleeds out of hero over the background */}
      <div
        className="hidden lg:block absolute z-20"
        style={{
          bottom: "-80px",
          right: "64px",
          width: "340px",
        }}
      >
        <div
          className="overflow-hidden rounded-xl shadow-2xl"
          style={{ border: "3px solid rgba(255,255,255,0.9)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=700&q=80"
            alt="Solar panel installation on building roof"
            className="w-full h-[220px] object-cover"
          />
          {/* Small caption bar */}
          <div
            className="px-4 py-3 text-xs font-semibold"
            style={{ background: "#fff", color: "var(--text-muted)" }}
          >
            Building a cleaner future — Industrial solar
          </div>
        </div>
      </div>

      {/* Extra bottom spacer to accommodate overlapping card */}
      <div className="hidden lg:block" style={{ height: "60px" }} />
    </section>
  );
}