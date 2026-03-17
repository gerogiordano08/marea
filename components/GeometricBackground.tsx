"use client";

export default function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      
      {/* Large Rotating Blob - Top Right */}
      <div
        className="geometric-blob w-[600px] h-[600px] -top-48 -right-48 animate-rotate-slow"
      />
      
      {/* Large Rotating Blob - Bottom Left */}
      <div
        className="geometric-blob w-[500px] h-[500px] -bottom-32 -left-32 animate-rotate-slow"
        style={{ animationDelay: "-30s" }}
      />
      
      {/* Pulse Node - Signature Element */}
      <div className="absolute top-12 right-12">
        <div className="relative">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
          <div className="absolute top-0 left-0 w-2 h-2 bg-accent rounded-full animate-ping" />
        </div>
      </div>
    </div>
  );
}
