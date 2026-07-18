import { Link } from "react-router-dom";

export default function BrandLogos() {
  const brands = [
    {
      id: 1,
      name: "BLUETTI",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxb4rT-M6odk32jV8Q-YwS90dUj9iTEnB2ywWebGUtAA&s=10",
      href: "/shop/brands/bluetti",
    },
    {
      id: 2,
      name: "EcoFlow",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G42ewHJpwl4tGSTw5h6cFPMiqndhwYBbjzpiOmXMzw&s=10",
      href: "/shop/brands/ecoflow",
    },
    {
      id: 3,
      name: "Growatt",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRmiBQvrXDa1LCrmpEMyU-WUayLibR0A5FYfPhT2VPg&s=10",
      href: "/shop/brands/growatt",
    },
    {
      id: 4,
      name: "Victron",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh9A3RUni5J_oUfTiRYedBlJU3sJshiFk5cofrXKCLg&s=10",
      href: "/shop/brands/victron",
    },
    {
      id: 5,
      name: "Deye",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxb4rT-M6odk32jV8Q-YwS90dUj9iTEnB2ywWebGUtAA&s=10",
      href: "/shop/brands/deye",
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {brands.map((brand, index) => {
            const isLast = index === brands.length - 1;
            const isOdd = brands.length % 2 !== 0;

            return (
              <Link
                key={brand.id}
                to={brand.href}
                className={`
                  group flex items-center justify-center
                  h-[100px] lg:h-[120px]
                  border border-neutral-200 rounded-xl
                  bg-white hover:border-[#22a055]
                  hover:shadow-sm transition-all
                  ${
                    isOdd && isLast
                      ? "col-span-2 justify-self-center w-1/2 lg:col-span-1 lg:justify-self-auto lg:w-full"
                      : "w-full"
                  }
                `}
              >
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  className="max-h-14 lg:max-h-16 max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}