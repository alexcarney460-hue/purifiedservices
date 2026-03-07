import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, H2, Lead, Section } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export const metadata = {
  title: "Water Treatment Services in Fresno & Central Valley",
  description:
    "Professional water treatment services with state-certified expertise. Documentation-first approach for pools, facilities, and commercial properties across Fresno, Clovis, and the Central Valley.",
};

export default function WaterTreatmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Water treatment support & service</H1>
            <div className="mt-5">
              <Lead>
                State-certified water treatment expertise with a documentation-first approach.
                Tell us what you’re dealing with and we’ll recommend next steps.
              </Lead>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact?type=water-treatment" variant="primary">
                Request Service
              </Button>
              <Button href={`sms:+${phoneDigits}`} variant="secondary">
                Text {phoneDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>What we focus on</H2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>Clear assessment of current conditions</li>
            <li>Documentation and consistent communication</li>
            <li>Service and repair support (as applicable)</li>
          </ul>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
