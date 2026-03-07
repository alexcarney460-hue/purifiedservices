import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, H2, Lead, Section } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export const metadata = {
  title: "Wastewater Services | Insured Wastewater Support in Fresno",
  description:
    "Wastewater-insured pool and facility support with a safety-first approach. Serving Fresno, Clovis, and the Central Valley with certified, documented wastewater services.",
};

export default function WastewaterPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Wastewater support (insured)</H1>
            <div className="mt-5">
              <Lead>
                Wastewater-insured support with a safety-first, documentation-first approach.
                Reach out with your site details and we’ll coordinate next steps.
              </Lead>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact?type=wastewater" variant="primary">
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
          <H2>What to include in your request</H2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>Site address and best contact</li>
            <li>System overview and current issue</li>
            <li>Timeline and access constraints</li>
          </ul>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
