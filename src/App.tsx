import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import FeaturesSection from './components/FeaturesSection';
import ProSection from './components/ProSection';
import DownloadSection from './components/DownloadSection';
import SupportSection from './components/SupportSection';
import ContactSection from './components/ContactSection';
import { PrivacySection, TermsSection } from './components/LegalSections';
import VerifierSection from './components/VerifierSection';
import SecuritySection from './components/SecuritySection';
import RefundSection from './components/RefundSection';
import DeletionSection from './components/DeletionSection';
import BlogIndex from './components/blog/BlogIndex';
import BlogArticle from './components/blog/BlogArticle';
import { Page } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [currentArticleSlug, setCurrentArticleSlug] = useState<string | null>(null);

  // Helper to parse current path and hash
  const parseLocation = (): { page: Page; slug: string | null } => {
    const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
    
    if (pathname === '/blog') {
      return { page: 'blog', slug: null };
    }
    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '').replace(/\/+$/, '');
      return { page: 'blog', slug: slug || null };
    }

    // Check hash for SPA product sections
    const hash = window.location.hash.replace('#', '') as Page;
    const validPages: Page[] = [
      'home', 'features', 'pro', 'download', 'support', 
      'contact', 'privacy', 'terms', 'verifier', 'security', 
      'refund', 'deletion', 'blog'
    ];
    if (validPages.includes(hash) && hash !== 'home') {
      return { page: hash, slug: null };
    }

    return { page: 'home', slug: null };
  };

  // Handle page transitions
  const handlePageChange = (page: Page) => {
    setActivePage(page);
    setCurrentArticleSlug(null);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if (page === 'blog') {
      history.pushState(null, '', '/blog/');
    } else if (page === 'home') {
      history.pushState(null, '', '/');
    } else {
      if (window.location.pathname.startsWith('/blog')) {
        history.pushState(null, '', `/#${page}`);
      } else {
        window.location.hash = page;
      }
    }
  };

  const handleNavigateToArticle = (slug: string) => {
    setActivePage('blog');
    setCurrentArticleSlug(slug);
    history.pushState(null, '', `/blog/${slug}/`);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleNavigateToBlog = () => {
    setActivePage('blog');
    setCurrentArticleSlug(null);
    history.pushState(null, '', '/blog/');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Synchronize location (popstate & hashchange) on mount / browser navigation
  useEffect(() => {
    const syncFromLocation = () => {
      const { page, slug } = parseLocation();
      setActivePage(page);
      setCurrentArticleSlug(slug);
      if (page === 'home' && !window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    syncFromLocation();

    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);
    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  // Ensure document.title is always prefixed with RunCoder for Google Search and tab titles
  useEffect(() => {
    if (activePage === 'blog') {
      if (!currentArticleSlug) {
        document.title = 'RunCoder Blog — Guides & Tutorials for Coding on Android';
      }
      return;
    }

    const pageTitles: Record<Page, string> = {
      home: 'RunCoder — A Complete Coding Workspace for Android',
      features: 'Features — RunCoder',
      pro: 'RunCoder Pro — Premium Mobile Workspace',
      download: 'Download RunCoder for Android — Google Play',
      support: 'Support & Help Center — RunCoder',
      contact: 'Contact Us — RunCoder',
      privacy: 'Privacy Policy — RunCoder',
      terms: 'Terms of Service — RunCoder',
      verifier: 'Publisher Verification — RunCoder',
      security: 'Security & Vulnerability Disclosure — RunCoder',
      refund: 'Refund Policy — RunCoder',
      deletion: 'Account & Data Deletion — RunCoder',
      blog: 'RunCoder Blog — Guides & Tutorials for Coding on Android',
    };
    document.title = pageTitles[activePage] || 'RunCoder — A Complete Coding Workspace for Android';
  }, [activePage, currentArticleSlug]);

  const renderActiveSection = () => {
    if (activePage === 'blog') {
      if (currentArticleSlug) {
        return (
          <BlogArticle 
            slug={currentArticleSlug}
            onNavigateBack={handleNavigateToBlog}
            onNavigateToArticle={handleNavigateToArticle}
            onNavigateHome={() => handlePageChange('home')}
          />
        );
      }
      return (
        <BlogIndex 
          onNavigateToArticle={handleNavigateToArticle}
          onNavigateHome={() => handlePageChange('home')}
        />
      );
    }

    switch (activePage) {
      case 'home':
        return <HomeSection onPageChange={handlePageChange} />;
      case 'features':
        return <FeaturesSection />;
      case 'pro':
        return <ProSection />;
      case 'download':
        return <DownloadSection onPageChange={handlePageChange} />;
      case 'support':
        return <SupportSection />;
      case 'contact':
        return <ContactSection onPageChange={handlePageChange} />;
      case 'privacy':
        return <PrivacySection />;
      case 'terms':
        return <TermsSection />;
      case 'verifier':
        return <VerifierSection />;
      case 'security':
        return <SecuritySection />;
      case 'refund':
        return <RefundSection />;
      case 'deletion':
        return <DeletionSection />;
      default:
        return <HomeSection onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0e15] text-[#f8fafc] flex flex-col justify-between font-sans">
      
      {/* Dynamic Header Toolbar Navigation */}
      <Navbar activePage={activePage} onPageChange={handlePageChange} />

      {/* Main Container Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Sitemap */}
      <Footer onPageChange={handlePageChange} />

    </div>
  );
}
