import React, { createContext, useContext, useState, useCallback } from 'react';

const MovieContext = createContext(null);

export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cineverse_watchlist') || '[]');
    } catch { return []; }
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const openMovie = useCallback((movie) => {
    setSelectedMovie(movie);
  }, []);

  const closeMovie = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  const toggleWatchlist = useCallback((movie) => {
    setWatchlist(prev => {
      const exists = prev.some(m => m.id === movie.id);
      const next = exists ? prev.filter(m => m.id !== movie.id) : [...prev, movie];
      try { localStorage.setItem('cineverse_watchlist', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const isInWatchlist = useCallback((id) => {
    return watchlist.some(m => m.id === id);
  }, [watchlist]);

  return (
    <MovieContext.Provider value={{
      selectedMovie, openMovie, closeMovie,
      watchlist, toggleWatchlist, isInWatchlist,
      searchQuery, setSearchQuery,
      activeCategory, setActiveCategory,
    }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const ctx = useContext(MovieContext);
  if (!ctx) throw new Error('useMovieContext must be used inside MovieProvider');
  return ctx;
};
