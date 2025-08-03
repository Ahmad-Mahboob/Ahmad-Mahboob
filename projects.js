const projectsContainer = document.querySelector('#projects');

const projects = [
  {
    id: 1,
    name: "Calculator App",
    description: "I used HTML, CSS and JavaScript to Develop This Completely Functional Calculator App. This Calculator App Can Handle Basic Arithmetic Functions like addition, subtraction, etc. I used HTML, CSS and JavaScript to Develop This Completely Functional Calculator App. This Calculator App Can Handle Basic Arithmetic Functions like addition, subtraction, etc. I used HTML, CSS and JavaScript to Develop This Completely Functional Calculator App. This Calculator App Can Handle Basic Arithmetic Functions like addition, subtraction, etc.I used HTML, CSS and JavaScript to Develop This Completely Functional Calculator App. This Calculator App Can Handle Basic Arithmetic Functions like addition, subtraction, etc.",
    gitHubLink: "https://github.com/Ahmad-Mahboob/Tic-Tac-Toe-Game",
    publicLink: "https://ahmad-mahboob.github.io/Tic-Tac-Toe-Game/",
    imgSrc: "/resources/img/demo.jpg"
  },
  {
    id: 1,
    name: "Calculator App",
    description: "I used HTML, CSS and JavaScript to Develop This Completely Functional Calculator App. This Calculator App Can Handle Basic Arithmetic Functions like addition, subtraction, etc.",
    gitHubLink: "https://www.github.com",
    publicLink: "https://www.github.com",
    imgSrc: "/resources/img/demo.jpg"
  },
  {
    id: 1,
    name: "Calculator App",
    description: "I used HTML, CSS and JavaScript to Develop This Completely Functional Calculator App. This Calculator App Can Handle Basic Arithmetic Functions like addition, subtraction, etc.",
    gitHubLink: "https://www.github.com",
    publicLink: "https://www.github.com",
    imgSrc: "/resources/img/demo.jpg"
  },
  {
    id: 1,
    name: "Calculator App",
    description: "I used HTML, CSS and JavaScript to Develop This Completely Functional Calculator App. This Calculator App Can Handle Basic Arithmetic Functions like addition, subtraction, etc.",
    gitHubLink: "https://www.github.com",
    publicLink: "https://www.github.com",
    imgSrc: "/resources/img/demo.jpg"
  },
];






projectsContainer.innerHTML = '';


projects.forEach((project) => {
  projectsContainer.insertAdjacentHTML('beforeend', `<div
            data-aos="fade-up"
            data-aos-once="true"
            class="project w-88 h-96 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-112 lg:h-112 xl:w-128 xl:h-128 2xl:w-140 2xl:h-140 bg-gray-200 text-gray-800 shadow-lg shadow-gray-600 border-2 border-gray-300 pb-2 m-2 lg:m-4 rounded-xl transform transition-transform duration-300 hover:scale-105"
          >
            <div class="img w-full h-[55%] overflow-hidden rounded-t-xl">
              <img
                src="${project.imgSrc}"
                alt="Profile"
                class="object-cover bg-black"
              />
            </div>

            <div class="info p-1.5 flex flex-col justify-between">
              <div>
                <p
                  class="font-semibold text-lg leading-none md:text-2xl lg:text-3xl xl:text-4xl"
                >
                  ${project.name}
                </p>
                <span
                  class="project-desc block max-h-24 overflow-auto xl:text-xl relative custom-scrollbar"
                  data-full="${project.description}"
                >
                  <!-- Don't put the full description or substring here -->
                </span>
                <button class="toggle-btn cursor-pointer mt-2 text-sm text-blue-600 hover:underline focus:outline-none block">
                  Read More
                </button>
              </div>

              <div class="btns flex gap-2 justify-center">
                <button
                  class="px-2 py-1 lg:py-1 lg:px-3 xl:py-3 xl:px-4 2xl:py-4 2xl:px-6 bg-blue-600 rounded-md text-gray-100 transform transition-transform duration-300 hover:scale-105"
                >
                  <a href="${project.gitHubLink}" class="lg:text-xl xl:text-2xl 2xl:text-3xl"
                    >View Repo
                    <img
                      src="/resources/img/GitHub.png"
                      alt=""
                      class="h-5 w-5 xl:w-6 xl:h-6 2xl:h-8 2xl:w-8 inline pb-1"
                  /></a>
                </button>
                <button
                  class="px-2 py-1 lg:py-1 lg:px-3 xl:py-3 xl:px-4 2xl:py-4 2xl:px-6 bg-blue-600 rounded-md text-gray-100 transform transition-transform duration-300 hover:scale-105"
                >
                  <a href="${project.publicLink}" class="lg:text-xl xl:text-2xl 2xl:text-3xl"
                    >Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>`)
});
AOS.refresh();


const spans = document.querySelectorAll('.project-desc');
const buttons = document.querySelectorAll('.toggle-btn');
const excerptLength = 150;

spans.forEach((span, index) => {
  const btn = buttons[index];
  const fullText = span.dataset.full;
  let expanded = false;

  function updateText() {
    if (expanded) {
      span.textContent = fullText;
      btn.textContent = "See Less";
      span.classList.add('overflow-auto');

    } else {
      span.textContent = fullText.substring(0, excerptLength) + "...";
      btn.textContent = "Read More";
      span.classList.remove('overflow-auto')
    }

    // Append button again (since .textContent removes all inner elements)
    span.appendChild(btn);
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    expanded = !expanded;
    updateText();
  });

  updateText();
});
