"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, Lock, Eye, Video, ShieldAlert, Check, 
  ChevronDown, ArrowRight, Zap, Code, Shield, Key, Terminal,
  Cpu, Award, HelpCircle
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

export default function CybersecurityClient() {
  const cyberServices = [
    {
      icon: <Shield className="text-red-400" size={32} />,
      title: "Network Security",
      features: ["Firewall Deployment", "VPN Configuration", "Real-Time Network Monitoring", "Zero Trust Architectures"]
    },
    {
      icon: <Cpu className="text-rose-400" size={32} />,
      title: "Endpoint Security",
      features: ["Enterprise Antivirus protection", "EDR / XDR configuration", "Active Device Protection", "USB port restrictions"]
    },
    {
      icon: <Lock className="text-red-300" size={32} />,
      title: "Email Security",
      features: ["Microsoft Defender setups", "Anti-Spam & Anti-Phishing filtering", "Email encryption", "DKIM, SPF & DMARC hardening"]
    },
    {
      icon: <Key className="text-rose-350" size={32} />,
      title: "Identity Security",
      features: ["Multi-Factor Authentication (MFA)", "Conditional Access policies", "Single Sign-On (SSO)", "Identity Protection metrics"]
    },
    {
      icon: <Terminal className="text-red-350" size={32} />,
      title: "Security Assessment",
      features: ["Vulnerability Audits (VA)", "Penetration Testing (PT)", "System Compliance reviews", "IT Infrastructure audits"]
    }
  ];

  const cctvElements = [
    {
      icon: <Video className="text-rose-450" size={32} />,
      title: "CCTV Installation",
      features: ["Analogue HD Cameras", "Full HD (1080p) systems", "Ultra HD 2K & 4K security feeds", "IP Camera networks & cabling"]
    },
    {
      icon: <Eye className="text-red-450" size={32} />,
      title: "Smart Surveillance",
      features: ["Remote feed monitoring", "Mobile App live access", "Secure Cloud storage backups", "Motion & smart Face Detection", "Automatic Number Plate Recognition"]
    },
    {
      icon: <Award className="text-rose-500" size={32} />,
      title: "Physical Equipment",
      features: ["Network Video Recorders (NVR)", "Digital Video Recorders (DVR)", "Access Control panels", "Biometric attendance logs", "Video Door Phones"]
    }
  ];

  const managedServices = [
    "24/7 Security Health Check",
    "Continuous Log Audits",
    "Threat Incident Response",
    "Software Patch Management",
    "Encrypted Backup Monitoring",
    "Preventative Cybersecurity Monitoring"
  ];

  const processSteps = [
    { number: "01", title: "Security Assessment", desc: "Performing preliminary penetration testing, network sweeps, and auditing physical layout weak spots." },
    { number: "02", title: "Risk Analysis", desc: "Detailing active gaps in software dependencies, server ports, local cabling, or cameras coverage." },
    { number: "03", title: "Solution Design", desc: "Drafting structural lists specifying firewalls model, NVR positions, cloud networks, and MFA policies." },
    { number: "04", title: "Deployment", desc: "Setting firewall policies, mounting physical security feeds, running structured cabling, and configuring recorders." },
    { number: "05", title: "Testing", desc: "Checking mail filters responsiveness, performing camera feed trials, evaluating NVR storage loop buffers, and simulating network failovers." },
    { number: "06", title: "Monitoring", desc: "Establishing remote alerts, configuring logs analyzers, and setting dashboard mobile app shortcuts." },
    { number: "07", title: "Ongoing Support", desc: "Yearly maintenance audits (AMC checkups), replacing parts, and applying firmware upgrades." }
  ];

  const reasons = [
    "Security-First Approach",
    "Enterprise Solutions",
    "Certified Professionals",
    "24×7 Support",
    "Remote Monitoring",
    "Preventive Maintenance"
  ];

  const highlights = [
    { label: "24/7 Security Monitoring", value: "24/7" },
    { label: "VAPT & Audit Coverage", value: "100%" },
    { label: "Remote CCTV Access", value: "Live" },
    { label: "AMC Support", value: "Always" }
  ];

  const partnerBrands = ["Hikvision", "CP Plus", "Dahua", "Godrej", "Honeywell"];

  const faqs = [
    { q: "Do you install CCTV?", a: "Yes, we handle complete analogue HD and IP CCTV system installation and setup, configuration, cabling, NVR/DVR installation, and mobile phone app synchronization." },
    { q: "Can you secure Microsoft 365?", a: "Yes, we configure advanced security layers including Microsoft Defender, Multi-Factor Authentication (MFA), Conditional Access, and configure SPF, DKIM, DMARC records to block phishing email attacks." },
    { q: "Do you provide VAPT?", a: "Yes, our certified experts perform Vulnerability Assessments and Penetration Testing (VAPT) to identify software dependencies, server endpoints, and network security loopholes." },
    { q: "Can you monitor our network remotely?", a: "Yes, we offer 24×7 managed firewall and VPN monitoring, detecting abnormal logs, preventing intrusion, and patching software threats." },
    { q: "Do you provide AMC for CCTV?", a: "Yes, we offer Annual Maintenance Contracts (AMC) for CCTV and surveillance components to routinely clean lenses, audit backups, check cables, and review power supplies." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-red-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <Breadcrumb />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm font-semibold text-red-400 mb-8"
          >
            <ShieldCheck className="mr-2 h-4 w-4" /> 
            Zero-Trust Protection
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight"
          >
            Cybersecurity & Surveillance <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-500">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4"
          >
            Protect Your Business with Advanced Cybersecurity & Smart Surveillance Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Secure your digital infrastructure and physical premises with enterprise-grade cybersecurity and CCTV solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4"
          >
            <Link href="/contact?service=cybersecurity" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-500/50 bg-red-600 hover:bg-red-700 text-md px-8 group">
                Book Security Assessment
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
            Bytesool provides complete cybersecurity and surveillance solutions to protect businesses against cyber threats, unauthorized access, ransomware, phishing attacks, and physical security risks.
          </motion.p>
        </div>
      </section>

      {/* Cybersecurity Services Section */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Cybersecurity Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Multi-level digital security environments preventing external cyber threats.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cyberServices.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-red-500/40 transition-all group flex flex-col h-full"
              >
                <div className="mb-6 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform origin-center">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
                <ul className="space-y-2 flex-grow pl-1">
                  {cat.features.map((feat, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-start gap-2 leading-relaxed">
                      <Check className="text-red-500 mt-1 flex-shrink-0" size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CCTV & Physical Surveillance Section */}
      <section className="w-full py-24 bg-card/20 relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">CCTV & Surveillance</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Physical monitoring systems from globally ranked providers (Hikvision, CP Plus, Dahua, Honeywell).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cctvElements.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-rose-500/40 transition-all group flex flex-col h-full"
              >
                <div className="mb-6 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform origin-center">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
                <ul className="space-y-2 flex-grow pl-1">
                  {cat.features.map((feat, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-start gap-2 leading-relaxed">
                      <Check className="text-rose-500 mt-1 flex-shrink-0" size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Security Services */}
      <section className="w-full py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Managed Security Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Proactive maintenance safeguarding databases against zero-day vulnerabilities.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {managedServices.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-background/50 border border-white/5 p-4 rounded-xl hover:border-red-500/20 transition-all hover:bg-background/80"
              >
                <div className="text-red-500 flex-shrink-0">
                  <Check size={16} />
                </div>
                <span className="text-sm text-gray-300 font-semibold">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="w-full py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Security Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">How we identify risks, deploy protection, and monitor systems.</p>
          </div>

          <div className="relative border-l border-white/10 max-w-3xl mx-auto space-y-12 pl-6 md:pl-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Step Connector Node */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-red-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-red-500/50" />
                
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-red-500/20 transition-all hover:bg-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-rose-450">{step.number}</span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="w-full py-20 bg-card/10 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Service Highlights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">We secure both digital systems and physical spaces with a proactive approach, fast response, and trusted monitoring.</p>

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
                <div className="text-2xl font-black text-red-400 mb-2">{item.value}</div>
                <div className="text-sm text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Trusted Security Brands</h3>
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
                className="flex items-center gap-3 bg-background border border-white/5 p-6 rounded-2xl hover:border-red-400/20 transition-all"
              >
                <div className="bg-red-500/10 rounded-full p-2 text-red-500 flex-shrink-0">
                  <Check size={20} />
                </div>
                <span className="text-white font-semibold text-left">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 bg-card/10 relative border-t border-white/5">
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
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-red-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-red-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Protect Your Business Today
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contact?service=cybersecurity">
              <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.6)] bg-red-600 hover:bg-red-700">
                Schedule a Security Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
