import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, H2, Lead, Section } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export const metadata = {
  title: "Pool Repair",
};

export default function RepairPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Pool repair & diagnostics (Central Valley)</H1>
            <div className="mt-5">
              <Lead>
                Pumps, filters, heaters, leaks, valves—diagnosis with clear next steps.
                Same-day response for urgent issues (Mon–Sat).
              </Lead>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact?type=repair" variant="primary">
                Request Repair
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
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <H2>Common repairs</H2>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                <li>Pump / motor issues</li>
                <li>Filter problems & pressure issues</li>
                <li>Heater troubleshooting</li>
                <li>Valves, plumbing, leaks</li>
                <li>Automation & equipment pad fixes</li>
              </ul>
            </div>
            <div>
              <H2>Repair process</H2>
              <ol className="mt-4 grid gap-2 text-sm text-slate-700 list-decimal list-inside">
                <li>Describe symptoms (form/text)</li>
                <li>Schedule diagnostic</li>
                <li>Repair recommendation + estimate</li>
                <li>Repair + verification</li>
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
