"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-display font-bold text-2xl tracking-tight">
              Marea
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="font-medium hover:text-accent transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/reviews"
              className="font-medium hover:text-accent transition-colors"
            >
              Reviews
            </Link>
            <a
              href="mailto:hello@marea.studio"
              className="font-medium px-6 py-2 bg-accent text-white hover:bg-accent-deep transition-colors"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block py-2 font-medium hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="block py-2 font-medium hover:text-accent transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/reviews"
              className="block py-2 font-medium hover:text-accent transition-colors"
            >
              Reviews
            </Link>
            <a
              href="mailto:hello@marea.studio"
              className="block py-2 font-medium text-accent"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
