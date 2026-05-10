"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  btnPrimaryHero,
  btnSecondary,
  glassPanel,
  linkSubtle,
  proseBody,
} from "@/lib/ui-classes";

const trustPoints = [
  "Fewer production incidents",
  "Faster regression feedback",
  "Executive-ready quality reporting",
];

export function HeroSection() {
  return (
    <div className="relative w-full min-w-0 max-w-full overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1] overflow-hidden md:overflow-visible"
      >
        <div className="absolute -right-10 top-[-10%] size-[min(240px,72%)] rounded-full bg-blue-950/45 blur-[80px] sm:-right-24 sm:size-[min(320px,75%)] lg:-right-28 lg:h-[min(420px,55vh)] lg:w-[min(420px,70%)] lg:blur-[100px]" />
        <div className="absolute -left-14 bottom-[-8%] size-48 rounded-full bg-slate-800/35 blur-[72px] md:-left-28 md:h-64 md:w-64 md:blur-[88px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid w-full min-w-0 max-w-full items-start gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10 xl:gap-12 2xl:gap-14"
      >
        <div className="min-w-0 max-w-full">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400"
          >
            QA built for product velocity
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="mt-5 text-balance break-words text-[clamp(1.8125rem,6.2vw,2.25rem)] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.06] xl:text-6xl xl:leading-[1.05]"
          >
            <span className="block">Ship releases your customers feel -</span>
            <span className="mt-1 block bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text text-transparent sm:mt-1.5">
              not fear.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.11, duration: 0.45 }}
            className={`${proseBody} mt-5 max-w-xl text-slate-300 lg:max-w-2xl`}
          >
            Daily IT Needs helps modern software teams deliver stable, reliable releases through structured QA, automation, and engineering-focused testing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.45 }}
            className="mt-6 flex w-full min-w-0 max-w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <Link
              href="/contact"
              className={`${btnPrimaryHero} box-border w-full max-w-full shrink-0 justify-center sm:w-auto sm:max-w-none`}
            >
              Book a strategy call
            </Link>
            <Link
              href="/services"
              className={`${btnSecondary} box-border w-full max-w-full shrink-0 justify-center px-7 py-3 text-[15px] sm:w-auto sm:max-w-none`}
            >
              Explore the stack
            </Link>
            <Link href="/about" className={`${linkSubtle} self-center sm:ml-2`}>
              See how we work →
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.4 }}
            className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-slate-500"
          >
            For teams who treat quality as a growth lever—not a checkbox
          </motion.p>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.09, duration: 0.45 }}
          className={`${glassPanel} relative min-w-0 max-w-full overflow-hidden p-6 sm:p-7 lg:p-8`}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-blue-950/20"
          />
          <div className="relative">
            <h2 className="text-lg font-semibold tracking-tight text-white">
              Outcomes that compound
            </h2>
            <ul className="mt-5 space-y-3.5">
              {trustPoints.map((line, i) => (
                <li
                  key={line}
                  className="flex gap-3 border-b border-white/[0.06] pb-3 text-sm leading-relaxed text-slate-300 last:border-0 last:pb-0"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-xs font-medium text-slate-300">
                    {i + 1}
                  </span>
                  <span className="min-w-0">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 max-w-full rounded-xl border border-white/[0.08] bg-slate-950/40 p-3.5 sm:p-4">
              <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                Plays nice with your stack
              </p>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-400">
                Slack/Teams, Jira/Linear, GitHub Actions—quality signals where your team
                already lives.
              </p>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </div>
  );
}
