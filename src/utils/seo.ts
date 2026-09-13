/**
 * Utility for dynamically updating head metadata (SEO, Open Graph, Twitter, JSON-LD)
 */

interface SEOOptions {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  articleMeta?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
    tags?: string[];
  };
  jsonLd?: Record<string, unknown>;
}

const DEFAULT_TITLE = 'RunCoder — A Complete Coding Workspace for Android';
const DEFAULT_DESCRIPTION = 'Your coding workspace. Right in your pocket. RunCoder brings coding, projects, templates, files, and instant execution together in one powerful Android app.';
const DEFAULT_CANONICAL = 'https://runcoder.pages.dev/';
const DEFAULT_IMAGE = 'https://runcoder.pages.dev/runcoder-official-logo.png';

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function setJsonLd(id: string, data: Record<string, unknown> | null) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!data) {
    if (script) script.remove();
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data, null, 2);
}

export function updatePageSEO(options: SEOOptions) {
  document.title = options.title;

  // Standard Meta
  setMetaTag('name', 'description', options.description);
  setCanonical(options.canonical);

  // Open Graph
  setMetaTag('property', 'og:title', options.title);
  setMetaTag('property', 'og:description', options.description);
  setMetaTag('property', 'og:url', options.canonical);
  setMetaTag('property', 'og:type', options.ogType || 'website');
  setMetaTag('property', 'og:image', options.ogImage || DEFAULT_IMAGE);

  // Article Specific Open Graph tags
  if (options.articleMeta) {
    setMetaTag('property', 'article:published_time', options.articleMeta.publishedTime);
    if (options.articleMeta.modifiedTime) {
      setMetaTag('property', 'article:modified_time', options.articleMeta.modifiedTime);
    }
    setMetaTag('property', 'article:author', options.articleMeta.author);
    setMetaTag('property', 'article:section', options.articleMeta.section);
    if (options.articleMeta.tags && options.articleMeta.tags.length > 0) {
      options.articleMeta.tags.forEach((tag) => setMetaTag('property', 'article:tag', tag));
    }
  }

  // Twitter
  setMetaTag('property', 'twitter:title', options.title);
  setMetaTag('property', 'twitter:description', options.description);
  setMetaTag('property', 'twitter:url', options.canonical);
  setMetaTag('property', 'twitter:image', options.ogImage || DEFAULT_IMAGE);

  // JSON-LD
  if (options.jsonLd) {
    setJsonLd('dynamic-article-ld-json', options.jsonLd);
  } else {
    setJsonLd('dynamic-article-ld-json', null);
  }
}

export function resetToDefaultSEO() {
  updatePageSEO({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: DEFAULT_CANONICAL,
    ogType: 'website',
    ogImage: DEFAULT_IMAGE,
  });
}
