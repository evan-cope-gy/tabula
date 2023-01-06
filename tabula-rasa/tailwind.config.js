/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    // colors: {
    //   negative: "#fecaca",
    //   positive: "#ecfccb",
    //   warning: "#fef9c3",
    // },

    extend: {},
  },

  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
}
