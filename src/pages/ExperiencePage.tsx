import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { experience, education } from '../data/cv-data';

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950">
      <SEO 
        title="Experience & Education – Pronoy Dutta" 
        description="Explore the academic background, research experience, and professional appointments of Dr. Pronoy Dutta, postdoctoral researcher." 
      />
      {/* Hero */}
      <div className="hero-mesh py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience &amp; Education
          </h1>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            My academic journey from IIT Guwahati to the University of Salzburg.
          </p>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="section-dark-alt">
        <Section title="Professional Experience">
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className={`fade-in-up fade-in-up-delay-${index + 1}`}>
                <ExperienceCard experience={exp} />
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Education */}
      <div className="section-dark">
        <Section title="Education">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className={`fade-in-up fade-in-up-delay-${index + 1}`}>
                <EducationCard education={edu} />
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Footer / Back link */}
      <div className="border-t border-dark-800/50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-teal transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
