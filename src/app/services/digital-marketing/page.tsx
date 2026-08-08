import { Metadata } from "next";
import DigitalMarketingClient from "./client";

export const metadata: Metadata = {
  title: "Professional Digital Marketing Services | BYTESOOL",
  description: "Boost your search engine visibility and ROI. Partner with BYTESOOL for data-driven SEO, Google Ads PPC management, and social media campaigns.",
  keywords: [
    "digital marketing services",
    "SEO services India",
    "Google Ads PPC management",
    "social media marketing Noida",
    "lead generation campaigns",
    "local SEO marketing"
  ],
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}
