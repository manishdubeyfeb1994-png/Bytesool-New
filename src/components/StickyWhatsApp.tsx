"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/+919289411974"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-colors"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
}
