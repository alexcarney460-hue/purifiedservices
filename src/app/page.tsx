import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H2 } from "@/components/ui";
import Link from "next/link";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

const services = [
  {
    title: "Commercial Pools",
    desc: "Apartments, hotels, schools, gyms. Documented visits and facility-ready processes.",
    href: "/commercial",
    tag: "12-mo agreements",
  },
  {
    title: "Residential Pools",
    desc: "Weekly service, balanced chemistry, and clear communication for homeowners.",
    href: "/residential",
  },
  {
    title: "Pool Repair",
    desc: "Pumps, filters, heaters, leaks — diagnosis with clear next steps.",
    href: "/repair",
  },
  {
    title: "Water Treatment",
    desc: "State-certified water quality expertise with documentation-first service.",
    href: "/water-treatment",
  },
  {
    title: "Wastewater",
    desc: "Wastewater-insured support with a safety-first approach.",
    href: "/wastewater",
  },
  {
    title: "Service Areas",
    desc: "Fresno, Clovis, and coverage across the Central Valley.",
    href: "/service-areas",
  },
];

const trustItems = [
  { label: "Veteran-owned", icon: "★" },
  { label: "State certified water treatment", icon: "✓" },
  { label: "Wastewater insured", icon: "✓" },
  { label: "Same-day urgent response", icon: "⚡" },
];

const steps = [
  { num: "01", title: "Request service", desc: "Use the form or text us. We respond within 2 business hours (Mon–Sat)." },
  { num: "02", title: "Scope + schedule", desc: "Walkthrough quotes for facilities; fast scheduling for residential." },
  { num: "03", title: "Service + documentation", desc: "Consistent visits with clear notes, chemical readings, and next steps." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="bg-[var(--ps-navy)] pb-20 pt-16 sm:pb-28 sm:pt-20">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              Fresno &bull; Clovis &bull; Central Valley
            </div>

            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Pool service built on
              <span className="text-[var(--ps-aqua)]"> consistency</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
              Documented visits, responsive repairs, and professional standards for
              commercial facilities and homeowners across the Central Valley.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--ps-aqua)] px-6 py-3.5 text-sm font-bold text-[var(--ps-navy)] shadow-lg shadow-[var(--ps-aqua)]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--ps-aqua)]/30"
              >
                Request Service
              </Link>
              <Link
                href={`sms:+${phoneDigits}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Text {phoneDisplay}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Trust bar ── */}
      <section className="-mt-10 relative z-10 sm:-mt-14">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustItems.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--ps-mist)] text-base text-[var(--ps-teal)]">
                  {t.icon}
                </span>
                <span className="text-xs font-semibold leading-tight text-slate-800">{t.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Path chooser ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/commercial"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-[var(--ps-navy)] p-8 transition hover:shadow-lg sm:p-10"
            >
              <div className="text-xs font-bold tracking-widest text-[var(--ps-aqua)] uppercase">Commercial</div>
              <div className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Facilities that need consistency
              </div>
              <p className="mt-3 max-w-sm text-sm text-white/60">
                Apartments, hotels, schools, and gyms. Walkthrough quotes and
                facility-ready documentation. 12-month agreements.
              </p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[var(--ps-aqua)] transition group-hover:gap-2">
                Get a walkthrough quote <span aria-hidden>→</span>
              </div>
            </Link>

            <Link
              href="/residential"
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition hover:shadow-lg sm:p-10"
            >
              <div className="text-xs font-bold tracking-widest text-[var(--ps-teal)] uppercase">Residential</div>
              <div className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                Homeowners who want it done right
              </div>
              <p className="mt-3 max-w-sm text-sm text-slate-500">
                Weekly service, green-to-clean recovery, and repair support — clear
                communication included.
              </p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[var(--ps-teal)] transition group-hover:gap-2">
                Request residential service <span aria-hidden>→</span>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Services grid ── */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <H2>Full-service pool & water expertise</H2>
            <p className="mt-3 text-sm text-slate-600">
              Everything from weekly maintenance to certified water treatment — built around
              documentation, responsiveness, and repair capability.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="text-base font-bold tracking-tight text-slate-950">{s.title}</div>
                  {s.tag && (
                    <span className="shrink-0 rounded-full bg-[var(--ps-mist)] px-2 py-0.5 text-[10px] font-bold text-[var(--ps-teal)]">
                      {s.tag}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                <div className="mt-4 text-sm font-semibold text-[var(--ps-teal)] opacity-0 transition group-hover:opacity-100">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why us ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <H2>Why Purified Services</H2>
              <p className="mt-3 text-sm text-slate-600">
                Built for facilities and homeowners who value consistency, clarity, and
                professional standards.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request Service
                </Button>
              </div>
            </div>
            <div className="grid gap-3">
              {[
                ["Documented visits", "Photo logs + chemical readings after every service"],
                ["Same-day urgent response", "Monday through Saturday — we handle emergencies fast"],
                ["Weekend coverage", "Available for commercial clients that need it"],
                ["State certified", "Water treatment credentials you can verify"],
                ["Wastewater insured", "Proper coverage for wastewater-adjacent work"],
                ["Repair-ready", "Not just cleaning — we diagnose and fix equipment issues"],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--ps-navy)] text-xs font-bold text-[var(--ps-aqua)]">
                    ✓
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{title}</div>
                    <div className="text-sm text-slate-500">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Process ── */}
      <section className="border-y border-slate-100 bg-[var(--ps-navy)] py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-balance text-2xl font-bold tracking-[-0.02em] text-white md:text-3xl">
              How it works
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
              Three steps to consistent, documented pool service.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-3xl font-extrabold text-[var(--ps-aqua)]">{s.num}</div>
                <div className="mt-3 text-base font-bold text-white">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-[var(--ps-navy)] p-10 sm:p-14">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Ready for consistent pool service?
                </h2>
                <p className="mt-3 text-sm text-white/60">
                  Tell us what you need — we&apos;ll respond with next steps and scheduling options
                  within 2 business hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--ps-aqua)] px-6 py-3.5 text-sm font-bold text-[var(--ps-navy)] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Request Service
                </Link>
                <Link
                  href={`sms:+${phoneDigits}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Text {phoneDisplay}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
