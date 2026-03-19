"use client";

import { motion } from "framer-motion";
import MonoBadge from "@/components/MonoBadge";
import GeometricBackground from "@/components/GeometricBackground";
import type { ServicesPageHeroDict } from "@/lib/types/dictionary";

const TIDAL_EASE = [0.22, 1, 0.36, 1] as const;

export default function ServicesHero({ dict }: { dict: ServicesPageHeroDict }) {
  return (
    <section className="relative min-h-[60vh] bg-marea-onyx text-white overflow-hidden flex items-center">
      <GeometricBackground />

      {/* Kinetic grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-accent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-accent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-white/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: TIDAL_EASE }}
          >
            <MonoBadge>{dict.badge}</MonoBadge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: TIDAL_EASE }}
            className="font-display font-extrabold text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mt-8 mb-8 text-white"
          >
            {dict.title}
          </motion.h1>

          {/* Status indicator row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: TIDAL_EASE }}
            className="flex items-center gap-3"
          >
            {/* Pulse dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span
              className="font-mono text-sm tracking-widest text-accent"
              aria-label="System status: ready"
            >
              {dict.subtitle}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
    </section>
  );
}
