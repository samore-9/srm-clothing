# ✦ SRM Clothing

> A fully responsive, modern e-commerce clothing store website built with pure HTML5, CSS3, and Vanilla JavaScript — no frameworks, no dependencies.

---

🚀 [See it live](https://samore-9.github.io/srm-clothing/)

## 📋 Table of Contents

- [Description](#description)
- [Live Preview](#live-preview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [JavaScript Functionality](#javascript-functionality)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Product Data](#product-data)
- [Browser Support](#browser-support)
- [License](#license)

---

## Description

**SRM Clothing** is a premium fashion e-commerce website featuring a curated collection of Men's & Women's apparel, Footwear, Sunglasses, Beauty products, and Accessories. Designed with a mobile-first approach, it delivers a polished shopping experience using zero external frameworks — just clean, production-quality vanilla code.

---

## Live Preview

Place all three files in the same folder and open `index.html` in any modern browser:

```
srm-clothing/
├── index.html
├── style.css
└── script.js
```

No build step. No server required. No dependencies to install.

---

## Features

### UI / UX
- Mobile-first responsive design (480px → 768px → 1024px → 1280px+)
- Premium editorial typography — Playfair Display + Inter
- Smooth CSS transitions and scroll-triggered animations
- Card elevation hover effects
- Accessible — semantic HTML, ARIA labels, keyboard navigation, focus indicators
- Respects `prefers-reduced-motion`

### Shopping
- 24 demo products across 6 categories
- Add to Cart with live item counter and bump animation
- Wishlist toggle (heart icon) per product
- Quick View modal for instant product preview
- Category filter tabs on the New Arrivals section
- Toast notification system for all user actions

### Navigation
- Sticky top header (Logo · Search · Wishlist · Cart · Account)
- Sticky navigation bar with 10 menu items
- Mobile hamburger menu with slide-down animation
- Active link highlight driven by scroll position (IntersectionObserver)
- Smooth scroll to all sections

### Utilities
- Live product search with 220ms debounce — filters by name, category, and tags
- Newsletter subscription with email validation
- Real-time sale countdown timer
- Animated stat counters in the hero section
- Back-to-top button (visible after 400px scroll)
- Header auto-hides on scroll-down on mobile for more screen space

---

## Project Structure

```
srm-clothing/
│
├── index.html          # Semantic HTML5 — all 14 sections
├── style.css           # 1,200+ lines — CSS custom properties, mobile-first
└── script.js           # 960+ lines — all interactivity, product data, utilities
```

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Top Header** | Logo, search bar, wishlist, cart counter, account icon |
| 2 | **Sticky Nav** | 10-item menu, hamburger on mobile, scroll-spy active states |
| 3 | **Hero** | Headline, CTA buttons, animated stats, floating sale badge |
| 4 | **Featured Categories** | 6 clickable category cards with hover animations |
| 5 | **New Arrivals** | 12 products with filterable tabs |
| 6 | **Men's Collection** | 4 curated men's products |
| 7 | **Women's Collection** | 4 curated women's products |
| 8 | **Footwear Collection** | Sneakers, Formal, Sandals, Sports |
| 9 | **Sunglasses Collection** | Aviators, Wayfarers, Cat-Eye, Wraparound |
| 10 | **Beauty Collection** | Lipstick, Perfume, Face Wash, Skincare |
| 11 | **Promo Banner** | 50% OFF sale banner with live countdown timer |
| 12 | **Testimonials** | 4 customer reviews with star ratings |
| 13 | **Newsletter** | Email subscription with JS validation |
| 14 | **Footer** | 5-column layout — About, Links, Categories, Contact, Social |

---

## JavaScript Functionality

| Feature | Implementation |
|---------|---------------|
| Mobile hamburger menu | Toggle class + outside-click dismiss |
| Sticky navbar | CSS `position: sticky` + scroll behaviour |
| Search | Live debounced filter (220ms) across name, category, tags |
| Product filtering | `data-category` attribute toggle + `hidden` class |
| Add to Cart | State array + qty tracking + button feedback |
| Cart counter update | Live DOM update + CSS bump animation |
| Wishlist toggle | Array push/splice + all-instance DOM sync |
| Newsletter validation | Regex email check + success/error states |
| Smooth scroll | `scrollIntoView` via `window.scrollTo` with offset |
| Back to Top | `IntersectionObserver`-free scroll listener |
| Scroll animations | `IntersectionObserver` — fade-in-up on cards |
| Active nav highlight | `IntersectionObserver` on all sections |
| Quick View modal | Dynamic DOM injection, keyboard & backdrop dismiss |
| Countdown timer | `setInterval` computing `endTime - Date.now()` |
| Stat counter animation | `requestAnimationFrame` eased counter |

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Semantic structure — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| CSS3 | Custom properties, Grid, Flexbox, `clamp()`, animations, `@media` queries |
| JavaScript (ES6+) | Modules pattern, `IntersectionObserver`, delegated events, arrow functions |
| Google Fonts | Playfair Display + Inter (loaded via `<link>`) |

No Bootstrap. No Tailwind. No React. No jQuery. No build tools.

---

## Design System

### Colour Palette

| Name | Hex | Usage |
|------|-----|-------|
| Charcoal Dark | `#1a1a2e` | Primary background, buttons, text |
| Deep Navy | `#16213e` | Hero gradient, footer |
| Ivory | `#f8f4ef` | Page background |
| Ivory 2 | `#f0ebe4` | Section alternating background |
| Gold | `#c9a96e` | Accent, CTAs, hover states, borders |
| Gold Light | `#dfc99a` | Hover variant of gold |
| Blush | `#e8d5c4` | Soft accent |
| Muted | `#7a7a8a` | Secondary text, placeholders |

### Typography

| Role | Font | Weights |
|------|------|---------|
| Display / Headings | Playfair Display | 400, 600, 700, Italic |
| Body / UI | Inter | 300, 400, 500, 600 |

### Spacing & Radii

- Base section padding: `5rem 0`
- Card border-radius: `--radius-lg: 20px`
- Button border-radius: `50px` (pill)
- Box shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-card`

---

## Getting Started

### 1. Download / Clone

```bash
# Download the three files or clone your repo
git clone https://github.com/yourname/srm-clothing.git
cd srm-clothing
```

### 2. Open in Browser

Simply open `index.html` directly in any modern browser:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or use VS Code's **Live Server** extension for hot reload during development.

### 3. Customise Products

Edit the `PRODUCTS` array at the top of `script.js`:

```js
{
  id: 1,
  name: 'Premium Slim-Fit Blazer',
  category: 'men',          // men | women | footwear | sunglasses | beauty | accessories
  price: 3299,              // sale price (INR)
  originalPrice: 5499,      // original price (INR)
  discount: 40,             // percentage
  rating: 4.8,              // 0–5
  reviews: 312,             // review count
  emoji: '🧥',             // product visual
  badge: 'sale',            // 'sale' | 'new' | 'hot' | null
  tags: ['men', 'formal']   // for search matching
}
```

### 4. Customise Colours

All colours are CSS custom properties in `style.css`:

```css
:root {
  --clr-dark:  #1a1a2e;
  --clr-gold:  #c9a96e;
  --clr-ivory: #f8f4ef;
  /* … */
}
```

---

## Responsive Breakpoints

| Breakpoint | Target | Key Changes |
|------------|--------|-------------|
| `> 1024px` | Desktop / Laptop | Full layout, hero visual visible, 5-column footer |
| `≤ 1024px` | Tablet | Hero visual hidden, 3-column footer, condensed grid |
| `≤ 768px` | Mobile | Hamburger nav, 2-column product grid, stacked newsletter |
| `≤ 480px` | Small Mobile | 1–2 column grids, smaller typography, single-column footer |

---

## Product Data

24 products are included across 6 categories:

| Category | Products |
|----------|----------|
| Men | Slim-Fit Blazer, Oxford Shirt, Chino Trousers, Merino Sweater |
| Women | Wrap Midi Dress, Wide-Leg Jeans, Linen Blazer, Silk Blouse |
| Footwear | Air Mesh Sneakers, Oxford Derbies, Block-Heel Sandals, Running Trainers |
| Sunglasses | Gold Aviators, Tortoise Wayfarers, Cat-Eye Frames, Wraparound Shades |
| Beauty | Velvet Matte Lipstick, Rose Eau de Parfum, Charcoal Face Wash, Glow Serum |
| Accessories | Leather Crossbody Bag, Canvas Tote, Italian Belt, Gold-Chain Necklace |

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |
| IE 11 | ❌ Not supported |

---

## Folder Structure (Expanded)

```
srm-clothing/
│
├── index.html          # 490 lines
│   ├── Top Header      # Logo, Search, Icons
│   ├── Sticky Nav      # 10 nav links + hamburger
│   ├── Hero Section
│   ├── Categories      # 6 category cards
│   ├── New Arrivals    # Filterable grid
│   ├── Men Collection
│   ├── Women Collection
│   ├── Footwear Collection
│   ├── Sunglasses Collection
│   ├── Beauty Collection
│   ├── Accessories Collection
│   ├── Promo Banner    # Sale + countdown
│   ├── Testimonials    # 4 customer cards
│   ├── Newsletter
│   └── Footer          # 5 columns + bottom bar
│
├── style.css           # 1,223 lines
│   ├── CSS Custom Properties (design tokens)
│   ├── Reset & Base
│   ├── Button Variants
│   ├── Header & Nav
│   ├── Hero
│   ├── Category Cards
│   ├── Product Cards & Grid
│   ├── Collection Sections
│   ├── Promo Banner
│   ├── Testimonials
│   ├── Newsletter
│   ├── Footer
│   ├── Toast & Back-to-Top
│   ├── Quick View Modal (injected by JS)
│   └── Responsive Media Queries
│
└── script.js           # 963 lines
    ├── PRODUCTS[]      # 24 product objects
    ├── STATE{}         # cart, wishlist, filter
    ├── Utility helpers (formatPrice, starsHTML, showToast)
    ├── renderProductCard()
    ├── populateAllGrids()
    ├── Cart logic
    ├── Wishlist logic
    ├── Product filtering
    ├── Search (debounced)
    ├── Mobile nav
    ├── Scroll spy
    ├── Smooth scroll
    ├── Back to top
    ├── Newsletter validation
    ├── Quick View modal
    ├── Scroll animations (IntersectionObserver)
    ├── Counter animation (RAF)
    └── Promo countdown timer
```

---

## License

© 2025 SRM Clothing. All rights reserved.

Built with HTML5, CSS3, and Vanilla JavaScript.
