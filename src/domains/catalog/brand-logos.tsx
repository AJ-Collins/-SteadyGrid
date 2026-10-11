import Link from "next/link";
import { cn } from "@/shared/lib/utils";

const BRANDS = [
  { name: "BLUETTI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxb4rT-M6odk32jV8Q-YwS90dUj9iTEnB2ywWebGUtAA&s=10" },
  { name: "EcoFlow", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G42ewHJpwl4tGSTw5h6cFPMiqndhwYBbjzpiOmXMzw&s=10" },
  { name: "Growatt", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRmiBQvrXDa1LCrmpEMyU-WUayLibR0A5FYfPhT2VPg&s=10" },
  { name: "Victron", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh9A3RUni5J_oUfTiRYedBlJU3sJshiFk5cofrXKCLg&s=10" },
  { name: "Deye", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxb4rT-M6odk32jV8Q-YwS90dUj9iTEnB2ywWebGUtAA&s=10" },
];

export function BrandLogos() {
  const odd = BRANDS.length % 2 === 1;
  return (
    <section className="border-b border-neutral-100 bg-white py-10 sm:py-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        {BRANDS.map((b, i) => (
          <Link
            key={b.name}
            href="#"
            aria-label={b.name}
            className={cn(
              "flex h-[100px] items-center justify-center rounded-xl border border-neutral-200 hover:border-primary hover:shadow-sm lg:h-[120px]",
              odd && i === BRANDS.length - 1 && "col-span-2 w-1/2 justify-self-center lg:col-span-1 lg:w-full",
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.logo} alt={b.name} className="max-h-14 max-w-[80%] object-contain" />
          </Link>
        ))}
      </div>
    </section>
  );
}
