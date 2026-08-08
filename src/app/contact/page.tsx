import { Metadata } from "next";
import ContactClient from "./client";

export const metadata: Metadata = {
  title: "Contact BYTESOOL | Website Development Company Delhi NCR",
  description: "Ready to scale? Contact BYTESOOL today. Your trusted website development company in Delhi NCR and provider of elite digital marketing services in India.",
  keywords: ["website development company Delhi NCR", "digital marketing services India"],
};

export default function ContactPage() {
  return <ContactClient />;
}
