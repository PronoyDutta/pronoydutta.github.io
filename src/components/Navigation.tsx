import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, User, FileText, Briefcase, Star } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Home', icon: Home, exact: true },
    { path: '/highlights', label: 'Highlights', icon: Star, exact: false },
    { path: '/publications', label: 'Publications', icon: FileText, exact: false },
    { path: '/experience', label: 'Experience', icon: Briefcase, exact: false },
    { path: '/recents', label: 'Recents', icon: BookOpen, exact: false },
  ];

  const isActive = (path: string, exact: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold transition-colors">
            <User size={24} className="text-accent-blue" />
            <span className="gradient-text hidden sm:inline">Pronoy Dutta</span>
          </Link>
          <div className="flex space-x-1 sm:space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path, item.exact);
              return (
                <Link key={item.path} to={item.path}
                  className={`flex items-center gap-1.5 px-2 sm:px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'text-accent-blue border-b-2 border-accent-blue'
                      : 'text-dark-300 hover:text-dark-100'
                  }`}>
                  <Icon size={16} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;