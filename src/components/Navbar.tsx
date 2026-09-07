import { useState } from 'react';
import { Menu, X, Download, Sparkles, Code2 } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const navItems: { id: Page; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'pro', label: 'RunCoder Pro', highlight: true },
    { id: 'download', label: 'Download' },
    { id: 'support', label: 'Support' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: Page) => {
    onPageChange(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900/80 bg-[#0d0e15]/90 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Branding */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
            id="nav-logo"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-blue-950/40 bg-[#131520] border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/40 transition-all">
              {!logoFailed ? (
                <img 
                  src="/runcoder-official-logo.png" 
                  alt="RunCoder" 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base font-extrabold tracking-tight text-white font-display leading-tight">RunCoder</span>
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest leading-none mt-0.5">Android IDE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-slate-800 text-white font-bold border border-slate-700/50 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  {item.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action button */}
          <div className="hidden md:block shrink-0">
            <button
              onClick={() => handleNavClick('download')}
              className="bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs py-2 px-4 rounded-full shadow-lg shadow-slate-950/20 active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
              id="nav-download-btn"
            >
              <Download className="w-3.5 h-3.5 text-slate-950" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/60 transition-all focus:outline-none focus:ring-0"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-900 bg-[#0d0e15] select-none shadow-2xl" id="mobile-drawer">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-tight transition-all flex items-center space-x-2.5 ${
                    isActive
                      ? 'bg-slate-800 text-white font-bold border border-slate-700/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                  }`}
                >
                  {item.highlight && <Sparkles className="w-4 h-4 text-amber-400" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
            
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('download')}
                className="w-full bg-white text-slate-950 text-xs font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download on Google Play</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
