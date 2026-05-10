"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { glassPanel } from "@/lib/ui-classes";

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${glassPanel} overflow-hidden transition-colors duration-300 hover:border-white/15`}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left sm:px-6 sm:py-4"
      >
        <span className="text-[15px] font-medium leading-snug text-white sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-blue-300/80 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="border-t border-white/[0.06] px-5 pb-4 pt-3 text-sm leading-relaxed text-slate-400 sm:px-6 sm:pb-5">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}
