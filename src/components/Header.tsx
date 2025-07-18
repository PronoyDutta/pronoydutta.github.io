import React from 'react';
import { Mail, Phone, Github, Linkedin, Globe, MapPin } from 'lucide-react';
import { PersonalInfo } from '../data/cv-data';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {personalInfo.profilePhoto && (
            <div className="mb-8">
              <img
                src={personalInfo.profilePhoto}
                alt={`${personalInfo.name} profile photo`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-light">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-blue-600 bg-opacity-50 px-4 py-2 rounded-full">
              <Mail size={16} />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-200 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            
            {personalInfo.phone && (
              <div className="flex items-center gap-2 bg-blue-600 bg-opacity-50 px-4 py-2 rounded-full">
                <Phone size={16} />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-200 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            )}
            
            <div className="flex items-center gap-2 bg-blue-600 bg-opacity-50 px-4 py-2 rounded-full">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
            
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2 bg-blue-600 bg-opacity-50 px-4 py-2 rounded-full">
                <Linkedin size={16} />
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                  LinkedIn
                </a>
              </div>
            )}
            
            {personalInfo.github && (
              <div className="flex items-center gap-2 bg-blue-600 bg-opacity-50 px-4 py-2 rounded-full">
                <Github size={16} />
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                  GitHub
                </a>
              </div>
            )}
            
            {personalInfo.website && (
              <div className="flex items-center gap-2 bg-blue-600 bg-opacity-50 px-4 py-2 rounded-full">
                <Globe size={16} />
                <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                  Website
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;