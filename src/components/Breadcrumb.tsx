"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

// Map slug → display name for known routes
const labelMap: Record<string, string> = {
  "": "Home",
  services: "Services",
  about: "About Us",
  contact: "Contact",
  portfolio: "Portfolio",
  process: "Our Process",
  "ai-tools": "Free AI Tools",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  "cookie-policy": "Cookie Policy",
  "web-development": "Web Development",
  "website-development": "Website Development",
  "digital-marketing": "Digital Marketing",
  "ai-integration": "AI Integration",
  "it-consulting": "IT Consulting",
  "cloud-email-solutions": "Cloud & Email Solutions",
  "cloud-architecture": "Cloud Architecture",
  "it-hardware-solutions": "IT Hardware Solutions",
  "cybersecurity-hardware": "Cybersecurity Hardware",
  "cybersecurity-surveillance": "Cybersecurity & Surveillance",
  "mobile-app-development": "Mobile App Development",
  "branding-graphic-design": "Branding & Graphic Design",
  "saas-development": "SaaS Development",
};

function formatSegment(segment: string): string {
  if (labelMap[segment]) return labelMap[segment];
  // Fallback: capitalize each word, replace hyphens with spaces
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function Breadcrumb() {
  const pathname = usePathname();

  // Don't render on homepage
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = formatSegment(segment);
    const isLast = index === segments.length - 1;
    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="w-full container mx-auto px-4 sm:px-6 mb-6">
      <ol className="flex items-center flex-wrap gap-1 text-xs sm:text-sm">
        {/* Home */}
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>

        {/* Segments */}
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center">
            <ChevronRight size={14} className="text-gray-600 mx-1" />
            {crumb.isLast ? (
              <span className="text-primary font-medium">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
