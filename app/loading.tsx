"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-10 py-8 shadow-xl backdrop-blur-xl">
        <motion.div
          className="mx-auto h-9 w-9 rounded-full border-2 border-blue-400/30 border-t-blue-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.95, repeat: Infinity, ease: "linear" }}
          aria-hidden
        />
        <p className="mt-4 text-center text-sm text-slate-500">Loading</p>
      </div>
    </div>
  );
}
