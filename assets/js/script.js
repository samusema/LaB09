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
const navLinks = document.querySelectorAll('[data-section]');
const contentSections = document.querySelectorAll('.content-section');

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
   Navigation
   ======================================== */

/**
 * Handles navigation link clicks
 * Switches between content sections
 */
function handleNavLinkClick(event) {
    event.preventDefault();
    
    const link = event.currentTarget;
    const targetSection = link.getAttribute('data-section');
    
    // Show target section
    switchSection(targetSection);
    
    // Smooth scroll to top of content
    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Switches between content sections
 * @param {string} sectionId - The ID of the section to show
 */
function switchSection(sectionId) {
    contentSections.forEach(section => {
        section.classList.remove('content-section--active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('content-section--active');
    }
}

/* ========================================
   Filter Buttons (Orders Section)
   ======================================== */

/**
 * Handles filter button clicks in the orders section
 */
function handleFilterClick(event) {
    const button = event.currentTarget;
    const filterValue = button.getAttribute('data-filter');
    
    // Update active state
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
    button.classList.add('filter-btn--active');
    
    // Filter orders (mock implementation)
    filterOrders(filterValue);
}

/**
 * Filters orders based on status
 * @param {string} status - The status to filter by
 */
function filterOrders(status) {
    const ordersTable = document.querySelector('.orders-table');
    
    // Mock data - in a real application, this would fetch from an API
    const mockOrders = {
        all: [
            { id: 'ORD-1234', customer: 'Mario Rossi', status: 'preparing', amount: '€28.50' },
            { id: 'ORD-1233', customer: 'Laura Bianchi', status: 'ready', amount: '€42.00' },
            { id: 'ORD-1232', customer: 'Giuseppe Verdi', status: 'delivered', amount: '€35.50' },
            { id: 'ORD-1231', customer: 'Anna Ferrari', status: 'preparing', amount: '€31.00' },
            { id: 'ORD-1230', customer: 'Paolo Conti', status: 'delivered', amount: '€25.50' }
        ],
        preparing: [
            { id: 'ORD-1234', customer: 'Mario Rossi', status: 'preparing', amount: '€28.50' },
            { id: 'ORD-1231', customer: 'Anna Ferrari', status: 'preparing', amount: '€31.00' }
        ],
        ready: [
            { id: 'ORD-1233', customer: 'Laura Bianchi', status: 'ready', amount: '€42.00' }
        ],
        delivered: [
            { id: 'ORD-1232', customer: 'Giuseppe Verdi', status: 'delivered', amount: '€35.50' },
            { id: 'ORD-1230', customer: 'Paolo Conti', status: 'delivered', amount: '€25.50' }
        ]
    };
    
    const orders = mockOrders[status] || mockOrders.all;
    
    // Generate table HTML
    let tableHTML = '<table class="orders-data-table">';
    tableHTML += '<thead><tr><th>ID Ordine</th><th>Cliente</th><th>Status</th><th>Importo</th></tr></thead>';
    tableHTML += '<tbody>';
    
    orders.forEach(order => {
        const statusClass = `order-item__status--${order.status}`;
        const statusText = {
            preparing: 'In Preparazione',
            ready: 'Pronto',
            delivered: 'Consegnato'
        }[order.status];
        
        tableHTML += `
            <tr>
                <td><strong>${order.id}</strong></td>
                <td>${order.customer}</td>
                <td><span class="order-item__status ${statusClass}">${statusText}</span></td>
                <td><strong>${order.amount}</strong></td>
            </tr>
        `;
    });
    
    tableHTML += '</tbody></table>';
    ordersTable.innerHTML = tableHTML;
}

/* ========================================
   Search Functionality
   ======================================== */

/**
 * Handles search input
 */
function handleSearchInput(event) {
    const searchTerm = event.target.value.toLowerCase();
    console.log('Searching for:', searchTerm);
    // Implement search logic here
}

/* ========================================
   Notifications
   ======================================== */

/**
 * Handles notification button click
 */
function handleNotificationClick() {
    // Mock notification display
    showNotification('Hai 3 nuove notifiche');
}

/**
 * Shows a notification message
 * @param {string} message - The notification message
 */
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: var(--color-primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ========================================
   User Menu Dropdown
   ======================================== */

/**
 * Handles user menu click
 */
function handleUserMenuClick() {
    console.log('User menu clicked');
    // Implement dropdown menu here
}

/* ========================================
   Dynamic Stats Update
   ======================================== */

/**
 * Updates dashboard statistics (mock)
 */
function updateDashboardStats() {
    // In a real application, this would fetch data from an API
    console.log('Stats updated');
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
   Window Resize Handler
   ======================================== */

/**
 * Handles window resize events
 */
function handleResize() {
    // Responsive adjustments if needed
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
    
    // Navigation links (navbar + footer)
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    // Search input
    const searchInput = document.querySelector('.search-box__input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
    }
    
    // Window resize
    window.addEventListener('resize', handleResize);
}

/* ========================================
   Initialization
   ======================================== */

/**
 * Main initialization function
 * Called when DOM is ready
 */
function init() {
    console.log('Pizzeria B09 Dashboard initialized');
    
    // Setup event listeners
    initEventListeners();
    
    // Initialize animations
    initAnimations();
    
    // Update stats periodically (every 30 seconds)
    setInterval(updateDashboardStats, 30000);
    
    // Add CSS animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .orders-data-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .orders-data-table th,
        .orders-data-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid var(--color-gray-200);
        }
        
        .orders-data-table th {
            font-weight: 600;
            color: var(--color-dark);
            background: var(--color-gray-100);
        }
        
        .orders-data-table tbody tr {
            transition: background 0.2s ease;
        }
        
        .orders-data-table tbody tr:hover {
            background: var(--color-gray-100);
        }
    `;
    document.head.appendChild(style);
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
    switchSection,
    showNotification,
    updateDashboardStats
};

