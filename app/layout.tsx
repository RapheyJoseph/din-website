import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { FloatingConsultationButton } from "@/components/layout/floating-consultation";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://din-dailyitneeds.vercel.app"),
  title: {
    default: "Daily IT Needs — Premium QA & Test Automation",
    template: "%s — Daily IT Needs",
  },
  description:
    "Daily IT Needs provides professional QA testing, automation engineering, performance validation, and consulting for modern software teams.",
  keywords: [
    "QA testing",
    "automation testing",
    "cypress automation",
    "website testing",
    "mobile app testing",
    "performance testing",
    "Daily IT Needs",
  ],
  applicationName: "Daily IT Needs",
  icons: {
    icon: [{ url: "/brand/logo-globe-512.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/brand/logo-globe-180.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Daily IT Needs",
    locale: "en_US",
    title: "Daily IT Needs — Premium QA & Test Automation",
    description:
      "Professional QA, test automation, and release confidence for enterprise and high-growth product teams.",
    images: [
      {
        url: "/brand/logo-globe-512.png",
        width: 512,
        height: 512,
        alt: "Daily IT Needs — globe mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily IT Needs — Premium QA & Test Automation",
    description:
      "Professional QA, test automation, and release confidence for modern software teams.",
    images: ["/brand/logo-globe-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased overflow-x-hidden`}
    >
      {/* Extensions often inject attributes on <body> before hydrate; suppress avoids false-positive mismatch warnings */}
      <body
        suppressHydrationWarning
        className="relative min-h-full text-slate-100"
      >
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[min(58vh,600px)] bg-gradient-to-b from-slate-900/90 via-slate-950/40 to-transparent" />
          <div className="absolute -left-36 top-[-8%] size-[min(32rem,90%)] rounded-full bg-blue-950/50 blur-[100px]" />
          <div className="absolute left-1/2 top-20 h-[min(22rem,70%)] w-[min(36rem,92%)] max-w-[44rem] -translate-x-1/2 rounded-full bg-indigo-950/35 blur-[88px]" />
          <div className="absolute right-[-12%] top-28 size-[min(24rem,88%)] rounded-full bg-slate-800/30 blur-[96px]" />
          <div className="absolute bottom-0 left-[18%] size-[min(22rem,55%)] rounded-full bg-slate-900/50 blur-[100px]" />
        </div>
        <Navbar />
        <main className="relative w-full min-w-0 overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingConsultationButton />
      </body>
    </html>
  );
}
