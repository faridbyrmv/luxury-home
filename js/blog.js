document.addEventListener('DOMContentLoaded', () => {
    // Toggle active class on navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');

            // Scroll to section
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Top-bar hide on scroll down and show on scroll up
    let lastScrollTop = 0;
    const topBar = document.querySelector('.top-bar');
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            topBar.style.top = '-50px'; // Hide top-bar
        } else {
            topBar.style.top = '0'; // Show top-bar
        }
        lastScrollTop = scrollTop;
    });
});
