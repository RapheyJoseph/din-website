import { proseBody } from "@/lib/ui-classes";

type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
  center?: boolean;
  /** Subtle graded headline for marketing sections; inner pages stay solid white by default. */
  vibrantTitle?: boolean;
};

export function SectionHeading({
  badge,
  title,
  description,
  center = false,
  vibrantTitle = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        center
          ? "mx-auto min-w-0 max-w-3xl text-center lg:max-w-4xl"
          : "min-w-0 max-w-3xl lg:max-w-4xl"
      }
    >
      <span className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
        {badge}
      </span>
      <h2
        className={`mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15] xl:text-5xl xl:leading-[1.1] ${
          vibrantTitle
            ? "bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
            : "text-white"
        }`}
      >
        {title}
      </h2>
      <p
        className={`${proseBody} mt-4 text-pretty text-slate-400 ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
      >
        {description}
      </p>
    </div>
  );
}
