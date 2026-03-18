"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import type { FooterDict } from "@/lib/types/dictionary";

export default function Footer({ lang, dict }: { lang: string; dict: FooterDict }) {
  return (
    <footer className="relative bg-marea-onyx text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-display font-bold text-2xl">{dict.brand}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {dict.description1}
              <br />
              {dict.description2}
            </p>
            <div className="font-mono text-xs text-accent tracking-ultrawide">
              {dict.est}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">{dict.navTitle}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${lang}`} className="text-white/70 hover:text-accent transition-colors">
                  {dict.navItems.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/projects`} className="text-white/70 hover:text-accent transition-colors">
                  {dict.navItems.projects}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/reviews`} className="text-white/70 hover:text-accent transition-colors">
                  {dict.navItems.reviews}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">{dict.connectTitle}</h3>
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
              {dict.rights}
            </div>
            <div className="font-mono">
              {dict.stack}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
