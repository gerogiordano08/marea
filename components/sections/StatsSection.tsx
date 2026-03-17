"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import TidalWrapper from "@/components/TidalWrapper";

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

export default function StatsSection() {
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
                Cloud-Native
              </div>
              <div className="font-mono text-xs text-accent tracking-ultrawide uppercase">
                Solutions
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Production-ready systems deployed across fintech, e-commerce, and SaaS platforms.
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="border-l-4 border-accent pl-8 space-y-4">
              <div className="font-display font-extrabold text-6xl tracking-tight">
                Security First
              </div>
              <div className="font-mono text-xs text-accent tracking-ultrawide uppercase">
                Philosophy
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Mountain-sharp precision meets fluid technical execution. Local talent, global standards.
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="border-l-4 border-accent pl-8 space-y-4">
              <CountUpMetric target={100} suffix="%" />
              <div className="font-mono text-xs text-accent tracking-ultrawide uppercase">
                Type-Safe Architecture
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Every project built with TypeScript, strict mode enabled. No compromises on code quality.
              </p>
            </div>
          </div>
        </TidalWrapper>
      </div>
    </section>
  );
}
