import { Leaf } from "lucide-react";

export default function ShowcaseBanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-16 max-w-[1280px] mx-auto pb-8">
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ height: "420px" }}
      >
        {/* Full-bleed aerial building image */}
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
          alt="Aerial view of commercial building with solar panel installation"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />

        {/* Subtle dark vignette for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 60%)",
          }}
        />

        {/* Floating caption card — bottom left */}
        <div
          className="absolute bottom-8 left-8 max-w-xs p-5 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(84,233,138,0.18)" }}
            >
              <Leaf size={16} style={{ color: "var(--primary)" }} />
            </div>
            <p
              className="text-sm font-semibold leading-snug"
              style={{ color: "var(--text-heading)", margin: 0 }}
            >
              Building a cleaner, greener and more sustainable future.
            </p>
          </div>
          {/* Green accent underline */}
          <div
            className="w-8 h-0.5 rounded-full ml-12"
            style={{ background: "var(--primary)" }}
          />
        </div>
      </div>
    </section>
  );
}