"use client";

export interface PromoCard {
  brand?: string;
  title: string;
  subtitle?: string;
  pricePrefix?: string;  // e.g. "FROM"
  price?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;        // emoji or url
  bgColor?: string;      // tailwind bg e.g. "bg-white" or "bg-gray-900"
  dark?: boolean;        // dark card = light text
  accentColor?: string;  // tailwind text color for price e.g. "text-[#2ecc40]"
  imagePosition?: "right" | "bottom-right"; // layout hint
}

interface PromoCardsProps {
  cards: PromoCard[];
}

const DEFAULT_CARDS: PromoCard[] = [
  {
    brand: "XOMIA",
    title: "Sport Water\nResistance Watch",
    ctaLabel: "SHOP NOW",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    dark: false,
    accentColor: "text-[#2ecc40]",
  },
  {
    title: "OKODO\nHERO 11+\nBLACK",
    pricePrefix: "FROM",
    price: "$169",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    dark: true,
    accentColor: "text-[#2ecc40]",
  },
];

export function PromoCards({ cards = DEFAULT_CARDS }: Partial<PromoCardsProps>) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[320px] shrink-0">
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative flex-1 min-h-[220px] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow bg-white"
        >
          {/* IMAGE ONLY (no overlay, full bleed like AdBanner) */}
          {card.image && (
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* OPTIONAL: floating brand badge (like AdBanner badge style) */}
          {card.brand && (
            <div className="absolute top-3 left-3 z-10 text-[10px] font-black uppercase tracking-[0.15em] text-white drop-shadow-lg">
              {card.brand}
            </div>
          )}

          {/* TEXT OVERLAY (no blocking overlay, just floating text) */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center px-5 pointer-events-none">
            
            <h3 className="text-[18px] font-black leading-tight text-white drop-shadow-lg whitespace-pre-line">
              {card.title}
            </h3>

            {card.pricePrefix && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mt-3">
                {card.pricePrefix}
              </p>
            )}

            {card.price && (
              <p className={`text-[24px] font-black ${card.accentColor ?? "text-white"}`}>
                {card.price}
              </p>
            )}
          </div>

          {/* CTA (floating button like ad style) */}
          {card.ctaLabel && (
            <div className="absolute bottom-4 left-5 z-10 pointer-events-auto">
              <a
                href={card.ctaHref ?? "#"}
                className="text-[11px] font-extrabold px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-[#2ecc40] hover:text-white transition-colors shadow-md"
              >
                {card.ctaLabel}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}