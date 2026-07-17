import { Metadata } from "next";
import AIToolsClient from "./client";

export const metadata: Metadata = {
  title: "Free AI Audit & Quote Tools | BYTESOOL AI Solutions",
  description: "Experience the power of a true AI solutions company. Try our free AI website audit, quote generator, and smart chatbot tools right now.",
  keywords: ["AI solutions company", "website audit", "startup ai tool"],
};

export default function AIToolsPage() {
  return <AIToolsClient />;
}
