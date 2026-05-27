"use client";

export interface AdBanner {
  title?: string;
  subtitle?: string;
  badge?: string;
  badgeBg?: string;       // tailwind bg e.g. "bg-black"
  badgeText?: string;     // tailwind text color
  image: string;
  imageAlt?: string;
  href?: string;
  bgColor?: string;       // tailwind bg for the card
  dark?: boolean;
}

interface SideAdBannersProps {
  banners?: AdBanner[];
}

const DEFAULT_BANNERS: AdBanner[] = [
  {
    badge: "50%",
    badgeBg: "bg-black",
    badgeText: "text-white",
    title: "SALE",
    subtitle: "GAME",
    image: "https://image.made-in-china.com/202f0j00mspklJnIwvqf/Hybrid-Grid-Portable-PV-Solar-Power-Home-Lighting-Panel-System-5kw-10kw-20kw-with-12V-100ah-Lithium-Battery.jpg",
    href: "#",
    bgColor: "bg-gray-100",
    dark: false,
  },
  {
    badge: "",
    badgeBg: "bg-[#2ecc40]",
    badgeText: "text-white",
    image: "https://www.namkoosolar.com/uploadfile/2022/10/10/202210101538148108.jpg",
    href: "#",
    bgColor: "bg-gray-100",
    dark: true,
  },
];

export function FeaturedProductAdBanners({ banners = DEFAULT_BANNERS }: SideAdBannersProps) {
  return (
    <div className="flex flex-col gap-3 w-[260px] shrink-0">
      {banners.map((banner, i) => (
        <a
          key={i}
          href={banner.href ?? "#"}
          className={`relative flex-1 min-h-[168px] rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white`}
        >
          {/* IMAGE ONLY (no overlay, no effects blocking it) */}
          <img
            src={banner.image}
            alt={banner.imageAlt ?? banner.title ?? ""}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Badge (floating only, no interference with image) */}
          {banner.badge && (
            <div
              className={`absolute top-3 right-3 z-10 text-[13px] font-black px-2.5 py-1 rounded-lg shadow-md ${banner.badgeBg ?? "bg-black"} ${banner.badgeText ?? "text-white"}`}
            >
              {banner.badge}
            </div>
          )}

          {/* Text overlay (optional but still non-obstructive) */}
          {(banner.title || banner.subtitle) && (
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-5 pointer-events-none">
              {banner.title && (
                <span className="text-[28px] font-black leading-tight text-white drop-shadow-lg">
                  {banner.title}
                </span>
              )}
              {banner.subtitle && (
                <span className="text-[22px] font-black leading-tight text-white/90 drop-shadow-md">
                  {banner.subtitle}
                </span>
              )}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}