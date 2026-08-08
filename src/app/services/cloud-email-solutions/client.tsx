"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Cloud, Mail, CheckCircle2, ShieldCheck, HelpCircle, 
  ArrowRight, Shield, Zap, ChevronDown, Check, Server,
  Lock, RefreshCw, Smartphone, Key, Database, Globe
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

export default function CloudEmailClient() {
  const cloudPlatforms = [
    {
      name: "Amazon Web Services (AWS)",
      icon: "☁️",
      features: ["EC2 Compute instances", "S3 Storage setups", "RDS Database clusters", "IAM Access controls", "Cloud Backups & metrics monitoring"]
    },
    {
      name: "Microsoft Azure",
      icon: "💎",
      features: ["Azure Virtual Machines", "Azure Storage accounts", "Azure Active Directory (Entra ID)", "Azure Backups", "Virtual Networks (VNet)"]
    },
    {
      name: "Oracle Cloud Infrastructure (OCI)",
      icon: "🏛️",
      features: ["Compute instances", "Object Storage buckets", "Autonomous DB configurations", "Virtual Cloud Networks (VCN)", "Backup and Disaster Recovery"]
    },
    {
      name: "Private Cloud Solutions",
      icon: "🔒",
      features: ["Private Virtual Machines", "Secure Local Storage & Backups", "Custom Disaster Recovery", "Secure Remote Gateways", "Virtual Private Servers (VPS)"]
    }
  ];

  const emailPlatforms = [
    {
      name: "Microsoft 365",
      icon: "📧",
      badge: "Enterprise Email & Collab",
      services: [
        "Business Basic, Standard & Premium plans",
        "Exchange Online, Outlook & Teams set up",
        "OneDrive file storage & SharePoint portals",
        "Microsoft Defender security hardening",
        "MFA, Tenant-to-Tenant & local data migrations",
        "Endpoint Intune setups & Conditional Access"
      ]
    },
    {
      name: "Google Workspace",
      icon: "🌐",
      badge: "Collaborative Workspace",
      services: [
        "Starter, Standard, Plus & Enterprise plans",
        "Gmail setups & domain configurations",
        "Google Drive storage & Google Meet rooms",
        "Admin Console security policy deployments",
        "Email mailboxes migration from legacy servers",
        "24/7 admin console support"
      ]
    }
  ];

  const cloudServices = [
    "Cloud Assessment & Migration",
    "Real-Time Vault Backups",
    "Automated Disaster Recovery",
    "Multi-Layer Email Security",
    "DKIM / SPF / DMARC Authentication",
    "Zero Trust & MFA Access Policies",
    "Infrastructure Performance Monitoring",
    "Licensing Procurement & Cost Optimization"
  ];

  const processSteps = [
    { number: "01", title: "Assessment", desc: "Evaluating existing email systems, local storage resources, network speeds, and licensing models." },
    { number: "02", title: "Planning", desc: "Detailing target cloud architectures, migration pathways, DNS modification timelines, and security profiles." },
    { number: "03", title: "Migration", desc: "Performing mailbox migrations, syncing storage file directories, and loading database systems to cloud targets." },
    { number: "04", title: "Configuration", desc: "Setting up tenant groups, defining shared server repositories, and configuring endpoint profiles." },
    { number: "05", title: "Security Setup", desc: "Deploying SPF, DKIM, DMARC records, activating Multi-Factor authentication, and Zero-Trust access rules." },
    { number: "06", title: "Testing", desc: "Performing server mail flow diagnostics, checking backup recovery paths, and verifying security login prompts." },
    { number: "07", title: "Requirement Training", desc: "Providing administrators control panel orientation, user tutorials, and data sync procedures documentation." },
    { number: "08", title: "Ongoing Support", desc: "Delivering proactive 24/7 infrastructure monitoring, subscription optimization checks, and technical support." }
  ];

  const reasons = [
    "Certified Cloud Experts",
    "Microsoft 365 Specialists",
    "Google Workspace Experts",
    "AWS & Azure Support",
    "Secure Cloud Architecture",
    "End-to-End Migration",
    "24/7 Technical Support"
  ];

  const faqs = [
    { q: "Which cloud platform is best for my business?", a: "This depends on your application architecture, performance requirements, security guidelines, and budget. Our cloud experts conduct detailed audits to advise on either public cloud (AWS/Azure/OCI), private cloud, or hybrid environments." },
    { q: "Can you migrate from Google Workspace to Microsoft 365?", a: "Yes, we specialize in tenant-to-tenant migrations, including emails, active contacts, calendar schedules, Shared Drives, and OneDrive storage with near-zero business disruption." },
    { q: "Do you provide Microsoft 365 licenses?", a: "Yes, we are official licensing partners. We handle procurement, license assignment, subscription plans, and renewal management." },
    { q: "Can you migrate on-premises Exchange to Exchange Online?", a: "Yes, we handle hybrid setups, staging migrations, and cutover migrations from local Active Directory Exchange servers to Exchange Online." },
    { q: "Do you provide AWS and Azure support?", a: "Yes, we provide 24/7 managed support handling systems health monitoring, secure networking, storage optimization, and identity management." },
    { q: "Can you manage our cloud infrastructure after deployment?", a: "Yes, our certified cloud experts monitor logs, optimize instance costs, perform security patches, and manage continuous backups." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-sky-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <Breadcrumb />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-400 mb-8"
          >
            <Cloud className="mr-2 h-4 w-4" /> 
            Enterprise-Grade Multi-Cloud Stacks
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight"
          >
            Cloud & Email <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4"
          >
            Secure, Scalable & Reliable Cloud Infrastructure for Modern Businesses
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Deploy, migrate, and manage cloud platforms and professional business email solutions with enterprise-grade security.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4"
          >
            <Link href="/contact?service=cloud-email" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(56,189,248,0.5)] border border-sky-500/50 bg-sky-600 hover:bg-sky-700 text-md px-8 group">
                Get a Free Consultation
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
            Bytesool helps businesses adopt secure cloud infrastructure and professional email platforms. We provide deployment, migration, licensing, security, backup, and ongoing support for Microsoft 365, Google Workspace, AWS, Azure, Oracle Cloud, and Private Cloud environments.
          </motion.p>
        </div>
      </section>

      {/* Platform Cards Section */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Structure Options</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Click into each segment to see what licensing and platform properties are supported.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Cloud Platforms */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-sky-500/30 transition-all flex flex-col h-full shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="bg-sky-500/10 p-3 rounded-2xl text-sky-400"><Server size={28} /></div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">Cloud Platforms</h3>
                  <p className="text-xxs text-gray-500 tracking-widest uppercase mt-0.5">Multi-Cloud Infrastructure</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                {cloudPlatforms.map((platform, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold text-white text-sm flex items-center gap-2">
                      <span>{platform.icon}</span>
                      <span>{platform.name}</span>
                    </h4>
                    <ul className="pl-6 space-y-1">
                      {platform.features.map((feat, j) => (
                        <li key={j} className="text-xxs md:text-xs text-gray-400 list-disc font-medium leading-relaxed">{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Email */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-sky-500/30 transition-all flex flex-col h-full shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="bg-sky-500/10 p-3 rounded-2xl text-sky-400"><Mail size={28} /></div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">Business Email</h3>
                  <p className="text-xxs text-gray-500 tracking-widest uppercase mt-0.5">Collaboration Suites</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                {emailPlatforms.map((platform, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold text-white text-sm flex items-center gap-2">
                      <span>{platform.icon}</span>
                      <span>{platform.name}</span>
                    </h4>
                    <span className="inline-block text-xxs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/5 px-2 py-0.5 border border-sky-500/10 rounded">
                      {platform.badge}
                    </span>
                    <ul className="space-y-1.5 pt-1">
                      {platform.services.map((feat, j) => (
                        <li key={j} className="text-xxs md:text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                          <Check className="text-sky-500 flex-shrink-0 mt-0.5" size={12} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cloud Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-sky-500/30 transition-all flex flex-col h-full shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="bg-sky-500/10 p-3 rounded-2xl text-sky-400"><CheckCircle2 size={28} /></div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">Cloud Services</h3>
                  <p className="text-xxs text-gray-500 tracking-widest uppercase mt-0.5">Natively Structured Actions</p>
                </div>
              </div>
              <div className="space-y-4 flex-grow pt-2">
                {cloudServices.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl hover:border-sky-500/20 transition-all">
                    <div className="text-sky-500 flex-shrink-0">
                      <Check size={16} />
                    </div>
                    <span className="text-xs md:text-sm text-gray-300 font-semibold">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="w-full py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Migration & Setup Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our structured pipeline ensuring zero user data loss during migrations.</p>
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
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-sky-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-sky-500/50" />
                
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-sky-500/20 transition-all hover:bg-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-sky-400">{step.number}</span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
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
                className="flex items-center gap-3 bg-background border border-white/5 p-6 rounded-2xl hover:border-sky-400/20 transition-all"
              >
                <div className="bg-sky-500/10 rounded-full p-2 text-sky-500 flex-shrink-0">
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
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-sky-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Move to the Cloud?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contact?service=cloud-email">
              <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.6)] bg-sky-600 hover:bg-sky-700">
                Talk to Our Cloud Experts
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
