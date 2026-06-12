/* ============================================================
   SRM Clothing – script.js
   Features: Cart, Wishlist, Search, Filter, Nav, Newsletter,
             Scroll Animations, Back-to-Top, Toast Notifications
   ============================================================ */

'use strict';

/* ============================================================
   PRODUCT DATA
   ============================================================ */
const PRODUCTS = [
  // ── MEN ──
  {
    id: 1, name: 'Premium Slim-Fit Blazer', category: 'men',
    price: 3299, originalPrice: 5499, discount: 40,
    rating: 4.8, reviews: 312, emoji: '🧥',
    badge: 'sale', tags: ['men', 'formal', 'blazer']
  },
  {
    id: 2, name: 'Oxford Button-Down Shirt', category: 'men',
    price: 1199, originalPrice: 1899, discount: 37,
    rating: 4.6, reviews: 218, emoji: '👔',
    badge: 'new', tags: ['men', 'casual', 'shirt']
  },
  {
    id: 3, name: 'Slim Chino Trousers', category: 'men',
    price: 1599, originalPrice: 2499, discount: 36,
    rating: 4.5, reviews: 175, emoji: '👖',
    badge: null, tags: ['men', 'casual', 'trousers']
  },
  {
    id: 4, name: 'Merino Wool Sweater', category: 'men',
    price: 2499, originalPrice: 3799, discount: 34,
    rating: 4.9, reviews: 401, emoji: '🧶',
    badge: 'hot', tags: ['men', 'winter', 'sweater']
  },

  // ── WOMEN ──
  {
    id: 5, name: 'Floral Wrap Midi Dress', category: 'women',
    price: 2199, originalPrice: 3499, discount: 37,
    rating: 4.9, reviews: 528, emoji: '👗',
    badge: 'new', tags: ['women', 'dress', 'summer']
  },
  {
    id: 6, name: 'High-Waist Wide-Leg Jeans', category: 'women',
    price: 1899, originalPrice: 2999, discount: 37,
    rating: 4.7, reviews: 342, emoji: '👖',
    badge: 'hot', tags: ['women', 'denim', 'jeans']
  },
  {
    id: 7, name: 'Linen Cropped Blazer', category: 'women',
    price: 2799, originalPrice: 4299, discount: 35,
    rating: 4.6, reviews: 214, emoji: '🧥',
    badge: 'sale', tags: ['women', 'formal', 'blazer']
  },
  {
    id: 8, name: 'Silk Evening Blouse', category: 'women',
    price: 1699, originalPrice: 2599, discount: 35,
    rating: 4.8, reviews: 287, emoji: '👚',
    badge: null, tags: ['women', 'evening', 'blouse']
  },

  // ── FOOTWEAR ──
  {
    id: 9, name: 'Air Mesh Sneakers', category: 'footwear',
    price: 2499, originalPrice: 3999, discount: 38,
    rating: 4.8, reviews: 634, emoji: '👟',
    badge: 'hot', tags: ['footwear', 'sneakers', 'sports']
  },
  {
    id: 10, name: 'Oxford Derby Shoes', category: 'footwear',
    price: 3199, originalPrice: 4799, discount: 33,
    rating: 4.7, reviews: 198, emoji: '👞',
    badge: null, tags: ['footwear', 'formal', 'oxford']
  },
  {
    id: 11, name: 'Strappy Block-Heel Sandals', category: 'footwear',
    price: 1599, originalPrice: 2499, discount: 36,
    rating: 4.6, reviews: 271, emoji: '👡',
    badge: 'new', tags: ['footwear', 'sandals', 'women']
  },
  {
    id: 12, name: 'Pro Running Trainers', category: 'footwear',
    price: 4299, originalPrice: 6499, discount: 34,
    rating: 4.9, reviews: 512, emoji: '🥾',
    badge: 'sale', tags: ['footwear', 'sports', 'running']
  },

  // ── SUNGLASSES ──
  {
    id: 13, name: 'Gold Aviator Sunglasses', category: 'sunglasses',
    price: 1299, originalPrice: 2199, discount: 41,
    rating: 4.8, reviews: 389, emoji: '🕶️',
    badge: 'hot', tags: ['sunglasses', 'aviator', 'unisex']
  },
  {
    id: 14, name: 'Tortoise Wayfarer Classic', category: 'sunglasses',
    price: 999, originalPrice: 1699, discount: 41,
    rating: 4.7, reviews: 256, emoji: '🕶️',
    badge: 'sale', tags: ['sunglasses', 'wayfarer', 'classic']
  },
  {
    id: 15, name: 'Oversized Cat-Eye Frames', category: 'sunglasses',
    price: 1199, originalPrice: 1899, discount: 37,
    rating: 4.6, reviews: 183, emoji: '🕶️',
    badge: 'new', tags: ['sunglasses', 'cat-eye', 'women']
  },
  {
    id: 16, name: 'Sporty Wraparound Shades', category: 'sunglasses',
    price: 1499, originalPrice: 2299, discount: 35,
    rating: 4.5, reviews: 142, emoji: '🕶️',
    badge: null, tags: ['sunglasses', 'sports', 'wraparound']
  },

  // ── BEAUTY ──
  {
    id: 17, name: 'Velvet Matte Lipstick', category: 'beauty',
    price: 549, originalPrice: 899, discount: 39,
    rating: 4.8, reviews: 721, emoji: '💄',
    badge: 'hot', tags: ['beauty', 'lipstick', 'makeup']
  },
  {
    id: 18, name: 'Midnight Rose Eau de Parfum', category: 'beauty',
    price: 2999, originalPrice: 4499, discount: 33,
    rating: 4.9, reviews: 465, emoji: '🌹',
    badge: 'new', tags: ['beauty', 'perfume', 'fragrance']
  },
  {
    id: 19, name: 'Gentle Charcoal Face Wash', category: 'beauty',
    price: 399, originalPrice: 699, discount: 43,
    rating: 4.6, reviews: 338, emoji: '🧴',
    badge: 'sale', tags: ['beauty', 'face-wash', 'skincare']
  },
  {
    id: 20, name: 'Hyaluronic Glow Serum', category: 'beauty',
    price: 1299, originalPrice: 1999, discount: 35,
    rating: 4.8, reviews: 512, emoji: '✨',
    badge: null, tags: ['beauty', 'skincare', 'serum']
  },

  // ── ACCESSORIES ──
  {
    id: 21, name: 'Leather Crossbody Bag', category: 'accessories',
    price: 2999, originalPrice: 4599, discount: 35,
    rating: 4.8, reviews: 298, emoji: '👜',
    badge: 'new', tags: ['accessories', 'bag', 'leather']
  },
  {
    id: 22, name: 'Woven Canvas Tote Bag', category: 'accessories',
    price: 1199, originalPrice: 1899, discount: 37,
    rating: 4.6, reviews: 187, emoji: '👛',
    badge: null, tags: ['accessories', 'bag', 'tote']
  },
  {
    id: 23, name: 'Italian Leather Belt', category: 'accessories',
    price: 899, originalPrice: 1499, discount: 40,
    rating: 4.7, reviews: 221, emoji: '👔',
    badge: 'sale', tags: ['accessories', 'belt', 'leather']
  },
  {
    id: 24, name: 'Gold-Chain Statement Necklace', category: 'accessories',
    price: 1599, originalPrice: 2499, discount: 36,
    rating: 4.9, reviews: 374, emoji: '📿',
    badge: 'hot', tags: ['accessories', 'jewellery', 'necklace']
  }
];

/* ============================================================
   STATE
   ============================================================ */
const state = {
  cart: [],       // { product, qty }
  wishlist: [],   // product ids
  currentFilter: 'all'
};

/* ============================================================
   UTILITY HELPERS
   ============================================================ */

/**
 * Format a number as Indian Rupee currency string
 */
function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

/**
 * Generate star HTML for a given numeric rating (0–5)
 */
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/**
 * Show a temporary toast notification
 */
function showToast(msg, duration = 2800) {
  const toast = document.getElementById('cartToast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

/**
 * Animate the cart count badge
 */
function bumpCartCount() {
  const el = document.getElementById('cartCount');
  el.classList.remove('bump');
  void el.offsetWidth; // reflow
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

/* ============================================================
   RENDER PRODUCT CARD
   ============================================================ */
function renderProductCard(product) {
  const inWishlist = state.wishlist.includes(product.id);
  const badgeHTML  = product.badge
    ? `<span class="badge badge-${product.badge}">${
        product.badge === 'sale' ? `${product.discount}% OFF`
          : product.badge === 'new' ? 'New'
          : 'Hot'
      }</span>`
    : '';

  return `
    <article class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-img-wrap">
        <div class="product-emoji" aria-hidden="true">${product.emoji}</div>

        <div class="product-overlay">
          <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
        </div>

        <div class="product-badges">${badgeHTML}</div>

        <button
          class="wishlist-btn ${inWishlist ? 'active' : ''}"
          data-id="${product.id}"
          aria-label="${inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}"
          aria-pressed="${inWishlist}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>

        <div class="product-rating">
          <span class="stars" aria-label="${product.rating} out of 5">${starsHTML(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>

        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          <span class="price-original">${formatPrice(product.originalPrice)}</span>
          <span class="price-off">${product.discount}% off</span>
        </div>

        <button
          class="add-to-cart-btn"
          data-id="${product.id}"
          aria-label="Add ${product.name} to cart">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Add to Cart
        </button>
      </div>
    </article>`;
}

/* ============================================================
   POPULATE GRIDS
   ============================================================ */
function populateGrid(containerId, filterFn, limit = 8) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const filtered = PRODUCTS.filter(filterFn).slice(0, limit);
  container.innerHTML = filtered.map(renderProductCard).join('');
}

function populateAllGrids() {
  // New Arrivals – all products (latest 8 visible by default)
  const naGrid = document.getElementById('newArrivalsGrid');
  if (naGrid) {
    naGrid.innerHTML = PRODUCTS.slice(0, 12).map(renderProductCard).join('');
  }

  populateGrid('menGrid',        p => p.category === 'men',         4);
  populateGrid('womenGrid',      p => p.category === 'women',       4);
  populateGrid('footwearGrid',   p => p.category === 'footwear',    4);
  populateGrid('sunglassesGrid', p => p.category === 'sunglasses',  4);
  populateGrid('beautyGrid',     p => p.category === 'beauty',      4);
  populateGrid('accessoriesGrid',p => p.category === 'accessories', 4);
}

/* ============================================================
   CART LOGIC
   ============================================================ */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.product.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ product, qty: 1 });
  }

  updateCartCount();
  showToast(`✓ "${product.name}" added to cart`);
  bumpCartCount();

  // Visual feedback on the button
  const btns = document.querySelectorAll(`.add-to-cart-btn[data-id="${productId}"]`);
  btns.forEach(btn => {
    btn.classList.add('added');
    btn.textContent = '✓ Added!';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        Add to Cart`;
    }, 1800);
  });
}

function updateCartCount() {
  const total = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

/* ============================================================
   WISHLIST LOGIC
   ============================================================ */
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const idx = state.wishlist.indexOf(productId);
  if (idx === -1) {
    state.wishlist.push(productId);
    showToast(`♥ "${product.name}" added to wishlist`);
  } else {
    state.wishlist.splice(idx, 1);
    showToast(`♡ "${product.name}" removed from wishlist`);
  }

  // Update all wishlist buttons for this product
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    const isActive = state.wishlist.includes(productId);
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
    btn.setAttribute('aria-label', isActive ? 'Remove from wishlist' : 'Add to wishlist');
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', isActive ? 'currentColor' : 'none');
  });
}

/* ============================================================
   PRODUCT FILTERING (New Arrivals)
   ============================================================ */
function applyFilter(filter) {
  state.currentFilter = filter;
  const grid = document.getElementById('newArrivalsGrid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.product-card');
  cards.forEach(card => {
    const cat = card.dataset.category;
    const show = filter === 'all' || cat === filter;
    card.classList.toggle('hidden', !show);
    // Animate reveal
    if (show) {
      card.style.animation = 'none';
      void card.offsetWidth;
      card.style.animation = 'fadeInUp .3s ease forwards';
    }
  });

  // Update tab states
  document.querySelectorAll('.filter-tab').forEach(tab => {
    const active = tab.dataset.filter === filter;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active);
  });
}

/* ============================================================
   SEARCH
   ============================================================ */
function performSearch(query) {
  const resultsEl = document.getElementById('searchResults');
  const q = query.trim().toLowerCase();

  if (!q) {
    resultsEl.innerHTML = '';
    resultsEl.classList.remove('open');
    return;
  }

  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q))
  ).slice(0, 6);

  if (matches.length === 0) {
    resultsEl.innerHTML = `<p class="search-no-results">No results for "<strong>${query}</strong>"</p>`;
  } else {
    resultsEl.innerHTML = matches.map(p => `
      <div class="search-result-item" data-id="${p.id}" role="option" tabindex="0">
        <div class="result-emoji">${p.emoji}</div>
        <div class="result-info">
          <div class="result-name">${p.name}</div>
          <div class="result-cat">${p.category}</div>
        </div>
        <div class="result-price">${formatPrice(p.price)}</div>
      </div>`).join('');
  }

  resultsEl.classList.add('open');
}

/* ============================================================
   HAMBURGER / MOBILE NAV
   ============================================================ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navList   = document.getElementById('navList');

  hamburger.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close when a nav link is clicked
  navList.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!navList.contains(e.target) && !hamburger.contains(e.target)) {
      navList.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ============================================================
   STICKY NAV – ACTIVE LINK ON SCROLL
   ============================================================ */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const offset   = 120; // px from top before activating

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: `-${offset}px 0px -60% 0px` });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   SMOOTH SCROLL FOR NAV & CTA LINKS
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const topOffset = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--total-offset') || '126', 10
      );
      const y = target.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   BACK-TO-TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   NEWSLETTER FORM VALIDATION
   ============================================================ */
function initNewsletter() {
  const form   = document.getElementById('newsletterForm');
  const input  = document.getElementById('newsletterEmail');
  const msgEl  = document.getElementById('newsletterMsg');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = input.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      msgEl.textContent = '⚠ Please enter your email address.';
      msgEl.className   = 'newsletter-msg error';
      input.focus();
      return;
    }
    if (!emailRe.test(email)) {
      msgEl.textContent = '⚠ Please enter a valid email address.';
      msgEl.className   = 'newsletter-msg error';
      input.focus();
      return;
    }

    // Success state
    msgEl.textContent = `✓ You're subscribed! Welcome to the SRM Clothing family.`;
    msgEl.className   = 'newsletter-msg success';
    input.value       = '';
    showToast('🎉 Subscribed successfully!');

    // Reset message after a while
    setTimeout(() => { msgEl.textContent = ''; msgEl.className = 'newsletter-msg'; }, 6000);
  });
}

/* ============================================================
   SEARCH INITIALISATION
   ============================================================ */
function initSearch() {
  const input     = document.getElementById('searchInput');
  const resultsEl = document.getElementById('searchResults');
  const searchBtn = document.getElementById('searchBtn');

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => performSearch(input.value), 220);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) resultsEl.classList.add('open');
  });

  // Hide on outside click
  document.addEventListener('click', e => {
    if (!input.closest('.search-wrap').contains(e.target) && !resultsEl.contains(e.target)) {
      resultsEl.classList.remove('open');
    }
  });

  // Search button click
  searchBtn.addEventListener('click', () => performSearch(input.value));

  // Keyboard: Enter
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); performSearch(input.value); }
    if (e.key === 'Escape') { resultsEl.classList.remove('open'); input.blur(); }
  });

  // Click on result item
  resultsEl.addEventListener('click', e => {
    const item = e.target.closest('.search-result-item');
    if (!item) return;
    const id = parseInt(item.dataset.id, 10);
    addToCart(id);
    resultsEl.classList.remove('open');
    input.value = '';
  });

  // Keyboard navigation in results
  resultsEl.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const focused = document.activeElement.closest('.search-result-item');
      if (focused) {
        const id = parseInt(focused.dataset.id, 10);
        addToCart(id);
        resultsEl.classList.remove('open');
        input.value = '';
      }
    }
  });
}

/* ============================================================
   FILTER TABS INITIALISATION
   ============================================================ */
function initFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => applyFilter(tab.dataset.filter));
  });
}

/* ============================================================
   DELEGATED EVENT LISTENERS FOR PRODUCT CARDS
   ============================================================ */
function initProductEvents() {
  document.addEventListener('click', e => {
    // Add to Cart
    const cartBtn = e.target.closest('.add-to-cart-btn');
    if (cartBtn) {
      const id = parseInt(cartBtn.dataset.id, 10);
      addToCart(id);
      return;
    }

    // Wishlist Toggle
    const wlBtn = e.target.closest('.wishlist-btn');
    if (wlBtn) {
      const id = parseInt(wlBtn.dataset.id, 10);
      toggleWishlist(id);
      return;
    }

    // Quick View
    const qvBtn = e.target.closest('.quick-view-btn');
    if (qvBtn) {
      const id = parseInt(qvBtn.dataset.id, 10);
      showQuickView(id);
      return;
    }
  });
}

/* ============================================================
   QUICK VIEW MODAL
   ============================================================ */
function showQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Remove existing modal if any
  const existing = document.getElementById('quickViewModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id        = 'quickViewModal';
  modal.className = 'qv-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', product.name);

  modal.innerHTML = `
    <div class="qv-backdrop"></div>
    <div class="qv-box">
      <button class="qv-close" aria-label="Close">&times;</button>
      <div class="qv-img">${product.emoji}</div>
      <div class="qv-content">
        <span class="product-category">${product.category}</span>
        <h2 class="qv-name">${product.name}</h2>
        <div class="product-rating">
          <span class="stars">${starsHTML(product.rating)}</span>
          <span class="rating-count">(${product.reviews} reviews)</span>
        </div>
        <div class="product-price" style="margin:.5rem 0 1rem">
          <span class="price-current">${formatPrice(product.price)}</span>
          <span class="price-original">${formatPrice(product.originalPrice)}</span>
          <span class="price-off">${product.discount}% off</span>
        </div>
        <p class="qv-desc">Premium quality piece crafted for style and comfort. Part of our exclusive ${product.category} collection.</p>
        <div class="qv-actions">
          <button class="add-to-cart-btn" data-id="${product.id}" style="max-width:200px">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Add to Cart
          </button>
          <button class="wishlist-btn ${state.wishlist.includes(product.id) ? 'active' : ''}" data-id="${product.id}" style="position:static;width:44px;height:44px">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${state.wishlist.includes(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Animate in
  requestAnimationFrame(() => modal.classList.add('qv-open'));

  // Close handlers
  const close = () => {
    modal.classList.remove('qv-open');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
  };

  modal.querySelector('.qv-close').addEventListener('click', close);
  modal.querySelector('.qv-backdrop').addEventListener('click', close);
  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onKey); }
  });
}

/* ============================================================
   SCROLL-BASED ANIMATIONS (Intersection Observer)
   ============================================================ */
function initScrollAnimations() {
  // Add fade-in-up keyframe dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .anim-hidden { opacity: 0; transform: translateY(24px); transition: opacity .55s ease, transform .55s ease; }
    .anim-visible { opacity: 1; transform: translateY(0); }

    /* Quick View Modal */
    .qv-modal { position:fixed;inset:0;z-index:9998;display:flex;align-items:center;justify-content:center;padding:1rem; }
    .qv-backdrop { position:absolute;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);opacity:0;transition:opacity .3s; }
    .qv-box {
      position:relative;background:var(--clr-white);border-radius:var(--radius-xl);
      padding:2rem;max-width:640px;width:100%;display:flex;gap:1.5rem;align-items:flex-start;
      transform:scale(.9) translateY(16px);transition:transform .3s cubic-bezier(.34,1.56,.64,1);
      max-height:90vh;overflow-y:auto;
    }
    .qv-open .qv-backdrop { opacity:1; }
    .qv-open .qv-box { transform:scale(1) translateY(0); }
    .qv-close {
      position:absolute;top:1rem;right:1rem;width:32px;height:32px;border-radius:50%;
      background:var(--clr-ivory-2);display:flex;align-items:center;justify-content:center;
      font-size:1.25rem;line-height:1;color:var(--clr-dark);cursor:pointer;transition:background .2s;
    }
    .qv-close:hover { background:var(--clr-border); }
    .qv-img { font-size:6rem;flex-shrink:0;width:140px;height:160px;display:flex;align-items:center;justify-content:center;background:var(--clr-ivory-2);border-radius:var(--radius-lg); }
    .qv-content { flex:1;min-width:0; }
    .qv-name { font-family:var(--ff-display);font-size:1.4rem;color:var(--clr-dark);margin:.25rem 0 .5rem; }
    .qv-desc { font-size:.875rem;color:var(--clr-muted);line-height:1.7;margin-bottom:1rem; }
    .qv-actions { display:flex;gap:.75rem;align-items:center;flex-wrap:wrap; }
    @media(max-width:540px){
      .qv-box{flex-direction:column;align-items:center;text-align:center;}
      .qv-img{width:100%;height:120px;}
    }
  `;
  document.head.appendChild(style);

  // Animate cards and section heads
  const animTargets = document.querySelectorAll(
    '.product-card, .cat-card, .testimonial-card, .section-head, .hero-content'
  );
  animTargets.forEach((el, i) => {
    el.classList.add('anim-hidden');
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-visible');
        entry.target.classList.remove('anim-hidden');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animTargets.forEach(el => observer.observe(el));
}

/* ============================================================
   HEADER HIDE-ON-SCROLL (subtle UX on mobile)
   ============================================================ */
function initHeaderBehaviour() {
  const header = document.getElementById('topHeader');
  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    // Only hide on mobile
    if (window.innerWidth <= 768) {
      if (y > lastY && y > 80) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastY = y;
  }, { passive: true });
}

/* ============================================================
   CATEGORY CARD CLICK → SCROLL & FILTER
   ============================================================ */
function initCategoryCards() {
  document.querySelectorAll('.cat-card[data-filter]').forEach(card => {
    card.addEventListener('click', e => {
      // The href handles the scroll; also set filter tab if applicable
      const filter = card.dataset.filter;
      const tab = document.querySelector(`.filter-tab[data-filter="${filter}"]`);
      if (tab) applyFilter(filter);
    });
  });
}

/* ============================================================
   WISHLIST HEADER BUTTON FEEDBACK
   ============================================================ */
function initWishlistHeaderBtn() {
  document.getElementById('wishlistToggleBtn')?.addEventListener('click', () => {
    const count = state.wishlist.length;
    if (count === 0) {
      showToast('Your wishlist is empty. Tap ♡ on any product!');
    } else {
      showToast(`You have ${count} item${count > 1 ? 's' : ''} in your wishlist ♥`);
    }
  });
}

/* ============================================================
   COUNTER ANIMATION (stat numbers in hero)
   ============================================================ */
function animateCounters() {
  const stats = document.querySelectorAll('.stat strong');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el   = entry.target;
      const raw  = el.textContent;
      const num  = parseInt(raw.replace(/\D/g, ''), 10);
      const suffix = raw.replace(/[\d,]/g, '');
      let start = 0;
      const duration = 1200;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * num).toLocaleString('en-IN') + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: .5 });
  stats.forEach(s => observer.observe(s));
}

/* ============================================================
   PROMO BANNER COUNTDOWN (adds urgency to sale section)
   ============================================================ */
function initPromoCountdown() {
  // Countdown ends 3 days from now
  const endTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

  const banner = document.querySelector('.promo-text');
  if (!banner) return;

  // Inject countdown
  const cdEl = document.createElement('div');
  cdEl.className = 'promo-countdown';
  cdEl.innerHTML = `
    <span>Offer ends in:</span>
    <div class="cd-blocks">
      <div class="cd-block"><strong id="cdH">00</strong><small>Hrs</small></div>
      <div class="cd-sep">:</div>
      <div class="cd-block"><strong id="cdM">00</strong><small>Min</small></div>
      <div class="cd-sep">:</div>
      <div class="cd-block"><strong id="cdS">00</strong><small>Sec</small></div>
    </div>`;
  banner.insertBefore(cdEl, banner.querySelector('.btn-gold'));

  // Add styles inline (self-contained)
  const s = document.createElement('style');
  s.textContent = `
    .promo-countdown{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap}
    .promo-countdown>span{font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.55)}
    .cd-blocks{display:flex;align-items:center;gap:.5rem}
    .cd-block{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:.4rem .75rem;text-align:center;min-width:52px}
    .cd-block strong{display:block;font-size:1.4rem;font-weight:700;color:#fff;font-family:var(--ff-display);line-height:1}
    .cd-block small{font-size:.6rem;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.5)}
    .cd-sep{font-size:1.4rem;font-weight:700;color:var(--clr-gold);line-height:1}
  `;
  document.head.appendChild(s);

  function tick() {
    const now  = new Date().getTime();
    const diff = endTime - now;
    if (diff <= 0) { clearInterval(timer); return; }
    const h = Math.floor(diff / 36e5);
    const m = Math.floor((diff % 36e5) / 6e4);
    const sec = Math.floor((diff % 6e4) / 1e3);
    const pad = n => String(n).padStart(2, '0');
    document.getElementById('cdH').textContent = pad(h);
    document.getElementById('cdM').textContent = pad(m);
    document.getElementById('cdS').textContent = pad(sec);
  }
  tick();
  const timer = setInterval(tick, 1000);
}

/* ============================================================
   INIT – runs when DOM is ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Populate product grids
  populateAllGrids();

  // 2. Core interactions
  initMobileNav();
  initSmoothScroll();
  initScrollSpy();
  initBackToTop();
  initSearch();
  initFilterTabs();
  initProductEvents();
  initNewsletter();
  initCategoryCards();
  initWishlistHeaderBtn();
  initHeaderBehaviour();

  // 3. Visual enhancements
  initScrollAnimations();
  animateCounters();
  initPromoCountdown();

  console.log('%c✦ SRM Clothing loaded successfully', 'color:#c9a96e;font-size:14px;font-weight:700;');
});
