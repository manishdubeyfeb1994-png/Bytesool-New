import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-xl pt-16 pb-8">
      {/* Background glowing orb */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 pt-2 hover:scale-[1.02] transition-transform">
              <Image 
                src="/logo-v5.png" 
                alt="Bytesool Logo" 
                width={133} 
                height={36} 
                className="h-7 sm:h-8 md:h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Smart IT, AI & Digital Solutions Company in India. 
              Transforming businesses with cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/bytesool" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/17RsghkHsV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/bytesool" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

            </div>
          </div>
          
          
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
          
          {/* Services */}
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
          
          {/* Contact Details */}
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
