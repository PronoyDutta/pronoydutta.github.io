import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Section from '../components/Section';
import ActivityCard from '../components/ActivityCard';
import PublicationCard from '../components/PublicationCard';
import EducationCard from '../components/EducationCard';
import SkillsSection from '../components/SkillsSection';
import SEO from '../components/SEO';
import { usePublications } from '../hooks/usePublications';
import {
  personalInfo,
  recentActivities,
  education,
  skills
} from '../data/cv-data';
import { ArrowRight, Loader2 } from 'lucide-react';

const CVPage: React.FC = () => {
  const { publications, isLoading } = usePublications();

  const featuredPublications = publications
    .filter((pub) => pub.isFirstAuthor)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-dark-950">
      <SEO 
        title="Pronoy Dutta – Battery Researcher" 
        description="Official portfolio of Dr. Pronoy Dutta, Postdoctoral Researcher at the University of Salzburg. Expert in Li-S solid-state batteries, cryo-TEM, and small-angle scattering (SWAXS)." 
      />
      <Header personalInfo={personalInfo} />

      {/* ── Research Highlights ── */}
      <Section title="Research Highlights" className="section-dark-alt">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <Loader2 size={32} className="text-accent-blue animate-spin" />
            <p className="text-dark-400 text-sm">
              Loading publications from OpenAlex…
            </p>
          </div>
        ) : (
          <>
            {featuredPublications.length > 0 && (
              <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                {featuredPublications.map((publication) => (
                  <PublicationCard
                    key={publication.id}
                    publication={publication}
                  />
                ))}
              </div>
            )}

            <div className="text-center mt-8">
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/20 hover:bg-accent-blue/20 transition-colors font-medium"
              >
                View all publications
                <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </Section>

      {/* ── Recent Activities ── */}
      <Section title="Recent Activities" className="section-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentActivities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/recents"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/20 hover:bg-accent-blue/20 transition-colors font-medium"
          >
            Explore recent activity timeline
            <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* ── Education ── */}
      <Section title="Education" className="section-dark-alt">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/20 hover:bg-accent-blue/20 transition-colors font-medium"
          >
            View full experience
            <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* ── Skills ── */}
      <Section title="Skills" className="section-dark">
        <SkillsSection skills={skills} />
      </Section>

      {/* ── Footer ── */}
      <footer className="border-t border-dark-800/50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-dark-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CVPage;