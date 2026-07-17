"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="flex-1 w-full flex flex-col pt-20" // space for the fixed navbar
    >
      {children}
    </motion.div>
  );
}
