import React from 'react';
import { FileText, Loader2, Award, TrendingUp } from 'lucide-react';
import { usePublications } from '../hooks/usePublications';
import PublicationCard from '../components/PublicationCard';
import SEO from '../components/SEO';

const PublicationsPage: React.FC = () => {
  const { publications, stats, isLoading, error } = usePublications();

  const firstAuthorPubs = publications.filter((p) => p.isFirstAuthor);
  const coAuthoredPubs = publications.filter((p) => !p.isFirstAuthor);

  /* ── Loading state ── */
  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-950 flex flex-col items-center justify-center gap-4">
        <Loader2 size={40} className="text-accent-blue animate-spin" />
        <p className="text-dark-300 text-lg">Loading publications…</p>
      </div>
    );
  }

  /* ── Error state ── */
  if (error) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center px-4">
        <div className="glass-card max-w-lg w-full p-8 text-center">
          <FileText size={36} className="text-accent-rose mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-dark-50 mb-2">
            Failed to load publications
          </h2>
          <p className="text-dark-400 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <SEO 
        title="Publications – Pronoy Dutta" 
        description="Browse the complete, peer-reviewed list of journals and publications by Dr. Pronoy Dutta, compiled dynamically from ORCID & enriched by OpenAlex." 
      />
      {/* ── Hero ── */}
      <section className="hero-mesh py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Publications
          </h1>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Complete list of peer-reviewed publications.
          </p>

          {stats && (
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 fade-in-up-delay-1">
              {/* Total works */}
              <div className="flex items-center gap-2 text-accent-blue">
                <FileText size={18} />
                <span className="text-lg font-semibold">{stats.totalWorks}</span>
                <span className="text-dark-400 text-sm">works</span>
              </div>

              {/* h-index */}
              {stats.hIndex > 0 && (
                <div className="flex items-center gap-2 text-accent-gold">
                  <Award size={18} />
                  <span className="text-lg font-semibold">{stats.hIndex}</span>
                  <span className="text-dark-400 text-sm">h-index</span>
                </div>
              )}

              {/* i10-index */}
              {stats.i10Index > 0 && (
                <div className="flex items-center gap-2 text-accent-teal">
                  <TrendingUp size={18} />
                  <span className="text-lg font-semibold">{stats.i10Index}</span>
                  <span className="text-dark-400 text-sm">i10-index</span>
                </div>
              )}

              {/* ORCID link */}
              <a
                href={`https://orcid.org/${stats.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pill"
              >
                View ORCID Profile
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── Publications List ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-dark-400 mb-8">
          Showing {publications.length} publications
        </p>

        {publications.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <FileText size={32} className="text-dark-500 mx-auto mb-4" />
            <p className="text-dark-300">No publications found.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {/* ── First-Author Section ── */}
            {firstAuthorPubs.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-accent-gold border-b border-dark-800/45 pb-3 mb-6">
                  First-Author Publications ({firstAuthorPubs.length})
                </h2>
                <div className="flex flex-col gap-8">
                  {firstAuthorPubs.map((pub) => (
                    <PublicationCard key={pub.id} publication={pub} />
                  ))}
                </div>
              </div>
            )}

            {/* ── Co-authored Section ── */}
            {coAuthoredPubs.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-accent-blue border-b border-dark-800/45 pb-3 mb-6 mt-4">
                  Co-Authored & Other Publications ({coAuthoredPubs.length})
                </h2>
                <div className="flex flex-col gap-8">
                  {coAuthoredPubs.map((pub) => (
                    <PublicationCard key={pub.id} publication={pub} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default PublicationsPage;
