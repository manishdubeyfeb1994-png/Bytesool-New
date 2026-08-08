import type { Metadata } from "next";
import PortfolioClient from "./client";

export const metadata: Metadata = {
  title: "Portfolio | BYTESOOL — Our Work & Client Projects",
  description: "Explore BYTESOOL's portfolio of client projects. From school websites to enterprise platforms, see how we deliver real digital results across India.",
  keywords: ["Bytesool portfolio", "web development projects India", "London Kids India website", "school website design Noida", "IT company portfolio Delhi NCR"],
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
