export type BlogCategory = 
  | 'Android Coding'
  | 'C & C++'
  | 'Python'
  | 'Student Guides'
  | 'DSA & Practicals'
  | 'Tools & Comparisons';

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type ContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string; id: string }
  | { type: 'code'; code: string; language: string; filename?: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; variant: 'info' | 'tip' | 'warning' | 'note'; title?: string; text: string }
  | { type: 'quote'; quote: string; author?: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'rich-text'; html: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  author: BlogAuthor;
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string;
  readTimeMinutes: number;
  coverImage?: string;
  coverImageAlt?: string;
  featured?: boolean;
  tags: string[];
  tableOfContents: TableOfContentsItem[];
  content: ContentBlock[];
  faqs?: FAQItem[];
  relatedSlugs?: string[];
}
