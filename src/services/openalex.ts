// ORCID + OpenAlex hybrid service for fetching publications
// Primary source: ORCID (the user's curated list)
// Enrichment: OpenAlex (for citation counts, full author lists, open access status)

const ORCID_ID = '0000-0001-9153-3395';
const OPENALEX_AUTHOR_ID = 'A5072999129';
const ORCID_API = 'https://pub.orcid.org/v3.0';
const OPENALEX_API = 'https://api.openalex.org';

export interface PublicationFromAPI {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  link: string | null;
  doi: string | null;
  type: 'journal' | 'conference' | 'preprint' | 'book' | 'other';
  citedByCount: number;
  isOpenAccess: boolean;
  isFirstAuthor: boolean;
  isCorresponding: boolean;
}

export interface AuthorStats {
  totalWorks: number;
  totalCitations: number;
  hIndex: number;
  i10Index: number;
  orcid: string;
}

// ── ORCID: Fetch the user's work list ──

interface OrcidWorkGroup {
  title: string;
  doi: string | null;
  year: string;
  journalTitle: string;
  type: string;
  url: string | null;
}

async function fetchOrcidWorks(): Promise<OrcidWorkGroup[]> {
  const response = await fetch(`${ORCID_API}/${ORCID_ID}/works`, {
    headers: { 'Accept': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`ORCID API error: ${response.status}`);
  }

  const data = await response.json();
  const works: OrcidWorkGroup[] = [];

  for (const group of data.group || []) {
    // Each group may contain duplicate entries from different sources
    // Pick the first work-summary with the best data
    const summaries = group['work-summary'] || [];
    if (summaries.length === 0) continue;

    // Prefer Crossref entries, then any with DOI
    const preferred = summaries.find((s: any) => s.source?.['source-name']?.value === 'Crossref')
      || summaries[0];

    const title = preferred.title?.title?.value || 'Untitled';

    // Extract DOI from external IDs
    let doi: string | null = null;
    const groupExternalIds = group['external-ids']?.['external-id'] || [];
    for (const eid of groupExternalIds) {
      if (eid['external-id-type'] === 'doi') {
        doi = eid['external-id-value']?.toLowerCase() || null;
        break;
      }
    }

    const year = preferred['publication-date']?.year?.value || 'Unknown';
    const journalTitle = preferred['journal-title']?.value || '';
    const type = preferred.type || 'journal-article';
    const url = preferred.url?.value || (doi ? `https://doi.org/${doi}` : null);

    works.push({ title, doi, year, journalTitle, type, url });
  }

  return works;
}

// ── OpenAlex: Enrich with citation counts + author lists ──

interface OpenAlexEnrichment {
  authors: string[];
  citedByCount: number;
  isOpenAccess: boolean;
  isFirstAuthor: boolean;
  isCorresponding: boolean;
  venue: string;
}

async function fetchOpenAlexEnrichments(dois: string[]): Promise<Map<string, OpenAlexEnrichment>> {
  const enrichments = new Map<string, OpenAlexEnrichment>();
  if (dois.length === 0) return enrichments;

  // OpenAlex supports filtering by DOI with pipe-separated values
  // Process in batches of 25 (API limit for OR filters)
  const batchSize = 25;
  for (let i = 0; i < dois.length; i += batchSize) {
    const batch = dois.slice(i, i + batchSize);
    const doiFilter = batch.map(d => `https://doi.org/${d}`).join('|');
    const url = `${OPENALEX_API}/works?filter=doi:${doiFilter}&select=doi,authorships,cited_by_count,primary_location&per_page=50&mailto=contactpronoy@gmail.com`;

    try {
      const response = await fetch(url);
      if (!response.ok) continue;

      const data = await response.json();
      for (const work of data.results || []) {
        const workDoi = work.doi?.replace('https://doi.org/', '').toLowerCase();
        if (!workDoi) continue;

        const authorships = work.authorships || [];
        const myAuthorship = authorships.find(
          (a: any) => a.author?.id === `https://openalex.org/${OPENALEX_AUTHOR_ID}`
        );

        const authors = authorships.map((a: any) => a.author?.display_name || 'Unknown');
        const maxAuthors = 5;
        const formattedAuthors = authors.length <= maxAuthors
          ? authors
          : [...authors.slice(0, maxAuthors - 1), 'et al.'];

        enrichments.set(workDoi, {
          authors: formattedAuthors,
          citedByCount: work.cited_by_count || 0,
          isOpenAccess: work.primary_location?.is_oa || false,
          isFirstAuthor: myAuthorship?.author_position === 'first',
          isCorresponding: myAuthorship?.is_corresponding || false,
          venue: work.primary_location?.source?.display_name || '',
        });
      }
    } catch {
      // Silent fail on enrichment — ORCID data still works standalone
    }
  }

  return enrichments;
}

// ── OpenAlex: Fetch author stats ──

export async function fetchAuthorStats(): Promise<AuthorStats> {
  const url = `${OPENALEX_API}/authors/${OPENALEX_AUTHOR_ID}?select=works_count,cited_by_count,summary_stats&mailto=contactpronoy@gmail.com`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`OpenAlex API error: ${response.status}`);

    const data = await response.json();
    return {
      totalWorks: data.works_count,
      totalCitations: data.cited_by_count,
      hIndex: data.summary_stats?.h_index || 0,
      i10Index: data.summary_stats?.i10_index || 0,
      orcid: ORCID_ID,
    };
  } catch {
    // Fallback: return basic stats
    return {
      totalWorks: 0,
      totalCitations: 0,
      hIndex: 0,
      i10Index: 0,
      orcid: ORCID_ID,
    };
  }
}

// ── Main: Fetch + Enrich ──

function mapWorkType(type: string): PublicationFromAPI['type'] {
  switch (type) {
    case 'journal-article':
    case 'review':
      return 'journal';
    case 'conference-paper':
    case 'proceedings-article':
      return 'conference';
    case 'preprint':
    case 'posted-content':
      return 'preprint';
    case 'book':
    case 'book-chapter':
      return 'book';
    default:
      return 'other';
  }
}

export async function fetchPublications(): Promise<PublicationFromAPI[]> {
  // 1. Get works list from ORCID
  const orcidWorks = await fetchOrcidWorks();

  // 2. Collect DOIs for enrichment
  const dois = orcidWorks
    .map(w => w.doi)
    .filter((d): d is string => d !== null);

  // 3. Enrich with OpenAlex data (citations, authors, OA status)
  const enrichments = await fetchOpenAlexEnrichments(dois);

  // 4. Merge and transform
  const publications: PublicationFromAPI[] = orcidWorks.map((work, index) => {
    const enrichment = work.doi ? enrichments.get(work.doi) : undefined;

    return {
      id: work.doi || `orcid-work-${index}`,
      title: work.title,
      authors: enrichment?.authors || [],
      venue: enrichment?.venue || work.journalTitle || 'Unknown Venue',
      year: work.year,
      link: work.url,
      doi: work.doi,
      type: mapWorkType(work.type),
      citedByCount: enrichment?.citedByCount || 0,
      isOpenAccess: enrichment?.isOpenAccess || false,
      isFirstAuthor: enrichment?.isFirstAuthor || false,
      isCorresponding: enrichment?.isCorresponding || false,
    };
  });

  // Sort by year descending, then by citations descending
  publications.sort((a, b) => {
    const yearDiff = parseInt(b.year) - parseInt(a.year);
    if (yearDiff !== 0) return yearDiff;
    return b.citedByCount - a.citedByCount;
  });

  return publications;
}
