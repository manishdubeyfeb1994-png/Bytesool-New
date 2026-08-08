import { Metadata } from "next";
import BrandingDesignClient from "./client";

export const metadata: Metadata = {
  title: "Professional Branding & Graphic Design Services | BYTESOOL",
  description: "Formulate a strong brand identity. Expert logo design, corporate branding guidelines, brochures, stationery, and social media creative solutions by BYTESOOL.",
  keywords: [
    "branding services",
    "graphic design Noida",
    "custom logo designer",
    "brand identity layout",
    "business card designers",
    "social media visual kits"
  ],
};

export default function BrandingDesignPage() {
  return <BrandingDesignClient />;
}
