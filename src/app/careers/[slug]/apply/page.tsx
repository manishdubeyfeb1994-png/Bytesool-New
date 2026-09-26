import { Metadata } from "next";
import JobApplyClient from "./client";

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
    title: `Apply: ${titleFormatted} | Bytesool Careers`,
    description: `Complete the job application form and upload your resume to apply for the ${titleFormatted} position at Bytesool.`,
    alternates: {
      canonical: `https://www.bytesool.com/careers/${slug}/apply`
    }
  };
}

export default async function JobApplyPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <JobApplyClient slug={resolvedParams.slug} />;
}
