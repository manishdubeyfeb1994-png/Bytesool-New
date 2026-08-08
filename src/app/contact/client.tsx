"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactClient() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Form submission failed:", errorData);
        alert(`Form submission failed: ${errorData.error?.message || errorData.error || response.statusText}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="flex flex-col items-center overflow-hidden pb-16">
       {/* Header */}
       <section className="w-full pt-32 pb-16 text-center px-4 relative">
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-green-500/10 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
        <motion.h1 
          className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's Build Something <span className="text-primary italic">Incredible</span>.
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Drop us a line to discuss architectures, marketing budgets, and scaling your revenue.
        </motion.p>
      </section>

      <section className="w-full container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          
          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Request Your Free Assessment</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name *</label>
                    <input 
                      {...register("name", { required: true })}
                      placeholder="John Doe"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    {errors.name && <span className="text-xs text-red-400">Name is required</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email Address *</label>
                      <input 
                        type="email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        placeholder="john@company.com"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                      {errors.email && <span className="text-xs text-red-400">Valid email is required</span>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Phone Number *</label>
                      <input 
                        type="tel"
                        {...register("phone", { required: true })}
                        placeholder="+91 92894 11974"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                      {errors.phone && <span className="text-xs text-red-400">Phone number is required</span>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Service of Interest</label>
                    <select 
                      {...register("service")}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-all"
                    >
                      <option className="bg-background" value="ai">AI Solutions & Automation</option>
                      <option className="bg-background" value="web">Website & App Development</option>
                      <option className="bg-background" value="marketing">Digital Marketing & SEO</option>
                      <option className="bg-background" value="other">Other Scope</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Project Details</label>
                    <textarea 
                      {...register("message")}
                      rows={4}
                      placeholder="Tell us about your business goals and current bottlenecks..."
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-14 text-md bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />
                    ) : (
                      <>
                        Get My Proposal Now
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full py-20"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center border-2 border-green-500/50 mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                  <p className="text-gray-400 mb-8 max-w-sm">One of our senior technical directors will reach out to you within 2-4 hours with a preliminary analysis.</p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>Submit Another Inquiry</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Details Side */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-col gap-10"
          >
             <div>
               <h3 className="text-3xl font-bold text-white mb-6">Direct Channels</h3>
               <div className="space-y-6">
                 <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email Support</p>
                      <a href="mailto:info@bytesool.com" className="text-lg text-white font-semibold hover:text-primary transition-colors">info@bytesool.com</a>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Sales & Technical Inquiries</p>
                      <a href="tel:+919289411974" className="text-lg text-white font-semibold hover:text-primary transition-colors">+91 92894 11974</a>
                    </div>
                 </div>

                 <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Instant WhatsApp Connect</p>
                      <a href="https://wa.me/+919289411974" target="_blank" rel="noreferrer" className="text-lg text-white font-semibold hover:text-green-400 transition-colors">Chat With Us</a>
                    </div>
                 </div>
               </div>
             </div>

             <div className="bg-card/40 border border-white/10 rounded-3xl p-6 h-[300px] flex flex-col items-center justify-center text-center overflow-hidden relative group">
                {/* Dummy Google Map Placeholder */}
                <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                <MapPin size={48} className="text-primary/50 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-semibold text-xl">Delhi NCR Headquarters</h4>
                <p className="text-gray-400 text-sm mt-2 max-w-xs">Visiting hours strictly by appointment only. (Map iframe integration point)</p>
             </div>

          </motion.div>
      </section>
    </main>
  );
}
