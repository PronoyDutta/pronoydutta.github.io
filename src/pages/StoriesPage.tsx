import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import StoryCard from '../components/StoryCard';
import { stories, categories } from '../data/stories-data';

const StoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDrafts, setShowDrafts] = useState(false);

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPublished = showDrafts || story.published;
    return matchesCategory && matchesSearch && matchesPublished;
  });

  const getActiveCategoryStyle = (categoryId: string) => {
    switch (categoryId) {
      case 'all': return 'bg-accent-blue/20 text-accent-blue border-accent-blue/30';
      case 'research': return 'bg-accent-blue/20 text-accent-blue border-accent-blue/30';
      case 'blog': return 'bg-accent-teal/20 text-accent-teal border-accent-teal/30';
      case 'project': return 'bg-accent-gold/20 text-accent-gold border-accent-gold/30';
      case 'thoughts': return 'bg-accent-rose/20 text-accent-rose border-accent-rose/30';
      default: return 'bg-accent-blue/20 text-accent-blue border-accent-blue/30';
    }
  };

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero */}
      <div className="hero-mesh py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Stories & Insights</h1>
          <p className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
            Research journeys, technical insights, and thoughts on the future of AI and software development
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="glass-nav sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="dark-input focus-glow w-full pl-10 pr-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-dark-400" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                    selectedCategory === category.id
                      ? getActiveCategoryStyle(category.id)
                      : 'bg-dark-800/50 text-dark-300 border-dark-700/50 hover:bg-dark-700/50 hover:text-dark-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 text-sm text-dark-300">
              <input
                type="checkbox"
                checked={showDrafts}
                onChange={(e) => setShowDrafts(e.target.checked)}
                className="rounded border-dark-600 bg-dark-800 text-accent-blue focus:ring-accent-blue/50"
              />
              Show drafts
            </label>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-dark-500 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-dark-100 mb-2">No stories found</h3>
            <p className="text-dark-300">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>

      {/* Coming Soon */}
      <div className="bg-dark-900/50 border-t border-dark-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-dark-50 mb-4">More Stories Coming Soon</h2>
          <p className="text-dark-300 mb-6">
            I'm constantly working on new research insights and technical deep-dives. Check back regularly for fresh content!
          </p>
          <div className="flex justify-center gap-4 text-sm text-dark-400">
            <span><span className="text-accent-teal">•</span> Research Deep-Dives</span>
            <span><span className="text-accent-teal">•</span> Technical Tutorials</span>
            <span><span className="text-accent-teal">•</span> Industry Insights</span>
            <span><span className="text-accent-teal">•</span> Career Reflections</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;