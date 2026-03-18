import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MonoBadge from "@/components/MonoBadge";
import TidalWrapper from "@/components/TidalWrapper";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/dictionaries/get-dictionary";

const projects = [
  {
    id: 1,
    title: "Fintech Payment Gateway",
    client: "Confidential",
    year: "2025",
    description:
      "Real-time payment processing system handling $2M+ in daily transactions. Built with stripe-level reliability and sub-100ms response times.",
    image: "linear-gradient(135deg, #0052FF 0%, #0039B3 100%)",
    stack: ["Next.js 15", "PostgreSQL", "Stripe", "Redis"],
    metrics: ["99.99% Uptime", "< 80ms API", "2M+ Daily Txns"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    client: "Retail Startup",
    year: "2025",
    description:
      "Headless commerce solution with real-time inventory sync, dynamic pricing, and edge-optimized product pages for global reach.",
    image: "linear-gradient(135deg, #000000 0%, #09090B 100%)",
    stack: ["React 19", "Shopify GraphQL", "Vercel Edge", "Tailwind"],
    metrics: ["10K+ Products", "15 Countries", "4.8s Load Time"],
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    client: "Enterprise Client",
    year: "2024",
    description:
      "Real-time data visualization platform processing 50M+ events daily. Complex aggregations rendered in under 1 second.",
    image: "linear-gradient(135deg, #F1F5F9 0%, #FAFAFA 100%)",
    stack: ["TypeScript", "D3.js", "ClickHouse", "WebSockets"],
    metrics: ["50M Events/Day", "< 1s Query", "Real-time Updates"],
  },
  {
    id: 4,
    title: "AI Content Generator",
    client: "Marketing Agency",
    year: "2024",
    description:
      "GPT-4 powered content creation tool with custom fine-tuning. Generates brand-consistent copy in 30+ languages.",
    image: "linear-gradient(135deg, #0052FF 40%, #000000 100%)",
    stack: ["Next.js", "OpenAI API", "Prisma", "Vercel AI SDK"],
    metrics: ["30+ Languages", "95% Accuracy", "10K+ Generations"],
  },
  {
  id: 5,
  title: "The Trade Registry",
  client: "Financial & Regulatory Services",
  year: "2025",
  description:
    "A mission-critical financial ecosystem architected for real-time market data analysis. This high-security platform features a hardened Dockerized infrastructure on OCI, a custom honeypot for automated threat mitigation, and a Redis-optimized backend that ensures sub-100ms data retrieval for complex relational schemas.",
  image: "/projects/traderegistry.png",
  stack: ["Django", "PostgreSQL", "Docker", "OCI", "Redis"],
  metrics: ["100% Env Parity", "Automated IP Blacklisting", "Redis-Powered Latency"],
},
];

export default async function ProjectsPage({
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
        {/* Header */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-6">
            <MonoBadge>Case Studies</MonoBadge>
            <h1 className="font-display font-bold text-6xl mt-6 mb-6 tracking-tight">
              Engineering
              <br />
              <span className="text-accent">in Production</span>
            </h1>
            <p className="text-foreground/70 text-xl max-w-2xl leading-relaxed">
              Real systems, solving real problems. Each project is a testament to
              precision engineering and technical excellence.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="bg-muted py-24">
          <div className="container mx-auto px-6">
            <TidalWrapper staggerChildren={0.15}>
              <div className="grid grid-cols-1 gap-16">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white border-4 border-foreground shadow-hard overflow-hidden group cursor-pointer"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image */}
                      <div
                        className="h-80 lg:h-auto relative overflow-hidden"
                        style={
                          project.image.startsWith("/")
                            ? {
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }
                            : { background: project.image }
                        }
                      >
                        {/* <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="font-mono text-xs text-white/60 tracking-ultrawide mb-2">
                              PROJECT {String(project.id).padStart(2, "0")}
                            </div>
                            <div className="font-display font-extrabold text-white text-4xl">
                              {project.year}
                            </div>
                          </div>
                        </div> */}
                      </div>

                      {/* Content */}
                      <div className="p-12 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="font-mono text-xs tracking-wide uppercase text-foreground/60">
                              {project.client} • {project.year}
                            </span>
                          </div>

                          <h2 className="font-display font-bold text-3xl mb-4 group-hover:text-accent transition-colors">
                            {project.title}
                          </h2>

                          <p className="text-foreground/70 leading-relaxed mb-6">
                            {project.description}
                          </p>

                          {/* Stack */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.stack.map((tech, i) => (
                              <span
                                key={i}
                                className="font-mono text-[10px] tracking-wide uppercase px-3 py-1 bg-muted"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4">
                            {project.metrics.map((metric, i) => (
                              <div key={i} className="border-l-2 border-accent pl-3">
                                <div className="font-bold text-sm">{metric}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8">
                          <Link
                            href={`/projects/${project.id}`}
                            className="inline-flex items-center gap-2 font-medium text-accent hover:gap-4 transition-all"
                          >
                            View Case Study
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </TidalWrapper>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </>
  );
}
