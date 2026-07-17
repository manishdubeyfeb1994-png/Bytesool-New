import { Metadata } from "next";
import CybersecurityHardwareClient from "./client";

export const metadata: Metadata = {
  title: "Cybersecurity & IT Hardware Services | BYTESOOL",
  description: "Secure your business with cybersecurity, CCTV, and reliable IT hardware procurement and support solutions.",
  keywords: ["cybersecurity services", "IT hardware procurement", "CCTV installation", "network security", "AMC support"],
};

export default function CybersecurityHardwarePage() {
  return <CybersecurityHardwareClient />;
}
