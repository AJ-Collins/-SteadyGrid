import { CalendarCheck, Users, Zap, Shield } from "lucide-react";

const stats = [
  { icon: CalendarCheck, value: "10+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Zap, value: "1MW+", label: "Energy Delivered" },
  { icon: Shield, value: "100%", label: "Commitment to Quality" },
];

export default function StatsBar() {
  return (
    <div className="px-4 sm:px-6 lg:px-16 max-w-[1280px] mx-auto">
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-xl overflow-hidden"
        style={{
          background: "#ffffff",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow)",
          marginTop: "0",
        }}
      >
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center gap-4 px-6 py-6"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                style={{ background: "rgba(84,233,138,0.12)" }}
              >
                <Icon size={18} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <div
                  className="text-xl font-black leading-none mb-0.5"
                  style={{ color: "var(--text-heading)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}