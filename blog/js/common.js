// common.js - Shared JavaScript for all pages

// Navigation functionality
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');
const aboutDropdown = document.getElementById('aboutDropdown');

function toggleMenu() {
    const isActive = navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
}

function closeMenu() {
    navLinks.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle dropdown on mobile
if (aboutDropdown) {
    aboutDropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
        }
    });
}

if (burgerMenu) {
    burgerMenu.addEventListener('click', toggleMenu);
}

// Close menu when clicking on links (mobile)
const navItems = navLinks ? navLinks.querySelectorAll('a') : [];
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        navLinks && navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !burgerMenu.contains(e.target)) {
        closeMenu();
    }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

console.log('Jaywalk Blog - Common JavaScript loaded');