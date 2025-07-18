import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Story } from '../data/stories-data';

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const getCategoryColor = (category: Story['category']) => {
    switch (category) {
      case 'research':
        return 'bg-blue-100 text-blue-800';
      case 'blog':
        return 'bg-green-100 text-green-800';
      case 'project':
        return 'bg-purple-100 text-purple-800';
      case 'thoughts':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(story.category)}`}>
            {story.category}
          </span>
          {!story.published && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
              Draft
            </span>
          )}
        </div>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          <Link 
            to={`/stories/${story.id}`}
            className="hover:text-blue-600 transition-colors"
          >
            {story.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {story.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(story.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{story.readTime}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {story.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
          {story.tags.length > 3 && (
            <span className="text-xs text-gray-500">
              +{story.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default StoryCard;