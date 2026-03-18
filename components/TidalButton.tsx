"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface TidalButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
  > {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "large";
}

export default function TidalButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: TidalButtonProps) {
  const baseClasses = "font-medium transition-all duration-300 ease-tidal";

  const variantClasses = {
    primary:
      "bg-accent text-white hover:bg-accent-deep hover:shadow-hard-blue",
    secondary:
      "bg-marea-onyx text-white hover:bg-foreground hover:shadow-hard",
  };

  const sizeClasses = {
    default: "px-8 py-4 text-base",
    large: "px-12 py-6 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
