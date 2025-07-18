import React from 'react';
import { ExternalLink, FileText, BookOpen, Users } from 'lucide-react';
import { Publication } from '../data/cv-data';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const getIcon = (type: Publication['type']) => {
    switch (type) {
      case 'journal':
        return <BookOpen size={20} className="text-blue-600" />;
      case 'conference':
        return <Users size={20} className="text-green-600" />;
      case 'preprint':
        return <FileText size={20} className="text-orange-600" />;
      case 'book':
        return <BookOpen size={20} className="text-purple-600" />;
      default:
        return <FileText size={20} className="text-gray-600" />;
    }
  };

  const getTypeColor = (type: Publication['type']) => {
    switch (type) {
      case 'journal':
        return 'bg-blue-100 text-blue-800';
      case 'conference':
        return 'bg-green-100 text-green-800';
      case 'preprint':
        return 'bg-orange-100 text-orange-800';
      case 'book':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {getIcon(publication.type)}
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(publication.type)}`}>
            {publication.type}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{publication.year}</span>
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
        {publication.title}
      </h3>
      
      <div className="mb-2">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Authors:</span> {publication.authors.join(', ')}
        </p>
      </div>
      
      <p className="text-sm text-gray-600">
        <span className="font-medium">Published in:</span> {publication.venue}
      </p>
    </div>
  );
};

export default PublicationCard;