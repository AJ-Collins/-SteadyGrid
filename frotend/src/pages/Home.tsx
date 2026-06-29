import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import SolutionsGrid from '../components/home/SolutionsGrid';
import TrustedService from '../components/home/TrustedService';
import CaseStudy from '../components/home/CaseStudy';
import Products from '../components/home/Products';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-surface-highest">
      <Navbar />

      <main>
        <Hero />
        <Products />
        <Partners />
        <SolutionsGrid />

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 pb-16">
          <TrustedService />
        </div>

        <CaseStudy />
      </main>

      <Footer />
    </div>
  );
}