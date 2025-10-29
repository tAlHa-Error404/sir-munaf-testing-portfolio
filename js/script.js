/**
 * Custom JavaScript for Sir Munaf Majeed Portfolio
 * Handles smooth scrolling, gallery lightbox, navbar effects, and animations
 */

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const topBannerHeight = document.querySelector('.top-banner').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - topBannerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ============================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ============================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - navbarHeight)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// GALLERY CATEGORY FUNCTIONALITY
// ============================================
function showGalleryCategory(categoryId) {
    // Hide all gallery content sections
    const allContents = document.querySelectorAll('.gallery-content');
    allContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const allButtons = document.querySelectorAll('.gallery-category-btn');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected category content
    const selectedContent = document.getElementById(categoryId);
    selectedContent.classList.add('active');

    // Add active class to clicked button
    const selectedButton = document.querySelector(`[onclick="showGalleryCategory('${categoryId}')"]`);
    selectedButton.classList.add('active');
}

// ============================================
// GALLERY LIGHTBOX FUNCTIONALITY
// ============================================
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
const modalImage = document.getElementById('modalImage');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').getAttribute('src');
        const imgAlt = this.querySelector('img').getAttribute('alt');
        
        modalImage.setAttribute('src', imgSrc);
        modalImage.setAttribute('alt', imgAlt);
        modal.show();
    });
});

// ============================================
// ACHIEVEMENTS SECTION FUNCTIONALITY
// ============================================
function toggleAchievements() {
    const hiddenSection = document.querySelector('.achievement-hidden');
    const seeMoreBtn = document.querySelector('.see-more-btn');
    
    if (hiddenSection.style.display === 'block') {
        hiddenSection.style.display = 'none';
        seeMoreBtn.textContent = 'See More';
    } else {
        hiddenSection.style.display = 'block';
        seeMoreBtn.textContent = 'See Less';
    }
}

// ============================================
// FADE IN ANIMATION ON SCROLL
// ============================================
const fadeElements = document.querySelectorAll('.achievement-card, .event-card, .gallery-item');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// ============================================
// VIDEO AUTOPLAY FIX FOR MOBILE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-background video');
    
    if (video) {
        // Ensure video plays on mobile devices
        video.play().catch(error => {
            console.log('Video autoplay failed:', error);
        });
        
        // Pause video when not in view to save resources
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        });
        
        videoObserver.observe(video);
    }
});

// ============================================
// STAT COUNTER ANIMATION
// ============================================
const statNumbers = document.querySelectorAll('.stat-box h3');

const countUp = (element) => {
    const target = parseInt(element.textContent);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countUp(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ============================================
// FORM VALIDATION (if forms are added later)
// ============================================
const forms = document.querySelectorAll('.needs-validation');

forms.forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});

// ============================================
// BACK TO TOP BUTTON (Optional Enhancement)
// ============================================
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-arrow-up"></i>';
    button.className = 'btn btn-primary back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Uncomment the line below to enable back-to-top button
// createBackToTopButton();

// ============================================
// LAZY LOADING IMAGES (Performance Optimization)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    // If you want to implement lazy loading, add data-src attribute to images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// PRELOAD CRITICAL RESOURCES
// ============================================
window.addEventListener('load', function() {
    // Remove any loading screens if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
});

// ============================================
// CONSOLE MESSAGE (Optional)
// ============================================
console.log('%c👋 Welcome to Sir Munaf Majeed\'s Portfolio!', 
    'color: #C21E25; font-size: 20px; font-weight: bold;');
console.log('%cFor training sessions, engagement & business inquiries: munaf@example.com', 
    'color: #666; font-size: 14px;');

// ============================================
// ERROR HANDLING FOR MISSING ELEMENTS
// ============================================
window.addEventListener('error', function(e) {
    // Silently handle missing resource errors
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        console.warn('Resource failed to load:', e.target.src);
    }
}, true);

// ============================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ============================================
document.addEventListener('keydown', function(e) {
    // ESC key closes modal
    if (e.key === 'Escape') {
        const modalElement = document.getElementById('galleryModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
});

// ============================================
// TOUCH SWIPE SUPPORT FOR GALLERY (Mobile)
// ============================================
let touchStartX = 0;
let touchEndX = 0;

const galleryModal = document.getElementById('galleryModal');

if (galleryModal) {
    galleryModal.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    galleryModal.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe left - could implement next image
        console.log('Swiped left');
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe right - could implement previous image
        console.log('Swiped right');
    }
}

// ============================================
// PERFORMANCE MONITORING (Optional)
// ============================================
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // Log paint timing for optimization
            if (entry.entryType === 'paint') {
                console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`);
            }
        }
    });
    
    perfObserver.observe({ entryTypes: ['paint'] });
}

// ============================================
// INITIALIZATION COMPLETE
// ============================================
console.log('%c✅ Portfolio initialized successfully', 
    'color: #4CAF50; font-weight: bold;');
