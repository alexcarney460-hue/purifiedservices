import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Container, H1, H2, Lead, Section } from "@/components/ui";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/authz";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  const user = data.user;

  const latestRequest = user
    ? await supabase
        .from("schedule_requests")
        .select("preferred_day,status,assigned_day,assigned_window,created_at")
        .eq("requester_user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle()
    : null;

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Dashboard</H1>
            <div className="mt-5">
              <Lead>
                {user
                  ? `Signed in as ${user.email}`
                  : "Log in to view history, scheduling, and performance."}
              </Lead>
            </div>
            {user && isAdminEmail(user.email) ? (
              <div className="mt-6">
                <Link
                  href="/admin"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900"
                >
                  Go to Admin
                </Link>
              </div>
            ) : null}

            {!user ? (
              <div className="mt-6 flex gap-3">
                <Link
                  href="/login"
                  className="rounded-xl bg-[var(--ps-navy)] px-5 py-3 text-sm font-semibold text-white"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900"
                >
                  Sign up
                </Link>
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Link
              href="/schedule"
              className="rounded-xl bg-[var(--ps-navy)] px-5 py-3 text-sm font-semibold text-white"
            >
              Request a service day
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900"
            >
              New request
            </Link>
          </div>

          {user && latestRequest?.data ? (
            <div className="mb-6 rounded-3xl border border-slate-200 bg-[var(--ps-mist)] p-6 text-sm text-slate-700">
              <div className="text-sm font-semibold text-slate-900">Latest scheduling request</div>
              <div className="mt-1">
                Preferred day: <span className="font-semibold">{latestRequest.data.preferred_day}</span>
              </div>
              <div className="mt-1">
                Status: <span className="font-semibold">{latestRequest.data.status}</span>
              </div>
              {latestRequest.data.status === "approved" ? (
                <div className="mt-1">
                  Assigned: <span className="font-semibold">{latestRequest.data.assigned_day}</span>{" "}
                  <span className="text-slate-500">({latestRequest.data.assigned_window || "time window TBD"})</span>
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <H2>Upcoming service</H2>
              <p className="mt-2 text-sm text-slate-600">
                Coming next: scheduling + approvals.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <H2>Service history</H2>
              <p className="mt-2 text-sm text-slate-600">
                Coming next: visits, notes, readings, and photos.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <H2>Performance</H2>
              <p className="mt-2 text-sm text-slate-600">
                Coming next: on-time rate, exceptions, and response metrics.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-[var(--ps-mist)] p-6 text-sm text-slate-700">
            Portal v1 will support: account history, scheduling requests (approval-based), and
            documented service performance.
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
