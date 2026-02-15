
import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  dark?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '', title, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 ${dark ? 'bg-navy text-white' : 'bg-off-white text-slate'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="heading-font text-3xl md:text-4xl font-extrabold uppercase mb-12 tracking-tight">
            <span className={dark ? 'text-white' : 'text-navy'}>{title.split(' ')[0]} </span>
            <span className="text-emerald">{title.split(' ').slice(1).join(' ')}</span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
