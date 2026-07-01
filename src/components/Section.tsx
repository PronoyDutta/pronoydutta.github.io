import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;