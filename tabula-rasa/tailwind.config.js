/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],

  theme: {
    container: {
      center: true,
    },

    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },

    // colors: {
    //   negative: "#fecaca",
    //   positive: "#ecfccb",
    //   warning: "#fef9c3",
    // },

    extend: {},
  },

  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    darkTheme: "dark",
    themes: [
      {
        myCustomLightTheme: {
          "primary": "#38bdf8",
          "secondary": "#a855f7",
          "accent": "#0e7490",
          "neutral": "#71717a",
          "base-100": "#fafafa",
          "info": "#cbd5e1",
          "success": "#a3e635",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
