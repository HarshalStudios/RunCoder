import { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ChevronRight, 
  Code2, 
  Sparkles,
  Smartphone,
  ExternalLink,
  Layers
} from 'lucide-react';
import { BlogPost, BlogCategory } from '../../types/blog';
import { getAllPosts, BLOG_CATEGORIES } from '../../data/blogPosts';
import { PLAY_STORE_URL } from '../../types';

interface BlogIndexProps {
  onNavigateToArticle: (slug: string) => void;
  onNavigateHome: () => void;
}

export default function BlogIndex({ onNavigateToArticle, onNavigateHome }: BlogIndexProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const allPosts = useMemo(() => getAllPosts(), []);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12 animate-fadeIn pb-12">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
        <button 
          onClick={onNavigateHome}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Home
        </button>
        <ChevronRight className="w-3 h-3 text-slate-600" />
        <span className="text-blue-400 font-semibold">Blog</span>
      </nav>

      {/* Hero Header */}
      <header className="relative border-b border-slate-800/60 pb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Guides & Insights</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-4">
          RunCoder <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Blog</span>
        </h1>
        
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Comprehensive guides, mobile coding tutorials, and practical comparisons for programming on Android. 
          Learn how to compile C/C++, execute Python scripts, practice DSA, and write production-grade code directly on your phone.
        </p>

        {/* Search and Category Filter Bar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tutorials, languages, tools..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#131520] border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all font-sans"
              aria-label="Search articles"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 px-1.5 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Count summary */}
          <div className="text-xs text-slate-400 font-mono self-center sm:self-auto">
            Showing <span className="text-blue-400 font-semibold">{filteredPosts.length}</span> article{filteredPosts.length === 1 ? '' : 's'}
          </div>

        </div>

        {/* Category Pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                : 'bg-[#131520] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Topics
          </button>
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'bg-[#131520] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </header>

      {/* Article Grid or Empty State */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => onNavigateToArticle(post.slug)}
              className="group bg-[#131520] border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20 cursor-pointer relative"
              id={`blog-card-${post.slug}`}
            >
              <div>
                {/* Meta details header */}
                <div className="flex items-center justify-between gap-2 text-xs mb-3.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono font-medium text-[11px]">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1.5 text-slate-400 text-[11px] font-mono">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{post.readTimeMinutes} min read</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors font-display line-clamp-2 mb-2 leading-snug">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div>
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer bar */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <time dateTime={post.publishedAt} className="text-[11px] font-mono">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>

                  <span className="inline-flex items-center space-x-1 text-blue-400 group-hover:text-blue-300 font-semibold text-xs">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State / Coming Soon */
        <div className="bg-[#131520] border border-slate-800 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto shadow-inner">
            <Layers className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white font-display">
              {searchQuery ? 'No matching tutorials found' : 'Publishing In Progress'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              {searchQuery 
                ? `No articles matched "${searchQuery}". Try searching for broader terms like "C++", "Python", "practicals", or "tools".`
                : 'We are preparing practical, deep-dive guides for coding, compiling, and running code on Android without needing a laptop. Stay tuned!'}
            </p>
          </div>

          {searchQuery ? (
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-600/20"
            >
              Reset Filters
            </button>
          ) : (
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download RunCoder Android App</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          )}
        </div>
      )}

      {/* Mobile Coding Workspace Highlights Banner */}
      <section className="bg-gradient-to-br from-[#131520] to-[#181b2a] border border-blue-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs text-blue-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice Anywhere</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white font-display">
            Want to write and run code right now on your phone?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            RunCoder provides built-in starter templates, custom project directories, code execution, and terminal output for C, C++, Java, Python, and Web development.
          </p>
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
        >
          <Code2 className="w-4 h-4" />
          <span>Get RunCoder on Google Play</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </section>

    </div>
  );
}
