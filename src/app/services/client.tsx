"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, TrendingUp, Smartphone, Paintbrush, Lightbulb, ArrowRight, Check, Cloud, HardDrive, Lock } from "lucide-react";
import Link from "next/link";

const serviceLinks: Record<string, string> = {
  "web-dev": "/services/website-development",
  "mobile-app": "/services/mobile-app-development",
  "digital-marketing": "/services/digital-marketing",
  "branding-design": "/services/branding-graphic-design",
  "it-consulting": "/services/it-consulting",
  "cloud-email": "/services/cloud-email-solutions",
  "it-hardware": "/services/it-hardware-solutions",
  "cybersecurity": "/services/cybersecurity-surveillance"
};

export default function ServicesClient() {
  const services = [
    {
      id: "web-dev",
      icon: <Code size={40} />,
      title: "Website Development",
      description: "Modern, responsive, and high-performance websites that represent your brand professionally and convert visitors into customers.",
      benefits: [
        "Business websites & corporate platforms",
        "Landing pages and e-commerce platforms",
        "WordPress websites",
        "Website redesign & maintenance"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "mobile-app",
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description: "Powerful and easy-to-use mobile applications for Android and iOS platforms with seamless performance and attractive UI/UX.",
      benefits: [
        "Business apps and service apps",
        "Custom mobile solutions",
        "Android & iOS development",
        "App maintenance and updates"
      ],
      color: "from-purple-500 to-fuchsia-600"
    },
    {
      id: "digital-marketing",
      icon: <TrendingUp size={40} />,
      title: "Digital Marketing",
      description: "Result-driven digital marketing services including SEO, Social Media Marketing, Google Ads, and PPC campaigns to maximize your ROI.",
      benefits: [
        "SEO (Search Engine Optimization)",
        "Social Media Marketing",
        "Google Ads & PPC campaigns",
        "Content marketing"
      ],
      color: "from-green-400 to-emerald-600"
    },
    {
      id: "branding-design",
      icon: <Paintbrush size={40} />,
      title: "Branding & Graphic Design",
      description: "Professional logos, business cards, banners, brochures, and social media creatives that build trust and leave lasting impressions.",
      benefits: [
        "Logo design and brand identity",
        "Business cards and stationery",
        "Banners and brochures",
        "Social media creatives"
      ],
      color: "from-pink-500 to-rose-600"
    },
    {
      id: "it-consulting",
      icon: <Lightbulb size={40} />,
      title: "IT Consulting",
      description: "Expert IT consulting services to help you choose the right technology solutions, optimize processes, and drive business growth.",
      benefits: [
        "Technology assessment and planning",
        "Digital transformation guidance",
        "System upgrades and optimization",
        "Technical consultation and support"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "cloud-email",
      icon: <Cloud size={40} />,
      title: "Cloud & Email Solutions",
      description: "Enterprise-grade cloud infrastructure and professional email platforms for businesses of all sizes. From private cloud to Google Workspace and Microsoft 365.",
      benefits: [
        "Private Cloud — VMs, Storage & Backup",
        "Google Workspace (Gmail, Drive, Meet, Docs)",
        "Microsoft 365 (Outlook, Teams, OneDrive)",
        "MFA, Email Encryption & Anti-Phishing",
        "SaaS Hosting & Infrastructure Management",
        "Admin Console & Zero-Trust Access Policies"
      ],
      color: "from-sky-500 to-cyan-600"
    },
    {
      id: "it-hardware",
      icon: <HardDrive size={40} />,
      title: "IT Hardware Solutions",
      description: "Complete hardware procurement, setup, and support for offices, schools, and enterprises. All brands, all scales.",
      benefits: [
        "Laptops & Desktops — HP, Dell, Lenovo, Apple",
        "Printers, Scanners & Projectors with setup",
        "Networking Equipment — Routers, Switches, APs",
        "Servers & NAS Storage Devices",
        "Bulk Procurement for Corporates & Institutions",
        "Annual Maintenance Contracts (AMC)"
      ],
      color: "from-orange-500 to-amber-600"
    },
    {
      id: "cybersecurity",
      icon: <Lock size={40} />,
      title: "Cybersecurity & Surveillance",
      description: "Protect your business with advanced digital and physical security systems — from network audits and VAPT to HD CCTV installation.",
      benefits: [
        "Network Security Audit & Firewall Setup",
        "Endpoint Protection & Enterprise Antivirus",
        "Vulnerability Assessment & Penetration Testing (VAPT)",
        "HD & 4K CCTV Camera Installation",
        "NVR/DVR Setup with Remote Monitoring",
        "Cloud-Connected Surveillance & AMC Support"
      ],
      color: "from-red-500 to-rose-600"
    }
  ];

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <section className="w-full pt-32 pb-16 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] md:w-[600px] h-[300px] bg-primary/20 blur-[100px] md:blur-[150px] rounded-[100%] pointer-events-none -z-10" />
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Core Services
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Stop paying agencies for vanity metrics. We build systems that directly generate revenue.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="w-full container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-colors overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.color} transition-opacity duration-500 z-0`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-xl mb-8`}>
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed object-balance">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-10">
                  {service.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="bg-primary/20 rounded-full p-1 text-primary">
                        <Check size={14} />
                      </div>
                      <span className="text-gray-300 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/contact?service=${service.id}`} className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full h-12 text-md group/btn font-semibold hover:bg-white hover:text-black">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  {serviceLinks[service.id] && (
                    <Link href={serviceLinks[service.id]} className="w-full sm:w-auto">
                      <Button className="w-full h-12 text-md group/btn font-semibold shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform animate-pulse" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="w-full container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="text-center py-6 px-4 border-b border-white/10 bg-black/40">
            <h2 className="text-2xl font-bold mb-1">Engagement Models</h2>
            <p className="text-gray-400 text-sm">Choose the framework that fits your growth timeline.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Basic Tier */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-1">Project-Based</h3>
              <p className="text-gray-400 text-sm mb-4">Best for distinct scopes like a website launch or MVP build.</p>
              <div className="text-3xl font-extrabold text-white mb-4">Fixed Fee</div>
              <ul className="space-y-2 mb-6">
                 {["Defined Scope & Timeline", "Dedicated Project Manager", "Standard UI/UX System", "1 Month Post-Launch Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <Check className="text-gray-500 flex-shrink-0" size={14} /> {item}
                  </li>
                 ))}
              </ul>
              <Link href="/contact">
                <Button variant="secondary" className="w-full rounded-xl text-sm h-9">Discuss Project</Button>
              </Link>
            </div>

            {/* Advanced Tier */}
            <div className="p-6 md:p-8 bg-primary/5 relative overflow-hidden">
               <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full tracking-widest uppercase">
                 Most Popular
               </div>
              <h3 className="text-xl font-bold text-primary mb-1">Growth Partner</h3>
              <p className="text-gray-400 text-sm mb-4">Best for ongoing SEO, continuous AI integration, and rapid scaling.</p>
              <div className="text-3xl font-extrabold text-white mb-4">Retainer</div>
              <ul className="space-y-2 mb-6">
                 {["Unlimited Development Scopes", "Priority Next-Day Slack Support", "Premium SaaS Interactions", "Continuous SEO Optimization", "Quarterly Strategy Review"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white text-sm">
                    <Check className="text-primary flex-shrink-0" size={14} /> {item}
                  </li>
                 ))}
              </ul>
              <Link href="/contact">
                <Button variant="default" className="w-full shadow-[0_0_20px_rgba(99,102,241,0.5)] rounded-xl text-sm h-9">Apply for Partnership</Button>
              </Link>
            </div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}
