import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Experience } from '../data/cv-data';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="mb-2 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
          <p className="text-lg text-blue-600 font-medium">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-600">
          <div className="flex items-center gap-1 mb-1">
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      
      <ul className="space-y-2 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className="text-gray-700 leading-relaxed">
            <span className="text-blue-600 mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
      
      {experience.technologies && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;