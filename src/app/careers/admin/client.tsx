"use client";

import { useEffect, useState } from "react";
import { 
  Lock, Loader2, Briefcase, MapPin, Clock, PlusCircle, 
  Trash2, Mail, ExternalLink, Calendar, CheckSquare, 
  Search, ShieldCheck, Download, Edit, Users, Eye, AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  postedDate: string;
  status: "Active" | "Draft" | "Closed";
  applyEmail: string;
  isFeatured?: boolean;
  description: string;
}

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  currentJobTitle?: string;
  experience: string;
  relevantExperience?: string;
  lastCompany?: string;
  noticePeriod?: string;
  expectedCtc?: string;
  linkedin?: string;
  portfolio?: string;
  coverLetter?: string;
  positionAppliedFor: string;
  appliedDate: string;
  resumeFilename: string;
  resumeOriginalName: string;
  status: "New" | "Shortlisted" | "Interview" | "Selected" | "Rejected";
}

export default function AdminClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  
  const [activeTab, setActiveTab] = useState<"jobs" | "apps">("jobs");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);

  // Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [jobLoc, setJobLoc] = useState("");
  const [empType, setEmpType] = useState("Full Time");
  const [expReq, setExpReq] = useState("");
  const [desc, setDesc] = useState("");
  const [emailDest, setEmailDest] = useState("careers@bytesool.com");
  const [jobStatus, setJobStatus] = useState<"Active" | "Draft" | "Closed">("Active");

  // Candidate Details state
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // Custom Confirmation Modal state
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void | Promise<void>;
  }>({
    isOpen: false,
    title: "Confirm Deletion",
    message: "Are you sure you want to delete this?",
    onConfirm: () => {},
  });

  useEffect(() => {
    if (localStorage.getItem("bytesool_admin_session") === "authorized") {
      setIsAuthenticated(true);
      fetchData();
    }
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const jobsRes = await fetch(`/api/jobs?t=${Date.now()}`, { cache: "no-store" });
      if (jobsRes.ok) setJobs(await jobsRes.json());

      const appsRes = await fetch(`/api/applications?t=${Date.now()}`, { cache: "no-store" });
      if (appsRes.ok) setApplications(await appsRes.json());
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "adminBytesool2026") {
      localStorage.setItem("bytesool_admin_session", "authorized");
      setIsAuthenticated(true);
      fetchData();
    } else {
      setAuthError("Invalid credentials.");
    }
  };

  const handleCreateOrUpdateJob = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle || !department || !jobLoc || !expReq || !desc) {
      alert("Missing required fields.");
      return;
    }
    const slug = jobTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const jobData = {
      id: editingJob ? editingJob.id : slug,
      slug: editingJob ? editingJob.slug : slug,
      title: jobTitle,
      department,
      location: jobLoc,
      employmentType: empType,
      experience: expReq,
      description: desc,
      postedDate: editingJob ? editingJob.postedDate : new Date().toISOString().split("T")[0],
      status: jobStatus,
      applyEmail: emailDest,
      responsibilities: ["Manage IT systems", "Offer technical support"],
      skills: ["IT Support", "Networking"],
      qualifications: ["Bachelor's degree or equivalent"],
      benefits: ["Growth opportunities", "Continuous learning"]
    };

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: editingJob ? "update" : "create", job: jobData })
      });
      if (res.ok) {
        setIsFormOpen(false);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleJobStatus = async (job: Job, newStatus: "Active" | "Draft" | "Closed") => {
    const updated = { ...job, status: newStatus };
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update", job: updated })
      });
      if (res.ok) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteJob = (job: Job) => {
    setConfirmModal({
      isOpen: true,
      title: "Delete Job Vacancy",
      message: `Are you sure you want to permanently delete the job listing for "${job.title}"? This action cannot be undone.`,
      onConfirm: async () => {
        try {
          const res = await fetch("/api/jobs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "delete", job })
          });
          if (res.ok) fetchData();
        } catch (err) {
          console.error(err);
        }
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
      }
    });
  };

  // Change candidate status (Step 9 status pipeline)
  const handleUpdateAppStatus = async (appId: string, newStatus: string) => {
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update_status", id: appId, status: newStatus })
      });
      if (res.ok) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Application log
  const handleDeleteApp = (appId: string) => {
    setConfirmModal({
      isOpen: true,
      title: "Remove Application Log",
      message: "Are you sure you want to permanently delete this candidate application record? This action cannot be undone.",
      onConfirm: async () => {
        try {
          const res = await fetch("/api/applications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "delete", id: appId })
          });
          if (res.ok) fetchData();
        } catch (err) {
          console.error(err);
        }
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
      }
    });
  };

  if (!isAuthenticated) {
    return (
      <main className="flex justify-center items-center min-h-[80vh] pt-24 px-4 bg-background">
        <form onSubmit={handleLogin} className="max-w-md w-full p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl space-y-6">
          <div className="text-center">
            <Lock className="mx-auto text-primary h-12 w-12 mb-3" />
            <h1 className="text-xl font-bold text-white">Careers Admin Login</h1>
            <p className="text-xs text-gray-400 mt-1">Authenticate to manage jobs and applications.</p>
          </div>
          {authError && <p className="text-red-400 text-xs text-center">{authError}</p>}
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50"
          />
          <Button type="submit" className="w-full bg-primary font-semibold py-4 rounded-xl">Unlock Dashboard</Button>
        </form>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 max-w-6xl pt-32 pb-20 space-y-8 min-h-[85vh]">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-black text-white">Recruitment Portal</h1>
          <p className="text-sm text-gray-400">Add openings and track incoming resumes.</p>
        </div>
        <div className="flex gap-3">
          <Button size="sm" onClick={() => { localStorage.removeItem("bytesool_admin_session"); setIsAuthenticated(false); }} variant="outline" className="rounded-xl border-white/10 text-gray-300">
            Log Out
          </Button>
        </div>
      </div>

      {/* Tabs selectors */}
      <div className="flex border-b border-white/10">
        <button onClick={() => setActiveTab("jobs")} className={`pb-3 px-6 text-sm font-semibold border-b-2 transition-all ${activeTab === "jobs" ? "border-primary text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}>
          Vacancies ({jobs.length})
        </button>
        <button onClick={() => setActiveTab("apps")} className={`pb-3 px-6 text-sm font-semibold border-b-2 transition-all ${activeTab === "apps" ? "border-primary text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}>
          Candidate Applications ({applications.length})
        </button>
      </div>

      {activeTab === "jobs" ? (
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">Active Vacancies</h2>
            <Button size="sm" onClick={() => { setEditingJob(null); setJobTitle(""); setDepartment(""); setJobLoc(""); setDesc(""); setIsFormOpen(true); }} className="rounded-xl bg-primary flex items-center gap-1.5">
              <PlusCircle size={16} /> Add Job
            </Button>
          </div>

          <div className="bg-card/20 border border-white/5 rounded-3xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.01] text-[10px] uppercase font-bold text-gray-450">
                  <th className="py-4 px-6">Title</th>
                  <th className="py-4 px-4">Dept</th>
                  <th className="py-4 px-4 text-center">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-white/[0.01]">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white">{job.title}</div>
                      <div className="text-xs text-gray-550 mt-0.5">{job.location} &bull; {job.employmentType}</div>
                    </td>
                    <td className="py-4 px-4 text-gray-400">{job.department}</td>
                    <td className="py-4 px-4">
                      <select value={job.status} onChange={(e) => handleToggleJobStatus(job, e.target.value as any)} className="mx-auto block bg-black/40 border border-white/10 rounded-lg text-xs py-1 px-2.5">
                        <option value="Active">🟢 Active</option>
                        <option value="Draft">🟡 Draft</option>
                        <option value="Closed">🔴 Closed</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                      <button onClick={() => { setEditingJob(job); setJobTitle(job.title); setDepartment(job.department); setJobLoc(job.location); setEmpType(job.employmentType); setExpReq(job.experience); setDesc(job.description); setIsFormOpen(true); }} className="p-1 px-2 rounded bg-white/5 text-xs text-gray-300 hover:text-white border border-white/5">Edit</button>
                      <button onClick={() => handleDeleteJob(job)} className="p-1 px-2 rounded bg-red-500/10 text-xs text-red-400 hover:bg-red-500/20 border border-red-500/20">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-white">Received Applications (Step 9)</h2>
          
          <div className="bg-card/20 border border-white/5 rounded-3xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.01] text-[10px] uppercase font-bold text-gray-450">
                  <th className="py-4 px-6">Candidate</th>
                  <th className="py-4 px-4">Role Applied</th>
                  <th className="py-4 px-4">Applied Date</th>
                  <th className="py-4 px-4 text-center">Status</th>
                  <th className="py-4 px-6 text-right">Downloads &amp; View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-gray-300 font-medium">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-white/[0.01]">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white">{app.name}</div>
                      <div className="text-xs text-gray-500">{app.email} &bull; {app.phone}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-300">{app.positionAppliedFor}</div>
                      <div className="text-[10px] text-gray-500">Exp: {app.experience} Years</div>
                    </td>
                    <td className="py-4 px-4 text-xs font-mono text-gray-450">{app.appliedDate}</td>
                    <td className="py-4 px-4">
                      <select 
                        value={app.status} 
                        onChange={(e) => handleUpdateAppStatus(app.id, e.target.value)} 
                        className={`mx-auto block bg-black/45 border border-white/10 rounded-lg text-xs py-1.5 px-3 font-semibold ${
                          app.status === "Selected" ? "text-emerald-400 bg-emerald-500/5 border-emerald-500/20" :
                          app.status === "Interview" ? "text-indigo-400 bg-indigo-500/5 border-indigo-500/20" :
                          app.status === "Shortlisted" ? "text-purple-400 bg-purple-500/5 border-purple-500/20" :
                          app.status === "Rejected" ? "text-red-400 bg-red-500/5 border-red-500/20" : "text-gray-300"
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Interview">Interview</option>
                        <option value="Selected">Selected</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                       <a href={`/api/applications/resume?filename=${app.resumeFilename}`} className="inline-flex items-center gap-1 p-1.5 px-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-xs font-semibold text-indigo-300 rounded-lg">
                         <Download size={12} /> Resume
                       </a>
                       <button onClick={() => setSelectedApp(app)} className="inline-flex items-center gap-1 p-1.5 px-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-200 rounded-lg">
                         <Eye size={12} /> View Details
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Vacancy Add/Edit Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 max-w-xl w-full max-h-[85vh] overflow-y-auto space-y-4">
            <h3 className="text-lg font-bold text-white">{editingJob ? "Edit Position" : "Create New Position"}</h3>
            <form onSubmit={handleCreateOrUpdateJob} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-1">Job Title *</label>
                  <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Department *</label>
                  <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Job Location *</label>
                  <input type="text" value={jobLoc} onChange={(e) => setJobLoc(e.target.value)} required className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Experience *</label>
                  <input type="text" value={expReq} onChange={(e) => setExpReq(e.target.value)} required className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white" placeholder="2-4 Years" />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 mb-1 font-semibold">Job Description *</label>
                <textarea rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} required className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white" />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" onClick={() => setIsFormOpen(false)} variant="outline" className="rounded-xl text-gray-300">Cancel</Button>
                <Button type="submit" className="rounded-xl bg-primary">Publish Job</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Candidate Inspector Drawer/Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto space-y-6">
            <div className="flex justify-between items-start border-b border-white/5 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedApp.name}</h3>
                <p className="text-xs text-gray-400 mt-1">Applied for: <strong className="text-indigo-400">{selectedApp.positionAppliedFor}</strong> &bull; {selectedApp.appliedDate}</p>
              </div>
              <button onClick={() => setSelectedApp(null)} className="p-1 rounded bg-white/5 text-gray-400 hover:text-white">&times;</button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div><span className="block text-gray-500">Email Reference</span><span className="font-semibold text-gray-200">{selectedApp.email}</span></div>
              <div><span className="block text-gray-500">Contact Number</span><span className="font-semibold text-gray-200">{selectedApp.phone}</span></div>
              <div><span className="block text-gray-500">Current Location</span><span className="font-semibold text-gray-200">{selectedApp.location}</span></div>
              <div><span className="block text-gray-500">Total Experience</span><span className="font-semibold text-gray-200">{selectedApp.experience} Years</span></div>
              {selectedApp.expectedCtc && <div><span className="block text-gray-500">Expected Package (CTC)</span><span className="font-semibold text-gray-200">{selectedApp.expectedCtc}</span></div>}
              {selectedApp.lastCompany && <div><span className="block text-gray-500">Last Company</span><span className="font-semibold text-gray-200">{selectedApp.lastCompany}</span></div>}
            </div>

            <hr className="border-white/5" />

            <div className="space-y-4 text-xs">
              <div>
                <span className="block text-gray-550 mb-1">Social Profiles &amp; Web Links</span>
                <div className="flex flex-wrap gap-2.5">
                  {selectedApp.linkedin && <a href={selectedApp.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-205 hover:text-primary"><ExternalLink size={12} /> LinkedIn</a>}
                  {selectedApp.portfolio && <a href={selectedApp.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-205 hover:text-primary"><ExternalLink size={12} /> Portfolio</a>}
                </div>
              </div>

              {selectedApp.coverLetter && (
                <div>
                  <span className="block text-gray-500 mb-1">Cover Letter Cover Statement</span>
                  <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-gray-300 min-h-[50px] leading-relaxed whitespace-pre-wrap">{selectedApp.coverLetter}</div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <button onClick={() => { handleDeleteApp(selectedApp.id); setSelectedApp(null); }} className="text-red-400 hover:text-red-300 font-semibold text-xs flex items-center gap-1.5">
                <Trash2 size={14} /> Remove Candidate
              </button>
              <div className="flex gap-3">
                <a href={`/api/applications/resume?filename=${selectedApp.resumeFilename}`} className="inline-flex items-center gap-1.5 p-2 px-4 rounded-xl bg-primary text-xs font-semibold text-white">
                  <Download size={14} /> Download Resume (${selectedApp.resumeOriginalName})
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Confirmation Modal */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 max-w-sm w-full space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-xl rounded-full" />
            <div className="text-left space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertTriangle className="text-red-450 w-5 h-5 flex-shrink-0" /> {confirmModal.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {confirmModal.message}
              </p>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button 
                onClick={() => setConfirmModal((prev) => ({ ...prev, isOpen: false }))} 
                variant="outline" 
                className="rounded-xl text-xs text-gray-305 hover:text-white border-white/5 hover:bg-white/5"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => confirmModal.onConfirm()} 
                className="rounded-xl text-xs bg-red-650 hover:bg-red-750 text-white font-semibold shadow-[0_0_15px_rgba(239,68,68,0.25)] border-0"
              >
                Confirm Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
