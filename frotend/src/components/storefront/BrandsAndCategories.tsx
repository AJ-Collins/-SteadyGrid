import { FeaturedBrands } from "@/components/layout/FeaturedBrands";
import { TopCategories }  from "@/components/layout/TopCategories";

export function BrandsAndCategories() {
  return (
    <div className="max-w-[1400px] mx-auto px-2 py-2">
      <div className="flex gap-5">
        <FeaturedBrands />
        <TopCategories />
      </div>
    </div>
  );
}