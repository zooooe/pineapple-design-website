
import React, { useState, useEffect } from 'react';
import { Language, Content, Page } from '../types';

interface HeaderProps {
  content: Content['header'];
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  content, 
  currentLang, 
  onToggleLang,
  currentPage,
  onNavigate
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isMenuOpen ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="w-full px-6 md:px-12 py-8 relative flex items-center justify-between">
          
          {/* Left Section: Hamburger Menu (Universal) */}
          <div className="flex items-center shrink-0 z-50">
            <button 
              className="p-2 -ml-2 text-black focus:outline-none group" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 transform origin-center ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-full' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 transform origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Center Section: Logo */}
          <div 
            onClick={() => handleNavigate('home')}
            className={`
              text-lg lg:text-xl font-normal tracking-wide cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap z-50 px-4
              absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
            `}
          >
            {content.logo}
          </div>

          {/* Right Section: Language Toggle */}
          <div className="z-50 shrink-0">
            {/* Desktop View (lg+): Show 'EN / 中文' */}
            <div className="hidden lg:flex items-center space-x-2 text-sm font-normal tracking-wider">
              <button
                onClick={() => onToggleLang('en')}
                className={`px-1 py-1 transition-colors duration-200 ${
                  currentLang === 'en' ? 'text-black' : 'text-gray-300 hover:text-gray-500'
                }`}
              >
                {content.toggleEn}
              </button>
              <span className="text-gray-200 font-normal">/</span>
              <button
                onClick={() => onToggleLang('zh')}
                className={`px-1 py-1 transition-colors duration-200 ${
                  currentLang === 'zh' ? 'text-black' : 'text-gray-300 hover:text-gray-500'
                }`}
              >
                {content.toggleZh}
              </button>
            </div>

            {/* Mobile/Tablet View (< lg): Show Single Toggle Button (Target Language) */}
            <button
              onClick={() => onToggleLang(currentLang === 'en' ? 'zh' : 'en')}
              className="lg:hidden text-sm font-normal tracking-wider text-black px-1 py-1"
            >
              {currentLang === 'en' ? content.toggleZh : content.toggleEn}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay - Universal */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-10">
          <button 
            onClick={() => handleNavigate('home')} 
            className={`text-3xl md:text-5xl font-normal tracking-tight transition-colors ${currentPage === 'home' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
          >
            {content.nav.work}
          </button>
          <button 
            onClick={() => handleNavigate('services')} 
            className={`text-3xl md:text-5xl font-normal tracking-tight transition-colors ${currentPage === 'services' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
          >
            {content.nav.services}
          </button>
          <button 
            onClick={() => handleNavigate('contact')} 
            className={`text-3xl md:text-5xl font-normal tracking-tight transition-colors ${currentPage === 'contact' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
          >
            {content.nav.contact}
          </button>
        </nav>
      </div>
    </>
  );
};
