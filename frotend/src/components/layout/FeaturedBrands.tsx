"use client";

export interface Brand {
  name: string;
  logo: string;        // image URL or placeholder text
  href?: string;
  textColor?: string;  // for text-based logos e.g. "text-green-500"
  bgColor?: string;    // optional logo bg pill
}

interface FeaturedBrandsProps {
  brands?: Brand[];
  viewAllHref?: string;
  columns?: number;
}

const DEFAULT_BRANDS: Brand[] = [
  { name: "JAMX",     logo: "https://placehold.co/80x32/06b6d4/fff?text=JAMX&font=montserrat" },
  { name: "Digitek",  logo: "https://placehold.co/80x32/22c55e/fff?text=Digitek&font=montserrat" },
  { name: "TekReact", logo: "https://placehold.co/80x32/ef4444/fff?text=tek+react&font=montserrat" },
  { name: "Grafbase", logo: "https://placehold.co/80x32/f59e0b/fff?text=Grafbase&font=montserrat" },
  { name: "MSI",      logo: "https://placehold.co/80x32/6b7280/fff?text=msi&font=montserrat" },
  { name: "Ohbear",   logo: "https://placehold.co/80x32/ef4444/fff?text=ohbear&font=montserrat" },
  { name: "OAK",      logo: "https://placehold.co/80x32/22c55e/fff?text=OAK&font=montserrat" },
  { name: "Snyk",     logo: "https://placehold.co/80x32/1d4ed8/fff?text=snyk&font=montserrat" },
  { name: "Sonex",    logo: "https://placehold.co/80x32/111827/fff?text=sonex&font=montserrat" },
  { name: "Stropi",   logo: "https://placehold.co/80x32/3b82f6/fff?text=stropi&font=montserrat" },
];

export function FeaturedBrands({
  brands = DEFAULT_BRANDS,
  viewAllHref = "#",
  columns = 5,
}: FeaturedBrandsProps) {
  // Split into rows of `columns`
  const rows: Brand[][] = [];
  for (let i = 0; i < brands.length; i += columns) {
    rows.push(brands.slice(i, i + columns));
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex-1">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] font-black text-gray-900 uppercase tracking-wider">
          Featured Brands
        </h2>
        <a
          href={viewAllHref}
          className="text-[12.5px] font-semibold text-gray-400 hover:text-[#2ecc40] transition-colors"
        >
          View All
        </a>
      </div>

      {/* Brand grid */}
      <div className="flex flex-col gap-5">
        {rows.map((row, ri) => (
          <div key={ri} className="flex items-center gap-4">
            {row.map((brand) => (
              <a
                key={brand.name}
                href={brand.href ?? "#"}
                className="flex-1 flex items-center justify-center p-3 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 max-w-[90px] object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            ))}
            {/* Fill empty slots in last row */}
            {row.length < columns &&
              Array.from({ length: columns - row.length }).map((_, i) => (
                <div key={`empty-${i}`} className="flex-1" />
              ))}
          </div>
        ))}
      </div>

    </div>
  );
}