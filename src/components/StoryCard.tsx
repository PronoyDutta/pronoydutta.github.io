import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Story } from '../data/stories-data';

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const getCategoryPill = (category: Story['category']) => {
    switch (category) {
      case 'research': return 'pill';
      case 'blog': return 'pill-teal';
      case 'project': return 'pill-gold';
      case 'thoughts': return 'pill-rose';
      default: return 'pill';
    }
  };

  return (
    <article className="glass-card overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={getCategoryPill(story.category)}>{story.category}</span>
          {!story.published && (
            <span className="pill-gold">Draft</span>
          )}
        </div>

        <h2 className="text-xl font-semibold text-dark-50 mb-3 line-clamp-2">
          <Link to={`/stories/${story.id}`} className="hover:text-accent-blue transition-colors">
            {story.title}
          </Link>
        </h2>

        <p className="text-dark-300 mb-4 line-clamp-3 leading-relaxed">
          {story.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-dark-400 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{story.readTime}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {story.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="tech-tag">
              <Tag size={10} />{tag}
            </span>
          ))}
          {story.tags.length > 3 && (
            <span className="text-xs text-dark-400">+{story.tags.length - 3} more</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default StoryCard;