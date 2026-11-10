//!
// * Aamir Almani - Game Developer Website
// * Vanilla JavaScript - no frameworks, no dependencies
//!

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    
    // Sticky header on scroll
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down - hide header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Show success message
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
            contactForm.reset();
        });
    }
    
    // Counter animation for stats (if any)
    const animateCounters = function() {
        const counters = document.querySelectorAll('.counter');
        
        if (counters.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const countTo = parseFloat(target.getAttribute('data-count'));
                    const duration = 2000;
                    const startTime = performance.now();
                    
                    function updateCount(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const currentCount = countTo * easeOut;
                        
                        if (target.textContent.includes('%')) {
                            target.textContent = currentCount.toFixed(0) + '%';
                        } else {
                            target.textContent = Math.floor(currentCount);
                        }
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        }
                    }
                    
                    requestAnimationFrame(updateCount);
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    };
    
    // Initialize
    animateCounters();
});