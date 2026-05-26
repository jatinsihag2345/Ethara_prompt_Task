# High-Quality Industry-Level Coding Prompt (E-Commerce Domain)

## Context and Role

You are a Senior Full-Stack Engineer at a fast-growing e-commerce company responsible for building a modern AI-powered storefront platform for premium fashion and lifestyle products. The platform must deliver a high-performance shopping experience with immersive UI interactions, secure payment processing, scalable backend architecture, and intelligent product discovery.

The application should simulate a production-grade e-commerce system used by thousands of concurrent users during high-traffic sales events.

---

# Objective

Develop a complete full-stack AI-enhanced e-commerce platform that:

* Provides a visually immersive shopping experience.
* Implements smooth motion-based UI interactions.
* Supports secure user authentication and checkout.
* Includes intelligent product search and filtering.
* Handles real-time inventory management.
* Processes orders securely.
* Sends transactional email notifications.
* Maintains scalability, accessibility, and production-level performance.

---

# Core Functional Requirements

## 1. Storefront Experience

### Landing Page

Create a modern animated landing page that includes:

* Hero banner with motion-based transitions
* Featured product carousel
* Trending categories section
* Flash-sale countdown timer
* Customer testimonials with animated cards

### Product Catalog

Implement:

* Product grid with lazy loading
* Infinite scrolling or pagination
* Dynamic filtering:

  * Category
  * Price range
  * Rating
  * Availability
* Search with autocomplete suggestions
* Sort options:

  * Price
  * Popularity
  * New arrivals

### Product Details Page

Each product page must include:

* Animated image gallery
* Product zoom interaction
* Variant selection (size/color)
* Inventory status
* Related products recommendation
* Add-to-cart animation

---

# UI and Animation Requirements

Use Framer Motion for all advanced UI interactions.

Implement:

* Scroll-based reveal animations
* Staggered product card transitions
* Smooth page transitions
* Animated modals and drawers
* Hover-based micro-interactions
* GPU-optimized animations using:

  * transform
  * opacity

### Performance Constraints

Animations must:

* Maintain 60 FPS on modern browsers
* Avoid layout thrashing
* Use lazy-loaded motion components
* Not block scrolling performance

---

# Shopping Cart and Checkout Requirements

## Cart System

Implement:

* Persistent cart using local storage or database
* Quantity updates
* Coupon code support
* Dynamic price calculation
* Tax and shipping estimation

## Checkout Flow

The checkout system must support:

* Guest checkout
* Logged-in checkout
* Address validation
* Order summary
* Secure payment flow

### Payment Integration

Use Stripe or Razorpay integration.

Requirements:

* Secure tokenized payments
* Webhook verification
* Payment success/failure handling
* Prevent duplicate transactions

---

# Authentication and User Management

Implement secure authentication using:

* JWT or NextAuth
* OAuth (Google login optional)

Features required:

* User registration
* Login/logout
* Password hashing with bcrypt
* Forgot password flow
* Role-based access:

  * Customer
  * Admin

---

# Admin Dashboard Requirements

Create an admin panel that supports:

* Product CRUD operations
* Inventory management
* Order tracking
* Sales analytics dashboard
* User management
* Revenue statistics charts

### Dashboard Constraints

* Protected admin routes
* Pagination for large datasets
* Server-side filtering
* Optimized API queries

---

# Backend Requirements

Build scalable APIs using:

* Node.js + Express OR Next.js API Routes

Implement:

* RESTful architecture
* Structured error handling
* API validation middleware
* Rate limiting
* Request logging
* Centralized error middleware

### Database

Use PostgreSQL or MongoDB.

Required schemas:

* Users
* Products
* Orders
* Payments
* Reviews
* Inventory

---

# AI-Powered Features

Implement at least ONE intelligent feature:

### Option A — AI Product Recommendations

Recommend products based on:

* Browsing history
* Cart contents
* Similar purchases

### Option B — AI Search Assistant

Natural language product search such as:

> “Show me affordable black sneakers under ₹3000”

### Option C — AI Chat Support

Provide a shopping assistant chatbot that can:

* Recommend products
* Answer shipping questions
* Track orders

---

# Security Requirements

The application must:

* Sanitize all user inputs
* Prevent XSS attacks
* Prevent NoSQL/SQL injection
* Use Helmet.js security headers
* Protect against CSRF
* Validate uploaded files
* Secure environment variables

---

# Email and Notification System

Implement transactional email notifications for:

* Order confirmation
* Shipping updates
* Password reset
* Payment receipt

Use:

* Nodemailer
* SendGrid
* AWS SES
* or equivalent service

---

# Accessibility and SEO Requirements

The platform must:

* Use semantic HTML
* Include ARIA labels
* Pass Lighthouse accessibility checks
* Support keyboard navigation
* Implement SEO metadata
* Include Open Graph tags
* Optimize Core Web Vitals

---

# Performance and Scalability Requirements

The system must:

* Lazy-load heavy components
* Optimize images using next/image or CDN
* Use caching where appropriate
* Debounce expensive API calls
* Minimize bundle size
* Support high concurrent traffic
* Implement API response compression

---

# Technical Constraints (Explicit & Checkable)

The implementation MUST satisfy ALL of the following:

1. Use React or Next.js with TypeScript.
2. Use Framer Motion for all major UI animations.
3. Implement server-side validation for every API endpoint.
4. Use JWT or session-based authentication.
5. Store secrets using environment variables only.
6. Use responsive design supporting:

   * Mobile
   * Tablet
   * Desktop
7. Include loading skeletons for async UI states.
8. Maintain Lighthouse performance score above 85.
9. Provide structured JSON API responses.
10. Include centralized logging and error handling.

---

# API Response Format Requirements

All API responses must follow this structure:

```json
{
  "success": true,
  "message": "Order created successfully",
  "data": {},
  "error": null
}
```

Error responses must follow:

```json
{
  "success": false,
  "message": "Validation failed",
  "data": null,
  "error": {
    "code": "INVALID_INPUT",
    "details": []
  }
}
```

---

# Folder Structure Requirements

Provide a clean production-grade architecture:

```txt
/apps
  /client
  /server

/components
/pages
/hooks
/services
/utils
/middleware
/database
/types
```

---

# Deployment Requirements

Document deployment steps for:

* Frontend deployment (Vercel/Netlify)
* Backend deployment (Render/Railway/AWS)
* Database configuration
* Environment setup
* CI/CD pipeline overview

---

# Deliverables

The final solution must include:

* Complete frontend implementation
* Backend API implementation
* Authentication system
* Payment integration
* AI-powered feature
* Admin dashboard
* Database schema
* Environment configuration guide
* Setup documentation
* Deployment instructions
* Error handling strategy
* Performance optimization explanation

---

# Technology Stack

## Frontend

* Next.js or React
* TypeScript
* Framer Motion
* Tailwind CSS
* React Query / Zustand / Redux Toolkit

## Backend

* Node.js
* Express.js or Next.js API Routes

## Database

* PostgreSQL or MongoDB

## Authentication

* JWT / NextAuth

## Payments

* Stripe or Razorpay

## Email

* Nodemailer / SendGrid

## Optional Enhancements

* Redis caching
* Docker support
* Kubernetes deployment
* WebSockets for live order tracking
* Elasticsearch for advanced search
