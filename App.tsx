
import React, { useState, useEffect } from 'react';
import { Language, Page } from './types';
import { DICTIONARY } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkGrid } from './components/WorkGrid';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [page, setPage] = useState<Page>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Default to English, no auto-detection as requested
    setIsLoaded(true);
  }, []);

  const handleToggleLang = (lang: Language) => {
    setLanguage(lang);
  };

  const handleNavigate = (newPage: Page) => {
    window.scrollTo(0, 0);
    setPage(newPage);
    if (newPage !== 'project') {
      setSelectedProjectId(null);
    }
  };

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
    setPage('project');
  };

  const content = DICTIONARY[language];

  // Helper to find current project data
  const currentProject = selectedProjectId 
    ? content.works.projects.find(p => p.id === selectedProjectId) 
    : null;

  // Filter projects based on selected category from Hero
  const displayedProjects = filterCategory
    ? content.works.projects.filter(p => {
        return p.category.toLowerCase().includes(filterCategory.toLowerCase()) || 
               filterCategory.toLowerCase().includes(p.category.toLowerCase());
      })
    : content.works.projects;

  if (!isLoaded) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col antialiased selection:bg-black selection:text-white">
      {/* Add key to Header to force re-render on language change */}
      <Header 
        key={language}
        content={content.header} 
        currentLang={language} 
        onToggleLang={handleToggleLang}
        currentPage={page}
        onNavigate={handleNavigate}
      />
      
      <main className="flex-grow fade-in">
        {page === 'home' && (
          <>
            <Hero 
              content={content.hero} 
              categories={content.services.items}
              activeCategory={filterCategory}
              onSelectCategory={setFilterCategory}
            />
            <WorkGrid 
              projects={displayedProjects} 
              viewProjectLabel={content.works.viewProject}
              onProjectClick={handleProjectClick}
            />
          </>
        )}
        
        {page === 'project' && currentProject && (
          <ProjectDetail 
            project={currentProject} 
            content={content.works}
            onBack={() => handleNavigate('home')}
          />
        )}

        {page === 'services' && (
          <Services content={content.services} />
        )}

        {page === 'contact' && (
          <Contact content={content.contact} />
        )}
      </main>

      <Footer content={content.footer} />
    </div>
  );
}

export default App;
