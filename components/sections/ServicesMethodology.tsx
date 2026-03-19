"use client";

import { motion } from "framer-motion";
import MonoBadge from "@/components/MonoBadge";
import type { ServicesPageDict } from "@/lib/types/dictionary";

const TIDAL_EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: TIDAL_EASE },
  },
};

export default function ServicesMethodology({ dict }: { dict: ServicesPageDict }) {
  const { methodology } = dict;

  return (
    <section
      className="bg-marea-onyx text-white py-24 overflow-hidden"
      aria-labelledby="methodology-title"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: TIDAL_EASE }}
          className="max-w-2xl mb-16"
        >
          <MonoBadge>{methodology.badge}</MonoBadge>
          <h2
            id="methodology-title"
            className="font-display font-bold text-5xl mt-6 tracking-tight text-white"
          >
            {methodology.title}
          </h2>
        </motion.div>

        {/* Steps — horizontal flow on desktop, vertical on mobile */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 list-none"
        >
          {methodology.steps.map((step, index) => (
            <motion.li
              key={index}
              variants={stepVariants}
              className="relative group border-2 border-white/10 hover:border-accent p-8 transition-colors duration-300"
              aria-label={`Phase ${step.phase}: ${step.label}`}
            >
              {/* Connecting arrow between steps (desktop only) */}
              {index < methodology.steps.length - 1 && (
                <div
                  className="hidden md:flex absolute top-1/2 -right-[1px] -translate-y-1/2 z-10 items-center"
                  aria-hidden="true"
                >
                  <div className="w-4 h-[2px] bg-accent" />
                  <div className="border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-accent" />
                </div>
              )}

              {/* Phase number */}
              <div className="font-mono text-6xl font-bold text-white/10 group-hover:text-accent/20 mb-6 leading-none transition-colors duration-300 select-none">
                {step.phase}
              </div>

              {/* Label */}
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                {step.label}
              </h3>

              {/* Accent rule */}
              <div className="w-8 h-[2px] bg-accent mb-4 group-hover:w-16 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

              {/* Description */}
              <p className="text-white/60 leading-relaxed">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: TIDAL_EASE }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="h-[2px] w-12 bg-accent" aria-hidden="true" />
          <a
            href="mailto:gerogiordano08@gmail.com"
            className="font-mono text-sm tracking-widest text-accent hover:text-white transition-colors uppercase"
          >
            Ready to start? →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
