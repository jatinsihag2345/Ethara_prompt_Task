import { useState, useEffect } from 'react';
import { useMovieContext } from '../context/MovieContext';
import {
  getTrending, getPopular, getTopRated,
  getUpcoming, getNowPlaying, searchMovies, getMovieDetails,
} from '../services/movieAPI';

const useMovieList = (fetcher) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetcher().then(data => {
      if (!cancelled) {
        setMovies(data || []);
        setLoading(false);
      }
    }).catch(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, []); // eslint-disable-line

  return { movies, loading };
};

export const useTrending = () => useMovieList(getTrending);
export const usePopular = () => useMovieList(getPopular);
export const useTopRated = () => useMovieList(getTopRated);
export const useUpcoming = () => useMovieList(getUpcoming);
export const useNowPlaying = () => useMovieList(getNowPlaying);

export const useSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query?.trim()) { setResults([]); return; }
    let cancelled = false;
    setLoading(true);
    searchMovies(query).then(data => {
      if (!cancelled) { setResults(data || []); setLoading(false); }
    }).catch(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, [query]);

  return { results, loading };
};

export const useMovieDetails = (id) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) { setDetails(null); return; }
    let cancelled = false;
    setLoading(true);
    setDetails(null);
    getMovieDetails(id).then(data => {
      if (!cancelled) { setDetails(data); setLoading(false); }
    }).catch(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, [id]);

  return { details, loading };
};

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return { scrolled };
};
