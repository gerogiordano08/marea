import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
