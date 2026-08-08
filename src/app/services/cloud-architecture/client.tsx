"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cloud, Server, DatabaseZap, ShieldCheck, HardDrive, Check, ChevronDown, ArrowRight, Cpu, RefreshCw, Building2 } from "lucide-react";
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

export default function CloudArchitectureClient() {
  const services = [
    { icon: <Cloud className="text-sky-400" size={28} />, title: "Cloud Migration", desc: "Move your infrastructure securely to AWS, Azure, Oracle, or private cloud environments." },
    { icon: <Server className="text-cyan-400" size={28} />, title: "Cloud Design", desc: "Architect resilient, scalable, and secure cloud environments for growth." },
    { icon: <DatabaseZap className="text-emerald-400" size={28} />, title: "Backup & Disaster Recovery", desc: "Protect business continuity with backup, restore, and disaster recovery planning." },
    { icon: <HardDrive className="text-violet-400" size={28} />, title: "Virtual Machines & Storage", desc: "Deploy tailored compute, storage, and networking resources for every workload." },
    { icon: <ShieldCheck className="text-rose-400" size={28} />, title: "Monitoring & Management", desc: "Monitor availability, performance, and infrastructure health with proactive support." },
    { icon: <Cpu className="text-amber-400" size={28} />, title: "Hybrid Infrastructure", desc: "Connect on-premise systems with secure cloud environments through hybrid architecture." }
  ];

  const platforms = ["AWS", "Microsoft Azure", "Oracle Cloud", "Private Cloud", "Hybrid Cloud"];
  const benefits = ["High Availability", "Security", "Scalability", "Cost Optimization"];
  const process = ["Assessment", "Architecture", "Migration", "Testing", "Support"];
  const faqs = [
    { q: "Do you support AWS and Azure?", a: "Yes, we design and manage cloud solutions across AWS, Azure, Oracle Cloud, and private cloud environments." },
    { q: "Can you migrate my existing infrastructure?", a: "Yes, we help plan and execute cloud migrations with minimal downtime and strong security controls." },
    { q: "Do you provide monitoring?", a: "Yes, we offer infrastructure monitoring, backup management, and 24/7 support services." },
    { q: "Is hybrid cloud possible?", a: "Yes, we build hybrid environments that connect your existing systems with cloud resources securely." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-sky-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        <Breadcrumb />
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-400 mb-8"><Cloud className="mr-2 h-4 w-4" /> Scalable Infrastructure</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight">Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Cloud Architecture</span> Solutions</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4">Design and deploy infrastructure that is secure, resilient, and ready to grow.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4">
            <Link href="/contact?service=cloud-architecture" className="w-full sm:w-auto"><Button size="lg" className="w-full shadow-[0_0_20px_rgba(14,165,233,0.5)] border border-sky-500/50 bg-sky-600 hover:bg-sky-700 text-md px-8 group">Build Your Cloud Infrastructure<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 bg-card/10 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">About Cloud Architecture</h2>
          <p className="text-lg text-gray-300 leading-relaxed">We help businesses design secure and future-ready cloud environments with migration, backup, storage, monitoring, and cost-effective architecture planning.</p>
        </div>
      </section>

      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold mb-4">Cloud Platforms & Services</h2><p className="text-gray-400 max-w-2xl mx-auto">Reliable solutions across public, private, and hybrid cloud platforms.</p></div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">{platforms.map((platform, i) => <span key={i} className="rounded-full border border-white/10 bg-background/70 px-4 py-2 text-sm text-gray-300">{platform}</span>)}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-sky-500/40 transition-all group">
                <div className="mb-6 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-card/20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => <div key={i} className="rounded-2xl border border-white/10 bg-background/70 p-6 text-sm text-gray-300">{benefit}</div>)}
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2><p className="text-gray-400 max-w-2xl mx-auto">A structured approach from assessment to deployment and support.</p></div>
          <div className="relative border-l border-white/10 max-w-3xl mx-auto space-y-12 pl-6 md:pl-10">
            {process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative">
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-sky-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-sky-500/50" />
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6"><h3 className="text-xl font-bold text-white mb-1">{step}</h3><p className="text-gray-400 text-sm">A critical step in building reliable cloud infrastructure.</p></div>
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

      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-sky-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Build Your Cloud Infrastructure</h2>
          <Link href="/contact?service=cloud-architecture"><Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.6)] bg-sky-600 hover:bg-sky-700">Get a Free Consultation</Button></Link>
        </div>
      </section>
    </main>
  );
}
