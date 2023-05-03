/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      "reception-btn-bg": "url('assets/Reception/btn-bg.png')",
      "connectWallet-btn-bg": "url('assets/Header/connectWalletBtn-bg.png')",
      "connectWallet-btn-bg-hover":
        "url('assets/Header/connectWalletBtn-bg-hover.png')",
      "menu-btn-bg": "url('assets/Header/menuBtn-bg.png')",
      "menu-btn-bg-hover": "url('assets/Header/menuBtn-bg-hover.png')",
      "page-menu-bg": "url('assets/Header/pageMenu-bg.png')",
    },
    colors: {
      "color-1": "#675335B2",
      "color-2": "#BDBF50",
      "color-3": "#A66E1A",
      "color-4": "#B68EE9",
      "color-5": "#8642DD",
    },
    extend: {},
    // fontFamily: {
    //   vcr: ["VCR OSD Mono", "sans-serif"],
    // },
  },
  plugins: [],
};
