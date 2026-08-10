"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Lock,
  ArrowLeft
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
  applyEmail: string;
}

export default function JobApplyClient({ slug }: { slug: string }) {
  const [job, setJob] = useState<Job | null>(null);
  const [loadingJob, setLoadingJob] = useState(true);
  const router = useRouter();

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [currentJobTitle, setCurrentJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [relevantExperience, setRelevantExperience] = useState("");
  const [lastCompany, setLastCompany] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [currentCtc, setCurrentCtc] = useState("");
  const [expectedCtc, setExpectedCtc] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [consent, setConsent] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  // UX UI states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function loadJob() {
      try {
        const res = await fetch(`/api/jobs?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          const found = data.find((j: Job) => j.slug === slug);
          if (found && found.status === "Active") {
            setJob(found);
          }
        }
      } catch (err) {
        console.error("Error fetching job details:", err);
      } finally {
        setLoadingJob(false);
      }
    }
    loadJob();
  }, [slug]);

  // File size and format checking
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    validateFile(file);
  };

  const validateFile = (file: File) => {
    const fileErrors: Record<string, string> = { ...errors };

    // Format validation
    const allowedExtensions = ["pdf", "doc", "docx"];
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext || !allowedExtensions.includes(ext)) {
      fileErrors.resume = "Invalid format. Accepted formats: PDF, DOC, DOCX";
      setResumeFile(null);
      setErrors(fileErrors);
      return;
    }

    // Size validation - Prefer 5-10MB. We implement a strict 10MB limit (10 * 1024 * 1024 bytes)
    const maxSize = 10 * 1024 * 1024; 
    if (file.size > maxSize) {
      fileErrors.resume = "File size exceeds 10 MB limit.";
      setResumeFile(null);
      setErrors(fileErrors);
      return;
    }

    // Clear resume error and save
    delete fileErrors.resume;
    setErrors(fileErrors);
    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const formErrors: Record<string, string> = {};

    // Validate Required Fields
    if (!fullName.trim()) formErrors.fullName = "Full Name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) formErrors.email = "Valid Email is required";
    if (!phone.trim()) formErrors.phone = "Mobile Number is required";
    if (!location.trim()) formErrors.location = "Current Location is required";
    if (!experience.trim()) formErrors.experience = "Total Experience is required";
    if (!resumeFile) formErrors.resume = "Resume upload is required";
    if (!consent) formErrors.consent = "You must agree to evaluate the application";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      
      // Scroll to the first error
      const firstError = Object.keys(formErrors)[0];
      const errorElement = document.getElementById(`err-${firstError}`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setSubmitting(true);

    try {
      // Build FormData payload
      const formData = new FormData();
      formData.append("name", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("location", location);
      formData.append("jobTitle", currentJobTitle);
      formData.append("experience", experience);
      formData.append("relevantExperience", relevantExperience);
      formData.append("lastCompany", lastCompany);
      formData.append("noticePeriod", noticePeriod);
      formData.append("currentCtc", currentCtc);
      formData.append("expectedCtc", expectedCtc);
      formData.append("linkedin", linkedin);
      formData.append("portfolio", portfolio);
      formData.append("coverLetter", coverLetter);
      formData.append("positionAppliedFor", job?.title || slug);
      formData.append("applyEmailDestination", job?.applyEmail || "careers@bytesool.com");
      
      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitSuccess(true);
      } else {
        const errorData = await res.json();
        setErrors({ submit: errorData.error || "Failed to submit application. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setErrors({ submit: "A network error occurred. Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingJob) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] pt-32">
        <Loader2 className="animate-spin h-10 w-10 text-primary mb-4" />
        <p className="text-gray-400 text-sm">Building application workspace...</p>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[65vh] pt-32 text-center px-4">
        <h1 className="text-3xl font-bold text-white mb-3">Invalid Link / Position Closed</h1>
        <p className="text-gray-450 max-w-sm mb-6">Explore our careers directory to look at other opening requirements.</p>
        <Link href="/careers"><Button>Back to Careers</Button></Link>
      </main>
    );
  }

  if (submitSuccess) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[70vh] pt-32 px-4 relative">
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-lg text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-8">
            <CheckCircle2 size={44} />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4">Application Submitted!</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
            Thank you for applying to Bytesool. Our team will review your application and contact you if your profile matches our requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button variant="outline" className="w-full sm:w-auto rounded-xl">
                Browse More Jobs
              </Button>
            </Link>
            <Link href="/">
              <Button className="w-full sm:w-auto rounded-xl bg-primary">
                Return Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center overflow-hidden w-full pb-24">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[80vw] md:w-[600px] h-[400px] bg-primary/20 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-purple-650/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <section className="w-full pt-32 pb-6 px-4">
        <Breadcrumb />
      </section>

      {/* Form Content */}
      <section className="w-full container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        
        <div className="mb-10 text-left">
          <Link href={`/careers/${job.slug}`} className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors mb-6 font-semibold uppercase tracking-wider">
            <ChevronLeft size={14} /> Back to Job Details
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            Apply for {job.title}
          </h1>
          <p className="text-gray-400 text-sm">
            {job.department} &bull; {job.location} &bull; {job.employmentType}
          </p>
        </div>

        {errors.submit && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl mb-8 flex items-start gap-3 text-sm">
            <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
            <span>{errors.submit}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* 1. Personal Information */}
          <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-3">
              1. Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-black/40 border ${errors.fullName ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all`}
                />
                {errors.fullName && <p id="err-fullName" className="text-red-400 text-xs mt-1.5">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-black/40 border ${errors.email ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all`}
                />
                {errors.email && <p id="err-email" className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full bg-black/40 border ${errors.phone ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all`}
                />
                {errors.phone && <p id="err-phone" className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Current Location *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Noida / New Delhi"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`w-full bg-black/40 border ${errors.location ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all`}
                />
                {errors.location && <p id="err-location" className="text-red-400 text-xs mt-1.5">{errors.location}</p>}
              </div>
            </div>
          </div>

          {/* 2. Professional Information */}
          <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-3">
              2. Professional Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Current Job Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. IT Executive (Leave blank if fresher)"
                  value={currentJobTitle}
                  onChange={(e) => setCurrentJobTitle(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Total Experience *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 3 Years or 0 (Fresher)"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className={`w-full bg-black/40 border ${errors.experience ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all`}
                />
                {errors.experience && <p id="err-experience" className="text-red-400 text-xs mt-1.5">{errors.experience}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Relevant Experience (in years)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2 Years"
                  value={relevantExperience}
                  onChange={(e) => setRelevantExperience(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Current/Last Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. ABC Technologies Pvt. Ltd."
                  value={lastCompany}
                  onChange={(e) => setLastCompany(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Notice Period (in days)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Immediate / 30 Days"
                  value={noticePeriod}
                  onChange={(e) => setNoticePeriod(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Current CTC (LPA)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 4.5 LPA"
                  value={currentCtc}
                  onChange={(e) => setCurrentCtc(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Expected CTC (LPA) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 6 LPA"
                    value={expectedCtc}
                    onChange={(e) => setExpectedCtc(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Application Links & cover letter */}
          <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-3">
              3. Online Links &amp; Cover Letter
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Portfolio / GitHub URL
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/username"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Explain why you are the perfect fit for this position at Bytesool..."
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-all resize-y min-h-[100px]"
                />
              </div>
            </div>
          </div>

          {/* 4. Resume Attachment Upload */}
          <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-3 flex items-center gap-1.5">
              <Upload size={18} className="text-primary" /> 4. Upload Resume *
            </h3>
            
            <div className="space-y-4">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed ${errors.resume ? "border-red-500/40 bg-red-500/5" : "border-white/10 hover:border-primary/30 bg-black/20"} rounded-2xl p-8 text-center cursor-pointer transition-all`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                
                {resumeFile ? (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FileText className="w-12 h-12 text-primary animate-bounce-slow" />
                    <p className="text-white text-sm font-semibold">{resumeFile.name}</p>
                    <p className="text-gray-400 text-xs">{(resumeFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-2 block">
                      Click to replace
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Upload className="w-10 h-10 text-gray-400 mb-2" />
                    <p className="text-white text-sm font-semibold">Drag &amp; drop or click to upload</p>
                    <p className="text-gray-400 text-xs">PDF, DOC, or DOCX formats accepted</p>
                    <p className="text-gray-500 text-[10px] uppercase font-semibold">Maximum file size: 10 MB</p>
                  </div>
                )}
              </div>
              {errors.resume && <p id="err-resume" className="text-red-400 text-xs mt-1.5">{errors.resume}</p>}
            </div>
          </div>

          {/* Legal Consent and Submit Controls */}
          <div className="bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="legal-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.value === "on" ? !consent : e.target.checked)}
                className="mt-1 cursor-pointer w-4 h-4 rounded text-primary focus:ring-primary/20 bg-black/40 border border-white/10"
              />
              <label htmlFor="legal-consent" className="text-xs text-gray-400 leading-relaxed cursor-pointer select-none">
                I agree that Bytesool may use the information provided to evaluate my application. *
              </label>
            </div>
            {errors.consent && <p id="err-consent" className="text-red-400 text-xs mt-1.5">{errors.consent}</p>}

            <hr className="border-white/5" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Lock size={12} /> Secure encryption &bull; Private documents storage
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto font-bold py-6 px-10 rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2 cursor-pointer bg-primary disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-1" />
                    Submitting Application...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </div>

        </form>

      </section>
    </main>
  );
}
