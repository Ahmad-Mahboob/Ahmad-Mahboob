const skillContainer = document.querySelector('#skills-container');

const skills = [
    {
        name: 'HTML',
        img: '/Ahmad-Mahboob/resources/img/html-logo.png'
    },
    {
        name: 'CSS',
        img: '/Ahmad-Mahboob/resources/img/CSS3.png'
    },
    {
        name: 'JS',
        img: '/Ahmad-Mahboob/resources/img/JavaScript.png'
    },
    {
        name: 'Tailwind CSS',
        img: '/Ahmad-Mahboob/resources/img/Tailwind-CSS.png'
    },
    {
        name: 'NodeJS',
        img: '/Ahmad-Mahboob/resources/img/Node.js.png'
    },
    {
        name: 'ExpressJS',
        img: '/Ahmad-Mahboob/resources/img/Express.png',
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
