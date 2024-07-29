// JS/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Smooth scroll
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
            navbar.classList.remove('active');
        });
    });

    // Multiple text effect
    const multipleText = document.querySelector('.multiple-text');
    const texts = ['Developer', 'Tech Enthusiast', 'Problem Solver'];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (textIndex === texts.length) {
            textIndex = 0;
        }
        currentText = texts[textIndex];
        letter = currentText.slice(0, ++charIndex);

        multipleText.textContent = letter;
        if (letter.length === currentText.length) {
            textIndex++;
            charIndex = 0;
            setTimeout(type, 2000); // Pause before typing the next text
        } else {
            setTimeout(type, 150);
        }
    }

    type();

    // Scroll to top button
    const scrollTopBtn = document.querySelector('.footer-iconTop a');
    scrollTopBtn.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
