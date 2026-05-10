import { LucideIcon } from "lucide-react";
import { glassPanel, glassPanelHover } from "@/lib/ui-classes";

type ServiceCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <article
      className={`${glassPanel} ${glassPanelHover} group relative h-full overflow-hidden p-5 sm:p-6`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-blue-950/30 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="relative">
        <div className="inline-flex rounded-lg border border-white/[0.08] bg-white/[0.04] p-3 text-slate-300 transition-[border-color,background-color,color] duration-200 group-hover:border-white/[0.12] group-hover:bg-white/[0.06] group-hover:text-white">
          <Icon className="size-5" strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
          {description}
        </p>
      </div>
    </article>
  );
}
