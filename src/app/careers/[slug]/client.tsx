"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Calendar, 
  Award, 
  ChevronLeft, 
  ArrowRight,
  CheckCircle,
  Gem,
  ExternalLink
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  salaryRange?: string;
  postedDate: string;
  deadline?: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  qualifications: string[];
  benefits: string[];
  status: string;
  applyEmail: string;
  isFeatured?: boolean;
}

export default function JobDetailsClient({ slug }: { slug: string }) {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadJob() {
      try {
        const res = await fetch(`/api/jobs?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) {
          const jobsDataList = await res.json();
          const found = jobsDataList.find((j: Job) => j.slug === slug);
          if (found && found.status === "Active") {
            setJob(found);
            injectJobSchema(found);
          } else {
            setJob(null);
          }
        }
      } catch (err) {
        console.error("Error loading job details:", err);
      } finally {
        setLoading(false);
      }
    }
    loadJob();
  }, [slug]);

  // Inject Google JobPosting JSON-LD Structured Data Schema dynamically
  const injectJobSchema = (targetJob: Job) => {
    // Check if script already exists
    const existingScript = document.getElementById("job-ld-schema");
    if (existingScript) existingScript.remove();

    const ldData = {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": targetJob.title,
      "description": targetJob.description + " Responsibilities: " + targetJob.responsibilities.join(", ") + " Skills: " + targetJob.skills.join(", "),
      "datePosted": targetJob.postedDate || "2026-08-10",
      "validThrough": targetJob.deadline || undefined,
      "employmentType": targetJob.employmentType === "Full Time" ? "FULL_TIME" : targetJob.employmentType === "Part Time" ? "PART_TIME" : "CONTRACTOR",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "BYTESOOL",
        "sameAs": "https://www.bytesool.com"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": targetJob.location || "Noida",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      }
    };

    const script = document.createElement("script");
    script.id = "job-ld-schema";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(ldData);
    document.head.appendChild(script);
  };

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] pt-32">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary border-r-2 border-white/10 mb-4" />
        <p className="text-gray-400 text-sm">Loading opportunity details...</p>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[65vh] pt-32 text-center px-4">
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-red-650/10 blur-[130px] rounded-[100%] pointer-events-none -z-10" />
        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
          <Briefcase size={32} />
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Vacancy Not Found</h1>
        <p className="text-gray-400 max-w-md mb-8">
          This position may have been filled, set to draft, or closed. Visit our Careers directory to see other active roles.
        </p>
        <Link href="/careers">
          <Button className="rounded-xl font-semibold flex items-center gap-2">
            <ChevronLeft size={16} /> Back to Open Positions
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center overflow-hidden w-full pb-20">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[85vw] md:w-[600px] h-[400px] bg-primary/20 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[350px] bg-purple-650/10 blur-[130px] rounded-[100%] pointer-events-none -z-10" />

      {/* Header / Breadcrumbs */}
      <section className="w-full pt-32 pb-8 px-4 relative flex flex-col items-center">
        <Breadcrumb />
      </section>

      {/* Main Details Body */}
      <section className="w-full container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Core title wrapper */}
        <div className="mb-10 text-left">
          <Link href="/careers" className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors mb-6 font-semibold uppercase tracking-wider">
            <ChevronLeft size={14} /> Back to Listings
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary/20 border border-primary/30 text-indigo-300 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              {job.department}
            </span>
            {job.isFeatured && (
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                ★ Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            {job.title}
          </h1>
        </div>

        {/* Two column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Descriptions, Requirements */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* About role */}
            <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase size={20} className="text-primary" /> About the Role
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary" /> Key Responsibilities
                </h2>
                <ul className="space-y-3.5">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Required Skills */}
            {job.skills && job.skills.length > 0 && (
              <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-2">
                  <Gem size={20} className="text-primary" /> Required Skills
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 hover:border-primary/20 text-gray-300 px-4 py-2 rounded-2xl text-xs md:text-sm font-semibold transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Qualifications */}
            {job.qualifications && job.qualifications.length > 0 && (
              <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-2">
                  <Award size={20} className="text-primary" /> Qualifications
                </h2>
                <ul className="space-y-3.5">
                  {job.qualifications.map((qual, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What We Offer */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-2">
                  <Clock size={20} className="text-primary" /> What We Offer
                </h2>
                <ul className="space-y-3.5">
                  {job.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Summary & Apply Action */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="bg-gradient-to-b from-card/40 to-card/20 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-xl rounded-full" />
              
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/5 pb-3">
                Job Overview
              </h3>

              {/* Specs */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <MapPin className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-gray-200">{job.location}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider">Employment Type</span>
                    <span className="text-sm font-semibold text-gray-200">{job.employmentType}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Award className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider">Experience Level</span>
                    <span className="text-sm font-semibold text-gray-200">{job.experience}</span>
                  </div>
                </div>

                {job.salaryRange && (
                  <div className="flex gap-4">
                    <Gem className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-550 tracking-wider">Salary Range</span>
                      <span className="text-sm font-semibold text-gray-200">{job.salaryRange}</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <Calendar className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider">Posted Date</span>
                    <span className="text-sm font-semibold text-gray-200">
                      {new Date(job.postedDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Apply Now button */}
              <Link href={`/careers/${job.slug}/apply`} className="cursor-pointer">
                <Button className="w-full text-base font-bold py-6 rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2 group cursor-pointer bg-primary hover:bg-opacity-90">
                  Apply Now 
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Link>

              <p className="text-[10px] text-gray-500 text-center mt-4">
                Secure &amp; direct application processing.
              </p>
            </div>
            
            {/* Disclaimer box */}
            <div className="bg-card/10 border border-white/5 rounded-2xl p-5 text-xs text-gray-400 leading-relaxed">
              <strong>Need Help?</strong> Having trouble submitting your resume? Direct your credentials to <a href={`mailto:${job.applyEmail}`} className="text-indigo-400 underline hover:text-indigo-300">{job.applyEmail}</a> mentioning the job title in the subject line.
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
