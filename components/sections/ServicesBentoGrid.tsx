"use client";

import { motion } from "framer-motion";
import type { ServicesPageDict } from "@/lib/types/dictionary";

const TIDAL_EASE = [0.22, 1, 0.36, 1] as const;

// ─── Kinetic Geometry Illustrations ──────────────────────────────────────────
// Pure SVG/CSS — one unique composition per service

function WebIllustration({ dark }: { dark: boolean }) {
  const accent = "#0052FF";
  const line = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const text = dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)";

  return (
    <motion.svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      aria-hidden="true"
    >
      {/* Grid lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={`h${i}`} x1="0" y1={60 + i * 56} x2="420" y2={60 + i * 56} stroke={line} strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={`v${i}`} x1={40 + i * 70} y1="0" x2={40 + i * 70} y2="340" stroke={line} strokeWidth="1" />
      ))}

      {/* Browser chrome frame */}
      <rect x="40" y="40" width="340" height="240" rx="2" stroke={accent} strokeWidth="2" />
      <rect x="40" y="40" width="340" height="36" fill={accent} fillOpacity="0.12" />
      {/* Browser dots */}
      <circle cx="64" cy="58" r="5" fill={accent} />
      <circle cx="82" cy="58" r="5" fill={dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"} />
      <circle cx="100" cy="58" r="5" fill={dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"} />
      {/* URL bar */}
      <rect x="120" y="47" width="200" height="22" rx="2" stroke={dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"} strokeWidth="1" />
      <rect x="128" y="54" width="80" height="8" rx="1" fill={accent} fillOpacity="0.5" />

      {/* Content blocks */}
      <rect x="60" y="100" width="140" height="12" rx="1" fill={text} />
      <rect x="60" y="122" width="200" height="8" rx="1" fill={text} />
      <rect x="60" y="138" width="160" height="8" rx="1" fill={text} />
      <rect x="60" y="166" width="120" height="40" rx="2" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.5" />
      <rect x="60" y="166" width="80" height="40" rx="2" fill={accent} fillOpacity="0.4" />
      <rect x="200" y="166" width="100" height="90" rx="2" fill={dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"} stroke={accent} strokeWidth="1" strokeDasharray="4 3" />

      {/* Animated accent pulse */}
      <motion.circle
        cx="360"
        cy="40"
        r="6"
        fill={accent}
        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Type label */}
      <text x="60" y="316" fontFamily="monospace" fontSize="10" fill={accent} letterSpacing="3" opacity="0.7">
        NEXT.JS / TYPESCRIPT
      </text>
    </motion.svg>
  );
}

function BackendIllustration({ dark }: { dark: boolean }) {
  const accent = "#0052FF";
  const line = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const fill = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";

  return (
    <motion.svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      whileHover={{ rotate: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      aria-hidden="true"
    >
      {/* Background dot grid */}
      {[0,1,2,3,4,5].map((r) =>
        [0,1,2,3,4,5,6].map((c) => (
          <circle key={`d${r}${c}`} cx={30 + c * 60} cy={30 + r * 56} r="1.5" fill={line} />
        ))
      )}

      {/* Database cylinders stacked */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0, ${i * 72})`}>
          <rect x="80" y="50" width="180" height="52" rx="2" stroke={i === 0 ? accent : line} strokeWidth={i === 0 ? 2 : 1} fill={i === 0 ? "#0052FF" : fill} fillOpacity={i === 0 ? 0.12 : 1} />
          <ellipse cx="170" cy="50" rx="90" ry="10" stroke={i === 0 ? accent : line} strokeWidth={i === 0 ? 2 : 1} fill={i === 0 ? "#0052FF" : fill} fillOpacity={i === 0 ? 0.2 : 1} />
          <ellipse cx="170" cy="102" rx="90" ry="10" stroke={i === 0 ? accent : line} strokeWidth={i === 0 ? 2 : 1} fill={i === 0 ? "#0052FF" : fill} fillOpacity={i === 0 ? 0.12 : 1} />
        </g>
      ))}

      {/* Connection lines */}
      <motion.line
        x1="300" y1="76" x2="380" y2="76"
        stroke={accent} strokeWidth="1.5" strokeDasharray="4 3"
        animate={{ strokeDashoffset: [0, -14] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      />
      <motion.line
        x1="300" y1="148" x2="380" y2="148"
        stroke={accent} strokeWidth="1.5" strokeDasharray="4 3"
        animate={{ strokeDashoffset: [0, -14] }}
        transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, ease: "linear" }}
      />
      <circle cx="388" cy="76" r="5" fill={accent} />
      <circle cx="388" cy="148" r="5" fill={accent} fillOpacity="0.4" />

      {/* Label */}
      <text x="80" y="316" fontFamily="monospace" fontSize="10" fill={accent} letterSpacing="3" opacity="0.7">
        DJANGO / POSTGRESQL
      </text>
    </motion.svg>
  );
}

function AutomationIllustration({ dark }: { dark: boolean }) {
  const accent = "#0052FF";
  const line = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const fill = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";

  const nodes = [
    { x: 80,  y: 170 },
    { x: 200, y: 90  },
    { x: 200, y: 250 },
    { x: 320, y: 170 },
  ];

  return (
    <motion.svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background circuit traces */}
      {[50, 120, 190, 260].map((y, i) => (
        <line key={i} x1="30" y1={y} x2="390" y2={y} stroke={line} strokeWidth="1" strokeDasharray="6 4" />
      ))}

      {/* Flow edges */}
      {[[0,1],[0,2],[1,3],[2,3]].map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke={accent} strokeWidth="1.5" strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.6 + i * 0.3, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x - 30} y={n.y - 22} width="60" height="44" rx="2"
            stroke={i === 0 ? accent : line} strokeWidth={i === 0 ? 2 : 1}
            fill={i === 0 ? "#0052FF" : fill} fillOpacity={i === 0 ? 0.15 : 1}
          />
          <motion.circle
            cx={n.x + 28} cy={n.y - 20} r="4"
            fill={accent}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, delay: i * 0.45, repeat: Infinity }}
          />
        </g>
      ))}

      {/* Label */}
      <text x="80" y="316" fontFamily="monospace" fontSize="10" fill={accent} letterSpacing="3" opacity="0.7">
        PYTHON / CI/CD
      </text>
    </motion.svg>
  );
}

const ILLUSTRATIONS = [WebIllustration, BackendIllustration, AutomationIllustration];

// ─── Animation Variants ───────────────────────────────────────────────────────

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: TIDAL_EASE },
  },
};

const illustVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: TIDAL_EASE },
  },
};

const illustVariantsReverse = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: TIDAL_EASE },
  },
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicesBentoGrid({ dict }: { dict: ServicesPageDict }) {
  // First 3 items only
  const items = dict.items.slice(0, 3);

  return (
    <div role="list" aria-label="Engineering services">
      {items.map((item, index) => {
        const isDark = index % 2 !== 0;
        const isReversed = index % 2 !== 0; // Z-pattern: even → text left, odd → text right
        const Illustration = ILLUSTRATIONS[index];

        const bg = isDark ? "bg-marea-onyx" : "bg-background";
        const textPrimary = isDark ? "text-white" : "text-foreground";
        const textSecondary = isDark ? "text-white/60" : "text-foreground/60";
        const borderColor = isDark ? "border-white/10" : "border-foreground";
        const tagBorder = isDark ? "border-accent/40 text-accent" : "border-foreground/25 text-foreground/60";
        const ruleBg = "bg-accent";
        const indexLabel = isDark ? "text-white/6" : "text-foreground/5";

        return (
          <motion.article
            key={index}
            role="listitem"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
            className={`relative w-full overflow-hidden ${bg}`}
            aria-label={`Service: ${item.title}`}
          >
            {/* Subtle dot-grid texture */}
            <div className="absolute inset-0 pointer-events-none dot-grid opacity-40" />

            {/* Top border accent line */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] ${isDark ? "bg-white/10" : "bg-foreground/10"}`} />

            <div
              className={`relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-12 md:gap-20`}
            >
              {/* ── Text Column ── */}
              <div className="flex-1 min-w-0 space-y-6">
                {/* Large index ghost number */}
                <div
                  className={`font-display font-extrabold text-[10rem] md:text-[14rem] leading-none select-none absolute ${
                    isReversed ? "right-4 md:right-auto md:left-4" : "right-4"
                  } top-4 opacity-[0.04] pointer-events-none ${textPrimary}`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Mono label */}
                <motion.div
                  variants={textVariants}
                  className="flex items-center gap-3"
                >
                  <span className={`w-6 h-[2px] ${ruleBg}`} />
                  <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${isDark ? "text-accent" : "text-accent"}`}>
                    {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </span>
                </motion.div>

                {/* Main title — massive Outfit */}
                <motion.h2
                  variants={textVariants}
                  className={`font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9] ${textPrimary}`}
                >
                  {item.title}
                </motion.h2>

                {/* Accent rule */}
                <motion.div
                  variants={textVariants}
                  className={`h-[2px] w-16 ${ruleBg}`}
                />

                {/* Description */}
                <motion.p
                  variants={textVariants}
                  className={`text-lg md:text-xl leading-relaxed max-w-lg ${textSecondary}`}
                >
                  {item.description}
                </motion.p>

                {/* Stack tags — JetBrains Mono [ TAG ] */}
                <motion.div
                  variants={textVariants}
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Technology stack"
                >
                  {item.stack.map((tech, i) => (
                    <span
                      key={i}
                      role="listitem"
                      className={`font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border ${tagBorder} transition-colors`}
                    >
                      [ {tech} ]
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* ── Illustration Column ── */}
              <motion.div
                variants={isReversed ? illustVariantsReverse : illustVariants}
                className={`flex-1 w-full max-w-sm md:max-w-md h-64 md:h-80 border-2 ${borderColor} p-6 flex items-center justify-center relative`}
              >
                {/* Corner accent dots */}
                <div className={`absolute top-0 left-0 w-2 h-2 ${isDark ? "bg-accent" : "bg-foreground"}`} />
                <div className={`absolute top-0 right-0 w-2 h-2 ${isDark ? "bg-accent" : "bg-foreground"}`} />
                <div className={`absolute bottom-0 left-0 w-2 h-2 ${isDark ? "bg-accent" : "bg-foreground"}`} />
                <div className={`absolute bottom-0 right-0 w-2 h-2 ${isDark ? "bg-accent" : "bg-foreground"}`} />

                <Illustration dark={isDark} />
              </motion.div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
