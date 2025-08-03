var typed = new Typed("#typed", {
    strings: ["Full-Stack Web Developer", "Freelancer", "Tech Enthusiast"],
    typeSpeed: 120,
    backSpeed: 100,
    loop: true,
});


document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typedButton", {
        strings: ["Hire Me", "Let's Work Together", "Get In Touch", "Contact Me", "Let's Build Together", "Bring Your Idea to Life"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
        showCursor: false,
    });
});

new Typed(".textWhoAmI", {
    strings: ["Who Am I?", "About Me"],
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: false
});