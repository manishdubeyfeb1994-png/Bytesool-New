import { Metadata } from "next";
import CloudEmailClient from "./client";

export const metadata: Metadata = {
  title: "Enterprise Cloud & Email Solutions | BYTESOOL",
  description: "Secure, scalable cloud infrastructure and enterprise business emails. M365 and Google Workspace setup, AWS, Azure, OCI and Private Cloud migrations by BYTESOOL.",
  keywords: [
    "cloud solutions company",
    "business email setup",
    "Microsoft 365 migrations",
    "Google Workspace reseller",
    "AWS cloud services",
    "Azure virtual machines",
    "private cloud hosting",
    "DKIM DMARC configuration"
  ],
};

export default function CloudEmailPage() {
  return <CloudEmailClient />;
}
