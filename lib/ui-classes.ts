/** Shared Tailwind class fragments — restrained, premium SaaS (depth without neon). */
/**
 * Avoid `100vw` in max-width math — it includes the scrollbar gutter and often causes 1–17px
 * horizontal overflow on mobile. Gutters come from `px-*` + `max-w-7xl`; at 2xl we cap at 92rem.
 */
export const sectionContainer =
  "mx-auto w-full min-w-0 max-w-7xl 2xl:max-w-[92rem] px-4 sm:px-6 lg:px-8 2xl:px-12";

/** Standard vertical rhythm between major bands — tighter than marketing-default, still breathable */
export const sectionY =
  "py-10 sm:py-12 lg:py-14 xl:py-16 2xl:py-[4.75rem]";

export const proseBody =
  "max-w-prose text-pretty text-[15px] leading-relaxed text-slate-300 sm:text-base";

export const glassPanel =
  "rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_20px_50px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl";

export const glassPanelHover =
  "transition-[border-color,background-color,box-shadow] duration-200 ease-out hover:border-white/[0.12] hover:bg-white/[0.045] hover:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_24px_50px_-20px_rgba(0,0,0,0.55)]";

/** Primary — solid, confident; hover is a shade shift, not a glow bloom */
export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-blue-500 active:bg-blue-600";

export const btnPrimaryHero =
  "inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-[15px] font-medium text-white shadow-sm transition-colors duration-200 hover:bg-blue-500 active:bg-blue-600";

export const btnSecondary =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-slate-100 shadow-sm transition-colors duration-200 hover:border-white/[0.18] hover:bg-white/[0.07] active:bg-white/[0.05]";

export const linkSubtle =
  "text-sm font-medium text-slate-400 underline-offset-4 transition-colors duration-200 hover:text-slate-200";
