import { Metadata } from "next";
import ITConsultingClient from "./client";

export const metadata: Metadata = {
  title: "Professional IT Consulting Services | BYTESOOL",
  description: "Accelerate your business growth. Strategic IT infrastructure assessment, digital transformation planning, and secure cloud migration advice by BYTESOOL.",
  keywords: [
    "IT consulting services",
    "IT infrastructure audit",
    "digital transformation company Noida",
    "cloud strategy consulting",
    "zero trust security plan",
    "managed IT services support"
  ],
};

export default function ITConsultingPage() {
  return <ITConsultingClient />;
}
