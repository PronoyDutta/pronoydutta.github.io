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
        <div key={index} className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Code2 size={20} className="text-accent-blue" />
            <h3 className="text-lg font-semibold text-dark-50">{skillGroup.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, skillIndex) => (
              <span key={skillIndex} className="tech-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;