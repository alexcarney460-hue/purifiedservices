import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

type CookieToSet = { name: string; value: string; options?: Record<string, unknown> };

type CookieStoreLike = {
  getAll: () => Array<{ name: string; value: string }>;
  set: (name: string, value: string, options?: Record<string, unknown>) => void;
};

async function getCookieStore(): Promise<CookieStoreLike> {
  // Next.js typing differs by version: cookies() may return ReadonlyRequestCookies
  // or Promise<ReadonlyRequestCookies>. Support both.
  const maybePromise = cookies() as unknown;

  const hasThen = (v: unknown): v is Promise<unknown> =>
    typeof (v as { then?: unknown } | null)?.then === "function";

  const store = hasThen(maybePromise) ? await maybePromise : maybePromise;

  return store as CookieStoreLike;
}

export async function createSupabaseServerClient() {
  const cookieStore = await getCookieStore();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );
}
