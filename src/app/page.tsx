import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Card, Container, H1, H2, Lead, Section } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero */}
      <Section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/brand/hero.jpg)" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.82)_55%,rgba(255,255,255,0.35)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--ps-mist),rgba(255,255,255,0.15))]" />
        </div>

        <Container>
          <div className="relative max-w-3xl py-10 sm:py-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
              Fresno • Clovis • Central Valley
              <span className="text-slate-300">|</span>
              Same-day urgent response (Mon–Sat)
            </div>
            <div className="mt-6">
              <H1>Commercial & residential pool service</H1>
              <div className="mt-5">
                <Lead>
                  Documented visits, responsive repairs, and professional standards for facilities
                  and homeowners across Fresno, Clovis, and the Central Valley.
                </Lead>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary">
                  Request Service
                </Button>
                <Button href={`sms:+${phoneDigits}`} variant="secondary">
                  Text {phoneDisplay}
                </Button>
              </div>
              <div className="mt-4 text-sm text-slate-700">
                Veteran-owned • State certified in water treatment • Wastewater insured
              </div>
            </div>
          </div>

          {/* Path chooser */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/10">
              <div className="text-xs font-semibold tracking-wide text-[var(--ps-teal)]">
                Commercial / Institutional
              </div>
              <div className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                Facilities that need consistency
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Apartments • Hotels • Schools • Gyms. Walkthrough quotes and facility-ready
                documentation.
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <Button href="/commercial" variant="primary">
                  Commercial Pools
                </Button>
                <div className="text-xs text-slate-500">12-month agreements</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/10">
              <div className="text-xs font-semibold tracking-wide text-[var(--ps-teal)]">Residential</div>
              <div className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                Homeowners who want it done right
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Weekly service, green-to-clean, and repair support—clear communication included.
              </p>
              <div className="mt-5">
                <Button href="/residential" variant="primary">
                  Residential Pools
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="-mt-16 sm:-mt-14">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-slate-900/10 backdrop-blur sm:p-8">
            <div className="max-w-2xl">
              <H2>Services</H2>
              <p className="mt-3 text-sm text-slate-600">
                Premium service across pools, treatment, and wastewater—built around documentation,
                responsiveness, and repair capability.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card
              title="Commercial Pool Service"
              description="Consistent chemistry, documented visits, and facility-ready processes."
              href="/commercial"
            />
            <Card
              title="Residential Pool Service"
              description="Weekly service focused on clean water and clear communication."
              href="/residential"
            />
            <Card
              title="Pool Repair"
              description="Pumps, filters, heaters, leaks—diagnosis with clear next steps."
              href="/repair"
            />
            <Card
              title="Water Treatment"
              description="Water quality expertise with documentation-first service."
              href="/water-treatment"
            />
            <Card
              title="Wastewater"
              description="Wastewater-insured support with a safety-first approach."
              href="/wastewater"
            />
            <Card
              title="Service Areas"
              description="Fresno, Clovis, and coverage across the Central Valley."
              href="/service-areas"
            />
          </div>
        </div>
        </Container>
      </Section>

      {/* Why */}
      <Section className="bg-[var(--ps-mist)]">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <H2>Why Purified Services</H2>
              <p className="mt-3 text-sm text-slate-600">
                Built for facilities and homeowners who value consistency, clarity, and
                professional standards.
              </p>
            </div>
            <ul className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-700 shadow-sm">
              <li>Documented visits: photo logs + chemical readings</li>
              <li>Same-day response for urgent issues (Mon–Sat)</li>
              <li>Weekend coverage options</li>
              <li>State certified in water treatment</li>
              <li>Wastewater insured</li>
              <li>Repair-ready support (not just “cleaning”)</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <H2>How it works</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-bold text-[var(--ps-teal)]">Step 1</div>
              <div className="mt-2 text-base font-bold text-slate-950">Request service</div>
              <p className="mt-2 text-sm text-slate-600">
                Use the form or text us at {phoneDisplay}.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-bold text-[var(--ps-teal)]">Step 2</div>
              <div className="mt-2 text-base font-bold text-slate-950">Scope + schedule</div>
              <p className="mt-2 text-sm text-slate-600">
                Walkthrough quotes for facilities; fast scheduling for residential.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-bold text-[var(--ps-teal)]">Step 3</div>
              <div className="mt-2 text-base font-bold text-slate-950">Service + documentation</div>
              <p className="mt-2 text-sm text-slate-600">
                Consistent visits with clear notes, readings, and next steps.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-[linear-gradient(180deg,white,var(--ps-mist))]">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm font-semibold text-[var(--ps-teal)]">Get started</div>
                <div className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                  Ready for consistent water systems service?
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Tell us what you need—we’ll respond with next steps and scheduling options.
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
      </Section>

      <SiteFooter />
    </div>
  );
}
