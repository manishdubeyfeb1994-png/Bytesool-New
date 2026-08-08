"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileText, Code2, CheckCircle, LifeBuoy } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function ProcessClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: "Requirement Discussion",
      icon: <MessageSquare size={24} />,
      desc: "Deep dive into your business goals, target audience, and current bottlenecks. We establish the exact ROI target for the deployment."
    },
    {
      title: "Proposal & Timeline",
      icon: <FileText size={24} />,
      desc: "We present a comprehensive architecture blueprint, transparent pricing, and a hard deadline commitments. No hidden fees."
    },
    {
      title: "Project Execution",
      icon: <Code2 size={24} />,
      desc: "Our engineers build your system utilizing the latest Next.js and AI frameworks. You receive weekly updates and staging links."
    },
    {
      title: "Review & Delivery",
      icon: <CheckCircle size={24} />,
      desc: "Rigorous QA testing, core web vitals optimization, and final hand-off. We deploy to production with zero downtime."
    },
    {
      title: "Ongoing Support",
      icon: <LifeBuoy size={24} />,
      desc: "Post-launch maintenance, continuous SEO optimization, and infrastructure scaling as your user base grows."
    }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden pb-16">
      {/* Header */}
      <section className="w-full pt-32 pb-24 text-center px-4">
        <Breadcrumb />
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6"
        >
          Predictable Delivery
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          How We Work
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A transparent, 5-step engagement model designed to eliminate risk and guarantee maximum ROI.
        </motion.p>
      </section>

      {/* Timeline Section */}
      <section className="w-full container mx-auto px-4 max-w-4xl relative" ref={containerRef}>
        
        {/* The Animated Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
           <motion.div 
             className="w-full bg-gradient-to-b from-primary via-purple-500 to-indigo-600 rounded-full"
             style={{ height: lineHeight }}
           />
        </div>

        <div className="flex flex-col gap-24 py-10 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                
                {/* Content Area */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className={`bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-primary/40 transition-colors shadow-xl relative group`}>
                     <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                     <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                     <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Node Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] z-20">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white">
                      {step.icon}
                   </div>
                </div>
                
                {/* Empty Area for spacing on Desktop */}
                <div className="hidden md:block w-1/2" />

              </motion.div>
            );
          })}
        </div>

      </section>
    </main>
  );
}
