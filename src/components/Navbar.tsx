"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "AI Tools", href: "/ai-tools" },
  ];

  const serviceLinks = [
    { name: "AI Integration", href: "/services/ai-integration" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Cloud Architecture", href: "/services/cloud-architecture" },
    { name: "Cloud & Email", href: "/services/cloud-email-solutions" },
    { name: "Cybersecurity & Hardware", href: "/services/cybersecurity-hardware" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-background/30 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="w-full px-4 sm:px-6 h-20 md:h-24 flex items-center">

          {/* LOGO — first flex child, always left */}
          <Link href="/" className="flex-none flex items-center" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo-v5.png"
              alt="Bytesool Logo"
              width={133}
              height={36}
              className="h-7 sm:h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* MIDDLE — flex-1 fills remaining space; shows nav on desktop, empty on mobile */}
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden lg:flex gap-5 xl:gap-7 items-center text-sm font-medium text-gray-300">
              <Link href="/services" className="hover:text-white transition-colors relative group whitespace-nowrap">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
                >
                  Solutions
                  <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-background/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl"
                    >
                      <div className="grid gap-1.5">
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="rounded-xl px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {mainNavLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-white transition-colors relative group whitespace-nowrap">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT — CTA + Hamburger, always right */}
          <div className="flex-none flex items-center gap-3">
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button size="sm" className="shadow-[0_0_15px_rgba(99,102,241,0.5)] text-xs sm:text-sm px-3 sm:px-4">
                Get Proposal
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[45] bg-background lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Header in drawer */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image src="/logo-v5.png" alt="Bytesool Logo" width={222} height={60} className="h-12 w-auto object-contain" />
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Background glowing orb */}
            <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10 px-4 pt-6 pb-8">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }}>
                <Link href="/services" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-4 px-4 text-xl font-bold text-white hover:text-primary transition-colors rounded-xl hover:bg-white/5 group">
                  Services
                  <ArrowRight size={18} className="text-primary/50 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="px-2 pb-2">
                <div className="grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
                  {serviceLinks.map((link, i) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {mainNavLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 2) * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-4 px-4 text-xl font-bold text-white hover:text-primary transition-colors rounded-xl hover:bg-white/5 group"
                  >
                    {link.name}
                    <ArrowRight size={18} className="text-primary/50 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 mt-4 border-t border-white/10"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
                  <Button size="lg" className="w-full h-14 text-base shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    Get My Proposal Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
