import { redirect } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Container, H1, Lead, Section } from "@/components/ui";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { submitScheduleRequest } from "@/app/schedule/actions";

export const metadata = { title: "Schedule" };

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export default async function SchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) redirect("/login");

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Request a service day</H1>
            <div className="mt-5">
              <Lead>
                Choose your preferred service day. Requests require approval before your schedule
                is finalized.
              </Lead>
            </div>
            <div className="mt-3 text-sm text-slate-600">Residential service days: Mon–Sat.</div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            {error ? (
              <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                {decodeURIComponent(error)}
              </div>
            ) : null}

            <form className="grid gap-5" action={submitScheduleRequest}>
              <label className="grid gap-2 text-sm">
                <span className="font-semibold text-slate-900">Preferred day</span>
                <select
                  name="preferred_day"
                  className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--ps-aqua)]"
                  defaultValue="Mon"
                >
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm">
                <span className="font-semibold text-slate-900">Notes (optional)</span>
                <textarea
                  name="notes"
                  rows={5}
                  placeholder="Gate code, access notes, preferred time window, special instructions…"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ps-aqua)]"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-[var(--ps-navy)] px-5 text-sm font-semibold text-white"
              >
                Submit request
              </button>

              <p className="text-xs text-slate-500">
                After approval, we’ll confirm your assigned day and a time window.
              </p>
            </form>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
