"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, Briefcase, GraduationCap, HeartPulse, Building, 
  Settings, Calendar, Truck, Layers, Check, ChevronDown, 
  ArrowRight, ShieldCheck, Zap, Code, Bell, CreditCard, 
  MapPin, MessageSquare, BarChart, Cloud, Link2, Layout
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

export default function MobileAppDevClient() {
  const buildItems = [
    { icon: <Briefcase className="text-purple-400" size={28} />, title: "Business Apps", desc: "Feature-rich corporate mobile setups tailored for workflows and services." },
    { icon: <GraduationCap className="text-pink-400" size={28} />, title: "School Apps", desc: "Parent portals, class scheduling tracking, homework, fee notifications, and digital galleries." },
    { icon: <HeartPulse className="text-rose-400" size={28} />, title: "Healthcare Apps", desc: "Telemedicine consulting portals, prescription planners, health tracking, and slot bookings." },
    { icon: <Building className="text-indigo-400" size={28} />, title: "Real Estate Apps", desc: "Browse listings, 3D home tours, search filtering, and seamless broker connect chats." },
    { icon: <Settings className="text-blue-400" size={28} />, title: "CRM Apps", desc: "Lead trackers, team communication hubs, sales flow checkers, and dashboard utilities." },
    { icon: <Calendar className="text-cyan-400" size={28} />, title: "Booking Apps", desc: "Reserved appointment pipelines for salons, clinics, fitness centers, and repair services." },
    { icon: <Truck className="text-amber-400" size={28} />, title: "Delivery Apps", desc: "Geo-routed courier deliveries, e-store logistics tracking, and active order updates." },
    { icon: <Layers className="text-emerald-400" size={28} />, title: "Custom Mobile Solutions", desc: "Tailored native systems designed specifically around your unique product requirements." }
  ];

  const platforms = [
    { title: "Android", desc: "Robust and optimized apps matching Android Material Design guidelines.", badge: "Google Play Store" },
    { title: "iOS", desc: "Prestige Cupertino designs tailored for iPhone layout rules and App Store policies.", badge: "Apple App Store" },
    { title: "Cross-Platform", desc: "Deploy to Android and iOS simultaneously utilizing modern code sharing stacks.", badge: "Single Codebase" }
  ];

  const features = [
    { icon: <Layout size={20} />, label: "Modern UI/UX" },
    { icon: <ShieldCheck size={20} />, label: "Secure Login (MFA)" },
    { icon: <Bell size={20} />, label: "Push Notifications" },
    { icon: <CreditCard size={20} />, label: "Payment Gateway" },
    { icon: <MapPin size={20} />, label: "Location Tracking" },
    { icon: <MessageSquare size={20} />, label: "Chat Integration" },
    { icon: <BarChart size={20} />, label: "Analytics Panel" },
    { icon: <Cloud size={20} />, label: "Cloud Integration" },
    { icon: <Link2 size={20} />, label: "API Integration" },
    { icon: <Smartphone size={20} />, label: "Admin Dashboard" }
  ];

  const technologies = [
    { name: "Flutter", icon: "💙" },
    { name: "React Native", icon: "⚛️" },
    { name: "Firebase", icon: "🔥" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Google Cloud", icon: "🌐" }
  ];

  const processSteps = [
    { number: "01", title: "Requirement Analysis", desc: "Detailing target platforms, app layouts, user roles, APIs, and overall product roadmap goals." },
    { number: "02", title: "Wireframe Design", desc: "Sketching core screens and functional layouts to map out the application user flow." },
    { number: "03", title: "UI Design", desc: "Crafting beautiful high-fidelity mockups of screens featuring customized dark/light theme systems." },
    { number: "04", title: "Development", desc: "Writing efficient and scalable mobile codebases through Flutter or React Native frameworks." },
    { number: "05", title: "Testing", desc: "Rigorous testing on Android emulators, iOS simulators, and direct test devices to guarantee zero lag." },
    { number: "06", title: "Deployment", desc: "Publishing your finished applications straight onto the Google Play Store and Apple App Store." },
    { number: "07", title: "Maintenance", desc: "Reviewing code compatibility with future OS releases, updating features, and tracking telemetry." }
  ];

  const reasons = [
    "Custom Development",
    "Scalable Architecture",
    "Affordable Cost",
    "Fast Delivery",
    "Dedicated Support",
    "Latest Technologies"
  ];

  const faqs = [
    { q: "How much does an app cost?", a: "The overall cost depends on feature depth, complexity, integration requirements, and target platforms (Android, iOS, or both). Get in touch with us for a custom quote based on your requirements." },
    { q: "Android or iOS?", a: "We build for both platforms! Using cross-platform technologies like Flutter and React Native, we can build for Android and iOS simultaneously, saving you time and cost." },
    { q: "Can you publish the app?", a: "Yes, we handle the entire deployment process, including preparing listing metadata, design assets, and publishing to Google Play Store and Apple App Store." },
    { q: "Will source code be provided?", a: "Yes, once the project is completed and handed over, you will have complete ownership of the source code and IP rights." },
    { q: "Do you provide maintenance?", a: "Yes, we provide post-deployment support and regular maintenance packages to ensure compatibility with new Android/iOS updates and to release new features." }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-20"></div>
        <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] bg-purple-500/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm font-semibold text-purple-400 mb-8"
          >
            <Smartphone className="mr-2 h-4 w-4" /> 
            Native & Cross-Platform Stacks
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl text-balance mb-6 leading-tight"
          >
            Mobile App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium mb-4"
          >
            Transform Your Ideas into Powerful Mobile Applications
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We build high-performance Android and iOS applications with modern UI/UX and scalable architecture.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4"
          >
            <Link href="/contact?service=mobile-app" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-500/50 bg-purple-600 hover:bg-purple-700 text-md px-8 group">
                Request a Free Consultation
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
            Whether you need a business application, booking app, school app, CRM app, or custom enterprise solution, Bytesool delivers reliable mobile applications that enhance customer experience.
          </motion.p>
        </div>
      </section>

      {/* What We Build */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Custom app layouts engineered for different target consumer models.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-background/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-purple-500/40 transition-all group flex flex-col h-full"
              >
                <div className="mb-4 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform origin-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed flex-grow">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Support */}
      <section className="w-full py-20 bg-card/20 relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platforms & Targets</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We deploy robust code targeting major native app stores & architectures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-background/50 border border-white/10 rounded-2xl p-8 hover:border-purple-400/30 transition-all"
              >
                <span className="absolute top-4 right-4 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xxs font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {platform.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 mt-2">{platform.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Features Included</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Advanced mobile features embedded inside our app environments.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-background/50 border border-white/5 p-4 rounded-xl hover:border-purple-500/20 transition-all hover:bg-background/80"
              >
                <div className="text-purple-500 flex-shrink-0">{feat.icon}</div>
                <span className="text-sm text-gray-300 font-medium">{feat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-20 bg-card/10 relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We construct apps using native compilers and secure backend microservices.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-purple-400/40 hover:bg-white/10 transition-all"
              >
                <span className="text-xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our structured pipeline ensuring fluid application delivery from blueprint to app store.</p>
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
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 border-4 border-background bg-purple-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-purple-500/50" />
                
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-purple-500/20 transition-all hover:bg-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-purple-400">{step.number}</span>
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
      <section className="w-full py-20 bg-card/20 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Bytesool</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-background border border-white/5 p-6 rounded-2xl hover:border-purple-400/20 transition-all"
              >
                <div className="bg-purple-500/10 rounded-full p-2 text-purple-500 flex-shrink-0">
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
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-t from-purple-900/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's Build Your Mobile App
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contact?service=mobile-app">
              <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.6)] bg-purple-600 hover:bg-purple-700">
                Request a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
