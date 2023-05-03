/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      "reception-btn-bg": "url('assets/Reception/btn-bg.png')",
    },
    colors: {
      "color-1": "#675335B2",
      "color-2": "#BDBF50",
      "color-3": "#A66E1A",
    },
    extend: {},
    // fontFamily: {
    //   vcr: ["VCR OSD Mono", "sans-serif"],
    // },
  },
  plugins: [],
};
