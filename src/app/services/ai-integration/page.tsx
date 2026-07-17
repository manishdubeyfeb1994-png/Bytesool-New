import { Metadata } from "next";
import AiIntegrationClient from "./client";

export const metadata: Metadata = {
  title: "AI Integration Services | BYTESOOL",
  description: "Automate your business with AI chatbots, AI agents, workflow automation, and intelligent AI integrations for better productivity.",
  keywords: ["AI integration services", "AI chatbot development", "workflow automation", "AI agents", "WhatsApp automation"],
};

export default function AiIntegrationPage() {
  return <AiIntegrationClient />;
}
