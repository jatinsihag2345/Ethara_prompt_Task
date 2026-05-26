# 🎬 CineVerse — Cinema Reimagined

A premium, cinematic movie discovery platform built with React. Inspired by Netflix, Disney+, and A24's visual language.

![CineVerse Preview](https://placehold.co/1200x630/050505/e8c97a?text=CineVerse+—+Cinema+Reimagined)

#Link !!!! https://ornate-torrone-3465cb.netlify.app/

---

## ✨ Features

- **Cinematic Hero** — Auto-rotating featured film banner with smooth transitions
- **Movie Rows** — Horizontally scrollable carousels with hover interactions
- **Movie Modal** — Detailed film view with cast, ratings, trailer links & similar films
- **Live Search** — Debounced real-time movie search with empty-state handling
- **Category Filter** — Sticky filter bar: Trending, Popular, Top Rated, Genres
- **Watchlist** — Persistent watchlist saved to localStorage
- **Featured Banner** — Editor's pick inline banner
- **Dark Theme** — Immersive black + gold aesthetic with glassmorphism
- **Fully Responsive** — Mobile, tablet, and desktop optimized

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install

### 3. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### 4. Build for production

```bash
npm run build
```

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Sticky nav with search, watchlist, mobile menu
│   ├── MovieCard.js       # Individual movie card with hover effects
│   ├── MovieModal.js      # Full detail modal with cast, trailer, similar
│   └── Footer.js          # Links, newsletter, social icons
├── sections/
│   ├── Hero.js            # Cinematic hero with auto-rotating carousel
│   ├── MovieRow.js        # Scrollable movie carousel section
│   ├── CategoryFilter.js  # Sticky category/genre filter bar
│   └── SearchResults.js   # Search results grid view
├── context/
│   └── MovieContext.js    # Global state: selectedMovie, watchlist, search
├── hooks/
│   └── useMovies.js       # Data-fetching hooks (trending, popular, search…)
├── services/
│   └── movieAPI.js        # TMDB API calls + mock data fallback
├── utils/
│   └── helpers.js         # Image URLs, formatting, rating colors
└── styles/
    └── globals.css        # Design tokens, base styles, animations
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary BG | `#050505` |
| Surface | `#111118` |
| Accent Gold | `#e8c97a` |
| Text Primary | `#f0ece3` |
| Text Muted | `#5c5869` |
| Display Font | Playfair Display |
| Heading Font | Bebas Neue |
| Body Font | DM Sans |

---

## 🔌 API

Powered by [TMDB](https://www.themoviedb.org/). Without an API key, the app runs on built-in mock data so you can explore the UI immediately.

Endpoints used:
- `/trending/movie/week`
- `/movie/popular`
- `/movie/top_rated`
- `/movie/upcoming`
- `/movie/now_playing`
- `/search/movie`
- `/movie/{id}` (with credits, videos, similar)

---

## 📦 Tech Stack

- **React 18** — UI framework
- **Custom CSS** — Design tokens, animations, glassmorphism (no Tailwind required at runtime)
- **TMDB API** — Movie data
- **localStorage** — Watchlist persistence

---

## 🛠 Extending the Project

- Add **React Router** for dedicated movie detail pages
- Add **Framer Motion** for page transitions
- Add **TypeScript** for type safety
- Add **React Query** for caching and background refetching
- Add **Authentication** with Firebase or Auth0
- Add **Infinite Scroll** with IntersectionObserver

---

## 📝 License

MIT — free to use for portfolio and personal projects.

---

*Built with ❤ for cinema lovers. Data provided by [TMDB](https://www.themoviedb.org/).*
