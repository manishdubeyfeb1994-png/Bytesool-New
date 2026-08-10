import { Metadata } from "next";
import JobDetailsClient from "./client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const titleFormatted = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${titleFormatted} | Careers - BYTESOOL`,
    description: `Apply for the position of ${titleFormatted} at Bytesool. Connect with our Noida / Greater Noida teams and help shape technology.`,
    openGraph: {
      title: `${titleFormatted} | Careers at Bytesool`,
      description: `Join us as an active ${titleFormatted}. Noida / Greater Noida / Remote. Apply online today.`,
      url: `https://www.bytesool.com/careers/${slug}`,
    }
  };
}

export default async function JobDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <JobDetailsClient slug={resolvedParams.slug} />;
}
