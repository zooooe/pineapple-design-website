
import React from 'react';
import { Content } from '../types';

interface ContactProps {
  content: Content['contact'];
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 w-full min-h-[80vh] flex flex-col justify-between">
      <div>
        <h2 className="text-5xl md:text-8xl font-semibold tracking-tight mb-20">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="block text-sm text-neutral-400 uppercase tracking-widest mb-4">
              {content.emailLabel}
            </span>
            <a 
              href={`mailto:${content.email}`} 
              className="text-2xl md:text-4xl hover:text-gray-500 transition-colors border-b border-black pb-1 inline-block"
            >
              {content.email}
            </a>
          </div>

          <div>
            <span className="block text-sm text-neutral-400 uppercase tracking-widest mb-4">
              {content.addressLabel}
            </span>
            <div className="text-xl md:text-2xl leading-snug">
              {content.address.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};