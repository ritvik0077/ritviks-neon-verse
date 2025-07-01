
// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3000);
});

// Typewriter Effect
const typewriterText = document.getElementById('typewriter-text');
const texts = [
    'Creative Editor & Futurist',
    'Digital Storyteller',
    'Motion Graphics Artist',
    'Visual Experience Creator'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typewriterText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter effect after page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, 1000);
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Active Link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Skills Animation on Scroll
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.clientHeight;
    const scrollTop = window.scrollY;
    
    if (scrollTop > skillsSectionTop - window.innerHeight / 2 && 
        scrollTop < skillsSectionTop + skillsSectionHeight) {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
}

window.addEventListener('scroll', animateSkills);

// Fade in animations on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in-text, .timeline-item, .skill-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

// Modal Functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking on close button or outside modal
document.querySelectorAll('.modal').forEach(modal => {
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.addEventListener('click', () => closeModal(modal));
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'block') {
                closeModal(modal);
            }
        });
    }
});

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Simulate form submission
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
        
        // Add glowing effect to submit button
        const submitBtn = this.querySelector('.submit-btn');
        submitBtn.style.background = 'var(--primary-color)';
        submitBtn.style.color = 'var(--background-dark)';
        setTimeout(() => {
            submitBtn.style.background = 'transparent';
            submitBtn.style.color = 'var(--primary-color)';
        }, 2000);
    }
});

// Glitch Effect on Hover
document.querySelector('.glitch').addEventListener('mouseenter', function() {
    this.style.animation = 'glitch 0.3s infinite';
});

document.querySelector('.glitch').addEventListener('mouseleave', function() {
    this.style.animation = 'glitch 2s infinite';
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const particles = document.getElementById('particles-js');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (particles) {
        particles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add dynamic particle animation
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.position = 'fixed';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'var(--primary-color)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '-1';
    particle.style.opacity = Math.random();
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
        { transform: 'translateY(0px)', opacity: particle.style.opacity },
        { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'linear'
    });
    
    animation.onfinish = () => particle.remove();
}

// Create particles periodically
setInterval(createParticle, 300);

// Initialize AOS (Animate On Scroll) alternative
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.project-card, .skill-item, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.cta-button, .project-btn, .filter-btn, .social-link').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Dynamic background color change based on section
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const body = document.body;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            const sectionId = section.id;
            body.className = sectionId + '-active';
        }
    });
});

console.log('🚀 Futuristic Portfolio Initialized');
