"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, ShieldAlert, Cpu, Cloud, Settings, HeartHandshake,
  Check, ChevronDown, ArrowRight, ShieldCheck, Zap, Code,
  Eye, FileText, Activity, Users, HelpCircle, Network
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

export default function ITConsultingClient() {
  const consultingServices = [
    { 
      icon: <Network className="text-yellow-400" size={32} />, 
      title: "IT Infrastructure Assessment", 
      desc: "Evaluate your current hardware configurations, local servers, wired setups, and cloud deployments to find operational bottlenecks." 
    },
    { 
      icon: <Cpu className="text-orange-400" size={32} />, 
      title: "Digital Transformation", 
      desc: "Modernize outdated manual file models with automated cloud databases, integrated workflows, and secure digital collaboration solutions." 
    },
    { 
      icon: <Cloud className="text-amber-400" size={32} />, 
      title: "Cloud Strategy & Migration", 
      desc: "Architect a custom roadmap to securely migrate databases, apps, and storage resources to AWS, Azure, OCI, or secure Private Clouds." 
    },
    { 
      icon: <Users className="text-yellow-500" size={32} />, 
      title: "Microsoft 365 & Google Workspace Consulting", 
      desc: "Professional guidance selecting corporate tiers, migrating user mailboxes, setting administrator controls, and hardening access." 
    },
    { 
      icon: <ShieldAlert className="text-orange-500" size={32} />, 
      title: "Cybersecurity & Compliance", 
      desc: "Risk assessments, setting up Zero Trust policies, MFA configuration, and designing organizational data preservation rules." 
    },
    { 
      icon: <Activity className="text-amber-500" size={32} />, 
      title: "IT Support & Managed Services", 
      desc: "Ongoing remote monitoring of system health, routine patching, network security updates, and active desktop troubleshooting support." 
    }
  ];

  const tools = [
    { name: "Microsoft 365", icon: "📧" },
    { name: "Google Workspace", icon: "📁" },
    { name: "AWS Cloud Infrastructure", icon: "☁️" },
    { name: "Microsoft Azure Cloud", icon: "💎" },
    { name: "Oracle Cloud (OCI)", icon: "🏛️" },
    { name: "Fortinet Firewalls & Cisco", icon: "🛡️" }
  ];

  const processSteps = [
    { number: "01", title: "Requirement Analysis", desc: "Understanding operational challenges, identifying security goals, and scoping business growth schedules." },
    { number: "02", title: "Infrastructure Assessment", desc: "Conducting systems health checks, security assessments, and subscription fee audits." },
    { number: "03", title: "Solution Design", desc: "Designing customized network, cloud deployment models, software catalogs, and security rules." },
    { number: "04", title: "Implementation Planning", desc: "Drafting detailed deployment schedules, phase-wise milestones, rollback scripts, and migration workflows." },
    { number: "05", title: "Deployment Support", desc: "Coordinating with internal teams to implement migrations, configure firewalls, and launch licensing plans." },
    { number: "06", title: "Ongoing Optimization", desc: "Quarterly alignment checks, license adjustments, bandwidth metrics assessments, and feedback collection." }
  ];

  const reasons = [
    "Experienced IT Consultants",
    "Vendor-Neutral Recommendations",
    "Cost Optimization",
    "Security-First Approach",
    "Scalable IT Roadmap",
    "End-to-End Support"
  ];

  const faqs = [
    { q: "Do you provide IT audits?", a: "Yes, we conduct detailed assessments of your local servers, networks, workstations, emails, cloud configurations, and security postures to map critical vulnerabilities." },
    { q: "Can you help migrate to the cloud?", a: "Absolutely. We specify correct cloud deployment models (AWS/Azure/Private), map migration pipelines, and construct zero-downtime cutover plans." },
    { q: "Do you offer remote consulting?", a: "Yes, we support remote diagnostics, architecture calls, systems planning, and support globally, alongside on-site teams in Delhi NCR." },
    { q: "Can you optimize our existing infrastructure?", a: "Yes. We help reduce licensing overheads, consolidate servers, optimize virtual storage allocations, and audit subscription models." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-yellow-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm font-semibold text-yellow-400 mb-8"
          >
            <Lightbulb className="mr-2 h-4 w-4" /> 
            Forward Thinking Advice
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight"
          >
            IT Consulting <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4"
          >
            Strategic IT Consulting to Accelerate Your Business Growth
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We help businesses choose the right technology, optimize IT infrastructure, improve security, and plan scalable digital transformation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4"
          >
            <Link href="/contact?service=it-consulting" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(245,158,11,0.5)] border border-yellow-500/50 bg-yellow-600 hover:bg-yellow-700 text-md px-8 group font-semibold text-black">
                Book a Free Consultation
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
            About Our IT Consulting
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed text-balance"
          >
            Bytesool provides expert IT consulting services for startups, SMBs, and enterprises. Whether you're planning cloud migration, Microsoft 365 deployment, infrastructure modernization, or cybersecurity improvements, our consultants help you make informed technology decisions.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our IT Consulting Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We audit and align your technology structures to remove redundancy and reduce expenses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-yellow-500/40 transition-all group flex flex-col h-full"
              >
                <div className="mb-6 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform origin-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-grow">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-20 bg-card/20 relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platforms & Frameworks We Consult On</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We offer neutral configuration guidelines matching standard global providers.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {tools.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-yellow-400/40 hover:bg-white/10 transition-all"
              >
                <span className="text-xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Consulting Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">How we analyze, configure, and optimize systems to match your operational flow.</p>
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
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-yellow-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-yellow-500/50" />
                
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-yellow-500/20 transition-all hover:bg-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-yellow-400">{step.number}</span>
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
      <section className="w-full py-20 bg-card/10 relative border-y border-white/5">
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
                className="flex items-center gap-3 bg-background border border-white/5 p-6 rounded-2xl hover:border-yellow-400/20 transition-all"
              >
                <div className="bg-yellow-500/10 rounded-full p-2 text-yellow-500 flex-shrink-0">
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
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-yellow-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-yellow-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Need Expert IT Guidance?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contact?service=it-consulting">
              <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.6)] bg-yellow-600 hover:bg-yellow-700 font-semibold text-black">
                Schedule a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
