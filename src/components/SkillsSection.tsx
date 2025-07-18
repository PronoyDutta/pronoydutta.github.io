import React from 'react';
import { Code2 } from 'lucide-react';
import { Skill } from '../data/cv-data';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skillGroup, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center gap-2 mb-4">
            <Code2 size={20} className="text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">{skillGroup.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;