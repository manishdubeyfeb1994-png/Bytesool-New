"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Paintbrush, Palette, PenTool, Layout, FileText, Image, 
  Layers, Check, ChevronDown, ArrowRight, ShieldCheck, Zap, 
  Code, RefreshCw, Layers2, Sparkles, Files, HelpCircle
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

export default function BrandingDesignClient() {
  const designServices = [
    { 
      icon: <Palette className="text-pink-400" size={32} />, 
      title: "Logo Design", 
      desc: "Unique, high-definition, and memorable logo vector files crafted to encapsulate your company's core values." 
    },
    { 
      icon: <Layers className="text-rose-400" size={32} />, 
      title: "Brand Identity", 
      desc: "Formulate cohesive brand guidelines, defining color hierarchies, font guides, and visual guidelines." 
    },
    { 
      icon: <FileText className="text-purple-400" size={32} />, 
      title: "Business Cards", 
      desc: "Premium, print-ready business cards, letterheads, and corporate envelopes mirroring consistent brand motifs." 
    },
    { 
      icon: <Files className="text-indigo-400" size={32} />, 
      title: "Brochures & Flyers", 
      desc: "Immersive multi-fold brochures, booklets, and marketing flyers created for both digital views and physical printing." 
    },
    { 
      icon: <Image className="text-cyan-400" size={32} />, 
      title: "Social Media Creatives", 
      desc: "Eye-catching post layouts, banner images, reels thumbnails, and templates designed in optimized formats." 
    },
    { 
      icon: <Layers2 className="text-blue-400" size={32} />, 
      title: "Posters & Banners", 
      desc: "High-resolution indoor/outdoor digital banners, display ads, roll-up displays, and promotional posters." 
    }
  ];

  const features = [
    { icon: <Palette size={20} />, label: "Custom Logo Design" },
    { icon: <Layers size={20} />, label: "Brand Guidelines" },
    { icon: <FileText size={20} />, label: "Business Card Design" },
    { icon: <Layers2 size={20} />, label: "Social Media Kit" },
    { icon: <Files size={20} />, label: "Brochure Design" },
    { icon: <Image size={20} />, label: "Banner Design" },
    { icon: <Sparkles size={20} />, label: "Marketing Creatives" }
  ];

  const tools = [
    { name: "Adobe Illustrator", icon: "🎨" },
    { name: "Adobe Photoshop", icon: "📷" },
    { name: "Figma", icon: "📐" },
    { name: "Adobe InDesign", icon: "📖" },
    { name: "CorelDraw", icon: "✏️" },
    { name: "Canva Pro", icon: "👑" }
  ];

  const processSteps = [
    { number: "01", title: "Requirement Discussion", desc: "Understanding company scope, target consumer demographics, layout preferences, and style guides." },
    { number: "02", title: "Research", desc: "In-depth competitor analysis, industry visual trends research, and developing mood boards." },
    { number: "03", title: "Concept Design", desc: "Creating initial vector designs, testing typography alignments, and rendering brand mocks." },
    { number: "04", title: "Review", desc: "Coordinating feedback, making conceptual modifications, and refining typography variables." },
    { number: "05", title: "Final Delivery", desc: "Packaging all required high-resolution layouts, including raw vector formats (AI, PSD, EPS, PDF, PNG)." }
  ];

  const reasons = [
    "Creative Designs",
    "Modern Brand Identity",
    "Fast Delivery",
    "Unlimited Revision (As per package)",
    "High-Resolution Files"
  ];

  const faqs = [
    { q: "How many logo concepts are included?", a: "Depending on the chosen package, we supply 2 to 5 initial distinct design layouts to compare and pick from." },
    { q: "Do you provide source files?", a: "Yes, once final files are approved, we deliver complete editable open vector formats (AI, PSD, Figma) along with print-ready vector PDFs and digital PNG/JPEGs." },
    { q: "Can you redesign an existing logo?", a: "Yes, we can modernise your obsolete logo, re-adjust colors, vectorize low-resolution images, or optimize it for digital media." },
    { q: "Do you create social media posts?", a: "Yes, we design social media post templates, banner creatives, cover art, story guidelines, and grid themes." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-pink-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <Breadcrumb />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1 text-sm font-semibold text-pink-400 mb-8"
          >
            <Paintbrush className="mr-2 h-4 w-4" /> 
            Inspiring Visual Design
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight"
          >
            Branding & Graphic Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4"
          >
            Build a Powerful Brand Identity That Stands Out
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Professional branding and creative design solutions that make your business memorable.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4"
          >
            <Link href="/contact?service=branding-design" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(236,72,153,0.5)] border border-pink-500/50 bg-pink-600 hover:bg-pink-700 text-md px-8 group">
                Start Your Branding Project
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
            About Our Branding Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed text-balance"
          >
            Your brand is more than just a logo. We create complete visual identities that help businesses build trust, attract customers, and leave a lasting impression.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Design Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We construct unified graphic assets that synchronize your brand narrative across channels.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-pink-500/40 transition-all group flex flex-col h-full"
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

      {/* Features Grid */}
      <section className="w-full py-20 bg-card/20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What's Included</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Core parameters and deliverables structured inside our branding initiatives.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-background/50 border border-white/5 p-4 rounded-xl hover:border-pink-500/20 transition-all hover:bg-background/80"
              >
                <div className="text-pink-500 flex-shrink-0">{feat.icon}</div>
                <span className="text-sm text-gray-300 font-medium">{feat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Software & Technologies We Use</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We construct assets in modern lossless vector environments.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {tools.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-pink-400/40 hover:bg-white/10 transition-all"
              >
                <span className="text-xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="w-full py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Design Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">How we brainstorm, mock, and finalize custom vector elements.</p>
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
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-pink-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-pink-500/50" />
                
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-pink-500/20 transition-all hover:bg-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-pink-400">{step.number}</span>
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
                className="flex items-center gap-3 bg-background border border-white/5 p-6 rounded-2xl hover:border-pink-400/20 transition-all"
              >
                <div className="bg-pink-500/10 rounded-full p-2 text-pink-500 flex-shrink-0">
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
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-pink-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-pink-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's Build Your Brand Identity
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contact?service=branding-design">
              <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(236,72,153,0.6)] bg-pink-600 hover:bg-pink-700">
                Request a Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
