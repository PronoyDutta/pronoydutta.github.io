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
        return <Presentation size={20} className="text-blue-600" />;
      case 'workshop':
        return <Users size={20} className="text-green-600" />;
      case 'project':
        return <Code size={20} className="text-purple-600" />;
      case 'award':
        return <Award size={20} className="text-yellow-600" />;
      default:
        return <Calendar size={20} className="text-gray-600" />;
    }
  };

  const getTypeColor = (type: Activity['type']) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-100 text-blue-800';
      case 'workshop':
        return 'bg-green-100 text-green-800';
      case 'project':
        return 'bg-purple-100 text-purple-800';
      case 'award':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {getIcon(activity.type)}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
            <p className="text-sm text-gray-600">{activity.organization}</p>
          </div>
        </div>
        <div className="text-right">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(activity.type)}`}>
            {activity.type}
          </span>
          <p className="text-sm text-gray-500 mt-1">{activity.date}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{activity.description}</p>
    </div>
  );
};

export default ActivityCard;