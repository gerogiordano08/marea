import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdaptiveForm from "@/components/AdaptiveForm";
import MonoBadge from "@/components/MonoBadge";
import { getDictionary } from "@/dictionaries/get-dictionary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Marea — Start a Project",
  description:
    "Start a discovery session with Marea. Tell us about your technical challenge and we'll engineer a solution.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { contact } = dict;

  return (
    <>
      {/* Navigation requires the full dict.nav */}
      <Navigation lang={lang} dict={dict.nav} />

      <main className="pt-16 min-h-screen bg-background">
        {/* ── Dark Hero Header ── */}
        <section className="relative bg-marea-onyx text-white overflow-hidden border-b-[2px] border-marea-onyx">
          {/* Kinetic grid lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-0 left-1/3 w-px h-full bg-accent" />
            <div className="absolute top-0 right-1/3 w-px h-full bg-accent" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/20" />
          </div>

          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
            <MonoBadge>{contact.hero.badge}</MonoBadge>

            <h1 className="font-display font-extrabold text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mt-6 mb-6">
              {contact.hero.title}
            </h1>

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-sm tracking-widest text-accent uppercase">
                {contact.hero.subtitle}
              </span>
            </div>
          </div>
        </section>

        {/* ── Form Section ── */}
        <section className="container mx-auto px-6 py-20 max-w-5xl">
          <AdaptiveForm dict={contact} />
        </section>
      </main>

      <Footer lang={lang} dict={dict.footer} />
    </>
  );
}
