import React from 'react';
import { ExternalLink, FileText, BookOpen, Users, Quote, Unlock, Star } from 'lucide-react';
import { PublicationFromAPI } from '../services/openalex';

interface PublicationCardProps {
  publication: PublicationFromAPI;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const getIcon = (type: PublicationFromAPI['type']) => {
    switch (type) {
      case 'journal':
        return <BookOpen size={22} className="text-accent-blue" />;
      case 'conference':
        return <Users size={22} className="text-accent-teal" />;
      case 'preprint':
        return <FileText size={22} className="text-accent-gold" />;
      case 'book':
        return <BookOpen size={22} className="text-accent-rose" />;
      default:
        return <FileText size={22} className="text-dark-300" />;
    }
  };

  const getTypePill = (type: PublicationFromAPI['type']) => {
    switch (type) {
      case 'journal':
        return 'pill';
      case 'conference':
        return 'pill-teal';
      case 'preprint':
        return 'pill-gold';
      case 'book':
        return 'pill-rose';
      default:
        return 'pill';
    }
  };

  return (
    <div className="glass-card accent-border-left p-8 flex flex-col justify-between min-h-[220px]">
      <div>
        {/* Badges & Meta info */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            {getIcon(publication.type)}
            <span className={getTypePill(publication.type)}>{publication.type}</span>
            {publication.isFirstAuthor && (
              <span className="pill-gold flex items-center gap-1.5 py-0.5 px-2">
                <Star size={11} />
                1st Author
              </span>
            )}
            {publication.isOpenAccess && (
              <span className="pill-teal flex items-center gap-1.5 py-0.5 px-2">
                <Unlock size={11} />
                Open Access
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-sm font-semibold text-dark-400 font-mono">{publication.year}</span>
            {publication.link && (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:text-accent-teal transition-colors p-1 hover:bg-dark-800/40 rounded"
                aria-label="View publication source"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Publication Title */}
        <h3 className="text-xl font-bold text-dark-50 mb-4 leading-snug group-hover:text-accent-blue transition-colors">
          {publication.title}
        </h3>

        {/* Authors with Pronoy Dutta highlighted */}
        <div className="mb-5">
          <p className="text-sm text-dark-300 leading-relaxed">
            {publication.authors.map((author, idx) => {
              const isMe = author.toLowerCase().includes('pronoy dutta');
              return (
                <React.Fragment key={idx}>
                  <span className={isMe ? 'text-accent-blue font-bold underline decoration-accent-blue/30 decoration-2 underline-offset-2' : ''}>
                    {author}
                  </span>
                  {idx < publication.authors.length - 1 ? ', ' : ''}
                </React.Fragment>
              );
            })}
          </p>
        </div>
      </div>

      {/* Venue info */}
      <div className="flex items-center justify-between border-t border-dark-800/40 pt-4 mt-auto">
        <p className="text-sm text-dark-400 font-medium">
          <span className="text-accent-teal">{publication.venue}</span>
        </p>
      </div>
    </div>
  );
};

export default PublicationCard;