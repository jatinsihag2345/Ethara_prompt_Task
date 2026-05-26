import React, { useEffect } from 'react';
import './styles/globals.css';
import { MovieProvider, useMovieContext } from './context/MovieContext';
import { useTrending, usePopular, useTopRated, useUpcoming, useNowPlaying } from './hooks/useMovies';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import CategoryFilter from './sections/CategoryFilter';
import MovieRow from './sections/MovieRow';
import SearchResults from './sections/SearchResults';
import MovieModal from './components/MovieModal';
import Footer from './components/Footer';

const AppContent = () => {
  const { searchQuery, selectedMovie, openMovie } = useMovieContext();
  const trending = useTrending();
  const popular = usePopular();
  const topRated = useTopRated();
  const upcoming = useUpcoming();
  const nowPlaying = useNowPlaying();

  // Listen for "open movie" events from similar-movie clicks in modal
  useEffect(() => {
    const handler = (e) => openMovie(e.detail);
    window.addEventListener('openMovie', handler);
    return () => window.removeEventListener('openMovie', handler);
  }, [openMovie]);

  const showSearch = searchQuery.trim().length > 0;

  return (
    <div className="grain" style={{ minHeight: '100vh', background: 'var(--bg-void)' }}>
      <Navbar />

      {!showSearch && (
        <Hero movies={trending.movies} loading={trending.loading} />
      )}

      <main>
        <CategoryFilter />

        {showSearch ? (
          <SearchResults />
        ) : (
          <>
            {/* Now Playing */}
            <MovieRow
              title="Now Playing"
              subtitle="In cinemas right now"
              movies={nowPlaying.movies}
              loading={nowPlaying.loading}
              size="lg"
            />

            {/* Trending */}
            <MovieRow
              title="Trending This Week"
              subtitle="What everyone's watching"
              movies={trending.movies}
              loading={trending.loading}
            />

            {/* Featured Banner */}
            {!trending.loading && trending.movies[3] && (
              <FeaturedBanner movie={trending.movies[3]} />
            )}

            {/* Popular */}
            <MovieRow
              title="Popular Right Now"
              subtitle="Fan favourites across the globe"
              movies={popular.movies}
              loading={popular.loading}
            />

            {/* Top Rated */}
            <MovieRow
              title="Top Rated of All Time"
              subtitle="Cinema's greatest achievements"
              movies={topRated.movies}
              loading={topRated.loading}
              size="lg"
            />

            {/* Upcoming */}
            <MovieRow
              title="Coming Soon"
              subtitle="Highly anticipated releases"
              movies={upcoming.movies}
              loading={upcoming.loading}
              size="sm"
            />
          </>
        )}
      </main>

      <Footer />
      <MovieModal />
    </div>
  );
};

// A full-width inline featured banner between rows
const FeaturedBanner = ({ movie }) => {
  const { openMovie } = useMovieContext();
  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : `https://placehold.co/1280x400/0a0a0f/e8c97a?text=${encodeURIComponent(movie.title)}`;

  return (
    <div
      onClick={() => openMovie(movie)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && openMovie(movie)}
      style={{
        margin: '20px 40px',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        position: 'relative',
        height: '220px',
        cursor: 'pointer',
        border: '1px solid var(--border-subtle)',
        transition: 'all 0.3s ease',
        outline: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.005)'; e.currentTarget.style.borderColor = 'rgba(232,201,122,0.2)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
    >
      <img
        src={backdrop}
        alt={movie.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.5) 50%, transparent 100%)',
        display: 'flex', alignItems: 'center',
        padding: '32px 48px',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)',
            marginBottom: '8px',
            fontWeight: '500',
          }}>✦ Editor's Pick</div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(20px, 3vw, 36px)',
            fontWeight: '900',
            color: 'var(--text-primary)',
            marginBottom: '8px',
          }}>{movie.title}</h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'rgba(240,236,227,0.65)',
            maxWidth: '400px',
            fontWeight: '300',
            lineHeight: '1.6',
          }}>
            {movie.overview?.slice(0, 100)}…
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <MovieProvider>
    <AppContent />
  </MovieProvider>
);

export default App;
