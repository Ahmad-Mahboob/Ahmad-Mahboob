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
        css_classes: 'dark:invert'
    },
]

skillContainer.innerHTML = ''

skills.forEach((skill) => {
    skillContainer.insertAdjacentHTML('beforeend',

        `<div
        data-aos="fade-up"
        data-aos-delay="100"
        class="skill bg-white dark:bg-[#1E293B] dark:text-gray-100 text-[#475569] flex flex-col justify-between w-40 h-48 md:grow sm:w-50 sm:h-60 md:w-44 md:h-64 md:max-w-50 shadow-lg pb-4 pt-4 rounded-lg transform transition-transform duration-300 hover:scale-105"
        >
        <div class="img overflow-hidden pt-2">
        <img
        src="${skill.img}"
        alt="${skill.name} Icon"
        class="w-full h-[85%] object-contain ${skill.css_classes}"
        loading="lazy"
        />
        </div>
        <p class="text-center font-semibold text-2xl sm:text-3xl md:text-4xl">${skill.name}</p>
        </div>`
    )

})


