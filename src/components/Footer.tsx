import { Page, PLAY_STORE_URL } from '../types';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handlePageClick = (page: Page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-[#090a0f] border-t border-slate-900/60 pt-12 sm:pt-14 pb-8 sm:pb-10 select-none" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid - Proportional 3-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-slate-900/60">
          
          {/* Column 1: Logo and Brand Intro */}
          <div className="sm:col-span-2 md:col-span-6 space-y-3 max-w-sm">
            <div 
              onClick={() => handlePageClick('home')}
              className="flex items-center space-x-2.5 cursor-pointer group w-fit"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#131520] border border-blue-500/20 shadow-md group-hover:scale-105 transition-all flex items-center justify-center">
                <img 
                  src="/runcoder-official-logo.png" 
                  alt="RunCoder" 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-base font-extrabold text-white font-display">RunCoder</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              A complete coding workspace for Android — learn with templates, build projects, manage files, write code, and run it anywhere.
            </p>
          </div>

          {/* Column 2: Resources */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handlePageClick('blog')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Blog & Guides
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('support')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Help Center & FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('download')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Download Guide
                </button>
              </li>
              <li>
                <a 
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors flex items-center space-x-1 text-left"
                >
                  <span>Google Play Store</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <button onClick={() => handlePageClick('pro')} className="text-slate-500 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 text-left">
                  <span>RunCoder Pro</span>
                  <span className="bg-amber-400/10 text-amber-300 text-[8px] font-bold px-1.5 py-0.2 rounded font-mono">PREMIUM</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handlePageClick('privacy')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('terms')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('refund')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal contact bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-slate-500 font-sans">
          <div className="space-y-0.5 text-left">
            <span>&copy; {new Date().getFullYear()} RunCoder. All rights reserved.</span>
            <p className="text-[10px] text-slate-600">
              RunCoder is the official Android coding application developed by Harshal Studios.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs text-slate-500">
            <button onClick={() => handlePageClick('blog')} className="hover:text-slate-300 transition-colors cursor-pointer">Blog</button>
            <button onClick={() => handlePageClick('privacy')} className="hover:text-slate-300 transition-colors cursor-pointer">Privacy</button>
            <button onClick={() => handlePageClick('terms')} className="hover:text-slate-300 transition-colors cursor-pointer">Terms</button>
            <a href="mailto:runcodersupport@gmail.com" className="hover:text-slate-300 transition-colors">runcodersupport@gmail.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
