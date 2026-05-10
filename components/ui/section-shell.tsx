import { ReactNode } from "react";
import { sectionContainer, sectionY } from "@/lib/ui-classes";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** default: standard section rhythm; hero: top-heavy for landing; tight: compact bands */
  variant?: "default" | "hero" | "tight" | "none";
};

const variantPadding: Record<NonNullable<SectionShellProps["variant"]>, string> = {
  default: sectionY,
  hero: "pt-14 pb-9 sm:pt-16 sm:pb-10 lg:pt-[4.25rem] lg:pb-10 xl:pt-20 xl:pb-11 2xl:pt-[5rem] 2xl:pb-12",
  tight: "py-8 sm:py-10 lg:py-12",
  none: "",
};

export function SectionShell({
  children,
  className = "",
  id,
  variant = "default",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`${sectionContainer} ${variantPadding[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
