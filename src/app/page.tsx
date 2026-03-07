import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WaterAnimation from "@/components/WaterAnimation";
import { Container, H2 } from "@/components/ui";
import Link from "next/link";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0c3a5e] pb-32 pt-16 sm:pb-40 sm:pt-24">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--ps-aqua)]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--ps-teal)]/8 blur-[100px]" />

        <WaterAnimation />

        <Container>
          <div className="relative max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-[var(--ps-aqua)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ps-aqua)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ps-aqua)]" />
              </span>
              Fresno &bull; Clovis &bull; Central Valley
            </div>

            <h1 className="animate-fade-up animate-delay-100 mt-8 text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Pool service built on{" "}
              <span className="bg-gradient-to-r from-[var(--ps-aqua)] to-[#4dd4e6] bg-clip-text text-transparent">
                clarity
              </span>
            </h1>

            <p className="animate-fade-up animate-delay-200 mt-6 max-w-xl text-pretty text-base leading-relaxed text-blue-100/60 sm:text-lg">
              Documented visits, responsive repairs, and professional standards for
              commercial facilities and homeowners across the Central Valley.
            </p>

            <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[var(--ps-aqua)] to-[var(--ps-teal)] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[var(--ps-aqua)]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--ps-aqua)]/30"
              >
                <span className="relative z-10">Request Service</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--ps-teal)] to-[var(--ps-aqua)] opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href={`sms:+${phoneDigits}`}
                className="glass-dark inline-flex items-center justify-center rounded-2xl px-7 py-4 text-sm font-semibold text-white/90 transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Text {phoneDisplay}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-up animate-delay-400 mt-8 flex flex-wrap gap-3">
              {["Veteran-owned", "State certified", "Wastewater insured", "Same-day response"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/5 px-3 py-1.5 text-xs font-medium text-blue-200/70 backdrop-blur-sm"
                >
                  <span className="text-[var(--ps-aqua)]">&#10003;</span>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Path chooser (floating over hero) ── */}
      <section className="relative z-10 -mt-20 sm:-mt-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/commercial"
              className="group animate-fade-up animate-delay-400 relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#0d2847]/95 to-[#0c3a5e]/95 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(31,186,214,0.15)] sm:p-10"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--ps-aqua)]/5 blur-3xl transition-all group-hover:bg-[var(--ps-aqua)]/10" />
              <div className="relative">
                <div className="inline-flex rounded-full bg-[var(--ps-aqua)]/10 px-3 py-1 text-[11px] font-bold tracking-widest text-[var(--ps-aqua)] uppercase">Commercial</div>
                <div className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Facilities that need consistency
                </div>
                <p className="mt-3 text-sm leading-relaxed text-blue-100/50">
                  Apartments, hotels, schools, gyms. Walkthrough quotes and facility-ready
                  documentation. 12-month agreements.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--ps-aqua)] transition-all group-hover:gap-3">
                  Get a quote <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            <Link
              href="/residential"
              className="group animate-fade-up animate-delay-500 glass overflow-hidden rounded-3xl p-8 shadow-2xl shadow-blue-950/10 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(31,186,214,0.12)] sm:p-10"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--ps-aqua)]/3 blur-3xl transition-all group-hover:bg-[var(--ps-aqua)]/8" />
              <div className="relative">
                <div className="inline-flex rounded-full bg-[var(--ps-teal)]/10 px-3 py-1 text-[11px] font-bold tracking-widest text-[var(--ps-teal)] uppercase">Residential</div>
                <div className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Homeowners who want it done right
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Weekly service, green-to-clean recovery, and repair support —
                  clear communication included.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--ps-teal)] transition-all group-hover:gap-3">
                  Request service <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Services ── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <div className="animate-fade-up inline-flex rounded-full bg-gradient-to-r from-[var(--ps-aqua)]/10 to-[var(--ps-teal)]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[var(--ps-teal)] uppercase">
              What we do
            </div>
            <H2>
              <span className="animate-fade-up animate-delay-100 mt-4 block">Full-service pool & water expertise</span>
            </H2>
            <p className="animate-fade-up animate-delay-200 mx-auto mt-4 max-w-lg text-sm text-slate-500">
              Everything from weekly maintenance to certified water treatment — built around
              documentation, responsiveness, and repair capability.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Commercial Pool Service", desc: "Consistent chemistry, documented visits, and facility-ready processes.", href: "/commercial", delay: "100" },
              { title: "Residential Pool Service", desc: "Weekly service focused on clean water and clear communication.", href: "/residential", delay: "200" },
              { title: "Pool Repair", desc: "Pumps, filters, heaters, leaks — diagnosis with clear next steps.", href: "/repair", delay: "300" },
              { title: "Water Treatment", desc: "State-certified water quality expertise with documentation-first service.", href: "/water-treatment", delay: "400" },
              { title: "Wastewater", desc: "Wastewater-insured support with a safety-first approach.", href: "/wastewater", delay: "500" },
              { title: "Service Areas", desc: "Fresno, Clovis, and coverage across the Central Valley.", href: "/service-areas", delay: "600" },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[var(--ps-aqua)]/30 hover:shadow-lg hover:shadow-[var(--ps-aqua)]/5"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--ps-aqua)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="text-base font-bold tracking-tight text-slate-900">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                  <div className="mt-5 text-sm font-semibold text-[var(--ps-teal)] opacity-0 transition-all group-hover:opacity-100">
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why us ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f9fc] via-[#e8f6fb] to-[#dff0f8] py-20 sm:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[var(--ps-aqua)]/5 blur-[80px]" />
        <Container>
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold tracking-widest text-[var(--ps-teal)] uppercase shadow-sm">
                Why us
              </div>
              <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-[-0.03em] text-[var(--ps-navy)] md:text-4xl">
                Built for consistency,{" "}
                <span className="bg-gradient-to-r from-[var(--ps-teal)] to-[var(--ps-aqua)] bg-clip-text text-transparent">
                  not shortcuts
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Facilities and homeowners choose us for professional standards,
                documented accountability, and responsive service.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[var(--ps-teal)] to-[var(--ps-aqua)] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[var(--ps-teal)]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Request Service
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Documented visits", "Photo logs + chemical readings after every service"],
                ["Same-day urgent response", "Monday through Saturday — we handle emergencies fast"],
                ["Weekend coverage", "Available for commercial clients that need it"],
                ["State certified", "Water treatment credentials you can verify"],
                ["Wastewater insured", "Proper coverage for wastewater-adjacent work"],
                ["Repair-ready", "We diagnose and fix — not just skim and leave"],
              ].map(([title, desc], i) => (
                <div
                  key={title}
                  className="glass group flex gap-4 rounded-2xl p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ps-teal)] to-[var(--ps-aqua)] text-xs font-bold text-white shadow-sm">
                    &#10003;
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
      <section className="py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <div className="inline-flex rounded-full bg-gradient-to-r from-[var(--ps-aqua)]/10 to-[var(--ps-teal)]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[var(--ps-teal)] uppercase">
              How it works
            </div>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-[-0.03em] text-[var(--ps-navy)] md:text-4xl">
              Three steps to better pool service
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              { num: "01", title: "Request service", desc: "Use the form or text us. We respond within 2 business hours (Mon–Sat)." },
              { num: "02", title: "Scope + schedule", desc: "Walkthrough quotes for facilities; fast scheduling for residential." },
              { num: "03", title: "Service + documentation", desc: "Consistent visits with clear notes, chemical readings, and next steps." },
            ].map((s) => (
              <div key={s.num} className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[var(--ps-aqua)]/30 hover:shadow-lg hover:shadow-[var(--ps-aqua)]/5">
                <div className="absolute -right-4 -top-4 text-[80px] font-black leading-none text-slate-100/80 transition-all group-hover:text-[var(--ps-aqua)]/10">
                  {s.num}
                </div>
                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--ps-teal)] to-[var(--ps-aqua)] text-sm font-bold text-white shadow-sm">
                    {s.num}
                  </div>
                  <div className="mt-4 text-base font-bold text-slate-900">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0c3a5e] p-10 sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--ps-aqua)]/10 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[var(--ps-teal)]/8 blur-[60px]" />

            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready for consistent{" "}
                  <span className="bg-gradient-to-r from-[var(--ps-aqua)] to-[#4dd4e6] bg-clip-text text-transparent">
                    pool service?
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-blue-100/50">
                  Tell us what you need — we&apos;ll respond with next steps and scheduling options
                  within 2 business hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[var(--ps-aqua)] to-[var(--ps-teal)] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[var(--ps-aqua)]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="relative z-10">Request Service</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--ps-teal)] to-[var(--ps-aqua)] opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  href={`sms:+${phoneDigits}`}
                  className="glass-dark inline-flex items-center justify-center rounded-2xl px-7 py-4 text-sm font-semibold text-white/90 transition-all hover:-translate-y-0.5 hover:bg-white/10"
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
