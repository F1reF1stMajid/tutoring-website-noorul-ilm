document.addEventListener('DOMContentLoaded', function() {  // Wait for DOM to load
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// script.js
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = +counter.dataset.target; // Convert to number
    let count = 0;
    const increment = target / 350; // Adjust divisor for speed

    function updateCount() {
        count += increment;
        counter.innerText = Math.ceil(count); // Round up to whole number

        if (count < target) {
            requestAnimationFrame(updateCount); // Smooth animation
        } else {
            counter.innerText = target; // Ensure target is displayed
        }
    }

    updateCount(); // Start the animation
});