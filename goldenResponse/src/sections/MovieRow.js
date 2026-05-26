import React, { useRef } from 'react';
import MovieCard from '../components/MovieCard';

const MovieRow = ({ title, subtitle, movies = [], loading, size = 'md' }) => {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (!rowRef.current) return;
    const amount = dir === 'left' ? -600 : 600;
    rowRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '32px 0', position: 'relative' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '0 40px',
        marginBottom: '20px',
      }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: '700',
            color: 'var(--text-primary)',
            lineHeight: '1.1',
            marginBottom: '4px',
          }}>{title}</h2>
          {subtitle && (
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--text-muted)',
              fontWeight: '300',
            }}>{subtitle}</p>
          )}
        </div>

        {/* Scroll buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {['left', 'right'].map(dir => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              aria-label={`Scroll ${dir}`}
              style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                border: '1px solid var(--border-medium)',
                background: 'rgba(255,255,255,0.06)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease',
                fontSize: '14px',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--accent-gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {dir === 'left' ? '‹' : '›'}
            </button>
          ))}
        </div>
      </div>

      {/* Cards row */}
      <div
        ref={rowRef}
        style={{
          display: 'flex',
          gap: '14px',
          overflowX: 'auto',
          padding: '8px 40px 16px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="skeleton" style={{
                flexShrink: 0,
                width: size === 'lg' ? '220px' : size === 'sm' ? '140px' : '180px',
                height: size === 'lg' ? '330px' : size === 'sm' ? '210px' : '270px',
                borderRadius: 'var(--radius-md)',
              }} />
            ))
          : movies.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} index={i} size={size} />
            ))
        }
      </div>

      <style>{`
        section div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default MovieRow;
