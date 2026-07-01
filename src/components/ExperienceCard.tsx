import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Experience } from '../data/cv-data';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="glass-card accent-border-left p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="mb-2 md:mb-0">
          <h3 className="text-xl font-semibold text-dark-50">{experience.title}</h3>
          <p className="text-lg text-accent-blue font-medium">{experience.company}</p>
        </div>
        <div className="text-sm text-dark-400 flex-shrink-0 md:ml-4">
          <div className="flex items-center gap-1 mb-1">
            <Calendar size={14} className="text-dark-500" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-dark-500" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className="text-dark-200 leading-relaxed">
            <span className="text-accent-teal mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>

      {experience.technologies && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-dark-200 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;