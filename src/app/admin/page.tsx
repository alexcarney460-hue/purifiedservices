import Link from "next/link";
import { redirect } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Container, H1, H2, Lead, Section } from "@/components/ui";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/authz";

export const metadata = { title: "Admin" };

export default async function AdminPage() {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email;

  if (!data.user) redirect("/login");
  if (!isAdminEmail(email)) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Admin</H1>
            <div className="mt-5">
              <Lead>Approvals, accounts, and service operations.</Lead>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/admin/requests"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300"
            >
              <H2>Requests</H2>
              <p className="mt-2 text-sm text-slate-600">Approve scheduling and service requests.</p>
            </Link>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <H2>Accounts</H2>
              <p className="mt-2 text-sm text-slate-600">Coming next: users and properties/sites.</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <H2>Visits</H2>
              <p className="mt-2 text-sm text-slate-600">Coming next: visit logs, readings, photos.</p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-[var(--ps-mist)] p-6 text-sm text-slate-700">
            Signed in as <span className="font-semibold">{email}</span>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
