"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandLogoLink } from "@/components/brand/brand-logo";
import { navLinks } from "@/lib/data";
import { btnPrimary, sectionContainer } from "@/lib/ui-classes";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  /** Lock document scroll (html + body); iOS-friendly without layout jump when possible. */
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyOverflow: body.style.overflow,
    };
    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prev.htmlOverflow;
      html.style.overscrollBehavior = prev.htmlOverscroll;
      body.style.overflow = prev.bodyOverflow;
    };
  }, [open]);

  /** Close on Escape, document scroll (not drawer scroll), and route changes. */
  useEffect(() => {
    if (!open) return;

    const ignoreScrollCloseUntil = performance.now() + 180;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    const onDocumentScroll = (e: Event) => {
      if (performance.now() < ignoreScrollCloseUntil) return;
      const drawer = document.getElementById("mobile-nav");
      const target = e.target;
      if (target instanceof Node && drawer?.contains(target)) return;
      closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("scroll", onDocumentScroll, { capture: true, passive: true });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("scroll", onDocumentScroll, true);
    };
  }, [open, closeMenu]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full min-w-0 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
      <nav
        className={`${sectionContainer} flex items-center justify-between gap-3 py-3.5 sm:gap-4 sm:py-4`}
      >
        <BrandLogoLink variant="navbar" className="mr-2 min-w-0" />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative px-3 py-2">
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
          <Link href="/contact" className={`${btnPrimary} ml-3 px-5 text-sm`}>
            Schedule QA review
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:border-white/20 hover:bg-white/[0.08] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 touch-none overscroll-none md:hidden"
            role="presentation"
          >
            {/* Backdrop: taps close menu; does not scroll */}
            <div
              aria-hidden
              className="absolute inset-0 z-0 cursor-default bg-black/60 backdrop-blur-sm"
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto absolute left-4 right-4 top-[max(4.25rem,env(safe-area-inset-top)+3.5rem)] z-10 max-h-[min(70vh,calc(100dvh-6rem))] touch-pan-y overflow-y-auto overflow-x-clip rounded-2xl border border-white/10 bg-slate-950/96 p-2 shadow-2xl shadow-black/50"
            >
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block min-h-12 rounded-xl px-4 py-3.5 text-[15px] font-medium leading-snug transition-colors duration-200 active:bg-white/[0.06] ${
                      isActive ? "bg-white/[0.08] text-white" : "text-slate-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`${btnPrimary} mx-2 my-2 block min-h-12 w-[calc(100%-1rem)] max-w-full text-center`}
              >
                Schedule QA review
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
