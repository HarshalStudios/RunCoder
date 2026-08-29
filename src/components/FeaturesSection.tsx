import { 
  Code2, 
  Cpu, 
  FolderOpen, 
  Settings, 
  Terminal, 
  Sparkles, 
  CheckCircle2,
  Languages,
  Layers,
  FileCode,
  Globe,
  Sliders,
  Type,
  Eye,
  Save,
  WrapText,
  ListOrdered
} from 'lucide-react';

export default function FeaturesSection() {
  const coreFeatures = [
    {
      icon: Code2,
      badge: 'Interface',
      title: 'Mobile Workspace',
      desc: 'A clean, dark-themed coding environment built specifically for touchscreens with comfortable spacing and dedicated hardware key access.',
      bullets: [
        'Dedicated Symbol Strip with quick brackets, quotes, and indentation keys',
        'High-contrast syntax highlighting with line numbering gutters',
        'Intuitive navigation between workspace, editor, and open files'
      ]
    },
    {
      icon: Cpu,
      badge: 'Execution',
      title: 'Cloud Code Execution',
      desc: 'Send source code to the configured execution backend and receive compiled outputs and return codes directly inside your terminal drawer.',
      bullets: [
        'Remote compilation service for C, C++, Java, and Python',
        'Integrated collapsible terminal for stdout, stderr, and exit codes',
        'Instant client-side web preview engine for HTML, CSS, and JavaScript'
      ]
    },
    {
      icon: FolderOpen,
      badge: 'Organization',
      title: 'Searchable File Explorer',
      desc: 'Manage your local coding files with instant search filters, multi-file buffer tabs, and straightforward project organization tools.',
      bullets: [
        'Multi-file tab manager to quickly switch or dismiss open files',
        'Real-time search filtering by file name and language extension',
        'Direct file operations including creation, renaming, and deletion'
      ]
    },
    {
      icon: Sparkles,
      badge: 'Learning',
      title: 'Curated Code Templates',
      desc: 'Explore starter programs across all 7 supported languages to study syntax, practice common algorithms, and launch new projects faster.',
      bullets: [
        'Categorized by difficulty: Beginner, Intermediate, Advanced, and Pro',
        'One-tap actions to open boilerplate directly in the editor or copy code',
        'Sample input and expected output accordions for quick inspection'
      ]
    }
  ];

  const languages = [
    { 
      name: 'C', 
      tag: 'Systems & fundamentals', 
      ext: '.c',
      color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400',
      dot: 'bg-blue-400'
    },
    { 
      name: 'C++', 
      tag: 'STL & competitive programming', 
      ext: '.cpp',
      color: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 text-indigo-400',
      dot: 'bg-indigo-400'
    },
    { 
      name: 'Java', 
      tag: 'Object-oriented programs', 
      ext: '.java',
      color: 'from-amber-500/20 to-orange-600/10 border-amber-500/30 text-amber-400',
      dot: 'bg-amber-400'
    },
    { 
      name: 'Python', 
      tag: 'Scripts & algorithms', 
      ext: '.py',
      color: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30 text-emerald-400',
      dot: 'bg-emerald-400'
    },
    { 
      name: 'HTML', 
      tag: 'Web documents & DOM', 
      ext: '.html',
      color: 'from-rose-500/20 to-red-600/10 border-rose-500/30 text-rose-400',
      dot: 'bg-rose-400'
    },
    { 
      name: 'CSS', 
      tag: 'Styling, colors & layouts', 
      ext: '.css',
      color: 'from-cyan-500/20 to-sky-600/10 border-cyan-500/30 text-cyan-400',
      dot: 'bg-cyan-400'
    },
    { 
      name: 'JavaScript', 
      tag: 'Logic & interactivity', 
      ext: '.js',
      color: 'from-yellow-500/20 to-amber-600/10 border-yellow-500/30 text-yellow-400',
      dot: 'bg-yellow-400'
    }
  ];

  const editorPreferences = [
    {
      icon: Type,
      name: 'Coding Fonts',
      desc: 'Select preferred monospaced typography designed for mobile code legibility.'
    },
    {
      icon: Sliders,
      name: 'Font Size Adjustment',
      desc: 'Cycle editor font scaling (such as 12sp, 14sp, 16sp) to fit your screen size comfortably.'
    },
    {
      icon: Eye,
      name: 'Syntax Highlighting',
      desc: 'High-contrast token coloring for keywords, functions, strings, and types across all 7 languages.'
    },
    {
      icon: Save,
      name: 'Auto-Save',
      desc: 'Retains your open files and active editor buffers when closing or switching apps.'
    },
    {
      icon: WrapText,
      name: 'Word Wrap',
      desc: 'Toggle soft line wrapping to eliminate horizontal scrolling on narrow phone displays.'
    },
    {
      icon: ListOrdered,
      name: 'Line Numbers',
      desc: 'Visible gutter index markers to pinpoint errors, references, and line locations effortlessly.'
    }
  ];

  return (
    <div className="space-y-20 pb-16" id="features-page-root">
      
      {/* 1. Header Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 px-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-950/40 text-blue-400 border border-blue-900/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>TECHNICAL DEEP DIVE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Everything you need to code on Android.
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
          RunCoder delivers a focused, lightweight mobile development suite engineered for students, engineers, and developers writing, testing, and debugging programs on the go.
        </p>
      </section>

      {/* 2. Four Main Architecture Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" id="architecture-cards">
        {coreFeatures.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <div 
              key={i} 
              className="bg-[#131520] border border-slate-800/80 hover:border-slate-700/80 rounded-3xl p-6 sm:p-8 space-y-5 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 bg-indigo-950/50 rounded-xl border border-indigo-900/30 flex items-center justify-center">
                    <Icon className="w-5.5 h-5.5 text-indigo-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                    {feat.badge}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight font-display">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">{feat.desc}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-800/60 space-y-2.5">
                {feat.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Supported Languages Grid */}
      <section className="bg-[#090a0f] border-t border-b border-slate-800/80 py-16" id="supported-languages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-1.5 bg-indigo-950/40 text-indigo-400 border border-indigo-900/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight font-mono">
              <Languages className="w-3.5 h-3.5" />
              <span>MULTI-LANGUAGE SUPPORT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              One workspace. Multiple languages.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Write, edit, and test source code across standard systems, object-oriented, scripting, and web languages without configuring local runtimes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {languages.map((lang, idx) => (
              <div 
                key={idx} 
                className={`bg-[#131520] border rounded-2xl p-4.5 space-y-3 transition-all hover:bg-[#161826] ${lang.name === 'JavaScript' ? 'sm:col-span-2 lg:col-span-1' : ''} border-slate-800/80`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${lang.dot}`}></span>
                    <span className="font-extrabold text-base text-white font-mono">{lang.name}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {lang.ext}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-400 leading-relaxed">
                  {lang.tag}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Editor & Workspace Parameters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="editor-and-workspace">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-1.5 bg-blue-950/40 text-blue-400 border border-blue-900/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight font-mono">
            <Sliders className="w-3.5 h-3.5" />
            <span>EDITOR & WORKSPACE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Configure the way you code.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Customize the editor environment to match your workflow and understand how code execution operates within the app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Execution Explanation Card */}
          <div className="lg:col-span-5 bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-950/50 rounded-xl border border-blue-900/30 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-base font-extrabold text-white font-display">How Code Execution Works</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              When you run a program, RunCoder sends the code to its configured execution service and returns the program output directly to the mobile terminal console.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3 bg-[#0c0e18] border border-slate-800 rounded-xl space-y-1">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-200">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Compiled Languages (C, C++, Java, Python)</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-5.5">
                  Processed via the remote execution service, returning console stdout, stderr, and completion status.
                </p>
              </div>

              <div className="p-3 bg-[#0c0e18] border border-slate-800 rounded-xl space-y-1">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-200">
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>Web Projects (HTML, CSS, JavaScript)</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-5.5">
                  Rendered instantly client-side inside the app's integrated webview preview engine.
                </p>
              </div>
            </div>
          </div>

          {/* Configurable Editor Preferences Grid */}
          <div className="lg:col-span-7 bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-950/50 rounded-xl border border-indigo-900/30 flex items-center justify-center">
                <Settings className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-base font-extrabold text-white font-display">Supported Editor Preferences</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {editorPreferences.map((pref, pIdx) => {
                const PrefIcon = pref.icon;
                return (
                  <div key={pIdx} className="p-3.5 bg-[#0c0e18] border border-slate-800/90 rounded-xl space-y-1.5">
                    <div className="flex items-center space-x-2 text-slate-200 font-bold text-xs">
                      <PrefIcon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{pref.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {pref.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
