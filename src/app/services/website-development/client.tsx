"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Code, Globe, Laptop, Store, GraduationCap, Rocket, RefreshCw, 
  Check, ChevronDown, CheckCircle2, Cpu, ArrowRight, ShieldCheck,
  Smartphone, FastForward, Search, MapPin, Share2, Key
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

export default function WebsiteDevClient() {
  const offerings = [
    { 
      icon: <Laptop className="text-blue-400" size={32} />, 
      title: "Business Website Development", 
      desc: "Custom-built, professional websites suited for startups, local businesses, and corporate enterprises looking to establish credibility." 
    },
    { 
      icon: <Globe className="text-indigo-400" size={32} />, 
      title: "Corporate Website", 
      desc: "Immersive multi-page portals designed to showcase company history, work portfolios, stakeholder reports, and brand values." 
    },
    { 
      icon: <Store className="text-purple-400" size={32} />, 
      title: "E-commerce Website", 
      desc: "Robust online stores with secure checkout, payment gateway integrations, catalog management, and automated stock notifications." 
    },
    { 
      icon: <GraduationCap className="text-pink-400" size={32} />, 
      title: "School & Educational Website", 
      desc: "Integrated portals with admission forms, digital galleries, upcoming events calendar, notices, fee details, and parent communication boards." 
    },
    { 
      icon: <Rocket className="text-rose-400" size={32} />, 
      title: "Landing Pages", 
      desc: "Highly targetted, ultra-fast single-page landing experiences designed specifically for maximum conversions on ad campaigns." 
    },
    { 
      icon: <RefreshCw className="text-cyan-400" size={32} />, 
      title: "Website Redesign", 
      desc: "Re-platforming and complete visual/structural update of your legacy site to modern standards with updated UI/UX layouts." 
    }
  ];

  const features = [
    { icon: <Smartphone size={20} />, label: "Responsive Design" },
    { icon: <Search size={20} />, label: "SEO Friendly" },
    { icon: <FastForward size={20} />, label: "Fast Loading Speed" },
    { icon: <CheckCircle2 size={20} />, label: "Mobile Optimized" },
    { icon: <ShieldCheck size={20} />, label: "Secure Development" },
    { icon: <Code size={20} />, label: "Contact Forms" },
    { icon: <MapPin size={20} />, label: "Google Maps Integration" },
    { icon: <Share2 size={20} />, label: "Social Media Integration" },
    { icon: <Key size={20} />, label: "SSL Support" },
    { icon: <Cpu size={20} />, label: "Admin Panel (if required)" }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "WordPress", icon: "📝" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Vercel", icon: "▲" },
    { name: "AWS", icon: "☁️" }
  ];

  const processSteps = [
    { number: "01", title: "Requirement Discussion", desc: "Understanding your project goals, target audience, brand aesthetic, and technical specifications." },
    { number: "02", title: "Planning", desc: "Formulating site hierarchy, wireframe flows, tech stack selection, and milestone scheduling." },
    { number: "03", title: "UI/UX Design", desc: "Creating high-fidelity interactive design prototypes using modern design rules to get your approval." },
    { number: "04", title: "Development", desc: "Writing clean, optimized code using premium technologies (Next.js/React) for frontend and backend logic." },
    { number: "05", title: "Testing", desc: "Performing functional audits, Cross-Browser evaluations, responsive styling tests, and performance benchmark runs." },
    { number: "06", title: "Deployment", desc: "Configuring server hosting, launching domains, integrating SSL, and going live on the production server." },
    { number: "07", title: "Support & Maintenance", desc: "Delivering monthly package updates, server uptime reviews, and immediate assistance for content uploads." }
  ];

  const reasons = [
    "Experienced Developers",
    "Affordable Pricing",
    "On-Time Delivery",
    "Dedicated Support",
    "SEO Ready Website",
    "Scalable Architecture"
  ];

  const faqs = [
    { q: "How long does it take?", a: "Typically, a custom high-performance website takes 2-4 weeks. Larger enterprise platforms or SaaS MVPs can take 6-12 weeks depending on the complexity of the requirements and depth of integrations." },
    { q: "Do you redesign existing websites?", a: "Yes, we can revamp and modernize your current website with a fresh UI/UX, updated styling, and improved performance features while preserving your existing SEO rankings." },
    { q: "Will my website be mobile friendly?", a: "Absolutely. All our websites are built with a mobile-first approach, ensuring they look and perform great on desktops, tablets, and smartphones alike." },
    { q: "Do you provide hosting?", a: "Yes, we assist with hosting setup, domain redirection, and SSL deployment on premium reliable platforms like Vercel, AWS, or local secure servers." },
    { q: "Can you maintain my website?", a: "Yes, we offer ongoing maintenance and support retainers to regularly update content, perform security audits, and optimize speed." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-blue-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <Breadcrumb />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-400 mb-8"
          >
            <Code className="mr-2 h-4 w-4" /> 
            Tailored Coding & Design
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight"
          >
            Website Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4"
          >
            Build Fast, Secure & High-Performance Websites for Your Business
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We create modern, responsive, and SEO-friendly websites that help businesses establish a strong online presence and generate more leads.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4"
          >
            <Link href="/contact?service=web-dev" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-500/50 bg-blue-600 hover:bg-blue-700 text-md px-8 group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-md px-8 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black">
                Contact Us
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
            At Bytesool, we design and develop custom websites tailored to your business goals. Whether you need a business website, e-commerce store, school website, or corporate portal, we deliver scalable and user-friendly solutions using the latest technologies.
          </motion.p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From validation prototypes to scalable enterprise grade platforms, we do it all.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-blue-500/40 transition-all group flex flex-col h-full"
              >
                <div className="mb-6 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform origin-center">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{offering.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-grow">{offering.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-20 bg-card/20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Features Included</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Standard premium elements included natively in all our website implementations.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-background/50 border border-white/5 p-4 rounded-xl hover:border-blue-500/20 transition-all hover:bg-background/80"
              >
                <div className="text-blue-500 flex-shrink-0">{feat.icon}</div>
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
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We use modern, fast, and secure tools to build responsive web infrastructures.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-blue-400/40 hover:bg-white/10 transition-all"
              >
                <span className="text-xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="w-full py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">How we take your idea from initial thought to a live ranking production system.</p>
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
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-500/50" />
                
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-blue-500/20 transition-all hover:bg-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-blue-400">{step.number}</span>
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
                className="flex items-center gap-3 bg-background border border-white/5 p-6 rounded-2xl hover:border-blue-400/20 transition-all"
              >
                <div className="bg-blue-500/10 rounded-full p-2 text-blue-500 flex-shrink-0">
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
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-blue-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Build Your Website?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contact?service=web-dev">
              <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.6)] bg-blue-600 hover:bg-blue-700">
                Request a Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
