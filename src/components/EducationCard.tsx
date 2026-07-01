import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Education } from '../data/cv-data';

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <GraduationCap size={24} className="text-accent-blue" />
          <div>
            <h3 className="text-lg font-semibold text-dark-50">{education.degree}</h3>
            <p className="text-accent-blue font-medium">{education.institution}</p>
          </div>
        </div>
        <div className="text-right text-sm text-dark-400">
          <div className="flex items-center gap-1 mb-1">
            <Calendar size={14} className="text-dark-500" />
            <span>{education.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-dark-500" />
            <span>{education.location}</span>
          </div>
        </div>
      </div>
      {education.details && (
        <ul className="space-y-1">
          {education.details.map((detail, index) => (
            <li key={index} className="text-dark-200 text-sm">
              <span className="text-accent-teal mr-2">•</span>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationCard;