let burgerBtn = document.querySelector('.burgerBtn');
let burgerMenu = document.querySelector('.burgerMenu');
let nav = document.querySelector('nav');
let main = document.querySelector('main');
let burgerCloseBtn = document.querySelector('.burgerCloseBtn');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('translate-x-full');
    burgerMenu.classList.add('translate-x-0');
    nav.classList.add('hidden');
    document.body.classList.add('overflow-hidden'); // For Preventing Scrolling While the Hamburger Menu is opened
});

burgerCloseBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('translate-x-0');
    burgerMenu.classList.add('translate-x-full');
    nav.classList.remove('hidden');
    document.body.classList.remove('overflow-hidden');

});

document.addEventListener('click', (e) => {
    if (
        !burgerMenu.contains(e.target) &&
        !burgerBtn.contains(e.target) &&
        burgerMenu.classList.contains('translate-x-0')
    ) {
        burgerMenu.classList.remove('translate-x-0');
        burgerMenu.classList.add('translate-x-full');
        nav.classList.remove('hidden');
        main.classList.add('mt-20');
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
});

AOS.init({
    duration: 500, // animation duration in ms
    delay: 100,    // delay before animation starts
    once: true     // animate only once
});

const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.classList.remove("py-3");
        navbar.classList.add("py-2");
    } else {
        navbar.classList.remove("py-2");
        navbar.classList.add("py-3");
    }
});