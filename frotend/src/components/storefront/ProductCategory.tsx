"use client";
import { ArrowRight } from "lucide-react";

export interface SubCategory {
  id: string;
  name: string;
  items: number;
  image: string;
  href?: string;
}

export interface CategoryBlock {
  id: string;
  title: string;
  heroBgColor: string;
  heroImage: string;
  heroPreText?: string;
  heroMainText?: string;
  href?: string;
  subCategories: SubCategory[];
}

export const CATEGORIES: CategoryBlock[] = [
  {
    id: "power-backup",
    title: "POWER & BACKUP",
    heroBgColor: "bg-[#1e293b]",
    heroImage: "https://ussolarsupplier.com/cdn/shop/files/Apex_300_US_800x_145e1c12-cb10-4f22-b763-4fb0132210f0.png?v=1755836197", 
    heroPreText: "Best Selling 2024",
    heroMainText: "Power Hub",
    subCategories: [
      {
        id: "portable",
        name: "Portable Power Stations",
        items: 12,
        image: "https://ussolarsupplier.com/cdn/shop/files/Apex_300_US_800x_145e1c12-cb10-4f22-b763-4fb0132210f0.png?v=1755836197",
      },
      {
        id: "backup",
        name: "Backup Power Systems",
        items: 9,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "hybrid",
        name: "Hybrid Inverters",
        items: 15,
        image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "battery",
        name: "Battery Storage",
        items: 24,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "solar-kits",
    title: "SOLAR PANELS & KITS",
    heroBgColor: "bg-[#f3f4f6]", // Light gray
    heroImage: "https://dropshop.com.bd/wp-content/uploads/2025/10/202310025AC180_2000-2000px_79bd89f0-cee4-44fe-b952-e0cc6c9cc93e_1000x.webp",
    heroPreText: "High Efficiency",
    heroMainText: "Solar Array",
    subCategories: [
      {
        id: "deals",
        name: "Solar Deals",
        items: 28,
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "kits",
        name: "Solar Home Kits",
        items: 12,
        image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "panels",
        name: "Solar Panels",
        items: 45,
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "controllers",
        name: "Charge Controllers",
        items: 18,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "installation-accessories",
    title: "INSTALLATION & EXTRAS",
    heroBgColor: "bg-[#27272a]", // Charcoal
    heroImage: "https://www.theodist.com/Images/ProductImages/Original/AC60PKIT.jpg",
    heroPreText: "Certified Experts",
    heroMainText: "Installation",
    subCategories: [
      {
        id: "services",
        name: "Installation Services",
        items: 5,
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "cables",
        name: "Solar Cables",
        items: 60,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "surge",
        name: "Surge Protectors",
        items: 14,
        image: "https://images.unsplash.com/photo-1558618047-f4e6b596b2ec?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "accessories",
        name: "Power Accessories",
        items: 32,
        image: "https://images.unsplash.com/photo-1585863264426-17b5f16cd9fc?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
];


export function ProductCategory() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-5 bg-white rounded-lg shadow-sm border border-gray-100 mt-4">
      {/* ── Grid Layout (3 Columns with dividers) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-gray-100 gap-y-12 lg:gap-y-0">
        
        {CATEGORIES.map((cat, index) => (
          <div
            key={cat.id}
            className={`flex flex-col ${
              index === 0 ? "lg:pr-8" : index === 1 ? "lg:px-8" : "lg:pl-8"
            }`}
          >
            {/* ── Section Header ── */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[16px] font-extrabold uppercase tracking-tight text-gray-900">
                {cat.title}
              </h2>
              <a
                href={cat.href ?? "#"}
                className="text-sm font-semibold text-gray-500 hover:text-[#2ecc40] transition-colors flex items-center gap-1"
              >
                View All <ArrowRight size={14} />
              </a>
            </div>

            {/* ── Hero Banner ── */}
            <div
            className="
                relative h-[240px] w-full rounded-2xl overflow-hidden
                bg-white
                flex items-center justify-between
                border border-gray-100
                transition-all duration-100 ease-out
                hover:shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_6px_30px_rgba(0,0,0,0.12)]
                cursor-pointer group
            "
            >
            {/* Text Content */}
            {(cat.heroPreText || cat.heroMainText) && (
                <div className="relative z-10 px-4 max-w-[100%]">
                {cat.heroPreText && (
                    <p className="text-[12px] font-medium text-gray-500 mb-1">
                    {cat.heroPreText}
                    </p>
                )}

                {cat.heroMainText && (
                    <h3 className="text-[24px] font-black leading-tight text-gray-900">
                    {cat.heroMainText}
                    </h3>
                )}
                </div>
            )}

            {/* Product Image */}
            <div className="relative w-[80%] h-full flex items-center justify-center p-1">
                <img
                src={cat.heroImage}
                alt={cat.title}
                className="
                    w-full h-full
                    object-contain
                    mix-blend-multiply
                "
                />
            </div>
            </div>

            {/* ── Subcategories Grid (2x2) ── */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-8">
                {cat.subCategories.map((sub) => (
                    <a
                    key={sub.id}
                    href={sub.href ?? "#"}
                    className="flex flex-col items-center text-center group cursor-pointer"
                    >
                    {/* Circular Image Card */}
                    <div
                        className="
                        w-[180px] h-[180px]
                        rounded-full
                        bg-white
                        flex items-center justify-center
                        transition-all duration-200 ease-out
                        group-hover:-translate-y-1
                        group-hover:shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_6px_30px_rgba(0,0,0,0.12)]
                        "
                    >
                        {/* Inner Image Wrapper */}
                        <div className="w-[100px] h-[100px] rounded-full bg-[#f4f6f8] flex items-center justify-center overflow-hidden">
                        <img
                            src={sub.image}
                            alt={sub.name}
                            className="w-[70%] h-[70%] object-contain mix-blend-multiply"
                        />
                        </div>
                    </div>

                    {/* Text */}
                    <h4 className="mt-4 text-[14px] font-bold text-gray-900 leading-tight px-3 group-hover:text-[#2ecc40] transition-colors">
                        {sub.name}
                    </h4>

                    <p className="text-[12px] text-gray-400 font-medium">
                        {sub.items} Items
                    </p>
                    </a>
                ))}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}