import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  Copy, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  Code2, 
  HelpCircle, 
  ChevronDown, 
  BookOpen,
  Info,
  AlertTriangle,
  Lightbulb,
  FileText
} from 'lucide-react';
import { BlogPost, ContentBlock, FAQItem, TableOfContentsItem } from '../../types/blog';
import { getPostBySlug, getRelatedPosts } from '../../data/blogPosts';
import { updatePageSEO, resetToDefaultSEO } from '../../utils/seo';
import { PLAY_STORE_URL } from '../../types';

interface BlogArticleProps {
  slug: string;
  onNavigateBack: () => void;
  onNavigateToArticle: (slug: string) => void;
  onNavigateHome: () => void;
}

export default function BlogArticle({ 
  slug, 
  onNavigateBack, 
  onNavigateToArticle, 
  onNavigateHome 
}: BlogArticleProps) {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);
  const [activeTocId, setActiveTocId] = useState<string>('');

  const post = getPostBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(post.slug, 3) : [];

  // Synchronize dynamic SEO metadata on mount / slug change
  useEffect(() => {
    if (!post) return;

    const canonicalUrl = `https://runcoder.pages.dev/blog/${post.slug}/`;
    const ogImageUrl = post.coverImage || 'https://runcoder.pages.dev/runcoder-official-logo.png';

    // Build JSON-LD Schemas: Article + BreadcrumbList
    const schemaGraph: Array<Record<string, unknown>> = [
      {
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        'isPartOf': {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        'headline': post.title,
        'description': post.metaDescription,
        'image': [ogImageUrl],
        'datePublished': post.publishedAt,
        'dateModified': post.updatedAt || post.publishedAt,
        'author': {
          '@type': 'Person',
          'name': post.author.name,
          'jobTitle': post.author.role
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'RunCoder',
          'url': 'https://runcoder.pages.dev/',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://runcoder.pages.dev/runcoder-official-logo.png'
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        'articleSection': post.category,
        'keywords': post.tags.join(', ')
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://runcoder.pages.dev/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://runcoder.pages.dev/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': post.title,
            'item': canonicalUrl
          }
        ]
      }
    ];

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': schemaGraph
    };

    updatePageSEO({
      title: `${post.metaTitle || post.title} — RunCoder`,
      description: post.metaDescription,
      canonical: canonicalUrl,
      ogType: 'article',
      ogImage: ogImageUrl,
      articleMeta: {
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt,
        author: post.author.name,
        section: post.category,
        tags: post.tags,
      },
      jsonLd: structuredData,
    });

    // Reset SEO back to default when unmounting
    return () => {
      resetToDefaultSEO();
    };
  }, [post]);

  // Track active TOC header during scroll
  useEffect(() => {
    if (!post || !post.tableOfContents || post.tableOfContents.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTocId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -60% 0%' }
    );

    post.tableOfContents.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post]);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleShareLink = () => {
    const shareUrl = post ? `https://runcoder.pages.dev/blog/${post.slug}/` : window.location.href;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndices((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTocId(id);
    }
  };

  if (!post) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
          <BookOpen className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-bold text-white font-display">Article Not Found</h1>
        <p className="text-sm text-slate-400">
          The tutorial you are looking for might have been moved, updated, or not published yet.
        </p>
        <button
          onClick={onNavigateBack}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>
      </div>
    );
  }

  return (
    <article className="space-y-12 animate-fadeIn pb-16 max-w-5xl mx-auto" id="blog-article-container">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center space-x-2 text-xs text-slate-400 font-mono">
        <button 
          onClick={onNavigateHome}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Home
        </button>
        <ChevronRight className="w-3 h-3 text-slate-600" />
        <button 
          onClick={onNavigateBack}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Blog
        </button>
        <ChevronRight className="w-3 h-3 text-slate-600" />
        <span className="text-slate-400">{post.category}</span>
        <ChevronRight className="w-3 h-3 text-slate-600" />
        <span className="text-blue-400 font-medium truncate max-w-xs">{post.title}</span>
      </nav>

      {/* Back Button */}
      <div>
        <button
          onClick={onNavigateBack}
          className="inline-flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer bg-[#131520] border border-slate-800 hover:border-slate-700 px-3.5 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Articles</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="space-y-6 border-b border-slate-800/80 pb-8">
        
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold">
            {post.category}
          </span>
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{post.readTimeMinutes} min read</span>
          </div>
          {post.updatedAt && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Updated {new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
          )}
        </div>

        {/* H1 Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Excerpt / Lead Paragraph */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
          {post.excerpt}
        </p>

        {/* Author & Meta bar */}
        <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xs uppercase shadow-md">
              {post.author.name.slice(0, 2)}
            </div>
            <div>
              <div className="text-sm font-semibold text-white font-sans">{post.author.name}</div>
              <div className="text-xs text-slate-400 font-mono">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs text-slate-400">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <time dateTime={post.publishedAt} className="font-mono">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>

            <button
              onClick={handleShareLink}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#131520] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Copy article link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied Link' : 'Share'}</span>
            </button>
          </div>
        </div>

      </header>

      {/* Main Grid: Content + Table of Contents Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-8 text-slate-200">
          
          {/* Render structured content blocks */}
          {post.content.map((block, idx) => {
            switch (block.type) {
              case 'heading': {
                if (block.level === 2) {
                  return (
                    <h2 
                      key={idx} 
                      id={block.id}
                      className="text-xl sm:text-2xl font-bold text-white font-display pt-6 pb-2 border-b border-slate-800/80 scroll-mt-24 group flex items-center justify-between"
                    >
                      <span>{block.text}</span>
                      <a 
                        href={`/blog/${post.slug}/#${block.id}`} 
                        className="text-slate-600 group-hover:text-blue-400 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label={`Link to ${block.text}`}
                      >
                        #
                      </a>
                    </h2>
                  );
                }
                return (
                  <h3 
                    key={idx} 
                    id={block.id}
                    className="text-lg sm:text-xl font-bold text-slate-100 font-display pt-4 scroll-mt-24 group flex items-center justify-between"
                  >
                    <span>{block.text}</span>
                    <a 
                      href={`/blog/${post.slug}/#${block.id}`} 
                      className="text-slate-600 group-hover:text-blue-400 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Link to ${block.text}`}
                    >
                      #
                    </a>
                  </h3>
                );
              }

              case 'paragraph': {
                return (
                  <p key={idx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {block.text}
                  </p>
                );
              }

              case 'code': {
                const isCopied = copiedCodeIndex === idx;
                return (
                  <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 bg-[#090a0f] shadow-lg">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#131520] border-b border-slate-800 text-xs font-mono text-slate-400">
                      <div className="flex items-center space-x-2">
                        <Code2 className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-slate-300 font-semibold">{block.filename || block.language}</span>
                      </div>
                      <button
                        onClick={() => handleCopyCode(block.code, idx)}
                        className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-[11px]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed bg-[#090a0f]">
                      <code>{block.code}</code>
                    </pre>
                  </div>
                );
              }

              case 'list': {
                if (block.ordered) {
                  return (
                    <ol key={idx} className="space-y-2 list-decimal list-inside text-sm sm:text-base text-slate-300 leading-relaxed pl-2">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="pl-1">{item}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <ul key={idx} className="space-y-2 list-disc list-inside text-sm sm:text-base text-slate-300 leading-relaxed pl-2">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="pl-1">{item}</li>
                    ))}
                  </ul>
                );
              }

              case 'callout': {
                const variantConfig = {
                  info: { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', icon: Info },
                  tip: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', icon: Lightbulb },
                  warning: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', icon: AlertTriangle },
                  note: { border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', icon: FileText },
                }[block.variant || 'info'];

                const IconComponent = variantConfig.icon;

                return (
                  <div key={idx} className={`p-4 sm:p-5 rounded-xl border ${variantConfig.border} ${variantConfig.bg} space-y-1.5`}>
                    <div className={`flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider ${variantConfig.text}`}>
                      <IconComponent className="w-4 h-4" />
                      <span>{block.title || block.variant}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                      {block.text}
                    </p>
                  </div>
                );
              }

              case 'quote': {
                return (
                  <blockquote key={idx} className="p-4 sm:p-5 border-l-4 border-blue-500 bg-[#131520] rounded-r-xl italic text-slate-300 text-sm sm:text-base leading-relaxed">
                    <p>"{block.quote}"</p>
                    {block.author && (
                      <cite className="block text-xs font-mono text-slate-400 mt-2 not-italic">— {block.author}</cite>
                    )}
                  </blockquote>
                );
              }

              case 'image': {
                return (
                  <figure key={idx} className="my-6 space-y-2">
                    <img 
                      src={block.src} 
                      alt={block.alt} 
                      className="w-full rounded-xl border border-slate-800 shadow-lg object-cover"
                      loading="lazy"
                    />
                    {block.caption && (
                      <figcaption className="text-center text-xs text-slate-400 font-mono">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              case 'table': {
                return (
                  <div key={idx} className="my-6 overflow-hidden rounded-xl border border-slate-800 bg-[#131520] shadow-md">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                        {block.caption && (
                          <caption className="p-3 text-xs font-mono text-slate-400 text-left bg-[#0e1017] border-b border-slate-800">
                            {block.caption}
                          </caption>
                        )}
                        <thead className="bg-[#0e1017] text-slate-200 uppercase font-mono text-[11px] border-b border-slate-800">
                          <tr>
                            {block.headers.map((header, hIdx) => (
                              <th key={hIdx} className="px-4 py-3 font-semibold">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 font-sans">
                          {block.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-[#131520]' : 'bg-[#10121b]'}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`px-4 py-3 leading-relaxed ${cIdx === 0 ? 'font-medium text-white' : 'text-slate-300'}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              }

              case 'rich-text': {
                return (
                  <div 
                    key={idx} 
                    className="text-sm sm:text-base text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: block.html }}
                    onClick={(e) => {
                      const target = (e.target as HTMLElement).closest('a');
                      if (target && target.getAttribute('href')?.startsWith('/blog/')) {
                        const href = target.getAttribute('href')!;
                        const match = href.match(/^\/blog\/([^/#?]+)/);
                        if (match && match[1]) {
                          e.preventDefault();
                          onNavigateToArticle(match[1]);
                        }
                      }
                    }}
                  />
                );
              }

              default:
                return null;
            }
          })}

          {/* FAQs Section */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="pt-8 border-t border-slate-800/80 space-y-4" id="faq-section">
              <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono font-bold uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Common Questions & Practical Answers
              </h2>

              <div className="space-y-3 pt-2">
                {post.faqs.map((faq, faqIdx) => {
                  const isOpen = openFaqIndices.includes(faqIdx);
                  return (
                    <div 
                      key={faqIdx}
                      className="border border-slate-800 bg-[#131520] rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(faqIdx)}
                        className="w-full flex items-center justify-between p-4 text-left font-semibold text-white text-xs sm:text-sm hover:text-blue-400 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Contextual RunCoder Download Card */}
          <div className="bg-gradient-to-br from-[#131520] to-[#1a1e30] border border-blue-500/30 rounded-2xl p-6 sm:p-8 space-y-4 my-8 shadow-xl shadow-blue-950/20">
            <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono font-bold uppercase">
              <Code2 className="w-4 h-4" />
              <span>Try Mobile Coding Today</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Ready to practice programming on your Android device?
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              RunCoder provides a mobile-friendly workspace with multi-file project support, templates, and C/C++/Java/Python/web coding tools. Code execution requires an active internet connection.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download RunCoder (Free on Google Play)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Author Box */}
          <div className="bg-[#131520] border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-base uppercase shrink-0 shadow-lg">
              {post.author.name.slice(0, 2)}
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-white font-sans">{post.author.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {post.author.role}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {post.author.bio || 'Developer, engineering educator, and mobile workspace specialist focusing on bringing full-scale coding workflows to handheld devices.'}
              </p>
            </div>
          </div>

        </div>

        {/* Sticky Sidebar: Table of Contents & Quick Action */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          
          {/* Table of Contents Box */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <div className="bg-[#131520] border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-2 pb-2 border-b border-slate-800">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
                {post.tableOfContents.map((item) => {
                  const isActive = activeTocId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`/blog/${post.slug}/#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={`w-full text-left text-xs transition-colors cursor-pointer block py-1 truncate ${
                        item.level === 3 ? 'pl-3 text-[11px]' : ''
                      } ${
                        isActive
                          ? 'text-blue-400 font-semibold pl-2 border-l-2 border-blue-500'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title={item.title}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          )}

          {/* Quick CTA Box */}
          <div className="bg-[#131520] border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-2">
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Get the App</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Practice C++, test algorithms, and work through programming exercises directly from your Android device.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all cursor-pointer shadow-md shadow-blue-600/20"
            >
              <span>Install from Google Play</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

        </aside>

      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="pt-12 border-t border-slate-800/80 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">Continue Learning</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">Related Guides & Tutorials</h2>
            </div>
            <button
              onClick={onNavigateBack}
              className="hidden sm:inline-flex items-center space-x-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>View all guides</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <div
                key={related.slug}
                onClick={() => onNavigateToArticle(related.slug)}
                className="group bg-[#131520] border border-slate-800 hover:border-blue-500/40 rounded-xl p-5 flex flex-col justify-between transition-all cursor-pointer hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {related.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors font-display mt-2 line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {related.excerpt}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{related.readTimeMinutes} min read</span>
                  <span className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center space-x-1">
                    <span>Read</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </article>
  );
}
