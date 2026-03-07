"use client";

export default function WaterAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Animated wave layers */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] animate-[wave_8s_ease-in-out_infinite]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "120px" }}
      >
        <path
          d="M0,40 C180,100 360,0 540,50 C720,100 900,20 1080,60 C1260,100 1440,30 1440,30 L1440,120 L0,120 Z"
          fill="rgba(31,186,214,0.07)"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] animate-[wave_6s_ease-in-out_infinite_reverse]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "100px" }}
      >
        <path
          d="M0,60 C240,20 480,90 720,40 C960,0 1200,80 1440,50 L1440,120 L0,120 Z"
          fill="rgba(0,163,214,0.05)"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] animate-[wave_10s_ease-in-out_infinite]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path
          d="M0,80 C360,40 720,100 1080,50 C1260,30 1440,70 1440,70 L1440,120 L0,120 Z"
          fill="rgba(31,186,214,0.04)"
        />
      </svg>

      {/* Floating bubble particles */}
      <div className="absolute bottom-10 left-[10%] h-3 w-3 rounded-full bg-[var(--ps-aqua)]/10 animate-[float_7s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 left-[30%] h-2 w-2 rounded-full bg-[var(--ps-aqua)]/15 animate-[float_5s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-16 left-[55%] h-4 w-4 rounded-full bg-[var(--ps-teal)]/8 animate-[float_9s_ease-in-out_infinite_2s]" />
      <div className="absolute bottom-8 left-[75%] h-2.5 w-2.5 rounded-full bg-[var(--ps-aqua)]/12 animate-[float_6s_ease-in-out_infinite_0.5s]" />
      <div className="absolute bottom-24 left-[90%] h-2 w-2 rounded-full bg-[var(--ps-teal)]/10 animate-[float_8s_ease-in-out_infinite_3s]" />
    </div>
  );
}
