import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import WhatsNew from '../components/home/WhatsNew';
import ComponentCategories from '../components/home/ComponentCategories';
import TopSellers from '../components/home/TopSellers';
import TrustBadges from '../components/home/TrustBadges';
import ShopByProject from '../components/home/ShopByProject';
import ExploreBasics from '../components/home/ExploreBasics';
import BrandLogos from '../components/home/BrandLogos';
import BrandHighlight from '../components/home/BrandHighlight';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main>
        {/* 1. Hero: Two banners + free shipping strip */}
        <Hero />

        {/* 2. What's New section */}
        <WhatsNew />

        {/* 3. Category navigation icons */}
        <ComponentCategories />

        {/* 3. Top Selling Products (horizontal scroll) */}
        <TopSellers />

        {/* 4. Trust Badges (warranty, shipping, support) */}
        <TrustBadges />

        {/* 5. Shop by Project Size (4 cards) */}
        <ShopByProject />

        {/* 7. Explore The Basics */}
        <ExploreBasics />

        {/* 7. Brand Logos strip */}
        <BrandLogos />

        {/* 8. Brand Highlight Slider */}
        <BrandHighlight />
      </main>

      <Footer />
    </div>
  );
}