"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, MonitorSmartphone, Store, GraduationCap, LayoutTemplate, RefreshCw, Check, ChevronDown, ArrowRight, Search, ShieldCheck, Smartphone, Code, Database, Cpu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

function ServiceFAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden transition-colors hover:border-primary/30">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 text-left flex items-center justify-between group">
        <span className="font-semibold text-white group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-0">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WebDevelopmentClient() {
  const services = [
    { icon: <MonitorSmartphone className="text-blue-400" size={28} />, title: "Business Website", desc: "Professional websites that elevate brand presence and trust." },
    { icon: <Globe className="text-indigo-400" size={28} />, title: "Corporate Website", desc: "Modern multi-page corporate portals with advanced storytelling." },
    { icon: <Store className="text-purple-400" size={28} />, title: "E-commerce Website", desc: "Robust online stores with smooth checkout and catalog flows." },
    { icon: <GraduationCap className="text-pink-400" size={28} />, title: "School Website", desc: "Modern education portals with admissions, notices, and galleries." },
    { icon: <LayoutTemplate className="text-emerald-400" size={28} />, title: "Landing Pages", desc: "Fast, responsive pages engineered for lead conversion and campaigns." },
    { icon: <RefreshCw className="text-amber-400" size={28} />, title: "Website Redesign", desc: "Refresh outdated websites with better UI, speed, and performance." }
  ];

  const features = ["Responsive", "SEO Friendly", "Fast Loading", "Secure", "Mobile Optimized", "CMS"];
  const technologies = ["React", "Next.js", "Node.js", "Laravel", "WordPress", "Shopify", "MongoDB", "MySQL"];
  const process = ["Planning", "UI Design", "Development", "Testing", "Deployment", "Maintenance"];
  const faqs = [
    { q: "How long does a website take to build?", a: "A standard website usually takes 2 to 4 weeks, while larger custom portals may take longer depending on scope." },
    { q: "Do you build e-commerce websites?", a: "Yes, we create online stores with product listings, carts, payment integrations, and content management." },
    { q: "Will my site be mobile friendly?", a: "Absolutely. Every website is built with a responsive, mobile-first approach." },
    { q: "Can you redesign an existing website?", a: "Yes, we can revamp and modernize your existing website with improved user experience and performance." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-blue-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        <Breadcrumb />
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-400 mb-8"><Code className="mr-2 h-4 w-4" /> Modern Web Solutions</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Web Development</span> Services</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4">Build a website that stands out, performs fast, and converts visitors into customers.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4">
            <Link href="/contact?service=web-development" className="w-full sm:w-auto"><Button size="lg" className="w-full shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-500/50 bg-blue-600 hover:bg-blue-700 text-md px-8 group">Get a Free Quote<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Button></Link>
            <Link href="/contact" className="w-full sm:w-auto"><Button size="lg" variant="outline" className="w-full text-md px-8 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black">Contact Us</Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 bg-card/10 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">About Our Web Development Services</h2>
          <p className="text-lg text-gray-300 leading-relaxed">We build business websites, school websites, corporate portals, hospital websites, e-commerce stores, ERP portals, and custom web applications tailored to your goals.</p>
        </div>
      </section>

      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Modern, scalable websites and web apps built for speed, SEO, and business growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-blue-500/40 transition-all group">
                <div className="mb-6 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-card/20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-5xl font-bold mb-4">Features Included</h2><p className="text-gray-400 max-w-2xl mx-auto">Every project comes with premium features that improve usability and performance.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {features.map((feature, i) => <div key={i} className="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-gray-300">{feature}</div>)}
          </div>
        </div>
      </section>

      <section className="w-full py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold mb-4">Technologies We Use</h2><p className="text-gray-400 max-w-xl mx-auto">We combine modern frameworks and proven platforms to build dependable web experiences.</p></div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">{technologies.map((tech, i) => <span key={i} className="rounded-full border border-white/10 bg-background/70 px-4 py-2 text-sm text-gray-300">{tech}</span>)}</div>
        </div>
      </section>

      <section className="w-full py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold mb-4">Development Process</h2><p className="text-gray-400 max-w-2xl mx-auto">A clear path from planning and design to launch and support.</p></div>
          <div className="relative border-l border-white/10 max-w-3xl mx-auto space-y-12 pl-6 md:pl-10">
            {process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative">
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-500/50" />
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6"><h3 className="text-xl font-bold text-white mb-1">{step}</h3><p className="text-gray-400 text-sm">A disciplined stage in our web delivery workflow.</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 relative border-b border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">{faqs.map((faq, i) => <ServiceFAQItem key={i} question={faq.q} answer={faq.a} />)}</div>
        </div>
      </section>

      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-blue-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Your Website</h2>
          <Link href="/contact?service=web-development"><Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.6)] bg-blue-600 hover:bg-blue-700">Get a Free Quote</Button></Link>
        </div>
      </section>
    </main>
  );
}
