import type { Metadata } from "next";
import {
  Activity,
  Bot,
  Gauge,
  Globe,
  MonitorSmartphone,
  PlugZap,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ServiceCard } from "@/components/ui/service-card";
import { coreServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Daily IT Needs QA services: manual testing, automation, API validation, accessibility audits, and performance testing.",
};

const icons = [
  ShieldCheck,
  Bot,
  Globe,
  MonitorSmartphone,
  PlugZap,
  Activity,
  Gauge,
];

export default function ServicesPage() {
  return (
    <SectionShell variant="hero">
      <Reveal>
        <SectionHeading
          badge="Services"
          title="Engineering-led testing aligned to enterprise expectations"
          description="From manual depth to automated scale, every engagement is structured around risk, release velocity, and customer trust."
        />
      </Reveal>
      <div className="mt-9 grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-5 2xl:gap-6">
        {coreServices.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05}>
            <ServiceCard
              title={service.title}
              description={service.description}
              Icon={icons[index]}
            />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
