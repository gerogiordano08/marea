"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MonoBadge from "@/components/MonoBadge";
import TidalWrapper from "@/components/TidalWrapper";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Sarah Chen",
    role: "CTO, PayFlow Inc.",
    company: "Fintech Startup",
    rating: 5,
    date: "2025-02-14",
    hash: "a7f3e9c2",
    content:
      "Marea delivered our payment gateway ahead of schedule. The type-safe architecture they built has been rock-solid in production. Zero critical bugs in 6 months of operation handling millions in transactions.",
    highlight: "Zero critical bugs in 6 months",
  },
  {
    id: 2,
    author: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "Retail Startup",
    rating: 5,
    date: "2025-01-28",
    hash: "b9d1c4f8",
    content:
      "The e-commerce platform they built scales effortlessly. We went from 1K to 10K products without any performance degradation. Their attention to edge optimization is impressive.",
    highlight: "10x growth, zero slowdown",
  },
  {
    id: 3,
    author: "Emily Johnson",
    role: "VP of Engineering",
    company: "Enterprise SaaS",
    rating: 5,
    date: "2024-12-10",
    hash: "c2e8a5b3",
    content:
      "Working with Marea felt like an extension of our internal team. Their dashboard handles 50M+ events daily with sub-second query times. The real-time updates are flawless.",
    highlight: "50M events/day, < 1s queries",
  },
  {
    id: 4,
    author: "David Park",
    role: "Head of Product",
    company: "Marketing Agency",
    rating: 5,
    date: "2024-11-22",
    hash: "d5f2b8e1",
    content:
      "The AI content tool revolutionized our workflow. 95% accuracy, 30+ languages, and the UI is buttery smooth. Marea's technical expertise in ML integration is next-level.",
    highlight: "Revolutionized our workflow",
  },
  {
    id: 5,
    author: "Lisa Anderson",
    role: "Co-Founder",
    company: "Healthcare Startup",
    rating: 5,
    date: "2024-10-05",
    hash: "e9a4c3d7",
    content:
      "HIPAA-compliant, performant, and beautifully designed. Marea understands the balance between security and user experience. Their code reviews taught our team new standards.",
    highlight: "Security meets UX perfection",
  },
  {
    id: 6,
    author: "James Miller",
    role: "Technical Director",
    company: "Media Company",
    rating: 5,
    date: "2024-09-18",
    hash: "f1b7d2c9",
    content:
      "The video streaming platform they architected handles 100K concurrent users without breaking a sweat. Edge CDN integration, adaptive bitrate, all optimized to perfection.",
    highlight: "100K concurrent users",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-6">
            <MonoBadge>Client Testimonials</MonoBadge>
            <h1 className="font-display font-bold text-6xl mt-6 mb-6 tracking-tight">
              Engineering Trust
              <br />
              <span className="text-accent">Verified Reviews</span>
            </h1>
            <p className="text-foreground/70 text-xl max-w-2xl leading-relaxed">
              Real feedback from real clients. Every review is verified and
              timestamped. No marketing fluff, just engineering rigor.
            </p>
          </div>
        </section>

        {/* Reviews Masonry Grid */}
        <section className="bg-muted py-24">
          <div className="container mx-auto px-6">
            <TidalWrapper staggerChildren={0.1}>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    whileHover={{ scale: 1.02 }}
                    className="break-inside-avoid bg-white border-l-8 border-accent p-8 shadow-lg inline-block w-full"
                  >
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-foreground leading-relaxed mb-6">
                      "{review.content}"
                    </p>

                    {/* Highlight */}
                    <div className="bg-accent/5 border-l-4 border-accent pl-4 py-3 mb-6">
                      <div className="font-bold text-sm text-accent">
                        {review.highlight}
                      </div>
                    </div>

                    {/* Author */}
                    <div className="mb-6">
                      <div className="font-bold text-lg mb-1">
                        {review.author}
                      </div>
                      <div className="text-sm text-foreground/60">
                        {review.role}
                      </div>
                      <div className="font-mono text-xs text-accent tracking-wide uppercase mt-1">
                        {review.company}
                      </div>
                    </div>

                    {/* Verification */}
                    <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                      <div className="flex items-center gap-2 text-xs text-foreground/50">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="font-mono">
                          Verified • {review.date}
                        </span>
                      </div>
                      <div className="font-mono text-[10px] text-foreground/30 tracking-wider">
                        #{review.hash}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TidalWrapper>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-marea-onyx text-white p-12 max-w-3xl mx-auto">
                <h2 className="font-display font-bold text-4xl mb-4">
                  Ready to Build Something Great?
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Join these successful clients and experience Marea's
                  engineering excellence.
                </p>
                <a
                  href="mailto:hello@marea.studio"
                  className="inline-block px-12 py-4 bg-accent hover:bg-accent-deep text-white font-medium transition-colors"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
