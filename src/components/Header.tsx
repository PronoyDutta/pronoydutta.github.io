import React from 'react';
import { Mail, Phone, Github, Linkedin, Globe, MapPin } from 'lucide-react';
import { PersonalInfo } from '../data/cv-data';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="text-white py-20 md:py-28 relative overflow-hidden isolate">
      {/* ── Background Mesh Layer ── */}
      <div className="absolute inset-0 hero-mesh" style={{ zIndex: 1 }} />

      {/* ── Metal Ion Battery & SAXS Scattering Graphic (Subtle overlay) ── */}
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ zIndex: 2 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes electric-flow {
            0% { stroke-dashoffset: 800; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes ion-path-1 {
            0% { transform: translate(60px, 90px); opacity: 0; }
            5% { opacity: 0.8; }
            95% { opacity: 0.8; }
            100% { transform: translate(740px, 70px); opacity: 0; }
          }
          @keyframes ion-path-2 {
            0% { transform: translate(740px, 160px); opacity: 0; }
            5% { opacity: 0.7; }
            95% { opacity: 0.7; }
            100% { transform: translate(60px, 180px); opacity: 0; }
          }
          @keyframes ion-path-3 {
            0% { transform: translate(80px, 230px); opacity: 0; }
            5% { opacity: 0.8; }
            95% { opacity: 0.8; }
            100% { transform: translate(720px, 210px); opacity: 0; }
          }
          .animate-electric-flow-1 {
            animation: electric-flow 6s linear infinite;
          }
          .animate-electric-flow-2 {
            animation: electric-flow 8s linear infinite reverse;
          }
          .animate-electric-flow-3 {
            animation: electric-flow 10s linear infinite;
          }
          .animate-ion-move-1 {
            animation: ion-path-1 7s ease-in-out infinite;
          }
          .animate-ion-move-2 {
            animation: ion-path-2 9s ease-in-out infinite;
          }
          .animate-ion-move-3 {
            animation: ion-path-3 11s ease-in-out infinite;
          }
          .glow-ion {
            filter: drop-shadow(0 0 3px var(--accent-blue));
          }
          .glow-ion-teal {
            filter: drop-shadow(0 0 3px var(--accent-teal));
          }
        `}</style>

        <defs>
          <linearGradient id="electric-trail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent-teal)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Current pathways */}
        <path d="M 50 80 Q 250 60, 400 100 T 750 80" fill="none" stroke="var(--accent-blue)" strokeWidth="1" opacity="0.1" strokeDasharray="4 8" />
        <path d="M 50 170 Q 200 190, 400 150 T 750 170" fill="none" stroke="var(--accent-teal)" strokeWidth="1" opacity="0.08" />
        <path d="M 50 220 Q 220 200, 400 240 T 750 220" fill="none" stroke="var(--accent-blue)" strokeWidth="1" opacity="0.1" strokeDasharray="4 8" />

        {/* Animated current waves */}
        <path d="M 50 80 Q 250 60, 400 100 T 750 80" fill="none" stroke="url(#electric-trail)" strokeWidth="2.5" strokeDasharray="120 240" opacity="0.25" className="animate-electric-flow-1" />
        <path d="M 50 170 Q 200 190, 400 150 T 750 170" fill="none" stroke="url(#electric-trail)" strokeWidth="2" strokeDasharray="100 200" opacity="0.2" className="animate-electric-flow-2" />
        <path d="M 50 220 Q 220 200, 400 240 T 750 220" fill="none" stroke="url(#electric-trail)" strokeWidth="2.5" strokeDasharray="150 300" opacity="0.25" className="animate-electric-flow-3" />

        {/* Floating animated Ions */}
        <g className="animate-ion-move-1">
          <circle r="12" fill="var(--bg-primary)" stroke="var(--accent-blue)" strokeWidth="1.5" className="glow-ion" />
          <text x="0" y="3.5" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="var(--accent-blue)" textAnchor="middle">Li+</text>
        </g>

        <g className="animate-ion-move-2">
          <circle r="12" fill="var(--bg-primary)" stroke="var(--accent-teal)" strokeWidth="1.5" className="glow-ion-teal" />
          <text x="0" y="3.5" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="var(--accent-teal)" textAnchor="middle">Li+</text>
        </g>

        <g className="animate-ion-move-3">
          <circle r="12" fill="var(--bg-primary)" stroke="var(--accent-blue)" strokeWidth="1.5" className="glow-ion" />
          <text x="0" y="3.5" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="var(--accent-blue)" textAnchor="middle">Li+</text>
        </g>
      </svg>

      <div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        style={{ zIndex: 10, transform: 'translate3d(0, 0, 0)' }}
      >
        <div className="text-center">
          {personalInfo.profilePhoto && (
            <div className="mb-8 fade-in-up">
              <img
                src={personalInfo.profilePhoto}
                alt={`${personalInfo.name} profile photo`}
                className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto object-cover border-2 border-accent-blue/30 glow-ring shadow-lg"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight gradient-text fade-in-up fade-in-up-delay-1">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-dark-200 mb-6 font-light fade-in-up fade-in-up-delay-2">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-dark-300 italic mb-10 max-w-2xl mx-auto leading-relaxed opacity-80 fade-in-up fade-in-up-delay-3">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm fade-in-up fade-in-up-delay-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-chip"
            >
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </a>

            {personalInfo.phone && (
              <a
                href={`tel:${personalInfo.phone}`}
                className="contact-chip"
              >
                <Phone size={16} />
                <span>{personalInfo.phone}</span>
              </a>
            )}

            <span className="contact-chip">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </span>

            {personalInfo.linkedin && (
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            )}

            {personalInfo.github && (
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}

            {personalInfo.website && (
              <a
                href={`https://${personalInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip"
              >
                <Globe size={16} />
                <span>Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;