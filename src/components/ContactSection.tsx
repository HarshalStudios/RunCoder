import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface ContactSectionProps {
  onPageChange?: (page: Page) => void;
}

export default function ContactSection({ onPageChange }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Help',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    
    // Construct formatted mailto link
    const subjectLine = formData.subject.trim() 
      ? `[${formData.category}] ${formData.subject.trim()}`
      : `[${formData.category}] Support Request from ${formData.name.trim()}`;
    
    const bodyContent = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nInquiry Type: ${formData.category}\n\nMessage:\n${formData.message.trim()}`;
    
    const mailtoUrl = `mailto:runcodersupport@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    
    // Trigger user's mail client
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16" id="contact-page-root">
      
      {/* 1. Header Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 px-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-950/40 text-blue-400 border border-blue-900/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight font-mono">
          <Mail className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Contact the RunCoder team.
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          Have a question, found a bug, or have an idea for RunCoder? Send us a message and we&apos;ll get back to you as soon as possible.
        </p>
      </section>

      {/* 2. Main Grid Layout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="contact-grid">
        
        {/* Left Column: Direct Email & Info */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          <div className="bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
            <div className="w-10 h-10 bg-indigo-950/40 rounded-xl border border-indigo-900/30 flex items-center justify-center">
              <Mail className="w-5 h-5 text-indigo-400" />
            </div>
            
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">DIRECT EMAIL</span>
              <div>
                <a 
                  href="mailto:runcodersupport@gmail.com" 
                  className="text-sm sm:text-base font-extrabold text-white hover:text-indigo-300 transition-colors font-mono select-text"
                >
                  runcodersupport@gmail.com
                </a>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                For general questions, bug reports, feature requests, or account and billing help.
              </p>
            </div>
          </div>

          {/* Quick Help Card */}
          <div className="bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-7 space-y-3 shadow-xl">
            <div className="flex items-center space-x-2.5 text-blue-400">
              <HelpCircle className="w-4.5 h-4.5" />
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-200">Looking for quick answers?</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Check our Help Center for common questions about compilers, supported languages, templates, and Google Play subscriptions.
            </p>
            {onPageChange && (
              <div className="pt-1">
                <button
                  onClick={() => onPageChange('support')}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <span>Visit Help Center</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl">
          
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-white">Opening Your Email Client</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Your message has been formatted into an email draft. If your email app did not open automatically, you can email us directly at <span className="text-slate-200 font-mono font-semibold">runcodersupport@gmail.com</span>.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    category: 'General Help',
                    subject: '',
                    message: ''
                  });
                }}
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs py-2 px-4 rounded-xl transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Your Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Alex"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Email Address *</label>
                  <input 
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Inquiry Type & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Inquiry Type</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="General Help">General Help</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Account & Billing">Account & Billing</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Subject</label>
                  <input 
                    type="text"
                    placeholder="Brief description"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Message *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us what happened or what you'd like to see..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs py-3 rounded-xl shadow-lg shadow-blue-950/20 active:scale-98 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </section>

    </div>
  );
}
