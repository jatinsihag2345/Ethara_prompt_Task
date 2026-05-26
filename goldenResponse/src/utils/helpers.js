// ─── TMDB Image Base URL (the correct CDN endpoint) ───────────────────────
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';

const POSTER_SIZES = {
  sm: 'w185',
  md: 'w342',
  lg: 'w500',
  xl: 'w780',
  original: 'original',
};

const BACKDROP_SIZES = {
  sm: 'w300',
  md: 'w780',
  lg: 'w1280',
  original: 'original',
};

const PROFILE_SIZES = {
  sm: 'w45',
  md: 'w185',
  lg: 'h632',
};

// ─── Image URL helpers ──────────────────────────────────────────────────────
export const getPosterURL = (path, size = 'md') => {
  if (!path) {
    return `https://placehold.co/342x513/111118/5c5869?text=No+Poster`;
  }
  const sizeKey = POSTER_SIZES[size] || POSTER_SIZES.md;
  return `${TMDB_IMAGE_BASE}/${sizeKey}${path}`;
};

export const getBackdropURL = (path, size = 'lg') => {
  if (!path) {
    return `https://placehold.co/1280x720/050505/e8c97a?text=No+Backdrop`;
  }
  const sizeKey = BACKDROP_SIZES[size] || BACKDROP_SIZES.lg;
  return `${TMDB_IMAGE_BASE}/${sizeKey}${path}`;
};

export const getProfileURL = (path, size = 'md') => {
  if (!path) {
    return `https://placehold.co/185x278/111118/5c5869?text=?`;
  }
  const sizeKey = PROFILE_SIZES[size] || PROFILE_SIZES.md;
  return `${TMDB_IMAGE_BASE}/${sizeKey}${path}`;
};

// ─── Formatting helpers ─────────────────────────────────────────────────────
export const getYear = (dateStr) => {
  if (!dateStr) return '—';
  return dateStr.slice(0, 4);
};

export const formatRating = (rating) => {
  if (!rating) return 'N/A';
  return Number(rating).toFixed(1);
};

export const getRatingColor = (rating) => {
  if (!rating) return '#5c5869';
  if (rating >= 8) return '#4ade80';   // green
  if (rating >= 6.5) return '#e8c97a'; // gold
  if (rating >= 5) return '#fb923c';   // orange
  return '#f87171';                     // red
};

export const formatRuntime = (minutes) => {
  if (!minutes) return '';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
};

export const formatMoney = (amount) => {
  if (!amount || amount === 0) return 'N/A';
  if (amount >= 1_000_000_000) return `$${(amount / 1_000_000_000).toFixed(1)}B`;
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(0)}M`;
  return `$${amount.toLocaleString()}`;
};

export const truncate = (str, len = 100) => {
  if (!str) return '';
  return str.length > len ? str.slice(0, len) + '…' : str;
};

// Genre map from TMDB genre IDs
const GENRE_MAP = {
  28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy',
  80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
  14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music',
  9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV Movie',
  53: 'Thriller', 10752: 'War', 37: 'Western',
};

export const getGenreNames = (genreIds = [], max = 3) => {
  return genreIds
    .slice(0, max)
    .map(id => GENRE_MAP[id])
    .filter(Boolean);
};
