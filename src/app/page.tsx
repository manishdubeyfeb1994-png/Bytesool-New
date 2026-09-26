"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cpu, Globe, ArrowRight, Zap, CheckCircle2, Star, TrendingUp, Code, Database, BrainCircuit, Sparkles, ChevronDown, Cloud, Shield, ExternalLink, Building2, Smartphone, Paintbrush, Lightbulb, HardDrive, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function FAQItem({ question, answer }: { question: string, answer: string }) {
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

export default function Home() {

  const features = [
    { icon: <BrainCircuit size={32} />, title: "AI Integration", desc: "Automate workflows, launch intelligent AI assistants, and build smarter customer experiences.", link: "/services/ai-integration" },
    { icon: <Code size={32} />, title: "Web Development", desc: "Professional websites and web apps designed to impress, convert, and scale.", link: "/services/web-development" },
    { icon: <TrendingUp size={32} />, title: "Digital Marketing", desc: "Data-driven campaigns that improve visibility, generate leads, and grow revenue.", link: "/services/digital-marketing" },
    { icon: <Database size={32} />, title: "Cloud Architecture", desc: "Secure and scalable cloud infrastructure for modern businesses and future growth.", link: "/services/cloud-architecture" },
    { icon: <Cloud size={32} />, title: "Cloud & Email Solutions", desc: "Enterprise-grade cloud platforms, Microsoft 365, Google Workspace, and seamless migrations.", link: "/services/cloud-email-solutions" },
    { icon: <Shield size={32} />, title: "Cybersecurity & Hardware", desc: "Protect your business with security systems, CCTV, and reliable IT hardware.", link: "/services/cybersecurity-hardware" },
  ];

  const testimonials = [
    { name: "Akanksha Mishra", role: "Founder, London Kids India", text: "Excellent communication, clean design, and smooth execution. Highly recommended.", rating: 5 },
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-primary/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-8"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Leading AI Solutions Company in India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight px-2"
          >
            Smart IT, AI & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Digital Solutions</span> Company for Modern Businesses
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-4 mb-10 items-center justify-center max-w-4xl px-2"
          >
            <p className="text-lg md:text-xl text-gray-300 text-balance font-medium">
              Bytesool is a technology-driven company delivering innovative IT, AI, Cloud, Cybersecurity &amp; Digital solutions.
            </p>
            <p className="text-base md:text-lg text-gray-400 text-balance leading-relaxed">
              From website and app development to digital marketing, AI automation, private cloud infrastructure, IT hardware procurement, and CCTV &amp; cybersecurity — we provide complete end-to-end solutions. Our mission is to simplify technology and create smart systems that drive real growth. Partner with Bytesool and take your business to the next digital level 🚀
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-primary/50 text-sm sm:text-md px-6 sm:px-8 group">
                Claim Your Free AI Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="https://wa.me/+919289411974" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-sm sm:text-md px-6 sm:px-8 bg-white/5 backdrop-blur-md">
                Chat on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="w-full py-24 bg-card/30 relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Architecting the Future</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just build websites. We integrate entire digital ecosystems designed to dominate your market.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, i) => {
              const CardContent = (
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`h-full bg-background/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-colors group ${feature.link ? "cursor-pointer" : "cursor-default"}`}
                >
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform origin-left text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    {feature.title}
                    {feature.link && (
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                    )}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              );

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="h-full"
                >
                  {feature.link ? (
                    <Link href={feature.link} className="block h-full">
                      {CardContent}
                    </Link>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 sm:py-24 overflow-hidden relative">
        <div className="absolute top-1/2 right-0 w-[80vw] h-[80vw] md:w-[500px] md:h-[500px] bg-purple-600/10 blur-[80px] md:blur-[100px] rounded-full -z-10 pointer-events-none hidden md:block" />
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Why Hundreds of Businesses Trust Bytesool With Their Growth</h2>
            <p className="text-gray-400 text-lg">We are radically transparent, painfully obsessed with performance, and deeply specialized in AI automation.</p>

            <ul className="space-y-4 pt-4">
              {[
                "100% In-House Dedicated Engineering Teams",
                "Proven Track Record in SEO & Digital Dominance",
                "Enterprise-Grade AI Security Frameworks",
                "Conversion-Obsessed UI/UX Designers"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link href="/about">
                <Button variant="outline" className="px-8 font-semibold">Explore Our Mission</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-2xl"
          >
            {/* Visual Glassmorphic Tech Graphic */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 opacity-20 blur backdrop-blur-3xl rounded-2xl z-0"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                <div className="bg-primary/20 p-3 rounded-full text-primary"><Zap size={24} /></div>
                <div>
                  <h4 className="font-semibold text-white">Lightning Fast Delivery</h4>
                  <p className="text-xs text-gray-400">95% of projects delivered before deadline</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                <div className="bg-purple-500/20 p-3 rounded-full text-purple-400"><TrendingUp size={24} /></div>
                <div>
                  <h4 className="font-semibold text-white">Data Backed Strategies</h4>
                  <p className="text-xs text-gray-400">Average client ROI of 314% YoY</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Work / Portfolio Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] md:w-[500px] md:h-[500px] bg-primary/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6">
              <Building2 className="mr-2 h-4 w-4" /> Our Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real projects. Real impact. Here's what we've built for our clients.</p>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 max-w-2xl w-full"
            >
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500" />
              <div className="p-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-3">
                      Education | School Website
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">London Kids India</h3>
                    <p className="text-sm text-gray-500">Greater Noida West, Noida Extension</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 flex-shrink-0 border border-white/10">
                    <Globe size={32} className="text-primary" />
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8">
                  Bytesool designed and developed the complete website for London Kids India — one of the best preschools in Greater Noida West. The project includes smart classroom showcases, online admissions flow, day care information, SEO optimization, and a fully mobile-responsive design.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Next.js", "SEO Optimized", "Mobile-First Design"].map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-300">{tag}</span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://www.londonkidsindia.com" target="_blank" rel="noopener noreferrer">
                    <Button className="group/btn h-11 px-6 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                      View Live Site
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <Link href="/portfolio">
                    <Button variant="outline" className="h-11 px-6 bg-white/5">
                      View All Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 sm:py-20 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 sm:mb-12">The Market Has Spoken</h2>
          <div className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col justify-between max-w-sm w-full hover:border-primary/20 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex gap-0.5 mb-4 text-yellow-500 justify-center sm:justify-start">
                    {[...Array(test.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-300 italic mb-6 text-sm md:text-base text-center sm:text-left leading-relaxed">"{test.text}"</p>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center font-bold text-white shadow-md text-base">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white leading-none">{test.name}</h4>
                    {test.role && <p className="text-[11px] text-gray-500 mt-1">{test.role}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How long does it take to build a custom website?", a: "Typically, a custom high-performance website takes 2-4 weeks. Larger enterprise platforms or SaaS MVPs can take 6-12 weeks depending on the complexity of the AI integrations and backend architecture." },
              { q: "Do you provide ongoing maintenance and support?", a: "Yes, we offer comprehensive maintenance packages that include security updates, speed optimization, and regular content updates to keep your ecosystem running at peak performance." },
              { q: "What is your pricing model for AI solutions?", a: "We offer both project-based fixed pricing and performance-based retainers. Since every AI model requires unique tuning, we provide a detailed cost breakdown after our initial discovery call." },
              { q: "Are your services available outside India?", a: "Absolutely! While we are headquartered in India, we partner with clients globally, including the US, UK, and Middle East, using agile remote collaboration tools." },
              { q: "How do you ensure data security in AI integrations?", a: "We implement Enterprise-Grade security frameworks, including end-to-end encryption and zero-trust architecture, ensuring your proprietary data remains safe and private." }
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA Banner */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-primary/20 blur-[100px] md:blur-[150px] rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ready to Build Your Digital Empire?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Stop losing leads to competitors. Partner with the top IT company in India to supercharge your brand and revenue today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                See How We Scale Businesses
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
