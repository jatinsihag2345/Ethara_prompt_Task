import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import { useSearch } from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';

const SearchResults = () => {
  const { searchQuery } = useMovieContext();
  const { results, loading } = useSearch(searchQuery);

  return (
    <div style={{ padding: '32px 40px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '28px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '6px',
        }}>
          Search Results
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300' }}>
          {loading ? 'Searching…' : results.length > 0 ? `${results.length} results for "${searchQuery}"` : `No results for "${searchQuery}"`}
        </p>
      </div>

      {/* Loading skeletons */}
      {loading && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="skeleton" style={{ width: '180px', height: '270px', borderRadius: 'var(--radius-md)' }} />
          ))}
        </div>
      )}

      {/* Results grid */}
      {!loading && results.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          {results.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && results.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '80px 20px',
          color: 'var(--text-muted)',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎬</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            No films found
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300' }}>
            Try a different title or browse our collections below.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
