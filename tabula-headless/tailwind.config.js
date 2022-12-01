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
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
      tablet: "640px",
      laptop: "768px",
      desktop: "1024px",
      watson: "1280px",
    },

    // colors: {
    //   negative: "#fecaca",
    //   positive: "#ecfccb",
    //   warning: "#fef9c3",
    // },

    extend: {},
  },

  plugins: [],
}
