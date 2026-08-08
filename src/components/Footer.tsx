"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-xl pt-16 pb-8">
      {/* Background glowing orb */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">

        {/* Main Footer Grid: Left CTA + Right Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">

          {/* LEFT SIDE — Logo, CTA, Social, Contact, Subscribe */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-block mb-2 hover:scale-[1.02] transition-transform">
              <Image 
                src="/logo-v5.png" 
                alt="Bytesool Logo" 
                width={133} 
                height={36} 
                className="h-7 sm:h-8 md:h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-primary/80 text-[11px] sm:text-xs mb-6 tracking-wide">Smart IT, AI & Digital Solutions</p>

            {/* CTA Heading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-3">
              Ready to transform{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                your business?
              </span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-6">
              Partner with Bytesool for cutting-edge IT solutions, AI-powered automation, and dedicated support.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 mb-6">
              <a href="https://www.linkedin.com/company/bytesool" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://x.com/bytesool" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/bytesool" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/17RsghkHsV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@bytesool" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Contact Info Row */}
            <div className="flex flex-wrap gap-5 mb-8">
              <a href="mailto:info@bytesool.com" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors text-xs">
                <Mail size={14} className="text-primary" />
                <span>info@bytesool.com</span>
              </a>
              <a href="tel:+919289411974" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors text-xs">
                <Phone size={14} className="text-primary" />
                <span>+91 92894 11974</span>
              </a>
            </div>

            {/* Email Subscription */}
            <div className="max-w-sm">
              <div className="flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden focus-within:border-primary/50 transition-colors">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 px-4 py-2.5 text-xs outline-none"
                />
                <button className="bg-gradient-to-r from-primary to-purple-500 text-white px-4 sm:px-5 py-2.5 text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity rounded-full m-0.5 whitespace-nowrap cursor-pointer">
                  Subscribe <ArrowRight size={14} />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 mt-2">
                By subscribing I accept the{" "}
                <Link href="/privacy-policy" className="text-gray-400 underline hover:text-primary transition-colors">Privacy Policy</Link>
                {" "}and{" "}
                <Link href="/terms-of-service" className="text-gray-400 underline hover:text-primary transition-colors">Terms of Service</Link>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — Categories: Quick Links, Top Services, Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
                <li><Link href="/ai-tools" className="hover:text-white transition-colors">Free AI Tools</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Top Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Top Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Website Development</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">AI &amp; Automation</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">SaaS Development</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">IT Consulting</Link></li>
                <li><Link href="/services#cloud-email" className="hover:text-white transition-colors">Cloud &amp; Email Solutions</Link></li>
                <li><Link href="/services#it-hardware" className="hover:text-white transition-colors">IT Hardware</Link></li>
                <li><Link href="/services#cybersecurity" className="hover:text-white transition-colors">Cybersecurity &amp; CCTV</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Info</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-primary flex-shrink-0" />
                  <span>+91 92894 11974</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-primary flex-shrink-0" />
                  <span>info@bytesool.com</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} BYTESOOL. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
