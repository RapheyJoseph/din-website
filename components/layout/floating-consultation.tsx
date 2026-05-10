"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { btnPrimary } from "@/lib/ui-classes";

export function FloatingConsultationButton() {
  return (
    <motion.div
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex justify-center pointer-events-none sm:bottom-[max(2rem,env(safe-area-inset-bottom))] sm:left-auto sm:right-[max(1.25rem,env(safe-area-inset-right))] sm:justify-end"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/contact"
        className={`${btnPrimary} pointer-events-auto w-full max-w-[20rem] min-h-[44px] justify-center px-6 sm:w-auto sm:max-w-none sm:min-h-11 sm:px-7`}
      >
        Book consultation
      </Link>
    </motion.div>
  );
}
