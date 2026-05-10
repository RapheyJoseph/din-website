"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { techStack } from "@/lib/data";
import { glassPanel, glassPanelHover } from "@/lib/ui-classes";

export function TechStackSection() {
  return (
    <div>
      <SectionHeading
        vibrantTitle
        badge="Technology & QA stack"
        title="Tooling that matches how serious teams ship"
        description="We standardize on modern automation and observability patterns, then align execution with your CI/CD, environments, and compliance posture."
      />
      <div className="mt-7 grid min-w-0 w-full grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 2xl:gap-5">
        {techStack.map((item, index) => {
          const Icon = item.Icon;
          return (
            <Reveal key={item.name} delay={index * 0.04}>
              <motion.div
                whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className={`${glassPanel} ${glassPanelHover} group relative h-full min-w-0 max-w-full overflow-hidden p-5 sm:p-6`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${item.accent} opacity-50 blur-2xl transition-opacity duration-300 group-hover:opacity-70`}
                />
                <div className="relative flex flex-col gap-3">
                  <div className="inline-flex size-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-slate-300 transition-[border-color,background-color,color] duration-200 group-hover:border-white/[0.12] group-hover:bg-white/[0.06] group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400 transition group-hover:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
