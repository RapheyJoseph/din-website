import {
  type LucideIcon,
  Accessibility,
  Gauge,
  GitBranch,
  Play,
  Terminal,
  PlugZap,
  Send,
  Zap,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const coreServices = [
  {
    title: "Manual QA Testing",
    description:
      "Structured exploratory and scenario-based testing that catches user-facing defects before release.",
  },
  {
    title: "Automation Testing",
    description:
      "Reliable test suites built for speed, coverage, and confidence across repeated release cycles.",
  },
  {
    title: "Website Testing",
    description:
      "Cross-browser, responsive, and functional QA to keep web experiences stable and high-performing.",
  },
  {
    title: "Mobile App Testing",
    description:
      "End-to-end validation for iOS and Android apps focused on performance, usability, and reliability.",
  },
  {
    title: "API Testing",
    description:
      "Contract, integration, and error-path testing that verifies data integrity and backend behavior.",
  },
  {
    title: "Accessibility Audits",
    description:
      "WCAG-driven accessibility reviews to ensure inclusive user experiences and compliance readiness.",
  },
  {
    title: "Performance Testing",
    description:
      "Load, stress, and baseline analysis to identify bottlenecks and improve product responsiveness.",
  },
];

export const stats = [
  {
    title: "10+ Projects Contributed To",
    description:
      "Supporting QA, delivery, and product-focused initiatives across multiple environments.",
  },
  {
    title: "Enterprise Delivery Exposure",
    description:
      "Experience across telecom, retail, SaaS, and cross-functional delivery ecosystems.",
  },
  {
    title: "Automation-Ready QA",
    description:
      "Structured testing processes designed to scale into CI/CD automation workflows.",
  },
  {
    title: "Product & QA Collaboration",
    description:
      "Clear communication between QA, development, and product stakeholders.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Within two sprints, Daily IT Needs rebuilt our regression suite and gave us release sign-off we could defend to the board. Hotfix volume dropped measurably.",
    name: "Sarah Chen",
    role: "VP of Product",
    company: "Northbridge Payments",
  },
  {
    quote:
      "Our Cypress suite was flaky and slow. Daily IT Needs refactored the framework, added proper reporting in CI, and we went from days to hours for regression.",
    name: "Marcus Webb",
    role: "Director of Engineering",
    company: "HelixCart B2B SaaS",
  },
  {
    quote:
      "They operate like an embedded QA org—clear comms, actionable bug reports, and accessibility work that stuck through redesigns.",
    name: "Priya Natarajan",
    role: "Chief Technology Officer",
    company: "VitalStream Health",
  },
];

export type TechStackItem = {
  name: string;
  description: string;
  Icon: LucideIcon;
  accent: string;
};

export const techStack: TechStackItem[] = [
  {
    name: "Cypress",
    description: "Stable UI automation with flake-resistant patterns and CI-ready reporting.",
    Icon: Zap,
    accent: "from-blue-950/45 to-slate-950/25",
  },
  {
    name: "Playwright",
    description: "Cross-browser E2E coverage with parallelism and trace-backed debugging.",
    Icon: Play,
    accent: "from-indigo-950/40 to-slate-950/30",
  },
  {
    name: "Postman",
    description: "Collections, environments, and monitors for contract and integration APIs.",
    Icon: Send,
    accent: "from-slate-800/40 to-blue-950/25",
  },
  {
    name: "CI/CD Pipelines",
    description: "Quality gates that align with your deploy cadence and environment strategy.",
    Icon: GitBranch,
    accent: "from-slate-800/35 to-indigo-950/30",
  },
  {
    name: "GitHub Actions",
    description: "Workflow-native test runs, artifacts, and branch protection you can trust.",
    Icon: Terminal,
    accent: "from-slate-900/40 to-slate-950/30",
  },
  {
    name: "Accessibility Testing",
    description: "Systematic WCAG audits with prioritized remediation for product and design.",
    Icon: Accessibility,
    accent: "from-blue-950/35 to-slate-900/25",
  },
  {
    name: "Performance Testing",
    description: "Load profiles, SLO alignment, and bottleneck analysis under realistic traffic.",
    Icon: Gauge,
    accent: "from-slate-800/35 to-blue-950/20",
  },
  {
    name: "API Testing",
    description: "Contract, security-relevant, and negative-path coverage across services.",
    Icon: PlugZap,
    accent: "from-indigo-950/40 to-blue-950/25",
  },
];

export const faqs = [
  {
    question: "How quickly can Daily IT Needs start a QA engagement?",
    answer:
      "Most teams are onboarded within 3-5 business days with a tailored QA plan, scope, and delivery timeline.",
  },
  {
    question: "Do you integrate with existing CI/CD pipelines?",
    answer:
      "Yes. We integrate automated tests into your current pipeline and align reporting with your release workflow.",
  },
  {
    question: "Can Daily IT Needs work as an embedded QA team?",
    answer:
      "Absolutely. We collaborate with your product and engineering teams through sprint rituals and release gates.",
  },
  {
    question: "What tools do you use for automation?",
    answer:
      "Our stack includes Cypress, Playwright, API testing tools, and custom frameworks based on your platform needs.",
  },
];
