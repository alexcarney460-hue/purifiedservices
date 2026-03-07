import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WaterWaves from "@/components/WaterWaves";
import { Button, Card, Container, H2 } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pb-20 pt-14 sm:pb-24 sm:pt-20">
        {/* Subtle blue radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--ps-aqua)]/[0.04] blur-[100px]" />

        {/* Floating blue dots */}
        <div className="pointer-events-none absolute left-[15%] top-[30%] h-2 w-2 rounded-full bg-[var(--ps-aqua)]/20 animate-[float-dot_6s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute right-[20%] top-[20%] h-1.5 w-1.5 rounded-full bg-[var(--ps-teal)]/15 animate-[float-dot_8s_ease-in-out_infinite_1s]" />
        <div className="pointer-events-none absolute left-[60%] top-[60%] h-2.5 w-2.5 rounded-full bg-[var(--ps-aqua)]/10 animate-[float-dot_7s_ease-in-out_infinite_2s]" />

        <WaterWaves />

        <Container>
          <div className="relative max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[var(--ps-aqua)]/20 bg-[var(--ps-mist)] px-4 py-1.5 text-xs font-semibold text-[var(--ps-teal)]">
              Fresno &bull; Clovis &bull; Central Valley
              <span className="text-[var(--ps-aqua)]/40">|</span>
              <span className="text-slate-500">Same-day urgent response</span>
            </div>

            <h1 className="animate-fade-up delay-100 mt-7 text-balance text-4xl font-extrabold tracking-[-0.04em] text-[var(--ps-navy)] sm:text-5xl md:text-6xl">
              Commercial & residential pool service
            </h1>

            <p className="animate-fade-up delay-200 mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-500 sm:text-lg">
              Documented visits, responsive repairs, and professional standards for facilities
              and homeowners across the Central Valley.
            </p>

            <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                Request Service
              </Button>
              <Button href={`sms:+${phoneDigits}`} variant="secondary" className="w-full sm:w-auto">
                Text {phoneDisplay}
              </Button>
            </div>

            <div className="animate-fade-up delay-400 mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
              <span>&#10003; Veteran-owned</span>
              <span>&#10003; State certified</span>
              <span>&#10003; Wastewater insured</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Path chooser ── */}
      <section className="bg-[var(--ps-mist)]/50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                href: "/commercial",
                label: "Commercial",
                title: "Facilities that need consistency",
                desc: "Apartments, hotels, schools, and gyms. Walkthrough quotes and facility-ready documentation. 12-month agreements.",
                cta: "Get a quote",
              },
              {
                href: "/residential",
                label: "Residential",
                title: "Homeowners who want it done right",
                desc: "Weekly service, green-to-clean recovery, and repair support — clear communication included.",
                cta: "Request service",
              },
            ].map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="group rounded-3xl border border-[var(--ps-aqua)]/15 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--ps-aqua)]/30 hover:shadow-md hover:shadow-[var(--ps-aqua)]/5 sm:p-10"
              >
                <div className="text-xs font-bold tracking-widest text-[var(--ps-teal)] uppercase">
                  {card.label}
                </div>
                <div className="mt-3 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  {card.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {card.desc}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--ps-teal)] transition-all group-hover:gap-2.5">
                  {card.cta} <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Services ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest text-[var(--ps-teal)] uppercase">What we do</div>
            <H2>
              <span className="mt-3 block">Full-service pool & water expertise</span>
            </H2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Everything from weekly maintenance to certified water treatment — built around
              documentation, responsiveness, and repair capability.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Commercial Pool Service" description="Consistent chemistry, documented visits, and facility-ready processes." href="/commercial" />
            <Card title="Residential Pool Service" description="Weekly service focused on clean water and clear communication." href="/residential" />
            <Card title="Pool Repair" description="Pumps, filters, heaters, leaks — diagnosis with clear next steps." href="/repair" />
            <Card title="Water Treatment" description="State-certified water quality expertise with documentation-first service." href="/water-treatment" />
            <Card title="Wastewater" description="Wastewater-insured support with a safety-first approach." href="/wastewater" />
            <Card title="Service Areas" description="Fresno, Clovis, and coverage across the Central Valley." href="/service-areas" />
          </div>
        </Container>
      </section>

      {/* ── Why us ── */}
      <section className="relative overflow-hidden bg-[var(--ps-mist)]/50 py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-20 top-10 h-[250px] w-[250px] rounded-full bg-[var(--ps-aqua)]/[0.03] blur-[80px]" />
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="text-xs font-bold tracking-widest text-[var(--ps-teal)] uppercase">Why us</div>
              <h2 className="mt-3 text-balance text-2xl font-extrabold tracking-[-0.02em] text-[var(--ps-navy)] md:text-3xl">
                Built for consistency, not shortcuts
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Facilities and homeowners choose us for professional standards,
                documented accountability, and responsive service.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Request Service
                </Button>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Documented visits", "Photo logs + chemical readings after every service"],
                ["Same-day urgent response", "Monday through Saturday — emergencies handled fast"],
                ["Weekend coverage", "Available for commercial clients that need it"],
                ["State certified", "Water treatment credentials you can verify"],
                ["Wastewater insured", "Proper coverage for wastewater-adjacent work"],
                ["Repair-ready", "We diagnose and fix — not just skim and leave"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="flex gap-3.5 rounded-2xl border border-[var(--ps-aqua)]/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--ps-mist)] text-xs font-bold text-[var(--ps-teal)]">
                    &#10003;
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-800">{title}</div>
                    <div className="text-sm text-slate-400">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Process ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <div className="text-xs font-bold tracking-widest text-[var(--ps-teal)] uppercase">How it works</div>
            <H2>
              <span className="mt-3 block">Three steps to better pool service</span>
            </H2>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
            {[
              { num: "01", title: "Request service", desc: `Use the form or text us at ${phoneDisplay}. We respond within 2 business hours.` },
              { num: "02", title: "Scope + schedule", desc: "Walkthrough quotes for facilities; fast scheduling for residential." },
              { num: "03", title: "Service + documentation", desc: "Consistent visits with clear notes, chemical readings, and next steps." },
            ].map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-[var(--ps-aqua)]/10 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-[var(--ps-aqua)]/25 hover:shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ps-mist)] text-sm font-bold text-[var(--ps-teal)]">
                  {s.num}
                </div>
                <div className="mt-4 text-base font-bold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-[var(--ps-mist)]/50 py-16 sm:py-20">
        <WaterWaves className="opacity-70" />
        <Container>
          <div className="relative rounded-3xl border border-[var(--ps-aqua)]/15 bg-white p-10 shadow-sm sm:p-14">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <div className="text-xs font-bold tracking-widest text-[var(--ps-teal)] uppercase">Get started</div>
                <div className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Ready for consistent pool service?
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Tell us what you need — we&apos;ll respond with next steps and scheduling options
                  within 2 business hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Button href="/contact" variant="primary">
                  Request Service
                </Button>
                <Button href={`sms:+${phoneDigits}`} variant="secondary">
                  Text {phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
