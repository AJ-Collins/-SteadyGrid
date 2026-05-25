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
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=600&auto=format&fit=crop",
    href: "#",
    bgColor: "bg-gray-100",
    dark: false,
  },
  {
    badge: "",
    badgeBg: "bg-[#2ecc40]",
    badgeText: "text-white",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop",
    href: "#",
    bgColor: "bg-gray-800",
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
          className={`relative flex-1 min-h-[168px] rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${banner.bgColor ?? "bg-gray-100"}`}
        >
          {/* Full-bleed background image */}
          <img
            src={banner.image}
            alt={banner.imageAlt ?? banner.title ?? ""}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className={`absolute inset-0 ${banner.dark ? "bg-black/40" : "bg-white/10"} transition-colors group-hover:bg-black/20`} />

          {/* Badge */}
          {banner.badge && (
            <div className={`absolute top-3 right-3 z-10 ${banner.badgeBg ?? "bg-black"} ${banner.badgeText ?? "text-white"} text-[13px] font-black px-2.5 py-1 rounded-lg shadow-md`}>
              {banner.badge}
            </div>
          )}

          {/* Text overlay */}
          {(banner.title || banner.subtitle) && (
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-5">
              {banner.title && (
                <span className={`text-[28px] font-black leading-tight tracking-tight ${banner.dark ? "text-white" : "text-gray-900"}`} style={{ textShadow: banner.dark ? "0 2px 8px rgba(0,0,0,0.5)" : "none" }}>
                  {banner.title}
                </span>
              )}
              {banner.subtitle && (
                <span className={`text-[22px] font-black leading-tight ${banner.dark ? "text-white/80" : "text-gray-700"}`}>
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