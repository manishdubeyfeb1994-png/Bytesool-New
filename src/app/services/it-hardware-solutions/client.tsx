"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Laptop, Server, Network, Printer, Monitor, CheckCircle2,
  Check, ChevronDown, ArrowRight, ShieldCheck, Zap, Code,
  Cpu, Building2, HelpCircle, HardDrive, ShoppingCart
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

function ServiceFAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden transition-colors hover:border-primary/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between group"
      >
        <span className="font-semibold text-white group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown 
          className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} 
          size={20} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-0">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ITHardwareClient() {
  const hardwareCategories = [
    {
      icon: <Laptop className="text-orange-400" size={32} />,
      title: "Laptops & Desktops",
      brands: "HP, Dell, Lenovo, Apple, ASUS, Acer",
      desc: "Business laptops, high-performance developer workstations, gaming systems, and durable enterprise desktops built for office runs."
    },
    {
      icon: <Server className="text-amber-400" size={32} />,
      title: "Servers & Storage",
      brands: "Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem",
      desc: "Rack-mount servers, high-availability NAS storage cabinets, and Storage Area Networks (SAN) to preserve internal records."
    },
    {
      icon: <Network className="text-yellow-400" size={32} />,
      title: "Networking Solutions",
      brands: "Cisco, Fortinet, Sophos, TP-Link, Ubiquiti, MikroTik",
      desc: "Managed switches, corporate routers, Wi-Fi mesh access points, hardware firewalls, and complete structured cabling."
    },
    {
      icon: <Printer className="text-orange-350" size={32} />,
      title: "Printers & Office Devices",
      brands: "Laser, Inkjet, Thermal Barcode, Scanners, Projectors",
      desc: "All-in-one multifunction office copy printers, scanner equipment, projection layouts, and barcode listing tools."
    },
    {
      icon: <Monitor className="text-amber-350" size={32} />,
      title: "Conference Room Solutions",
      brands: "Interactive Panels, Smart TVs, Video Audio Hubs",
      desc: "Interactive educational display panels, high-definition presentation monitors, and customized video conferencing setups."
    }
  ];

  const servicesIncluded = [
    "Hardware Procurement",
    "Installation & Deployment",
    "Switch/Router Configuration",
    "Structured Network Setup",
    "Asset Tagging & Inventory Logs",
    "Brand Warranty Coordination",
    "Annual Maintenance Contract (AMC)",
    "Component Hardware Upgrades",
    "Remote & On-site Troubleshooting"
  ];

  const industries = [
    "Corporate Offices",
    "Schools & Colleges",
    "Hospitals & Clinics",
    "Manufacturing Companies",
    "Retail Stores",
    "Startups"
  ];

  const reasons = [
    "Genuine Products",
    "Competitive Pricing",
    "Bulk Procurement",
    "PAN India Delivery",
    "Installation Support",
    "AMC Services"
  ];

  const highlights = [
    { label: "500+ Device Deployments", value: "500+" },
    { label: "PAN India Delivery", value: "24/7" },
    { label: "Certified Installation", value: "100%" },
    { label: "AMC & Support", value: "On-demand" }
  ];

  const partnerBrands = ["HP", "Dell", "Lenovo", "Apple", "Cisco", "Fortinet", "Sophos", "Ubiquiti"];

  const faqs = [
    { q: "Do you provide bulk hardware?", a: "Yes, we handle bulk procurement orders for workspaces, startup setups, call centers, and school computer labs at competitive wholesale pricing tiers." },
    { q: "Can you install networking equipment?", a: "Yes, our network engineers offer complete structured cabling (CAT6), router setup, switch configuration, and hardware firewall deployment." },
    { q: "Do you provide AMC?", a: "Yes, we offer tailored Annual Maintenance Contracts (AMC) designed to cover routine maintenance checkups and quick troubleshooting support." },
    { q: "Can you upgrade existing hardware?", a: "Yes, we can perform memory upgrades, SSD changes, processor swaps, and replace legacy networking equipment with gigabit switches." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-orange-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <Breadcrumb />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm font-semibold text-orange-400 mb-8"
          >
            <HardDrive className="mr-2 h-4 w-4" /> 
            Enterprise-Grade IT Infrastructure
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight"
          >
            IT Hardware <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4"
          >
            Reliable IT Hardware Procurement, Deployment & Support for Businesses
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            From laptops and servers to networking equipment and office infrastructure, Bytesool provides end-to-end hardware solutions for startups, schools, enterprises, and corporate offices.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4"
          >
            <Link href="/contact?service=it-hardware" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(249,115,22,0.5)] border border-orange-500/50 bg-orange-600 hover:bg-orange-700 text-md px-8 group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 bg-card/10 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-white"
          >
            About Our Service
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed text-balance"
          >
            We supply, install, configure, and maintain enterprise-grade IT hardware from leading global brands. Whether you need a single laptop or complete office infrastructure, our team ensures reliable deployment, warranty support, and long-term maintenance.
          </motion.p>
        </div>
      </section>

      {/* Our Hardware Solutions Grid */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Hardware Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We supply and install certified hardware resources mapped to corporate specifications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-orange-500/40 transition-all group flex flex-col h-full"
              >
                <div className="mb-6 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform origin-center">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{cat.title}</h3>
                <span className="inline-block text-xxs font-bold text-orange-400 mb-4 bg-orange-500/5 px-2 py-0.5 border border-orange-500/10 rounded tracking-wider uppercase">
                  {cat.brands}
                </span>
                <p className="text-sm text-gray-400 leading-relaxed flex-grow">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="w-full py-20 bg-card/20 relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Services Included</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">End-to-end integration support covered under our procurement contracts.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {servicesIncluded.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-background/50 border border-white/5 p-4 rounded-xl hover:border-orange-500/20 transition-all hover:bg-background/80"
              >
                <div className="text-orange-500 flex-shrink-0">
                  <Check size={16} />
                </div>
                <span className="text-sm text-gray-300 font-semibold">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="w-full py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Providing scalable hardware integration parameters for major business niches.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:border-orange-400/40 hover:bg-white/10 transition-all text-center gap-3"
              >
                <Building2 className="text-orange-400" size={24} />
                <span className="text-xs md:text-sm font-semibold">{ind}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="w-full py-20 bg-card/10 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Service Highlights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">From single-device procurement to full office rollouts, we deliver dependable infrastructure support from start to finish.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-background/60 p-6 text-left"
              >
                <div className="text-2xl font-black text-orange-400 mb-2">{item.value}</div>
                <div className="text-sm text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Trusted Hardware Partners</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {partnerBrands.map((brand, i) => (
                <span key={i} className="rounded-full border border-white/10 bg-background/70 px-4 py-2 text-sm text-gray-300">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bytesool */}
      <section className="w-full py-20 relative">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Choose Bytesool</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-background border border-white/5 p-6 rounded-2xl hover:border-orange-400/20 transition-all"
              >
                <div className="bg-orange-500/10 rounded-full p-2 text-orange-500 flex-shrink-0">
                  <Check size={20} />
                </div>
                <span className="text-white font-semibold text-left">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 relative border-b border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ServiceFAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-orange-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Need IT Hardware for Your Business?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contact?service=it-hardware">
              <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(249,115,22,0.6)] bg-orange-600 hover:bg-orange-700">
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
