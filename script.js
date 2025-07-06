class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.init();
    }

    init() {
        const savedTheme = this.getSavedTheme();
        this.setTheme(savedTheme);
        
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    getSavedTheme() {
        return this.currentTheme || 'light';
    }

    saveTheme(theme) {
        this.currentTheme = theme;
    }

    setTheme(theme) {
        this.body.setAttribute('data-theme', theme);
        this.updateThemeIcon(theme);
        this.saveTheme(theme);
    }

    toggleTheme() {
        const currentTheme = this.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateThemeIcon(theme) {
        const icon = this.themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 70; 
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.updateNavbarOnScroll();
        });
    }

    updateNavbarOnScroll() {
        const scrolled = window.scrollY > 50;
        
        if (scrolled) {
            this.navbar.style.backgroundColor = 'var(--navbar-bg)';
            this.navbar.style.backdropFilter = 'blur(10px)';
        } else {
            this.navbar.style.backgroundColor = 'var(--navbar-bg)';
            this.navbar.style.backdropFilter = 'blur(10px)';
        }
    }
}

// Animation on Scroll
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        // Create intersection observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe elements
        this.observeElements();
    }

    observeElements() {
        const elementsToAnimate = document.querySelectorAll(
            '.skill-item, .project-card, .contact-info, .about-content'
        );
        
        elementsToAnimate.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(element);
        });
    }

    animateElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        this.observer.unobserve(element);
    }
}

// Typing Effect for Hero Section
class TypingEffect {
    constructor() {
        this.heroText = document.querySelector('.hero-section p');
        this.texts = [
            'Data Science Student & ML Enthusiast',
            'Passionate about Machine Learning',
            'Deep Learning & AI Explorer',
            'Future Data Scientist'
        ];
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typeSpeed = 100;
        this.deleteSpeed = 50;
        this.pauseTime = 2000;
        this.init();
    }

    init() {
        if (this.heroText) {
            this.type();
        }
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.heroText.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.heroText.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }

        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Skill Progress Animation
class SkillProgress {
    constructor() {
        this.init();
    }

    init() {
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                this.animateSkillHover(item);
            });
        });
    }

    animateSkillHover(item) {
        const icon = item.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        
        setTimeout(() => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    }
}

// Project Card Interactions
class ProjectInteractions {
    constructor() {
        this.init();
    }

    init() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.animateProjectHover(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.resetProjectHover(card);
            });
        });
    }

    animateProjectHover(card) {
        const icon = card.querySelector('.project-img i');
        const badges = card.querySelectorAll('.tech-badge');
        
        icon.style.transform = 'scale(1.1)';
        badges.forEach((badge, index) => {
            setTimeout(() => {
                badge.style.transform = 'scale(1.05)';
            }, index * 50);
        });
    }

    resetProjectHover(card) {
        const icon = card.querySelector('.project-img i');
        const badges = card.querySelectorAll('.tech-badge');
        
        icon.style.transform = 'scale(1)';
        badges.forEach(badge => {
            badge.style.transform = 'scale(1)';
        });
    }
}

// Contact Form Interactions (if you add a contact form later)
class ContactForm {
    constructor() {
        this.init();
    }

    init() {
        // Add hover effects to contact items
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const icon = item.querySelector('i');
                icon.style.transform = 'scale(1.2)';
                icon.style.color = 'var(--accent-color)';
            });
            
            item.addEventListener('mouseleave', () => {
                const icon = item.querySelector('i');
                icon.style.transform = 'scale(1)';
                icon.style.color = 'var(--secondary-color)';
            });
        });
    }
}

// Navigation Active State
class NavigationActive {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.updateActiveNavigation();
        });
    }

    updateActiveNavigation() {
        const scrollPosition = window.scrollY + 100;
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new ThemeManager();
    new SmoothScroll();
    new NavbarScroll();
    new ScrollAnimations();
    new TypingEffect();
    new SkillProgress();
    new ProjectInteractions();
    new ContactForm();
    new NavigationActive();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate positions if needed
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.transition = 'none';
        setTimeout(() => {
            navbar.style.transition = '';
        }, 100);
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Toggle theme with 'T' key
    if (e.key.toLowerCase() === 't' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.click();
        }
    }
});

// Preload images and resources
const preloadResources = () => {
    const images = [
        'https://via.placeholder.com/250x250/3498db/ffffff?text=AJ'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

// Call preload when page loads
window.addEventListener('load', preloadResources);