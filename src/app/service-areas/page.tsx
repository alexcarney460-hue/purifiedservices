import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, H2, Lead, Section } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export const metadata = {
  title: "Service Areas (Fresno / Clovis / Central Valley)",
  description:
    "Service areas for Fresno Pool Care: Fresno, Clovis, and coverage across the Central Valley for residential and commercial clients.",
};

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Service areas</H1>
            <div className="mt-5">
              <Lead>
                Fresno, Clovis, and coverage across the Central Valley. If you’re not sure whether
                you’re in range, text us and we’ll confirm.
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
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Core coverage</H2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>Fresno</li>
            <li>Clovis</li>
            <li>Madera</li>
            <li>Sanger</li>
            <li>Selma</li>
            <li>Visalia (as scheduling allows)</li>
          </ul>
          <p className="mt-6 text-sm text-slate-600">
            Commercial multi-site service is available across the Central Valley based on scope and
            scheduling.
          </p>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
