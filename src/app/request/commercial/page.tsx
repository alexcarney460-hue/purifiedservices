"use client";

import { useRef } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button, Container, H1, Lead, Section } from "@/components/ui";

function Field({
  label,
  name,
  placeholder,
  required,
  type,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-semibold text-slate-900">
        {label} {required ? <span className="text-slate-400">(required)</span> : null}
      </span>
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ps-aqua)]"
      />
    </label>
  );
}

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export default function CommercialRequestPage() {
  const notesRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Request a commercial walkthrough quote</H1>
            <div className="mt-5">
              <Lead>
                Apartments, hotels, schools, and gyms. Documented visits, responsive repairs, and
                clear communication.
              </Lead>
              <div className="mt-3 text-sm text-slate-600">
                Commercial agreements: <span className="font-semibold">12-month minimum</span>.
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
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-[var(--ps-teal)]">Commercial / Facility quote</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field
                label="Organization"
                name="org"
                placeholder="School, hotel, apartment community…"
                required
              />
              <Field label="Contact name" name="contact" placeholder="Full name" required />
              <Field label="Phone" name="phone" placeholder="(559) 519-0335" required type="tel" />
              <Field label="Email" name="email" placeholder="name@company.com" type="email" />
              <Field label="Site address(es)" name="sites" placeholder="Address or list of sites" required />
              <Field label="Pool/spa count" name="pool_count" placeholder="e.g., 1 pool + 1 spa" required />
              <Field label="Access constraints" name="access" placeholder="Gates, keys, after-hours rules…" />
              <Field
                label="Best time to contact"
                name="best_time"
                placeholder="e.g., weekdays 9–12, or anytime"
              />
            </div>

            <label className="mt-4 grid gap-2 text-sm">
              <span className="font-semibold text-slate-900">Walkthrough availability + notes</span>
              <textarea
                ref={(el) => {
                  notesRef.current = el;
                }}
                name="notes"
                placeholder="Best days/times for a walkthrough, access notes, current issues, desired start date…"
                rows={5}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ps-aqua)]"
              />
            </label>

            <div className="mt-5">
              <Button href="/thanks-commercial" variant="primary">
                Submit request
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
