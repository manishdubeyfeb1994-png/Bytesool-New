import { Metadata } from "next";
import CareersClient from "./client";

export const metadata: Metadata = {
  title: "Careers at Bytesool | Jobs & Opportunities",
  description: "Explore career opportunities at Bytesool. Join our team and work on AI, software, cloud, cybersecurity, digital transformation and IT projects.",
  keywords: [
    "Bytesool careers",
    "IT jobs Noida",
    "AI engineer openings",
    "software developer jobs",
    "cybersecurity jobs",
    "cloud consulting jobs",
    "join Bytesool"
  ],
  alternates: {
    canonical: "https://www.bytesool.com/careers"
  },
  openGraph: {
    title: "Careers at Bytesool | Jobs & Opportunities",
    description: "Explore career opportunities at Bytesool. Join our team and work on AI, software, cloud, cybersecurity, digital transformation and IT projects.",
    type: "website",
    url: "https://www.bytesool.com/careers",
  }
};

export default function CareersPage() {
  return <CareersClient />;
}
