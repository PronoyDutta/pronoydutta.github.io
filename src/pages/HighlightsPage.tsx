import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar } from 'lucide-react';
import SEO from '../components/SEO';

interface HighlightPaper {
  id: string;
  title: string;
  year: string;
  venue: string;
  link: string;
  summary: string;
  highlights: string[];
  renderAbstract: () => React.JSX.Element;
}

const HIGHLIGHT_PAPERS: HighlightPaper[] = [
  {
    id: 'li-s-conversion',
    title: 'Bridging Solution and Solid-State Mechanism: Confined Quasi-Solid-State Conversion in Li–S Batteries',
    year: '2025',
    venue: 'ACS Energy Letters',
    link: 'https://doi.org/10.1021/acsenergylett.5c02093',
    summary: 'Bridged conventional solution-phase reaction dynamics and rigid solid-state interfaces, demonstrating that spatial confinement can enforce high-rate quasi-solid-state conversion.',
    highlights: [
      'Discovered that spatial confinement alters polysulfide dissolution rates.',
      'Achieved stable high-rate charging without dissolution bottlenecks.',
      'Mapped charge transfer kinetics at solid-state interfaces using cryo-techniques.'
    ],
    renderAbstract: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="pore-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Pore Carbon Lattice */}
        <circle cx="120" cy="90" r="60" fill="url(#pore-glow)" stroke="var(--accent-blue)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        {/* Confined Sulfur cluster */}
        <g transform="translate(120, 90)">
          <polygon points="0,-20 17,-10 17,10 0,20 -17,10 -17,-10" fill="none" stroke="var(--accent-teal)" strokeWidth="2" />
          <circle cx="0" cy="-20" r="4" fill="var(--accent-teal)" />
          <circle cx="17" cy="-10" r="4" fill="var(--accent-teal)" />
          <circle cx="17" cy="10" r="4" fill="var(--accent-teal)" />
          <circle cx="0" cy="20" r="4" fill="var(--accent-teal)" />
          <circle cx="-17" cy="10" r="4" fill="var(--accent-teal)" />
          <circle cx="-17" cy="-10" r="4" fill="var(--accent-teal)" />
        </g>
        {/* Approaching Lithium Ions */}
        <g transform="translate(55, 60)">
          <circle r="8" fill="var(--bg-primary)" stroke="var(--accent-blue)" strokeWidth="1.5" />
          <text x="0" y="2.5" fontFamily="monospace" fontSize="7" fontWeight="bold" fill="var(--accent-blue)" textAnchor="middle">Li+</text>
          <line x1="12" y1="12" x2="25" y2="25" stroke="var(--accent-blue)" strokeWidth="1" strokeDasharray="2 2" />
        </g>
        <g transform="translate(185, 120)">
          <circle r="8" fill="var(--bg-primary)" stroke="var(--accent-blue)" strokeWidth="1.5" />
          <text x="0" y="2.5" fontFamily="monospace" fontSize="7" fontWeight="bold" fill="var(--accent-blue)" textAnchor="middle">Li+</text>
          <line x1="-12" y1="-12" x2="-25" y2="-25" stroke="var(--accent-blue)" strokeWidth="1" strokeDasharray="2 2" />
        </g>
      </svg>
    )
  },
  {
    id: 'cryo-tem-ml',
    title: 'Unraveling Multiphase Conversion Pathways in Lithium–Sulfur Batteries through Cryo Transmission Electron Microscopy and Machine Learning-Assisted Operando Neutron Scattering',
    year: '2025',
    venue: 'ACS Nano',
    link: 'https://doi.org/10.1021/acsnano.5c00536',
    summary: 'Mapped phase boundaries and intermediate polysulfide conversions in real-time, combining molecular-scale Cryo-TEM and macro-scale operando neutron scattering.',
    highlights: [
      'First to combine Cryo-TEM molecular profiling with neutron scattering.',
      'Utilized machine learning algorithms to reconstruct noisy operando scattering graphs.',
      'Identified metastable transient phases controlling charge storage capacity.'
    ],
    renderAbstract: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="beam-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-teal)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent-teal)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Electron Microscope Beam */}
        <polygon points="120,20 80,130 160,130" fill="url(#beam-grad)" />
        {/* Grid Lattice */}
        <g transform="translate(120, 130)">
          <line x1="-50" y1="0" x2="50" y2="0" stroke="var(--accent-blue)" strokeWidth="1.5" opacity="0.7" />
          <line x1="-40" y1="-15" x2="40" y2="-15" stroke="var(--accent-blue)" strokeWidth="1" opacity="0.4" />
          <line x1="-40" y1="15" x2="40" y2="15" stroke="var(--accent-blue)" strokeWidth="1" opacity="0.4" />
          <line x1="0" y1="-25" x2="0" y2="25" stroke="var(--accent-blue)" strokeWidth="1.5" opacity="0.7" />
          <line x1="-20" y1="-25" x2="-20" y2="25" stroke="var(--accent-blue)" strokeWidth="1" opacity="0.4" />
          <line x1="20" y1="-25" x2="20" y2="25" stroke="var(--accent-blue)" strokeWidth="1" opacity="0.4" />
        </g>
        {/* Scattered Waves / ML Pattern */}
        <path d="M 50,60 Q 80,40 120,60 T 190,60" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="120" cy="60" r="4" fill="var(--accent-gold)" />
      </svg>
    )
  },
  {
    id: 'mxene-channels',
    title: 'Activating Ion Channels in Collapsed Hydrogel Derived Densified MXene Films with Cellulose Nanofibers to Overcome the Areal Versus Volumetric Capacitance Trade-Off',
    year: '2024',
    venue: 'Small',
    link: 'https://doi.org/10.1002/smll.202401676',
    summary: 'Activated nested ion channels inside highly densified MXene films by incorporating cellulose nanofibers, resolving the trade-off between areal and volumetric energy storage capacity.',
    highlights: [
      'Engineered open microchannels within a collapsed hydrogel precursor framework.',
      'Achieved simultaneous optimization of areal, volumetric, and gravimetric capacitance.',
      'Maintained rapid ion diffusion paths even under high mass loading conditions.'
    ],
    renderAbstract: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fiber-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-teal)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Densified MXene Layers */}
        <g stroke="var(--accent-blue)" strokeWidth="2" opacity="0.4">
          <line x1="30" y1="40" x2="210" y2="40" />
          <line x1="30" y1="55" x2="210" y2="55" />
          <line x1="30" y1="70" x2="210" y2="70" />
          <line x1="30" y1="110" x2="210" y2="110" />
          <line x1="30" y1="125" x2="210" y2="125" />
          <line x1="30" y1="140" x2="210" y2="140" />
        </g>
        {/* Cellulose Nanofibers forming channels */}
        <path d="M 70,30 Q 80,90 75,150" fill="none" stroke="url(#fiber-grad)" strokeWidth="3.5" />
        <path d="M 170,30 Q 160,90 165,150" fill="none" stroke="url(#fiber-grad)" strokeWidth="3.5" />
        {/* Migrating Ions inside channels */}
        <g transform="translate(77, 85)">
          <circle r="6" fill="var(--bg-primary)" stroke="var(--accent-gold)" strokeWidth="1" />
          <text x="0" y="2" fontFamily="monospace" fontSize="5" fontWeight="bold" fill="var(--accent-gold)" textAnchor="middle">Li+</text>
        </g>
        <g transform="translate(163, 100)">
          <circle r="6" fill="var(--bg-primary)" stroke="var(--accent-gold)" strokeWidth="1" />
          <text x="0" y="2" fontFamily="monospace" fontSize="5" fontWeight="bold" fill="var(--accent-gold)" text-anchor="middle">Li+</text>
        </g>
      </svg>
    )
  },
  {
    id: 'mxene-assembly',
    title: 'Electric Field Guided Fast and Oriented Assembly of MXene',
    year: '2022',
    venue: 'Advanced Functional Materials',
    link: 'https://doi.org/10.1002/adfm.202203713',
    summary: 'Developed an external electric field strategy to guide the fast orientation of colloidal MXene sheets, producing alignment that maximizes ion transport rates.',
    highlights: [
      'Established voltage-dependent alignment models for MXene flakes.',
      'Increased vertical ionic conductivity by 12x through orientational control.',
      'Applied oriented films to supercapacitors, achieving ultra-high rate performance.'
    ],
    renderAbstract: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Electric Field lines */}
        <g stroke="var(--accent-blue)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
          <line x1="40" y1="20" x2="40" y2="160" />
          <line x1="90" y1="20" x2="90" y2="160" />
          <line x1="140" y1="20" x2="140" y2="160" />
          <line x1="190" y1="20" x2="190" y2="160" />
        </g>
        {/* Oriented MXene sheets */}
        <g transform="translate(0, -10)">
          <rect x="35" y="40" width="10" height="70" rx="3" fill="var(--accent-teal)" opacity="0.8" transform="rotate(-5, 40, 75)" />
          <rect x="85" y="60" width="10" height="70" rx="3" fill="var(--accent-teal)" opacity="0.8" transform="rotate(3, 90, 95)" />
          <rect x="135" y="30" width="10" height="75" rx="3" fill="var(--accent-teal)" opacity="0.8" transform="rotate(2, 140, 67)" />
          <rect x="185" y="55" width="10" height="70" rx="3" fill="var(--accent-teal)" opacity="0.8" transform="rotate(-3, 190, 90)" />
        </g>
        {/* Ion Pathways */}
        <path d="M 40,30 C 42,60 38,90 40,150" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" />
        <path d="M 140,20 C 138,60 142,100 140,160" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" />
      </svg>
    )
  },
  {
    id: 'graphene-gelation',
    title: 'Graphene Aided Gelation of MXene with Oxidation Protected Surface for Supercapacitor Electrodes with Excellent Gravimetric Performance',
    year: '2020',
    venue: 'Carbon',
    link: 'https://doi.org/10.1016/j.carbon.2020.07.037',
    summary: 'Developed an ambient temperature co-gelation method using small amounts of graphene to wrap and self-assemble MXene sheets, shielding active titanium sites from oxidation.',
    highlights: [
      'Discovered that graphene wrappers act as an oxidation barrier for MXene.',
      'Achieved self-assembled hybrid hydrogels with open porous architectures.',
      'Preserved highly active redox centers to deliver excellent gravimetric performance.'
    ],
    renderAbstract: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* MXene sheet */}
        <rect x="50" y="60" width="140" height="40" rx="3" fill="var(--accent-teal)" opacity="0.7" transform="rotate(-5, 120, 80)" />
        {/* Graphene Wrapper (Shield) */}
        <path d="M 40,90 Q 120,50 200,80" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeDasharray="3 3" />
        <path d="M 42,95 Q 120,55 200,85" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" />
        {/* Oxygen Attack Shielded */}
        <g transform="translate(100, 35)" opacity="0.6">
          <circle cx="0" cy="0" r="6" fill="none" stroke="var(--accent-rose)" strokeWidth="1.2" />
          <line x1="-3" y1="-3" x2="3" y2="3" stroke="var(--accent-rose)" strokeWidth="1.2" />
          <path d="M 0,10 L 0,22" stroke="var(--accent-rose)" strokeWidth="1.2" strokeDasharray="2 2" />
        </g>
        <g transform="translate(140, 135)" opacity="0.6">
          <circle cx="0" cy="0" r="6" fill="none" stroke="var(--accent-rose)" strokeWidth="1.2" />
          <line x1="-3" y1="-3" x2="3" y2="3" stroke="var(--accent-rose)" strokeWidth="1.2" />
          <path d="M 0,-10 L 0,-22" stroke="var(--accent-rose)" strokeWidth="1.2" strokeDasharray="2 2" />
        </g>
        {/* Protection text/badge */}
        <rect x="75" y="75" width="90" height="18" rx="2" fill="var(--bg-primary)" stroke="var(--accent-blue)" strokeWidth="1" />
        <text x="120" y="87" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="var(--accent-blue)" textAnchor="middle">OXIDATION SHIELD</text>
      </svg>
    )
  }
];

const HighlightsPage: React.FC = () => {
  const rowHeight = 380;

  const serpentinePath = React.useMemo(() => {
    let path = 'M 576,0';
    for (let k = 0; k < HIGHLIGHT_PAPERS.length; k++) {
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

  return (
    <div className="min-h-screen bg-dark-950 text-white relative overflow-hidden">
      <SEO 
        title="Research Highlights – Pronoy Dutta" 
        description="Explore the key research achievements of Dr. Pronoy Dutta. Features timelines and abstract art of Li-S conversion, cryo-TEM mapping, and MXene assembly." 
      />
      {/* ── Hero ── */}
      <section className="hero-mesh py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Research Highlights
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed">
            My journey in the research landscape.
          </p>
        </div>
      </section>

      {/* ── Serpentine Timeline Section ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Serpentine Dotted Path SVG (Visible on large screens) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 hidden lg:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="var(--accent-teal)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d={serpentinePath}
              fill="none"
              stroke="url(#line-glow)"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
          </svg>
        </div>

        {/* Straight Vertical Line (Visible on mobile/tablet) */}
        <div className="absolute top-0 bottom-0 left-8 sm:left-12 w-0.5 border-l-2 border-dashed border-dark-700/60 z-0 lg:hidden"></div>

        {/* Cards Stack */}
        <div className="space-y-24 lg:space-y-0 relative z-10">
          {HIGHLIGHT_PAPERS.map((paper, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={paper.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:h-[380px] ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* 1. Paper Details Card */}
                <div className="w-full lg:w-1/2 flex justify-end pl-12 lg:pl-0">
                  <div className="glass-card accent-border-left p-8 w-full max-w-xl hover:-translate-y-1 transition-transform duration-300">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="pill flex items-center gap-1">
                        <Calendar size={12} />
                        {paper.year}
                      </span>
                      <span className="text-sm font-semibold text-accent-teal">{paper.venue}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-dark-50 mb-3 leading-snug">
                      {paper.title}
                    </h3>

                    {/* Summary (2-3 lines highlight) */}
                    <p className="text-dark-200 text-sm md:text-base leading-relaxed mb-4">
                      {paper.summary}
                    </p>

                    {/* Core takeaways bullet list */}
                    <ul className="space-y-2 mb-6">
                      {paper.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-dark-400 flex items-start gap-2">
                          <span className="text-accent-blue font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue hover:text-accent-teal transition-colors"
                    >
                      View Source <ExternalLink size={14} />
                    </a>
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
                      {paper.renderAbstract()}
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
            Want to see the complete publications list?
          </p>
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue/15 text-accent-blue border border-accent-blue/35 hover:bg-accent-blue/25 transition-colors font-semibold"
          >
            View Complete Publications
            <ArrowRight size={18} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HighlightsPage;
