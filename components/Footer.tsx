"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-marea-onyx text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-display font-bold text-2xl">Marea</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Engineering Excellence from Mendoza.
              <br />
              Safe architecture. Technical rigor.
            </p>
            <div className="font-mono text-xs text-accent tracking-ultrawide">
              EST. 2023
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-white/70 hover:text-accent transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">Connect</h3>
            {/* <div className="flex gap-4">
              <a
                href="https://github.com/marea"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/marea"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/marea"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
            <a
              href="mailto:hello@marea.studio"
              className="inline-block text-accent hover:underline text-sm"
            >
              gerogiordano08@gmail.com
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <div className="font-mono">
              © 2026 Marea. All rights reserved.
            </div>
            <div className="font-mono">
              Built with Next.js 15 • TypeScript • Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
