import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { stories } from '../data/stories-data';

const StoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = stories.find(s => s.id === id);
  if (!story) { return <Navigate to="/stories" replace />; }

  const getCategoryPill = (category: string) => {
    switch (category) {
      case 'research': return 'pill';
      case 'blog': return 'pill-teal';
      case 'project': return 'pill-gold';
      case 'thoughts': return 'pill-rose';
      default: return 'pill';
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: story.title, text: story.excerpt, url: window.location.href }); }
      catch (err) { console.log('Error sharing:', err); }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <div className="bg-dark-900/50 border-b border-dark-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/stories" className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-teal transition-colors mb-6">
            <ArrowLeft size={20} />Back to Stories
          </Link>

          <div className="flex items-center justify-between mb-4">
            <span className={getCategoryPill(story.category)}>{story.category}</span>
            <button onClick={handleShare} className="flex items-center gap-2 px-3 py-1 text-dark-300 hover:text-dark-100 transition-colors">
              <Share2 size={16} />Share
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-dark-50 mb-4 leading-tight">{story.title}</h1>
          <p className="text-xl text-dark-300 mb-6 leading-relaxed">{story.excerpt}</p>

          <div className="flex items-center gap-6 text-sm text-dark-400 mb-6">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{story.readTime}</span>
            </div>
            {!story.published && (
              <span className="pill-gold">Draft</span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag, index) => (
              <span key={index} className="tech-tag">
                <Tag size={12} />{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-card p-8 md:p-12">
          <div
            className="prose-dark"
            dangerouslySetInnerHTML={{ __html: story.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, (match) => {
              const level = match.trim().length;
              return `<h${level} class="text-${4-level}xl font-bold mt-8 mb-4">`;
            }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/`(.*?)`/g, '<code>$1</code>') }}
          />
        </div>
      </article>

      {/* Related Stories */}
      <div className="bg-dark-900/50 border-t border-dark-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-dark-50 mb-8 text-center">More Stories</h2>
          <div className="text-center">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 bg-accent-blue/20 text-accent-blue border border-accent-blue/30 hover:bg-accent-blue/30 rounded-lg px-6 py-3 transition-colors"
            >
              View All Stories<ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPage;