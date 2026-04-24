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

const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("formStatus");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    // Reset styles before submitting
    statusMessage.className = "hidden mt-4 p-4 text-sm rounded-lg font-medium";

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // SUCCESS STYLING (Soft green background, dark green text)
            form.reset();
            statusMessage.textContent = "Awesome! Your message has been sent successfully.";
            statusMessage.className = "block mt-4 p-4 text-sm text-green-800 bg-green-50 rounded-lg border border-green-200";
        } else {
            // ERROR STYLING (Soft red background, dark red text)
            const data = await response.json();
            if (Object.hasOwn(data, 'errors')) {
                statusMessage.textContent = data.errors.map(error => error.message).join(", ");
            } else {
                statusMessage.textContent = "Oops! There was a problem submitting your form.";
            }
            statusMessage.className = "block mt-4 p-4 text-sm text-red-800 bg-red-50 rounded-lg border border-red-200";
        }
    } catch (error) {
        // NETWORK ERROR STYLING
        statusMessage.textContent = "Oops! There was a network error. Please check your connection.";
        statusMessage.className = "block mt-4 p-4 text-sm text-red-800 bg-red-50 rounded-lg border border-red-200";
    }
});