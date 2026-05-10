import { Mail } from "lucide-react";
import Link from "next/link";
import { BrandLogoLink } from "@/components/brand/brand-logo";
import { IconGitHub, IconLinkedIn, IconX } from "@/components/icons/social-icons";
import { sectionContainer } from "@/lib/ui-classes";

const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    Icon: IconLinkedIn,
  },
  {
    label: "X",
    href: "https://x.com",
    Icon: IconX,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    Icon: IconGitHub,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-slate-950/95">
      <div className={`${sectionContainer} py-11 lg:py-14 2xl:py-16`}>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] xl:gap-12">
          <div className="max-w-md">
            <BrandLogoLink variant="footer" className="flex-wrap" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Enterprise-grade QA and test automation for teams where release quality is a
              board-level concern—from discovery through production sign-off.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {social.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-300 transition-colors duration-200 hover:border-white/[0.14] hover:bg-white/[0.08] hover:text-white"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
              <a
                href="mailto:hello@dailyitneeds.com"
                aria-label="Email"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-300 transition-colors duration-200 hover:border-white/[0.14] hover:bg-white/[0.08] hover:text-white"
              >
                <Mail className="size-[18px]" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link className="transition hover:text-white" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a className="transition hover:text-white" href="mailto:hello@dailyitneeds.com">
                  hello@dailyitneeds.com
                </a>
              </li>
              <li className="leading-relaxed">
                Quality engineering engagements,
                <br />
                automation programs, and advisory.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-5">
        <div
          className={`${sectionContainer} flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:text-sm`}
        >
          <p>© {new Date().getFullYear()} Daily IT Needs. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Independent QA · Automation · Release governance
          </p>
        </div>
      </div>
    </footer>
  );
}
