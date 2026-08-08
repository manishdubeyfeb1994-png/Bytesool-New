"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Video, HardDrive, Check, ChevronDown, ArrowRight, Cpu, Building2, Shield, Server, Camera, Monitor } from "lucide-react";
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

export default function CybersecurityHardwareClient() {
  const cyberServices = [
    { icon: <Shield className="text-red-400" size={28} />, title: "Firewall & Network Security", desc: "Protect your network with firewalls, VPNs, and monitoring." },
    { icon: <Lock className="text-rose-400" size={28} />, title: "Endpoint & Email Security", desc: "Secure devices and inboxes with antivirus, MFA, and email protection." },
    { icon: <Cpu className="text-orange-400" size={28} />, title: "Security Audits & VAPT", desc: "Identify vulnerabilities and strengthen your environment." },
    { icon: <Video className="text-purple-400" size={28} />, title: "CCTV & Surveillance", desc: "Install IP cameras, NVRs, and remote monitoring solutions." },
    { icon: <HardDrive className="text-amber-400" size={28} />, title: "IT Hardware Procurement", desc: "Source laptops, servers, networking gear, and office devices." },
    { icon: <Monitor className="text-cyan-400" size={28} />, title: "Conference Room Setup", desc: "Deploy smart boards, displays, and conferencing equipment." }
  ];

  const brands = ["Microsoft", "Cisco", "Fortinet", "Sophos", "Dell", "HP", "Lenovo", "Hikvision", "Dahua", "CP Plus", "Honeywell"];
  const process = ["Assessment", "Planning", "Installation", "Configuration", "Testing", "Training", "AMC Support"];
  const faqs = [
    { q: "Do you install CCTV systems?", a: "Yes, we provide CCTV installation, camera configuration, NVR/DVR setup, and remote monitoring." },
    { q: "Can you secure Microsoft 365?", a: "Yes, we configure Microsoft Defender, MFA, Conditional Access, and secure email protection." },
    { q: "Do you provide hardware procurement?", a: "Yes, we source reliable hardware from global brands and support deployment for offices and institutions." },
    { q: "Do you provide AMC support?", a: "Yes, we offer ongoing maintenance and support for hardware, surveillance, and security systems." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-red-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        <Breadcrumb />
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm font-semibold text-red-400 mb-8"><ShieldCheck className="mr-2 h-4 w-4" /> Enterprise Protection</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight">Protect Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-500">Security & Hardware</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4">Secure your infrastructure and physical premises with reliable cybersecurity and professional IT hardware solutions.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4">
            <Link href="/contact?service=cybersecurity-hardware" className="w-full sm:w-auto"><Button size="lg" className="w-full shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-500/50 bg-red-600 hover:bg-red-700 text-md px-8 group">Secure Your Business<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 bg-card/10 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">About Our Security & Hardware Services</h2>
          <p className="text-lg text-gray-300 leading-relaxed">We combine cybersecurity, CCTV systems, and IT hardware procurement into one end-to-end offering for offices, schools, healthcare, retail, and enterprises.</p>
        </div>
      </section>

      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold mb-4">Our Service Areas</h2><p className="text-gray-400 max-w-2xl mx-auto">A comprehensive package for digital protection and physical infrastructure.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cyberServices.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-red-500/40 transition-all group">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Supported Brands</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">{brands.map((brand, i) => <span key={i} className="rounded-full border border-white/10 bg-background/70 px-4 py-2 text-sm text-gray-300">{brand}</span>)}</div>
        </div>
      </section>

      <section className="w-full py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold mb-4">Process</h2><p className="text-gray-400 max-w-2xl mx-auto">From assessment to installation and ongoing AMC support.</p></div>
          <div className="relative border-l border-white/10 max-w-3xl mx-auto space-y-12 pl-6 md:pl-10">
            {process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative">
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-red-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-red-500/50" />
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6"><h3 className="text-xl font-bold text-white mb-1">{step}</h3><p className="text-gray-400 text-sm">A dependable step in our security and infrastructure deployment flow.</p></div>
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

      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-red-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-red-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Secure Your Business Today</h2>
          <Link href="/contact?service=cybersecurity-hardware"><Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.6)] bg-red-600 hover:bg-red-700">Get a Free Consultation</Button></Link>
        </div>
      </section>
    </main>
  );
}
