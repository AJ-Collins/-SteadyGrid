import { FeaturedProductCard } from "@/components/layout/FeaturedProductCard";
import { FeaturedProductAdBanners }   from "@/components/layout/FeaturedProductAdBanners";

export function FeaturedProduct() {
  return (
    <div className="max-w-[1400px] mx-auto px-2 py-5">
      <div className="flex gap-5 items-stretch">
        <FeaturedProductCard />
        <FeaturedProductAdBanners />
      </div>
    </div>
  );
}