import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, Lead, Section } from "@/components/ui";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export const metadata = {
  title: "Request received",
};

export default function ThanksResidentialPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Request received</H1>
            <div className="mt-5">
              <Lead>Thanks—we’ll follow up with next steps and scheduling options.</Lead>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/residential" variant="primary">
                Back to Residential
              </Button>
              <Button href={`sms:+${phoneDigits}`} variant="secondary">
                Text {phoneDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <SiteFooter />
    </div>
  );
}
