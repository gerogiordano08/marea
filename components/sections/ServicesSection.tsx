"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal, Shield } from "lucide-react";
import MonoBadge from "@/components/MonoBadge";
import TidalWrapper from "@/components/TidalWrapper";
import type { ServicesDict } from "@/lib/types/dictionary";

const getServices = (dict: ServicesDict) => [
  {
    icon: Code2,
    title: dict.items[0].title,
    description: dict.items[0].description,
    stack: dict.items[0].stack,
  },
  {
    icon: Database,
    title: dict.items[1].title,
    description: dict.items[1].description,
    stack: dict.items[1].stack,
  },
  {
    icon: Terminal,
    title: dict.items[2].title,
    description: dict.items[2].description,
    stack: dict.items[2].stack,
  },
  {
    icon: Shield,
    title: dict.items[3].title,
    description: dict.items[3].description,
    stack: dict.items[3].stack,
  },
];

export default function ServicesSection({ dict }: { dict: ServicesDict }) {
  const services = getServices(dict);

  return (
    <section className="relative bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <MonoBadge>{dict.badge}</MonoBadge>
          <h2 className="font-display font-bold text-5xl mt-6 mb-4 tracking-tight">
            {dict.title1}
            <br />
            <span className="text-accent">{dict.title2}</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            {dict.description}
          </p>
        </div>
        
        <TidalWrapper staggerChildren={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#09090B",
                    color: "#FFFFFF",
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-muted border-2 border-transparent hover:border-accent p-8 cursor-pointer"
                >
                  <Icon className="w-12 h-12 mb-6 text-accent" strokeWidth={1.5} />
                  
                  <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/70 group-hover:text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] tracking-wide uppercase px-3 py-1 bg-foreground/5 group-hover:bg-accent group-hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </TidalWrapper>
      </div>
    </section>
  );
}
