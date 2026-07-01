import React from 'react';
import { Calendar, Award, Users, Code, Presentation } from 'lucide-react';
import { Activity } from '../data/cv-data';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'conference':
        return <Presentation size={20} className="text-accent-blue" />;
      case 'workshop':
        return <Users size={20} className="text-accent-teal" />;
      case 'project':
        return <Code size={20} className="text-accent-blue" />;
      case 'award':
        return <Award size={20} className="text-accent-gold" />;
      default:
        return <Calendar size={20} className="text-dark-300" />;
    }
  };

  const getTypePill = (type: Activity['type']) => {
    switch (type) {
      case 'workshop':
        return 'pill-teal';
      case 'project':
        return 'pill';
      case 'award':
        return 'pill-gold';
      case 'conference':
        return 'pill';
      default:
        return 'pill';
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {getIcon(activity.type)}
          <div>
            <h3 className="text-lg font-semibold text-dark-50">{activity.title}</h3>
            <p className="text-sm text-dark-300">{activity.organization}</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0 ml-4">
          <span className={getTypePill(activity.type)}>{activity.type}</span>
          <p className="text-sm text-dark-400 mt-1">{activity.date}</p>
        </div>
      </div>
      <p className="text-dark-200 leading-relaxed">{activity.description}</p>
    </div>
  );
};

export default ActivityCard;