import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Education } from '../data/cv-data';

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <GraduationCap size={24} className="text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{education.degree}</h3>
            <p className="text-blue-600 font-medium">{education.institution}</p>
          </div>
        </div>
        <div className="text-right text-sm text-gray-600">
          <div className="flex items-center gap-1 mb-1">
            <Calendar size={14} />
            <span>{education.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{education.location}</span>
          </div>
        </div>
      </div>
      
      {education.details && (
        <ul className="space-y-1">
          {education.details.map((detail, index) => (
            <li key={index} className="text-gray-700 text-sm">
              <span className="text-blue-600 mr-2">•</span>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationCard;