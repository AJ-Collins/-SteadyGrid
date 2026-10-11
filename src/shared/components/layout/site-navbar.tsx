"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, Menu, X, Phone, User, HelpCircle, ChevronDown } from "lucide-react";

const categories = [
  {
    name: "ALL PRODUCTS",
    href: "/shop/products",
    disableLink: true,
    children: [
      { name: "New Arrivals", href: "/shop/products/new-arrivals" },
      { name: "Kits & Bundles", href: "/shop/products/kits-bundles" },
      { name: "Portable Power Stations", href: "/shop/products/portable-power-stations" },
      { name: "Battery Accessories", href: "/shop/products/battery-accessories" },
      { name: "Mobile RV", href: "/shop/products/mobile-rv" },
      { name: "Wiring", href: "/shop/products/wiring" },
      { name: "EV Chargers", href: "/shop/products/ev-chargers" },
      { name: "Solar Panel Cleaning", href: "/shop/products/solar-panel-cleaning" },
      { name: "Mounting Options", href: "/shop/products/mounting-options" },
      { name: "System Components", href: "/shop/products/system-components" },
      { name: "High Efficiency Appliances", href: "/shop/products/high-efficiency-appliances" },
      { name: "Charge Controllers", href: "/shop/products/charge-controllers" },
    ],
  },
  {
    name: "SHOP BY PROJECTS",
    href: "/shop/projects",
    children: [
      { name: "Camping & Outdoors", href: "/shop/projects/camping-outdoors" },
      { name: "EV Charging", href: "/shop/projects/ev-charging" },
      { name: "Homesteading", href: "/shop/projects/homesteading" },
      { name: "Marine And Boating", href: "/shop/projects/marine-boating" },
      { name: "Mobile Adventures", href: "/shop/projects/mobile-adventure" },
      { name: "Mounting Solutions", href: "/shop/projects/mounting-solutions" },
      { name: "Survival Preparedness", href: "/shop/projects/survival-preparedness" },
    ],
  },
  { name: "ALL BRANDS", href: "/shop/brands" },
  { name: "BATTERIES", href: "/shop/batteries" },
  { name: "INVERTERS", href: "/shop/inverters" },
  { name: "SOLAR PANELS", href: "/shop/solar-panels" },
  { name: "SOLAR KITS", href: "/shop/solar-kits" },
  { name: "OUR STORE", href: "/shop/our-store" },
  {
    name: "DISCOVER MORE",
    href: "/discover-more",
    disableLink: true,
    children: [
      { name: "About Us", href: "/discover-more/about-us" },
      { name: "Contact Us", href: "/discover-more/contact-us" },
      { name: "Frequently Asked Questions", href: "/discover-more/faq" },
      { name: "Our Blog", href: "/discover-more/our-blog" },
    ],
  },
];

export function SiteNavbar({ webOrigin }: { webOrigin?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // On admin/cms hosts the same nav renders with links pointed at the web
  // surface (absolute origin); otherwise plain same-host paths.
  const href = (path: string): string => (webOrigin ? `${webOrigin}${path}` : path);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="w-full bg-primary px-4 py-2 text-center text-xs font-semibold text-white md:text-sm">
        ⚡ NEXT-DAY SHIPPING ON ALL ORDERS PLACED BEFORE 2 PM CST!
      </div>
      <div className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <Link href={href("/")} className="flex h-14 shrink-0 items-center text-xl font-black text-surface-low">
            SteadyGrid
          </Link>
          <form onSubmit={(e) => e.preventDefault()} className="hidden max-w-xl flex-1 items-center md:flex">
            <input
              type="text"
              placeholder="SEARCH BY PRODUCT, PART NUMBER OR KEYWORD"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-l-md border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-xs font-semibold tracking-wider focus:outline-none"
            />
            <button type="submit" className="bg-primary px-6 py-2.5 text-white hover:bg-primary-hover" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
          </form>
          <div className="flex shrink-0 items-center gap-4 text-neutral-700 lg:gap-6">
            <div className="hidden items-center gap-2 border-r border-neutral-200 pr-4 text-xs font-bold lg:flex">
              <Phone className="h-4 w-4 text-primary" />
              <span>+254700000000</span>
            </div>
            <Link href={href("/discover-more/contact-us")} className="hidden items-center gap-1.5 text-xs font-bold lg:flex">
              <HelpCircle className="h-4 w-4" /> HELP CENTER
            </Link>
            <Link href={href("/auth/login")} className="flex items-center gap-1.5 text-xs font-bold">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">LOG IN / REGISTER</span>
            </Link>
            <Link href={href("/cart")} className="relative flex items-center gap-1.5 text-xs font-bold" aria-label="Cart">
              <div className="rounded-full bg-neutral-100 p-2 hover:bg-primary hover:text-white">
                <ShoppingCart className="h-4 w-4" />
              </div>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-surface-low md:hidden" aria-label="Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <nav className="hidden bg-surface-low text-xs font-bold tracking-wider text-white md:block">
        <div className="mx-auto flex max-w-[1400px] items-center gap-8 px-4 py-3 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative"
              onMouseEnter={() => "children" in cat && cat.children && setOpenDropdown(cat.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {"disableLink" in cat && cat.disableLink ? (
                <button type="button" className="flex items-center gap-1 py-1 hover:text-primary">
                  {cat.name}
                  {"children" in cat && <ChevronDown className="h-3.5 w-3.5" />}
                </button>
              ) : (
                <Link href={href(cat.href)} className="flex items-center gap-1 py-1 hover:text-primary">
                  {cat.name}
                  {"children" in cat && cat.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
              )}
              {"children" in cat && cat.children && openDropdown === cat.name && (
                <div className="absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-md bg-white text-surface-low shadow-xl">
                    {cat.children.map((child) => (
                      <Link
                        key={child.name}
                        href={href(child.href)}
                        className="block border-b border-neutral-100 px-5 py-3.5 text-sm font-semibold last:border-0 hover:bg-neutral-50 hover:text-primary"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      {isOpen && (
        <div className="border-b border-surface-high bg-surface-low text-white md:hidden">
          <div className="flex flex-col gap-3 px-4 py-4 text-sm font-bold tracking-wider">
            {categories.map((cat) => (
              <Link key={cat.name} href={"href" in cat ? href(cat.href) : "#"} onClick={() => setIsOpen(false)} className="border-b border-surface-high py-1">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
