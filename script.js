/**
 * Suki Tsubaki - Personal Website
 * Navigation functionality and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Menu navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all menu items and sections
            menuItems.forEach(m => m.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked menu item
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            
            // Initialize scroll animations for the newly active section
            initScrollAnimations();
            
            // Animate heading letters in the newly active section
            animateHeadings();
        });
    });
    
    // Scroll handler for sticky header
    window.addEventListener('scroll', function() {
        // Get scroll position
        const scrollPosition = window.scrollY;
        
        // Add 'scrolled' class to header when page is scrolled
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update sticky h2 position based on header height
        updateStickyHeadings();
        
        // Use a throttled version in a real implementation
        initScrollAnimations();
    });
    
    // Function to update sticky h2 positions
    function updateStickyHeadings() {
        const activeSection = document.querySelector('section.active');
        if (!activeSection) return;
        
        const heading = activeSection.querySelector('h2');
        if (!heading) return;
        
        const headerHeight = header.offsetHeight;
        heading.style.top = `${headerHeight}px`;
    }
    
    // Letter animation for h2 headings
    function animateHeadings() {
        const headings = document.querySelectorAll('.active h2');
        
        headings.forEach(heading => {
            // Skip if already animated
            if (heading.classList.contains('letter-animation')) return;
            
            // Add animation class
            heading.classList.add('letter-animation');
            
            // Get the text content
            const text = heading.textContent;
            
            // Clear existing content
            heading.textContent = '';
            
            // Add each letter or space wrapped in a span
            [...text].forEach((char, index) => {
                const span = document.createElement('span');
                
                // Preserve spaces by using a non-breaking space when needed
                if (char === ' ') {
                    span.innerHTML = '&nbsp;';
                } else {
                    span.textContent = char;
                }
                
                span.style.animationDelay = `${index * 0.05}s`;
                heading.appendChild(span);
            });
        });
    }
    
    // Scroll animation
    function initScrollAnimations() {
        const poems = document.querySelectorAll('.active .poem');
        
        // Create Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Calculate a staggered delay
                    const delay = index * 100; // 100ms between each poem
                    
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                    
                    // Stop observing after animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // viewport
            threshold: 0.1, // When at least 10% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Trigger a bit before the element comes into view
        });
        
        // Start observing each poem
        poems.forEach(poem => {
            observer.observe(poem);
        });
    }
    
    // Initialize animations for the initial active section
    initScrollAnimations();
    animateHeadings();
    updateStickyHeadings();
});