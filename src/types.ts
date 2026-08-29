export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.runcode.app';

export type Page = 
  | 'home' 
  | 'features' 
  | 'pro' 
  | 'download' 
  | 'support' 
  | 'privacy' 
  | 'terms' 
  | 'contact'
  | 'verifier'
  | 'security'
  | 'refund'
  | 'deletion';

export interface MobileFile {
  name: string;
  language: 'c' | 'cpp' | 'java' | 'python' | 'html' | 'css' | 'javascript';
  content: string;
  folder?: string;
  recentlyOpened?: boolean;
  timeOpened?: string;
  size?: string;
}

export interface WorkspaceProject {
  id: string;
  name: string;
  language: 'c' | 'cpp' | 'java' | 'python' | 'web';
  languageLabel: string;
  createdAt: string;
  lastModified: string;
  fileCount: number;
  size: string;
  files: MobileFile[];
  activeFileName?: string;
}

export type TemplateLanguage = 'c' | 'cpp' | 'java' | 'python' | 'html' | 'css' | 'javascript';
export type TemplateTier = 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';

export interface MobileTemplate {
  id?: string;
  title: string;
  name?: string;
  language: TemplateLanguage;
  languageLabel?: string;
  extension?: string;
  description: string;
  level: TemplateTier;
  tier?: TemplateTier;
  category?: string;
  tags?: string[];
  code: string;
  input?: string;
  output?: string;
  isPro?: boolean;
  estimatedTime?: string;
  concepts?: string[];
}
