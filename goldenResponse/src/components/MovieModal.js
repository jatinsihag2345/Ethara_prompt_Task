import React, { useEffect, useRef } from 'react';
import { useMovieContext } from '../context/MovieContext';
import { useMovieDetails } from '../hooks/useMovies';
import {
  getBackdropURL, getPosterURL, getProfileURL,
  formatRating, getRatingColor, getYear, formatRuntime,
  truncate, formatMoney,
} from '../utils/helpers';

const MovieModal = () => {
  const { selectedMovie, closeMovie, toggleWatchlist, isInWatchlist } = useMovieContext();
  const { details, loading } = useMovieDetails(selectedMovie?.id);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (selectedMovie) {
      document.body.style.overflow = 'hidden';
      const onKey = (e) => e.key === 'Escape' && closeMovie();
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [selectedMovie, closeMovie]);

  if (!selectedMovie) return null;

  const movie = details || selectedMovie;
  const backdrop = getBackdropURL(movie.backdrop_path, 'lg');
  const poster = getPosterURL(movie.poster_path, 'lg');
  const inWatchlist = isInWatchlist(movie.id);
  const ratingColor = getRatingColor(movie.vote_average);
  const trailer = movie.videos?.results?.find(v => v.site === 'YouTube' && v.type === 'Trailer');
  const cast = movie.credits?.cast?.slice(0, 8) || [];
  const similar = movie.similar?.results?.slice(0, 6) || [];
  const genres = movie.genres || [];

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && closeMovie()}
      style={{
        position: 'fixed', inset: 0,
        zIndex: 2000,
        background: 'rgba(5,5,5,0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
        animation: 'overlayIn 0.3s ease',
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: '900px',
        background: 'var(--bg-deep)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-medium)',
        overflow: 'hidden',
        position: 'relative',
        marginTop: '20px',
        marginBottom: '20px',
        boxShadow: 'var(--shadow-deep)',
        animation: 'modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}>
        {/* Backdrop Header */}
        <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
          <img
            src={backdrop}
            alt={movie.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              animation: 'zoomIn 0.6s ease',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.4) 60%, transparent 100%), linear-gradient(to top, rgba(10,10,15,1) 0%, rgba(10,10,15,0.3) 50%, transparent 100%)',
          }} />

          {/* Close button */}
          <button
            onClick={closeMovie}
            aria-label="Close"
            style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'rgba(5,5,5,0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border-medium)',
              borderRadius: '50%',
              width: '40px', height: '40px',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
              fontSize: '16px',
              zIndex: 10,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'rgba(5,5,5,0.75)'; }}
          >✕</button>

          {/* Header content */}
          <div style={{
            position: 'absolute', bottom: '24px', left: '24px', right: '24px',
            display: 'flex', gap: '24px', alignItems: 'flex-end',
          }}>
            {/* Poster */}
            <img
              src={poster}
              alt={movie.title}
              style={{
                width: '110px', height: '165px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
                border: '2px solid var(--border-medium)',
                boxShadow: 'var(--shadow-deep)',
                flexShrink: 0,
                animation: 'posterIn 0.5s ease 0.1s both',
              }}
            />
            {/* Title & Meta */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {movie.tagline && (
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '13px',
                  color: 'var(--accent-gold)',
                  marginBottom: '8px',
                  opacity: 0.8,
                }}>{movie.tagline}</p>
              )}
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 4vw, 42px)',
                fontWeight: '900',
                color: 'var(--text-primary)',
                lineHeight: '1.1',
                marginBottom: '12px',
              }}>{movie.title}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: ratingColor,
                  display: 'flex', alignItems: 'center', gap: '5px',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={ratingColor}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  {formatRating(movie.vote_average)}
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '400' }}>
                    ({(movie.vote_count || 0).toLocaleString()})
                  </span>
                </span>
                <Dot />
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px', fontFamily: 'var(--font-body)' }}>{getYear(movie.release_date)}</span>
                {movie.runtime > 0 && <>
                  <Dot />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '13px', fontFamily: 'var(--font-body)' }}>{formatRuntime(movie.runtime)}</span>
                </>}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '24px' }}>
          {loading && (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', color: 'var(--text-muted)', fontSize: '13px' }}>
              <div style={{ width: '16px', height: '16px', border: '2px solid var(--accent-gold)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
              Loading details…
            </div>
          )}

          {/* Genres */}
          {genres.length > 0 && (
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {genres.map(g => (
                <span key={g.id} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px', fontWeight: '500',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-secondary)',
                }}>{g.name}</span>
              ))}
            </div>
          )}

          {/* Overview */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            lineHeight: '1.75',
            color: 'rgba(240,236,227,0.8)',
            fontWeight: '300',
            marginBottom: '24px',
          }}>{movie.overview}</p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'linear-gradient(135deg, #e8c97a, #c99840)',
                  borderRadius: '10px', padding: '12px 22px',
                  color: '#050505',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '600', fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#050505">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Watch Trailer
              </a>
            )}

            <button
              onClick={() => toggleWatchlist(movie)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: inWatchlist ? 'rgba(232,201,122,0.12)' : 'rgba(255,255,255,0.06)',
                border: `1px solid ${inWatchlist ? 'rgba(232,201,122,0.4)' : 'var(--border-medium)'}`,
                borderRadius: '10px', padding: '12px 22px',
                color: inWatchlist ? 'var(--accent-gold)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontWeight: '400', fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill={inWatchlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              {inWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
            </button>
          </div>

          {/* Stats Grid */}
          {(movie.budget || movie.revenue) && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              marginBottom: '28px',
              padding: '16px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
            }}>
              {[
                { label: 'Budget', value: formatMoney(movie.budget) },
                { label: 'Revenue', value: formatMoney(movie.revenue) },
                { label: 'Rating', value: `${formatRating(movie.vote_average)}/10` },
                { label: 'Year', value: getYear(movie.release_date) },
              ].map(({ label, value }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: '600', color: 'var(--accent-gold)', marginBottom: '2px' }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cast */}
          {cast.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <SectionLabel>Cast</SectionLabel>
              <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '4px 0 8px', scrollbarWidth: 'none' }}>
                {cast.map((person) => (
                  <div key={person.id} style={{ flexShrink: 0, textAlign: 'center', width: '72px' }}>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid var(--border-subtle)',
                      marginBottom: '6px',
                      margin: '0 auto 6px',
                    }}>
                      <img
                        src={getProfileURL(person.profile_path)}
                        alt={person.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '500', color: 'var(--text-secondary)', lineHeight: '1.3' }}>
                      {person.name}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '9px', color: 'var(--text-muted)', lineHeight: '1.2', marginTop: '2px' }}>
                      {truncate(person.character, 20)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Similar Movies */}
          {similar.length > 0 && (
            <div>
              <SectionLabel>Similar Movies</SectionLabel>
              <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', padding: '4px 0 8px', scrollbarWidth: 'none' }}>
                {similar.map(m => (
                  <div
                    key={m.id}
                    onClick={() => { closeMovie(); setTimeout(() => { window.dispatchEvent(new CustomEvent('openMovie', { detail: m })); }, 100); }}
                    style={{
                      flexShrink: 0, cursor: 'pointer',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img
                      src={getPosterURL(m.poster_path, 'sm')}
                      alt={m.title}
                      style={{ width: '80px', height: '120px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
                    />
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px', width: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes overlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalIn { from { opacity: 0; transform: scale(0.94) translateY(30px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes zoomIn { from { transform: scale(1.1); } to { transform: scale(1); } }
        @keyframes posterIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

const SectionLabel = ({ children }) => (
  <h3 style={{
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'var(--accent-gold)',
    marginBottom: '14px',
  }}>{children}</h3>
);

const Dot = () => (
  <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>•</span>
);

export default MovieModal;
