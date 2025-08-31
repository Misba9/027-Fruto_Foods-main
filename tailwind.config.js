/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // default is Akaya (applied globally)
        akaya: ["Akaya Kanadaka", "sans-serif"],
        athiti: ["Athiti", "sans-serif"], // use only when needed
      },
    },
  },
  plugins: [],
}
