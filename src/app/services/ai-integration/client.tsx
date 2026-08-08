"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Bot, MessageSquare, Workflow, Mail, Search, Check, ChevronDown, ArrowRight, Cpu, Sparkles, Building2, ShieldCheck } from "lucide-react";
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

export default function AiIntegrationClient() {
  const services = [
    { icon: <Bot className="text-cyan-400" size={28} />, title: "AI Chatbots", desc: "Website, WhatsApp, and support chatbots that answer questions instantly.", color: "from-cyan-500 to-blue-600" },
    { icon: <MessageSquare className="text-purple-400" size={28} />, title: "AI Voice Bots", desc: "Voice-enabled support automation for calls and customer interaction.", color: "from-purple-500 to-fuchsia-600" },
    { icon: <Workflow className="text-green-400" size={28} />, title: "Workflow Automation", desc: "Trigger approvals, follow-ups, and tasks using AI-driven business logic.", color: "from-green-500 to-emerald-600" },
    { icon: <Mail className="text-amber-400" size={28} />, title: "Email & WhatsApp Automation", desc: "Automate outreach, support, reminders, and lead follow-up across channels.", color: "from-amber-500 to-orange-600" },
    { icon: <Search className="text-rose-400" size={28} />, title: "AI Knowledge Base", desc: "Build smart internal and customer-facing knowledge systems with AI search.", color: "from-rose-500 to-red-600" },
    { icon: <Cpu className="text-indigo-400" size={28} />, title: "Custom AI Applications", desc: "Create tailored AI tools for sales, operations, support, and analytics.", color: "from-indigo-500 to-violet-600" }
  ];

  const technologies = ["OpenAI", "Claude", "Google Gemini", "LangChain", "Python", "Node.js", "Next.js"];
  const industries = ["Healthcare", "Education", "Retail", "Manufacturing", "Finance", "Real Estate"];
  const process = ["Requirement Analysis", "AI Strategy", "Development", "Integration", "Testing", "Deployment", "Support"];
  const faqs = [
    { q: "What is AI automation?", a: "AI automation combines intelligent workflows with business rules so repetitive tasks can run automatically and accurately." },
    { q: "Can AI integrate with my website?", a: "Yes, we can integrate AI chatbots, assistants, and automation into your existing website or application." },
    { q: "Do you provide chatbot development?", a: "Yes, we build custom chatbots for support, lead generation, FAQs, and internal operations." },
    { q: "Can AI connect with WhatsApp?", a: "Yes, we can connect AI workflows with WhatsApp Business, CRM tools, and other business systems." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-cyan-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        <Breadcrumb />
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-400 mb-8">
            <BrainCircuit className="mr-2 h-4 w-4" /> Intelligent Automation
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Integration</span> Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4">Transform your business with intelligent AI solutions and automation.</motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }} className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">Automate workflows, improve customer experience, and boost productivity using AI-powered agents, chatbots, and intelligent business systems.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4">
            <Link href="/contact?service=ai-integration" className="w-full sm:w-auto"><Button size="lg" className="w-full shadow-[0_0_20px_rgba(34,211,238,0.5)] border border-cyan-500/50 bg-cyan-600 hover:bg-cyan-700 text-md px-8 group">Get Free Consultation<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Button></Link>
            <Link href="/contact" className="w-full sm:w-auto"><Button size="lg" variant="outline" className="w-full text-md px-8 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black">Request a Quote</Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 bg-card/10 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">About AI Integration</h2>
          <p className="text-lg text-gray-300 leading-relaxed">We design and deploy AI chatbots, AI agents, workflow automation, AI assistants, and smart business process automation that make your operations faster, smarter, and more responsive.</p>
        </div>
      </section>

      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our AI Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From conversational AI to intelligent automation, we help businesses scale smarter with practical AI solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-cyan-500/40 transition-all group">
                <div className={`mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center`}>{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-card/20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Technologies We Work With</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => <span key={i} className="rounded-full border border-white/10 bg-background/70 px-4 py-2 text-sm text-gray-300">{tech}</span>)}
          </div>
        </div>
      </section>

      <section className="w-full py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold mb-4">Industries We Serve</h2><p className="text-gray-400 max-w-xl mx-auto">We adapt AI solutions to the unique needs of different business sectors.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, i) => <div key={i} className="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-gray-300">{industry}</div>)}
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2><p className="text-gray-400 max-w-2xl mx-auto">A structured roadmap from discovery to deployment and ongoing support.</p></div>
          <div className="relative border-l border-white/10 max-w-3xl mx-auto space-y-12 pl-6 md:pl-10">
            {process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative">
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-cyan-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-cyan-500/50" />
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6"><h3 className="text-xl font-bold text-white mb-1">{step}</h3><p className="text-gray-400 text-sm">Step {i + 1} in our AI implementation roadmap.</p></div>
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

      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-cyan-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <Link href="/contact?service=ai-integration"><Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.6)] bg-cyan-600 hover:bg-cyan-700">Get Free Consultation</Button></Link>
        </div>
      </section>
    </main>
  );
}
