"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/commercial", label: "Commercial" },
  { href: "/residential", label: "Residential" },
  { href: "/repair", label: "Repair" },
  { href: "/water-treatment", label: "Water Treatment" },
  { href: "/wastewater", label: "Wastewater" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/dashboard", label: "Portal" },
  { href: "/contact", label: "Request Service" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
        aria-label="Open menu"
      >
        <span className="text-xl leading-none">☰</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <button
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className="absolute right-3 top-3 w-[min(92vw,360px)] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold tracking-wide text-slate-950">
                Purified Services
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <nav className="mt-4 grid gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[var(--ps-teal)] hover:bg-slate-50"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-xl bg-[var(--ps-teal)] px-4 text-sm font-semibold text-white hover:bg-[#006b77]"
              >
                Sign up
              </Link>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Same-day response for urgent issues (Mon–Sat).
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
