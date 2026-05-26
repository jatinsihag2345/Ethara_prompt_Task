import React from 'react';
import { useMovieContext } from '../context/MovieContext';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'trending', label: 'Trending' },
  { id: 'popular', label: 'Popular' },
  { id: 'top_rated', label: 'Top Rated' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'action', label: 'Action' },
  { id: 'scifi', label: 'Sci-Fi' },
  { id: 'horror', label: 'Horror' },
  { id: 'drama', label: 'Drama' },
  { id: 'comedy', label: 'Comedy' },
  { id: 'thriller', label: 'Thriller' },
];

const CategoryFilter = () => {
  const { activeCategory, setActiveCategory } = useMovieContext();

  return (
    <div style={{
      position: 'sticky',
      top: '70px',
      zIndex: 100,
      background: 'rgba(5,5,5,0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0 40px',
    }}>
      <div style={{
        display: 'flex',
        gap: '4px',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        padding: '10px 0',
      }}>
        {CATEGORIES.map(cat => {
          const active = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                flexShrink: 0,
                background: active ? 'rgba(232,201,122,0.15)' : 'none',
                border: `1px solid ${active ? 'rgba(232,201,122,0.4)' : 'transparent'}`,
                borderRadius: '20px',
                padding: '6px 16px',
                color: active ? 'var(--accent-gold)' : 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: active ? '500' : '400',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.2px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'none'; } }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
