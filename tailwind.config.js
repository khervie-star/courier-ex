/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["'Josefin Sans', sans-serif"],
        mnt: ["Montserrat, sans-serif"],
        outfit: ["Outfit"],
      },
      backgroundImage: {
        "hero-pattern": "url('./Assets/Images/hero.jpeg')",
        "news-letter": "url('/src/Assets/Images/newsletter.jpeg')",
      },
    },
  },
  plugins: [],
};
