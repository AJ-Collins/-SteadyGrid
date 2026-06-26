import { useState } from "react";
import { Search, ShoppingCart, Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{ background: "#ffffff", borderBottom: "1px solid var(--border)" }}
      className="relative z-50"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{ background: "var(--primary)" }}
            >
              <Zap size={16} style={{ color: "var(--primary-text)" }} />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm" style={{ color: "var(--text-heading)" }}>
                SteadyGrid
              </div>
              <div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Energy Solutions
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", active: true },
              { label: "About Us" },
              { label: "Solutions", dropdown: true },
              { label: "Products" },
              { label: "Projects" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="text-sm font-medium flex items-center gap-1 pb-1 transition-colors"
                style={{
                  color: item.active ? "var(--primary)" : "var(--text)",
                  borderBottom: item.active ? "2px solid var(--primary)" : "2px solid transparent",
                  textDecoration: "none",
                }}
              >
                {item.label}
                {item.dropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-full transition-colors hover:bg-gray-100">
              <Search size={18} style={{ color: "var(--text-muted)" }} />
            </button>
            <button className="p-2 rounded-full transition-colors hover:bg-gray-100 relative">
              <ShoppingCart size={18} style={{ color: "var(--text-muted)" }} />
              <span
                className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center"
                style={{ background: "var(--primary)", color: "var(--primary-text)" }}
              >
                2
              </span>
            </button>
            <button
              className="text-sm font-bold px-5 py-2 rounded transition-all"
              style={{ background: "var(--primary)", color: "var(--primary-text)" }}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--border)", background: "#fff" }}>
          <div className="px-4 py-4 flex flex-col gap-4">
            {["Home", "About Us", "Solutions", "Products", "Projects"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-sm font-medium py-1"
                style={{ color: "var(--text)", textDecoration: "none" }}
              >
                {label}
              </a>
            ))}
            <button
              className="text-sm font-bold px-5 py-2.5 rounded mt-2"
              style={{ background: "var(--primary)", color: "var(--primary-text)" }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}