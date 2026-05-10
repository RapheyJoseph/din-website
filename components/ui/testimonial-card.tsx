import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/data";
import { glassPanel, glassPanelHover } from "@/lib/ui-classes";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote
      className={`${glassPanel} ${glassPanelHover} group relative flex h-full min-w-0 max-w-full flex-col overflow-hidden p-5 sm:p-6`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-0 h-24 w-24 rounded-full bg-blue-950/25 blur-2xl transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="relative flex items-start justify-between gap-3">
        <Quote
          className="size-9 shrink-0 text-slate-600 transition-colors duration-200 group-hover:text-slate-500"
          strokeWidth={1.25}
        />
        <div className="flex gap-0.5" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="size-4 fill-amber-500/35 text-amber-500/45"
              strokeWidth={0}
            />
          ))}
        </div>
      </div>
      <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-slate-300 sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="relative mt-6 flex items-center gap-4 border-t border-white/[0.06] pt-5">
        <div
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-slate-800/80 text-sm font-medium text-slate-200"
          aria-hidden
        >
          {initials(testimonial.name)}
        </div>
        <div className="min-w-0">
          <cite className="not-italic">
            <span className="block truncate text-sm font-semibold text-white">
              {testimonial.name}
            </span>
            <span className="mt-0.5 block text-xs leading-snug text-slate-500">
              {testimonial.role} · {testimonial.company}
            </span>
          </cite>
        </div>
      </footer>
    </blockquote>
  );
}
