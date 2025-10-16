// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Load the image
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        
                        // Once loaded, stop observing
                        img.addEventListener('load', () => {
                            img.removeAttribute('data-src');
                        });
                        
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            // Load images slightly before they enter viewport
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        // Start observing each lazy-load image
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
                img.removeAttribute('data-src');
            }
        });
    }
    
    // Smooth scroll behavior for navigation links (for browsers without CSS support)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId !== '#main-content') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add animation on scroll for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    if ('IntersectionObserver' in window) {
        // Set initial state for cards
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Respect user's motion preferences
                    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    
                    if (!prefersReducedMotion) {
                        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    } else {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                    
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        projectCards.forEach(card => {
            cardObserver.observe(card);
        });
    }
});
