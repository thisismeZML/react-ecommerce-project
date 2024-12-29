/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans : ['DM Mono, sans-serif'],
    },
    extend: {
      colors: {
        primary: "#F35C7A"
      }
    },
  },
  plugins: [],
};
