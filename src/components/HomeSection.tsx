import { useState } from 'react';
import { 
  Check, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  Code2, 
  Settings, 
  Folder, 
  Copy, 
  ArrowRight, 
  Search, 
  FileCode2, 
  FolderTree,
  Layers,
  Play,
  Plus,
  MoreVertical,
  ExternalLink,
  Laptop
} from 'lucide-react';
import DeviceMockup from './DeviceMockup';
import { Page, PLAY_STORE_URL } from '../types';
import { RUNCODER_TEMPLATES } from '../data/templates';

interface HomeSectionProps {
  onPageChange: (page: Page) => void;
}

export default function HomeSection({ onPageChange }: HomeSectionProps) {
  // Active template filters in the templates showcase section
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [templateSearchQuery, setTemplateSearchQuery] = useState<string>('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [cardPreviewModes, setCardPreviewModes] = useState<Record<string, 'code' | 'output'>>({});
  const [showAllCards, setShowAllCards] = useState<boolean>(false);

  // Active 7-parts tab switcher state
  const [activePartTab, setActivePartTab] = useState<'home' | 'workspace' | 'templates' | 'files' | 'code' | 'preview' | 'settings'>('home');

  // Customization preview states
  const [demoFont, setDemoFont] = useState<string>('JetBrains Mono');
  const [demoFontSize, setDemoFontSize] = useState<number>(14);
  const [demoLineNumbers, setDemoLineNumbers] = useState<boolean>(true);
  const [demoTheme, setDemoTheme] = useState<'material' | 'one-dark' | 'monokai'>('material');

  // Filter templates dynamically by search, level, and language from 28-item representative catalog
  const filteredTemplates = RUNCODER_TEMPLATES.filter(tmpl => {
    const matchesLevel = selectedLevel === 'All' || tmpl.level === selectedLevel;
    const matchesLanguage = selectedLanguage === 'All' || 
      (selectedLanguage === 'C' && tmpl.language === 'c') ||
      (selectedLanguage === 'C++' && tmpl.language === 'cpp') ||
      (selectedLanguage === 'Java' && tmpl.language === 'java') ||
      (selectedLanguage === 'Python' && tmpl.language === 'python') ||
      (selectedLanguage === 'HTML' && tmpl.language === 'html') ||
      (selectedLanguage === 'CSS' && tmpl.language === 'css') ||
      (selectedLanguage === 'JavaScript' && tmpl.language === 'javascript');
    
    const query = templateSearchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      tmpl.title.toLowerCase().includes(query) ||
      tmpl.description.toLowerCase().includes(query) ||
      tmpl.languageLabel.toLowerCase().includes(query) ||
      (tmpl.tags && tmpl.tags.some(t => t.toLowerCase().includes(query))) ||
      (tmpl.category && tmpl.category.toLowerCase().includes(query));
      
    return matchesLevel && matchesLanguage && matchesSearch;
  });

  const toggleCardPreview = (id: string, mode: 'code' | 'output') => {
    setCardPreviewModes(prev => ({
      ...prev,
      [id]: mode
    }));
  };

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Supported Languages (7 distinct languages)
  const languageList = [
    { name: 'C', ext: '.c', desc: 'Systems & fundamentals', color: 'text-blue-400 border-blue-500/20 bg-blue-500/10' },
    { name: 'C++', ext: '.cpp', desc: 'STL & competitive programming', color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10' },
    { name: 'Java', ext: '.java', desc: 'Object-oriented programs', color: 'text-orange-400 border-orange-500/20 bg-orange-500/10' },
    { name: 'Python', ext: '.py', desc: 'Scripts & algorithms', color: 'text-amber-400 border-amber-500/20 bg-amber-500/10' },
    { name: 'HTML', ext: '.html', desc: 'Web documents & DOM', color: 'text-rose-400 border-rose-500/20 bg-rose-500/10' },
    { name: 'CSS', ext: '.css', desc: 'Styling, colors & layouts', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10' },
    { name: 'JavaScript', ext: '.js', desc: 'Logic & interactivity', color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/10' },
  ];

  // Coding Fonts
  const codingFonts = [
    'JetBrains Mono',
    'Fira Code',
    'Source Code Pro',
    'Hack'
  ];

  // 7 App Screens Architecture Details (Accurate to RunCoder Android Spec)
  const appParts = {
    home: {
      title: 'Home Screen',
      badge: 'Hub',
      subtitle: 'The primary dashboard. Continue where you left off.',
      description: 'The Home screen acts as your central launchpad. It features instant project creation, one-tap language scratchpads, open workspace buffer snapshots, and starter templates so you can resume coding immediately.',
      capabilities: [
        { label: 'Create New Project', desc: 'Initialize fresh projects instantly across C, C++, Java, Python, HTML, or CSS.' },
        { label: 'Open Workspace Buffers', desc: 'Resume multi-file projects instantly with their exact last-edited file buffers.' },
        { label: 'Quick Start Language Pills', desc: 'One-tap scratchpad launcher for Python, C, Java, and Web without tedious setup.' }
      ],
      icon: Code2,
      accent: 'blue'
    },
    workspace: {
      title: 'Workspace Screen',
      badge: 'Projects',
      subtitle: 'Your multi-project root repository on Android.',
      description: 'The Workspace screen provides project-level management for all your codebases. Filter by language, search by name, manage project sizes, and create new workspaces via the prominent Floating Action Button.',
      capabilities: [
        { label: 'Multi-Project Organization', desc: 'Group source files into dedicated project environments with custom icons.' },
        { label: 'Floating Action Button (FAB)', desc: 'Instant modal workflow to initialize new C, Java, Python, or Web projects.' },
        { label: 'Project Context Actions', desc: 'Rename, duplicate, delete, or export full projects via Android Storage Access Framework.' }
      ],
      icon: Layers,
      accent: 'cyan'
    },
    templates: {
      title: 'Templates Screen',
      badge: '100+ Starters',
      subtitle: 'Curated starter projects categorized from Beginner to Pro.',
      description: 'Browse over 100 verified templates across C, C++, Java, Python, and Web. Each starter includes estimated completion time, core concept tags, difficulty rating, and one-click forking directly into your active workspace.',
      capabilities: [
        { label: 'Four Tier Categorization', desc: 'Filter cleanly by Beginner, Intermediate, Advanced, and Pro difficulty tiers.' },
        { label: 'One-Click Forking', desc: 'Fork any boilerplate directly into a newly initialized project or active tab.' },
        { label: 'Syntax & Clipboard Copy', desc: 'Review formatted code with instant copy to Android clipboard.' }
      ],
      icon: Sparkles,
      accent: 'amber'
    },
    files: {
      title: 'Files Screen',
      badge: 'Explorer',
      subtitle: 'Hierarchical directory tree and project explorer.',
      description: 'Navigate your workspace structure with an intuitive folder tree. Easily manage nested folders (src/, include/, assets/), create new files, rename modules, and switch between active files with real-time status indicators.',
      capabilities: [
        { label: 'Nested Folder Tree', desc: 'Visual directory hierarchy with collapsible folders and language badges.' },
        { label: 'Fast File Search', desc: 'Find any file across all subdirectories with instantaneous extension filtering.' },
        { label: 'Inline File Management', desc: 'Quick-action buttons for New File, New Folder, Rename, and Safe Delete.' }
      ],
      icon: FolderTree,
      accent: 'emerald'
    },
    code: {
      title: 'Code Screen',
      badge: 'Editor',
      subtitle: 'Touch-engineered mobile editor with hardware precision.',
      description: 'Designed specifically for touchscreens. Features multi-file tab buffers, syntax token coloring, line numbers gutter, undo/redo stack, and an ultra-fast mobile symbol bar for effortless code entry.',
      capabilities: [
        { label: 'Mobile Symbol Bar', desc: 'One-tap access to ( ) { } [ ] ; = " : < > + - / * right above the keyboard.' },
        { label: 'Multi-Tab File Buffers', desc: 'Work across multiple files simultaneously with visual dirty/modified indicators.' },
        { label: 'Auto-Closing Brackets', desc: 'Automatic matching of braces, brackets, quotes, and smart indentation.' }
      ],
      icon: Terminal,
      accent: 'indigo'
    },
    preview: {
      title: 'Preview / Console',
      badge: 'Dual Engine',
      subtitle: 'Live terminal output and responsive mobile WebView.',
      description: 'Run your code with zero lag. Features an interactive stdout/stdin terminal with keyboard input for console languages (C, C++, Java, Python) and an integrated mobile WebView with live DOM rendering for Web projects.',
      capabilities: [
        { label: 'Interactive Terminal & Stdin', desc: 'Real-time stdout stream with an interactive stdin input field for prompt responses.' },
        { label: 'Live Android WebView', desc: 'Responsive 390x844 mobile viewport rendering HTML/CSS/JS with dev console logs.' },
        { label: 'Execution Metrics', desc: 'Displays precise runtime duration, memory usage, and process exit codes.' }
      ],
      icon: Play,
      accent: 'emerald'
    },
    settings: {
      title: 'Settings Screen',
      badge: 'Preferences',
      subtitle: 'Customize typography, syntax themes, and storage.',
      description: 'Tailor RunCoder to your exact visual comfort. Select from 11 monospaced coding fonts, configure dynamic font scaling from 10sp to 24sp, choose dark syntax themes, and manage local cache storage.',
      capabilities: [
        { label: '11 Monospace Coding Fonts', desc: 'Includes JetBrains Mono, Fira Code, Source Code Pro, and Hack.' },
        { label: 'Granular Scaling (10sp–24sp)', desc: 'Smooth slider control to adjust editor line height and font size for any screen.' },
        { label: 'Syntax Themes & Storage', desc: 'Material Dark, One Dark, and Monokai with one-tap cache and SAF storage controls.' }
      ],
      icon: Settings,
      accent: 'purple'
    }
  };

  const currentPart = appParts[activePartTab];

  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      
      {/* ========================================================
          1. HERO SECTION (POLISHED & FOCUSED)
          ======================================================== */}
      <section className="relative overflow-hidden pt-6 md:pt-12" id="home-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Hero Left: Product Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Product Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Learn. Build. Run. Anywhere.</span>
              </div>

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
                Your coding workspace.<br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Right in your pocket.
                </span>
              </h1>

              {/* Concise Supporting Subhead */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Write code, start from templates, run programs, and manage your projects — all from your Android device.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <button
                  onClick={() => onPageChange('download')}
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm py-3.5 px-8 rounded-full shadow-xl shadow-slate-950/40 active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  id="hero-get-runcoder-btn"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Get RunCoder</span>
                </button>
                
                <button
                  onClick={() => {
                    const el = document.getElementById('home-templates');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto bg-[#131520] hover:bg-[#1c1f2e] border border-slate-800 text-slate-300 hover:text-white font-bold text-sm py-3.5 px-8 rounded-full transition-all active:scale-95 flex items-center justify-center space-x-1.5 cursor-pointer"
                  id="hero-explore-templates-btn"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Explore Templates</span>
                </button>
              </div>

              {/* Developer Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-3 text-slate-400 text-xs">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Google Play Verified</span>
                </div>
                <div className="w-px h-3.5 bg-slate-800"></div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Built for Android</span>
                </div>
              </div>

            </div>

            {/* Hero Right: Real Interactive Android Device */}
            <div className="lg:col-span-5 flex justify-center py-2 lg:py-0">
              <DeviceMockup />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. APPLICATION ARCHITECTURE (7-SCREEN INTERACTIVE SHOWCASE)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-parts">
        <div className="text-center space-y-3 pb-8">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">
            APPLICATION ARCHITECTURE • 7 SCREENS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            A Complete Development Environment on Android.
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            RunCoder connects 7 specialized screens into one seamless mobile workflow — from project creation and file management to precision editing, cloud compilation, and live preview.
          </p>
        </div>

        {/* Tab Selector Bar (All 7 Screens) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-[#131520] border border-slate-800/80 rounded-2xl max-w-full overflow-x-auto scrollbar-none gap-1">
            {(['home', 'workspace', 'templates', 'files', 'code', 'preview', 'settings'] as const).map((tabKey) => {
              const part = appParts[tabKey];
              const Icon = part.icon;
              const isActive = activePartTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActivePartTab(tabKey)}
                  className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'bg-slate-800 text-white shadow-md border border-slate-700/60' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                  id={`part-tab-${tabKey}`}
                >
                  <Icon className={`w-3.5 h-3.5 ${
                    tabKey === 'home' ? 'text-blue-400' :
                    tabKey === 'workspace' ? 'text-cyan-400' :
                    tabKey === 'templates' ? 'text-amber-400' :
                    tabKey === 'files' ? 'text-emerald-400' :
                    tabKey === 'code' ? 'text-indigo-400' :
                    tabKey === 'preview' ? 'text-rose-400' : 'text-purple-400'
                  }`} />
                  <span>{part.title.replace(' Screen', '')}</span>
                  <span className="text-[9px] font-mono text-slate-500 hidden sm:inline uppercase">
                    ({part.badge})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Showcase Box */}
        <div className="bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Explanation & Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  <span>Screen: {currentPart.title}</span>
                  <span>•</span>
                  <span>{currentPart.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {currentPart.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentPart.description}
                </p>
              </div>

              {/* 3 Meaningful Capabilities */}
              <div className="space-y-3 pt-2">
                {currentPart.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start space-x-3 p-3 bg-[#0d0e15] border border-slate-900 rounded-xl">
                    <div className="w-5 h-5 rounded-md bg-blue-950/60 border border-blue-800/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{cap.label}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: UI Representation */}
            <div className="lg:col-span-6">
              <div className="bg-[#090a0f] border border-slate-800/80 rounded-2xl p-5 font-mono shadow-inner space-y-4">
                
                {/* Simulated Screen Top Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-900 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <span className="font-bold text-white font-sans text-xs">RunCoder / {currentPart.title}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active Architecture View
                  </span>
                </div>

                {/* Dynamic Screen Content Mock */}
                {activePartTab === 'home' && (
                  <div className="space-y-3 text-xs">
                    {/* Create New Project Banner */}
                    <div className="p-3 bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#38bdf8] rounded-xl text-white space-y-0.5">
                      <div className="font-bold text-xs">Create New Project</div>
                      <div className="text-[10px] text-white/90">Start building with your favorite language</div>
                    </div>

                    {/* Quick Split Cards */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 bg-[#131520] border border-slate-800/80 rounded-xl space-y-1">
                        <div className="text-[11px] font-bold text-white">Workspace</div>
                        <div className="text-[9px] text-slate-400">35 files open</div>
                      </div>
                      <div className="p-2.5 bg-[#131520] border border-slate-800/80 rounded-xl space-y-1">
                        <div className="text-[11px] font-bold text-white">Templates</div>
                        <div className="text-[9px] text-slate-400">Use a starter template</div>
                      </div>
                    </div>

                    {/* Start Coding in... Language Pills */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Start Coding In...</div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {['⚙ C', '⚙+ C++', '☕ Java', '🐍 Python', '🌐 HTML', '🍪 CSS'].map((l) => (
                          <div key={l} className="p-1.5 bg-[#0a0b10] border border-slate-800 rounded text-center text-[10px] font-sans font-medium text-slate-300">
                            {l}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Your Workspace */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Workspace</div>
                      <div className="p-2.5 bg-[#131520] border border-slate-800/80 rounded-xl space-y-2">
                        <div className="flex items-center space-x-1.5 text-blue-400 font-bold text-[11px]">
                          <Play className="w-3 h-3 fill-current" />
                          <span>35 Open Files</span>
                        </div>
                        <div className="space-y-0.5 text-[10px] text-slate-300">
                          <div>• Tic_Tac_Toe_Game.js</div>
                          <div>• Shopping_Cart_Simulation.js</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePartTab === 'workspace' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-2 bg-[#131520] border border-slate-800 rounded-xl text-[11px]">
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Search className="w-3.5 h-3.5 text-slate-500" />
                        <span>Filter 3 workspaces...</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-[9px] font-bold rounded">All (3)</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      {[
                        { title: 'Tic-Tac-Toe Game', lang: 'HTML/JS', size: '14.2 KB', updated: 'Just now' },
                        { title: 'Data Structures Lab', lang: 'Java', size: '8.4 KB', updated: '2h ago' },
                        { title: 'Algorithm Sandbox', lang: 'Python', size: '4.1 KB', updated: 'Yesterday' }
                      ].map((p, i) => (
                        <div key={i} className="p-2.5 bg-[#11131c] border border-slate-800/80 rounded-xl flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-bold text-white font-sans text-xs">{p.title}</div>
                            <div className="text-[10px] text-slate-400 font-sans">{p.lang} • {p.size} • {p.updated}</div>
                          </div>
                          <span className="text-slate-500 hover:text-white cursor-pointer px-1">•••</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400 font-sans">
                      <span>Floating Action Button (FAB) for instant project creation</span>
                      <span className="text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">+ New</span>
                    </div>
                  </div>
                )}

                {activePartTab === 'templates' && (
                  <div className="space-y-2 text-xs">
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 bg-[#131520] border border-amber-500/20 rounded-xl space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-emerald-400 uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded">Beginner</span>
                          <span className="text-[9px] text-slate-500">10m</span>
                        </div>
                        <div className="font-bold text-white font-sans">Simple Calculator</div>
                        <div className="text-[10px] text-slate-400 font-sans">Language: C (.c)</div>
                      </div>
                      <div className="p-2.5 bg-[#131520] border border-blue-500/20 rounded-xl space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-blue-400 uppercase bg-blue-500/10 px-1.5 py-0.5 rounded">Intermediate</span>
                          <span className="text-[9px] text-slate-500">25m</span>
                        </div>
                        <div className="font-bold text-white font-sans">Binary Search Tree</div>
                        <div className="text-[10px] text-slate-400 font-sans">Language: Java (.java)</div>
                      </div>
                    </div>
                    <div className="p-2 bg-[#11131c] rounded-lg border border-slate-900 text-center text-[10px] text-slate-400">
                      ⚡ 100+ Starters • One-Click Forking directly into active workspace
                    </div>
                  </div>
                )}

                {activePartTab === 'files' && (
                  <div className="space-y-2 text-xs">
                    <div className="p-2 bg-[#131520] rounded-xl border border-slate-800 flex items-center justify-between text-[11px]">
                      <span className="text-slate-300 font-bold font-sans">Explorer: Tic-Tac-Toe</span>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">+ File</span>
                        <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono">+ Folder</span>
                      </div>
                    </div>
                    <div className="space-y-1 text-[11px] bg-[#0c0d13] p-2.5 rounded-xl border border-slate-900">
                      <div className="flex items-center space-x-2 text-emerald-400">
                        <FolderTree className="w-3.5 h-3.5" />
                        <span className="font-bold">src/</span>
                      </div>
                      <div className="flex items-center justify-between pl-5 py-1 text-slate-200 bg-blue-500/10 rounded px-1.5 border border-blue-500/20">
                        <div className="flex items-center space-x-1.5">
                          <FileCode2 className="w-3 h-3 text-blue-400" />
                          <span>index.html</span>
                        </div>
                        <span className="text-[9px] text-blue-400 font-bold">Active</span>
                      </div>
                      <div className="flex items-center space-x-1.5 pl-5 py-0.5 text-slate-400">
                        <FileCode2 className="w-3 h-3 text-cyan-400" />
                        <span>styles.css</span>
                      </div>
                      <div className="flex items-center space-x-1.5 pl-5 py-0.5 text-slate-400">
                        <FileCode2 className="w-3 h-3 text-yellow-400" />
                        <span>app.js</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePartTab === 'code' && (
                  <div className="space-y-2 text-xs">
                    <div className="flex space-x-1 text-[11px]">
                      <span className="px-2.5 py-1 bg-slate-800 text-white rounded-t-md font-bold flex items-center space-x-1">
                        <span>main.py</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      </span>
                      <span className="px-2.5 py-1 bg-slate-900/60 text-slate-500 rounded-t-md">BinarySearch.java</span>
                    </div>
                    <div className="p-3 bg-[#0c0d12] border border-slate-800 rounded-xl text-[11px] text-slate-300 space-y-1">
                      <div><span className="text-purple-400">def</span> <span className="text-blue-400">quicksort</span>(arr):</div>
                      <div className="pl-4"><span className="text-slate-500"># Mobile touch-engineered buffer</span></div>
                      <div className="pl-4"><span className="text-purple-400">if</span> len(arr) &lt;= <span className="text-amber-400">1</span>: <span className="text-purple-400">return</span> arr</div>
                    </div>
                    <div className="flex gap-1 overflow-x-auto py-1 text-[10px] text-slate-400 border-t border-slate-900 font-mono">
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-200 rounded">( )</span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-200 rounded">{`{ }`}</span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-200 rounded">[ ]</span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-200 rounded">;</span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-200 rounded">=</span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-200 rounded">"</span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-200 rounded">:</span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-200 rounded">&lt;</span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-200 rounded">&gt;</span>
                    </div>
                  </div>
                )}

                {activePartTab === 'preview' && (
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-[#0c0d12] border border-slate-800 rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-900 pb-1.5 font-sans">
                        <span className="text-emerald-400 font-bold flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>Interactive Cloud Terminal</span>
                        </span>
                        <span>Exit Code: 0 (Success)</span>
                      </div>
                      <div className="font-mono text-[11px] text-slate-300 space-y-0.5">
                        <div className="text-slate-500">$ gcc main.c -o main && ./main</div>
                        <div className="text-amber-300">Enter radius of circle: 5.0</div>
                        <div className="text-emerald-400">Area of Circle: 78.5398</div>
                      </div>
                      <div className="flex items-center space-x-1.5 pt-1">
                        <span className="text-[10px] text-slate-500 font-mono">stdin:</span>
                        <div className="flex-1 bg-[#131520] border border-slate-800 rounded px-2 py-0.5 text-[10px] text-slate-400">
                          Type input & press Send...
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePartTab === 'settings' && (
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center p-2 bg-[#131520] rounded-lg border border-slate-800 text-[11px]">
                      <span className="text-slate-300">Monospace Font</span>
                      <span className="text-purple-400 font-bold">JetBrains Mono</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-[#131520] rounded-lg border border-slate-800 text-[11px]">
                      <span className="text-slate-300">Font Scaling</span>
                      <span className="text-blue-400 font-bold">14sp (Adjustable 10-24sp)</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-[#131520] rounded-lg border border-slate-800 text-[11px]">
                      <span className="text-slate-300">Syntax Theme</span>
                      <span className="text-emerald-400 font-bold">Material Dark 3</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. TEMPLATES (CURATED HIGHLIGHTS)
          ======================================================== */}
      <section className="bg-gradient-to-b from-[#090a0f] via-[#0d0e15] to-[#090a0f] border-y border-slate-900/80 py-16 sm:py-20" id="home-templates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-tight uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TEMPLATES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Don't start from an empty screen.<br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Start with a template.
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore ready-to-use starter templates from Beginner fundamentals to advanced projects.
            </p>
          </div>

          {/* Filter Bar Controls + Search Field */}
          <div className="bg-[#131520] border border-slate-800/90 p-4 sm:p-5 rounded-2xl space-y-4">
            
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              
              {/* Search Field */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  placeholder="Search templates by name, tag, or language..."
                  value={templateSearchQuery}
                  onChange={(e) => setTemplateSearchQuery(e.target.value)}
                  className="w-full bg-[#090a0f] border border-slate-800 rounded-xl pl-9.5 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60"
                  id="template-search-input"
                />
              </div>

              {/* Skill Level Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase mr-1 hidden sm:inline">Tier:</span>
                {['All', 'Beginner', 'Intermediate', 'Advanced', 'Pro'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedLevel === lvl 
                        ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>

            </div>

            {/* Language Filter Chips Row */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-900">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase mr-1">Language:</span>
              {['All', 'C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                    selectedLanguage === lang 
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30' 
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800/80'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

          </div>

          {/* Curated Templates Grid */}
          {(() => {
            const isDefaultAll = selectedLevel === 'All' && selectedLanguage === 'All' && !templateSearchQuery.trim();
            const displayedTemplates = isDefaultAll && !showAllCards 
              ? filteredTemplates.slice(0, 8) 
              : filteredTemplates;

            return (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedTemplates.map((template, idx) => {
                    const levelColor = 
                      template.level === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      template.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      template.level === 'Advanced' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                      'bg-amber-500/10 text-amber-300 border-amber-500/20';

                    const langBadgeColor = 
                      template.language === 'c' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      template.language === 'cpp' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' :
                      template.language === 'java' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                      template.language === 'python' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                      template.language === 'html' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                      template.language === 'css' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' :
                      'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';

                    const currentMode = cardPreviewModes[template.id] || 'code';

                    return (
                      <div 
                        key={template.id || idx}
                        className="bg-[#11131c] hover:bg-[#151824] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-all group shadow-sm"
                      >
                        {/* Top: Metadata */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border uppercase ${levelColor}`}>
                              {template.level}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase ${langBadgeColor}`}>
                              {template.languageLabel}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                              {template.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed min-h-[36px]">
                              {template.description}
                            </p>
                          </div>

                          {/* Code / Output Toggle Tabs */}
                          <div className="flex items-center justify-between text-[11px] pt-1">
                            <div className="inline-flex bg-[#090a0f] p-0.5 rounded-lg border border-slate-800">
                              <button
                                onClick={() => toggleCardPreview(template.id, 'code')}
                                className={`px-2.5 py-1 rounded-md font-mono font-medium transition-all cursor-pointer ${
                                  currentMode === 'code' 
                                    ? 'bg-slate-800 text-white' 
                                    : 'text-slate-500 hover:text-slate-300'
                                }`}
                              >
                                Code ({template.extension})
                              </button>
                              {template.output && (
                                <button
                                  onClick={() => toggleCardPreview(template.id, 'output')}
                                  className={`px-2.5 py-1 rounded-md font-mono font-medium transition-all cursor-pointer ${
                                    currentMode === 'output' 
                                      ? 'bg-slate-800 text-amber-300' 
                                      : 'text-slate-500 hover:text-slate-300'
                                  }`}
                                >
                                  Output
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Syntax Code / Output Preview Box */}
                          <div className="bg-[#090a0f] border border-slate-900 rounded-xl p-3 font-mono text-[11px] text-slate-300 overflow-x-auto relative h-28">
                            {currentMode === 'code' ? (
                              <pre className="line-clamp-4 leading-relaxed select-text font-mono text-slate-300 whitespace-pre-wrap">
                                {template.code}
                              </pre>
                            ) : (
                              <div className="space-y-1">
                                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider flex items-center space-x-1">
                                  <Terminal className="w-3 h-3 text-emerald-400" />
                                  <span>Sample Output</span>
                                </div>
                                <pre className="line-clamp-3 leading-relaxed select-text font-mono text-emerald-400 whitespace-pre-wrap">
                                  {template.output}
                                </pre>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Bottom: Action bar */}
                        <div className="pt-2 border-t border-slate-900/80 flex items-center justify-between gap-2">
                          <button
                            onClick={() => onPageChange('download')}
                            className="px-2.5 py-1.5 text-xs font-semibold text-slate-400 hover:text-amber-300 flex items-center space-x-1 transition-colors cursor-pointer"
                          >
                            <span>Open in RunCoder</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>

                          <button
                            onClick={() => handleCopyCode(template.code, idx)}
                            className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 text-[11px] font-medium rounded-lg flex items-center space-x-1 transition-all active:scale-95 cursor-pointer"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 text-slate-400" />
                                <span>Copy Code</span>
                              </>
                            )}
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Show All / Show Curated Toggle when viewing default list */}
                {isDefaultAll && (
                  <div className="text-center pt-2">
                    <button
                      onClick={() => setShowAllCards(!showAllCards)}
                      className="text-xs font-mono font-bold text-slate-400 hover:text-amber-300 border border-slate-800 bg-[#131520] hover:bg-[#181b29] px-4 py-2 rounded-xl transition-all cursor-pointer"
                    >
                      {showAllCards ? 'Show curated selection (8)' : `View all 28 preview cards`}
                    </button>
                  </div>
                )}
              </div>
            );
          })()}

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12 bg-[#131520] border border-slate-800 rounded-2xl space-y-2">
              <p className="text-sm text-slate-300 font-semibold">No templates found matching your filters.</p>
              <button 
                onClick={() => { setSelectedLevel('All'); setSelectedLanguage('All'); setTemplateSearchQuery(''); }}
                className="text-xs text-amber-400 hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          )}

          {/* Clean Explore All Templates CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center pt-2 gap-4 text-center">
            <button
              onClick={() => onPageChange('download')}
              className="inline-flex items-center space-x-2 bg-[#131520] hover:bg-[#1a1d2d] border border-amber-500/30 text-amber-300 hover:text-amber-200 font-bold text-xs py-3 px-6 rounded-full transition-all active:scale-95 cursor-pointer shadow-lg shadow-amber-500/5"
              id="home-explore-all-templates-btn"
            >
              <span>Explore all templates in RunCoder</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          4. CONNECTED WORKFLOW (6-STAGE VISUAL PIPELINE)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-workflow">
        <div className="text-center space-y-3 pb-12">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">End-to-End Lifecycle</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            The RunCoder Workflow.
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            From initial project idea to execution, file management, and export across six connected stages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative">
          
          {/* Step 1: Discover */}
          <div className="bg-[#131520] border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3 relative group">
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs font-mono font-bold text-blue-400">
                01
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Discover</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Browse or Scratchpad</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Start immediately from the Home dashboard with a scratchpad or pick from 100+ vetted starter templates.
              </p>
            </div>
            <div className="bg-[#090a0f] p-2.5 rounded-xl border border-slate-900 text-[10px] font-mono text-blue-300/80">
              Home Screen ➔ 100+ Starters
            </div>
          </div>

          {/* Step 2: Manage */}
          <div className="bg-[#131520] border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3 relative group">
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xs font-mono font-bold text-cyan-400">
                02
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Initialize</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Create Workspace</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Initialize new multi-file projects using the Floating Action Button (FAB) or organize existing project folders.
              </p>
            </div>
            <div className="bg-[#090a0f] p-2.5 rounded-xl border border-slate-900 text-[10px] font-mono text-cyan-300/80">
              Workspace Screen ➔ + New Project
            </div>
          </div>

          {/* Step 3: Explore */}
          <div className="bg-[#131520] border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3 relative group">
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xs font-mono font-bold text-emerald-400">
                03
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Structure</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Explore Directory Tree</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Navigate source hierarchies, nested folders (src/, include/), create files, and manage module names.
              </p>
            </div>
            <div className="bg-[#090a0f] p-2.5 rounded-xl border border-slate-900 text-[10px] font-mono text-emerald-300/80">
              Files Screen ➔ Folder Tree
            </div>
          </div>

          {/* Step 4: Write */}
          <div className="bg-[#131520] border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3 relative group">
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs font-mono font-bold text-indigo-400">
                04
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Develop</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Touch-Precision Coding</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Code with ease using multi-tab buffers, syntax coloring, line numbers, and the dedicated mobile symbol bar.
              </p>
            </div>
            <div className="bg-[#090a0f] p-2.5 rounded-xl border border-slate-900 text-[10px] font-mono text-indigo-300/80">
              Code Screen ➔ Symbol Row ( ) {`{ }`} ;
            </div>
          </div>

          {/* Step 5: Execute */}
          <div className="bg-[#131520] border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3 relative group">
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-xs font-mono font-bold text-rose-400">
                05
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Execute</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Live Preview & Terminal</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Compile console programs in cloud sandboxes with interactive stdin, or test web apps in the live Android WebView.
              </p>
            </div>
            <div className="bg-[#090a0f] p-2.5 rounded-xl border border-slate-900 text-[10px] font-mono text-rose-300/80">
              Preview Screen ➔ Stdin & WebView
            </div>
          </div>

          {/* Step 6: Customize & Export */}
          <div className="bg-[#131520] border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3 relative group">
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xs font-mono font-bold text-purple-400">
                06
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Export</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Configure & SAF Backup</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Customize typography and dark themes in Settings, then export source files safely to Android storage.
              </p>
            </div>
            <div className="bg-[#090a0f] p-2.5 rounded-xl border border-slate-900 text-[10px] font-mono text-purple-300/80">
              Settings Screen ➔ SAF Export
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          5. LANGUAGES (SIMPLIFIED & CLEAN)
          ======================================================== */}
      <section className="bg-gradient-to-b from-[#090a0f] to-[#0c0d12] border-y border-slate-900/60 py-16" id="home-languages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">Polyglot Runner</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              One workspace. Multiple languages.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              Write, edit, and run code across the languages you use to learn and build.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {languageList.map((lang, i) => (
              <div 
                key={i} 
                className="bg-[#131520] hover:bg-[#181a27] border border-slate-800/80 p-4 rounded-xl space-y-2 transition-all text-center sm:text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">{lang.name}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{lang.ext}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {lang.desc}
                  </p>
                </div>
                <div className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border text-center ${lang.color}`}>
                  Active Runner
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <span className="text-[11px] text-slate-500 font-mono">
              🛡️ All languages execute in an isolated cloud sandbox with timeout & memory protection.
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================
          6. CUSTOMIZATION ("Make the editor yours.")
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-customization">
        <div className="bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden space-y-8 shadow-2xl">
          
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              Make the editor yours.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Fine-tune the coding environment to your personal visual preferences. Test our live settings preview below:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Control Panel */}
            <div className="lg:col-span-5 bg-[#0d0e15] border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-5">
              
              {/* Font Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 flex justify-between">
                  <span>Pro Coding Font</span>
                  <span className="text-[10px] font-mono text-purple-400">{demoFont}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {codingFonts.map(f => (
                    <button
                      key={f}
                      onClick={() => setDemoFont(f)}
                      className={`px-3 py-2 rounded-xl text-xs font-mono text-left transition-all cursor-pointer border ${
                        demoFont === f 
                          ? 'bg-purple-500/20 border-purple-500/40 text-purple-300' 
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Size Adjuster */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>Font Size</span>
                  <span className="font-mono text-blue-400">{demoFontSize}px</span>
                </div>
                <input 
                  type="range" 
                  min="11" 
                  max="18" 
                  value={demoFontSize} 
                  onChange={(e) => setDemoFontSize(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Line Numbers Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-900">
                <span className="text-xs font-bold text-slate-300">Show Line Numbers</span>
                <button
                  onClick={() => setDemoLineNumbers(!demoLineNumbers)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    demoLineNumbers ? 'bg-blue-600' : 'bg-slate-800'
                  }`}
                >
                  <span className={`block w-4 h-4 rounded-full bg-white transition-transform transform ${
                    demoLineNumbers ? 'translate-x-6' : 'translate-x-1'
                  } top-1 absolute`} />
                </button>
              </div>

              {/* Theme Selector */}
              <div className="space-y-2 pt-2 border-t border-slate-900">
                <label className="text-xs font-bold text-slate-300">Syntax Theme</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'material', label: 'Material' },
                    { id: 'one-dark', label: 'One Dark' },
                    { id: 'monokai', label: 'Monokai' },
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setDemoTheme(t.id as any)}
                      className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border text-center ${
                        demoTheme === t.id 
                          ? 'bg-slate-800 border-slate-700 text-white' 
                          : 'bg-slate-900/40 border-slate-900 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Interactive Code Preview */}
            <div className="lg:col-span-7 bg-[#090a0f] border border-slate-800/90 rounded-2xl p-5 space-y-3 font-mono shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-900">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] text-slate-500 ml-2">QuickSort_Algorithm.py</span>
                </div>
                <span className="text-[10px] text-slate-600 bg-slate-900 px-2 py-0.5 rounded">
                  {demoFont} • {demoFontSize}px
                </span>
              </div>

              {/* Code lines */}
              <div 
                className="overflow-x-auto leading-relaxed select-text transition-all"
                style={{ fontSize: `${demoFontSize}px`, fontFamily: demoFont }}
              >
                <div className="flex space-x-4">
                  {demoLineNumbers && (
                    <div className="text-slate-600 select-none text-right pr-2 border-r border-slate-900">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                    </div>
                  )}
                  <div className="text-slate-300">
                    <span className="text-purple-400">def</span> <span className="text-blue-400">quicksort</span>(arr):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> len(arr) &lt;= <span className="text-amber-400">1</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> arr<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;pivot = arr[len(arr) // <span className="text-amber-400">2</span>]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;left = [x <span className="text-purple-400">for</span> x <span className="text-purple-400">in</span> arr <span className="text-purple-400">if</span> x &lt; pivot]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;middle = [x <span className="text-purple-400">for</span> x <span className="text-purple-400">in</span> arr <span className="text-purple-400">if</span> x == pivot]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> quicksort(left) + middle
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                <span>UTF-8 • Python 3</span>
                <span className="text-emerald-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Auto-save enabled</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          7. AUDIENCE LINE (COMPACT TRANSITION)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm sm:text-base text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
          Built for students learning, beginners exploring, and developers building on the go.
        </p>
      </section>

      {/* ========================================================
          8. FINAL CALL-TO-ACTION (CTA)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-cta">
        <div className="bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-[#131520] rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-6 border border-indigo-500/20 shadow-2xl">
          
          <div className="w-16 h-16 rounded-2xl shadow-xl shadow-blue-950/40 mx-auto overflow-hidden bg-[#131520] border border-blue-500/20 flex items-center justify-center">
            <img 
              src="/runcoder-official-logo.png" 
              alt="RunCoder App Icon" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Your next project doesn't need a laptop.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              Start coding with RunCoder. Available now on Google Play for Android devices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs sm:text-sm py-3.5 px-8 rounded-full transition-all active:scale-95 flex items-center justify-center space-x-2 cursor-pointer shadow-xl shadow-slate-950/30"
              id="final-get-runcoder-btn"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Get RunCoder on Google Play</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-700" />
            </a>
          </div>

          <div className="pt-3 text-[11px] font-mono text-slate-500">
            Android 8.0+ • Google Play Verified • Free with Pro options
          </div>

        </div>
      </section>

    </div>
  );
}
