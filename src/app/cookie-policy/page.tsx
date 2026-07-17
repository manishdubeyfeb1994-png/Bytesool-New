"use client";

import { motion } from "framer-motion";
import { Cookie, ShieldCheck, Info, Settings } from "lucide-react";

export default function CookiePolicy() {
  return (
    <main className="flex flex-col items-center pt-32 pb-8 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6">
            <Cookie className="mr-2 h-4 w-4" /> 
            Legal Transparency
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Cookie Policy</h1>
          <p className="text-xl text-gray-400">Information about how BYTESOOL uses cookies on our website.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 space-y-12"
        >
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white text-xl font-bold">
              <Info className="text-primary" />
              <h2>What are Cookies?</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit our website. They help us recognize your device and remember your preferences or actions over time.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white text-xl font-bold">
              <ShieldCheck className="text-primary" />
              <h2>How We Use Cookies</h2>
            </div>
            <p className="text-gray-400 leading-relaxed font-semibold">We use cookies for the following purposes:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-400 pl-4">
              <li><strong className="text-white">Essential Cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong className="text-white">Performance Cookies:</strong> Helping us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong className="text-white">Functional Cookies:</strong> Allowing our website to remember choices you make (such as your language or the region you are in).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white text-xl font-bold">
              <Settings className="text-primary" />
              <h2>Your Choices</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, it may impact your overall user experience.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <p className="text-sm text-gray-500 mt-2">For more information, please contact <a href="mailto:info@bytesool.com" className="text-primary hover:underline">info@bytesool.com</a></p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
