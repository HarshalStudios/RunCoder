import { 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Smartphone, 
  ExternalLink,
  Wifi,
  HardDrive,
  Layers,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { Page, PLAY_STORE_URL } from '../types';

interface DownloadSectionProps {
  onPageChange?: (page: Page) => void;
}

export default function DownloadSection({ onPageChange }: DownloadSectionProps) {
  const specifications = [
    { 
      label: 'Minimum Android Version', 
      value: 'Android 8.0 (Oreo) / API 26+' 
    },
    { 
      label: 'Target API Level', 
      value: 'API Level 33+ (Android 13/14)' 
    },
    { 
      label: 'Supported Architectures', 
      value: 'ARM64-v8a, armeabi-v7a, x86_64' 
    },
    { 
      label: 'Internet Connection', 
      value: 'Required for cloud code execution' 
    },
    { 
      label: 'Device Storage', 
      value: 'Required for app and local project files' 
    }
  ];

  const permissions = [
    {
      title: 'Internet Access (android.permission.INTERNET)',
      desc: 'Used for network-dependent RunCoder functionality such as online code execution and template library synchronization.'
    },
    {
      title: 'Storage Access (Optional)',
      desc: 'Used when the user chooses to import or export source code files through Android\'s system file picker or storage mechanisms.'
    }
  ];

  const releaseHighlights = [
    {
      title: '7 Supported Languages',
      desc: 'Cloud compilation for C, C++, Java, and Python, plus integrated client-side web rendering for HTML, CSS, and JavaScript.'
    },
    {
      title: 'Multi-File Code Editor',
      desc: 'Tabbed buffer manager, searchable local file explorer, and dedicated mobile symbol strip with brackets and operators.'
    },
    {
      title: 'Structured Template Catalog',
      desc: 'Starter boilerplates categorized across Beginner, Intermediate, Advanced, and Pro difficulty tiers.'
    },
    {
      title: 'Optional Pro Upgrades',
      desc: 'Ad-free workspace and premium coding typography managed securely through Google Play Billing.'
    }
  ];

  return (
    <div className="space-y-20 pb-16" id="download-page-root">
      
      {/* 1. Hero & Download CTA */}
      <section className="text-center space-y-6 max-w-3xl mx-auto pt-10 px-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-950/40 text-blue-400 border border-blue-900/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight font-mono">
          <Download className="w-3.5 h-3.5" />
          <span>OFFICIAL DOWNLOAD</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Get RunCoder for Android.
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          Install RunCoder from Google Play and start coding, editing, and running projects directly from your Android device.
        </p>

        {/* Google Play Store Badge */}
        <div className="pt-2 flex flex-col items-center justify-center space-y-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#090b11] border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 p-4 rounded-2xl flex items-center space-x-4 max-w-sm w-full transition-all active:scale-98 text-left shadow-xl group cursor-pointer"
            id="google-play-download-btn"
          >
            {/* Google Play Logo */}
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 512 512" className="w-10 h-10">
                <defs>
                  <linearGradient id="p1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C6FF" />
                    <stop offset="100%" stopColor="#0072FF" />
                  </linearGradient>
                </defs>
                <path d="M48.01 24.16c-2.3 2.5-3.6 6.3-3.6 11.2v441.3c0 4.9 1.3 8.7 3.6 11.2l4.8 4.8L281 264.4v-16.7L52.81 19.36l-4.8 4.8z" fill="#3bccff" />
                <path d="M358.51 341.96l-77.5-77.5v-16.7l77.5-77.5 5.5 3.1 91.8 52.2c26.2 14.9 26.2 39.4 0 54.3l-91.8 52.2-5.5 3z" fill="#fec107" />
                <path d="M281 264.4L52.81 492.66c8.6 9.1 22.8 10.3 38.6 1.3l267.1-152L281 264.4z" fill="#ff2d55" />
                <path d="M281 247.7L91.41 19.36C75.61 10.36 61.41 11.56 52.81 20.66L281 247.7z" fill="#20e3b2" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold font-mono">GET IT ON</span>
              <span className="text-base font-extrabold text-white font-display tracking-tight leading-none block">Google Play</span>
              <span className="text-[10px] text-slate-400 block mt-1">Available for Android 8.0+</span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </a>

          {/* Technical Package Bar */}
          <div className="text-[11px] text-slate-500 font-mono flex items-center space-x-2">
            <span className="uppercase tracking-wider">PACKAGE ID:</span>
            <code className="text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[11px] select-text font-mono">
              com.runcode.app
            </code>
            <span className="text-[10px] text-slate-400 font-sans">(Official RunCoder Package)</span>
          </div>
        </div>
      </section>

      {/* 2. System Compatibility */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="system-compatibility">
        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
          <div className="w-10 h-10 bg-indigo-950/40 rounded-xl border border-indigo-900/30 flex items-center justify-center mx-auto lg:mx-0">
            <Cpu className="w-5 h-5 text-indigo-400" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">
            System Compatibility
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Check device specifications and connectivity requirements for running the RunCoder Android environment.
          </p>
        </div>

        <div className="lg:col-span-7 bg-[#131520] border border-slate-800/80 rounded-3xl p-6 shadow-xl">
          <div className="divide-y divide-slate-800/50">
            {specifications.map((req, idx) => (
              <div key={idx} className="py-3.5 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">{req.label}</span>
                <span className="font-bold text-white text-right pl-4 font-mono">{req.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. App Permissions */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6" id="app-permissions">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 bg-indigo-950/40 text-indigo-400 border border-indigo-900/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENCY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">Required App Permissions</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
            RunCoder operates with minimal system permissions to protect user privacy while supporting code execution and file management.
          </p>
        </div>

        <div className="bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-7 space-y-5 shadow-xl">
          {permissions.map((perm, i) => (
            <div key={i} className="space-y-1 text-left">
              <h4 className="text-xs sm:text-sm font-extrabold text-white font-mono">{perm.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{perm.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Latest Release / Version History */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6" id="version-history">
        <div className="text-center space-y-1.5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">CHANGELOG</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">Version History</h2>
        </div>

        <div className="bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-5 text-left shadow-xl">
          <div className="flex justify-between items-start border-b border-slate-800/80 pb-4">
            <div>
              <h4 className="text-base font-extrabold text-white font-display">Version 12.0 (Build 12)</h4>
              <span className="text-[11px] text-slate-400">Current Android production release</span>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[9px] font-bold px-2.5 py-1 rounded-full">
              LATEST RELEASE
            </span>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Release updates include multi-language remote compiler integration, an expanded code template catalog across four difficulty tiers, and refined editor customization options.
          </p>

          <div className="space-y-3 pt-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Release Highlights</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {releaseHighlights.map((hl, hlIdx) => (
                <div key={hlIdx} className="p-3 bg-[#0c0e18] border border-slate-800/80 rounded-xl space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{hl.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-5.5">
                    {hl.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Need Assistance Callout */}
      <section className="max-w-3xl mx-auto px-4" id="download-support-callout">
        <div className="bg-[#131520] border border-slate-800/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Need help installing or configuring RunCoder?</h4>
              <p className="text-[11px] text-slate-400">Visit our support center or contact support directly.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {onPageChange && (
              <button
                onClick={() => onPageChange('support')}
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
              >
                Help Center &rarr;
              </button>
            )}
            <a
              href="mailto:runcodersupport@gmail.com"
              className="text-xs font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-3.5 py-1.5 rounded-lg transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
