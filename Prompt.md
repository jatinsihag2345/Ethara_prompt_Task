# Prompt

## Context and Role

As a Frontend Developer specializing in modern cinematic web experiences, you are responsible for designing and developing a premium movie streaming/discovery website with a sleek UI, immersive animations, and production-quality frontend architecture.

The website should feel similar in quality and polish to platforms like Netflix, Disney+, Prime Video, Letterboxd, or A24-inspired cinematic websites — while still remaining realistic, lightweight, and manageable for a portfolio-level project.

The goal is to create a visually engaging movie platform that combines modern UI/UX design, smooth interactions, responsive layouts, and dynamic movie browsing experiences without overengineering the backend architecture.

The application should prioritize:

* Clean modern design
* Smooth user experience
* Fast performance
* Responsive layouts
* Interactive movie browsing
* Elegant animations
* Maintainable frontend architecture

---

# Objective

Develop a modern movie website that:

* Displays trending and popular movies
* Includes animated movie cards and hover interactions
* Supports movie search and filtering
* Uses smooth scroll animations and transitions
* Includes detailed movie pages/modals
* Provides a premium streaming-platform inspired UI
* Works seamlessly across desktop, tablet, and mobile devices

The website should feel polished, cinematic, and professional while remaining beginner/intermediate friendly in implementation complexity.

---

# UI and Design Requirements

## Design Direction

The visual style should be:

* Cinematic
* Dark-themed and immersive
* Modern and minimal
* Inspired by premium streaming platforms
* Smooth and elegant
* Content-focused

Use modern UI elements such as:

* Glassmorphism effects where appropriate
* Gradient overlays
* Smooth hover animations
* Backdrop blur
* Large cinematic banners
* Rounded cards
* Elegant typography
* Responsive grids
* Floating UI interactions
* Smooth transitions

Avoid:

* Generic Bootstrap layouts
* Cluttered interfaces
* Excessive text-heavy sections
* Overly bright color palettes
* Old-fashioned UI components

---

# Required Sections

## Navbar

The navigation bar should include:

* Website logo/branding
* Navigation links
* Search button/input
* Dark/light mode toggle (optional)
* Mobile hamburger menu

Behavior Requirements:

* Sticky/floating navbar
* Backdrop blur effect
* Smooth transitions on scroll
* Responsive mobile navigation

---

## Hero Section

The hero section should feature:

* Featured/trending movie banner
* Large cinematic background image/video
* Movie title and short description
* “Watch Now” and “View Details” buttons
* Overlay gradients for readability
* Smooth entrance animations

Optional:

* Auto-changing featured movies carousel

---

## Trending Movies Section

Display movie cards in a responsive grid or slider layout.

Each movie card should include:

* Movie poster
* Rating
* Genre
* Release year
* Hover animations
* Smooth scaling effects
* Quick details interaction

Hover Effects:

* Card elevation
* Image zoom
* Glow/shadow effects
* Animated buttons/icons

---

## Movie Details Modal/Page

Clicking a movie should open:

* Detailed movie information
* Trailer/video embed
* Cast information
* Ratings
* Genres
* Runtime
* Description

The modal/page should include:

* Smooth Framer Motion animations
* Backdrop blur overlay
* Animated entrance/exit transitions

---

## Categories Section

Include categories such as:

* Trending
* Popular
* Top Rated
* Upcoming
* Action
* Sci-Fi
* Horror
* Comedy

Users should be able to filter movies dynamically.

---

## Search Functionality

Implement:

* Live movie search
* Search suggestions
* Responsive search UI
* Empty-state handling
* Smooth animated transitions

Optional:

* Debounced API requests

---

## Footer

The footer should include:

* Navigation links
* Social media icons
* Copyright text
* Newsletter section (optional)

Keep the design clean and balanced.

---

# Animation Requirements

Use Framer Motion for:

* Page transitions
* Scroll reveal animations
* Movie card hover interactions
* Modal transitions
* Loading animations
* Staggered section animations

Animations should:

* Feel smooth and premium
* Be performance-friendly
* Use GPU-optimized properties
* Avoid excessive motion

---

# Functional Requirements

Implement:

* Dynamic movie fetching using an API
* Movie search functionality
* Category filtering
* Responsive navigation
* Interactive movie cards
* Modal/detail page functionality
* Loading states/skeleton loaders
* Error handling for failed API requests

Optional Features:

* Favorites/watchlist
* Authentication UI mockup
* Video trailer playback
* Infinite scrolling
* Theme toggle

---

# API Requirements

Use a movie API such as:

* TMDB API
* OMDb API

Fetch:

* Trending movies
* Popular movies
* Movie details
* Search results
* Genres/categories

Handle:

* API loading states
* API failures gracefully
* Missing images/content

Store API keys securely using environment variables.

---

# Responsiveness Requirements

The website must be:

* Fully responsive
* Mobile-first
* Tablet optimized
* Desktop optimized

Ensure:

* Responsive typography
* Proper spacing
* Flexible grids
* No overflow issues
* Touch-friendly interactions

---

# Performance Requirements

Optimize for:

* Fast loading
* Lazy-loaded images
* Optimized animations
* Efficient rendering
* Minimal layout shifts
* Lighthouse performance

Use:

* Image optimization
* Code splitting where appropriate
* Debounced searches
* Reusable UI components

---

# Accessibility and SEO

Include:

* Semantic HTML
* Proper ARIA labels
* Keyboard accessibility
* Screen-reader support
* Optimized metadata
* Open Graph tags
* SEO-friendly structure

---

# Technology Stack

## Frontend

Use:

* React or Next.js
* Tailwind CSS
* Framer Motion

Optional:

* TypeScript
* Shadcn/UI

---

# Suggested Folder Structure

```bash
/src
  /components
  /sections
  /pages
  /layouts
  /hooks
  /utils
  /services
  /assets
  /styles
  /context
/public
```

# Output Expectations

The final website should:

* Feel like a real modern streaming platform
* Include smooth cinematic interactions
* Maintain clean and scalable code
* Be portfolio-ready
* Have production-quality UI
* Deliver a polished user experience
* Remain realistic and manageable to build
