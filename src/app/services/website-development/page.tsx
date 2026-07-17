import { Metadata } from "next";
import WebsiteDevClient from "./client";

export const metadata: Metadata = {
  title: "Professional Website Development Services | BYTESOOL",
  description: "Get modern, responsive, and SEO-friendly websites tailored for your business growth. Request a free Web Development quote from BYTESOOL today.",
  keywords: [
    "website development services",
    "web development company India",
    "custom website design",
    "ecommerce website development",
    "responsive web design",
    "school website template",
    "Nextjs web developers"
  ],
};

export default function WebsiteDevPage() {
  return <WebsiteDevClient />;
}
