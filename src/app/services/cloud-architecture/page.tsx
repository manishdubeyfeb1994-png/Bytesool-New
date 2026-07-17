import { Metadata } from "next";
import CloudArchitectureClient from "./client";

export const metadata: Metadata = {
  title: "Cloud Architecture Services | BYTESOOL",
  description: "Design and deploy scalable, secure, and cost-efficient cloud infrastructure for growing businesses.",
  keywords: ["cloud architecture", "cloud migration", "AWS Azure architecture", "hybrid cloud", "cloud infrastructure"],
};

export default function CloudArchitecturePage() {
  return <CloudArchitectureClient />;
}
