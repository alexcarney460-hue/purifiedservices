import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, H2, Lead, Section } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export const metadata = {
  title: "Commercial Pool Service",
};

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Commercial pool service for Central Valley facilities</H1>
            <div className="mt-5">
              <Lead>
                Apartments, hotels, schools, and gyms count on consistency. We deliver documented
                service, responsive repairs, and clear communication.
              </Lead>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact?type=commercial" variant="primary">
                Request a Walkthrough Quote
              </Button>
              <Button href={`sms:+${phoneDigits}`} variant="secondary">
                Text {phoneDisplay}
              </Button>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              Commercial agreements: <span className="font-semibold">12-month minimum</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <H2>Who we serve</H2>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                <li>Apartments & HOAs</li>
                <li>Hotels & hospitality</li>
                <li>Schools & campuses</li>
                <li>Gyms & fitness centers</li>
                <li>Multi-site property managers</li>
              </ul>
            </div>
            <div>
              <H2>What you get</H2>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                <li>Scheduled service with standardized checklists</li>
                <li>Chemical readings, notes, and photo documentation</li>
                <li>Same-day response for urgent issues (Mon–Sat)</li>
                <li>Weekend coverage options</li>
                <li>Repair recommendations with clear next steps</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--ps-mist)]">
        <Container>
          <H2>How quoting works</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-bold text-[var(--ps-teal)]">Step 1</div>
              <div className="mt-2 text-base font-bold text-slate-950">Walkthrough</div>
              <p className="mt-2 text-sm text-slate-600">
                We review the site, equipment, access, and current conditions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-bold text-[var(--ps-teal)]">Step 2</div>
              <div className="mt-2 text-base font-bold text-slate-950">Scope + agreement</div>
              <p className="mt-2 text-sm text-slate-600">
                You get a clear scope, visit cadence, and service expectations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-bold text-[var(--ps-teal)]">Step 3</div>
              <div className="mt-2 text-base font-bold text-slate-950">Service + documentation</div>
              <p className="mt-2 text-sm text-slate-600">
                Ongoing service with consistent documentation and fast issue escalation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
