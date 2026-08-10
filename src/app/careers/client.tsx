"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Rocket, 
  Lightbulb, 
  Users, 
  BookOpen, 
  Globe, 
  Star, 
  Briefcase, 
  MapPin, 
  Clock, 
  Calendar, 
  Search, 
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Award,
  AlertCircle,
  FileText,
  Phone,
  Laptop,
  MessageSquare
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
  description: string;
  status: string;
  isFeatured?: boolean;
}

export default function CareersClient() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [loading, setLoading] = useState(true);


  // Load jobs from API endpoint
  useEffect(() => {
    async function loadJobs() {
      try {
        const res = await fetch(`/api/jobs?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          // Filter to only display 'Active' statuses publicly as per Step 8
          const activeJobs = data.filter((j: Job) => j.status === "Active");
          setJobs(activeJobs);
          setFilteredJobs(activeJobs);
        }
      } catch (err) {
        console.error("Failed to load jobs list", err);
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  // Filter jobs based on states (Step 11)
  useEffect(() => {
    let result = jobs;

    // Search query check
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.description.toLowerCase().includes(q) ||
          j.department.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q)
      );
    }

    // Filter by Department
    if (selectedDept !== "All") {
      result = result.filter((j) => j.department === selectedDept);
    }

    // Filter by Location
    if (selectedLocation !== "All") {
      result = result.filter((j) => j.location === selectedLocation);
    }

    // Filter by Experience Level
    if (selectedExperience !== "All") {
      result = result.filter((j) => j.experience === selectedExperience);
    }

    // Filter by Employment Type
    if (selectedType !== "All") {
      result = result.filter((j) => j.employmentType === selectedType);
    }

    setFilteredJobs(result);
  }, [searchQuery, selectedDept, selectedLocation, selectedExperience, selectedType, jobs]);

  // Extract unique filter lists
  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];
  const locations = ["All", ...Array.from(new Set(jobs.map((j) => j.location)))];
  const experiences = ["All", ...Array.from(new Set(jobs.map((j) => j.experience)))];
  const employmentTypes = ["All", ...Array.from(new Set(jobs.map((j) => j.employmentType)))];

  const benefitsList = [
    {
      icon: <Rocket className="w-6 h-6 text-pink-500" />,
      title: "Growth Opportunities",
      description: "Learn, grow and take ownership of your work in an environment that rewards drive and initiative."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-indigo-500" />,
      title: "Innovation & Technology",
      description: "Work with modern technologies, AI, cloud ecosystems, and digital-first transformation solutions."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Collaborative Environment",
      description: "Work with a highly supportive, communicative, and professional team of developers and architects."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-cyan-500" />,
      title: "Continuous Learning",
      description: "Improve your technical and professional skillset with training support and hands-on guidance."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Exciting Projects",
      description: "Work on real-world projects across different industries, building solutions that make a difference."
    },
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      title: "Make an Impact",
      description: "Contribute directly to the growth of Bytesool, shaping our core processes and directly helping clients."
    }
  ];

  const hiringSteps = [
    {
      step: "01",
      title: "Application",
      icon: <FileText className="w-5 h-5 text-white" />,
      description: "Submit your application through our Careers page with an updated resume."
    },
    {
      step: "02",
      title: "Screening",
      icon: <Search className="w-5 h-5 text-white" />,
      description: "Our team reviews your skills, experience, and qualifications carefully."
    },
    {
      step: "03",
      title: "Initial Assessment",
      icon: <Phone className="w-5 h-5 text-white" />,
      description: "Short phone or video call to understand your background and role fit."
    },
    {
      step: "04",
      title: "Technical Interview",
      icon: <Laptop className="w-5 h-5 text-white" />,
      description: "Technical and manager interviews to evaluate your role-specific expertise."
    },
    {
      step: "05",
      title: "HR Discussion",
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      description: "Discussion about culture fit, compensation expectations, and policies."
    },
    {
      step: "06",
      title: "Background Check",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      description: "Reference and background verification before the final hiring decision."
    },
    {
      step: "07",
      title: "Offer & Onboarding",
      icon: <Award className="w-5 h-5 text-white" />,
      description: "Receive the final offer and begin our structured onboarding process."
    }
  ];

  const scrollToPositions = () => {
    const listElement = document.getElementById("open-positions");
    if (listElement) {
      listElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col items-center overflow-hidden w-full pb-10">
      {/* 2. Careers Page - Header Section */}
      <section className="w-full pt-32 pb-16 text-center px-4 relative flex flex-col items-center overflow-hidden">
        {/* Glow orbs backgrounds */}
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[80vw] md:w-[600px] h-[400px] bg-primary/20 blur-[100px] md:blur-[150px] rounded-[100%] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-purple-650/10 blur-[120px] rounded-[100%] pointer-events-none -z-10" />
        
        <Breadcrumb />

        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 leading-[1.15]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Build Your Career with Bytesool
          </motion.h1>

          <motion.p 
            className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Join our team and work on exciting technology, AI, cloud, software, cybersecurity and digital transformation projects. We are always looking for talented, passionate and motivated people to join our growing team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Button 
              onClick={scrollToPositions}
              size="lg" 
              className="font-bold relative group overflow-hidden px-8 py-6 rounded-full text-base shadow-[0_0_30px_rgba(99,102,241,0.55)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Open Positions 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3. Why Join Bytesool? Section */}
      <section className="w-full py-20 relative bg-black/20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Join <span className="text-primary font-black">Bytesool</span>?
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              We offer a professional culture where your ideas are valued, your skills are sharpened, and your contribution directly creates visible impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsList.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-card/30 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col hover:border-primary/20 hover:bg-card/50 transition-all duration-300 group shadow-lg"
              >
                <div className="bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3.5 Our Hiring Approach Section */}
      <section className="w-full py-20 relative border-t border-white/5 bg-gradient-to-b from-transparent to-black/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[300px] bg-indigo-600/5 blur-[120px] rounded-[100%] pointer-events-none -z-10" />
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Our <span className="text-primary font-black">Hiring Approach</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-1">
              Our structured hiring process ensures the right fit for both role and culture:
            </p>
          </div>

          {/* Desktop version (Horizontal Timeline) */}
          <div className="hidden lg:block relative mt-20 mb-10">
            {/* Connecting line aligned perfectly under the icons */}
            <div className="absolute top-7 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-indigo-500/20 via-primary/40 to-indigo-500/20 z-0" />

            <div className="grid grid-cols-7 gap-4 relative z-10">
              {hiringSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Glowing Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-indigo-600 border border-indigo-400 flex items-center justify-center text-white relative z-10 shadow-[0_0_15px_rgba(99,102,241,0.35)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] group-hover:bg-indigo-500 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Label & Title */}
                  <div className="mt-6 flex flex-col items-center">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest font-mono">
                      Step {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1.5 leading-tight group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Job description */}
                  <p className="text-[11px] text-gray-400 leading-relaxed mt-2.5 max-w-[140px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile and Tablet version (Vertical Timeline) */}
          <div className="lg:hidden relative space-y-12 pl-4 pr-2 max-w-xl mx-auto">
            {/* Left side Vertical connecting line */}
            <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-indigo-550/20 via-primary/40 to-indigo-550/20 z-0" />

            {hiringSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="relative flex gap-6 items-start group"
              >
                {/* Glowing Icon Circle */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-600 border border-indigo-400/70 flex items-center justify-center text-white flex-shrink-0 relative z-10 shadow-[0_0_12px_rgba(99,102,241,0.3)] group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Card containing step description */}
                <div className="flex-1 bg-card/20 backdrop-blur-xl border border-white/5 rounded-2xl p-5 md:p-6 hover:border-primary/20 hover:bg-card/35 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest font-mono">
                      Step {step.step}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Current Job Openings Section */}
      <section id="open-positions" className="w-full py-24 relative border-t border-white/5 scroll-mt-24">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[55vw] h-[400px] bg-indigo-500/10 blur-[130px] rounded-[100%] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-2">
                Current Openings
              </h2>
              <p className="text-gray-300 text-sm max-w-xl">
                Ready to take the next step in your career? Browse our active jobs below and find your perfect role.
              </p>
            </div>
            

          </div>

          {/* 12. No Jobs Available at all fallback (Global state check) */}
          {!loading && jobs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-card/25 backdrop-blur-xl border border-white/5 rounded-3xl p-8 max-w-3xl mx-auto shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-primary mx-auto mb-6">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">No Current Openings</h3>
              <p className="text-gray-350 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                We don't have any open positions at the moment, but we're always interested in meeting talented people. Send us your resume and we'll keep your profile in mind for future opportunities.
              </p>
              <Link href="/careers/general-application/apply">
                <Button size="lg" className="rounded-2xl font-bold bg-primary shadow-[0_0_15px_rgba(99,102,241,0.4)] px-8 py-5">
                  Send Your Resume
                </Button>
              </Link>
            </motion.div>
          ) : (
            <>
              {/* 11. Search & Filter Bar (Department, Location, Experience, Type) */}
              <div className="bg-card/20 backdrop-blur-xl border border-white/5 rounded-3xl p-5 md:p-6 mb-10 space-y-4">
                
                {/* Row 1: Search bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search jobs by title, skills, description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Row 2: Four quick filter dropdown dropdowns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  
                  {/* Department */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1.5 pl-1">Department</label>
                    <select
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white outline-none cursor-pointer focus:border-primary/50"
                    >
                      <option value="All">All Departments</option>
                      {departments.filter(d => d !== "All").map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1.5 pl-1">Location</label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white outline-none cursor-pointer focus:border-primary/50"
                    >
                      <option value="All">All Locations</option>
                      {locations.filter(l => l !== "All").map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1.5 pl-1">Experience</label>
                    <select
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white outline-none cursor-pointer focus:border-primary/50"
                    >
                      <option value="All">All Levels</option>
                      {experiences.filter(ex => ex !== "All").map((ex) => (
                        <option key={ex} value={ex}>{ex}</option>
                      ))}
                    </select>
                  </div>

                  {/* Employment Type */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1.5 pl-1">Job Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white outline-none cursor-pointer focus:border-primary/50"
                    >
                      <option value="All">All Types</option>
                      {employmentTypes.filter(t => t !== "All").map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                </div>
              </div>

              {/* Job Grid Listings */}
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary border-r-2 border-white/10 mb-4" />
                  <p className="text-gray-400 text-sm">Loading active listings...</p>
                </div>
              ) : filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredJobs.map((job, idx) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="group relative bg-card/25 backdrop-blur-xl border border-white/5 hover:border-primary/30 rounded-3xl p-6 md:p-8 flex flex-col hover:bg-card/45 transition-all duration-300 shadow-md overflow-hidden"
                    >
                      {job.isFeatured && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
                      )}

                      <div className="flex justify-between items-start gap-4 mb-4">
                        <div>
                          {job.isFeatured && (
                            <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-pink-400 mb-2">
                              ★ Featured Position
                            </span>
                          )}
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2.5 mb-5">
                        <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                          <Briefcase size={12} className="text-primary" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                          <MapPin size={12} className="text-primary" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                          <Award size={12} className="text-primary" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                          <Clock size={12} className="text-primary" />
                          {job.employmentType}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                        {job.description}
                      </p>

                      <hr className="border-white/5 mb-6" />

                      <div className="flex items-center justify-between gap-4 mt-auto">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-1">
                            <Calendar size={10} /> Posted
                          </span>
                          <span className="text-xs text-gray-300 font-medium font-mono">
                            {new Date(job.postedDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric"
                            })}
                          </span>
                        </div>

                        <Link href={`/careers/${job.slug}`} className="cursor-pointer">
                          <Button size="sm" className="font-semibold text-xs py-5 px-5 rounded-xl group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center gap-1 bg-indigo-650 hover:bg-indigo-600">
                            View &amp; Apply
                            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-card/10 border border-white/5 rounded-3xl">
                  <p className="text-gray-400 text-base mb-4">No job openings match the selected filters query.</p>
                  <Button 
                    onClick={() => { 
                      setSearchQuery(""); 
                      setSelectedDept("All"); 
                      setSelectedLocation("All");
                      setSelectedExperience("All");
                      setSelectedType("All"); 
                    }}
                    variant="outline" 
                    size="sm"
                    className="rounded-xl"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </main>
  );
}
