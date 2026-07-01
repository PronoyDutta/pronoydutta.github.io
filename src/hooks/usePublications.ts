import { useState, useEffect } from 'react';
import { fetchPublications, fetchAuthorStats, PublicationFromAPI, AuthorStats } from '../services/openalex';

interface UsePublicationsReturn {
  publications: PublicationFromAPI[];
  stats: AuthorStats | null;
  isLoading: boolean;
  error: string | null;
}

const CACHE_KEY = 'openalex_publications';
const STATS_CACHE_KEY = 'openalex_stats';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface CachedData<T> {
  data: T;
  timestamp: number;
}

function getFromCache<T>(key: string): T | null {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    const parsed: CachedData<T> = JSON.parse(cached);
    if (Date.now() - parsed.timestamp > CACHE_DURATION) {
      localStorage.removeItem(key);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

function setCache<T>(key: string, data: T): void {
  try {
    const cacheEntry: CachedData<T> = { data, timestamp: Date.now() };
    localStorage.setItem(key, JSON.stringify(cacheEntry));
  } catch {
    // localStorage might be full or unavailable
  }
}

export function usePublications(): UsePublicationsReturn {
  const [publications, setPublications] = useState<PublicationFromAPI[]>([]);
  const [stats, setStats] = useState<AuthorStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      // Try cache first
      const cachedPubs = getFromCache<PublicationFromAPI[]>(CACHE_KEY);
      const cachedStats = getFromCache<AuthorStats>(STATS_CACHE_KEY);

      if (cachedPubs && cachedStats) {
        setPublications(cachedPubs);
        setStats(cachedStats);
        setIsLoading(false);
        // Still refresh in background
        refreshInBackground();
        return;
      }

      // Fetch fresh data
      try {
        const [pubs, authorStats] = await Promise.all([
          fetchPublications(),
          fetchAuthorStats(),
        ]);

        if (!cancelled) {
          setPublications(pubs);
          setStats(authorStats);
          setCache(CACHE_KEY, pubs);
          setCache(STATS_CACHE_KEY, authorStats);
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load publications');
          setIsLoading(false);
        }
      }
    }

    async function refreshInBackground() {
      try {
        const [pubs, authorStats] = await Promise.all([
          fetchPublications(),
          fetchAuthorStats(),
        ]);
        if (!cancelled) {
          setPublications(pubs);
          setStats(authorStats);
          setCache(CACHE_KEY, pubs);
          setCache(STATS_CACHE_KEY, authorStats);
        }
      } catch {
        // Silent fail on background refresh
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, []);

  return { publications, stats, isLoading, error };
}
