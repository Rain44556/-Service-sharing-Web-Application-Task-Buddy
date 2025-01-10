/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   bgColor: "var(--bg_body)",
      //   bodyColor: "var(--color_body)",
      //   linkColor: "var(--color_link)"
      // },
      fontFamily: {
        headingFont: ["Merriweather", "serif"],
        bodyFont: ["Lato", "serif"],
        },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

