import { Metadata } from "next";
import ITHardwareClient from "./client";

export const metadata: Metadata = {
  title: "Professional IT Hardware Solutions | BYTESOOL",
  description: "Enterprise-grade IT hardware procurement, deployment, and management. Laptops, desktops, office servers, Cisco/Fortinet network cabling, and AMC support options by BYTESOOL.",
  keywords: [
    "IT hardware procurement",
    "business laptop supplier Noida",
    "network switches switches servers",
    "office conference room setup",
    "annual maintenance contract AMC",
    "Cisco Fortinet cabling"
  ],
};

export default function ITHardwarePage() {
  return <ITHardwareClient />;
}
