import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import SolutionsSection from "../components/home/SolutionSection";
import ShowcaseBanner from "../components/home/ShowcaseBanner";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)", fontFamily: "var(--sans)" }}>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <SolutionsSection />
        <ShowcaseBanner />
      </main>
      <Footer />
    </div>
  );
}