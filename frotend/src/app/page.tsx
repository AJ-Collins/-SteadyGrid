import { SearchBar } from "@/components/layout/SearchBar";
import Hero from "@/components/storefront/Hero";
import Topbar from "@/components/storefront/Topbar";
import { BrandsAndCategories } from "@/components/storefront/BrandsAndCategories";
import { FeaturedProduct } from "@/components/storefront/FeaturedProduct";
import { TopRatedProducts } from "@/components/storefront/TopRatedProducts";
import { BestSellerProducts } from "@/components/storefront/BestSellerProduct";
import { ProductCategory } from "@/components/storefront/ProductCategory";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#E2E4EB] text-foreground">
      <Topbar />
      <SearchBar />
      <Hero />
      <BrandsAndCategories />
      <FeaturedProduct />
      <TopRatedProducts />
      <BestSellerProducts />
      <ProductCategory />
      <ProductCategory />
    </main>
  );
}