"use client";

import { useRef } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import QuickChips from "@/components/QuickChips";
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

export default function ResidentialRequestPage() {
  const notesRef = useRef<HTMLTextAreaElement | null>(null);

  function applyChip(value: string) {
    if (!notesRef.current) return;
    const current = notesRef.current.value?.trim();
    notesRef.current.value = current ? `${current}\n${value}` : value;
    notesRef.current.focus();
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Request residential pool service</H1>
            <div className="mt-5">
              <Lead>
                Weekly service, repair requests, or green pool recovery. Prefer text?{" "}
                <span className="font-semibold">{phoneDisplay}</span>.
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
              <Button href="/residential" variant="secondary">
                Residential info
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-[var(--ps-teal)]">Residential request</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" placeholder="Full name" required />
              <Field label="Phone" name="phone" placeholder="(559) 519-0335" required type="tel" />
              <Field label="Address" name="address" placeholder="Street address" required />
              <Field label="City" name="city" placeholder="Fresno, Clovis, etc." required />
              <Field
                label="Service needed"
                name="service"
                placeholder="Weekly service, repair, green-to-clean…"
                required
              />
              <Field label="Urgency" name="urgency" placeholder="Today / this week / this month" />
              <Field
                label="Best time to contact"
                name="best_time"
                placeholder="e.g., weekdays after 5, or anytime"
              />
            </div>

            <label className="mt-4 grid gap-2 text-sm">
              <span className="font-semibold text-slate-900">Notes</span>
              <textarea
                ref={(el) => {
                  notesRef.current = el;
                }}
                name="notes"
                placeholder="Anything we should know about access, equipment, or current issues?"
                rows={5}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ps-aqua)]"
              />
            </label>

            <div className="mt-5">
              <Button href="/thanks-residential" variant="primary">
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
