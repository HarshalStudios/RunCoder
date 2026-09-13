import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'serve-google-verification',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/googlea2a296bdcf3ad142.html') {
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.end('google-site-verification: googlea2a296bdcf3ad142.html');
              return;
            }
            next();
          });
        },
      },
      react(),
      tailwindcss(),
      {
        name: 'prerender-blog-routes',
        closeBundle() {
          const distIndex = path.resolve(__dirname, 'dist/index.html');
          if (fs.existsSync(distIndex)) {
            const html = fs.readFileSync(distIndex, 'utf-8');
            const blogDir = path.resolve(__dirname, 'dist/blog');
            if (!fs.existsSync(blogDir)) {
              fs.mkdirSync(blogDir, { recursive: true });
            }

            // Generate dist/blog/index.html with blog-specific meta tags
            let blogIndexHtml = html
              .replace(/<title>.*?<\/title>/, '<title>RunCoder Blog — Guides & Tutorials for Coding on Android</title>')
              .replace(/<link rel="canonical" href="https:\/\/runcoder\.pages\.dev\/".*?\/>/, '<link rel="canonical" href="https://runcoder.pages.dev/blog/" />')
              .replace(/<meta property="og:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, '<meta property="og:url" content="https://runcoder.pages.dev/blog/" />')
              .replace(/<meta property="twitter:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, '<meta property="twitter:url" content="https://runcoder.pages.dev/blog/" />')
              .replace(
                /<meta name="description" content=".*?" \/>/,
                '<meta name="description" content="Official RunCoder Blog. Comprehensive guides, mobile coding tutorials, and practical comparisons for programming and compiling on Android." />'
              )
              .replace(
                /<meta property="og:title" content=".*?" \/>/,
                '<meta property="og:title" content="RunCoder Blog — Guides & Tutorials for Coding on Android" />'
              )
              .replace(
                /<meta property="twitter:title" content=".*?" \/>/,
                '<meta property="twitter:title" content="RunCoder Blog — Guides & Tutorials for Coding on Android" />'
              );

            fs.writeFileSync(path.resolve(blogDir, 'index.html'), blogIndexHtml);

            // Generate dist/blog/how-to-code-on-android/index.html with article-specific meta tags
            const articleDir = path.resolve(blogDir, 'how-to-code-on-android');
            if (!fs.existsSync(articleDir)) {
              fs.mkdirSync(articleDir, { recursive: true });
            }

            const articleTitle = 'How to Code on Android: Complete Mobile Programming Guide (2026) — RunCoder';
            const articleDesc = 'Learn how to code, compile, and run programs on Android. A practical guide covering mobile coding tools, Termux vs IDEs, setup tips, and writing your first code on a phone.';
            const articleCanonical = 'https://runcoder.pages.dev/blog/how-to-code-on-android/';

            const articleSchema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "${articleCanonical}#article",
          "headline": "How to Code on Android: A Practical Guide to Programming on Your Phone",
          "description": "${articleDesc}",
          "image": ["https://runcoder.pages.dev/runcoder-official-logo.png"],
          "datePublished": "2026-09-12",
          "author": {
            "@type": "Person",
            "name": "RunCoder Engineering Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "RunCoder",
            "url": "https://runcoder.pages.dev/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://runcoder.pages.dev/runcoder-official-logo.png"
            }
          },
          "mainEntityOfPage": "${articleCanonical}"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "${articleCanonical}#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://runcoder.pages.dev/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://runcoder.pages.dev/blog/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "How to Code on Android: A Practical Guide to Programming on Your Phone",
              "item": "${articleCanonical}"
            }
          ]
        }
      ]
    }
    </script>
  </head>`;

            let articleHtml = html
              .replace(/<title>.*?<\/title>/, `<title>${articleTitle}</title>`)
              .replace(/<link rel="canonical" href="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<link rel="canonical" href="${articleCanonical}" />`)
              .replace(/<meta property="og:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="og:url" content="${articleCanonical}" />`)
              .replace(/<meta property="twitter:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="twitter:url" content="${articleCanonical}" />`)
              .replace(/<meta property="og:type" content="website" \/>/, '<meta property="og:type" content="article" />')
              .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${articleDesc}" />`)
              .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${articleTitle}" />`)
              .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${articleTitle}" />`)
              .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${articleDesc}" />`)
              .replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${articleDesc}" />`)
              .replace('</head>', articleSchema);

            fs.writeFileSync(path.resolve(articleDir, 'index.html'), articleHtml);

            // Generate dist/blog/how-to-run-cpp-on-android/index.html with article-specific meta tags
            const article2Dir = path.resolve(blogDir, 'how-to-run-cpp-on-android');
            if (!fs.existsSync(article2Dir)) {
              fs.mkdirSync(article2Dir, { recursive: true });
            }

            const article2Title = 'How to Run C++ on Android: A Practical Guide (2026) — RunCoder';
            const article2Desc = 'Learn how to run C++ on Android using offline compiler apps, Termux, or mobile coding environments. Compare the options and choose the right workflow.';
            const article2Canonical = 'https://runcoder.pages.dev/blog/how-to-run-cpp-on-android/';

            const article2Schema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "${article2Canonical}#article",
          "headline": "How to Run C++ on Android: A Practical Guide",
          "description": "${article2Desc}",
          "image": ["https://runcoder.pages.dev/runcoder-official-logo.png"],
          "datePublished": "2026-09-12",
          "author": {
            "@type": "Person",
            "name": "RunCoder Engineering Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "RunCoder",
            "url": "https://runcoder.pages.dev/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://runcoder.pages.dev/runcoder-official-logo.png"
            }
          },
          "mainEntityOfPage": "${article2Canonical}"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "${article2Canonical}#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://runcoder.pages.dev/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://runcoder.pages.dev/blog/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "How to Run C++ on Android: A Practical Guide",
              "item": "${article2Canonical}"
            }
          ]
        }
      ]
    }
    </script>
  </head>`;

            let article2Html = html
              .replace(/<title>.*?<\/title>/, `<title>${article2Title}</title>`)
              .replace(/<link rel="canonical" href="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<link rel="canonical" href="${article2Canonical}" />`)
              .replace(/<meta property="og:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="og:url" content="${article2Canonical}" />`)
              .replace(/<meta property="twitter:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="twitter:url" content="${article2Canonical}" />`)
              .replace(/<meta property="og:type" content="website" \/>/, '<meta property="og:type" content="article" />')
              .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${article2Desc}" />`)
              .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${article2Title}" />`)
              .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${article2Title}" />`)
              .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${article2Desc}" />`)
              .replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${article2Desc}" />`)
              .replace('</head>', article2Schema);

            fs.writeFileSync(path.resolve(article2Dir, 'index.html'), article2Html);

            // Generate dist/blog/how-to-run-python-on-android/index.html with article-specific meta tags
            const article3Dir = path.resolve(blogDir, 'how-to-run-python-on-android');
            if (!fs.existsSync(article3Dir)) {
              fs.mkdirSync(article3Dir, { recursive: true });
            }

            const article3Title = 'How to Run Python on Android: A Practical Guide (2026) — RunCoder';
            const article3Desc = 'Learn how to run Python on Android using offline IDEs like Pydroid 3, Termux, or mobile coding environments. Compare the options and choose the right workflow.';
            const article3Canonical = 'https://runcoder.pages.dev/blog/how-to-run-python-on-android/';

            const article3Schema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "${article3Canonical}#article",
          "headline": "How to Run Python on Android: A Practical Guide",
          "description": "${article3Desc}",
          "image": ["https://runcoder.pages.dev/runcoder-official-logo.png"],
          "datePublished": "2026-09-13",
          "author": {
            "@type": "Person",
            "name": "RunCoder Engineering Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "RunCoder",
            "url": "https://runcoder.pages.dev/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://runcoder.pages.dev/runcoder-official-logo.png"
            }
          },
          "mainEntityOfPage": "${article3Canonical}"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "${article3Canonical}#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://runcoder.pages.dev/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://runcoder.pages.dev/blog/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "How to Run Python on Android: A Practical Guide",
              "item": "${article3Canonical}"
            }
          ]
        }
      ]
    }
    </script>
  </head>`;

            let article3Html = html
              .replace(/<title>.*?<\/title>/, `<title>${article3Title}</title>`)
              .replace(/<link rel="canonical" href="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<link rel="canonical" href="${article3Canonical}" />`)
              .replace(/<meta property="og:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="og:url" content="${article3Canonical}" />`)
              .replace(/<meta property="twitter:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="twitter:url" content="${article3Canonical}" />`)
              .replace(/<meta property="og:type" content="website" \/>/, '<meta property="og:type" content="article" />')
              .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${article3Desc}" />`)
              .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${article3Title}" />`)
              .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${article3Title}" />`)
              .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${article3Desc}" />`)
              .replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${article3Desc}" />`)
              .replace('</head>', article3Schema);

            fs.writeFileSync(path.resolve(article3Dir, 'index.html'), article3Html);

            // Generate dist/blog/best-coding-apps-android/index.html with article-specific meta tags
            const article4Dir = path.resolve(blogDir, 'best-coding-apps-android');
            if (!fs.existsSync(article4Dir)) {
              fs.mkdirSync(article4Dir, { recursive: true });
            }

            const article4Title = 'Best Coding Apps for Android in 2026: Which One Should You Use? — RunCoder';
            const article4Desc = 'Compare the best coding apps for Android in 2026, including RunCoder, Termux, Pydroid 3, Acode, Spck, and cloud IDEs. Find the right app for your language and workflow.';
            const article4Canonical = 'https://runcoder.pages.dev/blog/best-coding-apps-android/';

            const article4Schema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "${article4Canonical}#article",
          "headline": "Best Coding Apps for Android in 2026: Which One Should You Use?",
          "description": "${article4Desc}",
          "image": ["https://runcoder.pages.dev/runcoder-official-logo.png"],
          "datePublished": "2026-09-13",
          "author": {
            "@type": "Person",
            "name": "RunCoder Engineering Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "RunCoder",
            "url": "https://runcoder.pages.dev/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://runcoder.pages.dev/runcoder-official-logo.png"
            }
          },
          "mainEntityOfPage": "${article4Canonical}"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "${article4Canonical}#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://runcoder.pages.dev/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://runcoder.pages.dev/blog/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Best Coding Apps for Android in 2026: Which One Should You Use?",
              "item": "${article4Canonical}"
            }
          ]
        }
      ]
    }
    </script>
  </head>`;

            let article4Html = html
              .replace(/<title>.*?<\/title>/, `<title>${article4Title}</title>`)
              .replace(/<link rel="canonical" href="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<link rel="canonical" href="${article4Canonical}" />`)
              .replace(/<meta property="og:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="og:url" content="${article4Canonical}" />`)
              .replace(/<meta property="twitter:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="twitter:url" content="${article4Canonical}" />`)
              .replace(/<meta property="og:type" content="website" \/>/, '<meta property="og:type" content="article" />')
              .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${article4Desc}" />`)
              .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${article4Title}" />`)
              .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${article4Title}" />`)
              .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${article4Desc}" />`)
              .replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${article4Desc}" />`)
              .replace('</head>', article4Schema);

            fs.writeFileSync(path.resolve(article4Dir, 'index.html'), article4Html);
          }

          // Generate static prerendered HTML for Article #5 (/blog/dsa-practice-on-phone/)
          const article5Dir = path.resolve(__dirname, 'dist/blog/dsa-practice-on-phone');
          if (!fs.existsSync(article5Dir)) {
            fs.mkdirSync(article5Dir, { recursive: true });
          }

          if (fs.existsSync(indexHtmlPath)) {
            const html = fs.readFileSync(indexHtmlPath, 'utf-8');
            const article5Title = "How to Practice DSA on Your Phone: A Practical Guide for Android — RunCoder";
            const article5Desc = "Learn how to practice Data Structures and Algorithms on Android, choose the right coding setup, solve problems effectively, and build a practical DSA workflow without a laptop.";
            const article5Canonical = "https://runcoder.pages.dev/blog/dsa-practice-on-phone/";

            const article5Schema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "${article5Canonical}#article",
          "headline": "How to Practice DSA on Your Phone: A Practical Guide for Android",
          "description": "${article5Desc}",
          "image": ["https://runcoder.pages.dev/runcoder-official-logo.png"],
          "datePublished": "2026-09-13",
          "author": {
            "@type": "Person",
            "name": "RunCoder Engineering Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "RunCoder",
            "url": "https://runcoder.pages.dev/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://runcoder.pages.dev/runcoder-official-logo.png"
            }
          },
          "mainEntityOfPage": "${article5Canonical}"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "${article5Canonical}#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://runcoder.pages.dev/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://runcoder.pages.dev/blog/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "How to Practice DSA on Your Phone: A Practical Guide for Android",
              "item": "${article5Canonical}"
            }
          ]
        }
      ]
    }
    </script>
  </head>`;

            let article5Html = html
              .replace(/<title>.*?<\/title>/, `<title>${article5Title}</title>`)
              .replace(/<link rel="canonical" href="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<link rel="canonical" href="${article5Canonical}" />`)
              .replace(/<meta property="og:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="og:url" content="${article5Canonical}" />`)
              .replace(/<meta property="twitter:url" content="https:\/\/runcoder\.pages\.dev\/".*?\/>/, `<meta property="twitter:url" content="${article5Canonical}" />`)
              .replace(/<meta property="og:type" content="website" \/>/, '<meta property="og:type" content="article" />')
              .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${article5Desc}" />`)
              .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${article5Title}" />`)
              .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${article5Title}" />`)
              .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${article5Desc}" />`)
              .replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${article5Desc}" />`)
              .replace('</head>', article5Schema);

            fs.writeFileSync(path.resolve(article5Dir, 'index.html'), article5Html);
          }
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
