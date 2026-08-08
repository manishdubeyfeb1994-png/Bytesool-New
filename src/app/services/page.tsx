import { Metadata } from "next";
import ServicesClient from "./client";

export const metadata: Metadata = {
  title: "Top Website Development & Digital Marketing Services India | BYTESOOL",
  description: "Expert website development company targeting Delhi NCR and beyond. Explore our comprehensive digital marketing services in India designed to maximize your ROI.",
  keywords: ["digital marketing services India", "website development", "IT services"],
};

export default function ServicesPage() {
  return <ServicesClient />;
}
