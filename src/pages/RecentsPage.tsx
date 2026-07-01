import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Award, Share2, Code, Flame, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { recentActivities, Activity } from '../data/cv-data';

// Helper to render custom activity arts or clean generic fallbacks based on type
const renderActivityGraphic = (title: string, type: Activity['type'], isEven: boolean) => {
  const color = isEven ? "var(--accent-blue)" : "var(--accent-teal)";
  const secondaryColor = isEven ? "var(--accent-teal)" : "var(--accent-blue)";

  // 1. Check for specific custom graphics by title match
  if (title.includes("BeLi'26")) {
    return (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Presentation Slide Screen */}
        <rect x="50" y="30" width="140" height="90" rx="3" fill="none" stroke="var(--accent-blue)" strokeWidth="2" />
        <line x1="120" y1="120" x2="120" y2="150" stroke="var(--accent-blue)" strokeWidth="2" />
        <line x1="80" y1="150" x2="160" y2="150" stroke="var(--accent-blue)" strokeWidth="2" />
        
        {/* Battery graphics on slide */}
        <rect x="80" y="55" width="60" height="30" rx="2" fill="none" stroke="var(--accent-teal)" strokeWidth="1.5" />
        <rect x="140" y="63" width="5" height="14" rx="1" fill="var(--accent-teal)" />
        <line x1="100" y1="55" x2="100" y2="85" stroke="var(--accent-teal)" strokeWidth="1" strokeDasharray="2 2" />
        
        {/* Speaker podium / Microphone */}
        <path d="M 60,110 L 70,80" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <circle cx="70" cy="78" r="3" fill="var(--accent-gold)" />
        {/* Sound/Signal waves */}
        <path d="M 78,74 Q 85,78 78,82" fill="none" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.7" />
        
        <text x="120" y="105" fontFamily="sans-serif" fontSize="7" fill="var(--accent-blue)" textAnchor="middle" fontWeight="bold">BeLi '26 • ETH ZURICH</text>
      </svg>
    );
  }

  if (title.includes("HZB") || title.includes("BESSY") || title.includes("beamtime") || title.includes("Beamtime")) {
    return (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ray-beam-recents" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-gold)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* Synchrotron Ring Sector */}
        <path d="M 20,140 A 120,120 0 0,1 180,20" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeDasharray="5 5" opacity="0.6" />
        <circle cx="90" cy="70" r="10" fill="none" stroke="var(--accent-teal)" strokeWidth="1" />
        
        {/* Exiting Beamline Tube */}
        <line x1="145" y1="41" x2="210" y2="120" stroke="var(--accent-blue)" strokeWidth="2" opacity="0.4" />
        
        {/* X-Ray High Energy Laser */}
        <line x1="145" y1="41" x2="210" y2="120" stroke="url(#ray-beam-recents)" strokeWidth="2.5" />
        <circle cx="145" cy="41" r="4" fill="var(--accent-blue)" />
        
        {/* Solid-State Cell Target */}
        <g transform="translate(200, 110) rotate(35)">
          <rect x="-10" y="-20" width="20" height="40" rx="1" fill="var(--bg-primary)" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="0" y1="-20" x2="0" y2="20" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="-15" cy="-5" r="1.5" fill="var(--accent-blue)" />
          <circle cx="15" cy="5" r="1.5" fill="var(--accent-blue)" />
          <circle cx="0" cy="25" r="1.5" fill="var(--accent-teal)" />
        </g>
      </svg>
    );
  }

  if (title.includes("Open Lab Day") || title.includes("School Students")) {
    return (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Classroom Board */}
        <rect x="40" y="30" width="160" height="90" rx="4" fill="none" stroke="var(--accent-teal)" strokeWidth="1.5" />
        {/* Stand */}
        <line x1="70" y1="120" x2="50" y2="150" stroke="var(--accent-teal)" strokeWidth="1.5" />
        <line x1="170" y1="120" x2="190" y2="150" stroke="var(--accent-teal)" strokeWidth="1.5" />
        
        {/* Schematic drawn on board (Zn-ion battery) */}
        <g transform="translate(120, 70)">
          <rect x="-30" y="-20" width="25" height="40" rx="1" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
          <rect x="5" y="-20" width="25" height="40" rx="1" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
          <text x="-17" y="5" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="var(--accent-blue)">Zn</text>
          <text x="12" y="5" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="var(--accent-blue)">H+</text>
          <path d="M -5,-5 Q 0,0 5,-5" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="2 1" />
        </g>
        
        {/* Outreach / Mentoring Icon */}
        <g transform="translate(120, 145)">
          <path d="M -20,5 Q 0,-5 20,5" fill="none" stroke="var(--accent-gold)" strokeWidth="2" />
          <circle cx="-10" cy="-8" r="2.5" fill="var(--accent-gold)" />
          <circle cx="10" cy="-8" r="2.5" fill="var(--accent-gold)" />
          <circle cx="0" cy="-15" r="3.5" fill="var(--accent-blue)" />
        </g>
      </svg>
    );
  }

  if (title.includes("Efficient Li-S") || title.includes("Bulk Utilization")) {
    return (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sulfur-core-recents" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-gold)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Beaker Outline */}
        <path d="M 80,40 L 80,50 L 90,50 L 90,130 Q 90,145 120,145 Q 150,145 150,130 L 150,50 L 160,50 L 160,40 Z" fill="none" stroke="var(--accent-blue)" strokeWidth="2" />
        {/* Liquid level */}
        <path d="M 91,80 Q 120,85 149,80 L 149,130 Q 149,143 120,143 Q 91,143 91,130 Z" fill="var(--accent-blue)" opacity="0.15" />
        
        {/* Bulk Sulfur crystals inside beaker */}
        <circle cx="120" cy="115" r="20" fill="url(#sulfur-core-recents)" />
        <g transform="translate(120, 115)">
          <polygon points="-8,-8 8,-8 12,8 -12,8" fill="var(--accent-gold)" opacity="0.8" />
          <polygon points="-4,-14 4,-14 8,-4 -8,-4" fill="var(--accent-gold)" opacity="0.6" />
          <circle cx="0" cy="5" r="3" fill="var(--accent-teal)" />
        </g>
        
        {/* Floating ions escaping */}
        <g transform="translate(70, 70)" opacity="0.8">
          <circle cx="0" cy="0" r="5" fill="var(--bg-primary)" stroke="var(--accent-teal)" strokeWidth="1" />
          <text x="0" y="1.5" fontFamily="monospace" fontSize="5" fill="var(--accent-teal)" textAnchor="middle">S</text>
        </g>
        <g transform="translate(170, 60)" opacity="0.8">
          <circle cx="0" cy="0" r="5" fill="var(--bg-primary)" stroke="var(--accent-teal)" strokeWidth="1" />
          <text x="0" y="1.5" fontFamily="monospace" fontSize="5" fill="var(--accent-teal)" textAnchor="middle">Li+</text>
        </g>
      </svg>
    );
  }

  if (title.includes("Li-S Battery Workshop") || title.includes("Fraunhofer")) {
    return (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Workshop poster board */}
        <rect x="60" y="30" width="120" height="120" rx="2" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
        
        {/* Poster Header */}
        <rect x="68" y="38" width="104" height="18" fill="var(--accent-blue)" opacity="0.2" />
        <line x1="74" y1="47" x2="166" y2="47" stroke="var(--accent-blue)" strokeWidth="2.5" />
        
        {/* Poster Body Columns */}
        <rect x="68" y="62" width="48" height="78" fill="none" stroke="var(--accent-teal)" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="124" y="62" width="48" height="78" fill="none" stroke="var(--accent-teal)" strokeWidth="1" strokeDasharray="2 2" />
        
        {/* Miniature diagrams inside columns */}
        <circle cx="92" cy="85" r="12" fill="none" stroke="var(--accent-gold)" strokeWidth="1" />
        <line x1="92" y1="73" x2="92" y2="97" stroke="var(--accent-gold)" strokeWidth="1" />
        <line x1="80" y1="85" x2="104" y2="85" stroke="var(--accent-gold)" strokeWidth="1" />
        
        <line x1="132" y1="80" x2="164" y2="80" stroke="var(--accent-blue)" strokeWidth="1" />
        <line x1="132" y1="90" x2="164" y2="90" stroke="var(--accent-blue)" strokeWidth="1" />
        <line x1="132" y1="100" x2="164" y2="100" stroke="var(--accent-blue)" strokeWidth="1" />
        
        {/* Award Badge corner */}
        <polygon points="175,25 185,45 165,45" fill="var(--accent-gold)" />
        <circle cx="175" cy="40" r="5" fill="var(--accent-gold)" />
      </svg>
    );
  }

  if (title.includes("SWAXS") || title.includes("Pipeline") || title.includes("Open Source")) {
    return (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Code window panel */}
        <rect x="40" y="30" width="160" height="120" rx="4" fill="var(--bg-secondary)" stroke="var(--accent-teal)" strokeWidth="1.5" />
        {/* Window header */}
        <line x1="40" y1="52" x2="200" y2="52" stroke="var(--accent-teal)" strokeWidth="1.5" />
        <circle cx="52" cy="41" r="3" fill="var(--accent-rose)" />
        <circle cx="62" cy="41" r="3" fill="var(--accent-gold)" />
        <circle cx="72" cy="41" r="3" fill="var(--accent-teal)" />
        
        {/* Python tag */}
        <text x="180" y="44" fontFamily="monospace" fontSize="8" fill="var(--accent-blue)" textAnchor="end" fontWeight="bold">main.py</text>
        
        {/* Code lines */}
        <g transform="translate(52, 63)" fill="none" strokeWidth="2" strokeLinecap="round">
          <line x1="0" y1="5" x2="35" y2="5" stroke="var(--accent-rose)" />
          <line x1="42" y1="5" x2="80" y2="5" stroke="var(--accent-blue)" />
          
          <line x1="10" y1="20" x2="60" y2="20" stroke="var(--accent-teal)" />
          <line x1="67" y1="20" x2="105" y2="20" stroke="var(--accent-gold)" />
          
          <line x1="10" y1="35" x2="45" y2="35" stroke="var(--accent-blue)" />
          
          <line x1="0" y1="50" x2="25" y2="50" stroke="var(--accent-rose)" />
          <line x1="32" y1="50" x2="90" y2="50" stroke="var(--accent-teal)" />
        </g>
        
        {/* Miniature SWAXS rings in background */}
        <g transform="translate(160, 115)" opacity="0.7">
          <circle r="12" fill="none" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="2 2" />
          <circle r="20" fill="none" stroke="var(--accent-gold)" strokeWidth="1.2" strokeDasharray="4 2" />
          <line x1="-25" y1="0" x2="25" y2="0" stroke="var(--accent-gold)" strokeWidth="0.8" strokeDasharray="1 3" />
          <line x1="0" y1="-25" x2="0" y2="25" stroke="var(--accent-gold)" strokeWidth="0.8" strokeDasharray="1 3" />
        </g>
      </svg>
    );
  }

  // 2. Fallbacks based on activity type (renders automatically for new/unrecognized activities)
  switch (type) {
    case 'conference':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="30" width="160" height="100" rx="3" fill="none" stroke={color} strokeWidth="1.5" />
          <line x1="55" y1="50" x2="185" y2="50" stroke={color} strokeWidth="1.5" />
          <line x1="55" y1="70" x2="140" y2="70" stroke={secondaryColor} strokeWidth="1.5" />
          <line x1="55" y1="90" x2="160" y2="90" stroke={secondaryColor} strokeWidth="1.5" />
          <polygon points="175,70 185,85 165,85" fill="var(--accent-gold)" />
          <circle cx="175" cy="80" r="4" fill="var(--accent-gold)" />
        </svg>
      );
    case 'project':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="90" r="40" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="120" cy="90" r="25" fill="none" stroke={secondaryColor} strokeWidth="1.5" />
          <line x1="60" y1="90" x2="180" y2="90" stroke={color} strokeWidth="1.5" />
          <line x1="120" y1="30" x2="120" y2="150" stroke={color} strokeWidth="1.5" />
        </svg>
      );
    case 'workshop':
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="40" width="120" height="90" rx="2" fill="none" stroke={color} strokeWidth="1.5" />
          <line x1="80" y1="65" x2="160" y2="65" stroke={secondaryColor} strokeWidth="2" />
          <line x1="80" y1="85" x2="140" y2="85" stroke={color} strokeWidth="1.5" />
          <line x1="80" y1="105" x2="150" y2="105" stroke={color} strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="90" r="20" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="140" cy="90" r="20" fill="none" stroke={secondaryColor} strokeWidth="1.5" />
          <path d="M 120,70 L 120,110" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      );
  }
};

const RecentsPage: React.FC = () => {
  const rowHeight = 380;

  const serpentinePath = React.useMemo(() => {
    let path = 'M 576,0';
    for (let k = 0; k < recentActivities.length; k++) {
      const yStart = k * rowHeight;
      const yEnd = (k + 1) * rowHeight;
      if (k % 2 === 0) {
        path += ` C 576,${yStart + 150} 150,${yStart + 220} 576,${yEnd}`;
      } else {
        path += ` C 1002,${yStart + 160} 576,${yStart + 220} 576,${yEnd}`;
      }
    }
    return path;
  }, []);

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'conference': return <Share2 size={16} className="text-accent-blue" />;
      case 'project': return <Code size={16} className="text-accent-teal" />;
      case 'workshop': return <Flame size={16} className="text-accent-gold" />;
      case 'award': return <Award size={16} className="text-accent-gold" />;
      default: return <Users size={16} className="text-accent-blue" />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white relative overflow-hidden">
      <SEO 
        title="Recent Activity Timeline – Pronoy Dutta" 
        description="Chronological log of academic conferences, synchrotron beamtime campaigns, workshops, and open lab outreach events by researcher Pronoy Dutta." 
      />
      {/* ── Hero ── */}
      <section className="hero-mesh py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Recent Activities
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed">
            Chronological logging of conference talks, beamtime campaigns, workshops, and lab updates.
          </p>
        </div>
      </section>

      {/* ── Serpentine Timeline Section ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Serpentine Dotted Path SVG (Visible on large screens) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 hidden lg:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-glow-recents" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="var(--accent-teal)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d={serpentinePath}
              fill="none"
              stroke="url(#line-glow-recents)"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
          </svg>
        </div>

        {/* Straight Vertical Line (Visible on mobile/tablet) */}
        <div className="absolute top-0 bottom-0 left-8 sm:left-12 w-0.5 border-l-2 border-dashed border-dark-700/60 z-0 lg:hidden"></div>

        {/* Cards Stack */}
        <div className="space-y-24 lg:space-y-0 relative z-10">
          {recentActivities.map((activity, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:h-[380px] ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* 1. Details Card */}
                <div className="w-full lg:w-1/2 flex justify-end pl-12 lg:pl-0">
                  <div className="glass-card accent-border-left p-8 w-full max-w-xl hover:-translate-y-1 transition-transform duration-300">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="pill flex items-center gap-1.5 bg-dark-800/40">
                        <Calendar size={12} className="text-accent-blue" />
                        {activity.date}
                      </span>
                      <span className="pill flex items-center gap-1.5 bg-dark-800/40">
                        <MapPin size={12} className="text-accent-teal" />
                        {activity.organization}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-dark-50 mb-3 leading-snug flex items-center gap-2.5">
                      {getActivityIcon(activity.type)}
                      {activity.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-200 text-sm md:text-base leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {/* 2. Timeline Node Anchor Circle with SAXS Scattering Rings (Desktop only) */}
                <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-dark-900 border-4 border-dark-950 relative z-20 overflow-visible">
                  <svg className="w-14 h-14 overflow-visible absolute" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                    {/* SAXS/SANS Concentric Scattering Loops */}
                    <circle cx="28" cy="28" r="24" fill="none" stroke={isEven ? "var(--accent-blue)" : "var(--accent-teal)"} strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
                    <circle cx="28" cy="28" r="17" fill="none" stroke={isEven ? "var(--accent-blue)" : "var(--accent-teal)"} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
                    <circle cx="28" cy="28" r="10" fill="none" stroke={isEven ? "var(--accent-blue)" : "var(--accent-teal)"} strokeWidth="1.5" strokeDasharray="4 2" opacity="0.8" />
                    {/* Beam Center Dot */}
                    <circle cx="28" cy="28" r="3.5" fill={isEven ? "var(--accent-blue)" : "var(--accent-teal)"} />
                  </svg>
                </div>

                {/* 3. Abstract Illustration */}
                <div className="w-full lg:w-1/2 flex items-center justify-center pl-12 lg:pl-0">
                  <div className="glass-card border border-dark-800/40 p-6 w-full max-w-sm aspect-video flex items-center justify-center bg-dark-950/30 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 to-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-full h-full relative z-10 flex items-center justify-center">
                      {renderActivityGraphic(activity.title, activity.type, isEven)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Footer Link ── */}
      <footer className="border-t border-dark-800/50 py-16 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-dark-400 text-sm mb-6">
            View details on academic milestones and qualifications
          </p>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue/15 text-accent-blue border border-accent-blue/35 hover:bg-accent-blue/25 transition-colors font-semibold"
          >
            Explore Full Experience
            <ArrowRight size={18} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default RecentsPage;
