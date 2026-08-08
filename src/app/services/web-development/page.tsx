import { Metadata } from "next";
import WebDevelopmentClient from "./client";

export const metadata: Metadata = {
  title: "Professional Web Development Services | BYTESOOL",
  description: "Build fast, clean, and conversion-focused websites and web applications with responsive design and modern technology.",
  keywords: ["web development services", "business website development", "custom web app", "ecommerce website", "website redesign"],
};

export default function WebDevelopmentPage() {
  return <WebDevelopmentClient />;
}
