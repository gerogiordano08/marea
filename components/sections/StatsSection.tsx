"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import TidalWrapper from "@/components/TidalWrapper";
import type { StatsDict } from "@/lib/types/dictionary";

function CountUpMetric({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display font-extrabold text-6xl tracking-tight">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection({ dict }: { dict: StatsDict }) {
  return (
    <section className="relative bg-marea-onyx text-white py-32 overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      
      <div className="relative z-10 container mx-auto px-6">
        <TidalWrapper staggerChildren={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Stat 1 */}
            <div className="border-l-4 border-accent pl-8 space-y-4">
              <div className="font-display font-extrabold text-6xl tracking-tight">
                {dict.stat1.title}
              </div>
              <div className="font-mono text-xs text-accent tracking-ultrawide uppercase">
                {dict.stat1.subtitle}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {dict.stat1.description}
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="border-l-4 border-accent pl-8 space-y-4">
              <div className="font-display font-extrabold text-6xl tracking-tight">
                {dict.stat2.title}
              </div>
              <div className="font-mono text-xs text-accent tracking-ultrawide uppercase">
                {dict.stat2.subtitle}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {dict.stat2.description}
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="border-l-4 border-accent pl-8 space-y-4">
              <CountUpMetric target={100} suffix="%" />
              <div className="font-mono text-xs text-accent tracking-ultrawide uppercase">
                {dict.stat3.subtitle}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {dict.stat3.description}
              </p>
            </div>
          </div>
        </TidalWrapper>
      </div>
    </section>
  );
}
