"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Building2, Sparkles, Code2, Search, Smartphone } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

const projects = [
  {
    id: "london-kids-india",
    title: "London Kids India",
    category: "Education | School Website",
    location: "Greater Noida West, Noida Extension",
    description:
      "Bytesool designed and developed the complete website for London Kids India — one of the best preschools in Greater Noida West. The project includes smart classroom showcases, online admissions flow, day care information, SEO optimization, and a fully mobile-responsive design.",
    tags: ["Next.js", "SEO Optimized", "Mobile-First Design"],
    liveUrl: "https://www.londonkidsindia.com",
    gradient: "from-primary to-purple-500",
    highlights: [
      { icon: <Code2 size={18} />, label: "Tech Stack", value: "Next.js" },
      { icon: <Search size={18} />, label: "SEO", value: "Fully Optimized" },
      { icon: <Smartphone size={18} />, label: "Design", value: "Mobile-First" },
    ],
  },
];

export default function PortfolioClient() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      {/* Header */}
      <section className="w-full pt-32 pb-16 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] md:w-[700px] h-[350px] bg-primary/20 blur-[120px] md:blur-[160px] rounded-[100%] pointer-events-none -z-10" />
        <Breadcrumb />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-8"
        >
          <Building2 className="mr-2 h-4 w-4" />
          Our Portfolio
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Our Work
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Real projects. Real impact. We build digital experiences that drive growth for our clients across India and beyond.
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="w-full container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-3">
                      {project.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h2>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 flex-shrink-0 border border-white/10 group-hover:border-primary/30 transition-colors">
                    <Globe size={32} className="text-primary" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {project.highlights.map((h, j) => (
                    <div key={j} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="flex justify-center mb-1 text-primary">{h.icon}</div>
                      <p className="text-xs text-gray-500 mb-0.5">{h.label}</p>
                      <p className="text-xs font-semibold text-white">{h.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="group/btn h-11 px-6 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                    View Live Site
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="group relative bg-card/20 backdrop-blur-xl border border-dashed border-white/10 rounded-3xl overflow-hidden hover:border-primary/20 transition-all duration-300 flex items-center justify-center min-h-[350px]"
          >
            <div className="text-center p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 mx-auto">
                <Sparkles size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">More Projects Coming Soon</h3>
              <p className="text-gray-500 text-sm max-w-xs mx-auto mb-6">
                We&apos;re continuously working with clients across India. New case studies will be added here.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="bg-white/5 h-10 px-5 text-sm">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-24 relative overflow-hidden mt-8">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[250px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Want Your Project Featured Here?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
          >
            Partner with Bytesool to build a digital presence that actually delivers results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                Get a Free Proposal
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
