import { Metadata } from "next";
import CybersecurityClient from "./client";

export const metadata: Metadata = {
  title: "Cybersecurity & CCTV Surveillance Solutions | BYTESOOL",
  description: "Secure your digital space and physical premises. Endpoint antivirus security, firewall configurations, security audits (VAPT), and professional HD CCTV camera installation by BYTESOOL.",
  keywords: [
    "cybersecurity services Noida",
    "CCTV surveillance cameras installation",
    "network security audit VAPT",
    "biometric access control systems",
    "Hikvision CP Plus Dahua reseller",
    "Managed Firewall VPN solutions"
  ],
};

export default function CybersecurityPage() {
  return <CybersecurityClient />;
}
