import { Metadata } from "next";
import MobileAppDevClient from "./client";

export const metadata: Metadata = {
  title: "Professional Mobile App Development Services | BYTESOOL",
  description: "Cross-platform and native Android and iOS mobile app development services by BYTESOOL. Transform your idea into a feature-rich, high-performance application.",
  keywords: [
    "mobile app development services",
    "android app developer India",
    "ios app development company",
    "Flutter app development",
    "React Native developers",
    "custom mobile apps",
    "hybrid mobile app developer"
  ],
};

export default function MobileAppDevPage() {
  return <MobileAppDevClient />;
}
