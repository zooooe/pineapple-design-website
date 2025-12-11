
import React, { useEffect } from 'react';
import { Project, Content } from '../types';

interface ProjectDetailProps {
  project: Project;
  content: Content['works'];
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, content, onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full min-h-screen fade-in">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-20 text-sm font-medium tracking-wide text-gray-400 hover:text-black transition-colors flex items-center gap-2 group"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
        {content.backLabel}
      </button>

      {/* Split Layout: Info Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-32 border-t border-gray-100 pt-12">
        
        {/* Left Column: Title & Metadata */}
        <div className="w-full lg:w-1/2">
           <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12 text-black">
             {project.title}
           </h1>
           
           <div className="w-full max-w-sm space-y-6">
             <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
               <span className="text-gray-400 text-sm uppercase tracking-wider">Category</span>
               <span className="col-span-2 text-base font-medium">{project.category}</span>
             </div>
             
             {project.year && (
               <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                 <span className="text-gray-400 text-sm uppercase tracking-wider">Year</span>
                 <span className="col-span-2 text-base font-medium">{project.year}</span>
               </div>
             )}

             {project.client && (
               <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                 <span className="text-gray-400 text-sm uppercase tracking-wider">Client</span>
                 <span className="col-span-2 text-base font-medium">{project.client}</span>
               </div>
             )}
           </div>
        </div>

        {/* Right Column: Description */}
        <div className="w-full lg:w-1/2 lg:pl-12 pt-2">
           <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-light max-w-2xl text-left">
             {project.description}
           </p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="space-y-12 md:space-y-24 w-full">
        {project.images && project.images.length > 0 ? (
          project.images.map((img, index) => (
            <div key={index} className="w-full bg-gray-50">
              <img 
                src={img} 
                alt={`${project.title} detail ${index + 1}`} 
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
          ))
        ) : (
          /* Fallback if no specific images are provided, show the main image */
          <div className="w-full bg-gray-50">
             <img 
               src={project.imageUrl} 
               alt={project.title} 
               className="w-full h-auto object-cover block"
             />
          </div>
        )}
      </div>
    </div>
  );
};
