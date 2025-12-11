
export type Language = 'en' | 'zh';
export type Page = 'home' | 'services' | 'contact' | 'project';

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  images?: string[]; // Added support for gallery images
  year?: string;
  client?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Content {
  header: {
    logo: string;
    nav: {
      work: string;
      services: string;
      contact: string;
    };
    toggleEn: string;
    toggleZh: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    allLabel: string; // Added for bilingual "All" / "全部" button
  };
  works: {
    projects: Project[];
    viewProject: string; 
    backLabel: string;
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  contact: {
    title: string;
    emailLabel: string;
    email: string;
    addressLabel: string;
    address: string[];
  };
  footer: {
    copyright: string;
    emailLabel: string;
    email: string;
  };
}

export interface Dictionary {
  en: Content;
  zh: Content;
}
