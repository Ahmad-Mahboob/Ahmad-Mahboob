/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust if needed
    theme: {
        extend: {
            screens: {
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
