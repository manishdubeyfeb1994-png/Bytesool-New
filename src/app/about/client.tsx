"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, DollarSign, Handshake, Zap, Eye, X, Check, ArrowRight } from "lucide-react";

// Simple counter component
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutClient() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const modalData = [
    {
      title: "Project-Based Engagement",
      description: "At Bytesool, we work on a project-based model, ensuring every project has clearly defined requirements, timelines, milestones, and deliverables.",
      sections: [
        {
          title: "What's Included",
          items: [
            "Fixed project scope",
            "Defined timeline & milestones",
            "Dedicated project manager",
            "Weekly progress updates",
            "Quality assurance & testing",
            "Post-launch support"
          ]
        },
        {
          title: "Benefits",
          items: [
            "No unnecessary monthly charges",
            "Transparent project execution",
            "Faster delivery",
            "Clear communication"
          ]
        }
      ]
    },
    {
      title: "Transparent Pricing",
      description: "We believe in complete pricing transparency. Before starting any project, we provide a detailed proposal outlining the scope of work, timelines, pricing, and deliverables.",
      sections: [
        {
          title: "You Get",
          items: [
            "Fixed quotations",
            "No hidden charges",
            "Flexible pricing models",
            "Milestone-based payments",
            "Detailed invoices"
          ]
        },
        {
          title: "Ideal For",
          items: [
            "Startups",
            "SMEs",
            "Enterprises"
          ]
        }
      ]
    },
    {
      title: "Expert Network",
      description: "Bytesool collaborates with experienced developers, designers, cloud consultants, digital marketers, and cybersecurity professionals to deliver high-quality solutions.",
      sections: [
        {
          title: "Our Expertise",
          items: [
            "Website Development",
            "Mobile Apps",
            "Microsoft 365",
            "Cloud Solutions",
            "AWS & Azure",
            "Digital Marketing",
            "UI/UX Design",
            "Cybersecurity",
            "AI Automation"
          ]
        },
        {
          title: "Why It Matters",
          items: [
            "Every project is handled by specialists with relevant experience, ensuring better quality and faster delivery."
          ]
        }
      ]
    },
    {
      title: "Flexible Solutions",
      description: "Every business is different. That's why we design scalable solutions tailored to your goals, budget, and future growth.",
      sections: [
        {
          title: "We Offer",
          items: [
            "Custom Development",
            "Scalable Architecture",
            "Cloud-Ready infrastructure",
            "API Integrations",
            "Ongoing Support",
            "Future Enhancements"
          ]
        },
        {
          title: "Suitable For",
          items: [
            "Startups",
            "Small Businesses",
            "Enterprises",
            "Educational Institutions",
            "Healthcare",
            "Retail"
          ]
        }
      ]
    }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <section className="w-full pt-32 pb-16 text-center px-4 relative flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[80vw] md:w-[600px] h-[400px] bg-purple-600/20 blur-[100px] md:blur-[150px] rounded-[100%] pointer-events-none -z-10" />
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-10 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Bytesool
        </motion.h1>
        
        <motion.div 
          className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto space-y-6 text-balance leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p>
            Bytesool is a fast-growing Smart IT, AI & Digital Solutions Company committed to helping businesses succeed in the digital world.
          </p>
          <p>
            We specialize in delivering customized, scalable, and secure technology solutions that match each client's goals. Our team combines creativity, technical expertise, and smart automation to build impactful digital products.
          </p>
          <p>
            We focus on quality, innovation, and customer satisfaction in everything we do. At Bytesool, we believe technology should be simple, powerful, and result-driven. We don't just build solutions — we build long-term partnerships. Your success is our biggest achievement.
          </p>
        </motion.div>
      </section>

      {/* Core Values / Features */}
      <section className="w-full container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { icon: <Target size={32} />, title: "Project-Based", desc: "Clear scope and timeline for every project" },
             { icon: <DollarSign size={32} />, title: "Transparent Pricing", desc: "No hidden costs, upfront pricing" },
             { icon: <Handshake size={32} />, title: "Expert Network", desc: "Skilled freelancers and professionals" },
             { icon: <Zap size={32} />, title: "Flexible Solutions", desc: "No long-term commitments required" }
           ].map((feat, i) => (
             <motion.button
               key={i}
               type="button"
               onClick={() => setActiveModal(i)}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -5 }}
               className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-pink-500/30 transition-colors group cursor-pointer"
             >
               <div className="text-pink-500 mb-6 bg-pink-500/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                 {feat.icon}
               </div>
               <h3 className="text-xl font-bold mb-3 text-white">{feat.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-4">{feat.desc}</p>
               <span className="text-pink-500 font-semibold text-xs flex items-center gap-1 mt-auto hover:text-pink-400 transition-colors">
                 Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
               </span>
             </motion.button>
           ))}
        </div>
      </section>

      {/* Modal Popup Overlay */}
      <AnimatePresence>
        {activeModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-neutral-900 border border-white/10 rounded-3xl p-6 md:p-10 max-w-2xl w-full z-10 overflow-y-auto max-h-[85vh] shadow-[0_0_50px_rgba(236,72,153,0.15)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 pr-10">
                {modalData[activeModal].title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
                {modalData[activeModal].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {modalData[activeModal].sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="font-bold text-pink-400 text-md border-b border-white/5 pb-2 uppercase tracking-wider">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-gray-300 text-xs md:text-sm leading-relaxed">
                          <Check className="text-pink-500 mt-0.5 flex-shrink-0" size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  onClick={() => setActiveModal(null)}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-xl"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mission & Vision */}
      <section className="w-full container mx-auto px-4 py-16">
        <div className="flex flex-col gap-16 items-center text-center max-w-4xl mx-auto">
          
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center"
          >
             <div className="flex items-center gap-4 mb-6">
               <Target size={40} className="text-blue-400" />
               <h2 className="text-4xl font-bold text-white">Mission</h2>
             </div>
             <p className="text-gray-400 leading-relaxed text-lg md:text-xl text-balance">
               Our mission is to empower businesses with smart, AI-powered, and innovative IT & digital solutions that drive growth, automation, and success.
             </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center"
          >
             <div className="flex items-center gap-4 mb-6">
               <Eye size={40} className="text-purple-400" />
               <h2 className="text-4xl font-bold text-white">Vision</h2>
             </div>
             <p className="text-gray-400 leading-relaxed text-lg md:text-xl text-balance">
               Our vision is to become a leading global IT & AI solutions company known for innovation, quality, and customer success.
             </p>
          </motion.div>

        </div>
      </section>

      {/* Stats Section with auto-counting */}
      <section className="w-full mt-10 py-20 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Global Clients", value: 150, suffix: "+" },
              { label: "Code Commits", value: 10000, suffix: "+" },
              { label: "Success Rate", value: 99, suffix: "%" },
              { label: "AI Models Trained", value: 25, suffix: "+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">
                   <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-primary tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
        </div>
      </section>

    </main>
  );
}
