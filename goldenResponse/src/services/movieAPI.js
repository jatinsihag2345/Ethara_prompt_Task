const API_KEY = process.env.REACT_APP_TMDB_API_KEY || '';
const BASE_URL = 'https://api.themoviedb.org/3';

// ─── Mock data (rich set so UI looks great without an API key) ──────────────
const MOCK_MOVIES = [
  { id: 1, title: 'Oppenheimer', overview: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.', poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', backdrop_path: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg', release_date: '2023-07-21', vote_average: 8.1, vote_count: 21000, genre_ids: [18, 36] },
  { id: 2, title: 'Dune: Part Two', overview: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.', poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg', backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg', release_date: '2024-03-01', vote_average: 8.5, vote_count: 9800, genre_ids: [878, 12] },
  { id: 3, title: 'Poor Things', overview: 'The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.', poster_path: '/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg', backdrop_path: '/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg', release_date: '2023-12-08', vote_average: 7.9, vote_count: 7600, genre_ids: [35, 18, 878] },
  { id: 4, title: 'Past Lives', overview: 'Nora and Hae Sung, two deeply connected childhood friends, are separated when Nora\'s family emigrates from South Korea. 24 years later, they are reunited for one fateful week in New York.', poster_path: '/k3waqVXSngJSMBCHuSMPpMoMCko.jpg', backdrop_path: '/feSiISwgEpVzR1v3zv2n2NSa0kc.jpg', release_date: '2023-06-02', vote_average: 7.9, vote_count: 2800, genre_ids: [18, 10749] },
  { id: 5, title: 'Killers of the Flower Moon', overview: 'When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one — until the FBI steps in to unravel the mystery.', poster_path: '/dB6Krk806zeqd955MaxXid6caR4.jpg', backdrop_path: '/1X7vow16X7CnCoK9Drmqy7JkEk.jpg', release_date: '2023-10-20', vote_average: 7.6, vote_count: 5400, genre_ids: [36, 18, 80] },
  { id: 6, title: 'The Zone of Interest', overview: 'The commandant of Auschwitz, Rudolf Höss, and his wife strive to build a dream life for their family in a house next to the camp.', poster_path: '/hUu9zyZmKuXA8zezmYSGGMDFSuH.jpg', backdrop_path: '/iRCgqpdVE4wyLQvGYU3ZP7pAtUc.jpg', release_date: '2023-12-15', vote_average: 7.4, vote_count: 1900, genre_ids: [18, 36] },
  { id: 7, title: 'Saltburn', overview: 'A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate, who invites him to his eccentric family\'s sprawling estate for a summer.', poster_path: '/qjhahNLSZ705B5JP92YMEYPocPz.jpg', backdrop_path: '/qETalonZQsELThzOtBz1EvGjpRJ.jpg', release_date: '2023-11-22', vote_average: 7.1, vote_count: 5800, genre_ids: [18, 53] },
  { id: 8, title: 'Barbie', overview: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.', poster_path: '/iuFNMS8vlbwXlMb4IrFBdOEpkRu.jpg', backdrop_path: '/nHf61UzkfFno5X1ofIhugCPus2R.jpg', release_date: '2023-07-21', vote_average: 7.1, vote_count: 14000, genre_ids: [35, 12] },
  { id: 9, title: 'Asteroid City', overview: 'The itinerary of a Junior Stargazer/Space Cadet convention is spectacularly disrupted by world-changing events.', poster_path: '/6MKHlxla8Tku5Lde5pRGc9VMnYQ.jpg', backdrop_path: '/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg', release_date: '2023-06-23', vote_average: 6.8, vote_count: 3400, genre_ids: [35, 18, 878] },
  { id: 10, title: 'May December', overview: 'Twenty years after their relationship created a media sensation, a married couple buckles when a famous actress arrives to do research for a film about their past.', poster_path: '/j3BR4bZVMkHVPfEFnuqAWjcEQe7.jpg', backdrop_path: '/6j8lIBX0kJyL5mBFG88BNQTMtj.jpg', release_date: '2023-11-17', vote_average: 6.8, vote_count: 1200, genre_ids: [18] },
  { id: 11, title: 'All of Us Strangers', overview: 'A screenwriter begins a relationship with his only neighbour in a near-empty tower block, while he also finds himself drawn back to his childhood home.', poster_path: '/e8XOhZTizIl4vTzOYqaUWnhJW6b.jpg', backdrop_path: '/s2ui3hkOnrOjFIAGMGSh24PkFCC.jpg', release_date: '2023-12-22', vote_average: 7.4, vote_count: 2100, genre_ids: [18, 10749] },
  { id: 12, title: 'Ferrari', overview: 'The summer of 1957 finds Enzo Ferrari at a crossroads. The company he and his wife Laura built from nothing is haemorrhaging money.', poster_path: '/wNvdF35C7mEcgRiHx3gQVtJmxFC.jpg', backdrop_path: '/qkQ4Ps0HaHNNPHAn7hIBlNABmlg.jpg', release_date: '2023-12-25', vote_average: 6.7, vote_count: 2400, genre_ids: [18, 36] },
  { id: 13, title: 'Civil War', overview: 'A journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.', poster_path: '/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg', backdrop_path: '/ugS5FVfCI3RLKn3sKOqHjioTfnA.jpg', release_date: '2024-04-12', vote_average: 7.1, vote_count: 4200, genre_ids: [28, 18] },
  { id: 14, title: 'Monkey Man', overview: 'A young man emerges from prison seeking vengeance against the corrupt leaders who murdered his mother and displaced his community.', poster_path: '/pIkBIZTEKKbALhlYRt2mREKZEXB.jpg', backdrop_path: '/tDytBfPvMBB7QOAV8HgTJXKBOlR.jpg', release_date: '2024-04-05', vote_average: 7.0, vote_count: 3100, genre_ids: [28, 12] },
  { id: 15, title: 'Problemista', overview: 'An aspiring toy designer from El Salvador works as an assistant to an eccentric art critic in New York.', poster_path: '/2MtSXa9yvGEfJRbBRKwYP91kqPY.jpg', backdrop_path: '/cP5f7bLGtQANPGBrIpkO3vLCYVQ.jpg', release_date: '2023-09-08', vote_average: 6.9, vote_count: 890, genre_ids: [35, 18] },
  { id: 16, title: 'The Holdovers', overview: 'A curmudgeonly instructor at a New England prep school is forced to remain on campus over the holidays with a troubled student who has no place to go.', poster_path: '/VHmqnC3yHbFvRtmDTJXbHBjbZN.jpg', backdrop_path: '/oBX8toiJLGAFcbzAqHFKSt0eJ9A.jpg', release_date: '2023-10-27', vote_average: 8.0, vote_count: 3800, genre_ids: [35, 18] },
  { id: 17, title: 'Dream Scenario', overview: 'A hapless family man finds his life turned upside down when millions of strangers suddenly start seeing him in their dreams.', poster_path: '/8IWbHsMJdxLSKJeHRMCYLnWXM0C.jpg', backdrop_path: '/mnCKt8UKV6vVOuIHqhAqFfKVxGC.jpg', release_date: '2023-11-10', vote_average: 6.5, vote_count: 2100, genre_ids: [35, 18] },
  { id: 18, title: 'Maestro', overview: 'A towering and fearless love story chronicling the lifelong relationship between Leonard Bernstein and Felicia Montealegre Cohn Bernstein.', poster_path: '/qFSqDhRhRF8biPQ8K2Qhx1EjNkM.jpg', backdrop_path: '/2aVovMYQVTEHJpOCsGqKTKAu5sU.jpg', release_date: '2023-12-20', vote_average: 6.8, vote_count: 2600, genre_ids: [18, 10749] },
  { id: 19, title: 'American Fiction', overview: 'A novelist who\'s fed up with the white American literary establishment\'s fascination with "Black" books decides to write his own, using a pen name.', poster_path: '/opBLSn2YAOYC4KBXBDPJSw0Dymx.jpg', backdrop_path: '/3qmhgQeSQFCzQhxoqzXNuALsf5B.jpg', release_date: '2023-12-15', vote_average: 7.3, vote_count: 2700, genre_ids: [35, 18] },
  { id: 20, title: 'Cabrini', overview: 'Italian immigrant Francesca Cabrini arrives in New York City in 1889, only to be greeted by disease, crime and impoverished orphans with no one to help them.', poster_path: '/3fhJK8UAMYiCOMsMZqUTmNRGLBi.jpg', backdrop_path: '/4APMpomovqcCCYhBp64PEGEHPbq.jpg', release_date: '2024-03-22', vote_average: 7.5, vote_count: 980, genre_ids: [18, 36] },
];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

// ─── API call helper ─────────────────────────────────────────────────────────
const fetchTMDB = async (endpoint, params = {}) => {
  if (!API_KEY) return null;
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('language', 'en-US');
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`TMDB ${res.status}`);
  return res.json();
};

// ─── Public API ─────────────────────────────────────────────────────────────
export const getTrending = async () => {
  try {
    const data = await fetchTMDB('/trending/movie/week');
    return data?.results || shuffle(MOCK_MOVIES).slice(0, 12);
  } catch { return shuffle(MOCK_MOVIES).slice(0, 12); }
};

export const getPopular = async () => {
  try {
    const data = await fetchTMDB('/movie/popular');
    return data?.results || shuffle(MOCK_MOVIES).slice(0, 12);
  } catch { return shuffle(MOCK_MOVIES).slice(2, 14); }
};

export const getTopRated = async () => {
  try {
    const data = await fetchTMDB('/movie/top_rated');
    return data?.results || shuffle(MOCK_MOVIES).slice(0, 12);
  } catch { return [...MOCK_MOVIES].reverse().slice(0, 12); }
};

export const getUpcoming = async () => {
  try {
    const data = await fetchTMDB('/movie/upcoming');
    return data?.results || shuffle(MOCK_MOVIES).slice(4, 14);
  } catch { return shuffle(MOCK_MOVIES).slice(4, 14); }
};

export const getNowPlaying = async () => {
  try {
    const data = await fetchTMDB('/movie/now_playing');
    return data?.results || shuffle(MOCK_MOVIES).slice(0, 10);
  } catch { return shuffle(MOCK_MOVIES).slice(0, 10); }
};

export const searchMovies = async (query) => {
  if (!query) return [];
  try {
    const data = await fetchTMDB('/search/movie', { query });
    return data?.results || [];
  } catch {
    const q = query.toLowerCase();
    return MOCK_MOVIES.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.overview.toLowerCase().includes(q)
    );
  }
};

export const getMovieDetails = async (id) => {
  try {
    const data = await fetchTMDB(`/movie/${id}`, {
      append_to_response: 'credits,videos,similar',
    });
    return data;
  } catch {
    return MOCK_MOVIES.find(m => m.id === id) || null;
  }
};
