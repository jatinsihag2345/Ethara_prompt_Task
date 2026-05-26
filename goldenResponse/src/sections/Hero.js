import React, { useState, useEffect } from 'react';
import { useMovieContext } from '../context/MovieContext';
import { getBackdropURL, getPosterURL, formatRating, getRatingColor, getGenreNames, getYear, truncate } from '../utils/helpers';

const Hero = ({ movies = [], loading }) => {
  const { openMovie, toggleWatchlist, isInWatchlist } = useMovieContext();
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const featured = movies.slice(0, 5);

  useEffect(() => {
    if (featured.length < 2) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % featured.length);
        setFading(false);
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, [featured.length]);

  if (loading || !featured.length) {
    return (
      <div style={{ height: '80vh', background: 'var(--bg-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '32px', height: '32px', border: '3px solid var(--accent-gold)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const movie = featured[current];
  if (!movie) return null;

  const backdrop = getBackdropURL(movie.backdrop_path, 'lg');
  const poster = getPosterURL(movie.poster_path, 'lg');
  const inWatchlist = isInWatchlist(movie.id);
  const ratingColor = getRatingColor(movie.vote_average);
  const genres = getGenreNames(movie.genre_ids || [], 3);

  return (
    <div style={{ position: 'relative', height: '90vh', minHeight: '560px', overflow: 'hidden' }}>
      {/* Backdrop */}
      <img
        key={movie.id}
        src={backdrop}
        alt={movie.title}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: fading ? 0 : 1,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.6) 50%, rgba(5,5,5,0.1) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.3) 40%, transparent 70%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        maxWidth: '580px',
        opacity: fading ? 0 : 1,
        transform: fading ? 'translateY(10px)' : 'translateY(0)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}>
        {/* Genre pills */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
          {genres.map(g => (
            <span key={g} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              background: 'rgba(232,201,122,0.12)',
              border: '1px solid rgba(232,201,122,0.25)',
              borderRadius: '4px',
              padding: '3px 8px',
            }}>{g}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: '900',
          lineHeight: '1.05',
          color: 'var(--text-primary)',
          marginBottom: '14px',
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
        }}>{movie.title}</h1>

        {/* Meta */}
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
          <span style={{ color: ratingColor, fontWeight: '700', fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill={ratingColor}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            {formatRating(movie.vote_average)}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>•</span>
          <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: '14px' }}>{getYear(movie.release_date)}</span>
        </div>

        {/* Overview */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: '1.7',
          color: 'rgba(240,236,227,0.7)',
          fontWeight: '300',
          marginBottom: '28px',
        }}>{truncate(movie.overview, 160)}</p>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => openMovie(movie)}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: 'linear-gradient(135deg, #e8c97a, #c99840)',
              border: 'none', borderRadius: 'var(--radius-md)',
              padding: '14px 28px',
              color: '#050505',
              fontFamily: 'var(--font-body)',
              fontWeight: '600', fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              letterSpacing: '0.3px',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#050505"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            View Details
          </button>

          <button
            onClick={() => toggleWatchlist(movie)}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: inWatchlist ? 'rgba(232,201,122,0.15)' : 'rgba(255,255,255,0.08)',
              border: `1px solid ${inWatchlist ? 'rgba(232,201,122,0.5)' : 'rgba(255,255,255,0.18)'}`,
              borderRadius: 'var(--radius-md)',
              padding: '14px 24px',
              color: inWatchlist ? 'var(--accent-gold)' : 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
              fontWeight: '400', fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(10px)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill={inWatchlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
            {inWatchlist ? 'In Watchlist' : '+ Watchlist'}
          </button>
        </div>
      </div>

      {/* Poster thumbnail */}
      <div style={{
        position: 'absolute', right: '5%', bottom: '12%',
        display: 'none',
      }} className="hero-poster">
        <img
          src={poster}
          alt={movie.title}
          style={{
            width: '140px', height: '210px',
            objectFit: 'cover',
            borderRadius: 'var(--radius-lg)',
            border: '2px solid var(--border-medium)',
            boxShadow: 'var(--shadow-deep)',
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>

      {/* Dot indicators */}
      <div style={{
        position: 'absolute', bottom: '4%', left: '5%',
        display: 'flex', gap: '6px',
      }}>
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 300); }}
            style={{
              width: i === current ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              border: 'none',
              background: i === current ? 'var(--accent-gold)' : 'rgba(255,255,255,0.25)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      <style>{`
        @media (min-width: 900px) { .hero-poster { display: block !important; } }
      `}</style>
    </div>
  );
};

export default Hero;
