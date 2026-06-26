import { Zap, Globe, Mail } from "lucide-react";

const columns = [
  {
    heading: "Company",
    links: ["About Us", "Projects", "Careers"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Compliance"],
  },
  {
    heading: "Support",
    links: ["Contact Engineering", "Client Portal"],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 pt-14 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: "var(--primary)" }}
              >
                <Zap size={15} style={{ color: "var(--primary-text)" }} />
              </div>
              <span
                className="font-bold text-base"
                style={{ color: "var(--primary)" }}
              >
                SteadyGrid
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-[220px]"
              style={{ color: "var(--text-muted)" }}
            >
              Engineered solutions for a sustainable power infrastructure.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: "var(--text)", textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLAnchorElement).style.color = "var(--primary)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLAnchorElement).style.color = "var(--text)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)", margin: 0 }}>
            © 2024 SteadyGrid Engineering Group Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <button
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }}
            >
              <Globe size={13} /> Global
            </button>
            <button
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }}
            >
              <Mail size={13} /> Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}