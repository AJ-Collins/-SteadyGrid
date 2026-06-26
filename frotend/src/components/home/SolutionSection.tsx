import { Sun, BatteryCharging, Cpu, Wrench } from "lucide-react";

const solutions = [
  {
    icon: Sun,
    title: "Solar Solutions",
    desc: "High performance solar arrays for homes, businesses and large-scale industries.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Storage",
    desc: "Reliable battery systems for backup power and total energy independence.",
  },
  {
    icon: Cpu,
    title: "Inverters & Power",
    desc: "Advanced inverters and grid-management equipment for seamless performance.",
  },
  {
    icon: Wrench,
    title: "Installation & Support",
    desc: "Professional installation and 24/7 ongoing engineering support you can rely on.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-16 max-w-[1280px] mx-auto py-20">
      {/* Section header — split two-column */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
        <div className="lg:max-w-[50%]">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
            style={{ color: "var(--primary)" }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl sm:text-4xl font-black leading-tight"
            style={{ color: "var(--text-heading)", letterSpacing: "-0.02em", margin: 0 }}
          >
            End-to-End Energy
            <br />
            Solutions
          </h2>
        </div>
        <p
          className="lg:max-w-[42%] text-sm leading-relaxed self-end pt-2"
          style={{ color: "var(--text-muted)" }}
        >
          From consultation and system design to supply, installation and maintenance,
          we provide complete energy infrastructure tailored to industrial needs.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {solutions.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group p-6 rounded-xl flex flex-col gap-5 cursor-pointer transition-all duration-300"
              style={{
                background: "#ffffff",
                border: "1px solid var(--border)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px var(--primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 1px 4px rgba(0,0,0,0.05)";
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(84,233,138,0.12)" }}
              >
                <Icon size={20} style={{ color: "var(--primary)" }} />
              </div>

              <div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "var(--text-heading)", margin: "0 0 8px 0" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}