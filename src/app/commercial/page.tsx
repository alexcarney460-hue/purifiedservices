import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, H2, Lead, Section } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export const metadata = {
  title: "Commercial Pool Service (Fresno / Central Valley)",
  description:
    "Commercial pool service for apartments, hotels, schools, and gyms in Fresno, Clovis, and the Central Valley. Documented visits and responsive repairs.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide COI and W-9?",
      acceptedAnswer: { "@type": "Answer", text: "Yes—available upon request." },
    },
    {
      "@type": "Question",
      name: "Do you service multiple sites?",
      acceptedAnswer: { "@type": "Answer", text: "Yes—multi-site property groups are a good fit." },
    },
    {
      "@type": "Question",
      name: "What's the minimum term?",
      acceptedAnswer: { "@type": "Answer", text: "Commercial service agreements are 12-month minimum." },
    },
    {
      "@type": "Question",
      name: "How fast do you respond to urgent issues?",
      acceptedAnswer: { "@type": "Answer", text: "Same-day response for urgent issues (Mon–Sat)." },
    },
  ],
};

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
            <p className="mt-6 text-sm text-slate-600">
              If you’re searching for reliable <span className="font-semibold">commercial pool service</span>
              in <span className="font-semibold">Fresno</span>, <span className="font-semibold">Clovis</span>, or
              across the <span className="font-semibold">Central Valley</span>, we’re built for consistency:
              documented visits, responsive repairs, and clear communication.
            </p>
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
              <H2>Commercial-ready standards</H2>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                <li>Documented visits: photo logs + chemical readings</li>
                <li>Same-day response for urgent issues (Mon–Sat)</li>
                <li>Weekend coverage options</li>
                <li>Repair recommendations with clear next steps</li>
                <li>COI / W-9 available upon request</li>
                <li>Veteran-owned company</li>
              </ul>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-[var(--ps-mist)] p-4 text-sm text-slate-700">
                <span className="font-semibold">Agreement terms:</span> 12-month minimum for commercial service.
              </div>
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

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-[var(--ps-teal)]">FAQ</div>
            <div className="mt-2 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-sm font-bold text-slate-950">Do you provide COI and W-9?</div>
                <p className="mt-1 text-sm text-slate-600">Yes—available upon request.</p>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-950">Do you service multiple sites?</div>
                <p className="mt-1 text-sm text-slate-600">Yes—multi-site property groups are a good fit.</p>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-950">What’s the minimum term?</div>
                <p className="mt-1 text-sm text-slate-600">Commercial service agreements are 12-month minimum.</p>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-950">How fast do you respond to urgent issues?</div>
                <p className="mt-1 text-sm text-slate-600">Same-day response for urgent issues (Mon–Sat).</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
