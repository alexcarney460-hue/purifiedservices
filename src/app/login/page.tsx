import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Container, H1, Lead, Section } from "@/components/ui";
import { signIn } from "@/app/auth/actions";

export const metadata = { title: "Log in" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-2xl">
            <H1>Log in</H1>
            <div className="mt-5">
              <Lead>Access your service history and scheduling requests.</Lead>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            {error ? (
              <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                {decodeURIComponent(error)}
              </div>
            ) : null}

            <form action={signIn} className="grid gap-4">
              <label className="grid gap-2 text-sm">
                <span className="font-semibold text-slate-900">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--ps-aqua)]"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="font-semibold text-slate-900">Password</span>
                <input
                  name="password"
                  type="password"
                  required
                  className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--ps-aqua)]"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-[var(--ps-navy)] px-5 text-sm font-semibold text-white"
              >
                Log in
              </button>
            </form>

            <div className="mt-4 text-sm text-slate-600">
              Need an account?{" "}
              <Link href="/signup" className="font-semibold text-[var(--ps-teal)]">
                Sign up
              </Link>
              .
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
