"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal, Shield } from "lucide-react";
import MonoBadge from "@/components/MonoBadge";
import TidalWrapper from "@/components/TidalWrapper";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "React, Next.js, Node.js, and TypeScript. Type-safe from frontend to backend.",
    stack: ["React 19", "Next.js 15", "TypeScript 5"],
  },
  {
    icon: Database,
    title: "Backend Architecture & OOP",
    description: "Robust management systems using Django and object-oriented patterns.",
    stack: ["Python", "Django", "PostgreSQL"],
  },
  {
    icon: Terminal,
    title: "Automation & Scripting",
    description: "Custom Python scripts for data processing and automated testing.",
    stack: ["Unit Testing", "Automation", "Scripts"],
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description: "Containerized environments and seamless CI/CD pipelines.",
    stack: ["Docker", "CI/CD", "GitHub Actions"],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <MonoBadge>Our Services</MonoBadge>
          <h2 className="font-display font-bold text-5xl mt-6 mb-4 tracking-tight">
            Engineering Excellence
            <br />
            <span className="text-accent">Across the Stack</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            We build digital systems with precision, performance, and longevity in mind.
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
                    {service.stack.map((tech, i) => (
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
