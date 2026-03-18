import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { getDictionary } from "@/dictionaries/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navigation lang={lang} dict={dict.nav} />
      <main className="pt-16">
        <HeroSection lang={lang} dict={dict.hero} />
        <StatsSection dict={dict.stats} />
        <ServicesSection dict={dict.services} />
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </>
  );
}
