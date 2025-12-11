
import React from 'react';
import { Content } from '../types';

interface FooterProps {
  content: Content['footer'];
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="border-t border-gray-100">
      <div className="w-full px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div className="flex flex-col space-y-2">
           <span className="text-sm text-neutral-400 uppercase tracking-wider">
            {content.emailLabel}
           </span>
           <a 
            href={`mailto:${content.email}`} 
            className="text-2xl md:text-3xl font-sans hover:text-gray-600 transition-colors"
           >
            {content.email}
           </a>
        </div>

        <div className="text-sm text-neutral-400">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
};