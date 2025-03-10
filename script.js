// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // *** Back to Top Button Functionality ***
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        // Check scroll position on page load
        if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.classList.add('visible');
        }

        // Update visibility on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // *** Smooth scrolling for internal links ***
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip handling the back-to-top button (it has its own handler above)
            if (this.classList.contains('back-to-top')) return;

            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});