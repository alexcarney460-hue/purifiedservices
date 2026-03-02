"use client";

import { useMemo, useState } from "react";

type Role = "user" | "assistant";
type Msg = { role: Role; content: string };

type Intent = "faq" | "schedule" | "contact";

const phoneDisplay = "559-519-0335";

const faq: Array<{ q: string; a: string }> = [
  {
    q: "What areas do you service?",
    a: "Fresno, Clovis, and coverage across the Central Valley (scheduling-dependent).",
  },
  {
    q: "Do you work with commercial facilities?",
    a: "Yes—apartments/HOAs, hotels, schools, and gyms. Commercial service agreements are 12-month minimum.",
  },
  {
    q: "How fast do you respond?",
    a: "Same-day response for urgent issues (Mon–Sat).",
  },
  {
    q: "How do I request service?",
    a: `Use the Request Service form or text ${phoneDisplay}.`,
  },
];

function detectIntent(text: string): Intent {
  const t = text.toLowerCase();
  if (/(book|schedule|appointment|walkthrough|quote)/.test(t)) return "schedule";
  if (/(text|call|phone|contact)/.test(t)) return "contact";
  return "faq";
}

function answerFaq(text: string): string {
  const t = text.toLowerCase();
  const hit = faq
    .map((item) => {
      const score =
        (t.includes("area") && item.q.toLowerCase().includes("area") ? 2 : 0) +
        (t.includes("commercial") && item.q.toLowerCase().includes("commercial") ? 2 : 0) +
        (t.includes("respond") && item.q.toLowerCase().includes("respond") ? 2 : 0) +
        (t.includes("request") && item.q.toLowerCase().includes("request") ? 2 : 0);
      return { item, score };
    })
    .sort((a, b) => b.score - a.score)[0];

  if (hit?.score) return hit.item.a;

  return (
    "I can help with service questions or getting you scheduled. " +
    "Ask about commercial vs residential service, repair, coverage area, or response time."
  );
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi—I'm the Purified Services assistant. Ask a quick question or request an appointment.",
    },
  ]);

  const quickReplies = useMemo(
    () => [
      "Service areas?",
      "Commercial pool service?",
      "Same-day response?",
      "Schedule a walkthrough quote",
    ],
    []
  );

  function pushUser(text: string) {
    setMessages((m) => [...m, { role: "user", content: text }]);
  }

  function pushAssistant(text: string) {
    setMessages((m) => [...m, { role: "assistant", content: text }]);
  }

  function handle(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    pushUser(trimmed);

    const intent = detectIntent(trimmed);
    if (intent === "schedule") {
      pushAssistant(
        "To schedule, tell me: (1) commercial or residential, (2) city, (3) service needed, and (4) your preferred day/time window. " +
          "Or use the Request Service form and we’ll confirm availability."
      );
      return;
    }

    if (intent === "contact") {
      pushAssistant(`Fastest is text: ${phoneDisplay}. You can also use the Request Service form.`);
      return;
    }

    pushAssistant(answerFaq(trimmed));
  }

  return (
    <div className="fixed bottom-24 right-4 z-[55] lg:bottom-6">
      {open && (
        <div className="mb-3 w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <div>
              <div className="text-sm font-extrabold text-slate-950">Assistant</div>
              <div className="text-xs text-slate-500">FAQ + scheduling intake</div>
            </div>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              ✕
            </button>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-auto px-4 py-3">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  m.role === "assistant"
                    ? "mr-10 rounded-2xl bg-slate-50 px-3 py-2 text-sm text-slate-800"
                    : "ml-10 rounded-2xl bg-[var(--ps-navy)] px-3 py-2 text-sm text-white"
                }
              >
                {m.content}
              </div>
            ))}

            <div className="flex flex-wrap gap-2">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => handle(q)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form
            className="flex gap-2 border-t border-slate-100 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              handle(input);
              setInput("");
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--ps-aqua)]"
            />
            <button
              type="submit"
              className="h-11 rounded-xl bg-[var(--ps-navy)] px-4 text-sm font-semibold text-white"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--ps-navy)] px-4 py-3 text-sm font-semibold text-white shadow-lg"
        aria-label="Open assistant"
      >
        Chat
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
          ?
        </span>
      </button>
    </div>
  );
}
