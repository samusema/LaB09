/* ========================================
   Pizzeria B09 Dashboard - Main JavaScript
   ======================================== */

/* ========================================
   DOM Elements
   ======================================== */
const hero = document.getElementById('hero');
const scrollBtn = document.getElementById('scrollBtn');
const navbar = document.getElementById('navbar');
const mainContent = document.getElementById('mainContent');

/* ========================================
   State Management
   ======================================== */
let isHeroScrolled = false;

/* ========================================
   Hero Section & Scroll Effects
   ======================================== */

/**
 * Handles the hero scroll button click
 * Scrolls past the hero section and shows the dashboard
 */
function scrollToContent() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

/**
 * Handles scroll events for hero transformation
 * Shows/hides navbar based on scroll position
 */
function handleScroll() {
    const scrollPosition = window.scrollY;
    const heroHeight = hero.offsetHeight;
    
    // Hero scroll effect
    if (scrollPosition > heroHeight * 0.3 && !isHeroScrolled) {
        hero.classList.add('hero--scrolled');
        navbar.classList.add('navbar--visible');
        mainContent.classList.add('main-content--visible');
        isHeroScrolled = true;
    } else if (scrollPosition <= heroHeight * 0.1 && isHeroScrolled) {
        hero.classList.remove('hero--scrolled');
        navbar.classList.remove('navbar--visible');
        mainContent.classList.remove('main-content--visible');
        isHeroScrolled = false;
    }
}


/* ========================================
   Animations
   ======================================== */

/**
 * Adds entrance animations to elements
 */
function initAnimations() {
    // Animate stat cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}


/* ========================================
   Event Listeners Setup
   ======================================== */

/**
 * Initializes all event listeners
 */
function initEventListeners() {
    // Hero scroll button
    if (scrollBtn) {
        scrollBtn.addEventListener('click', scrollToContent);
    }
    
    // Window scroll
    window.addEventListener('scroll', handleScroll);
}

/* ========================================
   Initialization
   ======================================== */

/**
 * Main initialization function
 * Called when DOM is ready
 */
function init() {
    console.log('Pizzeria B09 Website initialized');
    
    // Setup event listeners
    initEventListeners();
    
    // Initialize animations
    initAnimations();
}

/* ========================================
   Start Application
   ======================================== */

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/* ========================================
   Export functions for external use
   ======================================== */
window.PizzeriaB09 = {
    init
};

