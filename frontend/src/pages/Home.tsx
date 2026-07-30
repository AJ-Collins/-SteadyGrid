import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../features/home/Hero';
import WhatsNew from '../features/home/WhatsNew';
import ComponentCategories from '../features/home/ComponentCategories';
import TopSellers from '../features/home/TopSellers';
import TrustBadges from '../features/home/TrustBadges';
import ShopByProject from '../features/home/ShopByProject';
import ExploreBasics from '../features/home/ExploreBasics';
import BrandLogos from '../features/home/BrandLogos';
// import BrandHighlight from '../features/home/BrandHighlight';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main>
        {/* Herong strip */}
        <Hero />

        {/* What's New section */}
        <WhatsNew />

        {/* Category navigation icons */}
        <ComponentCategories />

        {/* Top Selling Products (horizontal scroll) */}
        <TopSellers />

        {/* Trust Badges (warranty, shipping, support) */}
        <TrustBadges />

        {/* Shop by Project Size (4 cards) */}
        <ShopByProject />

        {/* Explore The Basics */}
        <ExploreBasics />

        {/* Brand Logos strip */}
        <BrandLogos />

        {/* Brand Highlight Slider */}
        {/* <BrandHighlight /> */}
      </main>

      <Footer />
    </div>
  );
}