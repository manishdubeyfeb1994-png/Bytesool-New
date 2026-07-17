import { Metadata } from "next";
import AboutClient from "./client";

export const metadata: Metadata = {
  title: "About BYTESOOL | Trusted IT Company in India",
  description: "Learn why hundreds of clients trust BYTESOOL as their go-to AI solutions company and IT partner. Discover our mission, vision, and robust success metrics.",
  keywords: ["IT company in India", "trusted IT partner"],
};

export default function AboutPage() {
  return <AboutClient />;
}
