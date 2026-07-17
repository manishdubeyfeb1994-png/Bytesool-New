"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, Search, Megaphone, PenTool, MapPin, BarChart3, 
  Check, ChevronDown, ArrowRight, ShieldCheck, Zap, Code,
  Eye, FileText, Settings, Users, Percent, HelpCircle
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

export default function DigitalMarketingClient() {
  const marketingServices = [
    { 
      icon: <Search className="text-emerald-400" size={32} />, 
      title: "Search Engine Optimization (SEO)", 
      desc: "Improve your search relevance visibility, rank higher on major keywords, and draw cost-free organic business leads." 
    },
    { 
      icon: <Megaphone className="text-teal-400" size={32} />, 
      title: "Google Ads (PPC)", 
      desc: "Instant traffic capture and high-converting leads through targeted Paid Search, Display, and Video campaigns." 
    },
    { 
      icon: <Users className="text-cyan-400" size={32} />, 
      title: "Social Media Marketing", 
      desc: "Cultivate interactive community engagement on Instagram, Facebook, LinkedIn, and YouTube channels." 
    },
    { 
      icon: <PenTool className="text-indigo-400" size={32} />, 
      title: "Content Marketing", 
      desc: "Strategic blogging, copy drafting, infographics, and layouts designed to engage and convert readers." 
    },
    { 
      icon: <MapPin className="text-rose-400" size={32} />, 
      title: "Local SEO", 
      desc: "Optimized Google Business Profiles and local directories citations to dominate regional map packs." 
    },
    { 
      icon: <BarChart3 className="text-blue-400" size={32} />, 
      title: "Website Analytics & Reporting", 
      desc: "Actionable traffic diagnostics, behavioral heatmaps, and ROI tracking built around GA4 consoles." 
    }
  ];

  const features = [
    { icon: <Eye size={20} />, label: "SEO Audit" },
    { icon: <Search size={20} />, label: "Keyword Research" },
    { icon: <Code size={20} />, label: "On-Page SEO" },
    { icon: <Settings size={20} />, label: "Technical SEO" },
    { icon: <Megaphone size={20} />, label: "Google Ads Management" },
    { icon: <Users size={20} />, label: "Social Media Campaigns" },
    { icon: <FileText size={20} />, label: "Monthly Performance Reports" },
    { icon: <TrendingUp size={20} />, label: "Competitor Analysis" }
  ];

  const tools = [
    { name: "Google Ads", icon: "🌐" },
    { name: "Google Analytics 4", icon: "📊" },
    { name: "Facebook Ads Manager", icon: "📱" },
    { name: "Google Search Console", icon: "🔍" },
    { name: "SEMrush", icon: "🎯" },
    { name: "Ahrefs", icon: "📈" },
    { name: "Meta Business Suite", icon: "👥" },
    { name: "Mailchimp", icon: "📨" }
  ];

  const processSteps = [
    { number: "01", title: "Business Analysis", desc: "Evaluating current performance, reviewing key competitors, and auditing search landscape opportunities." },
    { number: "02", title: "Strategy Planning", desc: "Drafting media budgets, allocating campaign focus areas, selecting high-intent keywords, and formulating content plans." },
    { number: "03", title: "Campaign Setup", desc: "Designing ad copies, optimizing landing pages, setting conversion signals, and structuring search bids." },
    { number: "04", title: "Optimization", desc: "Continuous A/B testing of creatives, adding negative keywords, monitoring CTR, and refining bid caps." },
    { number: "05", title: "Monthly Reporting", desc: "Sharing transparent diagnostics reports mapping impressions, active sessions, conversions, and exact ROI." }
  ];

  const reasons = [
    "Result-Oriented Strategies",
    "Transparent Reporting",
    "Affordable Packages",
    "Experienced Marketing Team",
    "Customized Solutions"
  ];

  const faqs = [
    { q: "How long does SEO take?", a: "SEO is a continuous investment. Organic performance typically reflects tangible growth in traffic and keywords tracking within 3 to 6 months, depending on the keyword competition in your niche." },
    { q: "Do you manage Google Ads?", a: "Yes, we handle complete end-to-end Google Ads (PPC) and Social PPC setup, bid targeting, keyword research, ad copywriting, negative lists, and performance optimizations." },
    { q: "Will I receive monthly reports?", a: "Absolutely. We supply comprehensive monthly reports outlining search visibility growth, exact conversion numbers, organic session trends, and ad spending efficiencies." },
    { q: "Can you improve local rankings?", a: "Yes, our local SEO solutions focus on structuring your Google Business Profile reviews, building directory Citations, and establishing geo-targeted local presence." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-emerald-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-400 mb-8"
          >
            <TrendingUp className="mr-2 h-4 w-4" /> 
            ROI Focused Digital Marketing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight"
          >
            Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4"
          >
            Grow Your Business with Data-Driven Digital Marketing Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Increase your online visibility, generate quality leads, and boost sales with customized digital marketing strategies.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4"
          >
            <Link href="/contact?service=digital-marketing" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-500/50 bg-emerald-600 hover:bg-emerald-700 text-md px-8 group">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-md px-8 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black">
                Request a Quote
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
            About Our Digital Marketing Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed text-balance"
          >
            At Bytesool, we help businesses grow through effective digital marketing strategies. From SEO and Google Ads to Social Media Marketing and content creation, our goal is to increase your brand visibility and generate measurable results.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Digital Marketing Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We deploy robust marketing channels that capture attention and trigger actions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-emerald-500/40 transition-all group flex flex-col h-full"
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
            <p className="text-gray-400 max-w-2xl mx-auto">Standard processes and assets covered under our optimization packages.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-background/50 border border-white/5 p-4 rounded-xl hover:border-emerald-500/20 transition-all hover:bg-background/80"
              >
                <div className="text-emerald-500 flex-shrink-0">{feat.icon}</div>
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
            <h2 className="text-3xl font-bold mb-4">Tools & Platforms We Use</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We leverage industry-leading analytic suite capabilities to benchmark campaigns.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {tools.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-emerald-400/40 hover:bg-white/10 transition-all"
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our roadmap for taking you from audit to scaled inbound growth channels.</p>
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
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-emerald-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-500/50" />
                
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-emerald-500/20 transition-all hover:bg-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-emerald-400">{step.number}</span>
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
                className="flex items-center gap-3 bg-background border border-white/5 p-6 rounded-2xl hover:border-emerald-400/20 transition-all"
              >
                <div className="bg-emerald-500/10 rounded-full p-2 text-emerald-500 flex-shrink-0">
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
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-emerald-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contact?service=digital-marketing">
              <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.6)] bg-emerald-600 hover:bg-emerald-700">
                Get Free Marketing Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
