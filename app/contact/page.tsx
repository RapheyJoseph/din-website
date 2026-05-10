import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { btnPrimary, glassPanel } from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Daily IT Needs for QA testing, automation strategy, and consulting. Book a consultation with our experts.",
};

export default function ContactPage() {
  return (
    <SectionShell variant="hero">
      <Reveal>
        <SectionHeading
          badge="Contact"
          title="Start a conversation with a QA practice lead"
          description="Share your roadmap, tech stack, and quality goals—we'll respond with a pragmatic assessment and engagement options."
        />
      </Reveal>

      <div className="mt-9 grid gap-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-14">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-4">
            <article className={`${glassPanel} p-5 sm:p-6`}>
              <h3 className="text-lg font-semibold tracking-tight text-white">Email</h3>
              <a
                href="mailto:hello@dailyitneeds.com"
                className="mt-3 inline-block break-all text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                hello@dailyitneeds.com
              </a>
            </article>
            <article className={`${glassPanel} p-5 sm:p-6`}>
              <h3 className="text-lg font-semibold tracking-tight text-white">Collaboration</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Engagements are structured with clear ownership, SLAs for triage, NDA
                templates, and stakeholder reviews at key milestones.
              </p>
            </article>
            <article className={`${glassPanel} relative overflow-hidden p-5 sm:p-6`}>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,138,0.12),transparent_55%)]"
              />
              <h3 className="relative text-lg font-semibold tracking-tight text-white">
                Plan your next quality uplift
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                Need a focused audit, automation rebuild, or embedded team? We&apos;ll map
                a program that fits your calendar and budget.
              </p>
              <Link href="/services" className={`${btnPrimary} relative mt-5`}>
                Review services
              </Link>
            </article>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
