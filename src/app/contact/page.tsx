"use client";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, Lead, Section } from "@/components/ui";
import QuickChips from "@/components/QuickChips";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export default function ContactPage() {
  function applyChip(value: string) {
    // Placeholder: chips still provide intent, but forms are now on separate pages.
    // We keep chips visible here for speed and future prefill routing.
    void value;
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Request service</H1>
            <div className="mt-5">
              <Lead>
                Prefer text? <span className="font-semibold">{phoneDisplay}</span>. We respond to
                urgent issues same-day (Mon–Sat).
              </Lead>
              <div className="mt-3 text-sm text-slate-600">
                Typical replies: <span className="font-semibold">within 2 business hours</span> (Mon–Sat).
              </div>
            </div>
            <div className="mt-6">
              <div className="text-xs font-semibold tracking-wide text-slate-500">Quick select</div>
              <div className="mt-2">
                <QuickChips onPick={applyChip} />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`sms:+${phoneDigits}`} variant="primary">
                Text {phoneDisplay}
              </Button>
              <Button href="/commercial" variant="secondary">
                Commercial info
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-xs font-semibold tracking-wide text-[var(--ps-teal)]">Commercial</div>
              <div className="mt-2 text-lg font-bold tracking-tight text-[var(--ps-navy)]">
                Facility walkthrough quote
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Apartments, hotels, schools, and gyms. 12-month agreements.
              </p>
              <div className="mt-5">
                <Button href="/request/commercial" variant="primary">
                  Request commercial quote
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-xs font-semibold tracking-wide text-[var(--ps-teal)]">Residential</div>
              <div className="mt-2 text-lg font-bold tracking-tight text-[var(--ps-navy)]">
                Pool service request
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Weekly service, repair requests, or green pool recovery.
              </p>
              <div className="mt-5">
                <Button href="/request/residential" variant="primary">
                  Request residential service
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
