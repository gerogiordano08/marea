"use client";

interface MonoBadgeProps {
  children: string;
  showLine?: boolean;
}

export default function MonoBadge({ children, showLine = true }: MonoBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      {showLine && (
        <span className="w-8 h-[2px] bg-accent animate-pulse" />
      )}
      <span className="font-mono text-[10px] tracking-ultrawide uppercase text-foreground/60">
        {children}
      </span>
    </div>
  );
}
