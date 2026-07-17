"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !hasTriggered) {
        setShow(true);
        setHasTriggered(true);
      }
    };
    
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-card border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(99,102,241,0.2)] text-center overflow-hidden"
          >
            {/* Background glowing orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/30 blur-[80px] rounded-full" />
            
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-3 rounded-full text-primary ring-1 ring-primary/30">
                <Sparkles size={32} />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-balance">
              Wait! Don't leave your growth to chance.
            </h2>
            <p className="text-gray-400 mb-8 whitespace-pre-wrap">
              Download our exclusive <span className="font-semibold text-white">"2024 AI Solutions Playbook"</span> and learn the exact frameworks we use to scale businesses across India.
            </p>
            
            <div className="flex flex-col gap-3">
              <Link href="/ai-tools" onClick={() => setShow(false)}>
                <Button size="lg" className="w-full text-md">
                  Claim Your Free AI Audit
                </Button>
              </Link>
              <Button variant="ghost" className="w-full" onClick={() => setShow(false)}>
                No thanks, I don't want to grow.
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
