import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, H2, Lead, Section } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export const metadata = {
  title: "Residential Pool Service (Fresno / Clovis)",
  description:
    "Weekly residential pool service in Fresno, Clovis, and surrounding Central Valley areas. Clean water, consistent service, and clear communication.",
};

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Residential pool service that stays consistent</H1>
            <div className="mt-5">
              <Lead>
                Weekly service, balanced chemistry, and clear communication—so your pool stays
                clean and predictable.
              </Lead>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact?type=residential" variant="primary">
                Request Residential Service
              </Button>
              <Button href={`sms:+${phoneDigits}`} variant="secondary">
                Text {phoneDisplay}
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Weekly <span className="font-semibold">residential pool service</span> for
              <span className="font-semibold"> Fresno</span> and <span className="font-semibold">Clovis</span>
              homeowners—consistent chemistry, clean water, and straightforward communication.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <H2>What’s included</H2>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                <li>Skimming and surface cleaning</li>
                <li>Brushing and vacuuming (as needed)</li>
                <li>Basket emptying</li>
                <li>Chemical balancing</li>
                <li>Equipment check and issue flagging</li>
                <li>Notes/photos when needed</li>
              </ul>
            </div>
            <div>
              <H2>Add-ons</H2>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                <li>Green-to-clean recovery</li>
                <li>Filter cleans</li>
                <li>Equipment installs & upgrades</li>
                <li>Repairs and diagnostics</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
