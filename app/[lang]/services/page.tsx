import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesBentoGrid from "@/components/sections/ServicesBentoGrid";
import ServicesMethodology from "@/components/sections/ServicesMethodology";
import { getDictionary } from "@/dictionaries/get-dictionary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Marea — Engineering Excellence from Mendoza",
  description:
    "Explore Marea's engineering capabilities: web development, backend architecture, automation & scripting, and DevOps reliability.",
};

export default async function ServicesPage({
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
        <ServicesHero dict={dict.servicesPage.hero} />
        <ServicesBentoGrid dict={dict.servicesPage} />
        <ServicesMethodology dict={dict.servicesPage} />
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </>
  );
}
