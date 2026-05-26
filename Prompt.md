# Prompt

## Context and Role

As a Frontend Developer specializing in modern cinematic web experiences, you are responsible for designing and developing a premium movie discovery and streaming-inspired website with a polished UI, immersive animations, and production-level frontend quality.

The website should feel visually inspired by platforms like Netflix, Prime Video, Letterboxd, Disney+, and A24-style cinematic interfaces while still remaining realistic and manageable for a portfolio-level project.

The goal is to create a modern movie platform that combines:

* Clean UI/UX
* Smooth interactions
* Responsive layouts
* Dynamic movie browsing
* Interactive animations
* Scalable frontend structure

The application should feel like a real modern startup product instead of a basic beginner project or generic template.

---

# Objective

Develop a modern movie website that:

* Displays trending and popular movies dynamically
* Includes smooth cinematic animations and transitions
* Allows users to browse and search movies
* Shows detailed movie information in a modal or separate page
* Provides responsive layouts across all screen sizes
* Uses modern frontend architecture and reusable components
* Maintains fast performance and clean code quality

The project should prioritize:

* Simplicity in implementation
* Premium frontend quality
* Realistic project scope
* Human-centered UI/UX
* Smooth and engaging interactions

---

# UI and Design Requirements

## Design Direction

The website should follow a:

* Cinematic dark-themed design
* Modern streaming-platform inspired layout
* Minimal yet immersive visual style
* Premium and polished user experience
* Smooth interaction-focused interface

Use modern design elements such as:

* Gradient overlays
* Glassmorphism where appropriate
* Backdrop blur effects
* Smooth hover transitions
* Cinematic hero banners
* Rounded movie cards
* Floating UI elements
* Elegant typography
* Responsive grid layouts
* Soft shadows and layered depth

Avoid:

* Generic Bootstrap-style layouts
* Cluttered sections
* Outdated UI components
* Excessive text-heavy designs
* Poor spacing and inconsistent typography

---

# Required Sections

## Navbar

The navbar should include:

* Website logo/branding
* Navigation links
* Search functionality
* Mobile hamburger menu
* Optional dark/light mode toggle

Behavior Requirements:

* Sticky/fixed navbar
* Smooth scroll behavior
* Responsive mobile navigation
* Backdrop blur effect
* Animated transitions on scroll

---

## Hero Section

The hero section should immediately capture attention.

Include:

* Featured movie banner
* Large cinematic background image
* Movie title and description
* “Watch Now” button
* “More Info” button
* Gradient overlays for readability
* Smooth entrance animations

Optional:

* Auto-changing featured movie carousel

---

## Trending Movies Section

Display movies using responsive movie cards.

Each card should include:

* Movie poster
* Title
* Rating
* Genre
* Release year

Hover Effects:

* Image zoom effect
* Card elevation
* Glow/shadow animation
* Smooth scaling transitions
* Interactive action buttons

---

## Categories Section

Include movie categories such as:

* Trending
* Popular
* Top Rated
* Upcoming
* Action
* Horror
* Comedy
* Sci-Fi

Requirements:

* Dynamic filtering
* Responsive category layout
* Smooth transitions between filters

---

## Movie Details Modal/Page

When a movie is clicked:

* Open a modal or dedicated details page
* Show detailed movie information
* Display trailer/video embed
* Show cast, rating, runtime, and genres
* Include smooth animated transitions

Modal/Page Animations:

* Fade-in effects
* Scale transitions
* Backdrop blur overlay
* Smooth open/close animations

---

## Search Functionality

Implement movie search functionality with:

* Live search
* Search suggestions
* Empty-state handling
* Smooth animated interactions

Optional:

* Debounced API requests for performance optimization

---

## Footer

The footer should include:

* Navigation links
* Social media icons
* Copyright section
* Optional newsletter section

The footer should remain visually balanced and minimal.

---

# Animation Requirements

Use Framer Motion for:

* Scroll reveal animations
* Hover interactions
* Page transitions
* Modal animations
* Staggered section reveals
* Loading animations

Animation Rules:

* Keep animations smooth and subtle
* Avoid excessive motion
* Use GPU-friendly properties
* Maintain scroll performance
* Ensure responsive animation behavior

---

# API Requirements

Use a movie API such as:

* TMDB API
* OMDb API

Fetch data for:

* Trending movies
* Popular movies
* Top rated movies
* Search results
* Movie details
* Genres/categories

API Handling Requirements:

* Handle loading states properly
* Handle failed requests gracefully
* Prevent broken layouts from missing data
* Use environment variables for API keys

---

# Functional Requirements

Implement:

* Dynamic movie fetching
* Responsive movie grid
* Search functionality
* Category filtering
* Movie detail modal/page
* Loading skeletons or spinners
* Error handling UI

Optional Features:

* Favorites/watchlist
* Authentication UI mockup
* Trailer playback
* Infinite scrolling
* Theme toggle

---

# Responsiveness Requirements

The entire website must be:

* Fully responsive
* Mobile-first
* Tablet optimized
* Desktop optimized

Ensure:

* Proper spacing on all devices
* Responsive typography
* Flexible layouts
* No horizontal overflow
* Touch-friendly interactions

---

# Performance Requirements

Optimize for:

* Fast loading speeds
* Smooth rendering
* Efficient animations
* Lazy-loaded images
* Minimal layout shifts
* Lighthouse optimization

Use:

* Reusable components
* Efficient state management
* Debounced search functionality
* Optimized image loading

---

# Accessibility and SEO

Include:

* Semantic HTML
* Proper ARIA labels
* Keyboard accessibility
* Screen-reader support
* SEO-friendly metadata
* Open Graph meta tags
* Proper heading hierarchy

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
/public
```

# Code Quality Requirements

The codebase should be:

* Clean
* Modular
* Reusable
* Maintainable
* Beginner/intermediate friendly
* Production-style organized

Avoid:

* Huge messy files
* Duplicate logic
* Excessive inline styling
* Poor naming conventions
* Overengineered architecture

---

# Output Expectations

The final movie website should:

* Feel like a real streaming platform
* Deliver a cinematic browsing experience
* Include modern animations and interactions
* Maintain premium UI quality
* Be portfolio-ready
* Remain realistic and achievable to build
* Balance simplicity with professional frontend engineering
