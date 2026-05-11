import type { QaOutcomeSnapshot } from "@/lib/data";
import { glassPanel, glassPanelHover } from "@/lib/ui-classes";

export function QaOutcomeCard({ outcome }: { outcome: QaOutcomeSnapshot }) {
  return (
    <article
      className={`${glassPanel} ${glassPanelHover} group relative flex h-full min-w-0 max-w-full flex-col overflow-hidden p-5 sm:p-6`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-0 h-24 w-24 rounded-full bg-blue-950/25 blur-2xl transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="relative flex min-h-0 flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {outcome.category}
        </p>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
          {outcome.headline}
        </h3>
        <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-slate-400 sm:text-base">
          {outcome.description}
        </p>
      </div>
    </article>
  );
}
