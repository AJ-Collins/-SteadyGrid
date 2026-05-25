import { SearchBar } from "@/components/layout/SearchBar";
import Hero from "@/components/storefront/Hero";
import { BestSellerProduct } from "@/components/storefront/BestSellerProduct";
import Topbar from "@/components/storefront/Topbar";
import { BrandsAndCategories } from "@/components/storefront/BrandsAndCategories";
import { FeaturedProduct } from "@/components/storefront/FeaturedProduct";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#E2E4EB] text-foreground">
      <Topbar />
      <SearchBar />
      <Hero />
      <BrandsAndCategories />
      <FeaturedProduct />
      <BestSellerProduct/>
    </main>
  );
}