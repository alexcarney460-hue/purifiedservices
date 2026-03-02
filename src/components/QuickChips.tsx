"use client";

export default function QuickChips({
  onPick,
}: {
  onPick: (value: string) => void;
}) {
  const chips = [
    "Weekly pool service",
    "Repair request",
    "Green pool recovery",
    "Commercial walkthrough quote",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onPick(c)}
          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
        >
          {c}
        </button>
      ))}
    </div>
  );
}
