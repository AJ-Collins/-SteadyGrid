import { CategorySideNav }     from "@/components/layout/CategorySideNav";
import { HeroBanner }          from "@/components/layout/HeroBanner";
import { PromoCards }          from "@/components/layout/PromoCards";
import { ProductSpotlightRow } from "@/components/layout/ProductSpotlightRow";

export default function Hero() {
  return (
    <div className="bg-[#E2E4EB] pt-2">
      <div className="max-w-[1400px] mx-auto px-2 py-5 flex gap-4">

        <CategorySideNav />

        {/* Center section */}
        <div className="flex flex-col gap-4 flex-1">
          <HeroBanner />
          <ProductSpotlightRow />
        </div>
        <PromoCards />
      </div>
    </div>
  );
}