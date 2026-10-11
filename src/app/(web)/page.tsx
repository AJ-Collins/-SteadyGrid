import { Hero } from "@/domains/catalog/hero";
import { WhatsNew } from "@/domains/catalog/whats-new";
import { ComponentCategories } from "@/domains/catalog/component-categories";
import { TopSellers } from "@/domains/catalog/top-sellers";
import { TrustBadges } from "@/domains/catalog/trust-badges";
import { ShopByProject } from "@/domains/catalog/shop-by-project";
import { ExploreBasics } from "@/domains/catalog/explore-basics";
import { BrandLogos } from "@/domains/catalog/brand-logos";
import { getHomepage } from "@/server/homepage/services/get-homepage";

export const revalidate = 60;

export default async function HomePage() {
  const { slides } = await getHomepage();

  return (
    <>
      <Hero slides={slides} />
      <WhatsNew />
      <ComponentCategories />
      <TopSellers />
      <TrustBadges />
      <ShopByProject />
      <ExploreBasics />
      <BrandLogos />
    </>
  );
}
