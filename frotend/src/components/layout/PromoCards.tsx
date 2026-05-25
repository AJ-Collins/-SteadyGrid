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
          className="relative rounded-xl overflow-hidden flex-1 min-h-[220px] border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          {/* Background Image */}
          {card.image && (
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          )}

          {/* Overlay */}
          <div
            className={`absolute inset-0 ${
              card.dark
                ? "bg-black/25"
                : "bg-gradient-to-r from-white/45 via-white/45 to-white/20"
            }`}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col px-5 py-5">

            {/* TOP */}
            <div>
              {card.brand && (
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.15em] mb-2 ${
                    card.dark ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {card.brand}
                </p>
              )}

              <h3
                className={`text-[18px] font-black leading-tight whitespace-pre-line ${
                  card.dark ? "text-white" : "text-gray-900"
                }`}
              >
                {card.title}
              </h3>
            </div>

            {/* BOTTOM */}
            <div className="mt-auto flex flex-col items-start">

              {card.pricePrefix && (
                <p
                  className={`text-[10px] font-bold uppercase tracking-widest mt-3 ${
                    card.dark ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {card.pricePrefix}
                </p>
              )}

              {card.price && (
                <p
                  className={`text-[24px] font-black ${
                    card.accentColor ?? "text-[#2ecc40]"
                  }`}
                >
                  {card.price}
                </p>
              )}

              {card.ctaLabel && (
                <a
                  href={card.ctaHref ?? "#"}
                  className={`mt-4 text-[11px] font-extrabold px-4 py-2 rounded-lg transition-colors ${
                    card.dark
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                  }`}
                >
                  {card.ctaLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}