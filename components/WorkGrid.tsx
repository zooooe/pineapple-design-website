
import React from 'react';
import { Project } from '../types';

interface WorkGridProps {
  projects: Project[];
  viewProjectLabel: string;
  onProjectClick: (id: number) => void;
}

export const WorkGrid: React.FC<WorkGridProps> = ({ projects, onProjectClick }) => {
  return (
    <section className="px-6 md:px-12 pb-32 w-full fade-in">
      {/* Updated to 3 columns as requested */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group block cursor-pointer relative"
            onClick={() => onProjectClick(project.id)}
          >
            <div className="relative overflow-hidden bg-gray-100 w-full aspect-square">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                />
               
               {/* Hover overlay with Title and Category centered */}
               <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-center p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <span className="text-white/80 text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.category}
                  </span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
