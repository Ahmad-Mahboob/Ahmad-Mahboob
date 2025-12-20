const skillContainer = document.querySelector('#skills-container');

const skills = [
    {
        name: 'HTML',
        img: '/resources/img/html-logo.webp'
    },
    {
        name: 'CSS',
        img: '/resources/img/CSS3.webp'
    },
    {
        name: 'JS',
        img: '/resources/img/JavaScript.webp'
    },
    {
        name: 'Tailwind CSS',
        img: '/resources/img/Tailwind-CSS.webp'
    },
    {
        name: 'NodeJS',
        img: '/resources/img/Node.js.webp'
    },
    {
        name: 'ExpressJS',
        img: '/resources/img/Express.webp',
        css_classes: 'invert'
    },
]

skillContainer.innerHTML = ''

skills.forEach((skill) => {
    skillContainer.insertAdjacentHTML('beforeend',

        `<div
        data-aos="fade-up"
        data-aos-delay="100"
        class="skill bg-neutral-800 text-gray-300 flex flex-col justify-between w-56 h-76 sm:w-68 sm:h-84 md:w-72 md:h-84 m-3 shadow-lg pb-4 pt-4 rounded-lg transform transition-transform duration-300 hover:scale-105"
        >
        <div class="img overflow-hidden pt-2">
        <img
        src="${skill.img}"
        alt="${skill.name} Icon"
        class="w-full h-[85%] object-contain ${skill.css_classes}"
        />
        </div>
        <p class="text-center font-semibold text-4xl md:text-5xl">${skill.name}</p>
        </div>`
    )

})


