import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { stories } from '../data/stories-data';

const StoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = stories.find(s => s.id === id);

  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  const getCategoryColor = (category: string) => {
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: story.title,
          text: story.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/stories"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Stories
          </Link>

          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(story.category)}`}>
              {story.category}
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {story.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {story.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{new Date(story.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{story.readTime}</span>
            </div>
            {!story.published && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                Draft
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
            dangerouslySetInnerHTML={{ 
              __html: story.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, (match) => {
                const level = match.trim().length;
                return `<h${level} class="text-${4-level}xl font-bold mt-8 mb-4 text-gray-900">`;
              }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/`(.*?)`/g, '<code>$1</code>')
            }}
          />
        </div>
      </article>

      {/* Related Stories */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Stories</h2>
          <div className="text-center">
            <Link 
              to="/stories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Stories
              <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPage;