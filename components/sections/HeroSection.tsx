"use client";

import { motion } from "framer-motion";
import TidalButton from "@/components/TidalButton";
import MonoBadge from "@/components/MonoBadge";
import GeometricBackground from "@/components/GeometricBackground";
import Link from "next/link";
import type { HeroDict } from "@/lib/types/dictionary";

export default function HeroSection({ lang, dict }: { lang: string; dict: HeroDict }) {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <GeometricBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <MonoBadge>{dict.badge}</MonoBadge>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-7xl md:text-8xl tracking-tight leading-[0.95]"
            >
              {dict.title1}
              <br />
              <span className="text-accent">{dict.title2}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-foreground/70 max-w-2xl leading-relaxed"
            >
              {dict.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link href={`/${lang}/projects`}>
                <TidalButton size="large">{dict.ctaPrimary}</TidalButton>
              </Link>
              <Link href={`/${lang}/reviews`}>
                <TidalButton variant="secondary" size="large">
                  {dict.ctaSecondary}
                </TidalButton>
              </Link>
            </motion.div>
          </div>
          
          {/* Right Column - 40% */}
          <div className="lg:col-span-2 relative h-[500px]">
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-accent/20 rounded-full"
            />
            
            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-2 border-accent/30 rounded-full"
            />
            
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-10 bg-marea-onyx text-white p-6 w-48 border-2 border-accent"
            >
              <div className="font-mono text-xs text-accent mb-2">{dict.card1Badge}</div>
              <div className="font-bold text-lg">{dict.card1Title}</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 bg-white border-4 border-foreground p-6 w-48 shadow-hard"
            >
              <div className="font-mono text-xs text-accent mb-2">{dict.card2Badge}</div>
              <div className="font-bold text-lg">{dict.card2Title}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
