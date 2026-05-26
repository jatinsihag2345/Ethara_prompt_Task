import React, { useState } from 'react';
import { useMovieContext } from '../context/MovieContext';
import { getPosterURL, getYear, formatRating, getGenreNames, getRatingColor, truncate } from '../utils/helpers';

const MovieCard = ({ movie, index = 0, size = 'md' }) => {
  const { openMovie, toggleWatchlist, isInWatchlist } = useMovieContext();
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!movie) return null;

  const posterUrl = getPosterURL(movie.poster_path, size === 'sm' ? 'sm' : 'md');
  const inWatchlist = isInWatchlist(movie.id);
  const ratingColor = getRatingColor(movie.vote_average);
  const genres = getGenreNames(movie.genre_ids || [], 2);

  const cardStyle = {
    sm: { width: '140px', height: '210px' },
    md: { width: '180px', height: '270px' },
    lg: { width: '220px', height: '330px' },
  }[size] || { width: '180px', height: '270px' };

  const animDelay = `${(index % 8) * 0.06}s`;

  return (
    <div
      onClick={() => openMovie(movie)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && openMovie(movie)}
      aria-label={`View details for ${movie.title}`}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        overflow: 'visible',
        cursor: 'pointer',
        flexShrink: 0,
        width: cardStyle.width,
        animation: `fadeInUp 0.5s ease ${animDelay} both`,
        outline: 'none',
      }}
    >
      {/* Card Image Container */}
      <div style={{
        position: 'relative',
        width: cardStyle.width,
        height: cardStyle.height,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        transform: hovered ? 'scale(1.04) translateY(-6px)' : 'scale(1) translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,201,122,0.2)' : 'var(--shadow-card)',
      }}>
        {/* Skeleton while loading */}
        {!imgLoaded && (
          <div className="skeleton" style={{ position: 'absolute', inset: 0, borderRadius: 0 }} />
        )}

        <img
          src={posterUrl}
          alt={movie.title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: imgLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease, transform 0.5s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />

        {/* Hover Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.5) 50%, transparent 100%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }} />

        {/* Rating Badge */}
        <div style={{
          position: 'absolute', top: '10px', right: '10px',
          background: 'rgba(5,5,5,0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: '6px',
          padding: '3px 7px',
          display: 'flex', alignItems: 'center', gap: '4px',
          border: `1px solid ${ratingColor}30`,
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill={ratingColor}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span style={{ fontSize: '11px', fontWeight: '600', color: ratingColor, fontFamily: 'var(--font-body)' }}>
            {formatRating(movie.vote_average)}
          </span>
        </div>

        {/* Watchlist button */}
        <button
          onClick={e => { e.stopPropagation(); toggleWatchlist(movie); }}
          aria-label={inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
          style={{
            position: 'absolute', top: '10px', left: '10px',
            background: inWatchlist ? 'rgba(232,201,122,0.9)' : 'rgba(5,5,5,0.8)',
            border: '1px solid ' + (inWatchlist ? 'var(--accent-gold)' : 'rgba(255,255,255,0.15)'),
            borderRadius: '6px',
            width: '28px', height: '28px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            color: inWatchlist ? '#050505' : 'var(--text-secondary)',
            opacity: hovered || inWatchlist ? 1 : 0,
            transform: hovered || inWatchlist ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill={inWatchlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>

        {/* Hover content */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '12px',
          transform: hovered ? 'translateY(0)' : 'translateY(20px)',
          opacity: hovered ? 1 : 0,
          transition: 'all 0.3s ease',
        }}>
          {/* Genres */}
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '6px' }}>
            {genres.map(g => (
              <span key={g} style={{
                fontSize: '10px', fontFamily: 'var(--font-body)',
                color: 'var(--accent-gold)',
                background: 'rgba(232,201,122,0.1)',
                border: '1px solid rgba(232,201,122,0.2)',
                borderRadius: '4px', padding: '2px 6px',
                letterSpacing: '0.5px',
              }}>{g}</span>
            ))}
          </div>

          {/* Title in hover */}
          <p style={{
            fontSize: '12px', fontFamily: 'var(--font-body)',
            color: 'rgba(240,236,227,0.7)', lineHeight: '1.4',
            fontWeight: '300',
          }}>
            {truncate(movie.overview, 80)}
          </p>

          {/* Play button */}
          <div style={{
            marginTop: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '6px',
            background: 'linear-gradient(135deg, rgba(232,201,122,0.9), rgba(201,152,64,0.9))',
            borderRadius: '8px',
            padding: '8px',
            color: '#050505',
            fontSize: '12px',
            fontWeight: '600',
            fontFamily: 'var(--font-body)',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#050505">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            View Details
          </div>
        </div>
      </div>

      {/* Card Info below image */}
      <div style={{
        padding: '10px 4px 4px',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.35s ease',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          fontWeight: '500',
          color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
          transition: 'color 0.2s ease',
          lineHeight: '1.3',
          marginBottom: '2px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}>{movie.title}</h3>
        <span style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-body)',
        }}>{getYear(movie.release_date)}</span>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default MovieCard;
