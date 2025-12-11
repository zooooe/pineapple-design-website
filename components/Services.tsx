
import React from 'react';
import { Content } from '../types';

interface ServicesProps {
  content: Content['services'];
}

export const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 w-full min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Side: Title */}
        <div className="lg:w-1/3 shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight sticky top-32">
            {content.title}
          </h2>
        </div>

        {/* Right Side: Service Items Grid */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
            {content.items.map((item) => (
              <div key={item.id} className="group border-t border-gray-200 pt-6 hover:border-black transition-colors duration-500">
                <span className="block text-xs font-mono text-gray-400 mb-4">{item.id}</span>
                <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm md:text-base mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.items.map((subItem, index) => (
                    <li key={index} className="flex items-center text-sm text-neutral-400 group-hover:text-neutral-600 transition-colors duration-300">
                      <span className="w-1 h-1 bg-gray-300 rounded-full mr-3 group-hover:bg-neutral-600 transition-colors duration-300"></span>
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
