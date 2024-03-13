// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Highlight current section in navigation
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelectorAll('nav a').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

