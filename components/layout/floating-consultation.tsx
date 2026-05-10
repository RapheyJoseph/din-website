"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { btnPrimary } from "@/lib/ui-classes";

export function FloatingConsultationButton() {
  return (
    <motion.div
      className="fixed bottom-5 right-4 z-40 sm:bottom-8 sm:right-8"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href="/contact" className={`${btnPrimary} sm:px-7`}>
        Book consultation
      </Link>
    </motion.div>
  );
}
