import Link from "next/link";
import type { Metadata } from "next";
import {
  Activity,
  Bot,
  Bug,
  Gauge,
  ShieldCheck,
  TimerReset,
  Workflow,
} from "lucide-react";
import { HeroSection } from "@/components/home/hero-section";
import { TechStackSection } from "@/components/home/tech-stack-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { coreServices, faqs, stats, testimonials } from "@/lib/data";
import { FaqItem } from "@/components/ui/faq-item";
import {
  btnPrimaryHero,
  glassPanel,
  glassPanelHover,
  proseBody,
} from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ship with confidence: Daily IT Needs delivers enterprise QA, test automation, and release governance for modern software teams.",
};

const homeServiceIcons = [ShieldCheck, Bot, Activity, Bug, Workflow, Gauge, TimerReset];

export default function Home() {
  return (
    <>
      <SectionShell variant="hero">
        <HeroSection />
      </SectionShell>

      <SectionDivider />

      <SectionShell>
        <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 2xl:gap-5">
          {stats.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className={`${glassPanel} ${glassPanelHover} px-6 py-6 text-center`}>
                <p className="text-[1.05rem] font-semibold leading-snug tracking-tight text-white sm:text-[1.15rem]">
                  {item.title}
                </p>
                <p className="mx-auto mt-2.5 max-w-[34ch] text-sm leading-relaxed text-slate-400 sm:text-[0.95rem]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionDivider />

      <SectionShell>
        <SectionHeading
          vibrantTitle
          badge="Capabilities"
          title="Quality engineering for every surface your customers touch"
          description="Manual depth where human judgment matters, automation where repeatability wins—aligned to your roadmap, risk profile, and compliance expectations."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 2xl:gap-5">
          {coreServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.045}>
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={homeServiceIcons[index]}
              />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionDivider />

      <SectionShell>
        <TechStackSection />
      </SectionShell>

      <SectionDivider />

      <SectionShell>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <Reveal>
            <SectionHeading
              vibrantTitle
              badge="Operating model"
              title="A disciplined QA process that keeps leadership informed"
              description="We connect testing work to business impact—prioritized defects, traceability to requirements, and release readiness you can explain in minutes."
            />
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-300 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-slate-500" />
                Risk discovery, scope, and measurable quality objectives per release.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-slate-500" />
                Test design mapped to revenue-critical journeys and regulatory touchpoints.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-slate-500" />
                Manual plus automated execution with CI signals and environment discipline.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-slate-500" />
                Developer-ready reporting: reproductions, evidence, and severity rationale.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className={`${glassPanel} relative h-full overflow-hidden p-6 sm:p-7 lg:p-8`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-transparent"
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Automation signal
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                  Cypress automation that survives real-world UI change
                </h3>
                <p className={`${proseBody} mt-4`}>
                  Maintainable selectors, stable waits, and pipeline integrations so your
                  teams get fast, trusted feedback—not noisy flakes—before merges land on
                  main.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-slate-500">
                  Outcome: shorter cycle time, fewer rollbacks, and predictable release
                  windows for product and GTM.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionDivider />

      <SectionShell>
        <SectionHeading
          vibrantTitle
          badge="Client voices"
          title="What leaders say after partnering with Daily IT Needs"
          description="Representative engagement outcomes from product and engineering teams operating at scale."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-5 2xl:gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <TestimonialCard testimonial={item} />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionDivider />

      <SectionShell>
        <SectionHeading
          vibrantTitle
          badge="FAQ"
          title="Answers for teams evaluating QA partners"
          description="Practical questions about onboarding, tools, and how we integrate with your delivery model."
        />
        <div className="mt-7 space-y-3 sm:space-y-3.5">
          {faqs.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </SectionShell>

      <SectionShell variant="tight">
        <Reveal>
          <div className={`${glassPanel} relative overflow-hidden px-6 py-7 text-center sm:px-8 sm:py-8 lg:px-10 lg:py-10`}>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(30,58,138,0.15),transparent_55%)]"
            />
            <div className="relative">
              <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Make the next launch your calmest one yet
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-slate-400 sm:text-lg">
                Walk through your roadmap with a QA lead—automation, coverage, and the
                story you tell stakeholders when the release train accelerates.
              </p>
              <Link href="/contact" className={`${btnPrimaryHero} mt-6 sm:mt-8`}>
                Speak with an engineering lead
              </Link>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
