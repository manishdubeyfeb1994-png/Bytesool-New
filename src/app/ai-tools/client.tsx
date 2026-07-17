"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Calculator, CheckCircle2, ChevronRight, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AIToolsClient() {
  // Audit State
  const [auditTarget, setAuditTarget] = useState("");
  const [auditState, setAuditState] = useState<'idle' | 'loading' | 'done'>('idle');
  const [progress, setProgress] = useState(0);
  const [scanningMsg, setScanningMsg] = useState("Initializing NLP agent...");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [auditResults, setAuditResults] = useState<{
    score: number;
    warnings: number;
    opportunities: number;
    performance: number;
    seo: number;
    mobile: number;
    details: string[];
    aiRoadmap?: string;
  } | null>(null);


  const scanningMessages = [
    "Analyzing DOM architecture...",
    "Auditing Core Web Vitals...",
    "Scanning Meta Semantic Tags...",
    "Checking Mobile Responsiveness...",
    "Analyzing Backlink Profile...",
    "Auditing NLP Content Relevance...",
    "Checking Zero-Trust Security...",
    "Finalizing Conversion Report..."
  ];

  // Quote State
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteType, setQuoteType] = useState("");

  const startAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!auditTarget) return;
    
    // Strict domain validation regex
    const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(?:\/.*)?$/;
    const match = auditTarget.match(domainRegex);
    
    if (!match) {
      setErrorMsg("Please enter a valid domain (e.g., mysite.com)");
      return;
    }

    const domain = match[1];
    setErrorMsg(null);
    setAuditState('loading');
    setProgress(0);
    
    // Cycle scanning messages for visual engagement
    let msgIndex = 0;
    const msgInterval = setInterval(() => {
      setScanningMsg(scanningMessages[msgIndex % scanningMessages.length]);
      msgIndex++;
    }, 2500);

    // Initial progress simulation (PageSpeed is slow)
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return p + Math.floor(Math.random() * 5) + 1;
      });
    }, 800);

    try {
      const response = await fetch('/api/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: domain }),
      });

      const data = await response.json();

      clearInterval(msgInterval);
      clearInterval(progressInterval);

      if (!response.ok) {
        throw new Error(data.error || "Audit failed to complete.");
      }

      setProgress(100);
      setAuditResults(data);
      setAuditState('done');
    } catch (err: any) {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
      setErrorMsg(err.message || "Failed to connect to audit service.");
      setAuditState('idle');
    }
  };

  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };

  return (
    <main className="flex flex-col items-center overflow-hidden pb-16">
      {/* Header */}
      <section className="w-full pt-32 pb-16 px-4 relative flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 mb-8"
        >
          <Sparkles className="mr-2 h-3 w-3" /> 
          Exclusive AI Tools for Bytesool Clients
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white border-b-4 border-indigo-500/30 pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Free Value. Zero Friction.
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Test drive our internal modeling tools below and see exactly where your business is leaving money on the table.
        </motion.p>
      </section>

      {/* Tools Container */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
        
        {/* Tool 1: Website Audit */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(99,102,241,0.1)] relative overflow-hidden group hover:shadow-[0_0_50px_rgba(99,102,241,0.2)] transition-shadow flex flex-col min-h-[400px]"
        >
          <div className="absolute top-0 right-0 p-6 flex text-primary/30 group-hover:text-primary transition-colors">
            <Search size={80} strokeWidth={1} />
          </div>
          
          <div className="relative z-10 flex-1 flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-2">Instant SEO Audit</h2>
            <p className="text-gray-400 mb-8 max-w-sm">Enter your domain and our NLP agent will scan your architecture for critical conversion leaks.</p>
            
            <div className="mt-auto">
              <AnimatePresence mode="wait">
                {auditState === 'idle' && (
                  <motion.form key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={startAudit} className="flex flex-col sm:flex-row gap-2 relative z-10">
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., mysite.com" 
                      value={auditTarget}
                      onChange={(e) => {
                        setAuditTarget(e.target.value);
                        if (errorMsg) setErrorMsg(null);
                      }}
                      className={`flex-1 bg-black/50 border ${errorMsg ? 'border-red-500/50' : 'border-white/20'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                    />
                    <Button type="submit" size="lg" className="rounded-xl px-8 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                      Scan Now
                    </Button>
                    {errorMsg && (
                      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-6 left-0 text-[10px] text-red-400 font-mono">
                        {errorMsg}
                      </motion.p>
                    )}
                  </motion.form>
                )}

                {auditState === 'loading' && (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                    <div className="flex justify-between text-sm text-primary font-mono">
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin h-3 w-3" />
                        {scanningMsg}
                      </span>
                      <span>{Math.min(progress, 100)}%</span>
                    </div>
                    <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden border border-white/10">
                       <motion.div 
                         className="bg-gradient-to-r from-primary to-indigo-400 h-full rounded-full"
                         initial={{ width: "0%" }}
                         animate={{ width: `${progress}%` }}
                       />
                    </div>
                  </motion.div>
                )}

                {auditState === 'done' && auditResults && (
                  <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                     <div className="flex justify-center -mt-12 mb-6">
                        <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-black/60 border-2 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                           <span className="text-2xl font-black text-white">{auditResults.score}%</span>
                           <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-green-500 animate-spin-slow pointer-events-none" />
                        </div>
                     </div>

                     <h3 className="text-white font-bold text-lg mb-1 leading-tight">Scan Complete for {getHostname(auditTarget)}!</h3>
                     <p className="text-gray-500 text-xs mb-6 font-mono uppercase tracking-widest">NLP Architecture Audit Report</p>
                     
                     <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="bg-black/40 rounded-xl p-2 border border-white/5">
                           <div className="text-xs text-gray-400 mb-1">Perf</div>
                           <div className={`text-sm font-bold ${auditResults.performance > 80 ? 'text-green-400' : 'text-yellow-400'}`}>{auditResults.performance}</div>
                        </div>
                        <div className="bg-black/40 rounded-xl p-2 border border-white/5">
                           <div className="text-xs text-gray-400 mb-1">SEO</div>
                           <div className={`text-sm font-bold ${auditResults.seo > 80 ? 'text-green-400' : 'text-yellow-400'}`}>{auditResults.seo}</div>
                        </div>
                        <div className="bg-black/40 rounded-xl p-2 border border-white/5">
                           <div className="text-xs text-gray-400 mb-1">UX</div>
                           <div className={`text-sm font-bold ${auditResults.mobile > 80 ? 'text-green-400' : 'text-yellow-400'}`}>{auditResults.mobile}</div>
                        </div>
                     </div>

                      <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 mb-6 text-left">
                        <h4 className="text-[10px] font-black text-red-400 uppercase mb-2 flex items-center gap-1">
                           <Loader2 size={10} className="animate-pulse" /> Critical Path Leaks ({auditResults?.warnings})
                        </h4>
                        <ul className="space-y-1.5">
                           {auditResults?.details.map((detail, idx) => (
                             <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                                <span className="text-red-500 mt-0.5 opacity-50">•</span>
                                {detail}
                             </li>
                           ))}
                        </ul>
                      </div>
                      
                      {auditResults?.aiRoadmap && (
                         <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4 mb-6 text-left">
                            <h4 className="text-[10px] font-black text-indigo-400 uppercase mb-2 flex items-center gap-1">
                               <Sparkles size={10} className="animate-pulse" /> AI Agent Recommendation
                            </h4>
                            <p className="text-xs text-indigo-200 leading-relaxed font-medium italic">
                               "{auditResults.aiRoadmap}"
                            </p>
                         </div>
                      )}
                     
                     <div className="space-y-3">
                        <Link href="/contact" className="block">
                           <Button className="w-full bg-green-500 hover:bg-green-600 shadow-[0_0_20px_rgba(34,197,94,0.3)] font-bold">
                             Get Full Recovery Roadmap
                           </Button>
                        </Link>
                        <button onClick={() => { setAuditState('idle'); setAuditTarget(''); }} className="text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold">Scan another site</button>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Tool 2: Project Estimator */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(168,85,247,0.1)] relative overflow-hidden group hover:shadow-[0_0_50px_rgba(168,85,247,0.2)] transition-shadow flex flex-col min-h-[400px]"
        >
          <div className="absolute top-0 right-0 p-6 flex text-purple-500/30 group-hover:text-purple-500 transition-colors">
            <Calculator size={80} strokeWidth={1} />
          </div>
          
          <div className="relative z-10 flex-1 flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-2">Smart Estimator</h2>
            <p className="text-gray-400 mb-8 max-w-sm">Use our dynamic calculator model to gauge realistic budget expectations for your custom build.</p>

            <div className="mt-auto">
              <AnimatePresence mode="wait">
                 {quoteStep === 1 && (
                   <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4 relative z-10">
                     <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">What do you need built?</h3>
                     {["Custom Web Application", "AI Chatbot Integration", "Enterprise SEO Architecture", "Full SaaS MVP"].map((type) => (
                       <button 
                         key={type}
                         onClick={() => { setQuoteType(type); setQuoteStep(2); }}
                         className="w-full text-left bg-black/40 hover:bg-white/5 border border-white/10 hover:border-purple-500/50 rounded-xl p-4 text-white font-medium flex justify-between items-center transition-all group/btn"
                       >
                         {type}
                         <ChevronRight className="text-gray-600 group-hover/btn:text-purple-400 transition-colors" size={20} />
                       </button>
                     ))}
                   </motion.div>
                 )}

                 {quoteStep === 2 && (
                   <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 relative z-10 text-center">
                     <h3 className="text-2xl font-bold text-white">Excellent Choice</h3>
                     <p className="text-gray-400 text-sm">Based on industry medians for a <span className="text-purple-400 font-semibold">{quoteType}</span> in India, projects range from <strong className="text-white">$2,500 to $15,000+</strong>.</p>
                     
                     <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 text-sm text-gray-300 leading-relaxed">
                        Every project's architecture is unique. We recommend a 15-minute discovery call to provide a fixed-price quote based on your exact requirements.
                     </div>
                     
                     <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" onClick={() => setQuoteStep(1)} className="flex-1">Back</Button>
                        <Link href="/contact" className="flex-[2]">
                          <Button className="w-full shadow-[0_0_20px_rgba(168,85,247,0.4)] bg-purple-600 hover:bg-purple-700 text-white">
                            Get Exact Quote Now
                          </Button>
                        </Link>
                     </div>
                   </motion.div>
                 )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
