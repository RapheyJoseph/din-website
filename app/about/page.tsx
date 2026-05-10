import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Quote } from "lucide-react";
import { IconLinkedIn } from "@/components/icons/social-icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { glassPanel, glassPanelHover } from "@/lib/ui-classes";

const LINKEDIN_RAPHEY_RECOMMENDATIONS =
  "https://www.linkedin.com/in/rapheyjoseph/details/recommendations/";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, vision, and quality-first philosophy behind Daily IT Needs—premium QA for modern software delivery.",
};

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Started with a focused mission to help product teams release with confidence through rigorous QA.",
  },
  {
    year: "2022",
    title: "Automation Excellence",
    description:
      "Expanded into Cypress-based automation and API test strategy for high-growth SaaS clients.",
  },
  {
    year: "2024",
    title: "Accessibility & Performance Practice",
    description:
      "Added specialist services in accessibility and performance to support enterprise-grade quality.",
  },
  {
    year: "Today",
    title: "Trusted QA Partner",
    description:
      "Supporting startups and scale-ups as a long-term QA function with measurable quality outcomes.",
  },
];

const founderProfile = {
  name: "Shaheryar Malik",
  role: "VP Operations / Product & Delivery Leadership",
  bio: "12+ years of enterprise delivery and product leadership experience across telecom, retail, SaaS, and broader enterprise ecosystems. Leads product delivery, cloud modernization, and cross-functional execution with strong QA collaboration and scalable release operations.",
  specialties: [
    "Product Delivery",
    "Operational Leadership",
    "Cloud Modernization",
    "Enterprise Coordination",
    "Stakeholder Management",
    "Agile Execution",
  ],
  linkedin: "https://www.linkedin.com/in/shaheryar-malik-436398163/",
  email: "shaheryarmalik82@gmail.com",
  image: "/leadership/shaheryar-malik.png",
  imagePosition: "center 24%",
  imageScale: 1,
};

const qaLeadProfile = {
  name: "Raphey Joseph",
  role: "QA & Automation Lead",
  bio: "QA and automation specialist with delivery exposure across UKPN, REED.ai, Vodafone, Phaidon, and Brawl Stars initiatives. Works across manual QA, regression quality gates, automation architecture, and release validation with Agile/Scrum product and engineering teams.",
  specialties: [
    "Manual QA",
    "Cypress",
    "Playwright",
    "API Testing",
    "Accessibility Auditing",
    "Automation Testing",
  ],
  linkedin: "https://www.linkedin.com/in/rapheyjoseph/",
  email: "rapheyjosephsohtra@gmail.com",
  image: "/leadership/raphey-joseph.png",
  /** Anchor toward top so hair / head clearance reads like a polished headshot without stretching */
  imagePosition: "center 6%",
};

const recommendations = [
  {
    quote:
      'I worked with Raphey as a QA specialist across multiple projects. He is exceptionally knowledgeable and diligent—his structured QA surfaced critical issues early and kept release quality consistently high.',
    name: "Tobi",
    role: "Senior Product Manager | AI/ML | Business Analysis",
    relationship: "Worked with Raphey on the same team",
    initials: "T",
    linkedinHref: LINKEDIN_RAPHEY_RECOMMENDATIONS,
  },
  {
    quote: "True professional. I’ll highly recommend.",
    name: "Gary Pearson",
    role: "Lead Product Designer – Craftsman",
    relationship: "Worked with Raphey across industry collaboration",
    initials: "GP",
    linkedinHref: LINKEDIN_RAPHEY_RECOMMENDATIONS,
  },
  {
    quote:
      "Working closely with Raphey, I've seen professionalism, sound judgment, and clear communication—with a mindset that aligns teams efficiently toward shared goals.",
    name: "Vijay Bhaskar Sharma",
    role: "Senior Software Engineer",
    relationship: "Professional engineering collaboration",
    initials: "VS",
    linkedinHref: LINKEDIN_RAPHEY_RECOMMENDATIONS,
  },
];

export default function AboutPage() {
  return (
    <SectionShell variant="hero">
      <Reveal>
        <SectionHeading
          badge="About"
          title="Quality assurance as a strategic capability—not a late-stage gate"
          description="Daily IT Needs blends engineering discipline with product sense so releases are fast, explainable, and safe for the customers who depend on them."
        />
      </Reveal>

      <div className="mt-9 grid min-w-0 w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
        <Reveal>
          <article className={`${glassPanel} h-full p-5 sm:p-6`}>
            <h3 className="text-xl font-semibold tracking-tight text-white">Mission</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Deliver dependable QA systems that minimize release risk and ensure products
              perform reliably in real-world usage.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.06}>
          <article className={`${glassPanel} h-full p-5 sm:p-6`}>
            <h3 className="text-xl font-semibold tracking-tight text-white">Vision</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Become the most trusted independent QA partner for digital businesses where
              velocity, resilience, and user trust are inseparable.
            </p>
          </article>
        </Reveal>
      </div>

      <Reveal className="mt-4 lg:mt-5">
        <article className={`${glassPanel} p-5 sm:p-7`}>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Leadership perspective
          </h3>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
            Daily IT Needs was built by QA leaders who watched teams fracture under unreliable
            releases and inconsistent testing. The practice is intentionally
            opinionated about transparency, measurable outcomes, and direct alignment
            with engineering leadership—not checkbox activity.
          </p>
        </article>
      </Reveal>

      <Reveal className="mt-4 lg:mt-5">
        <article className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/50 p-5 sm:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-48 w-48 translate-x-1/4 -translate-y-1/4 rounded-full bg-blue-950/30 blur-3xl"
          />
          <h3 className="relative text-xl font-semibold tracking-tight text-white">
            Why QA is a business system
          </h3>
          <p className="relative mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
            Quality assurance protects revenue, compliance posture, and brand reputation.
            When done well, it is the control layer that lets product and GTM move
            aggressively—without paying for defects in production.
          </p>
        </article>
      </Reveal>

      <div className="mt-11 lg:mt-12">
        <SectionHeading
          badge="Leadership"
          title="Leadership Behind DIN"
          description="Built by professionals with experience across product delivery, quality engineering, and modern release operations."
        />
        <Reveal className="mt-7">
          <article
            className={`${glassPanel} group relative h-full overflow-hidden p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:p-6 lg:p-7`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-blue-950/25 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-85"
            />
            <div className="relative grid min-w-0 w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:items-center md:gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-10">
              <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/[0.12] bg-slate-900/70 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.9),0_0_0_1px_rgba(59,130,246,0.16)] md:mx-0 md:max-w-none">
                <Image
                  src={founderProfile.image}
                  alt={`${founderProfile.name} portrait`}
                  width={900}
                  height={900}
                  priority
                  className="aspect-[4/5] h-[13.5rem] w-full object-cover sm:h-[15rem] md:aspect-auto md:h-[17.5rem] lg:h-[19rem]"
                  sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, (min-width: 640px) 280px, 100vw"
                  quality={94}
                  style={{
                    objectPosition: founderProfile.imagePosition,
                    transform: `scale(${founderProfile.imageScale})`,
                    transformOrigin: "center top",
                  }}
                />
              </div>

              <div className="min-w-0 text-center md:flex md:flex-col md:justify-center md:text-left">
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem] lg:text-[1.85rem]">
                  {founderProfile.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-blue-200/85 sm:text-base">
                  {founderProfile.role}
                </p>

                <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-300 md:mx-0 md:mt-5 md:max-w-none">
                  {founderProfile.bio}
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start md:gap-2.5">
                  {founderProfile.specialties.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-2.5 md:justify-start">
                  <a
                    href={founderProfile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-white/[0.18] hover:bg-white/[0.08] hover:text-white"
                  >
                    <IconLinkedIn className="size-4" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${founderProfile.email}`}
                    aria-label={`Email ${founderProfile.name}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-200 shadow-sm transition-colors duration-200 ease-out hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white hover:shadow-[0_8px_28px_-14px_rgba(15,23,42,0.75)] active:bg-white/[0.06]"
                  >
                    <Mail className="size-4" strokeWidth={1.8} />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      <div className="mt-10 lg:mt-12">
        <SectionHeading
          badge="QA Leadership"
          title="QA & Automation Leadership"
          description="Operational quality leadership focused on scalable testing systems, release discipline, and developer-aligned execution."
        />
        <Reveal className="mt-7">
          <article
            className={`${glassPanel} group relative h-full overflow-hidden p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:p-6 lg:p-7`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-blue-950/25 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-85"
            />
            <div className="relative grid min-w-0 w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:items-center md:gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-10">
              <div className="relative isolate mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/[0.12] bg-slate-900/70 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.9),0_0_0_1px_rgba(59,130,246,0.16)] md:mx-0 md:max-w-none">
                <div className="relative h-[13.5rem] w-full overflow-hidden sm:h-[15rem] md:h-[17.25rem] lg:h-[18.75rem]">
                  <Image
                    src={qaLeadProfile.image}
                    alt={`${qaLeadProfile.name} portrait`}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, (min-width: 640px) 280px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: qaLeadProfile.imagePosition }}
                    quality={94}
                  />
                </div>
              </div>

              <div className="min-w-0 text-center md:flex md:flex-col md:justify-center md:text-left">
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem] lg:text-[1.85rem]">
                  {qaLeadProfile.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-blue-200/85 sm:text-base">
                  {qaLeadProfile.role}
                </p>

                <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-300 md:mx-0 md:mt-5 md:max-w-none">
                  {qaLeadProfile.bio}
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start md:gap-2.5">
                  {qaLeadProfile.specialties.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-2.5 md:justify-start">
                  <a
                    href={qaLeadProfile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-white/[0.18] hover:bg-white/[0.08] hover:text-white"
                  >
                    <IconLinkedIn className="size-4" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${qaLeadProfile.email}`}
                    aria-label={`Email ${qaLeadProfile.name}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-200 shadow-sm transition-colors duration-200 ease-out hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white hover:shadow-[0_8px_28px_-14px_rgba(15,23,42,0.75)] active:bg-white/[0.06]"
                  >
                    <Mail className="size-4" strokeWidth={1.8} />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      <div className="mt-11 lg:mt-12">
        <SectionHeading
          badge="Recommendations"
          title="Professional Recommendations"
          description="Real feedback from professionals, collaborators, and leadership teams."
        />
        <div className="mt-7 grid min-w-0 w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {recommendations.map((item, index) => (
            <Reveal key={`${item.name}-${index}`} delay={index * 0.05}>
              <article
                className={`${glassPanel} ${glassPanelHover} group relative flex h-full min-h-[17.5rem] flex-col overflow-hidden p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:min-h-0 sm:p-6`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-blue-950/20 opacity-50 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="relative flex flex-1 flex-col">
                  <Quote
                    className="mb-4 size-8 shrink-0 text-slate-600 transition-colors duration-200 group-hover:text-slate-500 sm:size-9"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <p className="flex-1 text-pretty text-[15px] leading-relaxed text-slate-300">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-white/[0.06] pt-5">
                    <div className="flex gap-3">
                      <div
                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-slate-900/85 text-[11px] font-semibold uppercase tracking-wide text-slate-200"
                        aria-hidden
                      >
                        {item.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">{item.name}</p>
                        <p className="mt-1 text-xs leading-snug text-slate-400">{item.role}</p>
                        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
                          {item.relationship}
                        </p>
                        <a
                          href={item.linkedinHref}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors duration-200 hover:text-slate-200"
                        >
                          <IconLinkedIn className="size-3.5" aria-hidden />
                          LinkedIn recommendation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-11 lg:mt-12">
        <SectionHeading
          badge="Timeline"
          title="Depth built over consecutive release cycles"
          description="How our practice matured alongside the teams we support."
        />
        <div className="mt-7 space-y-3.5">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div
                className={`${glassPanel} grid gap-3 p-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6 sm:p-6`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:pt-1">
                  {item.year}
                </p>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
