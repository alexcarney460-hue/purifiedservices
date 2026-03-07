"use client";

export default function WaterWaves({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden ${className}`} aria-hidden>
      <svg
        className="relative block w-[200%] animate-[wave_12s_ease-in-out_infinite]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: "60px" }}
      >
        <path
          d="M0,30 C240,50 480,10 720,30 C960,50 1200,10 1440,30 L1440,60 L0,60 Z"
          fill="rgba(31,186,214,0.06)"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 block w-[200%] animate-[wave_9s_ease-in-out_infinite_reverse]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: "45px" }}
      >
        <path
          d="M0,25 C360,45 720,5 1080,30 C1260,45 1440,15 1440,15 L1440,60 L0,60 Z"
          fill="rgba(0,163,214,0.04)"
        />
      </svg>
    </div>
  );
}
