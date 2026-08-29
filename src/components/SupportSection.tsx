import { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  AlertTriangle, 
  Lightbulb, 
  Mail, 
  Settings, 
  Shield, 
  CreditCard, 
  Heart,
  FileCode,
  Send
} from 'lucide-react';

export default function SupportSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: 'How do I run code in RunCoder?',
      a: 'Open any source file from your project explorer and tap the Run button. Compiled languages (C, C++, Java, and Python) are sent to the configured execution service and return output to the bottom terminal drawer. Web files (HTML, CSS, JavaScript) render directly in the real-time web preview engine.'
    },
    {
      q: 'What languages are supported?',
      a: 'RunCoder supports 7 core languages: C (.c), C++ (.cpp), Java (.java), Python (.py), HTML (.html), CSS (.css), and JavaScript (.js).'
    },
    {
      q: 'How do templates work?',
      a: 'RunCoder includes a structured template library across Beginner, Intermediate, Advanced, and Pro difficulty tiers. You can explore sample algorithms, inspect sample input/output, copy code snippets, or open boilerplate directly into the active editor.'
    },
    {
      q: 'Can I import or export files?',
      a: 'Yes. You can create, organize, and manage files inside the app\'s local file explorer, or use Android\'s system file picker to import existing code files and export your scripts to device storage.'
    },
    {
      q: 'What does RunCoder Pro include?',
      a: 'RunCoder Pro removes in-app advertisements, unlocks premium monospaced coding fonts (such as JetBrains Mono, Fira Code, Source Code Pro), and provides full access to Pro-tier templates.'
    },
    {
      q: 'How do I manage or cancel a Pro subscription?',
      a: 'All subscriptions are managed directly through Google Play. Open the Google Play Store on your Android device, tap your profile icon in the top right, go to Payments & Subscriptions ➔ Subscriptions, select RunCoder, and choose Cancel Subscription.'
    }
  ];

  const supportCategories = [
    {
      title: 'General Help',
      desc: 'Workspace, editor, templates, files, and general app questions.',
      icon: Settings,
      emailSubject: '[General Support]',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      title: 'Bug Report',
      desc: 'Report crashes, incorrect behavior, compiler problems, or UI issues.',
      icon: AlertTriangle,
      emailSubject: '[Bug Report]',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20'
    },
    {
      title: 'Feature Request',
      desc: 'Suggest improvements or new features for RunCoder.',
      icon: Lightbulb,
      emailSubject: '[Feature Request]',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20'
    },
    {
      title: 'Account & Billing',
      desc: 'Questions about RunCoder Pro, purchases, subscriptions, or restoring purchases.',
      icon: CreditCard,
      emailSubject: '[Account & Billing]',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20'
    },
    {
      title: 'Privacy',
      desc: 'Questions about app permissions, data handling, local files, or privacy.',
      icon: Shield,
      emailSubject: '[Privacy Question]',
      color: 'text-teal-400',
      bg: 'bg-teal-500/10 border-teal-500/20'
    },
    {
      title: 'Feedback',
      desc: 'Share your overall experience or suggestions to help us improve.',
      icon: Heart,
      emailSubject: '[General Feedback]',
      color: 'text-pink-400',
      bg: 'bg-pink-500/10 border-pink-500/20'
    }
  ];

  return (
    <div className="space-y-20 pb-16" id="support-page-root">
      
      {/* 1. Hero Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 px-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-950/40 text-blue-400 border border-blue-900/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight font-mono">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>HELP CENTER</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          How can we help?
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          Find answers to common questions or contact the RunCoder team if you need help.
        </p>
      </section>

      {/* 2. Frequently Asked Questions Accordion */}
      <section className="max-w-3xl mx-auto px-4" id="faq-section">
        <div className="bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-800/60">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
            <h2 className="text-base font-extrabold text-white font-display">Frequently Asked Questions</h2>
          </div>

          <div className="divide-y divide-slate-800/50">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ml-3 ${isOpen ? 'rotate-180 text-indigo-400' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className="text-xs text-slate-400 leading-relaxed mt-2.5 pl-0.5">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Contact Categories Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8" id="contact-categories">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">DIRECT ASSISTANCE</span>
          <h2 className="text-2xl font-extrabold text-white tracking-tight font-display">Contact RunCoder Support</h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
            Can&apos;t find what you&apos;re looking for? Choose a topic below or email us directly. We&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {supportCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#131520] border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between space-y-4 text-left transition-all"
              >
                <div className="space-y-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${cat.bg}`}>
                    <IconComponent className={`w-4.5 h-4.5 ${cat.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800/50">
                  <a 
                    href={`mailto:runcodersupport@gmail.com?subject=${encodeURIComponent(cat.emailSubject)}`}
                    className="inline-flex items-center space-x-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-bold transition-all cursor-pointer"
                  >
                    <span>Email Support</span>
                    <Send className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Direct Email Footer Card */}
      <section className="max-w-3xl mx-auto px-4" id="direct-email-card">
        <div className="bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
          <div className="space-y-1">
            <h3 className="text-sm font-extrabold text-white font-display">Still need help?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If you have any other questions, feel free to email our team directly.
            </p>
          </div>
          <a 
            href="mailto:runcodersupport@gmail.com"
            className="bg-[#1d2033] hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-5 rounded-xl flex items-center space-x-2 border border-slate-800 transition-all cursor-pointer shrink-0"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>runcodersupport@gmail.com</span>
          </a>
        </div>
      </section>

    </div>
  );
}
